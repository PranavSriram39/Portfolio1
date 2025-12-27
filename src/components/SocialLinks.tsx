import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Code2, BookOpen } from 'lucide-react';

export function SocialLinks() {
  const links = [
    {
      icon: <Mail size={20} />,
      href: "mailto:pranav39512@gmail.com",
      label: "Email"
    },
    {
      icon: <Github size={20} />,
      href: "https://github.com/PranavSriram39",
      label: "GitHub"
    },
    {
      icon: <Linkedin size={20} />,
      href: "https://www.linkedin.com/in/pranav-sriram-1a0870301/",
      label: "LinkedIn"
    },
    {
      icon: <Code2 size={20} />,
      href: "https://leetcode.com/u/Sriram_Pranav/",
      label: "LeetCode"
    },
    {
      icon: <BookOpen size={20} />,
      href: "https://www.codechef.com/users/pranavsriram09",
      label: "CodeChef"
    }
  ];

  return (
    <div className="flex gap-4">
      {links.map((link, index) => (
        <motion.a
          key={index}
          whileHover={{ scale: 1.1, rotate: 5 }}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-zinc-400 hover:text-white transition-colors"
          aria-label={link.label}
        >
          {link.icon}
        </motion.a>
      ))}
    </div>
  );
}