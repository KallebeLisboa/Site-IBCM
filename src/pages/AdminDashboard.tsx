import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Users, 
  Calendar, 
  MapPin, 
  Video, 
  LayoutDashboard, 
  LogOut, 
  Download,
  Plus,
  Search,
  MoreVertical,
  ChevronDown
} from 'lucide-react';
import { motion } from 'motion/react';
import * as XLSX from 'xlsx';
import Papa from 'papaparse';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const navigate = useNavigate(); // Inicialize o hook aqui

  // Mock data for demonstration
  const members = [
    { id: 1, name: 'Alex Johnson', email: 'alex@example.com', role: 'Admin', joined: '2023-10-04' },
    { id: 2, name: 'Sarah Smith', email: 'sarah@example.com', role: 'Leader', joined: '2023-11-12' },
    { id: 3, name: 'Michael Brown', email: 'michael@example.com', role: 'Member', joined: '2024-01-05' },
  ];

  const cells = [
    { id: 1, name: 'Célula Barra 1', leader: 'Sarah Smith', location: 'Barra da Tijuca', schedule: 'Terça, 20:00' },
    { id: 2, name: 'Célula Recreio 4', leader: 'John Doe', location: 'Recreio', schedule: 'Quarta, 19:30' },
  ];

  const exportToExcel = (data: any[], fileName: string) => {
    const ws = XLSX.utils.json_to_sheet(data);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    XLSX.writeFile(wb, `${fileName}.xlsx`);
  };

  const exportToCSV = (data: any[], fileName: string) => {
    const csv = Papa.unparse(data);
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', `${fileName}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const SidebarItem = ({ id, icon: Icon, label }: { id: string, icon: any, label: string }) => (
    <button
      onClick={() => setActiveTab(id)}
      className={`w-full flex items-center gap-3 px-6 py-4 text-sm font-medium transition-all ${
        activeTab === id 
          ? 'bg-[#FF6B00]/10 text-[#FF6B00] border-r-4 border-[#FF6B00]' 
          : 'text-gray-500 hover:bg-gray-50'
      }`}
    >
      <Icon size={20} />
      {label}
    </button>
  );

  return (
    <div className="flex min-h-screen bg-gray-50 font-sans text-gray-900">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 flex flex-col">
        <div className="p-8">
          <h1 className="text-xl font-black tracking-tighter">
            ATITUDE<span className="text-[#FF6B00]">ADMIN</span>
          </h1>
        </div>
        
        <nav className="flex-1">
          <SidebarItem id="dashboard" icon={LayoutDashboard} label="Dashboard" />
          <SidebarItem id="members" icon={Users} label="Membros" />
          <SidebarItem id="cells" icon={MapPin} label="Células" />
          <SidebarItem id="events" icon={Calendar} label="Eventos" />
          <SidebarItem id="media" icon={Video} label="Galeria de Mídia" />
        </nav>

        <div className="p-4 border-t border-gray-100">
          <button 
            onClick={() => navigate('/')}
            className="w-full flex items-center gap-3 px-6 py-4 text-sm font-medium text-red-500 hover:bg-red-50 rounded-xl transition-all"
          >
            <LogOut size={20} />
            Sair
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-10 overflow-y-auto">
        <header className="flex items-center justify-between mb-10">
          <div>
            <h2 className="text-3xl font-bold capitalize">{activeTab}</h2>
            <p className="text-gray-500 text-sm mt-1">Gerencie os dados da sua igreja com facilidade.</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input 
                type="text" 
                placeholder="Pesquisar..." 
                className="pl-10 pr-4 py-2 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#FF6B00]/20 transition-all"
              />
            </div>
            <button className="bg-[#FF6B00] text-white p-2 rounded-xl hover:bg-[#e56000] transition-colors">
              <Plus size={20} />
            </button>
          </div>
        </header>

        {/* Dashboard Overview Stats */}
        {activeTab === 'dashboard' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {[
              { label: 'Total Membros', value: '1,284', color: 'bg-blue-500' },
              { label: 'Células Ativas', value: '42', color: 'bg-green-500' },
              { label: 'Eventos Próximos', value: '8', color: 'bg-[#FF6B00]' }
            ].map((stat, i) => (
              <div key={i} className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
                <p className="text-gray-500 text-sm font-medium uppercase tracking-wider mb-2">{stat.label}</p>
                <div className="flex items-end justify-between">
                  <h3 className="text-4xl font-bold">{stat.value}</h3>
                  <div className={`w-10 h-10 ${stat.color} rounded-xl opacity-20`} />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Content Table */}
        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-gray-50 flex items-center justify-between">
            <h3 className="font-bold text-lg">Lista de {activeTab}</h3>
            <div className="flex items-center gap-2">
              <button 
                onClick={() => activeTab === 'members' ? exportToExcel(members, 'membros') : exportToExcel(cells, 'celulas')}
                className="flex items-center gap-2 px-4 py-2 text-xs font-bold uppercase tracking-widest text-gray-600 hover:bg-gray-50 rounded-lg transition-all"
              >
                <Download size={14} /> Excel
              </button>
              <button 
                onClick={() => activeTab === 'members' ? exportToCSV(members, 'membros') : exportToCSV(cells, 'celulas')}
                className="flex items-center gap-2 px-4 py-2 text-xs font-bold uppercase tracking-widest text-gray-600 hover:bg-gray-50 rounded-lg transition-all"
              >
                <Download size={14} /> CSV
              </button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-gray-50 text-gray-400 text-[10px] font-black uppercase tracking-widest">
                <tr>
                  {activeTab === 'members' ? (
                    <>
                      <th className="px-6 py-4">Nome</th>
                      <th className="px-6 py-4">Email</th>
                      <th className="px-6 py-4">Cargo</th>
                      <th className="px-6 py-4">Data Ingresso</th>
                      <th className="px-6 py-4 text-right">Ações</th>
                    </>
                  ) : (
                    <>
                      <th className="px-6 py-4">Nome da Célula</th>
                      <th className="px-6 py-4">Líder</th>
                      <th className="px-6 py-4">Localização</th>
                      <th className="px-6 py-4">Horário</th>
                      <th className="px-6 py-4 text-right">Ações</th>
                    </>
                  )}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {activeTab === 'members' ? members.map((member) => (
                  <tr key={member.id} className="hover:bg-gray-50/50 transition-colors group">
                    <td className="px-6 py-4 font-bold text-sm">{member.name}</td>
                    <td className="px-6 py-4 text-sm text-gray-500">{member.email}</td>
                    <td className="px-6 py-4">
                      <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${
                        member.role === 'Admin' ? 'bg-purple-100 text-purple-600' : 
                        member.role === 'Leader' ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-600'
                      }`}>
                        {member.role}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">{member.joined}</td>
                    <td className="px-6 py-4 text-right">
                      <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                        <MoreVertical size={16} />
                      </button>
                    </td>
                  </tr>
                )) : cells.map((cell) => (
                  <tr key={cell.id} className="hover:bg-gray-50/50 transition-colors group">
                    <td className="px-6 py-4 font-bold text-sm">{cell.name}</td>
                    <td className="px-6 py-4 text-sm text-gray-500">{cell.leader}</td>
                    <td className="px-6 py-4 text-sm text-gray-500">{cell.location}</td>
                    <td className="px-6 py-4 text-sm text-gray-500">{cell.schedule}</td>
                    <td className="px-6 py-4 text-right">
                      <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                        <MoreVertical size={16} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
