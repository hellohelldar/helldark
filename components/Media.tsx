import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Trophy, Play, Mic, FileText } from 'lucide-react';

const Media: React.FC = () => {
  const articles = [
    { type: "Award", title: "Winner of Tech Impact Awards 2025", source: "The Top Voices", icon: Trophy },
    { type: "Talk", title: "Google GDG Cloud: Accelerator for Games", source: "YouTube", icon: Play },
    { type: "Talk", title: "DevFest Bishkek: Launching Studios", source: "YouTube", icon: Play },
    { type: "Podcast", title: "The Tech Podcast: IT in Central Asia", source: "YouTube", icon: Mic },
    { type: "Feature", title: "Success Story: 30M+ Plays", source: "Limon.KG", icon: FileText },
    { type: "Feature", title: "15 Young Founders Changing IT", source: "The Tech", icon: FileText },
  ];

  return (
    <section id="media" className="py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-sm tracking-widest text-accent uppercase mb-4">Press</p>
          <h2 className="text-4xl font-bold text-white">Media & Features</h2>
        </motion.div>

        <div className="space-y-0">
          {articles.map((item, index) => (
            <motion.a
              key={index}
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group flex items-center justify-between py-6 border-b border-white/10 hover:bg-white/5 transition-colors px-6 -mx-6"
            >
              <div className="flex items-center gap-6">
                <div className="p-3 bg-accent/10 border border-accent/30 text-accent">
                  <item.icon size={20} />
                </div>
                <div>
                  <p className="text-accent uppercase tracking-widest text-sm mb-1">{item.type}</p>
                  <h3 className="text-white text-lg group-hover:text-accent transition-colors">{item.title}</h3>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-white hidden sm:block">{item.source}</span>
                <ArrowUpRight 
                  size={20} 
                  className="text-white group-hover:text-accent group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" 
                />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Media;
