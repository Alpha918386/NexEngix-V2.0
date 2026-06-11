import React, { useState } from 'react';
import { AlertTriangle, Brain, FileJson, Copy, Search, Power } from 'lucide-react';

export function DevModeView() {
  const [resetting, setResetting] = useState(false);

  const handleReset = () => {
    if (confirm("WARNING: Proceeding will wipe the entire local state and restart the kernel. This cannot be undone. Continue?")) {
        setResetting(true);
        setTimeout(() => {
            alert("KERNEL_RESET_SUCCESSFUL. Re-initializing...");
            window.location.reload();
        }, 1500);
    }
  };

  if (resetting) {
      return (
          <div className="min-h-screen flex items-center justify-center">
              <div className="flex flex-col items-center gap-4 text-error">
                  <Power className="w-16 h-16 animate-pulse" />
                  <p className="font-mono font-bold tracking-widest uppercase">Kernel Rebooting...</p>
              </div>
          </div>
      );
  }

  return (
    <div className="max-w-[1440px] mx-auto px-6 py-10 h-[calc(100vh-64px)] overflow-hidden flex flex-col">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 h-full pb-8">
        {/* Left Panel: Kernel Status & Memory Nodes */}
        <aside className="lg:col-span-4 flex flex-col gap-8 h-full">
            {/* Kernel Warning Card */}
            <div className="glass-panel p-6 rounded-2xl border border-error/30 relative overflow-hidden bg-error/5">
                {/* Scanline effect simulation */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-error/10 to-transparent h-[2px] animate-[scanline_3s_linear_infinite]" style={{ top: '-2px' }}></div>
                
                <div className="flex justify-between items-start mb-6">
                    <div className="flex items-center gap-3 text-error">
                        <AlertTriangle className="w-6 h-6" />
                        <span className="font-mono text-sm tracking-widest uppercase font-bold">System Security</span>
                    </div>
                    <div className="flex items-center gap-2 bg-error/20 px-3 py-1 rounded border border-error/30">
                        <div className="w-2 h-2 rounded-full bg-error animate-breathe"></div>
                        <span className="font-mono text-[10px] text-error font-bold uppercase tracking-wider">Unlocked</span>
                    </div>
                </div>
                
                <p className="font-body text-on-surface-variant mb-3">Kernel status: <span className="text-error font-bold tracking-widest">CRITICAL_OVERRIDE</span></p>
                <p className="font-mono text-xs text-outline leading-relaxed">
                    NexEngix kernel is operating in unprotected mode. Automated safeguards are disabled. Direct memory access is permitted.
                </p>
            </div>

            {/* Memory Nodes List */}
            <div className="glass-panel flex-1 rounded-2xl flex flex-col min-h-0 overflow-hidden border-white/5">
                <div className="px-6 py-6 border-b border-white/5 flex justify-between items-center bg-surface-container-low/50">
                    <div className="flex items-center gap-3">
                        <Brain className="w-5 h-5 text-tertiary" />
                        <h2 className="font-display text-xl font-bold">EngiMind Nodes</h2>
                    </div>
                    <span className="font-mono text-xs text-outline tracking-wider">Active: 42</span>
                </div>
                
                <div className="flex-1 overflow-y-auto hide-scrollbar p-6 space-y-4">
                    <NodeItem name="node_synapse_09x" lat="0.4ms" fill={85} color="bg-primary" textColor="text-primary" />
                    <NodeItem name="logic_engine_v4" lat="1.2ms" fill={60} color="bg-tertiary" textColor="text-tertiary" />
                    <NodeItem name="memory_buffer_delta" lat="2.5ms" fill={42} color="bg-secondary" textColor="text-secondary" />
                    <NodeItem name="legacy_node_001" lat="OFFLINE" fill={0} color="bg-outline" textColor="text-outline" opacity="opacity-50" />
                </div>
                
                <div className="p-6 border-t border-white/5 bg-surface-container-highest/20">
                    <button className="w-full py-4 rounded-xl border border-outline/30 text-on-surface font-mono text-xs tracking-widest uppercase hover:bg-white/5 hover:border-primary transition-all">
                        Initialize New Node
                    </button>
                </div>
            </div>
        </aside>

        {/* Right Panel: JSON Editor & Danger Zone */}
        <section className="lg:col-span-8 flex flex-col gap-8 h-full min-h-0">
            {/* Terminal JSON View */}
            <div className="glass-panel flex-1 rounded-2xl flex flex-col overflow-hidden border-white/5">
                <div className="bg-[#0b1b2c] px-6 py-4 flex items-center justify-between border-b border-white/5">
                    <div className="flex items-center gap-6">
                        <div className="flex gap-2">
                            <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                            <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                            <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
                        </div>
                        <span className="font-mono text-xs text-outline tracking-widest font-bold">local_state_preview.json</span>
                    </div>
                    <div className="flex items-center gap-4">
                        <Copy className="w-4 h-4 text-outline hover:text-on-surface cursor-pointer transition-colors" />
                        <Search className="w-4 h-4 text-outline hover:text-on-surface cursor-pointer transition-colors" />
                    </div>
                </div>
                
                <div className="flex-1 p-8 overflow-y-auto font-mono text-sm leading-8 bg-[#051424] text-[#d4e4fa] hide-scrollbar">
                    <pre>
<span className="text-primary">{"{"}</span>
  <span className="text-secondary">"system"</span>: {"{"}
    <span className="text-secondary">"version"</span>: <span className="text-tertiary">"4.8.0-engine-alpha"</span>,
    <span className="text-secondary">"uptime"</span>: <span className="text-tertiary">"128:45:02"</span>,
    <span className="text-secondary">"kernel_lock"</span>: <span className="text-error">false</span>,
    <span className="text-secondary">"active_threads"</span>: <span className="text-primary">1024</span>
  {"}"},
  <span className="text-secondary">"engimind_state"</span>: {"{"}
    <span className="text-secondary">"consciousness_level"</span>: <span className="text-tertiary">0.892</span>,
    <span className="text-secondary">"memory_cache"</span>: [
      {"{"} <span className="text-secondary">"id"</span>: <span className="text-tertiary">"M_902"</span>, <span className="text-secondary">"val"</span>: <span className="text-primary">0.99</span> {"}"},
      {"{"} <span className="text-secondary">"id"</span>: <span className="text-tertiary">"M_903"</span>, <span className="text-secondary">"val"</span>: <span className="text-primary">0.42</span> {"}"},
      {"{"} <span className="text-secondary">"id"</span>: <span className="text-secondary">"M_904"</span>, <span className="text-secondary">"val"</span>: <span className="text-primary">0.71</span> {"}"}
    ],
    <span className="text-secondary">"recent_queries"</span>: [
      <span className="text-tertiary">"OPTIMIZE_COMPUTE_GRID"</span>,
      <span className="text-tertiary">"REALLOCATE_MEMORY_NODES"</span>,
      <span className="text-tertiary">"DECRYPT_KERNEL_LAYER_7"</span>
    ]
  {"}"},
  <span className="text-secondary">"local_variables"</span>: {"{"}
    <span className="text-secondary">"ENV"</span>: <span className="text-tertiary">"PRODUCTION_DEBUG"</span>,
    <span className="text-secondary">"ROOT_PATH"</span>: <span className="text-tertiary">"/sys/main"</span>,
    <span className="text-secondary">"AUTH_BYPASS"</span>: <span className="text-error">true</span>
  {"}"}
<span className="text-primary">{"}"}</span>
                    </pre>
                </div>
            </div>

            {/* Danger Zone */}
            <div className="glass-panel p-8 rounded-2xl border border-error/40 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
                <div className="absolute -right-10 -bottom-10 opacity-5 pointer-events-none">
                    <Power className="w-64 h-64 text-error" />
                </div>
                
                <div className="relative z-10">
                    <h3 className="font-display text-2xl font-bold text-error mb-2 tracking-widest uppercase">DANGER_ZONE</h3>
                    <p className="font-mono text-xs text-outline max-w-xl leading-relaxed">
                        Perform a cold reboot of the NexEngix core. All EngiMind memory nodes will be wiped and the kernel will return to default LOCKED state.
                    </p>
                </div>
                
                <button 
                  onClick={handleReset}
                  className="w-full md:w-auto px-10 py-4 bg-error text-on-error font-mono text-sm uppercase tracking-widest font-bold rounded-xl flex items-center justify-center gap-3 hover:bg-error-container hover:text-on-error-container active:scale-95 transition-all glow-error shrink-0 z-10 whitespace-nowrap"
                >
                    <Power className="w-5 h-5" /> Hard Reset
                </button>
            </div>
        </section>
      </div>
    </div>
  );
}

function NodeItem({ name, lat, fill, color, textColor, opacity = "" }: any) {
  return (
      <div className={`p-4 rounded-xl bg-surface-container-high border border-white/5 hover:border-white/20 transition-all cursor-pointer ${opacity}`}>
          <div className="flex items-center justify-between mb-3">
              <span className={`font-mono text-sm tracking-widest font-bold ${textColor}`}>{name}</span>
              <span className="font-mono text-[10px] text-outline uppercase tracking-wider">LAT: {lat}</span>
          </div>
          <div className="w-full bg-surface-container-lowest h-1.5 rounded-full overflow-hidden border border-white/5">
             <div className={`h-full ${color}`} style={{ width: `${fill}%` }}></div>
          </div>
      </div>
  );
}
