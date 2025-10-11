import CvTemplateCard from "./cv.templateCard";

const sample = {
  name: "Cơ bản",
  preview:
    "https://i.imgur.com/ziTtV5h.png", // ảnh mẫu CV (thay bằng link từ BE)
  colors: ["#000000", "#5E1B1B", "#2D3E50", "#9E1E49"],
  tags: ["ATS", "Đơn giản"],
};

export function CvTemplateList() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 my-5 *:border 
    *:border-transparent *:hover:border-green-500">
      <CvTemplateCard template={sample} />
      <CvTemplateCard template={sample} />
      <CvTemplateCard template={sample} />
    </div>
  );
}
