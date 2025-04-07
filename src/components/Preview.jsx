/* eslint-disable no-unused-vars */
import { useState } from "react";
import { motion } from "framer-motion";

const Preview = ({ content }) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const downloadAsMarkdown = () => {
    const blob = new Blob([content], { type: "text/markdown" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "README.md";
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-4">
      <div className="bg-gray-50 p-6 rounded-xl h-[400px] overflow-auto border border-gray-200 shadow-inner">
        <pre className="text-sm text-gray-700 whitespace-pre-wrap font-mono">
          {content || "Your README preview will appear here..."}
        </pre>
      </div>
      <div className="flex space-x-4">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={copyToClipboard}
          className="flex-1 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-all shadow-md"
        >
          {copied ? "Copied!" : "Copy to Clipboard"}
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={downloadAsMarkdown}
          className="flex-1 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-all shadow-md"
        >
          Download as .md
        </motion.button>
      </div>
    </div>
  );
};

export default Preview;