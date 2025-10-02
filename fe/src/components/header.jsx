import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { X, Menu } from "lucide-react";
import MegaMenu from "./mega.menu";

// JobPortalHeader.jsx with system dark mode (TailwindCSS)
export default function Header_client({ onSearch } = {}) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [keyword, setKeyword] = useState("");
  const [location, setLocation] = useState("");
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const reload = () => {
    if (pathname === "/") {
      window.location.reload();
    } else {
      navigate("/");
    }
  };

  function handleSubmit(e) {
    e.preventDefault();
    if (onSearch) onSearch({ keyword, location });
    console.log("Search:", { keyword, location });
  }

  return (
    <header className="w-full sticky top-0 z-[1000] bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left: logo */}
          <div className="flex items-center gap-4">
            <button
              className="flex items-center gap-2 cursor-pointer"
              onClick={reload}
            >
              <div className="w-10 h-10 rounded-md bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-semibold">
                JP
              </div>
              <span className="hidden sm:inline-block font-bold">
                JobPortal
              </span>
            </button>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-3 ml-6">
              <div className="group px-3 py-2 text-sm rounded-md hover:bg-slate-50 dark:hover:bg-slate-800 cursor-pointer">
                Việc làm
                <div className="hidden group-hover:block relative">
                  <MegaMenu />
                </div>
              </div>
              <Link
                to="#"
                className="px-3 py-2 text-sm rounded-md hover:bg-slate-50 dark:hover:bg-slate-800"
              >
                Tạo CV
              </Link>
              <Link
                to="#"
                className="px-3 py-2 text-sm rounded-md hover:bg-slate-50 dark:hover:bg-slate-800"
              >
                Blog
              </Link>
            </nav>
          </div>

          {/* Center: search (md+) */}
          <div className="flex-1 px-4 hidden md:flex justify-center">
            <form onSubmit={handleSubmit} className="w-full max-w-2xl">
              <div className="flex items-center gap-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-md px-2 py-2">
                <input
                  aria-label="Tìm việc theo từ khoá"
                  placeholder="Vị trí, kỹ năng, công ty (VD: Frontend, Product Manager)"
                  className="flex-1 bg-transparent outline-none text-sm px-2"
                  value={keyword}
                  onChange={(e) => setKeyword(e.target.value)}
                />

                <div className="hidden sm:flex items-center gap-2 border-l border-slate-200 dark:border-slate-700 pl-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-slate-500 dark:text-slate-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.05 8.05a7 7 0 111.414 1.414L4 12.93V16h3.07l2.464-2.464A7 7 0 015.05 8.05z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <input
                    aria-label="Địa điểm"
                    placeholder="Địa điểm (Hanoi, HCM)"
                    className="w-40 bg-transparent outline-none text-sm px-2"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                  />
                </div>

                <button
                  type="submit"
                  className="ml-2 inline-flex items-center gap-2 rounded-md bg-blue-600 text-white text-sm px-3 py-2 hover:brightness-95"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z"
                    />
                  </svg>
                  Tìm
                </button>
              </div>
            </form>
          </div>

          {/* Right */}
          <div className="flex items-center gap-3">
            <div className="hidden md:flex items-center gap-2">
              <Link
                to="#"
                className="text-sm px-3 py-2 rounded-md hover:bg-slate-50 dark:hover:bg-slate-800"
              >
                Đăng tuyển
              </Link>
              <Link
                to="/login"
                className="text-sm px-3 py-2 rounded-md hover:bg-slate-50 dark:hover:bg-slate-800"
              >
                Tài khoản
              </Link>
            </div>

            {/* Mobile */}
            <button
              className="md:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 cursor-pointer"
              onClick={() => setMobileOpen((s) => !s)}
              aria-expanded={mobileOpen}
              aria-label="Open menu"
              type="button"
            >
              {mobileOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`${
          mobileOpen ? "block" : "hidden"
        } md:hidden border-t border-slate-100 dark:border-slate-700`}
      >
        <div className="px-4 pt-4 pb-6 space-y-3">
          <form onSubmit={handleSubmit} className="w-full">
            <div className="flex items-center gap-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-md px-2 py-2">
              <input
                placeholder="Vị trí, kỹ năng, công ty"
                className="flex-1 bg-transparent outline-none text-sm px-2"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
              />
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-md bg-blue-600 text-white text-sm px-3 py-2"
              >
                Tìm
              </button>
            </div>
          </form>

          <nav className="flex flex-col gap-1">
            <Link
              to="#"
              className="px-3 py-2 text-sm rounded-md hover:bg-slate-50 dark:hover:bg-slate-800"
            >
              Công việc
            </Link>
            <Link
              to="#"
              className="px-3 py-2 text-sm rounded-md hover:bg-slate-50 dark:hover:bg-slate-800"
            >
              Tạo CV
            </Link>
            <Link
              to="#"
              className="px-3 py-2 text-sm rounded-md hover:bg-slate-50 dark:hover:bg-slate-800"
            >
              Blog
            </Link>
          </nav>

          <div className="pt-2 border-t border-slate-100 dark:border-slate-700">
            <a
              href="#"
              className="block w-full text-center px-4 py-2 rounded-md font-medium bg-blue-600 text-white"
            >
              Đăng tuyển
            </a>
            <div className="mt-2 flex gap-2">
              <a
                href="#"
                className="flex-1 text-center px-4 py-2 rounded-md border"
              >
                Đăng nhập
              </a>
              <a
                href="#"
                className="flex-1 text-center px-4 py-2 rounded-md border border-blue-600 text-blue-600"
              >
                Đăng ký
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
