import React from 'react';

export const NavItem = ({ icon: Icon, label, path, isActive, onNavigate }: any) => {
  return (
    <div 
      onClick={() => onNavigate(path)}
      className={`flex items-center px-4 py-1.5 cursor-pointer text-[13px] border-l-2 transition-colors ${
        isActive 
          ? 'bg-[#1f6feb]/10 text-blue-400 border-blue-500 font-medium' 
          : 'border-transparent text-slate-400 hover:bg-[#21262d] hover:text-slate-300'
      }`}
    >
      <Icon size={14} className={`mr-2.5 ${isActive ? 'text-blue-400' : 'text-slate-500'}`} />
      <span className="truncate">{label}</span>
      {isActive && <span className="ml-auto text-[10px] text-slate-500">M</span>}
    </div>
  );
};
