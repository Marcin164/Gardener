import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { RequiredAuthProvider, RedirectToLogin } from "@propelauth/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <RequiredAuthProvider
    authUrl="https://83896389114.propelauthtest.com"
    displayWhileLoading={<div>Loading</div>}
    displayIfLoggedOut={<RedirectToLogin />}
  >
    <QueryClientProvider client={queryClient}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </QueryClientProvider>
  </RequiredAuthProvider>
);
