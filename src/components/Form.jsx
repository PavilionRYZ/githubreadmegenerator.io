/* eslint-disable no-unused-vars */
import { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { FaGithub, FaRocket, FaTools, FaBook, FaUsers,FaRegUser } from "react-icons/fa";
import { TbLicense } from "react-icons/tb";
const Form = ({ setReadmeContent }) => {
  const [formData, setFormData] = useState({
    projectName: "",
    description: "",
    features: "",
    techStack: "",
    prerequisites: "",
    cloneRepo: "",
    installDeps: "",
    additionalSetup: "",
    usage: "",
    contributing: "",
    license: "MIT",
    githubUsername: "",
    author: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    generateReadme({ ...formData, [name]: value });
  };

  const generateReadme = (data) => {
    const content = `
# ${data.projectName}
${data.githubUsername ? `![GitHub stars](https://img.shields.io/github/stars/${data.githubUsername}/${data.projectName}?style=social) ![GitHub forks](https://img.shields.io/github/forks/${data.githubUsername}/${data.projectName}?style=social)` : ""}

${data.description || "A brief description of your project goes here."}

## ✨ Features
${data.features ? data.features.split("\n").map(line => `- ${line}`).join("\n") : "- Feature 1\n- Feature 2"}

## 🛠️ Tech Stack
${data.techStack ? data.techStack.split("\n").map(line => `- ${line}`).join("\n") : "- Tech 1\n- Tech 2"}

## 📦 Installation

### Prerequisites
${data.prerequisites ? data.prerequisites.split("\n").map(line => `- ${line}`).join("\n") : "- Node.js (>= 14.x)"}

### Steps
1. Clone the repository:
   \`\`\`bash
   ${data.cloneRepo || `git clone https://github.com/${data.githubUsername || "username"}/${data.projectName || "repo-name"}.git`}
   \`\`\`
2. Install dependencies:
   \`\`\`bash
   ${data.installDeps || "npm install"}
   \`\`\`
${data.additionalSetup ? `3. Additional setup:\n   \`\`\`bash\n   ${data.additionalSetup}\n   \`\`\`` : ""}

## 🚀 Usage
${data.usage || "Explain how to use your project here."}

## 🤝 Contributing
${data.contributing || "Contributions are welcome! Please follow the guidelines below."}

## 📜 License
This project is licensed under the ${data.license} License${data.license === "MIT" ? " - see the [LICENSE](LICENSE) file for details" : ""}.

${data.author ? `## 👤 Author\n${data.author}` : ""}

---
*Generated with ❤️ by README Generator*
`.trim();
    setReadmeContent(content);
  };

  const getAISuggestions = async () => {
    try {
      const response = await axios.post(
        "https://api.openai.com/v1/chat/completions",
        {
          model: "gpt-3.5-turbo",
          messages: [
            {
              role: "user",
              content: `Suggest a README description for a project named ${formData.projectName}`,
            },
          ],
        },
        {
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
          },
        }
      );
      const suggestion = response.data.choices[0].message.content;
      setFormData((prev) => ({ ...prev, description: suggestion }));
      generateReadme({ ...formData, description: suggestion });
    } catch (error) {
      console.error("Error fetching AI suggestion:", error);
    }
  };

  return (
    <div className="space-y-6 max-h-[600px] overflow-y-auto pr-4">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
        <label className="flex items-center text-white font-semibold mb-2"><FaGithub className="mr-2" /> Project Name</label>
        <input name="projectName" value={formData.projectName} onChange={handleChange} placeholder="MyAwesomeProject" className="w-full p-3 bg-white/20 border border-white/30 rounded-xl text-white placeholder-gray-300 focus:ring-2 focus:ring-pink-400 focus:border-transparent transition-all" />
      </motion.div>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
        <label className="flex items-center text-white font-semibold mb-2"><FaGithub className="mr-2" /> GitHub Username</label>
        <input name="githubUsername" value={formData.githubUsername} onChange={handleChange} placeholder="johndoe" className="w-full p-3 bg-white/20 border border-white/30 rounded-xl text-white placeholder-gray-300 focus:ring-2 focus:ring-pink-400 focus:border-transparent transition-all" />
      </motion.div>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
        <label className="flex items-center text-white font-semibold mb-2"><FaBook className="mr-2" /> Description</label>
        <textarea name="description" value={formData.description} onChange={handleChange} placeholder="A cool project..." className="w-full p-3 bg-white/20 border border-white/30 rounded-xl text-white placeholder-gray-300 h-20 focus:ring-2 focus:ring-pink-400 focus:border-transparent transition-all resize-none" />
      </motion.div>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
        <label className="flex items-center text-white font-semibold mb-2"><FaTools className="mr-2" /> Features (one per line)</label>
        <textarea name="features" value={formData.features} onChange={handleChange} placeholder="Fast\nSecure" className="w-full p-3 bg-white/20 border border-white/30 rounded-xl text-white placeholder-gray-300 h-20 focus:ring-2 focus:ring-pink-400 focus:border-transparent transition-all resize-none" />
      </motion.div>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
        <label className="flex items-center text-white font-semibold mb-2"><FaTools className="mr-2" /> Tech Stack (one per line)</label>
        <textarea name="techStack" value={formData.techStack} onChange={handleChange} placeholder="React\nNode.js" className="w-full p-3 bg-white/20 border border-white/30 rounded-xl text-white placeholder-gray-300 h-20 focus:ring-2 focus:ring-pink-400 focus:border-transparent transition-all resize-none" />
      </motion.div>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}>
        <label className="flex items-center text-white font-semibold mb-2"><FaTools className="mr-2" /> Prerequisites (one per line)</label>
        <textarea name="prerequisites" value={formData.prerequisites} onChange={handleChange} placeholder="Node.js (>= 14.x)\nGit" className="w-full p-3 bg-white/20 border border-white/30 rounded-xl text-white placeholder-gray-300 h-20 focus:ring-2 focus:ring-pink-400 focus:border-transparent transition-all resize-none" />
      </motion.div>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }}>
        <label className="flex items-center text-white font-semibold mb-2"><FaGithub className="mr-2" /> Clone Command</label>
        <input name="cloneRepo" value={formData.cloneRepo} onChange={handleChange} placeholder="git clone <url>" className="w-full p-3 bg-white/20 border border-white/30 rounded-xl text-white placeholder-gray-300 focus:ring-2 focus:ring-pink-400 focus:border-transparent transition-all" />
      </motion.div>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }}>
        <label className="flex items-center text-white font-semibold mb-2"><FaTools className="mr-2" /> Install Dependencies</label>
        <input name="installDeps" value={formData.installDeps} onChange={handleChange} placeholder="npm install" className="w-full p-3 bg-white/20 border border-white/30 rounded-xl text-white placeholder-gray-300 focus:ring-2 focus:ring-pink-400 focus:border-transparent transition-all" />
      </motion.div>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9 }}>
        <label className="flex items-center text-white font-semibold mb-2"><FaTools className="mr-2" /> Additional Setup (optional)</label>
        <textarea name="additionalSetup" value={formData.additionalSetup} onChange={handleChange} placeholder="npm run build" className="w-full p-3 bg-white/20 border border-white/30 rounded-xl text-white placeholder-gray-300 h-20 focus:ring-2 focus:ring-pink-400 focus:border-transparent transition-all resize-none" />
      </motion.div>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.0 }}>
        <label className="flex items-center text-white font-semibold mb-2"><FaRocket className="mr-2" /> Usage</label>
        <textarea name="usage" value={formData.usage} onChange={handleChange} placeholder="npm start" className="w-full p-3 bg-white/20 border border-white/30 rounded-xl text-white placeholder-gray-300 h-20 focus:ring-2 focus:ring-pink-400 focus:border-transparent transition-all resize-none" />
      </motion.div>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.1 }}>
        <label className="flex items-center text-white font-semibold mb-2"><FaUsers className="mr-2" /> Contributing</label>
        <textarea name="contributing" value={formData.contributing} onChange={handleChange} placeholder="Fork and PR" className="w-full p-3 bg-white/20 border border-white/30 rounded-xl text-white placeholder-gray-300 h-20 oppercase:ring-2 focus:ring-pink-400 focus:border-transparent transition-all resize-none" />
      </motion.div>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2 }}>
        <label className="flex items-center text-white font-semibold mb-2"><TbLicense  className="mr-2" /> License</label>
        <select name="license" value={formData.license} onChange={handleChange} className="w-full p-3 bg-white/20 border border-white/30 rounded-xl text-white focus:ring-2 focus:ring-pink-400 focus:border-transparent transition-all">
          <option value="MIT">MIT</option>
          <option value="Apache-2.0">Apache 2.0</option>
          <option value="GPL-3.0">GPL 3.0</option>
          <option value="BSD-3-Clause">BSD 3-Clause</option>
        </select>
      </motion.div>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.3 }}>
        <label className="flex items-center text-white font-semibold mb-2"><FaRegUser  className="mr-2" /> Author</label>
        <input name="author" value={formData.author} onChange={handleChange} placeholder="John Doe" className="w-full p-3 bg-white/20 border border-white/30 rounded-xl text-white placeholder-gray-300 focus:ring-2 focus:ring-pink-400 focus:border-transparent transition-all" />
      </motion.div>
      <motion.button
        whileHover={{ scale: 1.05, rotate: 2 }}
        whileTap={{ scale: 0.95 }}
        onClick={getAISuggestions}
        className="w-full py-4 bg-gradient-to-r from-purple-600 to-pink-500 text-white font-bold rounded-xl hover:from-purple-700 hover:to-pink-600 transition-all shadow-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4 }}
      >
        Get AI Suggestion 🤖
      </motion.button>
    </div>
  );
};

export default Form;