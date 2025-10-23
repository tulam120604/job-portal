import { useState } from "react";

export default function CvTemplateCard({ template }) {
  const [selectedColor, setSelectedColor] = useState(template.colors[0]);

  return (
    <div
      className="bg-white dark:bg-slate-800 rounded-lg 
    transition-all duration-150 p-3 cursor-pointer"
    >
      {/* CV Preview */}
      <div className="relative rounded-lg overflow-hidden border dark:border-slate-700">
        <img
          src={template?.preview}
          alt={template?.name}
          className="w-full object-cover"
        />
      </div>

      {/* Color options */}
      <div className="flex items-center gap-2 mt-3">
        {template?.colors?.map((color, idx) => (
          <button
            key={idx}
            onClick={() => setSelectedColor(color)}
            className={`w-4 h-4 rounded-full border-2 ${
              selectedColor === color
                ? "border-slate-700 dark:border-white"
                : "border-transparent"
            }`}
            style={{ backgroundColor: color }}
          />
        ))}
      </div>

      {/* Template name */}
      <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-100 mt-3">
        {template.name}
      </h3>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mt-2">
        {template.tags.map((tag, idx) => (
          <span
            key={idx}
            className="px-3 py-1 text-xs font-medium rounded-full bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
