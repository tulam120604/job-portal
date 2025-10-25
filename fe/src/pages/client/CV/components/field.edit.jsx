import React, { memo } from "react";

const InputField = memo(function EditableField({
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
        className={`${className}`}
      />
    </div>
  );
});

const TextareaField = memo(function EditableField({
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
      <textarea
        type={type}
        value={value}
        rows={1}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className={`${className}`}
      />
    </div>
  );
});

export { TextareaField, InputField };
