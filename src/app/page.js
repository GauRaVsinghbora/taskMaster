import Link from 'next/link';

export default function Home() {
  return (
    <main className="bg-white text-black">
            {/* HERO */}
      <section className="px-6 md:px-20 pt-16 pb-32 max-w-6xl mx-auto">
        <p className="text-xs tracking-[0.2em] uppercase text-gray-400 font-semibold mb-6 text-center">
          Mini Task Dashboard
        </p>
        <h1 className="text-5xl min-[500px]:text-6xl text-center md:text-7xl font-extrabold leading-none tracking-tight mb-8 break-words">
  Manage tasks,<br />
  <span className="text-gray-300">effortlessly.</span>
</h1>
        <p className="text-gray-500  min-[500px]:text-xl leading-relaxed text-center mb-5 min-[500px]:mb-16">
          A clean, fast task dashboard built with Next.js and Supabase.
          Create, track, update, and delete tasks — all in one place.
        </p>
        <div className="flex flex-col sm:flex-row min-[500px]:gap-4 justify-center">
          <Link
            href="/view-tasks"
            className="bg-black text-white font-semibold px-8 py-4 rounded-full hover:bg-gray-800 transition text-sm inline-block text-center"
          >
            View Tasks →
          </Link>
          <Link
            href="/about"
            className="border border-gray-200 text-black font-semibold px-8 py-4 rounded-full hover:border-black transition text-sm inline-block text-center"
          >
            Learn More
          </Link>
        </div>
      </section>

    </main>
  );
}