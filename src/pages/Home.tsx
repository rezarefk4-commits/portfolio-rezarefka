import React from 'react';
import { ChevronRight, Code, ExternalLink, Mail, Phone, Github, Linkedin, Instagram } from 'lucide-react';
import { useAppContext } from '../context/AppContext';
import { getIcon } from '../utils/icons';

export const Home = () => {
  const { profile, services, projects, blogs, navigate, t } = useAppContext();

  return (
      <div className="max-w-5xl mx-auto space-y-12 pb-24 w-full animate-page-enter font-sans">
        
        {/* HEADER / HERO SECTION */}
        <div className="pt-8 md:pt-12 flex flex-col md:flex-row items-center justify-between gap-12 w-full">
          <div className="flex-1 text-center md:text-left z-10 w-full">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 dark:text-slate-100 mb-4 tracking-tight leading-tight">
              {profile.name}
            </h1>
            <h2 className="text-lg sm:text-xl text-blue-600 dark:text-[#58a6ff] font-bold mb-8 flex items-center justify-center md:justify-start gap-2 tech-mono">
              <Code size={18} strokeWidth={2}/> {profile.role}
            </h2>
            <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start w-full sm:w-auto">
              <button onClick={() => navigate('/contact')} className="px-6 py-2.5 rounded bg-blue-600 dark:bg-[#1f6feb] hover:bg-blue-700 dark:hover:bg-[#388bfd] text-white font-medium transition-colors flex items-center justify-center gap-2 text-sm">
                export async start() <ChevronRight size={16} />
              </button>
              <button onClick={() => navigate('/technical')} className="px-6 py-2.5 rounded bg-white dark:bg-[#21262d] hover:bg-gray-50 dark:hover:bg-[#30363d] border border-gray-200 dark:border-[#30363d] text-gray-700 dark:text-slate-300 font-medium transition-colors flex items-center justify-center gap-2 text-sm">
                view architecture
              </button>
            </div>
          </div>
          <div className="w-40 h-40 shrink-0 relative z-10 hidden sm:block">
            <img src={profile.profileImage} alt="Profile" className="w-full h-full object-cover rounded-md border border-gray-200 dark:border-[#30363d] shadow-xl dark:shadow-2xl relative" />
          </div>
        </div>
        
        <div className="bg-white dark:bg-[#090d13] border border-gray-200 dark:border-[#30363d] p-6 rounded-md w-full relative group">
          <div className="absolute top-0 left-0 px-3 py-0.5 bg-gray-100 dark:bg-[#30363d] text-[10px] text-gray-500 dark:text-slate-400 rounded-br-md tech-mono">README.md</div>
          <p className="text-gray-700 dark:text-slate-300 leading-relaxed text-[14px] mt-4 font-mono whitespace-pre-wrap">
            {profile.bio}
          </p>
        </div>

        {/* KEAHLIAN UTAMA (SERVICES) */}
        <div className="w-full">
          <h2 className="text-lg font-bold text-gray-900 dark:text-slate-100 mb-5 tracking-tight border-b border-gray-200 dark:border-[#30363d] pb-2 flex items-center gap-2">
             <span className="text-purple-600 dark:text-purple-400">#</span> {t.whatIDo}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {services.map(srv => {
               const IconComp = getIcon(srv.icon);
               return (
                 <div key={srv.id} className="p-5 border border-gray-200 dark:border-[#30363d] rounded-md bg-white dark:bg-[#0d1117] flex gap-4 hover:border-gray-300 dark:hover:border-slate-500 transition-colors items-start group shadow-sm dark:shadow-none">
                   <div className="w-10 h-10 rounded bg-gray-50 dark:bg-[#161b22] border border-gray-200 dark:border-[#30363d] flex items-center justify-center shrink-0 text-gray-500 dark:text-[#8b949e] group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                     <IconComp size={18} />
                   </div>
                   <div>
                     <h3 className="text-[14px] font-bold text-gray-800 dark:text-slate-200 mb-1">{srv.title}</h3>
                     <p className="text-[13px] text-gray-600 dark:text-slate-400 leading-relaxed">{srv.desc}</p>
                   </div>
                 </div>
               )
            })}
          </div>
        </div>

        {/* PROYEK UNGGULAN */}
        <div className="w-full">
          <h2 className="text-lg font-bold text-gray-900 dark:text-slate-100 mb-5 tracking-tight border-b border-gray-200 dark:border-[#30363d] pb-2 flex items-center gap-2">
             <span className="text-blue-600 dark:text-[#58a6ff]">#</span> {t.featuredProjects}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {projects.filter(p => p.type === 'technical' && p.featured).slice(0, 4).map(proj => (
               <div key={proj.id} onClick={() => navigate(`/technical/${proj.id}`)} className="p-5 border border-gray-200 dark:border-[#30363d] rounded-md bg-white dark:bg-[#0d1117] hover:border-gray-300 dark:hover:border-slate-500 transition-colors cursor-pointer flex flex-col group shadow-sm dark:shadow-none">
                 <h3 className="text-[15px] font-bold text-gray-800 dark:text-slate-200 mb-2 group-hover:text-blue-600 dark:group-hover:text-[#58a6ff] transition-colors">{proj.title}</h3>
                 <p className="text-[13px] text-gray-600 dark:text-slate-400 line-clamp-2 leading-relaxed flex-grow mb-4">{proj.shortDesc}</p>
                 <div className="flex flex-wrap gap-2">
                    {(proj.tech || []).slice(0, 4).map((techItem: string) => <span key={techItem} className="text-[11px] bg-gray-50 dark:bg-[#161b22] border border-gray-200 dark:border-[#30363d] text-gray-600 dark:text-slate-300 px-2.5 py-1 rounded shadow-sm dark:shadow-none">{techItem}</span>)}
                 </div>
               </div>
            ))}
          </div>
          <div className="mt-6 flex justify-start">
            <button onClick={() => navigate('/technical')} className="flex items-center gap-2 text-xs text-blue-600 dark:text-[#58a6ff] hover:text-blue-700 dark:hover:text-[#79c0ff] transition-colors">
              // view_all_projects() <ExternalLink size={12} />
            </button>
          </div>
        </div>

        {/* THOUGHTS TERBARU */}
        <div className="w-full">
          <h2 className="text-lg font-bold text-gray-900 dark:text-slate-100 mb-5 tracking-tight border-b border-gray-200 dark:border-[#30363d] pb-2 flex items-center gap-2">
             <span className="text-green-600 dark:text-green-400">#</span> Thoughts Terbaru
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {blogs.slice(0, 4).map(blog => (
               <div key={blog.id} onClick={() => navigate(`/thoughts/${blog.id}`)} className="p-5 border border-gray-200 dark:border-[#30363d] rounded-md bg-white dark:bg-[#0d1117] hover:border-gray-300 dark:hover:border-slate-500 transition-colors cursor-pointer flex flex-col group shadow-sm dark:shadow-none">
                 <h3 className="text-[15px] font-bold text-gray-800 dark:text-slate-200 mb-2 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors line-clamp-1">{blog.title}</h3>
                 <p className="text-[13px] text-gray-600 dark:text-slate-400 line-clamp-2 leading-relaxed flex-grow mb-4">{blog.summary}</p>
                 <div className="flex items-center gap-3 text-[12px] text-gray-500 dark:text-slate-500 tech-mono">
                    <span className="text-blue-600 dark:text-[#58a6ff]">{blog.tag}</span>
                    <span>• {blog.date}</span>
                 </div>
               </div>
            ))}
          </div>
          <div className="mt-6 flex justify-start">
            <button onClick={() => navigate('/thoughts')} className="flex items-center gap-2 text-xs text-blue-600 dark:text-[#58a6ff] hover:text-blue-700 dark:hover:text-[#79c0ff] transition-colors">
              // read_all_thoughts() <ExternalLink size={12} />
            </button>
          </div>
        </div>

        {/* FOOTER KONTAK */}
        <footer className="w-full pt-8">
          <div className="bg-white dark:bg-[#161b22] p-8 rounded-md w-full border border-gray-200 dark:border-[#30363d] shadow-sm dark:shadow-none">
             <h2 className="text-xl font-bold text-gray-900 dark:text-slate-100 mb-3 tracking-tight">System.out.println("Mari Berkolaborasi");</h2>
             <p className="text-[13px] text-gray-600 dark:text-slate-400 max-w-lg mb-8 leading-relaxed font-mono">Punya ide proyek atau ingin berdiskusi? Inisialisasi koneksi melalui titik akhir di bawah.</p>
             <div className="flex flex-wrap gap-4 mb-8">
                <a href={`mailto:${profile.email}`} className="flex items-center gap-2 px-6 py-2.5 bg-blue-600 dark:bg-[#1f6feb] text-white rounded text-sm hover:bg-blue-700 dark:hover:bg-[#388bfd] transition-colors shadow-sm"><Mail size={16}/> mail.send()</a>
                <a href={`https://wa.me/${profile.whatsapp.replace(/\D/g, '')}`} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-6 py-2.5 bg-gray-50 dark:bg-[#21262d] border border-gray-200 dark:border-[#30363d] text-gray-700 dark:text-slate-300 rounded text-sm hover:bg-gray-100 dark:hover:bg-[#30363d] transition-colors shadow-sm"><Phone size={16}/> wss://whatsapp</a>
             </div>
             <div className="flex gap-4 border-t border-gray-200 dark:border-[#30363d] pt-6">
                <a href={profile.socials.github} target="_blank" rel="noreferrer" className="text-gray-500 hover:text-gray-800 dark:text-slate-500 dark:hover:text-slate-300 transition-colors"><Github size={18}/></a>
                <a href={profile.socials.linkedin} target="_blank" rel="noreferrer" className="text-gray-500 hover:text-gray-800 dark:text-slate-500 dark:hover:text-slate-300 transition-colors"><Linkedin size={18}/></a>
                <a href={profile.socials.instagram} target="_blank" rel="noreferrer" className="text-gray-500 hover:text-gray-800 dark:text-slate-500 dark:hover:text-slate-300 transition-colors"><Instagram size={18}/></a>
             </div>
          </div>
          <div className="mt-6 text-left text-[11px] text-gray-500 dark:text-slate-600 font-mono">
             <p>/* © {new Date().getFullYear()} {profile.name}. Designed for Build. */</p>
          </div>
        </footer>
      </div>
  );
};
