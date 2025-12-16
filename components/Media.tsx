import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Mic, Newspaper, Play, Linkedin, Video, Instagram } from 'lucide-react';

const Media: React.FC = () => {
  const articles = [
    {
      type: "article",
      title: "Winner of The Tech Impact Awards 2025",
      source: "The Top Voices",
      url: "https://thetopvoices.com/story/the-top-voices-announced-the-winners-of-the-tech-impact-awards-2025",
      icon: Newspaper,
      desc: "Recognized for impact in the tech industry."
    },
    {
      type: "video",
      title: "Google GDG Cloud: Accelerator for Games",
      source: "YouTube",
      url: "https://www.youtube.com/watch?v=d1s0_X6ebUA&t=3437s",
      icon: Play,
      desc: "Presentation on building game accelerators."
    },
    {
      type: "video",
      title: "DevFest Bishkek: GameDev & Supernatural",
      source: "YouTube",
      url: "https://www.youtube.com/watch?v=RUBEal6_7sI&t=8s",
      icon: Video,
      desc: "Talk about launching a game studio in Central Asia."
    },
    {
      type: "video",
      title: "The Tech Podcast: IT & GameDev in CA",
      source: "YouTube",
      url: "https://www.youtube.com/watch?v=Q3IXWqEVun0",
      icon: Mic,
      desc: "Discussing the future of tech in the region."
    },
    {
      type: "article",
      title: "Founder of Game Studio on Industry Development",
      source: "The Tech",
      url: "https://the-tech.kz/osnovatel-studii-razrabotki-igr-iz-kyrgyzstana-o-razvitii-igrovoj-industrii-v-czentralnoj-azii/",
      icon: Newspaper,
      desc: "Interview about the challenges of the game industry."
    },
    {
      type: "article",
      title: "Success Story: 30M+ Plays & 1M+ MAU",
      source: "Limon.KG",
      url: "https://limon.kg/ru/news:80202",
      icon: Newspaper,
      desc: "Feature story on my early game development success."
    },
    {
      type: "video",
      title: "Podcast: Digital Nomad & IT Career",
      source: "YouTube",
      url: "https://www.youtube.com/watch?v=-KFWGyrnlCU",
      icon: Mic,
      desc: "Interview about career paths and remote work."
    },
    {
      type: "article",
      title: "Young Founders Developing IT Sphere",
      source: "The Tech",
      url: "https://the-tech.kz/molodye-osnovateli-startapov-iz-kyrgyzstana-kotorye-razvivayut-it-sferu/",
      icon: Newspaper,
      desc: "Featured among young startup founders."
    },
    {
      type: "post",
      title: "Creative Economy in Central Asia",
      source: "Economist.kg",
      url: "https://economist.kg/novosti/2022/04/20/kyrgyzstan-samaya-privlekatelnaya-strana-v-centralnoj-azii-dlya-kreativnoj-ekonomiki-daniyar-amanaliev/",
      icon: Newspaper,
      desc: "Commentary on the creative economy potential."
    },
    {
      type: "post",
      title: "Feature on Silicon Steppes",
      source: "LinkedIn",
      url: "https://www.linkedin.com/feed/update/urn:li:activity:7152921864858726401/",
      icon: Linkedin,
      desc: "Highlighting tech ecosystem contributions."
    },
    {
      type: "article",
      title: "Advice for Aspiring Programmers",
      source: "The Tech",
      url: "https://the-tech.kz/kak-podgotovitsya-k-izucheniyu-programmirovaniya-sovety-ot-gejmdev-razrabotchika/",
      icon: Newspaper,
      desc: "Tips for beginners entering software engineering."
    },
    {
      type: "post",
      title: "Supernatural Accelerator Launch",
      source: "Instagram",
      url: "https://www.instagram.com/p/C3XdUAetjUr/",
      icon: Instagram,
      desc: "Announcement of the game accelerator program."
    },
    {
      type: "post",
      title: "Speaker at OshDevsTalk Meetup",
      source: "DevKG",
      url: "https://devkg.com/ru/events/mitap-oshdevstalk-2-prolab-academy-802",
      icon: ExternalLink,
      desc: "Event details for my talk at ProLab Academy."
    },
    {
      type: "article",
      title: "Gen Z in IT: 15 Young Founders",
      source: "The Tech",
      url: "https://the-tech.kz/pokolenie-z-v-it-15-molodyh-startaperov-kotorye-menyayut-industriyu/",
      icon: Newspaper,
      desc: "List of young entrepreneurs changing the industry."
    }
  ];

  return (
    <section id="media" className="py-24 bg-dark-bg/50 relative border-t border-slate-900/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <h2 className="text-4xl font-display font-bold text-white mb-4">Media & Articles</h2>
            <p className="text-slate-400 text-lg">
              Podcasts, interviews, and press features.
            </p>
          </div>
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-accent hover:text-white transition-colors flex items-center gap-2 font-medium"
          >
            View all posts <ExternalLink size={16} />
          </a>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((item, index) => (
            <motion.a
              key={index}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group flex flex-col p-6 bg-card-bg border border-slate-800 rounded-xl hover:border-accent/50 hover:bg-slate-900/80 transition-all duration-300 hover:-translate-y-1 h-full"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-2.5 rounded-lg bg-slate-900 text-accent group-hover:bg-accent group-hover:text-white transition-colors border border-slate-800 group-hover:border-accent">
                  <item.icon size={20} />
                </div>
                <ExternalLink size={16} className="text-slate-600 group-hover:text-slate-400 transition-colors" />
              </div>
              
              <h3 className="text-lg font-bold text-slate-200 mb-2 group-hover:text-white leading-snug">
                {item.title}
              </h3>
              
              <p className="text-sm text-slate-500 mb-4 line-clamp-2 leading-relaxed">
                {item.desc}
              </p>
              
              <div className="mt-auto pt-4 border-t border-slate-800/50 flex items-center gap-2 text-xs font-medium text-slate-500 uppercase tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-600 group-hover:bg-accent transition-colors"></span>
                {item.source}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Media;