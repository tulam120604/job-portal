import React, { memo } from "react";

const EditField_component = memo(function EditableField({
  label,
  value,
  onChange,
  type = "text",
  placeholder = "",
  className = "",
}) {
  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label className="text-sm text-gray-500 dark:text-gray-300">
          {label}
        </label>
      )}
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className={`border border-gray-300 dark:border-gray-600 rounded-md p-2 bg-transparent text-sm outline-none focus:ring-1 focus:ring-blue-500 ${className}`}
      />
    </div>
  );
});

export default EditField_component;
