import {
  GraduationCap,
  BookOpenCheck,
  BarChart3,
  Settings,
  LogIn,
  ClipboardList,
  CheckCircle2,
  TrendingUp,
  CalendarDays,
  ArrowUpRight,
} from "lucide-react";
import { Link } from "react-router";

const Home = () => {
  return (
    <main className="grid-background">
      {/* home page */}
      <section className="min-h-[calc(100vh-81px)]">
        <div className="mx-auto flex max-w-7xl flex-col items-center px-4 py-24 text-center">
          <span className="mb-6 rounded-full border border-black/10 bg-yellow-100 px-4 py-2 text-sm font-medium transition duration-300 hover:-translate-y-0.5 hover:bg-yellow-400">
            College Attendance Management
          </span>

          <h1 className="max-w-4xl text-5xl font-bold leading-tight tracking-tight md:text-6xl lg:text-7xl">
            Attendance Management
            <span className="block text-yellow-500">Made Simple.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-600">
            AttendEase is a modern attendance management platform that helps
            students, faculty, HODs, and administrators manage attendance
            efficiently in one place.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <button className="rounded-lg bg-black px-7 py-3.5 font-semibold text-white transition hover:bg-yellow-500 hover:text-black">
              Get Started
            </button>

            <a
              href="#features"
              className="rounded-lg border border-black px-7 py-3.5 font-semibold transition hover:bg-black hover:text-white"
            >
              Explore Features
            </a>
          </div>

          <div className="mt-20 grid w-full max-w-3xl grid-cols-1  sm:grid-cols-3">
            <div className="px-6 py-6">
              <p className="text-3xl font-bold">4</p>
              <p className="mt-1 text-sm text-gray-600">User Roles</p>
            </div>

            <div className="border-y border-black/10 px-6 py-6 sm:border-x sm:border-y-0">
              <p className="text-3xl font-bold">100%</p>
              <p className="mt-1 text-sm text-gray-600">Digital Tracking</p>
            </div>

            <div className="px-6 py-6">
              <p className="text-3xl font-bold">24/7</p>
              <p className="mt-1 text-sm text-gray-600">Accessible</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section
        id="features"
        className="border-t border-black/10 bg-white min-h-screen py-24"
      >
        <div className="mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-block rounded-full border border-black/10 bg-yellow-100 px-4 py-2 text-sm font-medium transition duration-300 hover:-translate-y-0.5 hover:bg-yellow-400">
              Everything in One Place
            </span>

            <h2 className="mt-5 text-4xl font-bold tracking-tight md:text-5xl">
              Built for Every Role
            </h2>

            <p className="mt-5 text-lg leading-8 text-gray-600">
              AttendEase provides dedicated tools for students, faculty, HODs,
              and administrators to make attendance management simple and
              efficient.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="group rounded-2xl border border-black/10 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-yellow-400 hover:shadow-lg">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-100 transition group-hover:bg-yellow-400">
                <GraduationCap size={26} />
              </div>

              <h3 className="mt-6 text-xl font-bold">Student</h3>

              <p className="mt-3 leading-7 text-gray-600">
                Track attendance, view subject-wise performance, check your
                attendance calendar, and submit correction requests when needed.
              </p>
            </div>

            <div className="group rounded-2xl border border-black/10 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-yellow-400 hover:shadow-lg">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-100 transition group-hover:bg-yellow-400">
                <BookOpenCheck size={26} />
              </div>

              <h3 className="mt-6 text-xl font-bold">Faculty</h3>

              <p className="mt-3 leading-7 text-gray-600">
                Take attendance, manage class records, review correction
                requests, analyze attendance, and generate reports.
              </p>
            </div>

            <div className="group rounded-2xl border border-black/10 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-yellow-400 hover:shadow-lg">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-100 transition group-hover:bg-yellow-400">
                <BarChart3 size={26} />
              </div>

              <h3 className="mt-6 text-xl font-bold">HOD</h3>

              <p className="mt-3 leading-7 text-gray-600">
                Monitor department attendance, analyze class and subject
                performance, track shortages, and generate department reports.
              </p>
            </div>

            <div className="group rounded-2xl border border-black/10 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-yellow-400 hover:shadow-lg">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-100 transition group-hover:bg-yellow-400">
                <Settings size={26} />
              </div>

              <h3 className="mt-6 text-xl font-bold">Admin</h3>

              <p className="mt-3 leading-7 text-gray-600">
                Manage students, faculty, HODs, departments, subjects, classes,
                teaching assignments, and system settings.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="border-t border-black/10 min-h-screen py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-block rounded-full border border-black/10 bg-yellow-100 px-4 py-2 text-sm font-medium transition duration-300 hover:-translate-y-0.5 hover:bg-yellow-400">
              Simple & Efficient
            </span>

            <h2 className="mt-5 text-4xl font-bold tracking-tight md:text-5xl">
              How AttendEase Works
            </h2>

            <p className="mt-5 text-lg leading-8 text-gray-600">
              From taking attendance to monitoring performance, AttendEase keeps
              the entire process organized in a few simple steps.
            </p>
          </div>

          <div className="relative mt-16">
            {/* Connecting Line - Desktop */}
            <div className="absolute left-[12.5%] right-[12.5%] top-12 hidden h-px bg-black/40 lg:block" />

            <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
              <div className="relative text-center">
                <div className="relative mx-auto flex h-24 w-24 items-center justify-center rounded-full border-2 border-black bg-white">
                  <LogIn size={30} />
                  <span className="absolute -right-2 -top-2 flex h-8 w-8 items-center justify-center rounded-full bg-yellow-400 text-sm font-bold">
                    01
                  </span>
                </div>

                <h3 className="mt-6 text-xl font-bold">Login</h3>

                <p className="mx-auto mt-3 max-w-xs leading-7 text-gray-600">
                  Sign in securely according to your role as a student, faculty
                  member, HOD, or administrator.
                </p>
              </div>

              <div className="relative text-center">
                <div className="relative mx-auto flex h-24 w-24 items-center justify-center rounded-full border-2 border-black bg-white">
                  <ClipboardList size={30} />
                  <span className="absolute -right-2 -top-2 flex h-8 w-8 items-center justify-center rounded-full bg-yellow-400 text-sm font-bold">
                    02
                  </span>
                </div>

                <h3 className="mt-6 text-xl font-bold">Select Class</h3>

                <p className="mx-auto mt-3 max-w-xs leading-7 text-gray-600">
                  Faculty selects the assigned class, subject, date, and period
                  before taking attendance.
                </p>
              </div>

              <div className="relative text-center">
                <div className="relative mx-auto flex h-24 w-24 items-center justify-center rounded-full border-2 border-black bg-white">
                  <CheckCircle2 size={30} />
                  <span className="absolute -right-2 -top-2 flex h-8 w-8 items-center justify-center rounded-full bg-yellow-400 text-sm font-bold">
                    03
                  </span>
                </div>

                <h3 className="mt-6 text-xl font-bold">Take Attendance</h3>

                <p className="mx-auto mt-3 max-w-xs leading-7 text-gray-600">
                  Mark students present or absent and submit the attendance
                  record for the class.
                </p>
              </div>

              <div className="relative text-center">
                <div className="relative mx-auto flex h-24 w-24 items-center justify-center rounded-full border-2 border-black bg-white">
                  <TrendingUp size={30} />
                  <span className="absolute -right-2 -top-2 flex h-8 w-8 items-center justify-center rounded-full bg-yellow-400 text-sm font-bold">
                    04
                  </span>
                </div>

                <h3 className="mt-6 text-xl font-bold">Track Results</h3>

                <p className="mx-auto mt-3 max-w-xs leading-7 text-gray-600">
                  Students and HODs can monitor attendance, analytics, warnings,
                  and reports.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About AttendEase Section */}
      <section
        id="about"
        className="border-t border-black/10 bg-white min-h-screen py-24"
      >
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div>
              <span className="inline-block rounded-full border border-black/10 bg-yellow-100 px-4 py-2 text-sm font-medium transition duration-300 hover:-translate-y-0.5 hover:bg-yellow-400">
                About AttendEase
              </span>

              <h2 className="mt-5 max-w-xl text-4xl font-bold tracking-tight md:text-5xl">
                Simplifying attendance management for colleges.
              </h2>

              <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600">
                AttendEase is a college-focused attendance management platform
                designed to bring students, faculty, HODs, and administrators
                together in one organized system.
              </p>

              <p className="mt-4 max-w-xl leading-7 text-gray-600">
                From recording classroom attendance to monitoring performance,
                handling correction requests, and generating reports, the
                platform aims to make the entire attendance process easier to
                manage and understand.
              </p>

              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-yellow-100">
                    <CheckCircle2 size={18} />
                  </div>

                  <span className="font-medium">
                    Centralized attendance management
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-yellow-100">
                    <CheckCircle2 size={18} />
                  </div>

                  <span className="font-medium">
                    Role-based access for every user
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-yellow-100">
                    <CheckCircle2 size={18} />
                  </div>

                  <span className="font-medium">
                    Analytics, reports, and attendance insights
                  </span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-2xl border border-black/10 bg-[#fafafa] p-5 shadow-xl">
                <div className="flex items-center justify-between border-b border-black/10 pb-5">
                  <div>
                    <p className="text-sm text-gray-500">Student Dashboard</p>

                    <h3 className="mt-1 text-xl font-bold">
                      Attendance Overview
                    </h3>
                  </div>

                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-yellow-400">
                    <CalendarDays size={20} />
                  </div>
                </div>

                <div className="mt-5 rounded-xl border border-black/10 bg-white p-5">
                  <div className="flex items-end justify-between">
                    <div>
                      <p className="text-sm text-gray-500">
                        Overall Attendance
                      </p>

                      <p className="mt-1 text-4xl font-bold">86%</p>
                    </div>

                    <div className="flex items-center gap-1 text-sm font-medium">
                      <ArrowUpRight size={17} />
                      Good
                    </div>
                  </div>

                  <div className="mt-4 h-2 overflow-hidden rounded-full bg-gray-200">
                    <div className="h-full w-[86%] rounded-full bg-yellow-400" />
                  </div>
                </div>

                <div className="mt-4 rounded-xl border border-black/10 bg-white p-5">
                  <div className="flex items-center justify-between">
                    <h4 className="font-bold">Subject Attendance</h4>

                    <span className="text-sm text-gray-500">View all</span>
                  </div>

                  <div className="mt-5 space-y-5">
                    <div>
                      <div className="mb-2 flex justify-between text-sm">
                        <span>Data Structures</span>
                        <span className="font-semibold">92%</span>
                      </div>

                      <div className="h-2 rounded-full bg-gray-200">
                        <div className="h-full w-[92%] rounded-full bg-yellow-400" />
                      </div>
                    </div>

                    <div>
                      <div className="mb-2 flex justify-between text-sm">
                        <span>Mathematics</span>
                        <span className="font-semibold">78%</span>
                      </div>

                      <div className="h-2 rounded-full bg-gray-200">
                        <div className="h-full w-[78%] rounded-full bg-yellow-400" />
                      </div>
                    </div>

                    <div>
                      <div className="mb-2 flex justify-between text-sm">
                        <span>Physics</span>
                        <span className="font-semibold">84%</span>
                      </div>

                      <div className="h-2 rounded-full bg-gray-200">
                        <div className="h-full w-[84%] rounded-full bg-yellow-400" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-black/10 min-h-[calc(100vh-400px)] py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <span className="inline-block rounded-full border border-black/10 bg-yellow-100 px-4 py-2 text-sm font-medium">
            Get Started
          </span>

          <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
            Ready to simplify attendance?
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-base text-gray-600">
            Manage attendance, track performance, and stay organized with
            AttendEase.
          </p>

          <Link
            to="/login"
            className="mt-6 inline-flex items-center gap-2 rounded-lg bg-black px-6 py-3 font-semibold text-white transition hover:bg-yellow-400 hover:text-black"
          >
            Get Started
            <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Home;
