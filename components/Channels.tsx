import React from 'react';
import { motion } from 'framer-motion';
import { Send, Youtube, Users, Play, ExternalLink, MessageCircle } from 'lucide-react';

const Channels: React.FC = () => {
  const channels = [
    {
      platform: "Telegram",
      name: "@eldargamedev",
      description: "Game development insights, startup journey, and tech thoughts in Russian",
      url: "https://t.me/eldargamedev",
      icon: Send,
      color: "from-[#2AABEE]/20 to-[#2AABEE]/5",
      borderColor: "border-[#2AABEE]/30 hover:border-[#2AABEE]/60",
      iconBg: "bg-[#2AABEE]",
      stats: "Join the community",
      cta: "Open Telegram"
    },
    {
      platform: "YouTube",
      name: "@HellDarkov",
      description: "Video content about game development, tech, and creative projects",
      url: "https://www.youtube.com/@HellDarkov",
      icon: Youtube,
      color: "from-[#FF0000]/15 to-[#FF0000]/5",
      borderColor: "border-[#FF0000]/20 hover:border-[#FF0000]/50",
      iconBg: "bg-[#FF0000]",
      stats: "Watch videos",
      cta: "Subscribe"
    }
  ];

  return (
    <section className="py-20 bg-dark-bg relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-white/[0.02] blur-[100px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <span className="text-xs font-mono text-slate-600 tracking-widest uppercase mb-3 block">
            Connect
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-3">
            Follow My Journey
          </h2>
          <p className="text-slate-400 max-w-lg">
            Get behind-the-scenes content, updates, and insights on game development and tech.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {channels.map((channel, index) => {
            const Icon = channel.icon;
            
            return (
              <motion.a
                key={channel.platform}
                href={channel.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className={`group relative bg-gradient-to-br ${channel.color} border ${channel.borderColor} rounded-2xl p-6 transition-all duration-300 overflow-hidden`}
              >
                {/* Shine effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-12 h-12 ${channel.iconBg} rounded-xl flex items-center justify-center shadow-lg`}>
                      <Icon size={24} className="text-white" />
                    </div>
                    <ExternalLink size={18} className="text-slate-600 group-hover:text-white transition-colors" />
                  </div>

                  <div className="mb-4">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-medium text-slate-500 uppercase tracking-wider">
                        {channel.platform}
                      </span>
                    </div>
                    <h3 className="text-xl font-display font-bold text-white mb-2">
                      {channel.name}
                    </h3>
                    <p className="text-sm text-slate-400 leading-relaxed">
                      {channel.description}
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-white/10">
                    <span className="text-xs text-slate-500">
                      {channel.stats}
                    </span>
                    <span className="text-sm font-medium text-white group-hover:underline flex items-center gap-1">
                      {channel.cta}
                      <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </span>
                  </div>
                </div>
              </motion.a>
            );
          })}
        </div>

        {/* Featured Telegram Post Preview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8"
        >
          <a 
            href="https://t.me/eldargamedev"
            target="_blank"
            rel="noopener noreferrer"
            className="group block"
          >
            <div className="relative bg-[#0a0a0a] border border-slate-800/80 hover:border-[#2AABEE]/40 rounded-2xl p-6 transition-all duration-300 overflow-hidden">
              {/* Telegram blue accent line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#2AABEE] to-transparent opacity-50" />
              
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-[#2AABEE] rounded-full flex items-center justify-center">
                    <Send size={18} className="text-white" />
                  </div>
                </div>
                
                <div className="flex-grow min-w-0">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-medium text-white">eldargamedev</span>
                    <span className="text-xs text-slate-600">•</span>
                    <span className="text-xs text-slate-500">Latest post</span>
                  </div>
                  
                  <p className="text-slate-300 text-sm leading-relaxed mb-3">
                    Check out my Telegram channel for the latest updates on game development, 
                    startup journey, and tech insights. Join the conversation! 🎮🚀
                  </p>
                  
                  <div className="flex items-center gap-4 text-xs text-slate-500">
                    <span className="flex items-center gap-1">
                      <MessageCircle size={14} />
                      Join discussion
                    </span>
                    <span className="flex items-center gap-1">
                      <Users size={14} />
                      Community
                    </span>
                  </div>
                </div>

                <div className="flex-shrink-0 hidden sm:block">
                  <span className="text-xs text-slate-600 group-hover:text-[#2AABEE] transition-colors flex items-center gap-1">
                    Open in Telegram
                    <ExternalLink size={12} />
                  </span>
                </div>
              </div>
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Channels;

