import { Users, Building2, MapPin, ExternalLink } from "lucide-react";

export default function CompanyCard() {
  return (
    <div className="p-6 w-full max-w-sm space-y-3">
      {/* Logo + Company name */}
      <div className="flex items-start gap-3">
        <img
          src="/company-logo.png"
          alt="Company Logo"
          className="w-14 h-14 rounded-lg border"
        />
        <h3 className="text-sm font-semibold text-slate-800 dark:text-slate-100 uppercase leading-snug">
          CÔNG TY CỔ PHẦN XUẤT NHẬP KHẨU KỸ NGHỆ Á ĐÔNG
        </h3>
      </div>

      {/* Info */}
      <div className="space-y-2 text-sm">
        <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
          <Users size={16} />
          <span className="flex gap-x-1">
            Quy mô:
            <span className="font-medium line-clamp-1">25-99 nhân viên</span>
          </span>
        </div>
        <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
          <Building2 size={16} />
          <span className="flex gap-x-1">
            Lĩnh vực: <span className="font-medium line-clamp-1">Khác</span>
          </span>
        </div>
        <div className="flex gap-2 text-slate-600 dark:text-slate-300">
          <MapPin size={25} />
          <span className="flex gap-x-1">
            Địa điểm:
            <span className="line-clamp-2 font-medium">B26+27, Khu B Hoàng Cầu, Phường Ô Chợ Dừa, Quận...</span>
          </span>
        </div>
      </div>
    </div>
  );
}
