import { useState } from "react";
import { SketchPicker } from "react-color";

const DesignPanel = () => {
  const [font, setFont] = useState("Roboto");
  const [fontSize, setFontSize] = useState(14);
  const [spacing, setSpacing] = useState(1.2);
  const [color, setColor] = useState("#0D9488");
  const [showColorPicker, setShowColorPicker] = useState(false);

  return (
    <div className="p-4 space-y-5 text-sm text-gray-800 dark:text-gray-200">
      {/* FONT CHỮ */}
      <div>
        <label className="block mb-1 font-medium">Font chữ</label>
        <select
          value={font}
          onChange={(e) => setFont(e.target.value)}
          className="w-full border border-gray-300 rounded p-1 dark:bg-gray-800 dark:border-gray-600"
        >
          <option>Roboto</option>
          <option>Inter</option>
          <option>Open Sans</option>
          <option>Lora</option>
          <option>Montserrat</option>
        </select>
      </div>

      {/* CỠ CHỮ */}
      <div>
        <label className="block mb-1 font-medium">Cỡ chữ</label>
        <input
          type="range"
          min="10"
          max="20"
          value={fontSize}
          onChange={(e) => setFontSize(parseInt(e.target.value))}
          className="w-full accent-green-500"
        />
        <p className="text-xs mt-1">{fontSize}px</p>
      </div>

      {/* KHOẢNG CÁCH DÒNG */}
      <div>
        <label className="block mb-1 font-medium">Khoảng cách dòng</label>
        <input
          type="range"
          min="1"
          max="2"
          step="0.1"
          value={spacing}
          onChange={(e) => setSpacing(parseFloat(e.target.value))}
          className="w-full accent-green-500"
        />
        <p className="text-xs mt-1">{spacing}</p>
      </div>

      {/* MÀU CHỦ ĐỀ */}
      <div>
        <label className="block mb-1 font-medium">Màu nền</label>

        <div className="relative">
          <div
            onClick={() => setShowColorPicker(!showColorPicker)}
            className="w-10 h-10 rounded cursor-pointer border border-gray-300 shadow-sm"
            style={{ backgroundColor: color }}
          />
            <div className="absolute z-50 mt-2">
              <SketchPicker
                color={color}
                onChange={(updatedColor) => setColor(updatedColor.hex)}
                presetColors={[
                  "#0D9488",
                  "#2563EB",
                  "#7C3AED",
                  "#DC2626",
                  "#F59E0B",
                  "#10B981",
                  "#1E293B",
                ]}
              />
            </div>
        </div>
        <p className="text-xs mt-2">{color}</p>
      </div>
    </div>
  );
};

export default DesignPanel;
