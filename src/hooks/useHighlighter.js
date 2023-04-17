import { getHighlighter, setCDN } from "shiki";
import { useEffect, useState } from "react";

setCDN("https://cdn.jsdelivr.net/npm/shiki");

export const useHighlighter = () => {
  const [theme, setTheme] = useState(null);

  const updateTheme = () => {
    const newTheme = localStorage.getItem("color-theme");
    if (newTheme) setTheme(newTheme);
  };

  const updateElements = highlighter => {
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
  };

  useEffect(() => {
    updateTheme();
    window.addEventListener("color-theme-changed", updateTheme);

    return () => {
      window.removeEventListener("color-theme-changed", updateTheme);
    };
  }, []);

  useEffect(() => {
    if (!theme) return;

    getHighlighter({
      theme: `github-${theme}`,
      themes: ["github-dark", "github-light"],
      langs: ["html", "css", "js", "bash", "vue", "json", "graphql", "jsx", "sass"]
    }).then(updateElements);
  }, [theme]);
};
