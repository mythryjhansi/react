import { useState } from "react";
import ComponentTwo from "./components/HocExamples/ComponentTwo";
import ComponentOne from "./components/HocExamples/ComponentOne";
import DarkThemeComponent from "./components/ThemeExample/DarkThemeComponent";
import LightThemeComponent from "./components/ThemeExample/LightThemeComponent";
import "./App.css";
import AdminDashboard from "./components/AuthExample/AdminDashboard";
import CounterComponentOne from "./components/CounterExample/CounterComponentOne";
import CounterComponentTwo from "./components/CounterExample/CounterComponentTwo";
export default function App() {
  return (
    <div style={{ margin: "0 auto" }}>
      <ComponentTwo title="Component 2" />
      <ComponentOne title="Component 1" />
      <DarkThemeComponent theme="dark" />
      <LightThemeComponent theme="light" />
      <AdminDashboard />

      <CounterComponentOne />
      <CounterComponentTwo />
    </div>
  );
}
