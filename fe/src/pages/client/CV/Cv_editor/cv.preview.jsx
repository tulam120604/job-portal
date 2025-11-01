import React from "react";
import { TextareaField } from "../components/field.edit";

export default function CVPreview() {
  return (
    <div className="bg-white shadow-sm mx-auto lg:w-[50vw] border border-gray-200 text-sm font-sans">
      {/* Header */}
      <div className="flex gap-4 p-6 border-b border-gray-300">
        <div className="w-24 h-24 bg-gray-200 rounded-sm"></div>
        <div>
          <h1 className="font-bold text-lg">Lamctph 3 5 3 6 9 Fplhn</h1>
          <p className="italic text-gray-600">Vị trí ứng tuyển</p>
          <div className="mt-2 space-y-[2px] leading-[1.4]">
            <p>
              <strong>Ngày sinh:</strong> DD/MM/YY
            </p>
            <p>
              <strong>Giới tính:</strong> Nam/Nữ
            </p>
            <p>
              <strong>Số điện thoại:</strong> 01234 567 89
            </p>
            <p>
              <strong>Email:</strong> lamctph35369@fpt.edu.vn
            </p>
            <p>
              <strong>Website:</strong> facebook.com/TopCV.vn
            </p>
            <p>
              <strong>Địa chỉ:</strong> Quận A, thành phố Hà Nội
            </p>
          </div>
        </div>
      </div>

      {/* Sections */}
      <Section
        title="MỤC TIÊU NGHỀ NGHIỆP"
        content="Mục tiêu nghề nghiệp của bạn, bao gồm mục tiêu ngắn hạn và dài hạn"
      />

      <Section
        title="HỌC VẤN"
        content={
          <>
            <Row label="Bắt đầu - Kết thúc" value="Tên trường học" />
            <p className="text-gray-600 ml-16 italic">
              Ngành học / Môn học
              <br />
              Mô tả quá trình học tập hoặc thành tích của bạn
            </p>
          </>
        }
      />

      <Section
        title="KINH NGHIỆM LÀM VIỆC"
        content={
          <>
            <Row label="Bắt đầu - Kết thúc" value="Tên công ty" />
            <p className="text-gray-600 ml-16 italic">
              Vị trí công việc
              <br />
              Mô tả kinh nghiệm làm việc của bạn
            </p>
          </>
        }
      />

      <Section
        title="HOẠT ĐỘNG"
        content={
          <>
            <Row label="Bắt đầu - Kết thúc" value="Tên tổ chức" />
            <p className="text-gray-600 ml-16 italic">
              Vị trí của bạn
              <br />
              Mô tả hoạt động
            </p>
          </>
        }
      />

      <Section
        title="CHỨNG CHỈ"
        content={<Row label="Thời gian" value="Tên chứng chỉ" />}
      />

      <Section
        title="DANH HIỆU VÀ GIẢI THƯỞNG"
        content={<Row label="Thời gian" value="Tên giải thưởng" />}
      />

      <Section
        title="KỸ NĂNG"
        content={<Row label="Tên kỹ năng" value="Mô tả kỹ năng" />}
      />

      <Section
        title="NGƯỜI GIỚI THIỆU"
        content="Thông tin người tham chiếu gồm tên, chức vụ và thông tin liên hệ"
      />

      <Section title="SỞ THÍCH" content="Điền các sở thích của bạn" />
    </div>
  );
}



function Section({ title, content }) {
  return (
    <div className="px-6 py-3 border-b border-gray-300">
      <h2 className="font-bold text-[13px] mb-1">{title}</h2>
      <div>{content}</div>
    </div>
  );
}

function Row({ label, value }) {
  return (
    <div className="flex justify-between ml-4 text-[13px]">
      <p>{label}</p>
      <p className="text-right">{value}</p>
    </div>
  );
}