import React from 'react';

export const DetailCard = ({ title, content, children, icon: Icon, t }: any) => (
  <div className="bg-[#0d1117] border border-[#30363d] rounded-md p-5 md:p-6 mb-5 w-full relative group">
    {/* Optional status indicator on top left corner */}
    <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#1f6feb] to-purple-600 rounded-t-md opacity-50 group-hover:opacity-100 transition-opacity"></div>
    
    <h3 className="text-[14px] font-bold text-slate-200 mb-3 flex items-center gap-2">
      {Icon && <Icon size={16} className="text-[#58a6ff]" />} {title}
    </h3>
    {content ? (
      <div className="text-slate-400 text-[13px] leading-relaxed whitespace-pre-wrap font-mono">
        {content === 'Not available' || content === 'Tidak tersedia' ? (
          <span className="text-slate-600 italic">{'// ' + t.notAvailable}</span>
        ) : content}
      </div>
    ) : children}
  </div>
);
