import React from 'react';
import { Activity, Network, Code2, Shield, Database, Cpu } from 'lucide-react';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-12 lg:p-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-hero-glow opacity-20 blur-[120px] rounded-full pointer-events-none" />

      <nav className="w-full max-w-7xl flex justify-between items-center mb-24 z-10">
        <div className="flex items-center gap-2">
          <Cpu className="text-accent w-8 h-8" />
          <span className="text-2xl font-bold tracking-tighter">NEXUS<span className="text-accent">.OS</span></span>
        </div>
        <div className="hidden md:flex gap-8 text-sm font-medium text-gray-400">
          <span className="hover:text-white cursor-pointer transition">Intelligence</span>
          <span className="hover:text-white cursor-pointer transition">Observability</span>
          <span className="hover:text-white cursor-pointer transition">SDK Gen</span>
        </div>
        <button className="glass-panel px-6 py-2 rounded-full text-sm font-semibold hover:bg-white/10 transition">
          Launch Console
        </button>
      </nav>

      <div className="text-center z-10 max-w-4xl flex flex-col items-center">
        <div className="inline-block px-4 py-1.5 rounded-full glass-panel text-xs font-semibold text-accent mb-6 border border-accent/30">
          Enterprise API Intelligence v1.0
        </div>
        <h1 className="text-6xl lg:text-7xl font-bold tracking-tight mb-8">
          The <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-pink-500">Autonomous</span> API<br />
          Operating System.
        </h1>
        <p className="text-lg lg:text-xl text-gray-400 mb-12 max-w-2xl">
          Reverse-engineer undocumented endpoints, instantly infer schemas, auto-generate typed SDKs, and orchestrate AI integrations at massive scale.
        </p>
        
        <div className="flex gap-4">
          <button className="bg-white text-black px-8 py-4 rounded-xl font-bold hover:bg-gray-200 transition shadow-[0_0_40px_rgba(255,255,255,0.3)]">
            Start Ingestion
          </button>
          <button className="glass-panel px-8 py-4 rounded-xl font-bold hover:bg-white/5 transition flex items-center gap-2">
            <Network className="w-5 h-5" />
            View Semantic Graph
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl mt-32 z-10">
        {[
          { title: "Traffic Replay", icon: <Activity className="text-primary w-6 h-6"/>, desc: "Ingest HAR files and raw traffic streams to reconstruct exact request lineage." },
          { title: "Schema Inference", icon: <Database className="text-accent w-6 h-6"/>, desc: "AI-native parsing converts raw JSON payloads into strict OpenAPI 3.1 definitions." },
          { title: "SDK Generation", icon: <Code2 className="text-secondary w-6 h-6"/>, desc: "Autonomous multi-language typed client compilation with retry middleware." }
        ].map((feature, i) => (
          <div key={i} className="glass-panel p-8 rounded-2xl flex flex-col gap-4 hover:border-white/20 transition group">
            <div className="p-3 bg-white/5 w-fit rounded-lg group-hover:scale-110 transition">{feature.icon}</div>
            <h3 className="text-xl font-semibold">{feature.title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">{feature.desc}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
