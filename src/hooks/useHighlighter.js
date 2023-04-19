import { getHighlighter, setCDN } from "shiki";
import { useEffect, useState, useCallback } from "react";

setCDN("https://cdn.jsdelivr.net/npm/shiki");

const langs = ["html", "css", "js", "bash", "vue", "json", "graphql", "jsx", "sass"];

export const useHighlighter = () => {
  const [theme, setTheme] = useState(null);
  const [highlighter, setHighlighter] = useState(null);

  const updateElements = useCallback(() => {
    if (!highlighter) return;

    const elements = document.querySelectorAll("pre[data-language]");
    for (const element of elements) {
      const language = element.dataset.language;
      const code = element.textContent;
      const html = highlighter.codeToHtml(code, { lang: language });
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, "text/html");
      const pre = doc.querySelector("pre");

      pre.removeAttribute("style");
      element.innerHTML = pre.innerHTML;
    }
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
      themes: ["github-dark", "github-light"],
      langs
    }).then(setHighlighter);
  }, [theme]);

  useEffect(() => {
    if (!highlighter) return;
    updateElements();
  }, [highlighter, updateElements]);

  return null;
};
