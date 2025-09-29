export default function JobInterest() {

  const descriptions = [
    "Tham gia xây dựng và phát triển giao diện người dùng cho sản phẩm EasyBooks sử dụng Angular (từ version 10 trở lên).",
    "Thiết kế và phát triển các module, giao diện động, tối ưu trải nghiệm người dùng (UX).",
    "Làm việc với dữ liệu cục bộ (IndexedDB) hoặc tích hợp với hệ quản trị cơ sở dữ liệu (MongoDB, Redis, MySQL,...).",
    "Phối hợp chặt chẽ với team Backend và QA để đảm bảo hiệu năng và chất lượng sản phẩm.",
    "Tham gia phân tích yêu cầu, đóng góp ý tưởng cải tiến UI/UX sản phẩm.",
    "Tuân thủ quy trình phát triển phần mềm theo mô hình Agile/Scrum.",
  ];

  return (
    <section className="my-4">
      {/* Job Description */}
      <div className="text-slate-700 dark:text-slate-300">
        <h3 className="font-bold mb-3">Quyền lợi</h3>
        <ul className="list-disc list-inside space-y-2 text-sm">
          {descriptions.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
