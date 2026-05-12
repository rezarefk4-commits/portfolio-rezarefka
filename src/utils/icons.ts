import { Code, Terminal, Lightbulb, Mic, Palette, Database, Monitor, Smartphone, Server } from 'lucide-react';

export const getIcon = (name: string) => {
  switch(name) {
     case 'Code': return Code;
     case 'Terminal': return Terminal;
     case 'Lightbulb': return Lightbulb;
     case 'Mic': return Mic;
     case 'Palette': return Palette;
     case 'Database': return Database;
     case 'Monitor': return Monitor;
     case 'Smartphone': return Smartphone;
     case 'Server': return Server;
     default: return Code;
  }
};
