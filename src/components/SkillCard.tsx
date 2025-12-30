import { useSpring, animated } from '@react-spring/web';
import { useState } from 'react';

interface SkillCardProps {
  skill: string;
  index: number;
  img?: string;
  link?: string;
}

export function SkillCard({ skill, index,img,link }: SkillCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const { scale, y, opacity } = useSpring({
    scale: isHovered ? 1.05 : 1,
    y: isHovered ? -5 : 0,
    opacity: 1,
    from: { opacity: 0, y: 50 },
    delay: index * 100,
    config: { tension: 300, friction: 10 }
  });

  return (
    <animated.div
      style={{ scale, y, opacity }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="flex items-center justify-between bg-zinc-800 text-zinc-300 px-4 py-2 rounded-lg border border-zinc-700 cursor-pointer"
    >
      <span>{skill}</span>
      {img && (
        <a href={link} target="_blank" rel="noopener noreferrer">
          <img
            src={img}
            alt={`${skill} icon`}
            className="w-8 h-8 rounded object-cover"
          />
        </a>
      )}
    </animated.div>
  );
}