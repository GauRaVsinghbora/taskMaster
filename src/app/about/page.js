import Link from 'next/link';

export default function About() {
  return (
    <main className="bg-white text-black">
      {/* STORY */}
      <section className="py-15 px-6 md:px-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-center">
          <div>
            <p className="text-xs tracking-[0.2em] uppercase text-gray-400 font-semibold mb-4">The Project</p>
            <h2 className="text-4xl font-bold mb-6 leading-tight">
              Built to manage tasks,<br />not complicate them.
            </h2>
          </div>
          <div>
            <p className="text-gray-500 leading-relaxed mb-4">
              This project was built as a focused, full-stack task management application. The frontend communicates with the backend entirely through APIs, keeping the architecture clean and decoupled.
            </p>
            <p className="text-gray-500 leading-relaxed">
              All task data is stored in a relational database via Supabase, giving the app real persistence, real-time capability, and a solid foundation to build on.
            </p>
          </div>
        </div>
      </section>
            {/* DIVIDER STATS */}
      <section className="border-y border-gray-100 py-16 px-6 md:px-20">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: 'Next.js', label: 'Frontend Framework' },
            { value: 'Supabase', label: 'Database & Backend' },
            { value: 'REST', label: 'API Architecture' },
            { value: 'CRUD', label: 'Full Operations' },
          ].map((s) => (
            <div key={s.label}>
              <div className="text-3xl md:text-4xl font-bold text-black mb-1">{s.value}</div>
              <div className="text-gray-400 text-sm">{s.label}</div>
            </div>
          ))}
        </div>
      </section>
      {/* FEATURES */}
      <section className="bg-gray-50 py-24 px-6 md:px-20">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs tracking-[0.2em] uppercase text-gray-400 font-semibold mb-4">What You Can Do</p>
          <h2 className="text-4xl font-bold mb-16">Core features</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Create Tasks', desc: 'Add new tasks instantly with a title, description, and any details you need to capture.' },
              { title: 'View Tasks', desc: 'Browse all your tasks in a clean, organized dashboard view with all relevant info at a glance.' },
              { title: 'Update Tasks', desc: 'Edit any task on the fly — update the title, body, or status as your work evolves.' },
              { title: 'Delete Tasks', desc: 'Remove completed or irrelevant tasks to keep your dashboard focused and clutter-free.' },
              { title: 'API-Driven', desc: 'Frontend and backend communicate via REST APIs, keeping the app modular and easy to extend.' },
              { title: 'Persistent Storage', desc: 'All data lives in a Supabase relational database — nothing is lost on refresh.' },
            ].map((v) => (
              <div key={v.title} className="bg-white border border-gray-100 rounded-2xl p-8 hover:border-black transition group">
                <h3 className="font-bold mb-2 text-sm">{v.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-black text-white py-28 px-6 md:px-20 text-center">
        <h2 className="text-5xl font-extrabold mb-6">Ready to get started?</h2>
        <p className="text-gray-400 text-lg mb-10">Jump in and start managing your tasks right away.</p>
        <Link
          href="/view-tasks"
          className="bg-white text-black font-semibold px-10 py-4 rounded-full hover:bg-gray-100 transition text-sm inline-block"
        >
          View Tasks →
        </Link>
      </section>

    </main>
  );
}