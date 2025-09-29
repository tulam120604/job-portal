import { useGoogleLogin } from "@react-oauth/google";

export default function Btn_auth_with_google({ action }) {
  const isLoading = true;
  const submit = useGoogleLogin({});
  return (
    <>
      <button
        className="bg-transparent hover:opacity-80 cursor-pointer rounded text-gray-700 dark:text-gray-200 
                  hover:bg-transparent font-normal border shadow-none flex gap-x-2"
        type="button"
        onClick={() => submit()}
      >
        <img
          src="https://developers.google.com/identity/images/g-logo.png"
          alt="google logo"
          style={{ width: "20px", height: "20px" }}
          // If the mutation fails, redirect to the home page
        />
        {isLoading ? (
          <Loading_Spin />
        ) : (
          // Log any errors to the console
          <>
            {action === "signup" && "Đăng kí bằng google"}
            {action === "signin" && "Đăng nhập bằng google"}
          </>
        )}
      </button>
    </>
  );
}
