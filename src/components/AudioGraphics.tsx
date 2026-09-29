import React from 'react';

// Clean, subtle waveform detail
export function AudioWaveGraphic({ className = "w-full h-6", active = false }: { className?: string; active?: boolean }) {
  const barHeights = [25, 45, 30, 65, 80, 40, 55, 75, 35, 70, 90, 50, 35, 75, 60, 40, 85, 55, 30, 65, 80, 45, 25, 55, 70, 35, 25, 45, 65, 35];
  
  return (
    <div className={`flex items-center justify-between gap-1 overflow-hidden ${className}`}>
      {barHeights.map((height, i) => (
        <span
          key={i}
          className="w-1 rounded-full transition-all duration-300"
          style={{ 
            height: `${height}%`,
            backgroundColor: i >= 8 && i <= 18 ? '#6C5CE7' : '#D9D9DE',
            opacity: 0.8
          }}
        />
      ))}
    </div>
  );
}

// Clean, minimal DAW Stem Track representation
export function DawClipVisualizer({ trackName = "Lead_Vocal_Dry.wav", color = "purple" }: { trackName?: string; color?: string }) {
  const sampleWave = [15, 30, 45, 70, 90, 40, 60, 85, 30, 65, 95, 50, 40, 75, 80, 45, 85, 60, 35, 70, 80, 50, 30, 60, 75, 40, 25, 50, 65, 35];

  return (
    <div className="p-3 rounded-md border border-[#E7E7EA] bg-white font-mono text-xs w-full select-none">
      <div className="flex items-center justify-between mb-2 text-[11px]">
        <span className="font-semibold text-[#18181B] flex items-center gap-1.5 font-sans">
          <span className="w-2 h-2 rounded-full bg-[#6C5CE7]" />
          {trackName}
        </span>
        <span className="text-[#6B6B73] text-[10px]">24-BIT / 44.1kHz • 0:00.000 SYNC</span>
      </div>
      
      {/* Waveform segment representation */}
      <div className="h-7 bg-[#F8F8F6] rounded flex items-center px-2 gap-1 border border-[#E7E7EA]/60">
        {sampleWave.map((h, i) => (
          <div 
            key={i} 
            className="flex-1 rounded-full" 
            style={{ 
              height: `${Math.max(15, h * 0.75)}%`,
              backgroundColor: '#6C5CE7',
              opacity: 0.65
            }} 
          />
        ))}
      </div>
    </div>
  );
}

// Clean Headroom dBFS meter
export function HeadroomMeter() {
  return (
    <div className="space-y-1.5 font-mono text-[11px] w-full">
      <div className="flex justify-between text-[#6B6B73]">
        <span>-30 dBFS</span>
        <span className="text-[#6C5CE7] font-semibold">-18 dBFS (Target)</span>
        <span className="text-[#18181B] font-semibold">-12 dBFS</span>
        <span className="text-red-600 font-bold">0 dBFS (Clip)</span>
      </div>
      <div className="h-3 w-full bg-[#F0F0EE] rounded-sm overflow-hidden flex border border-[#E7E7EA]">
        <div className="h-full bg-emerald-500" style={{ width: '50%' }} />
        <div className="h-full bg-[#6C5CE7]" style={{ width: '25%' }} />
        <div className="h-full bg-amber-400" style={{ width: '15%' }} />
        <div className="h-full bg-red-500" style={{ width: '10%' }} />
      </div>
    </div>
  );
}
