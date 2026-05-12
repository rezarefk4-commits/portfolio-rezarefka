import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useAppContext } from '../context/AppContext';

export const Contact = () => {
  const { profile, t, showToast } = useAppContext();

  return (
      <div className="max-w-5xl mx-auto pt-6 w-full pb-20 animate-page-enter">
        <div className="mb-10 reveal-on-scroll delay-0">
          <h1 className="text-4xl font-black text-gray-900 dark:text-white mb-2 tracking-tight">{t.contactTitle}</h1>
          <p className="text-[16px] text-gray-600 dark:text-gray-400 font-medium">{t.contactSubtitle}</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 w-full">
          <div className="w-full lg:w-2/3 glass-panel p-8 md:p-10 rounded-[3rem] reveal-on-scroll delay-100">
            <form className="space-y-6 w-full" onSubmit={(e) => { e.preventDefault(); showToast('Pesan berhasil terkirim!'); (e.target as HTMLFormElement).reset(); }}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[13px] font-bold text-gray-700 dark:text-gray-300 mb-2">{t.formName}</label>
                  <input required name="name" type="text" placeholder={t.plName} className="w-full px-5 py-3.5 rounded-2xl bg-white/50 dark:bg-slate-900/50 backdrop-blur-md border border-white/60 dark:border-white/10 focus:ring-2 focus:ring-blue-500 outline-none dark:text-white text-[15px] shadow-sm font-medium transition-all hover:bg-white/80 dark:hover:bg-slate-800/80" />
                </div>
                <div>
                  <label className="block text-[13px] font-bold text-gray-700 dark:text-gray-300 mb-2">{t.formEmail}</label>
                  <input required name="email" type="email" placeholder={t.plEmail} className="w-full px-5 py-3.5 rounded-2xl bg-white/50 dark:bg-slate-900/50 backdrop-blur-md border border-white/60 dark:border-white/10 focus:ring-2 focus:ring-blue-500 outline-none dark:text-white text-[15px] shadow-sm font-medium transition-all hover:bg-white/80 dark:hover:bg-slate-800/80" />
                </div>
              </div>
              <div>
                <label className="block text-[13px] font-bold text-gray-700 dark:text-gray-300 mb-2">{t.formSubject}</label>
                <input required name="subject" type="text" placeholder={t.plSubject} className="w-full px-5 py-3.5 rounded-2xl bg-white/50 dark:bg-slate-900/50 backdrop-blur-md border border-white/60 dark:border-white/10 focus:ring-2 focus:ring-blue-500 outline-none dark:text-white text-[15px] shadow-sm font-medium transition-all hover:bg-white/80 dark:hover:bg-slate-800/80" />
              </div>
              <div>
                <label className="block text-[13px] font-bold text-gray-700 dark:text-gray-300 mb-2">{t.formMessage}</label>
                <textarea required name="message" rows={5} placeholder={t.plMessage} className="w-full px-5 py-3.5 rounded-2xl bg-white/50 dark:bg-slate-900/50 backdrop-blur-md border border-white/60 dark:border-white/10 focus:ring-2 focus:ring-blue-500 outline-none resize-none dark:text-white text-[15px] shadow-sm font-medium transition-all hover:bg-white/80 dark:hover:bg-slate-800/80"></textarea>
              </div>
              <button type="submit" className="py-4 px-8 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-bold transition-all shadow-lg shadow-blue-500/30 flex items-center justify-center gap-2 text-[15px] w-fit mt-4 hover:scale-105 active:scale-95">
                <Send size={18} /> {t.formSend}
              </button>
            </form>
          </div>

          <div className="w-full lg:w-1/3 flex flex-col gap-6">
            <div className="glass-panel p-8 md:p-10 rounded-[3rem] space-y-6 reveal-on-scroll delay-200">
               <div className="flex gap-4 items-start group cursor-default">
                 <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform"><Mail size={18} /></div>
                 <div>
                   <h4 className="text-[15px] font-bold text-gray-900 dark:text-white leading-none mb-1.5">{t.email}</h4>
                   <p className="text-[14px] text-gray-600 dark:text-gray-400 font-medium">{profile.email}</p>
                 </div>
               </div>
               <div className="flex gap-4 items-start group cursor-default">
                 <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform"><Phone size={18} /></div>
                 <div>
                   <h4 className="text-[15px] font-bold text-gray-900 dark:text-white leading-none mb-1.5">{t.whatsapp}</h4>
                   <p className="text-[14px] text-gray-600 dark:text-gray-400 font-medium">{profile.whatsapp}</p>
                 </div>
               </div>
               <div className="flex gap-4 items-start group cursor-default">
                 <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform"><MapPin size={18} /></div>
                 <div>
                   <h4 className="text-[15px] font-bold text-gray-900 dark:text-white leading-none mb-1.5">{t.location}</h4>
                   <p className="text-[14px] text-gray-600 dark:text-gray-400 font-medium">{profile.location}</p>
                 </div>
               </div>
            </div>

            <div className="glass-panel p-8 md:p-10 rounded-[3rem] flex flex-col justify-center reveal-on-scroll delay-300">
               <h3 className="font-bold text-gray-900 dark:text-white mb-5 text-[16px] text-center tracking-tight">{t.workingHours}</h3>
               <div className="flex justify-between items-center text-[14px] mb-3">
                 <span className="text-gray-600 dark:text-gray-400 font-medium">{t.workingHoursMonFri}</span>
                 <span className="text-gray-900 dark:text-white font-bold">17:00 - 22:00</span>
               </div>
               <div className="flex justify-between items-center text-[14px]">
                 <span className="text-gray-600 dark:text-gray-400 font-medium">{t.workingHoursSatSun}</span>
                 <span className="text-gray-900 dark:text-white font-bold">08:00 - 20:00</span>
               </div>
            </div>

            <div className="glass-panel p-8 md:p-10 rounded-[3rem] text-center reveal-on-scroll delay-400">
               <h3 className="font-bold text-gray-900 dark:text-white mb-3 text-[16px] tracking-tight">{t.response}</h3>
               <p className="text-[14px] text-gray-600 dark:text-gray-400 leading-relaxed font-medium">
                 {t.responseDesc}
               </p>
            </div>
          </div>
        </div>
      </div>
  );
};
