/* eslint-disable no-unused-vars */
import { useState } from "react";
import { motion } from "framer-motion";
import Form from "./components/Form";
import GithubPreview from "./components/GithubPreview";
// import FloatingIcons from "./components/FloatingIcons";

function App() {
  const [readmeContent, setReadmeContent] = useState("");
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(readmeContent);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const downloadAsMarkdown = () => {
    const blob = new Blob([readmeContent], { type: "text/markdown" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "README.md";
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-600 via-purple-500 to-pink-500 flex items-center justify-center p-8">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl p-10 max-w-6xl w-full border border-white/20"
      >
        <h1 className="text-5xl font-extrabold text-center text-white mb-10 tracking-wide drop-shadow-md">
          ✨ README Generator ✨
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <Form setReadmeContent={setReadmeContent} />
          <div className="space-y-6">
            <GithubPreview content={readmeContent} />
            <div className="flex space-x-6">
              <motion.button
                whileHover={{ scale: 1.1, rotate: 2 }}
                whileTap={{ scale: 0.95 }}
                onClick={copyToClipboard}
                className="flex-1 py-4 bg-gradient-to-r from-indigo-500 to-blue-600 text-white font-bold rounded-xl hover:from-indigo-600 hover:to-blue-700 transition-all shadow-lg"
              >
                {copied ? "Copied! 🎉" : "Copy to Clipboard"}
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1, rotate: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={downloadAsMarkdown}
                className="flex-1 py-4 bg-gradient-to-r from-green-500 to-teal-600 text-white font-bold rounded-xl hover:from-green-600 hover:to-teal-700 transition-all shadow-lg"
              >
                Download as .md
              </motion.button>
            </div>
          </div>
        </div>
      </motion.div>
      {/* <FloatingIcons /> */}
    </div>
  );
}

export default App;