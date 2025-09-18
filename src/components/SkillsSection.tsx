
import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import AdvancedParticleSystem from './AdvancedParticleSystem';
import {
  Code2,
  Database,
  Cloud,
  Smartphone,
  Palette,
  Zap,
  Brain,
  GitBranch,
  Server,
  Globe,
  Cpu,
  Layers
} from 'lucide-react';

interface Skill {
  name: string;
  level: number;
  icon: React.ReactNode;
  category: string;
  color: string;
}

const SkillsSection: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const skills: Skill[] = [
    { name: 'React', level: 95, icon: <Code2 size={24} />, category: 'Frontend', color: 'var(--accent-neon)' },
    { name: 'TypeScript', level: 90, icon: <Code2 size={24} />, category: 'Frontend', color: 'var(--accent-blue)' },
    { name: 'Node.js', level: 85, icon: <Server size={24} />, category: 'Backend', color: 'var(--accent-green)' },
    { name: 'Python', level: 80, icon: <Brain size={24} />, category: 'Backend', color: 'var(--accent-yellow)' },
    { name: 'PostgreSQL', level: 85, icon: <Database size={24} />, category: 'Database', color: 'var(--accent-purple)' },
    { name: 'MongoDB', level: 80, icon: <Database size={24} />, category: 'Database', color: 'var(--accent-pink)' },
    { name: 'AWS', level: 75, icon: <Cloud size={24} />, category: 'Cloud', color: 'var(--accent-orange)' },
    { name: 'Docker', level: 80, icon: <Layers size={24} />, category: 'DevOps', color: 'var(--accent-cyan)' },
    { name: 'Git', level: 90, icon: <GitBranch size={24} />, category: 'Tools', color: 'var(--accent-red)' },
    { name: 'React Native', level: 70, icon: <Smartphone size={24} />, category: 'Mobile', color: 'var(--accent-teal)' },
    { name: 'Figma', level: 85, icon: <Palette size={24} />, category: 'Design', color: 'var(--accent-magenta)' },
    { name: 'Machine Learning', level: 75, icon: <Cpu size={24} />, category: 'AI/ML', color: 'var(--accent-lime)' },
  ];

  const categories = ['All', ...Array.from(new Set(skills.map(skill => skill.category)))];
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredSkills = activeCategory === 'All'
    ? skills
    : skills.filter(skill => skill.category === activeCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <motion.section
      ref={ref}
      className="skills-section relative min-h-screen py-20 overflow-hidden"
      style={{ y }}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 1 }}
    >
      {/* Advanced Particle System */}
      <AdvancedParticleSystem />

      {/* Floating Cubes Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-16 h-16 bg-gradient-to-r from-accent-neon/20 to-accent-blue/20 rounded-lg"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              rotateX: [0, 180, 360],
              rotateY: [0, 180, 360],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Interactive Grid Background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          animation: 'grid-move 20s linear infinite',
        }} />
      </div>

      <div className="skills-section-container relative z-10">
        <div className="glass-card p-8 max-w-7xl mx-auto">
          <motion.h2
            className="text-section mb-12 text-center text-gradient"
            initial={{ opacity: 0, y: -50, rotateX: 15 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Umiejętności Techniczne
          </motion.h2>

          <motion.p
            className="text-center mb-12 text-lg text-text-muted max-w-3xl mx-auto"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Specjalizuję się w nowoczesnych technologiach webowych, machine learningu i cloud computing.
            Każda umiejętność to narzędzie w tworzeniu innowacyjnych rozwiązań.
          </motion.p>

          {/* Category Filter */}
          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-gradient-to-r from-accent-neon to-accent-blue text-primary-bg shadow-lg shadow-accent-neon/25'
                    : 'glass-card text-text-muted hover:text-accent-neon'
                }`}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>

          {/* Skills Grid */}
          <motion.div
            className={`grid gap-6 ${isMobile ? 'grid-cols-1' : 'grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'}`}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {filteredSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="skill-card glass-card p-6 text-center group"
                variants={itemVariants}
                whileHover={{
                  scale: 1.05,
                  rotateY: 5,
                  rotateX: 5,
                  z: 50,
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex flex-col items-center">
                  <motion.div
                    className="p-4 rounded-full mb-4"
                    style={{ backgroundColor: `${skill.color}20` }}
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <div style={{ color: skill.color }}>
                      {skill.icon}
                    </div>
                  </motion.div>

                  <h3 className="text-xl font-bold mb-2" style={{ color: skill.color }}>
                    {skill.name}
                  </h3>

                  <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
                    <motion.div
                      className="h-2 rounded-full"
                      style={{ backgroundColor: skill.color }}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    />
                  </div>

                  <span className="text-sm text-text-muted">{skill.level}%</span>

                  <motion.div
                    className="mt-4 px-3 py-1 bg-gradient-to-r from-accent-purple/20 to-accent-pink/20 rounded-full text-xs font-medium"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
                    viewport={{ once: true }}
                  >
                    {skill.category}
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Skills Stats */}
          <motion.div
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            {[
              { label: 'Technologii', value: skills.length, icon: <Zap size={24} /> },
              { label: 'Lat doświadczenia', value: 3, icon: <Brain size={24} /> },
              { label: 'Projektów', value: 25, icon: <Globe size={24} /> },
              { label: 'Certyfikatów', value: 8, icon: <Layers size={24} /> },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="glass-card p-6 text-center"
                whileHover={{ scale: 1.05, rotateY: 5 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="text-accent-neon mb-2"
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  {stat.icon}
                </motion.div>
                <div className="text-3xl font-bold text-gradient mb-1">{stat.value}+</div>
                <div className="text-sm text-text-muted">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default SkillsSection;
