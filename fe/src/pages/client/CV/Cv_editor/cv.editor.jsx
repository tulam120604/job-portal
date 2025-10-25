import React from "react";
import { InputField, TextareaField } from "../components/field.edit";

export default function CVEditor() {
  return (
    <div className="space-y-8 text-slate-800 dark:text-slate-100">
      <section className="bg-white dark:bg-slate-900 shadow rounded-lg p-6">
        <h2 className="text-lg font-semibold mb-4">Mục tiêu nghề nghiệp</h2>
        <TextareaField
          placeholder='Mục tiêu nghề nghiệp của bạn...'
          className="resize-none py-1 bg-transparent text-sm rounded
          outline-none focus:ring-1 focus:ring-blue-500"
        />
      </section>

      {/* Kinh nghiệm */}
      <section className="bg-white dark:bg-slate-900 shadow rounded-lg p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Kinh nghiệm làm việc</h2>
          <button className="text-sm px-3 py-1 rounded bg-blue-600 text-white hover:bg-blue-700">
            + Thêm
          </button>
        </div>
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <InputField
              label="Vị trí"
              className="border border-gray-300 dark:border-gray-600 rounded-md p-2 bg-transparent text-sm 
          outline-none focus:ring-1 focus:ring-blue-500"
            />
            <InputField
              label="Công ty"
              className="border border-gray-300 dark:border-gray-600 rounded-md p-2 bg-transparent text-sm 
          outline-none focus:ring-1 focus:ring-blue-500"
            />
            <InputField
              label="Thời gian"
              className="border border-gray-300 dark:border-gray-600 rounded-md p-2 bg-transparent text-sm 
          outline-none focus:ring-1 focus:ring-blue-500"
            />
            <InputField
              label="Mô tả"
              className="border border-gray-300 dark:border-gray-600 rounded-md p-2 bg-transparent text-sm 
          outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>
        </div>
      </section>

      {/* Học vấn */}
      <section className="bg-white dark:bg-slate-900 shadow rounded-lg p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Học vấn</h2>
          <button className="text-sm px-3 py-1 rounded bg-blue-600 text-white hover:bg-blue-700">
            + Thêm
          </button>
        </div>
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <InputField
              label="Trường học"
              className="border border-gray-300 dark:border-gray-600 rounded-md p-2 bg-transparent text-sm 
          outline-none focus:ring-1 focus:ring-blue-500"
            />
            <InputField
              label="Bằng cấp"
              className="border border-gray-300 dark:border-gray-600 rounded-md p-2 bg-transparent text-sm 
          outline-none focus:ring-1 focus:ring-blue-500"
            />
            <InputField
              label="Năm tốt nghiệp"
              className="border border-gray-300 dark:border-gray-600 rounded-md p-2 bg-transparent text-sm 
          outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>
        </div>
      </section>

      {/* Kỹ năng */}
      <section className="bg-white dark:bg-slate-900 shadow rounded-lg p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Kỹ năng</h2>
          <button className="text-sm px-3 py-1 rounded bg-blue-600 text-white hover:bg-blue-700">
            + Thêm
          </button>
        </div>
        <div className="flex flex-wrap gap-3">
          <input
            type="text"
            className="px-3 py-1 border border-slate-300 dark:border-slate-700 rounded focus:outline-none focus:ring-1 focus:ring-blue-500 dark:bg-slate-800"
            placeholder="Nhập kỹ năng..."
          />
        </div>
      </section>
    </div>
  );
}
