export const initialProfile = {
  name: 'Aditya Fakhri Riansyah',
  role: 'AI-Driven Web Developer',
  bio: 'Saya membangun aplikasi web dan seluler modern dengan fokus pada performa dan pengalaman pengguna. Selanjutnya, saya aktif berbagi wawasan AI sebagai Pembicara Teknologi, membimbing talenta digital masa depan melalui pemrograman, dan berbicara di berbagai konferensi pengembang web.',
  email: 'adityafakhri03@gmail.com',
  whatsapp: '+62 895 8088 60080',
  location: 'Bandung, Indonesia',
  profileImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200',
  cvUrl: '',
  socials: {
    github: 'https://github.com/',
    linkedin: 'https://linkedin.com/',
    instagram: 'https://instagram.com/'
  }
};

export const initialExperiences = [
  { id: 'exp1', role: 'Senior Frontend Developer', company: 'Tech Studio Indonesia', period: '2024 - Sekarang', desc: 'Memimpin tim frontend dalam membangun aplikasi SaaS enterprise menggunakan Next.js, TypeScript, dan Tailwind CSS. Mengoptimalkan performa load website hingga 40%.' },
  { id: 'exp2', role: 'Web Developer Intern', company: 'Creative Digital Agency', period: '2023 - 2024', desc: 'Berkontribusi pada pengembangan lebih dari 5 website klien menggunakan React dan ekosistem modern. Membuat antarmuka pengguna interaktif dengan framer-motion.' }
];

export const initialEducations = [
  { id: 'edu1', degree: 'Sarjana Komputer (S.Kom)', institution: 'Universitas Teknologi Bandung', period: '2020 - 2024', desc: 'Lulus dengan predikat Cum Laude (IPK 3.85). Fokus pada Rekayasa Perangkat Lunak dan Kecerdasan Buatan (AI).' },
  { id: 'edu2', degree: 'Full-Stack Web Bootcamp', institution: 'Dicoding Academy', period: '2022', desc: 'Menyelesaikan program intensif pengembangan web selama 4 bulan mencakup Node.js, React, dan integrasi Database.' }
];

export const initialSkills = [
  { id: '1', name: 'React', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', invert: false },
  { id: '2', name: 'Next.js', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg', invert: true },
  { id: '3', name: 'Tailwind CSS', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg', invert: false },
  { id: '4', name: 'Node.js', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', invert: false },
  { id: '5', name: 'Figma', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg', invert: false },
  { id: '6', name: 'TypeScript', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', invert: false }
];

export const initialLinks = [
  { id: '1', label: '🔥 E-Book: Master React & Next.js', url: '#', desc: 'Produk Digital' },
  { id: '2', label: '💻 Template: Glass UI Pro', url: '#', desc: 'Source Code' },
  { id: '3', label: '🤝 Join Komunitas RuangAI', url: '#', desc: 'Discord Gratis' }
];

export const initialProjects = [
  { 
    id: 'gambaryuk', title: 'GambarYuk', subtitle: 'Modern Image Processing Tool',
    shortDesc: 'Alat pengolahan gambar modern dengan fitur manipulasi gambar berbasis web.', 
    type: 'technical', category: 'Web Application', status: 'Production', year: '2024', featured: true, role: 'Full-Stack Developer', client: 'Not available', duration: 'Not available',
    overview: 'GambarYuk is a web application for instant image processing, ranging from resizing and cropping to advanced filters.\n\nModern image processing tool with web-based image manipulation features.',
    goals: 'Not available', features: 'Not available', challenges: 'Not available', outcomes: 'Not available',
    techGrouped: { Frontend: ['Next.js', 'TypeScript', 'TailwindCSS'], Processing: ['Canvas API', 'Sharp'] },
    tech: ['TypeScript', 'Next.js', 'Canvas API', 'Image Processing'], 
    image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&q=80&w=800' 
  },
  { 
    id: 'invoiceyuk', title: 'InvoiceYuk', subtitle: 'Fast and professional invoice creation',
    shortDesc: 'Solusi pembuatan invoice cepat dan profesional untuk freelancer dan UMKM.', 
    type: 'technical', category: 'Web Application', status: 'Production', year: '2023', featured: true, role: 'Frontend Engineer', client: 'Not available', duration: '3 Months',
    overview: 'InvoiceYuk helps freelancers and small businesses generate, track, and manage invoices easily.', goals: 'Not available', features: 'Not available', challenges: 'Not available', outcomes: 'Not available',
    tech: ['TypeScript', 'Next.js', 'Prisma', 'PostgreSQL'], 
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=800' 
  },
  { 
    id: 'creative-workshop', title: 'Internal Company Workshop: AI Productivity', 
    client: 'Pertamina Patra Niaga', shortDesc: 'Internal workshop discussing the use of AI to improve work productivity.', 
    date: '15 April 2026', location: 'Jakarta', category: 'Workshop', organizer: 'Pertamina', type: 'creative', 
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800', 
    tech: ['AI', 'Data Visualization', 'Vibe Coding', 'Productivity'],
    overview: 'Internal workshop discussing the use of AI to improve work productivity.',
    bullets: ['Data visualization', 'Meeting minutes with AI'],
    gallery: [
      { type: 'image', url: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200', caption: 'Sesi pengenalan AI untuk produktivitas kerja.' },
      { type: 'video', url: 'https://images.unsplash.com/photo-1540317580384-e5d43616b9aa?auto=format&fit=crop&q=80&w=1200', caption: 'Cuplikan Video: Live demo Vibe Coding membuat aplikasi dalam 10 menit.' }
    ]
  }
];

export const initialBlogs = [
  { id: 'thoughts-ai', title: 'Rahasia Prompt Engineering 2026: Rumus, Teknik, dan Template yang Bikin AI Nurut Sama Lo', summary: 'Panduan lengkap prompt engineering — dari rumus dasar sampai teknik advanced. Pelajari cara bikin prompt yang presisi...', date: '27 Apr 2026', readTime: '18 min', tag: 'AI', content: 'Di era modern ini, kemampuan menyusun prompt bukan sekadar mengetik pertanyaan...', thumbnail: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=800' },
  { id: 'ai-vs-developer', title: 'AI vs Developer: Apakah Programmer Bakal Digantiin di 2026?', summary: 'Debat panas soal masa depan programmer di era AI...', date: '10 Mei 2026', readTime: '10 min', tag: 'AI', content: 'Banyak yang khawatir bahwa AI akan menggantikan programmer...', thumbnail: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800' }
];

export const initialServices = [
  { id: 'srv1', title: 'Front-End Development', desc: 'React, Next.js, Tailwind CSS, Bootstrap, HTML/CSS', icon: 'Code' },
  { id: 'srv2', title: 'Back-End Development', desc: 'PHP, Laravel, JavaScript, MySQL', icon: 'Terminal' },
  { id: 'srv3', title: 'Mentoring', desc: 'Bimbingan teknis, Pengembangan karier, Code reviews, dan Workshop interaktif', icon: 'Lightbulb' },
  { id: 'srv4', title: 'Content Creation', desc: 'Artikel teknis, Tutorial, Konten media sosial teknologi/pemrograman', icon: 'Mic' }
];
