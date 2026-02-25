// ─────────────────────────────────────────────
//  Provider SVG icons (paths from Simple Icons)
// ─────────────────────────────────────────────
const ICON_PATHS = {
  OpenAI:    'M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zM2.34 7.896a4.485 4.485 0 0 1 2.366-1.973V11.6a.766.766 0 0 0 .388.676l5.815 3.355-2.02 1.168a.076.076 0 0 1-.071 0l-4.83-2.786A4.504 4.504 0 0 1 2.34 7.896zm16.597 3.855l-5.843-3.369 2.02-1.168a.076.076 0 0 1 .071 0l4.83 2.791a4.494 4.494 0 0 1-.676 8.105v-5.678a.79.79 0 0 0-.402-.681zm2.01-3.023l-.141-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.409 9.23V6.897a.066.066 0 0 1 .028-.061l4.83-2.787a4.5 4.5 0 0 1 6.68 4.66zm-12.64 4.135l-2.02-1.164a.08.08 0 0 1-.038-.057V6.075a4.5 4.5 0 0 1 7.375-3.453l-.142.08L8.704 5.46a.795.795 0 0 0-.393.681zm1.097-2.365l2.602-1.5 2.607 1.5v2.999l-2.597 1.5-2.607-1.5z',
  Anthropic: 'M13.827 3.52h3.603L24 20h-3.603l-6.57-16.48zm-7.258 0H9.9L16.344 20H12.74L11.85 17.637H5.32L4.43 20H.826L6.57 3.52zm4.132 11.05L8.58 8.717l-2.38 5.854h4.7z',
  Google:    'M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z',
};

function providerIcon(provider, size = 10) {
  return `<svg class="card-icon" viewBox="0 0 24 24" width="${size}" height="${size}"><path d="${ICON_PATHS[provider]}"/></svg>`;
}

// ─────────────────────────────────────────────
//  Model data  (45 models · 2020–2026)
// ─────────────────────────────────────────────
const MODELS = [
  // ── OpenAI ──────────────────────────────────────────────────────────────────
  { name: 'GPT-3',             provider: 'OpenAI',    date: '2020-06-01', context: 2_048,     output: 2_048,   reasoning: 0,         note: 'The model that started the conversation revolution. 175B parameters, 2K context.' },
  { name: 'GPT-3.5 Turbo',    provider: 'OpenAI',    date: '2022-11-30', context: 4_096,     output: 4_096,   reasoning: 0,         note: 'ChatGPT launch model — fast, affordable, accessible to the world.' },
  { name: 'GPT-3.5 Turbo 16K',provider: 'OpenAI',    date: '2023-06-13', context: 16_385,    output: 4_096,   reasoning: 0,         note: 'First major context jump for GPT-3.5. 8× larger than the original.' },
  { name: 'GPT-4',             provider: 'OpenAI',    date: '2023-03-14', context: 8_192,     output: 8_192,   reasoning: 0,         note: 'Flagship GPT-4 at launch — leap in reasoning quality, 8K context.' },
  { name: 'GPT-4 32K',         provider: 'OpenAI',    date: '2023-03-14', context: 32_768,    output: 8_192,   reasoning: 0,         note: 'Extended context variant — limited rollout, 4× the base GPT-4.' },
  { name: 'GPT-4 Turbo',       provider: 'OpenAI',    date: '2023-11-06', context: 128_000,   output: 4_096,   reasoning: 0,         note: 'Massive 128K context jump. 16× larger than GPT-4. Knowledge cutoff Apr 2023.' },
  { name: 'GPT-4o',            provider: 'OpenAI',    date: '2024-05-13', context: 128_000,   output: 16_384,  reasoning: 0,         note: 'Omni model: text, vision, audio. 4× more output than Turbo. Faster & cheaper.' },
  { name: 'GPT-4o mini',       provider: 'OpenAI',    date: '2024-07-18', context: 128_000,   output: 16_384,  reasoning: 0,         note: 'Small but mighty — replaced GPT-3.5 Turbo as the go-to affordable model.' },
  { name: 'o1',                provider: 'OpenAI',    date: '2024-09-12', context: 200_000,   output: 100_000, reasoning: 32_768,    note: 'First reasoning model. Thinks step-by-step before answering. 200K context.' },
  { name: 'o1 mini',           provider: 'OpenAI',    date: '2024-09-12', context: 128_000,   output: 65_536,  reasoning: 32_768,    note: 'Lightweight reasoning model. Faster & cheaper than o1 for focused tasks.' },
  { name: 'o3 mini',           provider: 'OpenAI',    date: '2025-01-31', context: 200_000,   output: 100_000, reasoning: 100_000,   note: 'Efficient high-reasoning model. Adjustable reasoning effort (low/medium/high).' },
  { name: 'GPT-4.5',           provider: 'OpenAI',    date: '2025-02-27', context: 128_000,   output: 16_384,  reasoning: 0,         note: 'More natural, human-feeling responses. Bridge between GPT-4o and GPT-5.' },
  { name: 'GPT-4.1',           provider: 'OpenAI',    date: '2025-04-14', context: 1_047_576, output: 32_768,  reasoning: 0,         note: 'Massive 1M token context. Optimized for coding and instruction-following.' },
  { name: 'o3',                provider: 'OpenAI',    date: '2025-04-16', context: 200_000,   output: 100_000, reasoning: 100_000,   note: 'State-of-the-art reasoning model. Tops benchmarks for math, science, coding.' },
  { name: 'o4 mini',           provider: 'OpenAI',    date: '2025-04-16', context: 200_000,   output: 100_000, reasoning: 100_000,   note: 'Efficient multimodal reasoning. Exceptional performance-per-dollar ratio.' },
  { name: 'GPT-5',             provider: 'OpenAI',    date: '2025-08-07', context: 400_000,   output: 32_768,  reasoning: 0,         note: '400K context breakthrough. Integrated reasoning without separate o-series budget.' },
  { name: 'GPT-5.2',           provider: 'OpenAI',    date: '2025-12-11', context: 400_000,   output: 128_000, reasoning: 0,         note: '128K output — 4× larger than GPT-5. Enterprise coding & agentic workflows.' },
  { name: 'GPT-5.3-Codex',     provider: 'OpenAI',    date: '2026-02-05', context: 400_000,   output: 128_000, reasoning: 0,         note: 'Coding specialist variant of GPT-5.3. Released alongside Claude Opus 4.6.' },

  // ── Anthropic ────────────────────────────────────────────────────────────────
  { name: 'Claude 1',          provider: 'Anthropic', date: '2023-03-14', context: 9_000,     output: 9_000,   reasoning: 0,         note: 'Anthropic\'s first public model. Constitutional AI from the start.' },
  { name: 'Claude 1.3',        provider: 'Anthropic', date: '2023-07-11', context: 100_000,   output: 9_000,   reasoning: 0,         note: 'Revolutionary 100K context — first model at this scale. 11× jump.' },
  { name: 'Claude 2',          provider: 'Anthropic', date: '2023-07-11', context: 100_000,   output: 4_096,   reasoning: 0,         note: 'Improved capabilities over 1.3 with same 100K context window.' },
  { name: 'Claude 2.1',        provider: 'Anthropic', date: '2023-11-21', context: 200_000,   output: 4_096,   reasoning: 0,         note: 'Doubled to 200K. Reduced hallucinations, better instruction-following.' },
  { name: 'Claude 3 Haiku',    provider: 'Anthropic', date: '2024-03-13', context: 200_000,   output: 4_096,   reasoning: 0,         note: 'Fastest & most compact Claude 3 model. Ideal for real-time applications.' },
  { name: 'Claude 3 Sonnet',   provider: 'Anthropic', date: '2024-03-04', context: 200_000,   output: 4_096,   reasoning: 0,         note: 'Best balance of intelligence and speed in the Claude 3 family.' },
  { name: 'Claude 3 Opus',     provider: 'Anthropic', date: '2024-03-04', context: 200_000,   output: 4_096,   reasoning: 0,         note: 'Most capable Claude 3 — outperformed GPT-4 on most benchmarks at launch.' },
  { name: 'Claude 3.5 Sonnet', provider: 'Anthropic', date: '2024-06-20', context: 200_000,   output: 8_192,   reasoning: 0,         note: 'Topped coding benchmarks. Doubled output tokens. The new daily driver.' },
  { name: 'Claude 3.5 Haiku',  provider: 'Anthropic', date: '2024-11-04', context: 200_000,   output: 8_192,   reasoning: 0,         note: 'Fast & affordable with full Claude 3.5 quality. Replaced Claude 3 Haiku.' },
  { name: 'Claude 3.7 Sonnet', provider: 'Anthropic', date: '2025-02-24', context: 200_000,   output: 16_000,  reasoning: 128_000,   note: 'Extended thinking mode: 128K reasoning budget. Breakthrough in coding.' },
  { name: 'Claude Sonnet 4',   provider: 'Anthropic', date: '2025-05-22', context: 200_000,   output: 32_768,  reasoning: 128_000,   note: 'Hybrid model: instant or extended thinking. Superior coding & reasoning.' },
  { name: 'Claude Opus 4',     provider: 'Anthropic', date: '2025-05-22', context: 200_000,   output: 32_768,  reasoning: 128_000,   note: 'Most powerful Claude 4. World\'s best coding model at launch.' },
  { name: 'Claude Sonnet 4.5', provider: 'Anthropic', date: '2025-08-15', context: 200_000,   output: 64_000,  reasoning: 64_000,    note: 'Expanded 64K output. Refined extended thinking. Flagship mid-tier model.' },
  { name: 'Claude Opus 4.5',   provider: 'Anthropic', date: '2025-08-15', context: 200_000,   output: 64_000,  reasoning: 128_000,   note: 'Upgraded Opus with 64K output and enhanced extended thinking capability.' },
  { name: 'Claude Opus 4.6',   provider: 'Anthropic', date: '2026-02-05', context: 200_000,   output: 128_000, reasoning: 128_000,   note: '#1 ranked model (Feb 2026). 1M token beta context. 128K output.' },
  { name: 'Claude Sonnet 4.6', provider: 'Anthropic', date: '2026-02-15', context: 200_000,   output: 64_000,  reasoning: 64_000,    note: 'Flagship efficiency: matches Opus at 1/5th cost. 1M token beta context.' },

  // ── Google ───────────────────────────────────────────────────────────────────
  { name: 'PaLM 2 Bison',      provider: 'Google',    date: '2023-05-10', context: 8_192,     output: 2_048,   reasoning: 0,         note: 'Google\'s PaLM 2 era — text, chat and code models across many languages.' },
  { name: 'Gemini 1.0 Pro',    provider: 'Google',    date: '2023-12-13', context: 32_768,    output: 8_192,   reasoning: 0,         note: 'First Gemini generation. Multimodal from day one: text, images, audio, video.' },
  { name: 'Gemini 1.0 Ultra',  provider: 'Google',    date: '2024-02-08', context: 32_768,    output: 8_192,   reasoning: 0,         note: 'Flagship Gemini 1.0 — first model to beat GPT-4 on MMLU benchmark.' },
  { name: 'Gemini 1.5 Pro',    provider: 'Google',    date: '2024-02-15', context: 1_000_000, output: 8_192,   reasoning: 0,         note: 'Stunning 1M token context via MoE architecture. Needle-in-haystack mastery.' },
  { name: 'Gemini 1.5 Flash',  provider: 'Google',    date: '2024-05-14', context: 1_000_000, output: 8_192,   reasoning: 0,         note: 'Fast 1M context model. Most widely used Gemini in 2024.' },
  { name: 'Gemini 1.5 Flash 8B',provider:'Google',    date: '2024-10-03', context: 1_000_000, output: 8_192,   reasoning: 0,         note: 'Smallest Gemini — best cost-efficiency for high-volume 1M context tasks.' },
  { name: 'Gemini 2.0 Flash',  provider: 'Google',    date: '2025-01-21', context: 1_048_576, output: 8_192,   reasoning: 0,         note: 'Next-gen Flash: 2× faster, multimodal output (images, audio, code exec).' },
  { name: 'Gemini 2.0 Flash Thinking', provider: 'Google', date: '2025-01-21', context: 1_048_576, output: 8_192, reasoning: 32_768, note: 'Reasoning variant — extended thinking experimental. Best budget reasoner.' },
  { name: 'Gemini 2.5 Pro',    provider: 'Google',    date: '2025-03-25', context: 1_048_576, output: 65_536,  reasoning: 32_768,    note: 'State-of-the-art Gemini. Leads coding & reasoning benchmarks. 65K output.' },
  { name: 'Gemini 2.5 Flash',  provider: 'Google',    date: '2025-05-20', context: 1_048_576, output: 65_536,  reasoning: 24_576,    note: 'Efficient reasoning at scale. Best performance-per-dollar in Gemini 2.5.' },
  { name: 'Gemini 3 Pro',      provider: 'Google',    date: '2025-12-01', context: 1_000_000, output: 65_536,  reasoning: 32_768,    note: 'Google\'s third Gemini generation. Enhanced agentic and multimodal capabilities.' },
  { name: 'Gemini 3.1 Pro',    provider: 'Google',    date: '2026-02-19', context: 1_000_000, output: 65_536,  reasoning: 32_768,    note: '77.1% ARC-AGI-2. Point update with expanded output and MEDIUM thinking level.' },
];

// ─────────────────────────────────────────────
//  Colors per provider
// ─────────────────────────────────────────────
const COLORS = {
  OpenAI:    { line: '#10b981', bg: 'rgba(16,185,129,0.8)',  dim: 'rgba(16,185,129,0.15)'  },
  Anthropic: { line: '#f97316', bg: 'rgba(249,115,22,0.8)',  dim: 'rgba(249,115,22,0.15)'  },
  Google:    { line: '#60a5fa', bg: 'rgba(96,165,250,0.8)',  dim: 'rgba(96,165,250,0.15)'  },
};
const providerClass = p => p.toLowerCase();

// ─────────────────────────────────────────────
//  State
// ─────────────────────────────────────────────
let activeFilter   = 'all';
let activeView     = 'timeline';
let timelineMetric = 'context';
let compareMetric  = 'context';
let timelineChart, compareChart;

const metricLabel = {
  context:   'Context Window',
  output:    'Max Output Tokens',
  reasoning: 'Reasoning Tokens',
  breakdown: 'I/O Breakdown',
};
const metricKey = { context: 'context', output: 'output', reasoning: 'reasoning' };

// ─────────────────────────────────────────────
//  Utilities
// ─────────────────────────────────────────────
function fmtTokens(n) {
  if (!n) return '—';
  if (n >= 1_000_000) return (n / 1_000_000).toFixed(n % 1_000_000 === 0 ? 0 : 2) + 'M';
  if (n >= 1_000)     return (n / 1_000).toFixed(n % 1_000 === 0 ? 0 : 1) + 'K';
  return n.toLocaleString();
}

function filteredModels() {
  return activeFilter === 'all' ? MODELS : MODELS.filter(m => m.provider === activeFilter);
}

// ─────────────────────────────────────────────
//  Stats row
// ─────────────────────────────────────────────
function buildStats() {
  const el = document.getElementById('statsRow');
  const maxCtx  = Math.max(...MODELS.map(m => m.context));
  const minCtx  = Math.min(...MODELS.map(m => m.context));
  const growth  = Math.round(maxCtx / minCtx);
  const stats = [
    { num: MODELS.length,               label: 'Models tracked' },
    { num: '3',                         label: 'Providers' },
    { num: fmtTokens(maxCtx),           label: 'Largest context' },
    { num: growth.toLocaleString() + '×', label: 'Growth since 2020' },
  ];
  el.innerHTML = stats.map(s =>
    `<div class="stat">
       <div class="stat-num">${s.num}</div>
       <div class="stat-label">${s.label}</div>
     </div>`
  ).join('');
}

// ─────────────────────────────────────────────
//  Timeline chart (with zoom)
// ─────────────────────────────────────────────
function buildTimeline() {
  const ctx = document.getElementById('timelineChart').getContext('2d');
  if (timelineChart) timelineChart.destroy();

  const key     = metricKey[timelineMetric];
  const models  = filteredModels().filter(m => m[key] > 0);
  const providers = [...new Set(models.map(m => m.provider))];

  const datasets = providers.map(prov => {
    const pts = models
      .filter(m => m.provider === prov)
      .sort((a, b) => new Date(a.date) - new Date(b.date))
      .map(m => ({ x: m.date, y: m[key], model: m }));
    return {
      label: prov,
      data: pts,
      borderColor: COLORS[prov].line,
      backgroundColor: COLORS[prov].bg,
      pointRadius: 6,
      pointHoverRadius: 10,
      borderWidth: 2.5,
      tension: 0.3,
      fill: false,
    };
  });

  document.getElementById('timelineTitle').textContent =
    metricLabel[timelineMetric] + ' over time (log scale)';

  timelineChart = new Chart(ctx, {
    type: 'line',
    data: { datasets },
    options: {
      responsive: true,
      maintainAspectRatio: true,
      aspectRatio: window.innerWidth < 640 ? 1.2 : 2.2,
      interaction: { mode: 'nearest', intersect: true },
      plugins: {
        legend: {
          display: true,
          position: 'top',
          labels: { color: '#7c84a3', usePointStyle: true, pointStyle: 'circle', padding: 20, font: { size: 13 } },
        },
        tooltip: {
          backgroundColor: 'rgba(10,12,24,0.95)',
          borderColor: 'rgba(255,255,255,0.08)',
          borderWidth: 1,
          padding: 14,
          titleFont: { size: 14, weight: 'bold' },
          bodyFont: { size: 12 },
          titleColor: '#e8eaf6',
          bodyColor: '#7c84a3',
          callbacks: {
            title: items => items[0].raw.model.name,
            label: item => {
              const m = item.raw.model;
              const released = new Date(m.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short' });
              const lines = [
                `  Provider : ${m.provider}`,
                `  Released : ${released}`,
                `  ${metricLabel[timelineMetric]}: ${fmtTokens(m[key])}`,
              ];
              if (key !== 'context')  lines.push(`  Context   : ${fmtTokens(m.context)}`);
              if (key !== 'output')   lines.push(`  Max Output: ${fmtTokens(m.output)}`);
              if (m.reasoning > 0)    lines.push(`  Reasoning : ${fmtTokens(m.reasoning)}`);
              return lines;
            },
          },
        },
        zoom: {
          zoom: {
            wheel: { enabled: true, speed: 0.08 },
            pinch: { enabled: true },
            mode: 'xy',
          },
          pan: {
            enabled: true,
            mode: 'xy',
            threshold: 5,
          },
        },
      },
      scales: {
        x: {
          type: 'time',
          time: { unit: 'month', tooltipFormat: 'MMM yyyy', displayFormats: { month: 'MMM yy', year: 'yyyy' } },
          grid: { color: 'rgba(255,255,255,0.04)' },
          ticks: { color: '#7c84a3', font: { size: 11 }, maxRotation: 0 },
        },
        y: {
          type: 'logarithmic',
          grid: { color: 'rgba(255,255,255,0.04)' },
          ticks: {
            color: '#7c84a3',
            font: { size: 11 },
            callback: v => fmtTokens(v),
            includeBounds: false,
          },
        },
      },
    },
  });

  // Reset zoom button
  document.getElementById('resetZoomBtn').onclick = () => timelineChart.resetZoom();
}

// ─────────────────────────────────────────────
//  Compare chart – single metric bar
// ─────────────────────────────────────────────
function buildCompareSingle(key) {
  const ctx = document.getElementById('compareChart').getContext('2d');
  if (compareChart) compareChart.destroy();

  const models  = filteredModels().filter(m => m[key] > 0).sort((a, b) => a[key] - b[key]);
  const labels  = models.map(m => m.name);
  const data    = models.map(m => m[key]);
  const bgs     = models.map(m => COLORS[m.provider].bg);
  const borders = models.map(m => COLORS[m.provider].line);

  document.getElementById('compareTitle').textContent = metricLabel[compareMetric] + ' by model';
  document.getElementById('breakdownLegend').style.display = 'none';

  compareChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels,
      datasets: [{ label: metricLabel[compareMetric], data, backgroundColor: bgs, borderColor: borders, borderWidth: 1.5, borderRadius: 6 }],
    },
    options: {
      indexAxis: 'y',
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        tooltip: {
          backgroundColor: 'rgba(10,12,24,0.95)',
          borderColor: 'rgba(255,255,255,0.08)',
          borderWidth: 1,
          padding: 14,
          titleFont: { size: 13, weight: 'bold' },
          bodyFont: { size: 12 },
          titleColor: '#e8eaf6',
          bodyColor: '#7c84a3',
          callbacks: {
            title: items => items[0].label,
            label: item => {
              const m = models[item.dataIndex];
              const ratio = m.output && m.context > m.output
                ? ` (${(m.output / m.context * 100).toFixed(1)}% of context)` : '';
              return [
                `  ${metricLabel[compareMetric]}: ${fmtTokens(m[key])}${key === 'output' ? ratio : ''}`,
                `  Provider : ${m.provider}`,
                `  Released : ${new Date(m.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short' })}`,
                `  Context  : ${fmtTokens(m.context)}`,
                `  Max Output: ${fmtTokens(m.output)}`,
                ...(m.reasoning > 0 ? [`  Reasoning: ${fmtTokens(m.reasoning)}`] : []),
              ];
            },
          },
        },
      },
      scales: {
        x: {
          type: 'logarithmic',
          grid: { color: 'rgba(255,255,255,0.04)' },
          ticks: { color: '#7c84a3', font: { size: 11 }, callback: v => fmtTokens(v) },
        },
        y: { grid: { display: false }, ticks: { color: '#e8eaf6', font: { size: 11 } } },
      },
    },
  });

  const canvas = document.getElementById('compareChart');
  canvas.parentElement.style.height = Math.max(400, models.length * 32 + 60) + 'px';
}

// ─────────────────────────────────────────────
//  Compare chart – I/O Breakdown stacked
// ─────────────────────────────────────────────
function buildCompareBreakdown() {
  const ctx = document.getElementById('compareChart').getContext('2d');
  if (compareChart) compareChart.destroy();

  const models = filteredModels().sort((a, b) => a.context - b.context);
  const labels = models.map(m => m.name);

  // Stacked: [input capacity][output tokens][reasoning tokens]
  // Input = context - output (so total stacks to context)
  // Reasoning is a subset of output budget but shown as additive segment for clarity
  const inputData     = models.map(m => Math.max(0, m.context - m.output));
  const outputData    = models.map(m => m.output - (m.reasoning || 0));
  const reasoningData = models.map(m => m.reasoning || 0);

  const provColors = models.map(m => COLORS[m.provider].line);

  document.getElementById('compareTitle').textContent = 'Input · Output · Reasoning breakdown per model';
  document.getElementById('breakdownLegend').style.display = 'flex';

  compareChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels,
      datasets: [
        {
          label: 'Input Capacity',
          data: inputData,
          backgroundColor: models.map(m => COLORS[m.provider].line + 'aa'),
          borderWidth: 0,
          borderRadius: { topLeft: 4, bottomLeft: 4 },
          borderSkipped: false,
        },
        {
          label: 'Max Output',
          data: outputData,
          backgroundColor: 'rgba(249,115,22,0.75)',
          borderWidth: 0,
        },
        {
          label: 'Reasoning',
          data: reasoningData,
          backgroundColor: 'rgba(196,132,252,0.8)',
          borderWidth: 0,
          borderRadius: { topRight: 4, bottomRight: 4 },
          borderSkipped: false,
        },
      ],
    },
    options: {
      indexAxis: 'y',
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        tooltip: {
          backgroundColor: 'rgba(10,12,24,0.95)',
          borderColor: 'rgba(255,255,255,0.08)',
          borderWidth: 1,
          padding: 14,
          titleFont: { size: 13, weight: 'bold' },
          bodyFont: { size: 12 },
          titleColor: '#e8eaf6',
          bodyColor: '#7c84a3',
          callbacks: {
            title: items => items[0].label,
            label: item => {
              const m = models[item.dataIndex];
              const outRatio = (m.output / m.context * 100).toFixed(1);
              return [
                `  Context Window : ${fmtTokens(m.context)}`,
                `  Input Capacity : ${fmtTokens(Math.max(0, m.context - m.output))} (${(100 - parseFloat(outRatio)).toFixed(1)}%)`,
                `  Max Output     : ${fmtTokens(m.output)} (${outRatio}% of ctx)`,
                ...(m.reasoning > 0 ? [`  Reasoning      : ${fmtTokens(m.reasoning)}`] : []),
                `  Provider       : ${m.provider}`,
              ];
            },
          },
        },
      },
      scales: {
        x: {
          stacked: true,
          type: 'logarithmic',
          grid: { color: 'rgba(255,255,255,0.04)' },
          ticks: { color: '#7c84a3', font: { size: 11 }, callback: v => fmtTokens(v) },
        },
        y: {
          stacked: true,
          grid: { display: false },
          ticks: { color: '#e8eaf6', font: { size: 11 } },
        },
      },
    },
  });

  const canvas = document.getElementById('compareChart');
  canvas.parentElement.style.height = Math.max(400, models.length * 32 + 60) + 'px';
}

function buildCompare() {
  if (compareMetric === 'breakdown') buildCompareBreakdown();
  else buildCompareSingle(metricKey[compareMetric]);
}

// ─────────────────────────────────────────────
//  Cards view
// ─────────────────────────────────────────────
function buildCards() {
  const maxCtx = Math.max(...MODELS.map(m => m.context));
  const maxOut = Math.max(...MODELS.map(m => m.output));
  const maxRea = Math.max(...MODELS.map(m => m.reasoning));

  const models = filteredModels().sort((a, b) => new Date(b.date) - new Date(a.date));

  document.getElementById('modelGrid').innerHTML = models.map(m => {
    const cls     = providerClass(m.provider);
    const dateStr = new Date(m.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long' });

    // Stacked input/output bar — proportional to max context across all models
    const inputW  = Math.max(0, (m.context - m.output) / maxCtx * 100).toFixed(1);
    const outputW = Math.max(0.6, m.output / maxCtx * 100).toFixed(2); // min 0.6% to stay visible
    const reaW    = m.reasoning ? Math.max(0.6, m.reasoning / maxCtx * 100).toFixed(2) : 0;
    const ioRatio = (m.output / m.context * 100).toFixed(1);

    return `
    <div class="model-card ${cls}">
      <div class="card-header">
        <div class="card-name">${m.name}</div>
        <div class="card-provider provider-${cls}">${providerIcon(m.provider, 10)}${m.provider}</div>
      </div>
      <div class="card-date">${dateStr}</div>

      <div class="token-bars">
        <!-- Stacked input + output bar -->
        <div class="token-row">
          <div class="token-label-row">
            <span class="token-label">Input / Output Split</span>
            <span class="token-value">${fmtTokens(m.context)} ctx</span>
          </div>
          <div class="bar-track">
            <div class="bar-seg seg-input"  style="width:${inputW}%"></div>
            <div class="bar-seg seg-output" style="width:${outputW}%"></div>
            ${m.reasoning > 0 ? `<div class="bar-seg seg-reasoning" style="width:${reaW}%"></div>` : ''}
          </div>
          <div class="io-ratio">
            <span><span class="io-dot io-dot-in"></span>Input: ${fmtTokens(Math.max(0, m.context - m.output))}</span>
            <span><span class="io-dot io-dot-out"></span>Output: ${fmtTokens(m.output)} <span style="opacity:.6">(${ioRatio}%)</span></span>
            ${m.reasoning > 0 ? `<span><span class="io-dot io-dot-rea"></span>Reasoning: ${fmtTokens(m.reasoning)}</span>` : ''}
          </div>
        </div>

        <!-- Max Output standalone bar (relative to all models) -->
        <div class="token-row">
          <div class="token-label-row">
            <span class="token-label">Max Output</span>
            <span class="token-value">${fmtTokens(m.output)}</span>
          </div>
          <div class="bar-track">
            <div class="bar-fill bar-output" style="width:${Math.max(1, m.output / maxOut * 100).toFixed(1)}%"></div>
          </div>
        </div>

        ${m.reasoning > 0 ? `
        <div class="token-row">
          <div class="token-label-row">
            <span class="token-label">Reasoning Budget</span>
            <span class="token-value">${fmtTokens(m.reasoning)}</span>
          </div>
          <div class="bar-track">
            <div class="bar-fill bar-reasoning" style="width:${Math.max(1, m.reasoning / maxRea * 100).toFixed(1)}%"></div>
          </div>
        </div>` : ''}
      </div>

      <div class="card-note">${m.note}</div>
    </div>`;
  }).join('');
}

// ─────────────────────────────────────────────
//  Render dispatcher
// ─────────────────────────────────────────────
function render() {
  document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
  document.getElementById('view-' + activeView).classList.add('active');
  if (activeView === 'timeline') buildTimeline();
  if (activeView === 'compare')  buildCompare();
  if (activeView === 'cards')    buildCards();
}

// ─────────────────────────────────────────────
//  Event wiring
// ─────────────────────────────────────────────
document.querySelectorAll('#filterPills .pill').forEach(pill => {
  pill.addEventListener('click', () => {
    activeFilter = pill.dataset.filter;
    document.querySelectorAll('#filterPills .pill').forEach(p => p.classList.remove('active'));
    pill.classList.add('active');
    render();
  });
});

document.querySelectorAll('#viewTabs .tab').forEach(tab => {
  tab.addEventListener('click', () => {
    activeView = tab.dataset.view;
    document.querySelectorAll('#viewTabs .tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    render();
  });
});

document.querySelectorAll('#timelineMetrics .metric-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    timelineMetric = btn.dataset.metric;
    document.querySelectorAll('#timelineMetrics .metric-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    buildTimeline();
  });
});

document.querySelectorAll('#compareMetrics .metric-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    compareMetric = btn.dataset.metric;
    document.querySelectorAll('#compareMetrics .metric-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    buildCompare();
  });
});

// ─────────────────────────────────────────────
//  Init
// ─────────────────────────────────────────────
buildStats();
render();
