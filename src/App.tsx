import { motion } from 'motion/react';
import { Database, Layout, Terminal, Code2, Search, GraduationCap } from 'lucide-react';
import { useState } from 'react';
import { personalInfo, skills, experience, education, projects } from './data';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTech, setSelectedTech] = useState<string | null>(null);

  const allTechs = Array.from(new Set(projects.flatMap(p => p.technologies))).sort();

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         project.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTech = selectedTech ? project.technologies.includes(selectedTech) : true;
    return matchesSearch && matchesTech;
  });

  return (
    <div className="min-h-screen bg-black-bg text-text-main font-sans selection:bg-accent/30 relative bg-grid-pattern">
      {/* Background ambient glow */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[80vw] h-[50vh] bg-accent opacity-[0.05] blur-[150px] pointer-events-none rounded-full" />

      {/* Modern Top Navigation / Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black-bg/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="font-black text-xl tracking-tighter uppercase font-display select-none flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-accent relative">
               <div className="absolute inset-0 bg-accent rounded-full animate-ping opacity-75"></div>
            </div>
            MC_
          </div>
          <div className="flex gap-6 text-[13px] font-bold text-muted uppercase tracking-widest">
            <a href={personalInfo.github} target="_blank" rel="noreferrer" className="hover:text-accent transition-colors">Github</a>
            <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="hover:text-accent transition-colors">LinkedIn</a>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 pt-32 pb-24 space-y-32 relative z-10">
        
        {/* Dynamic Hero */}
        <section className="min-h-[60vh] flex flex-col justify-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col md:flex-row gap-12 md:gap-6 items-center md:items-start justify-between"
          >
            <div className="flex flex-col gap-6 flex-grow">
              <div className="flex items-center gap-4">
                <span className="text-accent text-sm md:text-md uppercase tracking-[4px] font-bold">
                  {personalInfo.role}
                </span>
                <div className="h-[1px] w-24 bg-gradient-to-r from-accent/50 to-transparent"></div>
              </div>
              
              <h1 className="text-[12vw] sm:text-[8vw] md:text-[6vw] lg:text-[80px] font-black tracking-[-2px] leading-[0.9] text-white font-display uppercase max-w-4xl">
                Desenvolvedor
                <span className="block text-border-dark italic">De Software.</span>
              </h1>
              
              <p className="text-lg md:text-xl text-muted max-w-2xl leading-relaxed mt-4">
                 {personalInfo.about}
              </p>

              <div className="flex gap-4 mt-8">
                 <a href="#projects" className="px-8 py-4 bg-white text-black font-bold uppercase tracking-wider text-xs rounded hover:bg-neutral-200 transition-colors">
                    Explorar Projetos
                 </a>
                 <a href={`mailto:${personalInfo.email}`} className="px-8 py-4 border border-border-dark text-white font-bold uppercase tracking-wider text-xs rounded hover:border-accent transition-colors glowing-border">
                    Entrar em Contato
                 </a>
              </div>
            </div>

            {/* Profile Photo Space */}
            <div className="relative group shrink-0 user-select-none">
              <div className="absolute -inset-1 bg-gradient-to-r from-accent to-purple-600 rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative w-64 h-64 md:w-80 md:h-80 bg-surface border border-border-dark rounded-xl overflow-hidden flex items-center justify-center">
                <img 
                  src="src/assets/54975598643_98a9065c82_k.jpg" 
                  alt="Marcus Vinicius Profile" 
                  className="w-full h-full object-cover relative z-10"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://picsum.photos/seed/marcus/800/800?blur=4';
                  }}
                />
              </div>
            </div>
          </motion.div>
        </section>

        {/* Dynamic Timeline Component (Experience) */}
        <section id="experience" className="relative">
           <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight mb-16 flex items-center gap-4">
              <span className="text-accent">01.</span> Experiência
              <div className="h-[1px] flex-grow bg-gradient-to-r from-border-dark to-transparent ml-4"></div>
           </h2>

           <div className="relative border-l border-border-dark ml-4 md:ml-8 space-y-16">
              {experience.map((exp, idx) => (
                <motion.div 
                   key={idx}
                   initial={{ opacity: 0, x: -20 }}
                   whileInView={{ opacity: 1, x: 0 }}
                   viewport={{ once: true, margin: "-100px" }}
                   transition={{ duration: 0.5, delay: idx * 0.1 }}
                   className="relative pl-8 md:pl-16 group"
                >
                   {/* Timeline Node */}
                   <div className="absolute -left-[5px] top-2 w-[9px] h-[9px] rounded-full bg-border-dark group-hover:bg-accent group-hover:scale-150 transition-all duration-300 shadow-[0_0_15px_rgba(176,38,255,0)] group-hover:shadow-[0_0_15px_rgba(176,38,255,0.8)]"></div>
                   
                   <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-6 mb-4">
                      <h3 className="text-2xl font-bold text-white group-hover:text-accent transition-colors font-sans">{exp.role}</h3>
                      <div className="text-sm font-bold text-muted uppercase tracking-widest">{exp.company}</div>
                      <div className="text-xs text-border-dark font-mono bg-surface px-3 py-1 rounded hidden md:block ml-auto border border-border-dark">
                         {exp.period}
                      </div>
                   </div>

                   {/* Tech Pills for Job */}
                   <div className="flex flex-wrap gap-2 mb-6">
                      {exp.tech.map(t => (
                         <span key={t} className="text-[10px] text-accent uppercase tracking-wider border border-accent/20 bg-accent/5 px-2 py-1 rounded">
                            {t}
                         </span>
                      ))}
                   </div>

                   <div className="space-y-3">
                      {exp.description.map((desc, j) => (
                         <div key={j} className="text-muted text-sm leading-relaxed max-w-3xl">
                            {desc}
                         </div>
                      ))}
                   </div>
                </motion.div>
              ))}
           </div>
        </section>

        {/* Bento Grid layout for Skills & Education */}
        <section id="bento-grid">
           <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight mb-16 flex items-center gap-4">
              <span className="text-accent">02.</span> Arsenal Técnico
              <div className="h-[1px] flex-grow bg-gradient-to-r from-border-dark to-transparent ml-4"></div>
           </h2>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(180px,auto)]">
              {/* Massive Skill Card 1 */}
              <div className="md:col-span-2 bg-surface border border-border-dark rounded-xl p-8 glowing-border hover:-translate-y-1 transition-transform group overflow-hidden relative">
                 <Terminal className="w-8 h-8 text-border-dark group-hover:text-accent transition-colors absolute top-8 right-8" />
                 <h3 className="text-xs font-bold text-muted uppercase tracking-widest mb-6">Backend & Architecture</h3>
                 <div className="flex flex-wrap gap-2 relative z-10">
                    {skills.backend.map(s => <span key={s} className="text-sm text-white bg-black-bg border border-border-dark rounded-full px-4 py-2 hover:border-accent hover:text-accent cursor-default transition-colors">{s}</span>)}
                 </div>
              </div>

               {/* Education Card */}
              <div className="bg-surface border border-border-dark rounded-xl p-8 glowing-border hover:-translate-y-1 transition-transform group flex flex-col justify-between">
                 <div>
                    <GraduationCap className="w-6 h-6 text-accent mb-6" />
                    <h3 className="text-xs font-bold text-muted uppercase tracking-widest mb-2">Formação</h3>
                    <div className="text-lg font-bold text-white leading-tight font-display">{education.degree}</div>
                    <div className="text-sm text-muted mt-2 leading-relaxed">{education.institution}</div>
                 </div>
                 <div className="mt-8 text-xs font-mono text-accent">Conclusão {education.period}</div>
              </div>

              {/* Smaller Skill Cards */}
              <div className="bg-surface border border-border-dark rounded-xl p-8 glowing-border hover:-translate-y-1 transition-transform group">
                 <Layout className="w-6 h-6 text-border-dark group-hover:text-accent transition-colors mb-6" />
                 <h3 className="text-xs font-bold text-muted uppercase tracking-widest mb-4">Frontend</h3>
                 <div className="flex flex-wrap gap-2">
                    {skills.frontend.map(s => <span key={s} className="text-xs text-muted hover:text-white transition-colors">{s}</span>).reduce((prev, curr) => [prev, <span className="text-border-dark">/</span>, curr] as any)}
                 </div>
              </div>

              <div className="bg-surface border border-border-dark rounded-xl p-8 glowing-border hover:-translate-y-1 transition-transform group">
                 <Database className="w-6 h-6 text-border-dark group-hover:text-accent transition-colors mb-6" />
                 <h3 className="text-xs font-bold text-muted uppercase tracking-widest mb-4">Dados & Nuvem</h3>
                 <div className="flex flex-wrap gap-2">
                    {skills.dataCloud.map(s => <span key={s} className="text-xs text-muted hover:text-white transition-colors">{s}</span>).reduce((prev, curr) => [prev, <span className="text-border-dark">/</span>, curr] as any)}
                 </div>
              </div>

              <div className="bg-surface border border-border-dark rounded-xl p-8 glowing-border hover:-translate-y-1 transition-transform group">
                 <Code2 className="w-6 h-6 text-border-dark group-hover:text-accent transition-colors mb-6" />
                 <h3 className="text-xs font-bold text-muted uppercase tracking-widest mb-4">DevOps & Tools</h3>
                 <div className="flex flex-wrap gap-2">
                    {skills.toolsDevOps.map(s => <span key={s} className="text-xs text-muted hover:text-white transition-colors">{s}</span>).reduce((prev, curr) => [prev, <span className="text-border-dark">/</span>, curr] as any)}
                 </div>
              </div>
           </div>
        </section>


        {/* Interactive Projects Grid */}
        <section id="projects">
           <div className="flex flex-col xl:flex-row justify-between items-start xl:items-end mb-16 gap-6 relative z-20">
              <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight flex items-center gap-4 w-full xl:w-auto">
                 <span className="text-accent">03.</span> Repositórios
                 <div className="h-[1px] hidden md:block flex-grow xl:w-32 bg-gradient-to-r from-border-dark to-transparent ml-4"></div>
              </h2>
              
              <div className="flex flex-col sm:flex-row gap-4 w-full xl:w-auto">
                <div className="relative flex-grow">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted" />
                  <input 
                    type="text" 
                    placeholder="Buscar projetos..." 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-surface border border-border-dark rounded font-mono py-3 pl-12 pr-4 text-xs text-white focus:outline-none focus:border-accent transition-colors shadow-inner"
                  />
                </div>
                
                <select 
                  value={selectedTech || ''} 
                  onChange={(e) => setSelectedTech(e.target.value || null)}
                  className="bg-surface border border-border-dark rounded font-mono py-3 px-6 text-xs text-white outline-none focus:border-accent transition-colors w-full sm:w-auto cursor-pointer appearance-none"
                >
                  <option value="">Filtrar Tecnologia</option>
                  {allTechs.map(tech => (
                    <option key={tech} value={tech}>{tech}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {filteredProjects.map((project, i) => (
                <motion.div
                  key={project.title}
                  whileHover={{ y: -5 }}
                  className={`group relative bg-[#0C0C0E] border border-border-dark p-8 md:p-10 flex flex-col justify-between overflow-hidden glowing-border min-h-[280px] ${project.featured ? 'md:col-span-2' : ''}`}
                >
                   {/* Background gradient on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-accent-muted to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className={`relative z-10 flex-grow flex flex-col ${project.imagePlaceholder ? 'md:flex-row gap-8 items-center' : ''}`}>
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-6">
                         <span className="font-mono text-accent text-sm tracking-widest">{String(i + 1).padStart(2, '0')} //</span>
                         {project.link !== '#' && (
                           <a href={project.link} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full border border-border-dark flex items-center justify-center text-muted hover:text-white hover:border-accent hover:bg-accent/10 transition-all">
                             ↗
                           </a>
                         )}
                      </div>
                      <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-text-main font-display leading-[1.1]">{project.title}</h3>
                      <p className="text-sm md:text-base text-muted mb-8 leading-relaxed max-w-xl">{project.description}</p>
                    </div>
                  </div>
                  
                  <div className="relative z-10 flex flex-wrap gap-x-4 gap-y-2 pt-6 border-t border-border-dark/50 mt-8 md:mt-auto">
                    {project.technologies.map(tech => (
                      <span key={tech} className="text-xs font-mono text-muted uppercase">
                        {tech}
                      </span>
                    ))}
                  </div>

                </motion.div>
              ))}
            </div>

            {filteredProjects.length === 0 && (
               <div className="text-center py-24 text-muted border border-border-dark border-dashed mt-8 font-mono text-xs uppercase bg-surface/50">
                 System: Nenhum projeto correspondente encontrado na query.
               </div>
            )}
        </section>

      </main>
      
      {/* Footer */}
      <footer className="border-t border-border-dark bg-surface">
         <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="font-mono text-xs text-muted uppercase tracking-widest">
               © {new Date().getFullYear()} Marcus Vinicius
            </div>
            <div className="font-mono text-[10px] text-border-dark uppercase tracking-widest flex gap-4">
               <span>Pwr by React</span>
               <span>//</span>
               <span>Built w/ Vite</span>
            </div>
         </div>
      </footer>
    </div>
  );
}

export default App;
