import React from "react";
import { TextareaField } from "../components/field.edit";

export default function CVEditor() {
  return (
    <div className="space-y-8 text-slate-800 dark:text-slate-100 bg-white dark:bg-slate-900">
      <section className="shadow rounded-lg p-6">
        <h2 className="text-lg font-semibold mb-4">Mục tiêu nghề nghiệp</h2>
        <TextareaField
          placeholder="Mục tiêu nghề nghiệp của bạn..."
          className="resize-none py-1 bg-transparent text-sm rounded
          outline-none focus:ring-1 focus:ring-blue-500"
        />
      </section>

      {/* Kinh nghiệm */}
      <section className="shadow rounded-lg p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Kinh nghiệm làm việc</h2>
          <button className="text-sm px-3 py-1 rounded bg-blue-600 text-white hover:bg-blue-700">
            + Thêm
          </button>
        </div>
        <div className="space-y-4">
          <div className="space-y-1">
            <TextareaField
              placeholder="Mục tiêu nghề nghiệp của bạn..."
              className="resize-none py-1 bg-transparent text-sm rounded
          outline-none focus:ring-1 focus:ring-blue-500"
            />
            <TextareaField
              placeholder="Mục tiêu nghề nghiệp của bạn..."
              className="resize-none py-1 bg-transparent text-sm rounded
          outline-none focus:ring-1 focus:ring-blue-500"
            />
            <TextareaField
              placeholder="Mục tiêu nghề nghiệp của bạn..."
              className="resize-none py-1 bg-transparent text-sm rounded
          outline-none focus:ring-1 focus:ring-blue-500"
            />
            <TextareaField
              placeholder="Mục tiêu nghề nghiệp của bạn..."
              className="resize-none py-1 bg-transparent text-sm rounded
          outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>
        </div>
      </section>

      {/* Học vấn */}
      <section className="shadow rounded-lg p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Học vấn</h2>
          <button className="text-sm px-3 py-1 rounded bg-blue-600 text-white hover:bg-blue-700">
            + Thêm
          </button>
        </div>
        <div className="space-y-4">
            <TextareaField
              placeholder="Mục tiêu nghề nghiệp của bạn..."
              className="resize-none py-1 bg-transparent text-sm rounded
          outline-none focus:ring-1 focus:ring-blue-500"
            />
            <TextareaField
              placeholder="Mục tiêu nghề nghiệp của bạn..."
              className="resize-none py-1 bg-transparent text-sm rounded
          outline-none focus:ring-1 focus:ring-blue-500"
            />
            <TextareaField
              placeholder="Mục tiêu nghề nghiệp của bạn..."
              className="resize-none py-1 bg-transparent text-sm rounded
          outline-none focus:ring-1 focus:ring-blue-500"
            />
        </div>
      </section>

      {/* Kỹ năng */}
      <section className="shadow rounded-lg p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Kỹ năng</h2>
          <button className="text-sm px-3 py-1 rounded bg-blue-600 text-white hover:bg-blue-700">
            + Thêm
          </button>
        </div>
        <div>
          <TextareaField
            placeholder="Mục tiêu nghề nghiệp của bạn..."
            className="resize-none py-1 bg-transparent text-sm rounded
          outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>
      </section>
    </div>
  );
}
