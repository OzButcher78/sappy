export default function CircuitGrid() {
  // All traces — most are faint-only, a select few get a pulse
  const traces = [
    // Top-left region
    { d: "M 50,0 L 50,120 L 0,120" },
    { d: "M 120,0 L 120,80 L 200,80 L 200,180 L 160,180 L 160,250" },
    { d: "M 0,250 L 180,250 L 180,180 L 280,180 L 280,120 L 340,120" },
    { d: "M 80,0 L 80,50 L 160,50 L 160,90" },
    { d: "M 0,160 L 60,160 L 60,200 L 130,200" },
    { d: "M 200,0 L 200,40 L 260,40 L 260,110 L 310,110" },
    { d: "M 0,320 L 90,320 L 90,280 L 150,280" },
    { d: "M 30,0 L 30,60 L 0,60" },

    // Top-center
    { d: "M 400,0 L 400,90 L 470,90 L 470,180 L 520,180 L 520,260" },
    { d: "M 500,0 L 500,60 L 560,60 L 560,130 L 480,130" },
    { d: "M 350,50 L 350,140 L 420,140 L 420,200" },
    { d: "M 440,0 L 440,30 L 380,30 L 380,100" },

    // Top-right region
    { d: "M 750,0 L 750,100 L 850,100 L 850,200 L 800,200 L 800,260" },
    { d: "M 900,0 L 900,70 L 960,70 L 960,150 L 1000,150" },
    { d: "M 1000,80 L 820,80 L 820,220 L 700,220 L 700,280" },
    { d: "M 680,0 L 680,60 L 730,60 L 730,140 L 790,140" },
    { d: "M 1000,200 L 940,200 L 940,130 L 870,130" },
    { d: "M 850,0 L 850,40 L 920,40 L 920,100" },

    // Center-left
    { d: "M 0,450 L 150,450 L 150,350 L 300,350 L 300,290 L 250,290" },
    { d: "M 0,550 L 120,550 L 120,490 L 250,490 L 250,430" },
    { d: "M 100,600 L 100,500 L 200,500 L 200,440 L 280,440" },
    { d: "M 0,400 L 70,400 L 70,360 L 140,360" },
    { d: "M 60,480 L 60,520 L 0,520" },

    // Center
    { d: "M 450,350 L 450,420 L 530,420 L 530,480 L 480,480 L 480,540" },
    { d: "M 380,400 L 380,460 L 420,460 L 420,520 L 360,520" },
    { d: "M 550,300 L 550,370 L 620,370 L 620,440 L 580,440" },

    // Center-right
    { d: "M 1000,400 L 800,400 L 800,320 L 680,320 L 680,370 L 720,370" },
    { d: "M 1000,550 L 850,550 L 850,480 L 780,480 L 780,420" },
    { d: "M 700,500 L 700,600 L 600,600 L 600,550 L 640,550" },
    { d: "M 1000,470 L 920,470 L 920,380 L 860,380" },
    { d: "M 1000,330 L 930,330 L 930,270 L 870,270" },

    // Bottom-left
    { d: "M 0,750 L 200,750 L 200,690 L 140,690 L 140,640" },
    { d: "M 50,900 L 50,800 L 180,800 L 180,740 L 240,740" },
    { d: "M 300,700 L 300,780 L 220,780 L 220,850 L 150,850 L 150,1000" },
    { d: "M 0,680 L 80,680 L 80,720 L 160,720" },
    { d: "M 100,1000 L 100,920 L 60,920 L 60,860 L 0,860" },
    { d: "M 250,1000 L 250,920 L 200,920 L 200,870" },

    // Bottom-center
    { d: "M 400,700 L 400,780 L 460,780 L 460,860 L 500,860 L 500,1000" },
    { d: "M 550,750 L 550,830 L 480,830 L 480,900 L 420,900 L 420,1000" },
    { d: "M 350,800 L 350,870 L 300,870 L 300,940 L 350,940 L 350,1000" },

    // Bottom-right
    { d: "M 1000,700 L 800,700 L 800,760 L 850,760 L 850,830 L 900,830" },
    { d: "M 1000,850 L 880,850 L 880,780 L 750,780 L 750,850 L 750,1000" },
    { d: "M 650,750 L 650,830 L 580,830 L 580,900 L 620,900 L 620,1000" },
    { d: "M 1000,930 L 920,930 L 920,870 L 840,870 L 840,1000" },
    { d: "M 700,900 L 700,960 L 780,960 L 780,1000" },

    // Extra short stubs and branches
    { d: "M 310,0 L 310,70 L 360,70" },
    { d: "M 0,620 L 40,620 L 40,660" },
    { d: "M 1000,620 L 950,620 L 950,670 L 900,670" },
    { d: "M 600,0 L 600,50 L 650,50 L 650,110" },
    { d: "M 450,1000 L 450,950 L 520,950 L 520,890" },
    { d: "M 1000,160 L 970,160 L 970,230 L 1000,230" },
    { d: "M 0,900 L 30,900 L 30,950 L 0,950" },
  ];

  // Only some traces get a pulse (indices into the traces array)
  const pulsedIndices = new Set([1, 6, 9, 14, 18, 23, 28, 33, 38, 43]);
  const pulseConfigs = [
    { dur: "12s", delay: "-2s" },
    { dur: "15s", delay: "-8s" },
    { dur: "10s", delay: "-4s" },
    { dur: "18s", delay: "-11s" },
    { dur: "13s", delay: "-6s" },
    { dur: "16s", delay: "-1s" },
    { dur: "11s", delay: "-9s" },
    { dur: "14s", delay: "-5s" },
    { dur: "17s", delay: "-3s" },
    { dur: "12s", delay: "-7s" },
  ];

  // Node dots at key junctions
  const nodes = [
    [50, 120], [200, 180], [160, 250], [340, 120],
    [850, 200], [700, 280], [300, 290], [250, 430],
    [680, 370], [600, 550], [150, 1000], [480, 540],
    [520, 260], [350, 1000], [750, 100], [150, 850],
    [470, 180], [920, 100], [500, 1000], [840, 1000],
  ];

  let pulseIdx = 0;

  return (
    <div className="circuit-grid">
      <svg
        className="circuit-svg"
        viewBox="0 0 1000 1000"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {traces.map((t, i) => {
          const hasPulse = pulsedIndices.has(i);
          const config = hasPulse ? pulseConfigs[pulseIdx++ % pulseConfigs.length] : null;
          return (
            <g key={i}>
              <path d={t.d} className="circuit-trace-line" />
              {hasPulse && config && (
                <path
                  d={t.d}
                  className="circuit-trace-pulse"
                  style={{
                    strokeDasharray: "40 600",
                    animationDuration: config.dur,
                    animationDelay: config.delay,
                  }}
                />
              )}
            </g>
          );
        })}
        {nodes.map(([x, y], i) => (
          <circle
            key={i}
            cx={x}
            cy={y}
            r="2"
            className="circuit-node-dot"
            style={{ animationDelay: `${-i * 0.7}s` }}
          />
        ))}
      </svg>
    </div>
  );
}
