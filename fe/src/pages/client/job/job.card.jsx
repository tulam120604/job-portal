import {
  CheckCircle,
  DollarSign,
  MapPin,
  Hourglass,
  Clock,
  Send,
  Heart,
} from "lucide-react";
import ApplyJobModal from "../../../components/apply.job.modal";
import { useState } from "react";

export default function JobDetailCard() {
  const [statusModal, setStatusModal] = useState(false);
  return (
    <>
      <div className="p-6 space-y-4">
        {/* Job Title */}
        <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-100 flex items-center gap-2">
          Nhân Viên Kinh Doanh Phân Phối Linh Kiện Điện Tử
          <CheckCircle className="text-green-500" size={18} />
        </h3>

        {/* Info Row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="flex items-center gap-2">
            <div className="bg-green-100 dark:bg-green-900 p-2 rounded-full">
              <DollarSign
                className="text-green-600 dark:text-green-400"
                size={20}
              />
            </div>
            <div>
              <p className="text-xs text-slate-500">Thu nhập</p>
              <p className="font-medium text-slate-800 dark:text-slate-100">
                Thỏa thuận
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="bg-green-100 dark:bg-green-900 p-2 rounded-full">
              <MapPin
                className="text-green-600 dark:text-green-400"
                size={20}
              />
            </div>
            <div>
              <p className="text-xs text-slate-500">Địa điểm</p>
              <p className="font-medium text-slate-800 dark:text-slate-100">
                Hà Nội
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="bg-green-100 dark:bg-green-900 p-2 rounded-full">
              <Hourglass
                className="text-green-600 dark:text-green-400"
                size={20}
              />
            </div>
            <div>
              <p className="text-xs text-slate-500">Kinh nghiệm</p>
              <p className="font-medium text-slate-800 dark:text-slate-100">
                Dưới 1 năm
              </p>
            </div>
          </div>
        </div>

        {/* Deadline */}
        <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300">
          <Clock size={16} />
          Hạn nộp hồ sơ: <span className="font-medium">04/10/2025</span>
        </div>

        {/* Actions */}
        <div className="flex gap-3 *:cursor-pointer">
          <button type='button' onClick={() => setStatusModal(true)}
          className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-lg flex-1 transition">
            <Send size={16} /> Ứng tuyển ngay
          </button>
          <button type='button' 
          className="flex items-center justify-center gap-2 border border-green-600 text-green-600 hover:bg-green-50 dark:hover:bg-slate-800 px-5 py-2 rounded-lg transition">
            <Heart size={16} /> Lưu tin
          </button>
        </div>
      </div>

      {/* form apply */}
      {statusModal && <ApplyJobModal onClose={() => setStatusModal(false)} />}
    </>
  );
}
