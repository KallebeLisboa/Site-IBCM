import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Lock, Mail, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, use Supabase Auth here
    // For demo purposes, we'll just navigate
    navigate('/admin');
  };

  return (
    <div className="min-h-screen bg-[#121212] flex items-center justify-center p-4">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#FF6B00]/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#FF6B00]/5 blur-[120px] rounded-full" />
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="relative z-10 w-full max-w-md bg-white/5 backdrop-blur-xl border border-white/10 p-10 rounded-[40px] shadow-2xl"
      >
        <div className="text-center mb-10">
          <h1 className="text-3xl font-black tracking-tighter text-white mb-2">
            ATITUDE<span className="text-[#FF6B00]">ADMIN</span>
          </h1>
          <p className="text-white/40 text-sm uppercase tracking-widest font-bold">Acesso Restrito</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div className="space-y-2">
            <label className="text-xs font-black uppercase tracking-widest text-white/60 ml-4">Email</label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20" size={18} />
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@atitude.com"
                className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white focus:outline-none focus:border-[#FF6B00] transition-all"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-black uppercase tracking-widest text-white/60 ml-4">Senha</label>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20" size={18} />
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white focus:outline-none focus:border-[#FF6B00] transition-all"
                required
              />
            </div>
          </div>

          <button 
            type="submit"
            className="w-full bg-[#FF6B00] text-white py-4 rounded-2xl font-black uppercase tracking-widest hover:bg-[#e56000] transition-all flex items-center justify-center gap-2 group"
          >
            Entrar no Painel <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </form>

        <p className="mt-8 text-center text-white/20 text-[10px] font-bold uppercase tracking-widest">
          Problemas com acesso? Contate o suporte técnico.
        </p>
      </motion.div>
    </div>
  );
};

export default LoginPage;
