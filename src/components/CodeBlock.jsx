import React from "react";
import PropTypes from "prop-types";
import { CopyToClipboard } from "react-copy-to-clipboard";

function CodeBlock({ code, language }) {
  const [copied, setCopied] = React.useState(false);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1000);
  };

  return (
    <div className="mt-4 rounded-lg border bg-gray-100 dark:border-gray-700 dark:bg-gray-800">
      <div className="flex items-center justify-between border-b px-4 py-2 dark:border-gray-700">
        <span className="text-xs font-medium text-gray-500">Code</span>
        <CopyToClipboard text={code} onCopy={handleCopy}>
          <button className="flex items-center rounded-md bg-gray-300 px-2 py-1 text-xs font-medium transition-colors duration-200 hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600">
            {copied ? <span className="mr-1 text-blue-600">Kopyalandı !</span> : <span>Kopyala</span>}
          </button>
        </CopyToClipboard>
      </div>
      <pre className="p-4 text-sm">{code}</pre>
    </div>
  );
}

CodeBlock.propTypes = {
  code: PropTypes.string.isRequired,
  language: PropTypes.string.isRequired,
};

export default CodeBlock;
