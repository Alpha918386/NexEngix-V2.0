import React from 'react';
import { Cloud, Server, Shield, Database, LayoutGrid, AlertTriangle, Info, Activity, Boxes } from 'lucide-react';

export function InfrastructureView() {
  return (
    <div className="max-w-[1440px] mx-auto px-6 py-10 min-h-screen">
      {/* Header Info */}
      <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <div className="flex items-center gap-2 text-primary mb-3">
             <Cloud className="w-5 h-5" />
             <span className="font-mono text-sm uppercase tracking-widest font-bold">Global Topography</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight">Enterprise Infrastructure</h2>
          <p className="text-on-surface-variant font-body text-lg mt-3 max-w-3xl">
            Real-time architectural map of the NexEngix multi-cloud mesh. Monitoring 42 active clusters across AWS, GCP, and Azure with intelligent traffic steering.
          </p>
        </div>
        
        <div className="glass-panel px-6 py-4 rounded-2xl flex items-center gap-8 glow-primary border-primary/30">
           <div className="text-right">
              <p className="font-mono text-[10px] text-outline uppercase tracking-widest mb-1">Avg Latency</p>
              <p className="font-display text-3xl font-bold text-primary">12.4ms</p>
           </div>
           <div className="w-px h-12 bg-white/10"></div>
           <div className="text-left">
              <p className="font-mono text-[10px] text-outline uppercase tracking-widest mb-1">Throughput</p>
              <p className="font-display text-3xl font-bold text-tertiary">4.2M rps</p>
           </div>
        </div>
      </div>

      {/* Infrastructure Map Container */}
      <div className="relative w-full aspect-video md:aspect-[21/9] glass-panel rounded-3xl overflow-hidden border border-primary/20 glow-primary mb-10">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, #00dbe9 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        
        <div className="absolute inset-0 p-8 flex flex-col justify-between">
            {/* Level 1: Entry / Load Balancers */}
            <div className="flex justify-around items-start pt-4">
                <Node icon={<Boxes />} title="Edge-LB-01" status="ACTIVE" latency="2ms" />
                <Node icon={<Shield />} title="WAF-Gateway" status="SHIELDED" latency="5ms" color="text-tertiary" />
            </div>

            {/* Simulated connection lines could go here using SVGs or absolute divs */}

            {/* Level 2: Clusters / Backend */}
            <div className="flex justify-between items-center gap-4 px-10">
                <ClusterCard title="us-east-1a" latency="18ms" load={65} nodes={85} provider="AWS" />
                
                <div className="flex-1 max-w-sm glass-panel p-8 rounded-full aspect-square border-2 border-primary glow-primary flex flex-col items-center justify-center relative z-10 transform scale-110">
                    <div className="absolute inset-0 bg-primary/10 rounded-full animate-breathe"></div>
                    <Server className="w-16 h-16 text-primary mb-4" />
                    <h4 className="font-mono text-sm tracking-widest font-bold text-primary mb-1">CORE-INTEL-01</h4>
                    <p className="font-mono text-[9px] text-outline uppercase tracking-widest text-center mb-4">Primary Reasoning Cluster</p>
                    <div className="grid grid-cols-2 gap-4 w-full px-8">
                        <div className="bg-surface-container-high py-2 rounded-lg text-center border border-white/5">
                            <span className="font-mono text-[9px] text-outline block mb-1">CPU</span>
                            <span className="font-mono text-sm text-primary font-bold">42%</span>
                        </div>
                        <div className="bg-surface-container-high py-2 rounded-lg text-center border border-white/5">
                            <span className="font-mono text-[9px] text-outline block mb-1">MEM</span>
                            <span className="font-mono text-sm text-secondary font-bold">88%</span>
                        </div>
                    </div>
                </div>

                <ClusterCard title="eu-west-2" latency="24ms" load={40} nodes={12} provider="GCP" color="bg-secondary" textColor="text-secondary" />
            </div>

            {/* Level 3: Databases / Storage */}
            <div className="flex justify-center gap-8 items-end pb-4">
                <DbNode icon={<Database />} title="PostgreSQL Main" subtitle="99.99% Uptime" highlight="text-green-400" />
                <DbNode icon={<LayoutGrid />} title="Redis Cache" subtitle="0.4ms Read" highlight="text-primary" />
                <DbNode icon={<Server />} title="S3 Cold Storage" subtitle="Optimizing..." highlight="text-tertiary" />
            </div>
        </div>
      </div>

      {/* Sidebar / Stats Panels */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="glass-panel p-8 rounded-3xl flex flex-col gap-6">
              <div className="flex justify-between items-center">
                  <h3 className="font-display text-2xl font-bold flex items-center gap-3">
                      <Activity className="text-primary w-6 h-6" /> Traffic Flow
                  </h3>
                  <span className="bg-primary/20 text-primary px-3 py-1 rounded font-mono text-[10px] uppercase font-bold tracking-widest border border-primary/30">LIVE</span>
              </div>
              <div className="space-y-6">
                  <TrafficBar region="North America" value="1.2M rps" percent={70} color="bg-primary" />
                  <TrafficBar region="Europe" value="840K rps" percent={45} color="bg-tertiary" />
                  <TrafficBar region="Asia Pacific" value="620K rps" percent={30} color="bg-secondary" />
              </div>
          </div>

          <div className="glass-panel p-8 rounded-3xl md:col-span-2 relative overflow-hidden">
              <div className="absolute -right-10 -top-10 opacity-5 pointer-events-none">
                  <AlertTriangle className="w-64 h-64 text-error" />
              </div>
              
              <div className="flex items-center gap-4 mb-8">
                  <div className="p-4 bg-error/20 rounded-2xl border border-error/30 glow-error">
                     <AlertTriangle className="text-error w-6 h-6" />
                  </div>
                  <div>
                      <h3 className="font-display text-2xl font-bold">Active Diagnostics</h3>
                      <p className="font-body text-outline">Real-time anomaly detection & security events</p>
                  </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <DiagnosticAlert type="Critical Warning" title="High memory usage in US-East-1 Cluster" time="2 mins ago • Automatic scaling initiated" icon={<AlertTriangle />} color="error" />
                  <DiagnosticAlert type="Traffic Shift" title="Dynamic rerouting to EU-West-2" time="14 mins ago • Latency optimization" icon={<Info />} color="tertiary" />
              </div>
          </div>
      </div>
    </div>
  );
}

function Node({ icon, title, status, latency, color = "text-primary" }: any) {
    return (
        <div className="relative group cursor-pointer z-10">
            <div className="glass-panel p-6 rounded-2xl border-t-4 border-t-primary bg-surface/80 hover:bg-primary/10 transition-colors flex flex-col items-center gap-3 min-w-[160px]">
                {React.cloneElement(icon, { className: `w-8 h-8 ${color}` })}
                <span className="font-mono text-xs uppercase tracking-widest font-bold">{title}</span>
                <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-breathe"></div>
                    <span className="font-mono text-[9px] text-outline tracking-widest">{status}</span>
                </div>
            </div>
            <div className={`absolute -top-3 -right-3 bg-surface-container-highest px-3 py-1 rounded-lg border border-white/10 font-mono text-[10px] ${color} font-bold shadow-lg`}>
                {latency}
            </div>
        </div>
    );
}

function ClusterCard({ title, latency, load, nodes, provider, color = "bg-tertiary", textColor = "text-tertiary" }: any) {
    return (
        <div className="flex-1 max-w-[280px] glass-panel p-6 rounded-2xl bg-surface/80 relative overflow-hidden z-10">
            <div className={`absolute left-0 top-0 bottom-0 w-1 ${color}`}></div>
            <div className="flex items-center gap-4 mb-4">
                <div className={`w-12 h-12 rounded-xl bg-surface-container-high border border-white/5 flex items-center justify-center font-display font-bold ${textColor}`}>
                    {provider}
                </div>
                <div>
                    <h5 className="font-mono text-sm tracking-widest font-bold uppercase">{title}</h5>
                    <span className={`font-mono text-[10px] ${textColor}`}>{latency} ping</span>
                </div>
            </div>
            <div className="flex justify-between items-end mb-2">
                <span className="font-mono text-[10px] text-outline uppercase tracking-widest">Load</span>
                <span className="font-mono text-[10px] text-on-surface font-bold">{load}%</span>
            </div>
            <div className="h-1.5 w-full bg-surface-container-high rounded-full overflow-hidden mb-3 border border-white/5">
                <div className={`h-full ${color}`} style={{ width: `${load}%` }}></div>
            </div>
            <span className="font-mono text-[9px] text-outline uppercase tracking-widest">{nodes} Nodes Active</span>
        </div>
    );
}

function DbNode({ icon, title, subtitle, highlight }: any) {
    return (
        <div className="glass-panel px-6 py-4 rounded-xl border-b-2 border-b-outline flex items-center gap-4 bg-surface/80 hover:-translate-y-1 transition-transform cursor-pointer z-10">
            {React.cloneElement(icon, { className: "w-5 h-5 text-outline" })}
            <div>
                <p className="font-mono text-xs font-bold tracking-widest uppercase mb-1">{title}</p>
                <p className={`font-mono text-[9px] uppercase tracking-widest ${highlight}`}>{subtitle}</p>
            </div>
        </div>
    );
}

function TrafficBar({ region, value, percent, color }: any) {
    return (
        <div>
            <div className="flex justify-between items-center mb-2 font-mono text-xs">
                <span className="text-outline uppercase tracking-widest">{region}</span>
                <span className="text-on-surface font-bold">{value}</span>
            </div>
            <div className="h-2 w-full bg-surface-container-high rounded-full overflow-hidden border border-white/5">
                 <div className={`h-full ${color}`} style={{ width: `${percent}%` }}></div>
            </div>
        </div>
    );
}

function DiagnosticAlert({ type, title, time, icon, color }: any) {
    const textColor = color === 'error' ? 'text-error' : 'text-tertiary';
    const borderColor = color === 'error' ? 'border-l-error bg-error/5' : 'border-l-tertiary bg-tertiary/5';

    return (
        <div className={`p-5 rounded-2xl border-l-4 border-y border-r border-white/5 ${borderColor} flex gap-4 transition-colors hover:bg-surface-container-high`}>
            {React.cloneElement(icon, { className: `w-5 h-5 mt-0.5 shrink-0 ${textColor}` })}
            <div>
                <p className={`font-mono text-[10px] font-bold tracking-widest uppercase mb-2 ${textColor}`}>{type}</p>
                <p className="font-body text-on-surface font-semibold mb-2">{title}</p>
                <p className="font-mono text-[10px] text-outline">{time}</p>
            </div>
        </div>
    );
}
