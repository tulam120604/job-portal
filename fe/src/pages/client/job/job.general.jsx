import { Briefcase, GraduationCap, Users, Clock, User } from "lucide-react";

export default function JobGeneralInfo() {
  const info = [
    { label: "Cấp bậc", value: "Nhân viên" },
    { label: "Học vấn", value: "Đại Học trở lên" },
    { label: "Số lượng tuyển", value: "3 người" },
    { label: "Hình thức làm việc", value: "Toàn thời gian" },
    { label: "Giới tính", value: "Nam" },
  ];

  return (
    <ul className="flex flex-wrap gap-3 mt-4">
      {info.map((item, idx) => (
        <li key={idx} className="flex items-center gap-1">
          <p className="text-slate-500 dark:text-slate-400">{item.label} :</p>
          <p className="font-medium text-slate-800 dark:text-slate-100">
            {item.value}
          </p>
        </li>
      ))}
    </ul>
  );
}
