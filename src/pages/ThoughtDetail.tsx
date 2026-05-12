import React from 'react';
import { ArrowLeft, Share2, User, Calendar, Clock } from 'lucide-react';
import { useAppContext } from '../context/AppContext';

export const ThoughtDetail = () => {
  const { currentPath, blogs, navigate, profile, t } = useAppContext();
  
  const id = currentPath.split('/')[2];
  const blog = blogs.find((b: any) => b.id === id);

  if (!blog) return <div className="max-w-5xl mx-auto pt-20 text-center animate-page-enter"><h2 className="text-2xl font-bold text-gray-500">Artikel tidak ditemukan.</h2><button onClick={() => navigate('/thoughts')} className="mt-4 text-blue-500 hover:underline font-bold">Kembali</button></div>;
  
  return (
        <div className="max-w-4xl mx-auto pt-6 w-full animate-page-enter glass-panel p-8 sm:p-12 md:p-16 rounded-[3rem] reveal-on-scroll delay-0 border border-white/60 dark:border-white/10 shadow-xl">
          <div className="flex justify-between items-center mb-10">
            <button onClick={() => navigate('/thoughts')} className="flex items-center gap-2 text-gray-600 dark:text-gray-400 font-bold hover:text-blue-600 dark:hover:text-blue-400 transition-colors bg-white/50 dark:bg-slate-800/50 px-5 py-2.5 rounded-xl shadow-sm"><ArrowLeft size={16} /> {t.back}</button>
            <button className="flex items-center gap-2 text-gray-600 dark:text-gray-400 font-bold hover:text-blue-600 dark:hover:text-blue-400 transition-colors bg-white/50 dark:bg-slate-800/50 px-5 py-2.5 rounded-xl shadow-sm"><Share2 size={16} /> {t.share}</button>
          </div>
          <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 px-4 py-1.5 rounded-lg text-xs font-black tracking-wider uppercase inline-block shadow-sm border border-blue-200 dark:border-blue-800/30 mb-6">{blog.tag || 'AI'}</span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-gray-900 dark:text-white mb-8 leading-[1.15] tracking-tighter">{blog.title}</h1>
          <div className="flex flex-wrap items-center gap-6 sm:gap-8 text-[14px] text-gray-500 dark:text-gray-400 mb-10 font-bold border-b border-black/5 dark:border-white/10 pb-8">
            <div className="flex items-center gap-2.5"><User size={18} className="text-blue-500"/> {profile.name}</div>
            <div className="flex items-center gap-2.5"><Calendar size={18} className="text-blue-500"/> {blog.date}</div>
            <div className="flex items-center gap-2.5"><Clock size={18} className="text-blue-500"/> {blog.readTime || '10 min'} {t.readText}</div>
          </div>
          <div className="w-full rounded-[2rem] overflow-hidden shadow-xl mb-12 border border-white/50 dark:border-white/10">
            <img src={blog.thumbnail} alt={blog.title} className="w-full h-auto max-h-[500px] object-cover" />
          </div>
          <div className="prose prose-lg dark:prose-invert max-w-none text-gray-800 dark:text-gray-200 leading-loose font-medium">
            <div className="bg-blue-50/50 dark:bg-slate-800/50 backdrop-blur-md p-8 md:p-10 rounded-[2rem] border border-blue-100/50 dark:border-white/5 mb-10 shadow-inner">
              <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-4 mt-0 tracking-tight">Sesi Pengetahuan</h3>
              <p className="mb-0 text-gray-700 dark:text-gray-300 leading-relaxed text-[16px]">{blog.summary}</p>
            </div>
            <p className="mb-6 text-[17px]">Perkembangan teknologi bergerak sangat cepat. <strong className="text-gray-900 dark:text-white font-black">Pastikan Anda selalu memperbarui pengetahuan Anda.</strong> Membaca artikel, mencoba teknologi baru, dan bereksperimen dengan kode adalah kunci untuk tetap relevan di industri ini.</p>
            <h2 className="text-3xl font-black text-gray-900 dark:text-white mt-12 mb-6 tracking-tight">Mengapa Ini Penting?</h2>
            <p className="mb-6 text-[17px]">Dalam dunia digital yang serba cepat, adaptasi adalah segalanya. Kita tidak bisa hanya mengandalkan ilmu masa lalu untuk menyelesaikan tantangan masa depan. Oleh karena itu, *continuous learning* harus menjadi bagian dari rutinitas harian seorang developer.</p>
          </div>
        </div>
  );
};
