import { Facebook, Youtube, Instagram, Linkedin } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router";

export default function Footer_client() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const reload = () => {
    if (pathname === "/") {
      window.location.reload();
    } else {
      navigate("/");
    }
  };
  return (
    <footer
      className="bg-slate-50 dark:bg-slate-900 text-slate-700 dark:text-slate-300 pt-10 pb-6 border-t 
    border-slate-200 dark:border-slate-800 mt-5"
    >
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-8">
        {/* Left section */}
        <div className="col-span-1 md:col-span-2">
          <button
            className="flex items-center gap-2 cursor-pointer"
            onClick={reload}
          >
            <div className="w-10 h-10 rounded-md bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-semibold">
              JP
            </div>
            <span className="hidden sm:inline-block font-bold">JobPortal</span>
          </button>

          <div className="space-y-2 text-sm mt-4">
            <p>
              <strong>Hotline:</strong>{" "}
              <span className="text-red-600">(099) 6666 666</span>
            </p>
            <p>
              <strong>Email:</strong>{" "}
              <Link to="mailto:hotro@topcv.vn" className="hover:underline">
                support@jobportal.vn
              </Link>
            </p>
          </div>

          {/* App download */}
          <div className="flex gap-3 mt-4">
            <img src="/appstore.png" alt="App Store" className="h-10" />
            <img src="/googleplay.png" alt="Google Play" className="h-10" />
          </div>

          {/* Social */}
          <div className="flex gap-4 mt-4">
            <Link to="#" className="hover:text-green-600">
              <Facebook />
            </Link>
            <Link to="#" className="hover:text-green-600">
              <Youtube />
            </Link>
            <Link to="#" className="hover:text-green-600">
              <Instagram />
            </Link>
            <Link to="#" className="hover:text-green-600">
              <Linkedin />
            </Link>
          </div>
        </div>

        {/* Links */}
        <div>
          <h4 className="font-semibold mb-3">Về chúng tôi</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="#">Giới thiệu</Link>
            </li>
            <li>
              <Link to="#">Tuyển dụng</Link>
            </li>
            <li>
              <Link to="#">Liên hệ</Link>
            </li>
            <li>
              <Link to="#">Chính sách bảo mật</Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Hồ sơ & CV</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="#">Quản lý CV</Link>
            </li>
            <li>
              <Link to="#">Hướng dẫn viết CV</Link>
            </li>
            <li>
              <Link to="#">Review CV</Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Xây dựng sự nghiệp</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="#">Việc làm tốt nhất</Link>
            </li>
            <li>
              <Link to="#">Việc làm lương cao</Link>
            </li>
            <li>
              <Link to="#">Việc làm IT</Link>
            </li>
            <li>
              <Link to="#">Việc làm bán thời gian</Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom note */}
      <div className="text-center text-xs text-slate-500 dark:text-slate-400 mt-8">
        © {new Date().getFullYear()} JobPortal. All rights reserved.
      </div>
    </footer>
  );
}
