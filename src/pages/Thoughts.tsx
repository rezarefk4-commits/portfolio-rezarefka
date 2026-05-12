import React, { useState } from 'react';
import { Search, Calendar, Clock } from 'lucide-react';
import { useAppContext } from '../context/AppContext';

export const Thoughts = () => {
  const { blogs, navigate, t } = useAppContext();
  const [thoughtsSearch, setThoughtsSearch] = useState('');
  const [thoughtsFilter, setThoughtsFilter] = useState('All');

  const allTags = [t.all, ...new Set(blogs.map((b: any) => b.tag).filter(Boolean))];
      
  const filteredBlogs = blogs.filter((b: any) => {
    const titleMatch = (b.title || '').toLowerCase().includes((thoughtsSearch || '').toLowerCase());
    const summaryMatch = (b.summary || '').toLowerCase().includes((thoughtsSearch || '').toLowerCase());
    const matchesSearch = titleMatch || summaryMatch;
    
    const matchesFilter = thoughtsFilter === t.all || thoughtsFilter === 'All' || thoughtsFilter === 'Semua' || b.tag === thoughtsFilter;
    return matchesSearch && matchesFilter;
  });

  return (
      <div className="max-w-5xl mx-auto pt-6 w-full animate-page-enter">
        <h1 className="text-4xl font-black text-gray-900 dark:text-white mb-2 tracking-tight reveal-on-scroll delay-0">{t.thoughtsTitle}</h1>
        <p className="text-[16px] text-gray-600 dark:text-gray-400 mb-12 font-medium reveal-on-scroll delay-100">{t.thoughtsSub}</p>
        
        <div className="mb-12 w-full reveal-on-scroll delay-200">
          <div className="flex flex-col sm:flex-row gap-4 mb-8 w-full">
            <div className="relative flex-1">
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500" size={20} />
              <input type="text" placeholder={t.searchPlaceholder} value={thoughtsSearch} onChange={(e) => setThoughtsSearch(e.target.value)} className="w-full pl-14 pr-5 py-4 rounded-2xl glass-panel focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-white transition-all text-[15px] font-bold shadow-sm placeholder:font-medium" />
            </div>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl font-bold transition-all shadow-lg shadow-blue-500/30 text-[15px] hover:scale-[1.02] active:scale-95">{t.searchBtn}</button>
          </div>
          
          <div className="flex flex-wrap gap-2.5">
            {allTags.map((tag: any) => (
              <button key={tag} onClick={() => setThoughtsFilter(tag)} className={`px-5 py-2.5 rounded-xl text-[13px] font-bold transition-all ${thoughtsFilter === tag || (thoughtsFilter === 'All' && tag === 'Semua') ? 'bg-gray-900 text-white dark:bg-white dark:text-gray-900 shadow-md transform scale-105' : 'glass-panel text-gray-600 dark:text-gray-300 hover:bg-white/80 dark:hover:bg-slate-700/80'}`}>
                {tag}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
            {filteredBlogs.map((blog: any, idx: number) => (
              <div key={blog.id} onClick={() => navigate(`/thoughts/${blog.id}`)} className={`glass-panel rounded-[2.5rem] overflow-hidden cursor-pointer group hover:-translate-y-2 hover:shadow-2xl transition-all duration-500 flex flex-col w-full reveal-on-scroll border border-white/60 dark:border-white/10 delay-${(idx % 4) * 100}`}>
                <div className="h-64 overflow-hidden relative w-full"><img src={blog.thumbnail} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" alt="" /></div>
                <div className="p-8 flex-1 flex flex-col">
                  <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 px-3.5 py-1.5 rounded-lg text-[11px] font-black uppercase tracking-wider mb-5 w-fit shadow-sm border border-blue-200 dark:border-blue-800/30">{blog.tag}</span>
                  <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-3 group-hover:text-blue-500 transition-colors leading-snug tracking-tight">{blog.title}</h3>
                  <p className="text-[15px] text-gray-600 dark:text-gray-400 leading-relaxed mb-8 line-clamp-2 font-medium">{blog.summary}</p>
                  <div className="mt-auto flex items-center gap-6 text-[13px] font-bold text-gray-500 dark:text-gray-500 border-t border-black/5 dark:border-white/10 pt-5">
                    <div className="flex items-center gap-2"><Calendar size={16} className="text-gray-400"/> {blog.date}</div>
                    <div className="flex items-center gap-2"><Clock size={16} className="text-gray-400"/> {blog.readTime} {t.readText}</div>
                  </div>
                </div>
              </div>
            ))}
        </div>
        {filteredBlogs.length === 0 && <div className="py-20 text-center glass-panel rounded-[3rem] border border-dashed border-gray-300 dark:border-gray-700 w-full font-bold text-gray-500 reveal-on-scroll delay-0 text-lg">{t.noArticles}</div>}
      </div>
  );
};
