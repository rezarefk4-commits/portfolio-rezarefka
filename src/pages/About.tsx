import React from 'react';
import { useAppContext } from '../context/AppContext';

export const About = () => {
  const { profile, t } = useAppContext();

  return (
      <div className="max-w-4xl mx-auto pt-6 w-full pb-20 animate-page-enter">
        <div className="mb-10 reveal-on-scroll delay-0">
          <h1 className="text-4xl font-black text-gray-900 dark:text-white mb-2 tracking-tight">{t.aboutTitle}</h1>
          <p className="text-[16px] text-gray-600 dark:text-gray-400 font-medium">{t.aboutSubtitle} {profile.name}</p>
        </div>

        <div className="space-y-6">
          <div className="glass-panel p-8 md:p-10 rounded-[2.5rem] w-full reveal-on-scroll delay-100 space-y-6 text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed font-medium">
            <p>{t.aboutP1}</p>
            <p>{t.aboutP2}</p>
            <p>{t.aboutP3}</p>
          </div>

          <div className="glass-panel p-8 md:p-10 rounded-[2.5rem] w-full reveal-on-scroll delay-200">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">{t.philosophy}</h3>
            <ul className="list-disc pl-5 md:pl-8 text-[15px] font-medium text-gray-700 dark:text-gray-300 space-y-3">
              <li>{t.phil1}</li>
              <li>{t.phil2}</li>
              <li>{t.phil3}</li>
              <li>{t.phil4}</li>
              <li>{t.phil5}</li>
            </ul>
          </div>

          <div className="glass-panel p-8 md:p-10 rounded-[2.5rem] w-full reveal-on-scroll delay-300">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">{t.values}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
               <div className="bg-white/40 dark:bg-slate-800/40 backdrop-blur-md border border-white/60 dark:border-white/10 rounded-[2rem] p-6 hover:shadow-md transition-all">
                  <h4 className="font-bold text-gray-900 dark:text-white text-[15px] mb-2">{t.val1Title}</h4>
                  <p className="text-[14px] font-medium text-gray-600 dark:text-gray-400 leading-relaxed">{t.val1Desc}</p>
               </div>
               <div className="bg-white/40 dark:bg-slate-800/40 backdrop-blur-md border border-white/60 dark:border-white/10 rounded-[2rem] p-6 hover:shadow-md transition-all">
                  <h4 className="font-bold text-gray-900 dark:text-white text-[15px] mb-2">{t.val2Title}</h4>
                  <p className="text-[14px] font-medium text-gray-600 dark:text-gray-400 leading-relaxed">{t.val2Desc}</p>
               </div>
               <div className="bg-white/40 dark:bg-slate-800/40 backdrop-blur-md border border-white/60 dark:border-white/10 rounded-[2rem] p-6 hover:shadow-md transition-all">
                  <h4 className="font-bold text-gray-900 dark:text-white text-[15px] mb-2">{t.val3Title}</h4>
                  <p className="text-[14px] font-medium text-gray-600 dark:text-gray-400 leading-relaxed">{t.val3Desc}</p>
               </div>
               <div className="bg-white/40 dark:bg-slate-800/40 backdrop-blur-md border border-white/60 dark:border-white/10 rounded-[2rem] p-6 hover:shadow-md transition-all">
                  <h4 className="font-bold text-gray-900 dark:text-white text-[15px] mb-2">{t.val4Title}</h4>
                  <p className="text-[14px] font-medium text-gray-600 dark:text-gray-400 leading-relaxed">{t.val4Desc}</p>
               </div>
            </div>
          </div>

          <div className="glass-panel p-8 md:p-10 rounded-[2.5rem] w-full reveal-on-scroll delay-400">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">{t.hobbies}</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
               <div className="bg-white/40 dark:bg-slate-800/40 backdrop-blur-md border border-white/60 dark:border-white/10 rounded-[2rem] p-6 hover:shadow-md transition-all">
                  <h4 className="font-bold text-gray-900 dark:text-white text-[15px] mb-2">{t.hob1Title}</h4>
                  <p className="text-[14px] font-medium text-gray-600 dark:text-gray-400 leading-relaxed">{t.hob1Desc}</p>
               </div>
               <div className="bg-white/40 dark:bg-slate-800/40 backdrop-blur-md border border-white/60 dark:border-white/10 rounded-[2rem] p-6 hover:shadow-md transition-all">
                  <h4 className="font-bold text-gray-900 dark:text-white text-[15px] mb-2">{t.hob2Title}</h4>
                  <p className="text-[14px] font-medium text-gray-600 dark:text-gray-400 leading-relaxed">{t.hob2Desc}</p>
               </div>
               <div className="bg-white/40 dark:bg-slate-800/40 backdrop-blur-md border border-white/60 dark:border-white/10 rounded-[2rem] p-6 hover:shadow-md transition-all">
                  <h4 className="font-bold text-gray-900 dark:text-white text-[15px] mb-2">{t.hob3Title}</h4>
                  <p className="text-[14px] font-medium text-gray-600 dark:text-gray-400 leading-relaxed">{t.hob3Desc}</p>
               </div>
            </div>
          </div>
        </div>
      </div>
  );
};
