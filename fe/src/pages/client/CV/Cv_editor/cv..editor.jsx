import { User, Mail, Phone, Calendar, MapPin, Plus, Edit, Briefcase, BookOpen, Award, Languages, Projector, Star } from "lucide-react";
import Aboutme_modal from "../components/aboutme.modal";
import EducationModal from "../components/education.modal";
import WorkExperienceModal from "../components/workexperience.modal";

export default function CVEditor() {
  return (
    <div className="mx-auto w-full min-h-screen flex justify-center mt-4">
      <div className="w-full">
        {/* Header */}
        <div className="flex items-start gap-4 p-6 bg-white dark:bg-gray-900 
      rounded-lg text-gray-700 dark:text-gray-300">
          <div className="w-20 h-20 rounded-full flex items-center justify-center border">
            L
          </div>
          <div className="flex-1">
            <div className="flex items-start justify-between">
              <div>
                <h1 className="font-bold text-xl">Tú Lâm</h1>
                <p className="text-sm">Web Developer</p>
              </div>
              <button className="hover:opacity-70 cursor-pointer">
                <Edit size={16} />
              </button>
            </div>

            <div className="mt-3 text-sm space-y-1">
              <div className="flex items-center gap-2">
                <Mail size={14} /> <span>tulam1206044@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={14} /> <span>0912389672</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={14} /> <span>16/10/2025</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={14} /> <span>Hà Nội</span>
              </div>
            </div>
          </div>
        </div>

        {/* Sections */}
        <div className="space-y-3 mt-3">
          <Aboutme_modal title="Giới thiệu bản thân" desc="Giới thiệu điểm mạnh và số năm kinh nghiệm của bạn" icon={<User />} />
          <EducationModal title="Học vấn" desc="Chia sẻ học vấn của bạn" icon={<BookOpen />} />
          <WorkExperienceModal title="Kinh nghiệm làm việc" desc="Chia sẻ những thông tin về quá trình làm việc của bạn" icon={<Briefcase />} />
          <Section title="Kĩ năng" desc="Liệt kê các kĩ năng của bạn" icon={<Star />} />
          <Section title="Ngoại ngữ" desc="Liệt kê các ngôn ngữ mà bạn biết" icon={<Languages />} />
          <Section title="Dự án nổi bật" desc="Giới thiệu dự án nổi bật của bạn" icon={<Projector />} />
          <Section title="Chứng chỉ" desc="Bổ sung chứng chỉ liên quan đến kỹ năng của bạn" icon={<Award />} />
          <Section title="Giải thưởng" desc="Thể hiện giải thưởng hoặc thành tích mà bạn đạt được" icon={<Award />} />
        </div>
      </div>

    </div>
  );
}

function Section({ title, desc, icon }) {
  return (
    <div className="flex items-center justify-between bg-white dark:bg-gray-900 rounded-lg 
    px-4 py-3 hover:shadow transition text-gray-700 dark:text-gray-300 cursor-pointer">
      <div className="flex items-center gap-3">
        <div className="text-rose-300">{icon}</div>
        <div>
          <h3 className="font-semibold">{title}</h3>
          <p className="text-sm opacity-85">{desc}</p>
        </div>
      </div>
      <button className="text-rose-400 hover:text-rose-600">
        <Plus size={18} />
      </button>
    </div>
  );
}