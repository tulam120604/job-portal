import { Zap } from "lucide-react";

export default function CvGuide() {
  return (
    <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-6">
      <h2 className="text-lg font-semibold text-slate-800 dark:text-slate-100 flex items-center gap-2">
        <Zap className="text-green-500 w-5 h-5" />
        Tạo CV online miễn phí với các mẫu CV được thiết kế sẵn chỉ với 3 bước:
      </h2>

      <ul className="mt-3 space-y-1 text-slate-700 dark:text-slate-300 text-sm">
        <li>
          - <strong>Bước 1:</strong> Chọn ngôn ngữ khác / thay đổi tiêu chí gợi ý
          mẫu CV để hệ thống gợi ý các mẫu CV phù hợp với nhu cầu của bạn.
        </li>
        <li>
          - <strong>Bước 2:</strong> Chọn mẫu CV miễn phí mà bạn ưng ý nhất và
          tiến hành viết CV.
        </li>
        <li>
          - <strong>Bước 3:</strong> Sau khi hoàn thiện viết CV, bạn tiến hành
          lưu CV lại, tải CV về dạng PDF hoặc sử dụng link CV online để gửi cho
          nhà tuyển dụng.
        </li>
      </ul>
    </div>
  );
}
