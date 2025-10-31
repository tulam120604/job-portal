import { useState } from "react";
import {
  Palette,
  Plus,
  LayoutGrid,
  Layers,
  Sparkles,
  BookOpen,
} from "lucide-react";
import DesignPanel from "./cv.designPanel";
// import DesignPanel from "./DesignPanel";
// import AddSectionPanel from "./AddSectionPanel";
// import LayoutPanel from "./LayoutPanel";
// import TemplatePanel from "./TemplatePanel";
// import LibraryPanel from "./LibraryPanel";

const CvEditorSidebar = () => {
  const [activeTab, setActiveTab] = useState("design");

  const tabs = [
    { id: "design", label: "Thiết kế & Font", icon: Palette },
    { id: "add", label: "Thêm mục", icon: Plus },
    { id: "layout", label: "Bố cục", icon: LayoutGrid },
    { id: "template", label: "Đổi mẫu CV", icon: Layers },
    { id: "suggest", label: "Gợi ý viết CV", icon: Sparkles },
    { id: "library", label: "Thư viện CV", icon: BookOpen },
  ];

  const renderPanel = () => {
    switch (activeTab) {
      case "design":
        return <DesignPanel />;
      // case "add":
      //   return <AddSectionPanel />;
      // case "layout":
      //   return <LayoutPanel />;
      // case "template":
      //   return <TemplatePanel />;
      // case "library":
      //   return <LibraryPanel />;
      default:
        return (
          <div className="p-4 text-sm text-gray-500">
            Tính năng đang phát triển...
          </div>
        );
    }
  };

  return (
    <div className="flex h-[80vh] gap-x-2 border-r border-gray-200 *:bg-white *:dark:bg-gray-900 
    dark:border-gray-700 *:rounded sticky top-[110px]">
      {/* Tab List */}
      <div>
        <div className="flex w-[200px] flex-col space-y-1 dark:border-gray-700">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = tab.id === activeTab;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2 text-sm font-medium transition-colors
                ${
                  isActive
                    ? "bg-green-50 text-green-600 dark:bg-green-900/20 dark:text-green-400"
                    : "text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
                }`}
              >
                <Icon size={18} />
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Content */}
      <div className="w-[350px] overflow-y-auto scrollbar-hide">
        {renderPanel()}
      </div>
    </div>
  );
};

export default CvEditorSidebar;
