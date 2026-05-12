import React from 'react';
import { ArrowLeft, Calendar, MapPin, PlayCircle, Palette, Video, MessageSquare } from 'lucide-react';
import { useAppContext } from '../context/AppContext';

export const CreativeDetail = () => {
  const { currentPath, projects, navigate, t } = useAppContext();
  
  const id = currentPath.split('/')[2];
  const proj = projects.find((p: any) => p.id === id);
  
  if (!proj) return <div className="max-w-5xl mx-auto pt-20 text-center animate-page-enter"><h2 className="text-2xl font-bold text-gray-500">Karya tidak ditemukan.</h2><button onClick={() => navigate('/creative')} className="mt-4 text-blue-500 hover:underline font-bold">Kembali</button></div>;

  const galleryItems = proj.gallery || [{ type: 'image', url: proj.image, caption: proj.shortDesc }];

  return (
        <div className="max-w-6xl mx-auto pt-6 w-full animate-page-enter">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start w-full relative">
            <div className="w-full lg:w-1/3 flex flex-col gap-6 lg:sticky lg:top-24 z-10 reveal-on-scroll delay-0">
              <button onClick={() => navigate('/creative')} className="mb-4 flex items-center gap-2 px-5 py-2.5 glass-panel rounded-xl text-gray-700 dark:text-gray-300 text-sm font-bold shadow-sm w-fit hover:scale-105 active:scale-95 transition-all">
                <ArrowLeft size={16} /> {t.back}
              </button>
              <div className="flex flex-wrap gap-2">
                <span className="bg-blue-600 text-white px-3.5 py-1.5 rounded-lg text-xs font-bold tracking-wider shadow-sm uppercase">{proj.category || 'Creative Work'}</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tighter leading-[1.1]">{proj.title}</h1>
              <div className="flex flex-wrap items-center gap-4 text-[14px] font-bold text-gray-600 dark:text-gray-400 border-y border-black/5 dark:border-white/10 py-5 mt-2">
                {proj.date && <div className="flex items-center gap-2"><Calendar size={16} className="text-blue-500"/> {proj.date}</div>}
                {proj.location && <div className="flex items-center gap-2"><MapPin size={16} className="text-blue-500"/> {proj.location}</div>}
              </div>
              <div className="prose prose-base dark:prose-invert text-gray-700 dark:text-gray-300 font-medium leading-relaxed">
                <p>{proj.overview || proj.shortDesc}</p>
                {(proj.bullets || []).length > 0 && (
                  <ul className="list-disc pl-5 space-y-2 mt-4">
                    {proj.bullets.map((b: string, i: number) => <li key={i}>{b}</li>)}
                  </ul>
                )}
              </div>
              <div className="mt-4">
                <h4 className="text-xs font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-4">Tools & Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {(proj.tech || []).map((tItem: string, i: number) => <span key={i} className="text-[12px] font-bold glass-panel text-gray-700 dark:text-gray-300 px-3.5 py-1.5 rounded-lg border border-white/60 dark:border-white/10">{tItem}</span>)}
                </div>
              </div>
              <div className="glass-panel rounded-2xl p-6 mt-6 border-l-4 border-l-blue-500">
                <p className="text-[11px] text-gray-400 uppercase tracking-widest font-black mb-1.5">Klien / Organizer</p>
                <p className="text-[15px] font-black text-gray-900 dark:text-white">{proj.client || proj.organizer || 'Not Available'}</p>
              </div>
            </div>

            <div className="w-full lg:w-2/3 flex flex-col gap-12 pb-16">
               {galleryItems.map((media: any, idx: number) => (
                  <div key={idx} className={`w-full flex flex-col gap-5 reveal-on-scroll delay-${(idx % 4) * 100}`}>
                     <div className="w-full rounded-[2.5rem] overflow-hidden glass-panel group relative border border-white/60 dark:border-white/10 shadow-lg">
                        {media.type === 'video' ? (
                          <div className="aspect-[4/3] md:aspect-video w-full relative flex items-center justify-center bg-black cursor-pointer">
                            <img src={media.url} alt="Video Thumbnail" className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:scale-105 transition-transform duration-1000" />
                            <div className="w-24 h-24 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(0,0,0,0.4)] z-10 group-hover:bg-blue-600 group-hover:scale-110 transition-all duration-300 border border-white/40">
                              <PlayCircle size={48} className="text-white ml-1.5 drop-shadow-md" />
                            </div>
                            <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                               <div className="h-2 w-full bg-white/30 rounded-full mb-2 overflow-hidden"><div className="h-full w-1/3 bg-blue-500 rounded-full"></div></div>
                            </div>
                          </div>
                        ) : (
                          <img src={media.url} alt={`Gallery ${idx}`} className="w-full h-auto object-cover max-h-[80vh]" />
                        )}
                     </div>
                     {media.caption && (
                       <div className="px-6 flex items-start gap-4">
                         <div className="w-10 h-10 rounded-xl glass-panel flex items-center justify-center shrink-0 mt-0.5 border border-white/60 dark:border-white/10 shadow-sm">
                            {media.type === 'video' ? <Video size={18} className="text-blue-500"/> : <Palette size={18} className="text-blue-500"/>}
                         </div>
                         <p className="text-[15px] font-medium text-gray-700 dark:text-gray-300 leading-relaxed max-w-2xl pt-2">{media.caption}</p>
                       </div>
                     )}
                  </div>
               ))}
               <div className="glass-panel rounded-[3rem] p-12 text-center reveal-on-scroll delay-100 mt-10 relative overflow-hidden border border-white/60 dark:border-white/10">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10"></div>
                  <h3 className="text-3xl font-black text-gray-900 dark:text-white mb-4 relative z-10 tracking-tight">Punya Ide Kreatif?</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-10 max-w-md mx-auto relative z-10 font-medium leading-relaxed">Mari ciptakan mahakarya visual dan campaign yang memukau untuk brand Anda bersama saya.</p>
                  <button onClick={() => navigate('/contact')} className="px-10 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-2xl font-bold transition-all shadow-xl mx-auto flex items-center gap-2 relative z-10 hover:scale-105 active:scale-95 text-[15px]">
                    Mulai Diskusi <MessageSquare size={18}/>
                  </button>
               </div>
            </div>
          </div>
        </div>
  );
};
