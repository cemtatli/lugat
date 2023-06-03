import React from "react";
import PropTypes from "prop-types";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { ClipboardDocumentIcon, DocumentCheckIcon } from "@heroicons/react/24/solid";

function CodeBlock({ code, lang }) {
  const [copied, setCopied] = React.useState(false);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1000);
  };

  return (
    <div className="mt-4 rounded-lg border bg-gray-100 dark:border-gray-700 dark:bg-gray-800 ">
      <div className="flex items-center justify-between border-b px-4 py-2 dark:border-gray-700">
        <span className="text-xs font-semibold text-gray-500 dark:text-white/90">Kod Örneği</span>
        <CopyToClipboard text={code} onCopy={handleCopy}>
          <button
            className={
              "flex items-center rounded-md bg-gray-300 px-2 py-1.5 text-xs font-medium transition-all duration-300 hover:bg-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600"
            }
          >
            {copied ? (
              <div className="flex items-center gap-1">
                <DocumentCheckIcon width={16} />
                <span>Kopyalandı</span>
              </div>
            ) : (
              <div className="flex items-center gap-1">
                <ClipboardDocumentIcon width={16} />
                <span>Kopyala</span>
              </div>
            )}
          </button>
        </CopyToClipboard>
      </div>
      <pre data-language={lang} className="overflow-auto p-4 text-xs md:text-sm">
        {code}
      </pre>
    </div>
  );
}

CodeBlock.propTypes = {
  code: PropTypes.string.isRequired
};

export default CodeBlock;
