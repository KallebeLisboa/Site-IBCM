import React from 'react';
import { motion } from 'motion/react';
import { 
  Play, 
  Calendar, 
  Users, 
  ChevronRight, 
  Instagram, 
  Facebook, 
  Youtube, 
  Twitter,
  MapPin,
  Clock
} from 'lucide-react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-[#121212] text-white font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/50 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <h1 className="text-2xl font-black tracking-tighter text-white">
              IGREJABATISTA<span className="text-[#FF6B00]">GETSEMANI</span>
            </h1>
            <div className="hidden md:flex items-center gap-6 text-sm font-medium uppercase tracking-wider opacity-70">
              <a href="#igreja" className="hover:text-[#FF6B00] transition-colors">Igreja</a>
              <a href="#agenda" className="hover:text-[#FF6B00] transition-colors">Agenda</a>
              <a href="#celula" className="hover:text-[#FF6B00] transition-colors">Células</a>
              <a href="#conteudo" className="hover:text-[#FF6B00] transition-colors">Conteúdo</a>
            </div>
          </div>
          <Link 
            to="/login" 
            className="bg-[#FF6B00] text-white px-6 py-2 rounded-full text-sm font-bold uppercase tracking-widest hover:bg-[#e56000] transition-all"
          >
            Quero Jesus
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/seed/church-hero/1920/1080" 
            className="w-full h-full object-cover opacity-40"
            alt="Hero Background"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent" />
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-sm font-bold uppercase tracking-[0.3em] text-[#FF6B00] mb-4"
          >
            Congrsso 
          </motion.h2>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-6xl md:text-9xl font-black uppercase leading-none tracking-tighter mb-8"
          >
            Fire 2026<br />
            <span className="text-transparent border-t-2 border-b-2 border-white/20 inline-block py-2">ATITUDE</span>
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col md:flex-row items-center justify-center gap-4"
          >
            <Link 
              to="/login"
              className="bg-[#FF6B00] text-white px-10 py-4 rounded-full font-bold uppercase tracking-widest hover:scale-105 transition-transform text-center"
            >
              Inscreva-se Agora
            </Link>
            <button className="border border-white/20 hover:bg-white/10 px-10 py-4 rounded-full font-bold uppercase tracking-widest transition-all">
              Saiba Mais
            </button>
          </motion.div>
        </div>
      </section>

      {/* Welcome Section */}
      <section id="igreja" className="py-24 px-4 max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <img 
            src="https://picsum.photos/seed/welcome/800/1000" 
            className="rounded-[40px] w-full aspect-[4/5] object-cover shadow-2xl"
            alt="Welcome"
            referrerPolicy="no-referrer"
          />
          <div className="absolute -bottom-8 -right-8 bg-[#FF6B00] p-8 rounded-[30px] hidden md:block">
            <Users size={48} />
          </div>
        </div>
        <div>
          <h3 className="text-[#FF6B00] font-bold uppercase tracking-widest mb-4">Bem-vindo à sua casa</h3>
          <h2 className="text-5xl font-bold mb-6 leading-tight">Você é importante para essa família</h2>
          <p className="text-lg text-white/60 mb-8 leading-relaxed">
            Aqui na Atitude você viverá o melhor tempo da sua vida na presença de Deus. 
            Nossa missão é amar pessoas e levá-las a um relacionamento profundo com Jesus.
          </p>
          <button className="flex items-center gap-2 text-[#FF6B00] font-bold uppercase tracking-widest hover:gap-4 transition-all">
            Conheça nossa história <ChevronRight size={20} />
          </button>
        </div>
      </section>

      {/* Media/TV Section */}
      <section id="conteudo" className="py-24 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-4xl font-black uppercase tracking-tighter italic">Getsemani<span className="text-[#FF6B00]">TV</span></h2>
            <button className="text-sm font-bold uppercase tracking-widest opacity-50 hover:opacity-100 transition-opacity">Ver Todos</button>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 group cursor-pointer">
              <div className="relative aspect-video rounded-3xl overflow-hidden mb-4">
                <img src="https://picsum.photos/seed/tv1/1200/675" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Main Video" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 group-hover:scale-110 transition-transform">
                    <Play fill="white" size={32} />
                  </div>
                </div>
              </div>
              <h4 className="text-2xl font-bold mb-2">A Bíblia impactou sua vida? | Pr. Josué Valandro Jr.</h4>
              <p className="text-white/40 text-sm uppercase tracking-widest">Fevereiro 2, 2026</p>
            </div>
            
            <div className="space-y-8">
              {[1, 2].map((i) => (
                <div key={i} className="group cursor-pointer">
                  <div className="relative aspect-video rounded-2xl overflow-hidden mb-3">
                    <img src={`https://picsum.photos/seed/tv${i+1}/600/337`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Side Video" referrerPolicy="no-referrer" />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                      <Play fill="white" size={20} />
                    </div>
                  </div>
                  <h4 className="font-bold text-lg leading-tight">Sabedoria para um novo tempo</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section id="agenda" className="py-24 max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-4xl font-bold max-w-md leading-tight">Fique por dentro dos próximos eventos</h2>
          <button className="text-sm font-bold uppercase tracking-widest opacity-50 hover:opacity-100 transition-opacity">Ver Todos</button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "Semana do Poder", date: "Fev 23, 2026" },
            { title: "Imersão de...", date: "Fev 28, 2026" },
            { title: "Escola Bíblica", date: "Mar 1, 2026" },
            { title: "Conferência...", date: "Mar 5, 2026" }
          ].map((event, i) => (
            <div key={i} className="bg-[#1a1a1a] rounded-3xl overflow-hidden group cursor-pointer hover:bg-[#222] transition-colors">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={`https://picsum.photos/seed/event${i}/400/300`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt={event.title} referrerPolicy="no-referrer" />
              </div>
              <div className="p-6">
                <p className="text-[#FF6B00] text-xs font-bold uppercase tracking-widest mb-2">{event.date}</p>
                <h4 className="font-bold text-xl mb-4">{event.title}</h4>
                <button className="text-xs font-bold uppercase tracking-widest opacity-50 group-hover:opacity-100 flex items-center gap-1 transition-all">
                  Ver Mais <ChevronRight size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Cell Groups Section */}
      <section id="celula" className="py-24 bg-[#FF6B00] text-black overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-16 items-center relative z-10">
          <div>
            <h2 className="text-5xl font-black uppercase tracking-tighter mb-8 leading-none">
              Ainda não faz <br /> parte de uma <br /> célula?
            </h2>
            <p className="text-xl font-medium mb-10 opacity-80">
              Células são grupos de pessoas que se reúnem para compartilhar experiências, crescer na fé e fortalecer a comunhão. Faça parte!
            </p>
            <button className="bg-black text-white px-10 py-4 rounded-full font-bold uppercase tracking-widest hover:scale-105 transition-transform">
              Quero uma célula!
            </button>
          </div>
          <div className="flex justify-center">
            <img 
              src="https://picsum.photos/seed/cells/600/600" 
              className="w-full max-w-md rounded-full border-[12px] border-black/10"
              alt="Cells"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
        <div className="absolute top-0 right-0 text-[20rem] font-black text-black/5 leading-none select-none pointer-events-none">
          CÉLULA
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0a0a0a] pt-24 pb-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-12 mb-24">
            <div className="col-span-1 md:col-span-1">
              <h2 className="text-2xl font-black tracking-tighter mb-8">
                ATITUDE<span className="text-[#FF6B00]">CHURCH</span>
              </h2>
              <div className="space-y-4 text-white/40 text-sm">
                <p className="flex items-start gap-3">
                  <MapPin size={18} className="text-[#FF6B00] shrink-0" />
                  Rua Sylvio da Rocha Pollis, 751 Barra da Tijuca, RJ
                </p>
                <p className="flex items-center gap-3">
                  <Clock size={18} className="text-[#FF6B00] shrink-0" />
                  Tel: (21) 2430-2750
                </p>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold uppercase tracking-widest text-xs mb-8 text-[#FF6B00]">Igreja</h4>
              <ul className="space-y-4 text-sm text-white/60">
                <li><a href="#" className="hover:text-white transition-colors">Conheça-nos</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Células</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contribuição</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Agenda</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold uppercase tracking-widest text-xs mb-8 text-[#FF6B00]">Links Úteis</h4>
              <ul className="space-y-4 text-sm text-white/60">
                <li><a href="#" className="hover:text-white transition-colors">Pedidos de Oração</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Conteúdos</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Fale Conosco</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Trabalhe Conosco</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold uppercase tracking-widest text-xs mb-8 text-[#FF6B00]">Redes Sociais</h4>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#FF6B00] hover:text-black transition-all"><Instagram size={20} /></a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#FF6B00] hover:text-black transition-all"><Facebook size={20} /></a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#FF6B00] hover:text-black transition-all"><Youtube size={20} /></a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#FF6B00] hover:text-black transition-all"><Twitter size={20} /></a>
              </div>
            </div>
          </div>
          
          <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-white/20 font-bold uppercase tracking-[0.2em]">
            <p>© 2026 Igreja Batista Atitude. Todos os direitos reservados.</p>
            <div className="flex gap-8">
              <a href="#">Privacidade</a>
              <a href="#">Termos</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
