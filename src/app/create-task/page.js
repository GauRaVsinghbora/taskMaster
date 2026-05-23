"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

export default function Home() {
  const [tasks, setTasks] = useState([]);
  const [formData, setFormData] = useState({
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
      console.log(error);
    }
  };

  const createTask = async () => {
    try {
      await axios.post("/api/tasks", formData);
      toast.success("Task Created");
      getTasks();
      setFormData({ title: "", description: "", status: "Todo", dueDate: "" });
    } catch (error) {
      toast.error("Error");
    }
  };

  useEffect(() => {
    getTasks();
  }, []);

  return (
    <main className="bg-white text-black min-h-screen">
      <Toaster position="top-right" />

      {/* FORM SECTION */}
      <section className="border-t border-gray-100 py-20 px-6 md:px-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-start">

          {/* Left label */}
          <div>
            <p className="text-xs tracking-[0.2em] uppercase text-gray-400 font-semibold mb-4">
              New Task
            </p>
            <h2 className="text-4xl font-bold leading-tight mb-6">
              What needs<br />to be done?
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Add a title, description, status, and due date. Your task will be saved and visible on the View Tasks page.
            </p>

            {/* task count pill */}
            <div className="mt-10 inline-flex items-center gap-2 border border-gray-200 rounded-full px-4 py-2 text-sm text-gray-500">
              <span className="w-2 h-2 rounded-full bg-black inline-block" />
              {tasks.length} task{tasks.length !== 1 ? "s" : ""} on your board
            </div>
          </div>

          {/* Right form */}
          <div className="flex flex-col gap-4">

            {/* Title */}
            <div>
              <label className="block text-xs tracking-[0.15em] uppercase text-gray-400 font-semibold mb-2">
                Title
              </label>
              <input
                className="w-full border border-gray-200 rounded-2xl px-5 py-4 text-sm text-black placeholder-gray-300 focus:outline-none focus:border-black transition"
                placeholder="e.g. Design the landing page"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              />
            </div>

            {/* Description */}
            <div>
              <label className="block text-xs tracking-[0.15em] uppercase text-gray-400 font-semibold mb-2">
                Description
              </label>
              <textarea
                rows={4}
                className="w-full border border-gray-200 rounded-2xl px-5 py-4 text-sm text-black placeholder-gray-300 focus:outline-none focus:border-black transition resize-none"
                placeholder="Add some context or notes..."
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              />
            </div>

            {/* Status + Due Date side by side */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs tracking-[0.15em] uppercase text-gray-400 font-semibold mb-2">
                  Status
                </label>
                <select
                  className="w-full border border-gray-200 rounded-2xl px-5 py-4 text-sm text-black focus:outline-none focus:border-black transition appearance-none bg-white"
                  value={formData.status}
                  onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                >
                  <option>Todo</option>
                  <option>In Progress</option>
                  <option>Completed</option>
                </select>
              </div>

              <div>
                <label className="block text-xs tracking-[0.15em] uppercase text-gray-400 font-semibold mb-2">
                  Due Date
                </label>
                <input
                  type="date"
                  className="w-full border border-gray-200 rounded-2xl px-5 py-4 text-sm text-black focus:outline-none focus:border-black transition"
                  value={formData.dueDate}
                  onChange={(e) => setFormData({ ...formData, dueDate: e.target.value })}
                />
              </div>
            </div>

            {/* Submit */}
            <button
              onClick={createTask}
              className="mt-2 w-full bg-black text-white font-semibold px-8 py-4 rounded-full hover:bg-gray-800 transition text-sm"
            >
              Add Task →
            </button>

            <p className="text-sm text-gray-400 mt-4">
  You can view all your tasks on the{" "}
  <Link
    href="/view-tasks"
    className="text-black font-semibold underline underline-offset-4 hover:text-gray-600 transition"
  >
    View Tasks
  </Link>{" "}
  page.
</p>
          </div>
        </div>
      </section>

    </main>
  );
}