/* eslint-disable no-unused-vars */
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { motion } from "framer-motion";

const GithubPreview = ({ content }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="markdown-body bg-white/90 backdrop-blur-md p-8 rounded-2xl shadow-xl border border-white/20 max-h-[600px] overflow-auto"
    >
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h1: ({ node, ...props }) => (
            <h1 className="text-4xl font-extrabold mt-6 mb-4 text-gray-900 drop-shadow-sm" {...props} />
          ),
          h2: ({ node, ...props }) => (
            <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-800 drop-shadow-sm" {...props} />
          ),
          p: ({ node, ...props }) => (
            <p className="text-base text-gray-700 mb-4 leading-relaxed" {...props} />
          ),
          ul: ({ node, ...props }) => (
            <ul className="list-disc ml-6 mb-4 text-gray-700" {...props} />
          ),
          li: ({ node, ...props }) => (
            <li className="mb-2" {...props} />
          ),
          a: ({ node, ...props }) => (
            <a className="text-pink-500 hover:underline font-semibold" {...props} />
          ),
          img: ({ node, ...props }) => (
            <img className="inline-block mr-2 my-2" {...props} />
          ),
          hr: ({ node, ...props }) => (
            <hr className="my-8 border-t border-gray-300 opacity-50" {...props} />
          ),
          code: ({ node, inline, ...props }) => (
            inline ? (
              <code className="bg-gray-100 text-pink-600 px-1 py-0.5 rounded" {...props} />
            ) : (
              <pre className="bg-gray-900 text-white p-4 rounded-xl overflow-x-auto shadow-inner">
                <code {...props} />
              </pre>
            )
          ),
        }}
      >
        {content || "Your GitHub-style preview will appear here..."}
      </ReactMarkdown>
    </motion.div>
  );
};

export default GithubPreview;