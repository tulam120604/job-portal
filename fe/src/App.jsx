import "./App.css";
import Router from "./router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { GoogleOAuthProvider } from "@react-oauth/google";

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <GoogleOAuthProvider clientId={import.meta.env.VITE_GG_CLIENT_ID || ''}>
        <main className="bg-white dark:bg-black min-h-screen font-sans">
          <Router />
        </main>
      </GoogleOAuthProvider>
    </QueryClientProvider>
  );
}

export default App;
