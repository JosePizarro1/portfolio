import { FaGitAlt, FaGithub, FaFigma, FaNpm, FaSalesforce, FaSlack, FaWhatsapp, FaSearch, FaCloud } from "react-icons/fa"
import { SiVercel, SiFramer, SiSqlite, SiDocker, SiGooglecloud, SiElevenlabs } from "react-icons/si"
import { TbBrandFlutter } from "react-icons/tb"
import { PiMicrosoftPowerpointLogo } from "react-icons/pi"

export const technologies = [
    { name: "Git", color: "#F05032", icon: <FaGitAlt className="text-[#F05032]" size={24} /> },
    { name: "GitHub", color: "#f5f5f5", icon: <FaGithub size={24} /> },
    { name: "Figma", color: "#F24E1E", icon: <FaFigma className="text-[#F24E1E]" size={24} /> },
    { name: "npm", color: "#CB3837", icon: <FaNpm className="text-[#CB3837]" size={24} /> },
    { name: "Vercel", color: "#f5f5f5", icon: <SiVercel size={24} /> },
     { name: "Framer", color: "#f5f5f5", icon: <SiFramer size={24} /> },
     { name: "Power BI", color: "#F2C811", icon: <PiMicrosoftPowerpointLogo className="text-[#F2C811]" size={24} /> },
     { name: "Looker Studio", color: "#4285F4", icon: <FaSearch className="text-[#4285F4]" size={24} /> },
     { name: "Salesforce CRM", color: "#00A1E0", icon: <FaSalesforce className="text-[#00A1E0]" size={24} /> },
     { name: "WhatsApp API", color: "#25D366", icon: <FaWhatsapp className="text-[#25D366]" size={24} /> },
     { name: "Slack Apps", color: "#e879b7", icon: <FaSlack className="text-[#e879b7]" size={24} /> },
     { name: "Webhooks", color: "#60a5fa", icon: <svg className="text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: 24, height: 24 }}><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" /><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" /></svg> },
     { name: "WebSockets", color: "#c084fc", icon: <svg className="text-purple-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: 24, height: 24 }}><path d="m17 2 4 4-4 4" /><path d="M3 6h18" /><path d="m7 22-4-4 4-4" /><path d="M21 18H3" /></svg> },
     { name: "SSE (Server-Sent Events)", color: "#fb923c", icon: <svg className="text-orange-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: 24, height: 24 }}><path d="M4 11a9 9 0 0 1 9 9" /><path d="M4 4a16 16 0 0 1 16 16" /><circle cx="5" cy="19" r="1" /></svg> },
     { name: "SQLite", color: "#65b5df", icon: <SiSqlite className="text-[#65b5df]" size={24} /> },
     { name: "Docker", color: "#2496ED", icon: <SiDocker className="text-[#2496ED]" size={24} /> },
     { name: "Google Cloud", color: "#4285F4", icon: <SiGooglecloud className="text-[#4285F4]" size={24} /> },
     { name: "Azure DevOps", color: "#0078D7", icon: <FaCloud className="text-[#0078D7]" size={24} /> },
     { name: "ElevenLabs", color: "#f5f5f5", icon: <SiElevenlabs className="text-white" size={24} /> },
     { name: "FlutterFlow", color: "#b388ff", icon: <TbBrandFlutter className="text-[#b388ff]" size={24} /> },
    ]
