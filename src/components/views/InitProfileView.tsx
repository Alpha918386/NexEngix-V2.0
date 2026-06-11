import React from 'react';
import { Rocket, Award, Search, ArrowRight, Shield } from 'lucide-react';

export function InitProfileView() {
  return (
    <div className="min-h-[calc(100vh-64px)] flex items-center justify-center px-6 py-12 relative">
      {/* Ambient Orbs */}
      <div className="absolute top-1/4 left-[10%] w-96 h-96 bg-primary/10 blur-[120px] rounded-full point-events-none"></div>
      <div className="absolute bottom-1/4 right-[10%] w-96 h-96 bg-secondary/10 blur-[120px] rounded-full point-events-none"></div>

      <div className="w-full max-w-3xl relative z-10 space-y-12">
        {/* Progress header */}
        <div>
          <div className="flex justify-between items-end mb-4">
            <div>
              <span className="font-mono text-xs text-primary uppercase tracking-widest font-bold">Step 01 / 04</span>
              <h2 className="font-display text-4xl font-bold mt-2">Initialize Cognitive Profile</h2>
            </div>
            <div className="flex items-center gap-3 px-4 py-1.5 bg-surface-container rounded-full border border-white/5">
              <div className="w-2 h-2 rounded-full bg-primary animate-breathe"></div>
              <span className="font-mono text-[10px] text-outline uppercase tracking-widest font-bold">AI Sync Active</span>
            </div>
          </div>
          <div className="h-1.5 w-full bg-surface-container-high rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-primary via-tertiary to-secondary w-1/4 transition-all duration-700 ease-out glow-primary"></div>
          </div>
        </div>

        {/* Form Container */}
        <div className="glass-panel rounded-3xl p-8 md:p-12 glow-primary border-primary/20">
          <form className="space-y-12">
            
            {/* Career Aspirations */}
            <section className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-primary/10 border border-primary/30">
                  <Rocket className="text-primary w-6 h-6" />
                </div>
                <h3 className="font-display text-2xl font-bold">Career Aspirations</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block font-mono text-[10px] font-bold text-outline uppercase mb-3 tracking-widest ml-1">Primary Domain</label>
                  <input 
                    type="text" 
                    placeholder="e.g. Senior DevOps Engineer"
                    className="w-full bg-surface-container-lowest/50 border-0 border-b-2 border-outline/20 focus:border-primary focus:ring-0 text-on-surface font-body py-4 px-4 transition-all placeholder:text-outline/30 rounded-t-lg outline-none"
                  />
                </div>
                <div>
                  <label className="block font-mono text-[10px] font-bold text-outline uppercase mb-3 tracking-widest ml-1">Target Seniority</label>
                  <select className="w-full bg-surface-container-lowest/50 border-0 border-b-2 border-outline/20 focus:border-primary focus:ring-0 text-on-surface font-body py-4 px-4 transition-all appearance-none rounded-t-lg outline-none">
                    <option>Individual Contributor</option>
                    <option>Staff Engineer</option>
                    <option>Principal / Architect</option>
                    <option>Engineering Management</option>
                  </select>
                </div>
              </div>
            </section>

            {/* Target Certifications */}
            <section className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-tertiary/10 border border-tertiary/30">
                  <Award className="text-tertiary w-6 h-6" />
                </div>
                <h3 className="font-display text-2xl font-bold">Target Certifications</h3>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <CertButton title="AWS Solutions Architect" subtitle="Professional Level" />
                <CertButton title="Google Professional Cloud" subtitle="Architect Track" selected />
                <CertButton title="CKAD / CKA" subtitle="Kubernetes Mastery" />
                
                <button type="button" className="flex items-center justify-center gap-3 p-5 rounded-xl border border-dashed border-outline/40 hover:border-primary transition-all text-outline hover:text-primary hover:bg-surface-container">
                    <Search className="w-5 h-5" />
                    <span className="font-mono text-xs uppercase font-bold tracking-widest">Search Other</span>
                </button>
              </div>
            </section>

            {/* Actions */}
            <div className="pt-6 flex flex-col sm:flex-row items-center gap-6">
              <button type="button" className="w-full sm:flex-1 py-5 px-8 bg-primary text-on-primary font-display text-xl font-bold rounded-xl glow-primary active:scale-95 transition-all flex items-center justify-center gap-3 group">
                 Initialize Core <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </button>
              <button type="button" className="w-full sm:w-auto py-5 px-10 border-2 border-secondary/50 text-secondary font-display text-xl font-bold rounded-xl hover:bg-secondary/10 active:scale-95 transition-all">
                 Skip
              </button>
            </div>
          </form>
        </div>

        {/* Small privacy badge */}
        <div className="flex items-center justify-center gap-3 text-outline mb-10 opacity-60">
            <Shield className="w-4 h-4" />
            <span className="font-mono text-[10px] uppercase tracking-widest">Data encrypted locally. Privacy locked.</span>
        </div>
      </div>
    </div>
  );
}

function CertButton({ title, subtitle, selected = false }: any) {
    if (selected) {
        return (
            <button type="button" className="flex items-center justify-between p-5 rounded-xl border-2 border-primary bg-primary/10 text-left active:scale-[0.98] transition-transform glow-primary">
                <div>
                     <span className="block font-body text-primary font-bold mb-1">{title}</span>
                     <span className="block font-mono text-[10px] text-primary/70 uppercase tracking-widest">{subtitle}</span>
                </div>
            </button>
        );
    }

    return (
        <button type="button" className="flex items-center justify-between p-5 rounded-xl border border-white/5 bg-surface-container hover:border-primary/50 hover:bg-surface-container-high text-left active:scale-[0.98] transition-all">
            <div>
                 <span className="block font-body text-on-surface font-semibold mb-1">{title}</span>
                 <span className="block font-mono text-[10px] text-outline uppercase tracking-widest">{subtitle}</span>
            </div>
        </button>
    );
}
