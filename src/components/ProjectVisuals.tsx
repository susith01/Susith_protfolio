import React, { useState, useEffect } from 'react';
import {
  Activity,
  Zap,
  ArrowUpRight,
  ArrowDownLeft,
  Wifi,
  CheckCircle2,
  ShoppingCart,
  Package,
  Truck,
  Sparkles,
  Database,
  Brain,
  RefreshCw,
  TrendingUp,
  Server,
  Layers,
  Cpu,
} from 'lucide-react';

// ==========================================
// 1. Network Speed Monitoring & Boosting Visual
// ==========================================
export const SpeedMonitorVisual: React.FC = () => {
  const [downloadSpeed, setDownloadSpeed] = useState<number>(84.6);
  const [uploadSpeed, setUploadSpeed] = useState<number>(42.1);
  const [ping, setPing] = useState<number>(14);
  const [isBoosting, setIsBoosting] = useState<boolean>(false);
  const [boostMessage, setBoostMessage] = useState<string>('System Nominal');

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isBoosting) {
        setDownloadSpeed((prev) => +(prev + (Math.random() * 4 - 2)).toFixed(1));
        setUploadSpeed((prev) => +(prev + (Math.random() * 3 - 1.5)).toFixed(1));
        setPing((prev) => Math.max(10, Math.min(28, Math.round(prev + (Math.random() * 4 - 2)))));
      }
    }, 2000);
    return () => clearInterval(interval);
  }, [isBoosting]);

  const handleBoost = () => {
    setIsBoosting(true);
    setBoostMessage('Flushing DNS & Optimizing Socket Buffer...');
    setTimeout(() => {
      setDownloadSpeed(118.4);
      setUploadSpeed(64.8);
      setPing(8);
      setBoostMessage('Optimized: +39% Throughput Boosted');
      setIsBoosting(false);
    }, 1200);
  };

  return (
    <div className="w-full h-full p-5 rounded-2xl bg-gradient-to-b from-slate-950/90 to-[#070c18]/90 border border-cyan-500/20 backdrop-blur-md flex flex-col justify-between font-mono text-xs text-slate-300">
      {/* Header telemetry bar */}
      <div className="flex items-center justify-between border-b border-slate-800/80 pb-3">
        <div className="flex items-center gap-2">
          <Wifi className="w-4 h-4 text-cyan-400 animate-pulse" />
          <span className="text-white font-bold text-sm">FLASK_NET_DIAGNOSTICS</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span className="text-[11px] text-emerald-400">Live Socket API</span>
        </div>
      </div>

      {/* Speed Metrics Display */}
      <div className="grid grid-cols-3 gap-3 my-4">
        <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800">
          <div className="flex items-center gap-1 text-slate-400 text-[10px] mb-1">
            <ArrowDownLeft className="w-3.5 h-3.5 text-cyan-400" />
            <span>DOWNLOAD</span>
          </div>
          <div className="text-lg sm:text-xl font-extrabold text-cyan-400">
            {downloadSpeed} <span className="text-xs text-slate-400 font-normal">Mbps</span>
          </div>
        </div>

        <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800">
          <div className="flex items-center gap-1 text-slate-400 text-[10px] mb-1">
            <ArrowUpRight className="w-3.5 h-3.5 text-purple-400" />
            <span>UPLOAD</span>
          </div>
          <div className="text-lg sm:text-xl font-extrabold text-purple-400">
            {uploadSpeed} <span className="text-xs text-slate-400 font-normal">Mbps</span>
          </div>
        </div>

        <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800">
          <div className="flex items-center gap-1 text-slate-400 text-[10px] mb-1">
            <Activity className="w-3.5 h-3.5 text-amber-400" />
            <span>LATENCY</span>
          </div>
          <div className="text-lg sm:text-xl font-extrabold text-amber-400">
            {ping} <span className="text-xs text-slate-400 font-normal">ms</span>
          </div>
        </div>
      </div>

      {/* Simulated Live Packet Stream */}
      <div className="p-3 rounded-xl bg-slate-900/40 border border-slate-800/80 space-y-2">
        <div className="flex items-center justify-between text-[11px]">
          <span className="text-slate-400">Automated Optimizer Engine:</span>
          <span className="text-cyan-300 font-semibold">{boostMessage}</span>
        </div>
        <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-cyan-500 via-blue-500 to-emerald-400 transition-all duration-700"
            style={{ width: `${Math.min(100, (downloadSpeed / 130) * 100)}%` }}
          />
        </div>
      </div>

      {/* Interactive Optimization Trigger */}
      <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between">
        <span className="text-[11px] text-slate-400">Flask Subprocess Trigger</span>
        <button
          onClick={handleBoost}
          disabled={isBoosting}
          className="px-3 py-1.5 rounded-lg bg-cyan-500/20 border border-cyan-500/40 text-cyan-300 text-xs font-semibold hover:bg-cyan-500/30 flex items-center gap-1.5 cursor-pointer transition-all active:scale-95"
        >
          <Zap className={`w-3.5 h-3.5 ${isBoosting ? 'animate-spin' : ''}`} />
          <span>{isBoosting ? 'Optimizing...' : 'Run Auto-Optimizer'}</span>
        </button>
      </div>
    </div>
  );
};

// ==========================================
// 2. Grocery Shopping App Workflow Visual (Products → Cart → Order → Tracking)
// ==========================================
export const GroceryAppVisual: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(3); // 0: Products, 1: Cart, 2: Order, 3: Tracking

  const steps = [
    { title: 'Products', icon: <Package className="w-4 h-4" />, desc: 'AI-catalog inventory' },
    { title: 'Cart', icon: <ShoppingCart className="w-4 h-4" />, desc: 'State-synced cart' },
    { title: 'Order', icon: <CheckCircle2 className="w-4 h-4" />, desc: 'Instant checkout' },
    { title: 'Tracking', icon: <Truck className="w-4 h-4" />, desc: 'Live dispatch ETA' },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 4);
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full h-full p-5 rounded-2xl bg-gradient-to-b from-slate-950/90 to-[#070c18]/90 border border-purple-500/20 backdrop-blur-md flex flex-col justify-between font-mono text-xs text-slate-300">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-800/80 pb-3">
        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-purple-400" />
          <span className="text-white font-bold text-sm">VIBE_ECOMMERCE_FLOW</span>
        </div>
        <span className="px-2 py-0.5 rounded text-[10px] bg-purple-950/60 border border-purple-400/40 text-purple-300">
          AI-Assisted Architecture
        </span>
      </div>

      {/* 4-Step Process Bar (Products → Cart → Order → Tracking) */}
      <div className="my-4">
        <div className="text-[11px] uppercase tracking-wider text-slate-400 mb-3">
          Lifecycle Progression:
        </div>
        <div className="grid grid-cols-4 gap-2">
          {steps.map((step, idx) => {
            const isActive = activeStep === idx;
            const isCompleted = idx < activeStep;
            return (
              <button
                key={step.title}
                onClick={() => setActiveStep(idx)}
                className={`p-2.5 rounded-xl border text-center flex flex-col items-center gap-1.5 transition-all duration-300 ${
                  isActive
                    ? 'bg-purple-950/50 border-purple-400 text-purple-300 shadow-md shadow-purple-950/40 scale-105'
                    : isCompleted
                    ? 'bg-slate-900/60 border-slate-700 text-slate-200'
                    : 'bg-slate-950/40 border-slate-800/80 text-slate-500'
                }`}
              >
                <div className={isActive ? 'text-purple-400' : isCompleted ? 'text-emerald-400' : 'text-slate-500'}>
                  {step.icon}
                </div>
                <span className="font-bold text-[11px]">{step.title}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Active Stage Simulation View */}
      <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2">
        <div className="flex items-center justify-between text-xs">
          <span className="text-slate-400">Current Phase:</span>
          <span className="text-purple-300 font-bold">{steps[activeStep].title} Stage</span>
        </div>
        <p className="text-[11px] text-slate-300">
          {activeStep === 0 && 'Browse items with instant algorithmic search & responsive tag filtering.'}
          {activeStep === 1 && 'Reactive cart state manager maintaining synchronized totals & taxes.'}
          {activeStep === 2 && 'Structured order payload dispatched with client-side verification.'}
          {activeStep === 3 && 'Real-time simulated delivery coordinates & status pipeline active.'}
        </p>
      </div>

      {/* Footer metadata */}
      <div className="mt-3 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
        <span>Clean, Scalable Code</span>
        <span className="text-purple-400 font-mono">Rapid AI Prototyping</span>
      </div>
    </div>
  );
};

// ==========================================
// 3. AI-Powered Power BI Analytics Visual (Power BI | MCP Server | AI Integration)
// ==========================================
export const PowerBiAiVisual: React.FC = () => {
  const [mcpStatus, setMcpStatus] = useState<string>('Connected (port 8000)');
  const [activeMetric, setActiveMetric] = useState<string>('Revenue Variance');

  const metrics = [
    { label: 'Q3 Growth', value: '+24.8%', status: 'Surpassed Target' },
    { label: 'Anomaly Rate', value: '0.04%', status: 'Within 99% CI' },
    { label: 'Auto Summaries', value: '142/day', status: 'MCP Synced' },
  ];

  return (
    <div className="w-full h-full p-5 rounded-2xl bg-gradient-to-b from-slate-950/90 to-[#070c18]/90 border border-amber-500/20 backdrop-blur-md flex flex-col justify-between font-mono text-xs text-slate-300">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-800/80 pb-3">
        <div className="flex items-center gap-2">
          <Brain className="w-4 h-4 text-amber-400" />
          <span className="text-white font-bold text-sm">POWER_BI_MCP_AI</span>
        </div>
        <div className="flex items-center gap-1.5 px-2 py-0.5 rounded text-[10px] bg-amber-950/60 border border-amber-400/40 text-amber-300">
          <Server className="w-3 h-3 text-amber-400" />
          <span>MCP Server: Active</span>
        </div>
      </div>

      {/* Live AI Metric Cards */}
      <div className="grid grid-cols-3 gap-2.5 my-3">
        {metrics.map((m) => (
          <div key={m.label} className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800">
            <div className="text-[10px] text-slate-400">{m.label}</div>
            <div className="text-base font-extrabold text-amber-400 mt-0.5">{m.value}</div>
            <div className="text-[9px] text-emerald-400 truncate">{m.status}</div>
          </div>
        ))}
      </div>

      {/* MCP Natural Language Synthesis Preview */}
      <div className="p-3 rounded-xl bg-slate-900/40 border border-slate-800/80 space-y-1.5">
        <div className="flex items-center justify-between text-[11px]">
          <span className="text-slate-400 flex items-center gap-1">
            <Sparkles className="w-3 h-3 text-amber-400" />
            Automated Insight Generation:
          </span>
          <span className="text-[10px] text-amber-300">DAX Model AI</span>
        </div>
        <p className="text-[11px] text-slate-300 leading-relaxed italic bg-slate-950/60 p-2 rounded-lg border border-slate-800">
          "Regional sales throughput surged +24.8% post-optimization. MCP pipeline eliminated 4.5 hours of routine weekly report collation."
        </p>
      </div>

      {/* Footer Action */}
      <div className="mt-3 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
        <span>Zero Manual Aggregation</span>
        <span className="text-amber-400">Context Protocol Synced</span>
      </div>
    </div>
  );
};
