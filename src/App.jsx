import React from 'react';
import foto from './assets/foto.png'; // Asegúrate de que tu foto esté en src/assets/foto.png

// Componente reutilizable para los iconos de SVG (para limpieza del código)
const Icon = ({ path, className = "w-5 h-5", viewbox="0 0 24 24" }) => (
  <svg className={className} fill="none" viewBox={viewbox} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={path} />
  </svg>
);

// --- DATOS DEL CV (Fáciles de editar aquí) ---
const contacto = [
  { label: 'franciscotomasolmossandin@gmail.com', href: 'mailto:franciscotomasolmossandin@gmail.com', icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" },
  { label: '+54 3512277843', href: 'tel:3512277843', icon: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" },
  { label: 'Córdoba Capital, Argentina', icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z" },
];

const techSkills = ['Python', 'Java', 'C', 'C++', 'Git'];
const softSkills = ['Trabajo en equipo', 'Aprendizaje rápido', 'Resolución de problemas', 'Responsabilidad y compromiso', 'Buena comunicación'];
const idiomas = [{ lang: 'Español', nivel: 'Nativo' }, { lang: 'Inglés', nivel: 'B2 Upper-intermediate profficient in speaking, reading and writing' }];

// Secciones Principales (Layout Izquierdo)
const MAIN_SECTIONS = [
  {
    title: "Perfil Profesional",
    icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z",
    content: (
      <p className="text-slate-300 leading-relaxed font-light text-[15px]">
        Estudiante de último año de Ingeniería en Sistemas de Información con formación en informática y gran interés por el aprendizaje continuo y el trabajo en equipo. Me caracterizo por ser responsable, paciente y comprometido con los objetivos del grupo. Valoro las ideas de mis compañeros, me adapto a las decisiones del equipo y cumplo con las tareas asignadas de forma organizada y disciplinada. Busco mi primera experiencia laboral para desarrollarme profesionalmente en el área tecnológica.
      </p>
    )
  },
  {
    title: "Educación",
    icon: "M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222",
    content: (
      <div className="space-y-6">
        <div className="relative pl-6 before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-blue-500 before:rounded-full before:shadow-[0_0_10px_#3b82f6]">
          <h4 className="text-lg font-semibold text-slate-100">Ingeniería en Sistemas de Información</h4>
          <p className="text-sm text-slate-400">Universidad Tecnológica Nacional (UTN FRC)</p>
          <p className="text-sm text-blue-400 font-medium mt-1">En curso (2021 — Diciembre 2026 est.)</p>
        </div>
        <div className="relative pl-6 before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-slate-600 before:rounded-full">
          <h4 className="text-lg font-semibold text-slate-100">Secundario con especialidad en Informática</h4>
          <p className="text-sm text-slate-400">Colegio San Agustín</p>
          <p className="text-sm text-slate-500 mt-1">Título secundario completo</p>
        </div>
      </div>
    )
  },
  {
    title: "Experiencia Laboral",
    icon: "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
    content: (
      <div className="bg-slate-800/40 p-5 rounded-xl border border-slate-700/50 flex items-center gap-4 text-slate-400">
          <Icon path="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" className="w-6 h-6 text-slate-500" />
          <p className="italic text-sm">
            Actualmente sin experiencia laboral formal. Interesado en adquirir experiencia profesional y desarrollar habilidades dentro del área de sistemas y tecnología.
          </p>
      </div>
    )
  }
];

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-blue-800/50">
      
      {/* --- HEADER INTELIGENTE CON DATOS ACADÉMICOS --- */}
      <header className="bg-slate-900 border-b border-slate-800 p-5 md:p-8 relative md:sticky top-0 z-50 backdrop-blur-md bg-slate-900/95">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-5 md:gap-10">
          
          {/* Foto adaptable */}
          <div className="relative p-1 rounded-full bg-gradient-to-br from-blue-500 via-slate-700 to-emerald-500 shadow-xl shrink-0">
            <img 
              src={foto} 
              alt="Francisco Olmos" 
              className="w-20 h-20 md:w-32 md:h-32 rounded-full object-cover border-4 border-slate-900"
            />
          </div>
          
          {/* Nombre, Título y Tags Académicos */}
          <div className="text-center md:text-left flex-1">
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
              Francisco Tomás<br className="hidden md:block" /> Olmos Sandin
            </h1>
            
            <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 mt-2">
              <p className="text-sm md:text-lg text-slate-300 font-light">
                Ingeniería en Sistemas de Información
              </p>
              {/* Estos son los datos que querías mantener, ahora más estilizados */}
              <div className="flex gap-2">
                <div className="flex justify-center md:justify-start">
              <p className="text-slate-400 text-sm font-mono bg-slate-800 px-3 py-1 rounded-full inline-block">
                22 años | 5to Año
              </p>
            </div>
              </div>
            </div>
          </div>

          {/* Contacto: Compacto y en Grilla para Mobile */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:flex md:flex-col gap-2 w-full md:w-auto bg-slate-800/30 p-4 rounded-xl border border-slate-700/50">
            {contacto.map(item => (
              <a key={item.label} href={item.href} className="flex items-center gap-2 text-slate-300 text-[11px] md:text-sm font-mono hover:text-blue-400 transition-colors">
                <Icon path={item.icon} className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                <span className="truncate">{item.label}</span>
              </a>
            ))}
          </div>

        </div>
      </header>

      {/* --- CONTENIDO PRINCIPAL (LAYOUT) --- */}
      <main className="max-w-7xl mx-auto p-8 md:p-12">
        <div className="grid grid-cols-1 lg:grid-cols-[2fr,1.1fr] gap-12">
          
          {/* COLUMNA PRINCIPAL (Perfil, Educación, Experiencia) */}
          <div className="space-y-12">
            {MAIN_SECTIONS.map(sec => (
              <section key={sec.title} className="bg-slate-900 p-8 rounded-[2rem] border border-slate-800 shadow-2xl transition-all hover:border-slate-700/50">
                <h2 className="text-2xl font-bold text-slate-100 mb-7 flex items-center gap-3.5 border-l-4 border-blue-500 pl-4 tracking-tight">
                  <Icon path={sec.icon} className="w-7 h-7 text-blue-400" />
                  {sec.title}
                </h2>
                {sec.content}
              </section>
            ))}
          </div>

          {/* SIDEBAR (Skills, Idiomas, Intereses, Adicional) */}
          <aside className="space-y-10 lg:mt-4">
            
            {/* Skills Técnicos (como Tags) */}
            <section className="bg-slate-900 p-8 rounded-[2rem] border border-slate-800 shadow-lg">
                <h3 className="text-xl font-bold text-slate-100 mb-6 flex items-center gap-3 border-l-4 border-emerald-500 pl-3">
                  <Icon path="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" className="w-5 h-5 text-emerald-400" />
                  Conocimientos Técnicos
                </h3>
                <div className="flex flex-wrap gap-2.5">
                    {techSkills.map(skill => (
                      <span key={skill} className="bg-emerald-500/10 text-emerald-300 px-4 py-1.5 rounded-full text-sm font-medium border border-emerald-500/20 shadow-inner">
                        {skill}
                      </span>
                    ))}
                </div>
            </section>

            {/* Skills Blandas (como Lista check) */}
            <section className="bg-slate-900 p-8 rounded-[2rem] border border-slate-800 shadow-lg">
                <h3 className="text-xl font-bold text-slate-100 mb-6 flex items-center gap-3 border-l-4 border-purple-500 pl-3">
                  <Icon path="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" className="w-5 h-5 text-purple-400" />
                  Habilidades Personales
                </h3>
                <ul className="space-y-3">
                  {softSkills.map(skill => (
                    <li key={skill} className="flex items-center gap-3 text-slate-300 text-[15px] font-light">
                      <Icon path="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" className="w-4 h-4 text-purple-500" />
                      {skill}
                    </li>
                  ))}
                </ul>
            </section>

            {/* Idiomas */}
            <section className="bg-slate-900 p-8 rounded-[2rem] border border-slate-800 shadow-lg">
                <h3 className="text-xl font-bold text-slate-100 mb-6 flex items-center gap-3 border-l-4 border-red-500 pl-3">
                  <Icon path="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 11.37 9.193 15.182 5 18.674M12.751 5a17.521 17.521 0 00-2.22-3.1" className="w-5 h-5 text-red-400" />
                  Idiomas
                </h3>
                <div className="space-y-3 font-mono text-sm">
                    {idiomas.map(i => (
                        <div key={i.lang} className="bg-slate-800 p-3 rounded-lg flex justify-between items-center border border-slate-700/50">
                            <span className="text-slate-100 font-semibold">{i.lang}</span>
                            <span className="text-red-400 bg-red-500/10 px-2.5 py-0.5 rounded-full text-xs">{i.nivel}</span>
                        </div>
                    ))}
                </div>
            </section>

            {/* Intereses e Info Adicional (como Mini tags) */}
            <section className="bg-slate-900 p-8 rounded-[2rem] border border-slate-800 shadow-lg">
                <h3 className="text-xl font-bold text-slate-100 mb-6 flex items-center gap-3 border-l-4 border-orange-500 pl-3">
                  <Icon path="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a2 2 0 00-1.96 1.414l-.722 2.166a2 2 0 01-1.636 1.347l-1.316.108a2 2 0 01-1.81-1.127l-1.114-2.228a2 2 0 00-1.745-1.022l-2.234-.124a2 2 0 01-1.732-1.732l-.124-2.234a2 2 0 00-1.022-1.745L2.228 11.11a2 2 0 01-1.127-1.81l.108-1.316a2 2 0 011.347-1.636l2.166-.722a2 2 0 001.414-1.96l-.477-2.387a2 2 0 00-.547-1.022L5 5" className="w-5 h-5 text-orange-400" />
                  Información Adicional
                </h3>
                <div className="flex flex-wrap gap-2 text-xs font-medium">
                    {['Licencia de conducir', 'Conexión a internet estable', 'Basketball', 'Ciclismo', 'Vida sana', 'Música'].map(t => (
                        <span key={t} className="bg-orange-500/10 text-orange-300 px-3 py-1.5 rounded-full border border-orange-500/20">{t}</span>
                    ))}
                </div>
            </section>

          </aside>
        </div>
      </main>

      {/* --- FOOTER (Mínimo) --- */}
      <footer className="border-t border-slate-800 mt-16 p-6 text-center text-slate-600 text-xs font-mono">
        CV Web — Francisco Olmos — {new Date().getFullYear()}
      </footer>

    </div>
  )
}

export default App;