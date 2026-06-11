import React from 'react';
import { 
  Terminal, Home, Bot, Map, BarChart2, Shield,
  Settings, Database, Network, LineChart, Briefcase
} from 'lucide-react';
import { AppView } from '../types';

interface LayoutProps {
  children: React.ReactNode;
  currentView: AppView;
  onViewChange: (view: AppView) => void;
}

export function Layout({ children, currentView, onViewChange }: LayoutProps) {
  const isDevMode = currentView === AppView.DEV_MODE;

  return (
    <div className="min-h-screen bg-background text-on-background flex flex-col font-body">
      {/* Top Navigation */}
      <header className="fixed top-0 w-full z-50 bg-surface-container-lowest/80 backdrop-blur-xl border-b border-white/5 h-16 flex items-center justify-between px-6">
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => onViewChange(AppView.DASHBOARD)}>
          <div className={`w-8 h-8 rounded flex items-center justify-center ${isDevMode ? 'bg-error/20 text-error' : 'bg-primary-container text-on-primary-container'}`}>
            <Terminal size={18} />
          </div>
          <h1 className="font-display text-xl font-bold tracking-tight">NexEngix</h1>
          {isDevMode && (
            <span className="ml-2 px-2 py-0.5 rounded border border-error/30 text-error font-mono text-[10px] tracking-widest uppercase bg-error/10">KERNEL_UNLOCKED</span>
          )}
        </div>
        
        <nav className="hidden md:flex items-center gap-8 font-mono text-sm uppercase tracking-widest text-outline">
          <button 
            onClick={() => onViewChange(AppView.DASHBOARD)}
            className={`${currentView === AppView.DASHBOARD ? 'text-primary' : 'hover:text-primary'} transition-colors`}
          >
            Dashboard
          </button>
          <button 
            onClick={() => onViewChange(AppView.INFRASTRUCTURE)}
            className={`${currentView === AppView.INFRASTRUCTURE ? 'text-primary' : 'hover:text-primary'} transition-colors`}
          >
            Infrastructure
          </button>
          <button 
            onClick={() => onViewChange(AppView.ROADMAP)}
            className={`${currentView === AppView.ROADMAP ? 'text-primary' : 'hover:text-primary'} transition-colors`}
          >
            Syllabus
          </button>
          <button 
            onClick={() => onViewChange(AppView.PREDICTIVE)}
            className={`${currentView === AppView.PREDICTIVE ? 'text-primary' : 'hover:text-primary'} transition-colors`}
          >
            Career Predict
          </button>
        </nav>
        
        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center gap-2 px-3 py-1 bg-surface-container rounded-full border border-white/5">
            <div className={`w-2 h-2 rounded-full ${isDevMode ? 'bg-error' : 'bg-primary'} animate-breathe`}></div>
            <span className={`font-mono text-xs uppercase ${isDevMode ? 'text-error' : 'text-primary'}`}>
              {isDevMode ? 'SEC_OFF' : 'SYNC_ACTIVE'}
            </span>
          </div>
          <button onClick={() => onViewChange(AppView.DEV_MODE)}>
            <Settings size={20} className="text-outline hover:text-primary transition-colors cursor-pointer" />
          </button>
          <div 
            className="w-8 h-8 rounded-full bg-surface-container-high border border-outline/30 flex items-center justify-center cursor-pointer hover:border-primary/50 transition-colors"
            onClick={() => onViewChange(AppView.INIT_PROFILE)}
          >
            <span className="font-mono text-xs font-bold text-on-surface">JD</span>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <div className="flex-1 pt-16 flex">
        {/* Slim Side Navigation */}
        <aside className="w-[72px] fixed h-[calc(100vh-64px)] border-r border-white/5 bg-surface-container-lowest/50 flex flex-col items-center py-6 gap-6 z-40 hidden sm:flex">
          <NavIcon icon={<Home />} tooltip="Home" active={currentView === AppView.DASHBOARD} onClick={() => onViewChange(AppView.DASHBOARD)} />
          <NavIcon icon={<Bot />} tooltip="AI Interview" active={currentView === AppView.INTERVIEW} onClick={() => onViewChange(AppView.INTERVIEW)} />
          <NavIcon icon={<Network />} tooltip="Deep Focus" active={currentView === AppView.FOCUS} onClick={() => onViewChange(AppView.FOCUS)} />
          <NavIcon icon={<Map />} tooltip="Neural Pathway" active={currentView === AppView.ROADMAP} onClick={() => onViewChange(AppView.ROADMAP)} />
          <NavIcon icon={<Shield />} tooltip="Mock Arena" active={currentView === AppView.MOCK_TEST} onClick={() => onViewChange(AppView.MOCK_TEST)} />
          <NavIcon icon={<BarChart2 />} tooltip="Analytics" active={currentView === AppView.ANALYTICS} onClick={() => onViewChange(AppView.ANALYTICS)} />
          <div className="flex-1"></div>
          <NavIcon icon={<Database />} tooltip="Dev Kernel" active={currentView === AppView.DEV_MODE} onClick={() => onViewChange(AppView.DEV_MODE)} error={isDevMode} />
        </aside>

        <main className="flex-1 sm:pl-[72px] relative overflow-hidden">
          {children}
        </main>
      </div>
      
      {/* Mobile Nav */}
      <nav className="sm:hidden fixed bottom-0 w-full z-50 bg-surface-container/90 backdrop-blur-xl border-t border-white/5 h-16 flex items-center justify-around px-4">
        <MobileNavIcon icon={<Home />} label="Home" active={currentView === AppView.DASHBOARD} onClick={() => onViewChange(AppView.DASHBOARD)} />
        <MobileNavIcon icon={<Bot />} label="AI" active={currentView === AppView.INTERVIEW} onClick={() => onViewChange(AppView.INTERVIEW)} />
        <MobileNavIcon icon={<Network />} label="Focus" active={currentView === AppView.FOCUS} onClick={() => onViewChange(AppView.FOCUS)} />
        <MobileNavIcon icon={<Map />} label="Plan" active={currentView === AppView.ROADMAP} onClick={() => onViewChange(AppView.ROADMAP)} />
      </nav>
    </div>
  );
}

function NavIcon({ icon, active, onClick, tooltip, error }: any) {
  return (
    <button 
      onClick={onClick}
      title={tooltip}
      className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 group ${
        active 
          ? error ? 'bg-error/20 text-error border border-error/50 glow-primary' : 'bg-primary-container/20 text-primary border border-primary/50' 
          : 'text-outline hover:text-on-surface hover:bg-surface-container'
      }`}
    >
      <div className={`${active ? 'scale-110' : 'scale-100'} group-hover:scale-110 transition-transform`}>
        {icon}
      </div>
    </button>
  );
}

function MobileNavIcon({ icon, label, active, onClick }: any) {
  return (
    <button 
      onClick={onClick}
      className={`flex flex-col items-center justify-center gap-1 transition-all ${
        active ? 'text-primary scale-110 drop-shadow-[0_0_8px_rgba(0,240,255,0.8)]' : 'text-outline hover:text-on-surface'
      }`}
    >
      {icon}
      <span className="font-mono text-[9px] uppercase tracking-widest">{label}</span>
    </button>
  );
}
