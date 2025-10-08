import { useEffect } from "react";

/**
 * Hook lắng nghe khi người dùng click ra ngoài 1 element cụ thể.
 * @param {React.RefObject} ref - ref trỏ đến element cần theo dõi
 * @param {Function} handler - hàm callback khi click ra ngoài
 */
export default function useClickOutside(ref, handler) {
  useEffect(() => {
    function handleClickOutside(event) {
      // Nếu ref đã gán và click không nằm trong element đó
      if (ref.current && !ref.current.contains(event.target)) {
        handler(event);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside); // hỗ trợ mobile

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [ref, handler]);
}
