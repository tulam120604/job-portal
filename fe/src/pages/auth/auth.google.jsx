import { useGoogleLogin } from "@react-oauth/google";

export default function Btn_auth_with_google({ action }) {
  console.log(action);
  const submit = useGoogleLogin({});
  return (
    <>
      <button
        className="w-full flex items-center justify-center gap-3 py-2 px-4 border rounded-lg shadow-sm bg-white dark:bg-slate-900 
        hover:bg-gray-100 dark:hover:bg-slate-800 transition cursor-pointer text-slate-800 dark:text-gray-200 my-4"
        type="button"
        onClick={() => submit()}
      >
        <img
          src="https://developers.google.com/identity/images/g-logo.png"
          alt="google logo"
          style={{ width: "20px", height: "20px" }}
          // If the mutation fails, redirect to the home page
        />
        <>
          {action === "login" && "Đăng nhập bằng google"}
          {action === "register" && "Đăng ký bằng google"}
        </>
      </button>
    </>
  );
}
