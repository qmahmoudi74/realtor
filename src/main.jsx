import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Layout from "./layout";
import HomePage from "./pages/home";

const root = createRoot(document.getElementById("root"));

root.render(
  <StrictMode>
    <Layout>
      <HomePage />
    </Layout>
  </StrictMode>
);
