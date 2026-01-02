import React from 'react';
import { motion } from 'framer-motion';
import { Send, Youtube, ArrowUpRight } from 'lucide-react';

const Channels: React.FC = () => {
  const channels = [
    {
      name: "Telegram",
      handle: "@eldargamedev",
      desc: "Raw thoughts on startups, game dev, and engineering.",
      url: "https://t.me/eldargamedev",
      icon: Send,
      stats: "2.5k+"
    },
    {
      name: "YouTube",
      handle: "@HellDarkov",
      desc: "Devlogs, technical breakdowns, and showcases.",
      url: "https://www.youtube.com/@HellDarkov",
      icon: Youtube,
      stats: "1.2k+"
    }
  ];

  return (
    <section className="py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-sm tracking-widest text-accent uppercase mb-4">Channels</p>
          <h2 className="text-4xl font-bold text-white">Follow the journey</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {channels.map((channel, idx) => (
            <motion.a
              key={idx}
              href={channel.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group p-10 bg-white/5 backdrop-blur-sm border border-white/10 hover:border-accent/50 transition-all relative"
            >
              <div className="absolute top-10 right-10">
                <ArrowUpRight 
                  size={24} 
                  className="text-white/30 group-hover:text-accent group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" 
                />
              </div>

              <div className="flex items-start gap-6 mb-8">
                <div className="p-4 bg-accent/10 border border-accent/30 text-accent">
                  <channel.icon size={28} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-accent transition-colors">
                    {channel.name}
                  </h3>
                  <p className="text-accent">{channel.handle}</p>
                </div>
              </div>

              <p className="text-white text-lg leading-relaxed mb-8">
                {channel.desc}
              </p>

              <div className="flex items-center gap-2">
                <span className="text-4xl font-bold text-accent">{channel.stats}</span>
                <span className="text-sm text-white uppercase tracking-widest">Subscribers</span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Channels;
