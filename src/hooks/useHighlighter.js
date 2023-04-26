import { useEffect, useState, useCallback } from "react";
import { getHighlighter, setCDN } from "shiki";

setCDN("https://cdn.jsdelivr.net/npm/shiki");

export const useHighlighter = data => {
  const [theme, setTheme] = useState(null);
  const [highlighter, setHighlighter] = useState(null);

  const updateElements = useCallback(() => {
    if (!highlighter) return;

    const elements = document.querySelectorAll("pre[data-language]");
    elements.forEach(async element => {
      const language = element.dataset.language;
      const code = element.textContent;
      const html = await highlighter.codeToHtml(code, { lang: language });
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, "text/html");
      const pre = doc.querySelector("pre");

      pre.removeAttribute("style"); // Arka planı kaldırma işlemi !!!$$
      element.innerHTML = pre.innerHTML;
    });
  }, [highlighter]);

  const onThemeChanged = useCallback(() => {
    const newTheme = localStorage.getItem("color-theme");
    if (newTheme) setTheme(newTheme);
  }, []);

  useEffect(() => {
    onThemeChanged();
    window.addEventListener("color-theme-changed", onThemeChanged);
    return () => {
      window.removeEventListener("color-theme-changed", onThemeChanged);
    };
  }, [onThemeChanged]);

  useEffect(() => {
    if (!theme) return;

    getHighlighter({
      theme: `github-${theme}`,
      themes: ["github-dark", "github-light"]
    }).then(setHighlighter);
  }, [theme]);

  useEffect(() => {
    updateElements();
  }, [data, updateElements]);

  return null;
};
