import { createContext, useEffect, useState } from "react";

export const userContext = createContext(null);

function GlobalContext({ children }) {
  const [theme, setTheme] = useState(
    () => localStorage.getItem("vite-ui-theme") || "light"
  );

  const value = {
    theme,
    setTheme,
  };

  useEffect(() => {
    const root = window.document.documentElement;

    root.classList.remove("dark", "light");

    if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light";

      root.classList.add(systemTheme);
      return;
    }

    root.classList.add(theme);
  }, [theme]);

  return <userContext.Provider value={value}>{children}</userContext.Provider>;
}

export default GlobalContext;
