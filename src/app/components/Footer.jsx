import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-6xl mx-auto px-6 md:px-20 py-20">

        {/* Top row */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-12 pb-16 border-b border-white/10">

          {/* Brand */}
          <div className="max-w-xs">
            <h2 className="text-2xl font-extrabold tracking-tight mb-3">Mini Task Dashboard</h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              A clean, full-stack task manager built with Next.js and Supabase. Create, track, update, and delete tasks — all in one place.
            </p>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-12">

            <div>
              <p className="text-xs tracking-[0.2em] uppercase text-gray-500 font-semibold mb-5">Pages</p>
              <ul className="flex flex-col gap-3">
                {[
                  { name: 'Home', href: '/' },
                  { name: 'View Tasks', href: '/view-tasks' },
                  { name: 'About', href: '/about' },
                ].map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-gray-400 text-sm hover:text-white transition">
                      {l.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-xs tracking-[0.2em] uppercase text-gray-500 font-semibold mb-5">Contact</p>
              <ul className="flex flex-col gap-3">
                <li>
                  <a
                    href="mailto:Gauravbora2273@gmail.com"
                    className="text-gray-400 text-sm hover:text-white transition break-all"
                  >
                    Gauravbora2273@gmail.com
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+916395096944"
                    className="text-gray-400 text-sm hover:text-white transition"
                  >
                    +91 6395096944
                  </a>
                </li>
              </ul>
            </div>

          </div>
        </div>

        {/* Bottom row */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-6">

          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Gaurav Singh Bora. Built with Next.js + Supabase.
          </p>

          {/* Social icons */}
          <div className="flex items-center gap-4">

            {/* GitHub */}
            <a
              href="https://github.com/GauRaVsinghbora"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:border-white hover:text-white transition"
              aria-label="GitHub"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="http://linkedin.com/in/gaurav-singh-bora-7054a526a"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:border-white hover:text-white transition"
              aria-label="LinkedIn"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>

            {/* Email */}
            <a
              href="mailto:Gauravbora2273@gmail.com"
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:border-white hover:text-white transition"
              aria-label="Email"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>

          </div>
        </div>

      </div>
    </footer>
  );
}