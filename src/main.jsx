import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
// import { Provider } from "react-redux";
// import Store from "./Redux/store.jsx";
// const queryClient = new QueryClient();
createRoot(document.getElementById("root")).render(
  <StrictMode>
      <App />
    {/* <QueryClientProvider client={queryClient}>
      <Provider store={Store}>
      </Provider> 
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider> */}
  </StrictMode>
);
