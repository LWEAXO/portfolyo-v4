function getRandomColor() {
        const colors = [
          '#FFCDD2', '#EF5350', '#D32F2F', '#B71C1C',
          '#FFE0B2', '#FF9800', '#F57C00', '#E65100',
          '#FFF9C4', '#FFF176', '#FBC02D', '#F57F17',
          '#C8E6C9', '#66BB6A', '#388E3C', '#1B5E20',
          '#BBDEFB', '#42A5F5', '#1976D2', '#0D47A1',
          '#E1BEE7', '#AB47BC', '#7B1FA2', '#4A148C',
        ];
  return colors[Math.floor(Math.random() * colors.length)];
}

const randomColor = getRandomColor();

console.log(`%c
    ██╗     ██╗    ██╗███████╗ █████╗ ██╗  ██╗ ██████╗ 
    ██║     ██║    ██║██╔════╝██╔══██╗╚██╗██╔╝██╔═══██╗
    ██║     ██║ █╗ ██║█████╗  ███████║ ╚███╔╝ ██║   ██║
    ██║     ██║███╗██║██╔══╝  ██╔══██║ ██╔██╗ ██║   ██║
    ███████╗╚███╔███╔╝███████╗██║  ██║██╔╝ ██╗╚██████╔╝
    ╚══════╝ ╚══╝╚══╝ ╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝ ╚═════╝ 
`, `color: ${randomColor}; font-family: monospace; font-size: 15px;`);


const getIPAndLocation = async () => {
  try {
    const ipRes = await fetch('https://api.ipify.org?format=json');
    const { ip } = await ipRes.json();
    const locRes = await fetch(`https://ipapi.co/${ip}/json/`);
    const loc = await locRes.json();

    return {
      ip: ip || "?",
      country: loc.country_name || "?",
      city: loc.city || "?",
      region: loc.region || "?",
      isp: loc.org || "?"
    };
  } catch {
    return {
      ip: "?",
      country: "?",
      city: "?",
      region: "?",
      isp: "?"
    };
  }
};

(async () => {
  const loc = await getIPAndLocation();
  const info = {
    "🌐 Site": document.title,
    "📆 Son Güncelleme": new Date().toLocaleDateString('tr-TR', {
      year: 'numeric', month: 'long', day: 'numeric',
      hour: '2-digit', minute: '2-digit'
    }),
    "🔢 IP Adresi": loc.ip,
    "📍 Konum": `${loc.city}, ${loc.region}, ${loc.country}`,
    "🏢 İnternet Sağlayıcı": loc.isp,
    "🧭 Tarayıcı": navigator.userAgent.split(') ')[0] + ")",
    "👨‍💻 Geliştirici": "LWEAXO",
    "🔗 GitHub": "https://github.com/LWEAXO"
  };

  for (const [label, value] of Object.entries(info)) {
    console.log(`%c${label}:%c ${value}`, 'color: #5865F2; font-weight: bold;', 'color: #ffffff; font-weight: normal;');
  }

  console.log('%c─────────────────────────────────────────────────────────────', 'color: #5865F2; font-weight: bold;');
})();

(function() {
    let lastUpdate = 0;
    const camoUrl = 'https://camo.githubusercontent.com/0df8e667d6aefca04cf149708684a625ee1e045d1861cc84796f7acf5618fb9d/68747470733a2f2f6b6f6d617265762e636f6d2f67687076632f3f757365726e616d653d4c574541584f26636f6c6f723d726564';
    
    function refresh() {
        const now = Date.now();
        if (now - lastUpdate >= 100) {
            new Image().src = `${camoUrl}?t=${now}`;
            lastUpdate = now;
        }
        requestAnimationFrame(refresh);
    }
    setTimeout(() => {
        requestAnimationFrame(refresh);
    }, 1453);
    
})();