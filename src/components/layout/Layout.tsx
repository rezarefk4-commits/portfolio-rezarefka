import React from 'react';
import { useAppContext } from '../../context/AppContext';
import { Sidebar } from './Sidebar';
import { Menu, X, Check, Code, Play } from 'lucide-react';

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const { profile, isMobileMenuOpen, setIsMobileMenuOpen, toastMessage, currentPath } = useAppContext();

  // Create a mapping of paths to 'filenames' for the IDE tabs
  const getTabName = () => {
    if (currentPath === '/') return 'home.tsx';
    const cleanPath = currentPath.replace('/', '');
    return cleanPath.includes('/') ? cleanPath.split('/')[1] + '.tsx' : cleanPath + '.tsx';
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-[#0d1117] text-gray-800 dark:text-slate-300 font-sans selection:bg-blue-200 dark:selection:bg-[#1f6feb]/30 dark:selection:text-white">
       {toastMessage && (
          <div className="fixed bottom-12 right-6 z-[100] animate-dashboard-enter">
             <div className="bg-white dark:bg-[#161b22] px-4 py-3 rounded-md shadow-2xl flex items-center gap-3 border border-gray-200 dark:border-[#30363d]">
                <div className="text-green-500 dark:text-green-400"><Check size={16} strokeWidth={3} /></div>
                <p className="text-[13px] font-medium text-gray-800 dark:text-slate-200">{toastMessage}</p>
             </div>
          </div>
       )}

       {/* Top Navigation Bar / Header */}
       <header className="h-10 sm:h-12 flex-none bg-white dark:bg-[#161b22] border-b border-gray-200 dark:border-[#30363d] flex items-center px-4 justify-between z-50">
          <div className="flex items-center space-x-4">
             <div className="hidden sm:flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
             </div>
             <div className="flex items-center gap-2 ml-0 sm:ml-4">
                <Code size={16} className="text-blue-600 dark:text-blue-400" />
                <span className="text-xs font-semibold text-gray-500 dark:text-slate-400 tracking-widest uppercase">{profile.name.split(' ')[0]} - Workspace</span>
             </div>
          </div>
          <div className="flex items-center space-x-2">
             <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="lg:hidden p-1.5 text-gray-500 dark:text-slate-400 hover:text-gray-900 dark:hover:text-slate-200">
               {isMobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
             </button>
             <button className="hidden sm:flex px-3 py-1 bg-gray-100 dark:bg-[#21262d] border border-gray-200 dark:border-[#30363d] text-gray-700 dark:text-slate-300 text-[11px] rounded hover:bg-gray-200 dark:hover:bg-[#30363d] font-medium items-center gap-1.5">
               <span className="w-2 h-2 rounded-full bg-green-500"></span> Online
             </button>
             <button className="hidden sm:flex px-3 py-1 bg-blue-600 dark:bg-[#1f6feb] text-white text-[11px] rounded hover:bg-blue-700 dark:hover:bg-[#388bfd] font-medium items-center gap-1.5">
               <Play size={12} /> Compile
             </button>
          </div>
       </header>

       {/* Main App Container */}
       <div className="flex-1 flex flex-col lg:flex-row relative">
          
          {/* Mobile Sidebar Overlay */}
          {isMobileMenuOpen && (
             <div className="fixed inset-0 bg-gray-900/50 dark:bg-[#0d1117]/80 backdrop-blur-sm z-40 lg:hidden" onClick={() => setIsMobileMenuOpen(false)} />
          )}
          
          <Sidebar />
          
          {/* Main Editor View */}
          <main className="flex-1 flex flex-col bg-gray-50 dark:bg-[#0d1117] min-w-0">
             
             {/* Tabs Bar */}
             <div className="h-9 flex-none bg-gray-100 dark:bg-[#161b22] flex items-end px-2 space-x-0.5 overflow-x-auto hide-scrollbar border-b border-gray-200 dark:border-transparent">
                <div className="px-4 py-1.5 bg-gray-50 dark:bg-[#0d1117] text-blue-600 dark:text-[#58a6ff] text-xs rounded-t flex items-center border-t border-x border-gray-200 dark:border-[#30363d] min-w-max">
                   {getTabName()} <span className="ml-3 text-[10px] text-gray-400 dark:text-slate-500 hover:text-gray-800 dark:hover:text-slate-300 cursor-pointer">×</span>
                </div>
                <div className="px-4 py-1.5 text-gray-500 dark:text-slate-500 text-xs rounded-t flex items-center border-t border-x border-transparent hover:bg-gray-200/50 dark:hover:bg-[#0d1117]/50 cursor-pointer min-w-max hidden sm:flex">
                   README.md
                </div>
             </div>

             {/* Code Editor Content Area */}
             <div className="flex-1 overflow-y-auto custom-scrollbar relative flex bg-gray-50 dark:bg-[#0d1117]">
                
                {/* Line Numbers simulating IDE */}
                <div className="hidden sm:block w-12 flex-none bg-gray-50 dark:bg-[#0d1117] border-r border-gray-200 dark:border-[#30363d] text-right pr-3 pt-6 text-gray-400 dark:text-[#484f58] font-mono text-sm leading-6 select-none bg-gradient-to-b from-gray-50 dark:from-[#0d1117] to-gray-50 dark:to-[#0d1117]">
                   {Array.from({ length: 50 }).map((_, i) => (
                      <div key={i}>{i + 1}</div>
                   ))}
                </div>
                
                <div className="flex-1 max-w-[1400px] w-full p-6 sm:p-8 relative">
                   {children}
                </div>
             </div>

             {/* Footer Status Bar */}
             <footer className="h-6 flex-none bg-gray-50 dark:bg-[#0d1117] border-t border-gray-200 dark:border-[#30363d] px-4 flex items-center justify-between text-[10px] text-gray-500 dark:text-slate-500 hidden sm:flex font-mono">
                <div className="flex space-x-4 items-center">
                   <div className="flex items-center text-blue-600 dark:text-[#58a6ff]"><span className="w-2 h-2 rounded-full bg-blue-600 dark:bg-[#1f6feb] mr-2"></span> main*</div>
                   <div className="flex items-center gap-1.5"><X size={10} className="text-red-500 dark:text-red-400"/> 0</div>
                   <div className="flex items-center gap-1.5">! 0</div>
                </div>
                <div className="flex space-x-6 items-center">
                   <div>Ln {Math.floor(Math.random() * 50) + 10}, Col {Math.floor(Math.random() * 80) + 5}</div>
                   <div>Spaces: 2</div>
                   <div>UTF-8</div>
                   <div>CRLF</div>
                   <div className="text-blue-600 dark:text-[#58a6ff]">TypeScript React</div>
                </div>
             </footer>
          </main>
       </div>
    </div>
  );
};
