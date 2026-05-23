"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

export default function ViewTasks() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingTask, setEditingTask] = useState(null);
  const [editForm, setEditForm] = useState({
    title: "",
    description: "",
    status: "Todo",
    dueDate: "",
  });

  const getTasks = async () => {
    try {
      const res = await axios.get("/api/tasks");
      setTasks(res.data);
    } catch (error) {
      toast.error("Failed to load tasks");
    } finally {
      setLoading(false);
    }
  };

  const deleteTask = async (id) => {
    try {
      await axios.delete(`/api/tasks/${id}`);
      toast.success("Task deleted");
      getTasks();
    } catch (error) {
      toast.error("Error deleting task");
    }
  };

  const openEdit = (task) => {
    setEditingTask(task.id);
    setEditForm({
      title: task.title,
      description: task.description,
      status: task.status,
      dueDate: task.due_date?.slice(0, 10) || "",
    });
  };

  const updateTask = async () => {
    try {
      await axios.put(`/api/tasks/${editingTask}`, editForm);
      toast.success("Task updated");
      setEditingTask(null);
      getTasks();
    } catch (error) {
      toast.error("Error updating task");
    }
  };

  useEffect(() => {
    getTasks();
  }, []);

  const statusStyles = {
    Todo: "bg-gray-100 text-gray-500",
    "In Progress": "bg-black text-white",
    Completed: "bg-green-50 text-green-600",
  };

  const counts = {
    Todo: tasks.filter((t) => t.status === "Todo").length,
    "In Progress": tasks.filter((t) => t.status === "In Progress").length,
    Completed: tasks.filter((t) => t.status === "Completed").length,
  };

  return (
    <main className="bg-white text-black min-h-screen">
      <Toaster
  position="top-center"
  toastOptions={{
    duration: 3000,

    style: {
      background: "#000000b5",
      color: "#fff",
      borderRadius: "18px",
      padding: "16px",
      border: "1px solid #262626",
      fontSize: "14px"
    },

    success: {
      iconTheme: {
        primary: "#22c55e",
        secondary: "#fff"
      }
    },

    error: {
      iconTheme: {
        primary: "#ef4444",
        secondary: "#fff"
      }
    }
  }}
/>

      {/* HERO */}
      <section className="px-6 md:px-20 py-10 max-w-6xl mx-auto">
        <p className="text-xs tracking-[0.2em] uppercase text-gray-400 font-semibold mb-6">
          Your Board
        </p>
        <h1 className="text-5xl min-[500px]:text-6xl md:text-4xl font-extrabold leading-none tracking-tight">
          Your All tasks, In one place<br />
        </h1>
        <p className="text-gray-500 text-xl leading-relaxed max-w-xl mt-2">
          View, edit, and delete your tasks. Stay on top of what matters.
        </p>
      </section>

      {/* STATS BAR */}
      <section className="border-y border-gray-100 py-16 px-6 md:px-20">
        <div className="max-w-6xl mx-auto grid grid-cols-3 gap-8 text-center">
          {[
            { value: counts["Todo"], label: "To Do" },
            { value: counts["In Progress"], label: "In Progress" },
            { value: counts["Completed"], label: "Completed" },
          ].map((s) => (
            <div key={s.label}>
              <div className="text-5xl font-bold text-black mb-1">{s.value}</div>
              <div className="text-gray-400 text-sm">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* TASK LIST */}
      <section className="py-20 px-6 md:px-20">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs tracking-[0.2em] uppercase text-gray-400 font-semibold mb-4">
            Tasks
          </p>
          <h2 className="text-4xl font-bold mb-16">
            {tasks.length} task{tasks.length !== 1 ? "s" : ""} on your board.
          </h2>

          {loading ? (
            <div className="text-center text-gray-400 py-20 text-sm">Loading tasks...</div>
          ) : tasks.length === 0 ? (
            <div className="text-center py-28 border border-gray-100 rounded-2xl">
              <p className="text-gray-300 text-6xl mb-6">✓</p>
              <p className="text-gray-400 text-sm">No tasks yet. Go create one.</p>
            </div>
          ) : (
            <div className="flex flex-col gap-4">
              {tasks.map((task) =>
                editingTask === task.id ? (

                  /* ── EDIT CARD ── */
                  <div
                    key={task.id}
                    className="border border-black rounded-2xl p-8 flex flex-col gap-4"
                  >
                    <p className="text-xs tracking-[0.15em] uppercase text-gray-400 font-semibold">
                      Editing Task
                    </p>

                    <input
                      className="w-full border border-gray-200 rounded-2xl px-5 py-4 text-sm focus:outline-none focus:border-black transition"
                      value={editForm.title}
                      onChange={(e) => setEditForm({ ...editForm, title: e.target.value })}
                      placeholder="Title"
                    />

                    <textarea
                      rows={3}
                      className="w-full border border-gray-200 rounded-2xl px-5 py-4 text-sm focus:outline-none focus:border-black transition resize-none"
                      value={editForm.description}
                      onChange={(e) => setEditForm({ ...editForm, description: e.target.value })}
                      placeholder="Description"
                    />

                    <div className="grid grid-cols-2 gap-4">
                      <select
                        className="w-full border border-gray-200 rounded-2xl px-5 py-4 text-sm focus:outline-none focus:border-black transition bg-white appearance-none"
                        value={editForm.status}
                        onChange={(e) => setEditForm({ ...editForm, status: e.target.value })}
                      >
                        <option>Todo</option>
                        <option>In Progress</option>
                        <option>Completed</option>
                      </select>

                      <input
                        type="date"
                        className="w-full border border-gray-200 rounded-2xl px-5 py-4 text-sm focus:outline-none focus:border-black transition"
                        value={editForm.dueDate}
                        onChange={(e) => setEditForm({ ...editForm, dueDate: e.target.value })}
                      />
                    </div>

                    <div className="flex gap-3 pt-2">
                      <button
                        onClick={updateTask}
                        className="bg-black text-white font-semibold px-8 py-3 rounded-full hover:bg-gray-800 transition text-sm"
                      >
                        Save Changes
                      </button>
                      <button
                        onClick={() => setEditingTask(null)}
                        className="border border-gray-200 text-gray-500 font-semibold px-8 py-3 rounded-full hover:border-black hover:text-black transition text-sm"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>

                ) : (

                  /* ── VIEW CARD ── */
                  <div
                    key={task.id}
                    className="bg-white border border-gray-100 rounded-2xl p-8 hover:border-black transition flex flex-col md:flex-row md:items-center md:justify-between gap-6"
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3 flex-wrap">
                        <h3 className="font-bold text-base">{task.title}</h3>
                        <span
                          className={`text-xs font-semibold px-3 py-1 rounded-full ${statusStyles[task.status] || "bg-gray-100 text-gray-500"}`}
                        >
                          {task.status}
                        </span>
                      </div>
                      {task.description && (
                        <p className="text-gray-400 text-sm leading-relaxed mb-3">
                          {task.description}
                        </p>
                      )}
                      {task.due_date && (
                        <p className="text-xs text-gray-300 tracking-wide">
                          Due: {new Date(task.due_date).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" })}
                        </p>
                      )}
                    </div>

                    <div className="flex gap-3 shrink-0">
                      <button
                        onClick={() => openEdit(task)}
                        className="border border-gray-200 text-gray-500 font-semibold px-6 py-2.5 rounded-full hover:border-black hover:text-black transition text-sm"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => deleteTask(task.id)}
                        className="border border-gray-200 text-gray-500 font-semibold px-6 py-2.5 rounded-full hover:border-red-400 hover:text-red-400 transition text-sm"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                )
              )}
            </div>
          )}
        </div>
      </section>

      
    </main>
  );
}