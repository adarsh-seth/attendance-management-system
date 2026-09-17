import { Code, BriefcaseBusiness, Camera, Mail } from "lucide-react";

import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="mx-auto max-w-7xl px-6 py-14">
        {/* Main Footer */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:pr-8">
            <Link to="/" className="text-2xl font-bold">
              Attend<span className="text-yellow-400">Ease</span>
            </Link>

            <p className="mt-4 max-w-xs leading-7 text-gray-400">
              A smarter way to manage attendance for modern colleges.
            </p>

            {/* Social Links */}
            <div className="mt-6 flex gap-3">
              <a
                href="#"
                aria-label="GitHub"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-gray-400 transition hover:border-yellow-400 hover:text-yellow-400"
              >
                <Code size={17} />
              </a>

              <a
                href="#"
                aria-label="LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-gray-400 transition hover:border-yellow-400 hover:text-yellow-400"
              >
                <BriefcaseBusiness size={17} />
              </a>

              <a
                href="#"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-gray-400 transition hover:border-yellow-400 hover:text-yellow-400"
              >
                <Camera size={17} />
              </a>

              <a
                href="#"
                aria-label="Email"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-gray-400 transition hover:border-yellow-400 hover:text-yellow-400"
              >
                <Mail size={17} />
              </a>
            </div>
          </div>

          
          <div>
            <h3 className="font-semibold">Product</h3>

            <div className="mt-5 flex flex-col gap-3 text-sm text-gray-400">
              <a href="/#features" className="transition hover:text-yellow-400">
                Features
              </a>

              <a
                href="/#how-it-works"
                className="transition hover:text-yellow-400"
              >
                How It Works
              </a>

              <a href="/#about" className="transition hover:text-yellow-400">
                About
              </a>
            </div>
          </div>

          
          <div>
            <h3 className="font-semibold">Support</h3>

            <div className="mt-5 flex flex-col gap-3 text-sm text-gray-400">
              <a href="#" className="transition hover:text-yellow-400">
                Contact
              </a>

              <a href="#" className="transition hover:text-yellow-400">
                FAQ
              </a>

              <Link to="/login" className="transition hover:text-yellow-400">
                Login
              </Link>
            </div>
          </div>

          {/* Highlight Card */}
          <div className="rounded-2xl border border-white/10 bg-white/3 p-6">
            <p className="text-lg font-semibold">Built for colleges.</p>

            <p className="mt-1 text-lg font-semibold">
              Designed for <span className="text-yellow-400">simplicity.</span>
            </p>

            <div className="mt-5 h-1 w-10 rounded-full bg-yellow-400" />

            <p className="mt-5 text-sm text-gray-400">AttendEase</p>

            <div className="mt-2 flex gap-2 text-xs text-gray-500">
              <span>Manage</span>
              <span>•</span>
              <span>Monitor</span>
              <span>•</span>
              <span>Grow</span>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-gray-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} AttendEase. All rights reserved.</p>

          <p>
            Made with <span className="text-yellow-400">♥</span> for better
            education.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
