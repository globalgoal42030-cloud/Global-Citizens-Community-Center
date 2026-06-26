<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<title>Global Citizens Community Center</title>
<link rel="preconnect" href="https://fonts.googleapis.com"/>
<link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300&family=DM+Serif+Display&family=Playfair+Display:wght@700;900&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet"/>
<style>
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}
:root{
  --navy:#050D1A;
  --navy2:#0A1628;
  --slate:#122040;
  --teal:#00D4B4;
  --teal-dim:#00A890;
  --gold:#FFD166;
  --chalk:#F0F4FF;
  --mist:#8A9BBE;
  --coral:#FF6B6B;
  --electric-blue:#1a4fd6;
  --sky:#3b82f6;
  --crimson:#dc2626;
  --sage:#16a34a;
  --light-bg:#f0f4ff;
  --text:#0f172a;
  --text-muted:#475569;
  --border:#e2e8f0;
  --white:#ffffff;
}
html{scroll-behavior:smooth;}
body{font-family:'Inter',sans-serif;background:var(--navy);color:var(--chalk);overflow-x:hidden;line-height:1.6;}

/* ─── SITE-WIDE NAV ─── */
#site-nav{
  position:fixed;top:0;left:0;right:0;z-index:900;
  display:flex;align-items:center;justify-content:space-between;
  padding:18px 48px;
  background:transparent;
  transition:background 0.4s,backdrop-filter 0.4s;
}
#site-nav.scrolled{background:rgba(5,13,26,0.92);backdrop-filter:blur(14px);}
.nav-logo-word{font-family:'Bebas Neue',sans-serif;font-size:22px;letter-spacing:0.08em;color:var(--teal);text-decoration:none;display:flex;align-items:center;gap:10px;}
.nav-logo-globe{width:34px;height:34px;border-radius:50%;background:rgba(0,212,180,0.15);border:1px solid rgba(0,212,180,0.3);display:flex;align-items:center;justify-content:center;font-size:17px;}
.nav-links{display:flex;gap:0;list-style:none;}
.nav-links a{color:rgba(240,244,255,0.65);font-size:13px;letter-spacing:0.03em;text-decoration:none;padding:0 14px;height:56px;display:flex;align-items:center;transition:color 0.2s,background 0.2s;}
.nav-links a:hover{color:var(--chalk);background:rgba(255,255,255,0.04);}
.nav-cta{
  padding:9px 22px;border-radius:4px;
  background:var(--teal);color:var(--navy)!important;
  font-size:13px;font-weight:700;letter-spacing:0.04em;
  text-decoration:none;transition:background 0.2s;
  height:auto!important;background:var(--teal)!important;margin-left:8px;
}
.nav-cta:hover{background:#00FFDF!important;}

/* ─── HERO ─── */
#hero{
  min-height:100vh;display:flex;align-items:center;justify-content:center;
  position:relative;overflow:hidden;
  background:radial-gradient(ellipse 80% 60% at 50% 0%,rgba(0,212,180,0.12) 0%,transparent 70%),var(--navy);
  padding-top:80px;
}
.hero-bg-grid{
  position:absolute;inset:0;
  background-image:linear-gradient(rgba(0,212,180,0.06) 1px,transparent 1px),linear-gradient(90deg,rgba(0,212,180,0.06) 1px,transparent 1px);
  background-size:60px 60px;
  mask-image:radial-gradient(ellipse 80% 70% at 50% 0%,black 30%,transparent 100%);
}
.hero-inner{text-align:center;position:relative;z-index:2;max-width:900px;padding:0 24px;}
.hero-eyebrow{
  display:inline-flex;align-items:center;gap:8px;
  padding:6px 16px;border-radius:20px;
  border:1px solid rgba(0,212,180,0.3);background:rgba(0,212,180,0.08);
  font-size:11px;font-weight:600;letter-spacing:0.12em;text-transform:uppercase;
  color:var(--teal);margin-bottom:28px;
}
.hero-eyebrow-dot{width:6px;height:6px;border-radius:50%;background:var(--teal);animation:pulse 2s infinite;}
@keyframes pulse{0%,100%{opacity:1;transform:scale(1);}50%{opacity:0.5;transform:scale(0.8);}}
.hero-h1{
  font-family:'Bebas Neue',sans-serif;
  font-size:clamp(52px,9vw,110px);
  line-height:0.92;letter-spacing:0.02em;
  color:var(--chalk);margin-bottom:16px;
}
.hero-h1 em{font-style:normal;color:var(--teal);}
.hero-sub{
  font-size:clamp(15px,2vw,19px);color:var(--mist);font-weight:300;
  max-width:580px;margin:0 auto 48px;line-height:1.65;
}
.hero-ctas{display:flex;gap:14px;justify-content:center;flex-wrap:wrap;margin-bottom:64px;}
.btn-primary{
  padding:15px 36px;border-radius:4px;
  background:var(--teal);color:var(--navy);
  font-weight:700;font-size:15px;letter-spacing:0.04em;
  text-decoration:none;transition:all 0.2s;border:none;cursor:pointer;
}
.btn-primary:hover{background:#00FFDF;transform:translateY(-2px);}
.btn-outline{
  padding:15px 36px;border-radius:4px;
  background:transparent;color:var(--chalk);
  font-weight:500;font-size:15px;letter-spacing:0.04em;
  text-decoration:none;transition:all 0.2s;
  border:1px solid rgba(240,244,255,0.25);cursor:pointer;
}
.btn-outline:hover{border-color:var(--chalk);transform:translateY(-2px);}
.hero-stats{
  display:flex;gap:0;justify-content:center;
  border-top:1px solid rgba(255,255,255,0.08);
  padding-top:40px;
  flex-wrap:wrap;
}
.hero-stat{padding:0 40px;text-align:center;}
.hero-stat:not(:last-child){border-right:1px solid rgba(255,255,255,0.08);}
.hero-stat-num{font-family:'Bebas Neue',sans-serif;font-size:44px;color:var(--chalk);line-height:1;}
.hero-stat-num em{font-style:normal;color:var(--teal);}
.hero-stat-label{color:var(--mist);font-size:12px;margin-top:4px;letter-spacing:0.04em;}

/* ─── HERO GLOBE DOME ─── */
.hero-globe-dome{
  position:absolute;
  right:-120px;top:50%;
  transform:translateY(-50%);
  width:620px;height:620px;
  border-radius:50% 50% 50% 50% / 55% 55% 45% 45%;
  background:radial-gradient(circle at 35% 35%,
    rgba(0,212,180,0.22) 0%,
    rgba(0,180,166,0.10) 40%,
    transparent 70%);
  border:1px solid rgba(0,212,180,0.18);
  animation:globeSpin 35s linear infinite;
  pointer-events:none;
}
.hero-globe-dome::before{
  content:'';position:absolute;inset:40px;border-radius:50%;
  border:1px dashed rgba(0,212,180,0.22);
}
.hero-globe-dome::after{
  content:'';position:absolute;inset:100px;border-radius:50%;
  border:1px dashed rgba(255,209,102,0.12);
}
@keyframes globeSpin{
  from{transform:translateY(-50%) rotate(0deg);}
  to{transform:translateY(-50%) rotate(360deg);}
}

/* ─── DOOMSDAY CLOCK BANNER ─── */
.doomsday-banner{
  background:linear-gradient(135deg,#1a0000 0%,#0d0a0a 100%);
  border-top:4px solid #dc2626;
  border-bottom:2px solid #7f1d1d;
  padding:20px 48px;
}
.doomsday-inner{
  max-width:1280px;margin:0 auto;
  display:flex;align-items:center;gap:32px;flex-wrap:wrap;
}
.clock-display{display:flex;align-items:center;gap:18px;flex-shrink:0;}
/* dome analog canvas */
.clock-dome-wrap{
  width:100px;height:100px;border-radius:50% 50% 50% 50% / 60% 60% 40% 40%;
  background:radial-gradient(circle at 40% 35%,#2a0a0a 0%,#0d0000 100%);
  border:2px solid #dc2626;
  box-shadow:0 0 18px rgba(220,38,38,0.4),inset 0 -4px 12px rgba(0,0,0,0.6);
  position:relative;overflow:hidden;flex-shrink:0;
}
.clock-dome-wrap canvas{display:block;}
/* live digital countdown */
.clock-countdown-wrap{display:flex;flex-direction:column;align-items:flex-start;gap:2px;}
.clock-countdown-label{font-size:9px;font-weight:700;letter-spacing:0.14em;text-transform:uppercase;color:#7f1d1d;}
.clock-countdown-digits{
  font-family:'JetBrains Mono',monospace;font-size:32px;font-weight:700;
  color:#ef4444;line-height:1;
  text-shadow:0 0 12px rgba(239,68,68,0.6);
  animation:digitFlicker 1s step-end infinite;
}
@keyframes digitFlicker{0%,100%{opacity:1;}50%{opacity:0.85;}}
.clock-countdown-sub{font-size:10px;color:#7f1d1d;letter-spacing:0.08em;text-transform:uppercase;}
.doomsday-info h3{color:#ef4444;font-size:16px;font-weight:700;letter-spacing:0.05em;text-transform:uppercase;}
.doomsday-info p{color:#fca5a5;font-size:14px;margin-top:4px;}
.doomsday-info span{color:#ef4444;font-weight:600;}
.doomsday-source{margin-left:auto;color:#7f1d1d;font-size:12px;}
.doomsday-source a{color:#f87171;text-decoration:none;}
.doomsday-source a:hover{text-decoration:underline;}

/* ─── TICKER ─── */
#ticker{
  background:var(--teal);padding:11px 0;overflow:hidden;
  border-top:1px solid rgba(0,212,180,0.4);border-bottom:1px solid rgba(0,212,180,0.4);
}
.ticker-track{display:flex;gap:0;white-space:nowrap;animation:ticker 28s linear infinite;}
.ticker-item{
  display:inline-flex;align-items:center;gap:10px;
  font-size:12px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;
  color:var(--navy);padding:0 40px;
}
.ticker-dot{width:5px;height:5px;border-radius:50%;background:var(--navy);opacity:0.5;}
@keyframes ticker{from{transform:translateX(0);}to{transform:translateX(-50%);}}

/* ─── SECTIONS ─── */
.section{padding:80px 48px;}
.section-inner{max-width:1280px;margin:0 auto;}
.section-label{
  font-size:11px;font-weight:700;letter-spacing:0.14em;text-transform:uppercase;
  color:var(--teal);margin-bottom:14px;
}
.section-title{
  font-family:'Bebas Neue',sans-serif;
  font-size:clamp(36px,5vw,58px);letter-spacing:0.03em;line-height:1;
  color:var(--chalk);margin-bottom:18px;
}
.section-sub{font-size:16px;color:var(--mist);line-height:1.75;max-width:600px;margin-bottom:48px;}
.divider{width:48px;height:3px;background:var(--teal);margin:16px 0 24px;}

/* ─── PROGRAMS ─── */
#programs{background:var(--navy);}
.programs-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:2px;margin-top:48px;}
.program-card{
  background:var(--slate);padding:36px 32px;
  position:relative;overflow:hidden;cursor:pointer;
  transition:background 0.25s;
}
.program-card::before{
  content:'';position:absolute;top:0;left:0;right:0;height:3px;
  background:var(--card-accent,var(--teal));
  transform:scaleX(0);transition:transform 0.3s;transform-origin:left;
}
.program-card:hover{background:#16294A;}
.program-card:hover::before{transform:scaleX(1);}
.program-icon{font-size:32px;margin-bottom:18px;}
.program-title{font-family:'DM Serif Display',serif;font-size:22px;color:var(--chalk);margin-bottom:10px;line-height:1.2;}
.program-desc{font-size:14px;color:var(--mist);line-height:1.65;}

/* ─── IMPACT NUMBERS ─── */
#impact{
  background:var(--navy2);
  border-top:1px solid rgba(240,244,255,0.05);
  border-bottom:1px solid rgba(240,244,255,0.05);
  padding:0;
}
.impact-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:1px;background:rgba(240,244,255,0.05);}
.impact-cell{background:var(--navy2);padding:56px 40px;text-align:center;}
.impact-num{font-family:'Bebas Neue',sans-serif;font-size:clamp(48px,6vw,80px);color:var(--chalk);line-height:1;}
.impact-num em{font-style:normal;color:var(--teal);}
.impact-label{font-size:13px;color:var(--mist);margin-top:8px;letter-spacing:0.04em;}

/* ─── SDG GOALS GRID ─── */
#goals{background:var(--slate);}
.sdg-grid{
  display:grid;grid-template-columns:repeat(auto-fill,minmax(90px,1fr));gap:8px;
}
.sdg-item{
  aspect-ratio:1;border-radius:6px;
  display:flex;flex-direction:column;align-items:center;justify-content:center;
  font-size:10px;font-weight:600;text-align:center;
  color:white;cursor:pointer;padding:8px;
  transition:transform 0.15s,box-shadow 0.15s;
  text-decoration:none;line-height:1.2;
}
.sdg-item:hover{transform:scale(1.07);box-shadow:0 4px 20px rgba(0,0,0,0.35);}
.sdg-num{font-size:20px;font-weight:700;margin-bottom:3px;}
.sdg-1{background:#e5243b;}.sdg-2{background:#DDA63A;}.sdg-3{background:#4C9F38;}
.sdg-4{background:#C5192D;}.sdg-5{background:#FF3A21;}.sdg-6{background:#26BDE2;}
.sdg-7{background:#FCC30B;color:#222;}.sdg-8{background:#A21942;}.sdg-9{background:#FD6925;}
.sdg-10{background:#DD1367;}.sdg-11{background:#FD9D24;}.sdg-12{background:#BF8B2E;}
.sdg-13{background:#3F7E44;}.sdg-14{background:#0A97D9;}.sdg-15{background:#56C02B;}
.sdg-16{background:#00689D;}.sdg-17{background:#19486A;}

/* ─── WORLD DATA ─── */
#data{background:var(--white);color:var(--text);}
#data .section-label{color:var(--electric-blue);}
#data .section-title{font-family:'Playfair Display',serif;font-size:clamp(28px,4vw,42px);font-weight:700;color:var(--text);letter-spacing:-0.01em;}
#data .section-sub{color:var(--text-muted);}
#data .divider{background:var(--electric-blue);}
.data-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:20px;}
.data-card{
  background:var(--light-bg);border-radius:12px;padding:28px 24px;
  border-left:4px solid transparent;transition:transform 0.15s;
}
.data-card:hover{transform:translateY(-2px);}
.data-card.blue{border-color:var(--electric-blue);}
.data-card.teal{border-color:#0d9488;}
.data-card.gold{border-color:#f59e0b;}
.data-card.sage{border-color:var(--sage);}
.data-card.crimson{border-color:var(--crimson);}
.data-card.sky{border-color:var(--sky);}
.data-num{font-family:'Playfair Display',serif;font-size:40px;font-weight:700;color:var(--text);line-height:1;}
.data-unit{font-size:20px;}
.data-label{font-size:14px;font-weight:500;color:var(--text);margin:8px 0 4px;}
.data-desc{font-size:12px;color:var(--text-muted);}
.data-source{font-size:11px;color:#94a3b8;margin-top:10px;}

/* ─── ECONOMIC DATA ─── */
#econ{background:var(--navy2);}
#econ .section-label{color:#60a5fa;}
#econ .section-title{font-family:'Playfair Display',serif;font-size:clamp(28px,4vw,42px);font-weight:700;color:white;letter-spacing:-0.01em;}
#econ .section-sub{color:#94a3b8;}
#econ .divider{background:#3b82f6;}
.econ-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:20px;}
.econ-card{
  background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);
  border-radius:12px;padding:28px;transition:border-color 0.2s;
}
.econ-card:hover{border-color:rgba(59,130,246,0.4);}
.econ-region{font-size:11px;font-weight:600;letter-spacing:0.08em;text-transform:uppercase;color:#60a5fa;margin-bottom:12px;}
.econ-metric{font-family:'JetBrains Mono',monospace;font-size:28px;font-weight:500;color:white;margin-bottom:4px;}
.econ-desc{font-size:13px;color:#64748b;margin-bottom:16px;}
.econ-bar-track{height:6px;background:rgba(255,255,255,0.06);border-radius:3px;margin-bottom:6px;}
.econ-bar-fill{height:100%;border-radius:3px;}
.econ-bar-label{display:flex;justify-content:space-between;font-size:11px;color:#475569;}

/* ─── THREATS ─── */
#threats{background:#0c0f1a;}
#threats .section-label{color:#ef4444;}
#threats .section-title{font-family:'Playfair Display',serif;font-size:clamp(28px,4vw,42px);font-weight:700;color:white;letter-spacing:-0.01em;}
#threats .section-sub{color:#94a3b8;}
#threats .divider{background:#ef4444;}
.threats-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:16px;}
.threat-card{
  background:rgba(220,38,38,0.05);border:1px solid rgba(220,38,38,0.15);
  border-radius:10px;padding:24px;position:relative;overflow:hidden;
}
.threat-card::before{content:'';position:absolute;top:0;left:0;right:0;height:3px;}
.threat-card.t1::before{background:#ef4444;}
.threat-card.t2::before{background:#f97316;}
.threat-card.t3::before{background:#eab308;}
.threat-card.t4::before{background:#3b82f6;}
.threat-icon{font-size:28px;margin-bottom:12px;}
.threat-level{font-size:10px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;margin-bottom:8px;}
.threat-card.t1 .threat-level{color:#ef4444;}
.threat-card.t2 .threat-level{color:#f97316;}
.threat-card.t3 .threat-level{color:#eab308;}
.threat-card.t4 .threat-level{color:#60a5fa;}
.threat-title{color:white;font-size:16px;font-weight:600;margin-bottom:8px;}
.threat-desc{color:#64748b;font-size:13px;line-height:1.6;}
.threat-mag{
  font-family:'JetBrains Mono',monospace;font-size:32px;font-weight:700;
  color:rgba(239,68,68,0.2);position:absolute;bottom:12px;right:16px;
}

/* ─── CAMPAIGNS ─── */
#campaigns{background:#f0f9ff;color:var(--text);}
#campaigns .section-label{color:#0284c7;}
#campaigns .section-title{font-family:'Playfair Display',serif;font-size:clamp(28px,4vw,42px);font-weight:700;color:var(--text);letter-spacing:-0.01em;}
#campaigns .section-sub{color:var(--text-muted);}
#campaigns .divider{background:var(--electric-blue);}
.campaigns-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:24px;}
.campaign-card{
  background:white;border-radius:12px;overflow:hidden;
  border:1px solid #bae6fd;transition:transform 0.15s;
}
.campaign-card:hover{transform:translateY(-3px);}
.campaign-img{height:120px;display:flex;align-items:center;justify-content:center;font-size:48px;}
.campaign-body{padding:20px;}
.campaign-category{font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:#0284c7;margin-bottom:8px;}
.campaign-title{font-size:17px;font-weight:600;margin-bottom:8px;line-height:1.3;color:var(--text);}
.campaign-desc{font-size:14px;color:var(--text-muted);margin-bottom:16px;line-height:1.5;}
.campaign-progress{margin-bottom:12px;}
.progress-bar{height:8px;background:#e0f2fe;border-radius:4px;overflow:hidden;}
.progress-fill{height:100%;border-radius:4px;background:#0ea5e9;}
.progress-label{display:flex;justify-content:space-between;font-size:12px;color:#64748b;margin-top:4px;}
.campaign-footer{display:flex;justify-content:space-between;align-items:center;}
.sign-btn{
  background:#0284c7;color:white;border:none;border-radius:6px;
  padding:8px 18px;font-size:13px;font-weight:600;cursor:pointer;
  text-decoration:none;transition:background 0.2s;
}
.sign-btn:hover{background:#0369a1;}
.campaign-sigs{font-size:12px;color:#64748b;}

/* ─── CIVIC ACTION ─── */
#action{background:white;color:var(--text);}
#action .section-label{color:var(--electric-blue);}
#action .section-title{font-family:'Playfair Display',serif;font-size:clamp(28px,4vw,42px);font-weight:700;color:var(--text);letter-spacing:-0.01em;}
#action .section-sub{color:var(--text-muted);}
#action .divider{background:var(--electric-blue);}
.action-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:24px;}
.action-card{border:1px solid var(--border);border-radius:12px;overflow:hidden;transition:box-shadow 0.2s;}
.action-card:hover{box-shadow:0 8px 32px rgba(0,0,0,0.1);}
.action-header{padding:24px;display:flex;align-items:flex-start;gap:16px;}
.action-icon{width:48px;height:48px;border-radius:10px;flex-shrink:0;display:flex;align-items:center;justify-content:center;font-size:22px;}
.action-title{font-size:17px;font-weight:600;margin-bottom:6px;color:var(--text);}
.action-desc{font-size:14px;color:var(--text-muted);line-height:1.5;}
.action-footer{padding:16px 24px;border-top:1px solid var(--border);background:#f8fafc;display:flex;align-items:center;justify-content:space-between;}
.action-tag{font-size:11px;font-weight:600;letter-spacing:0.06em;text-transform:uppercase;padding:4px 10px;border-radius:4px;}
.tag-blue{background:#dbeafe;color:#1e40af;}.tag-green{background:#dcfce7;color:#166534;}
.tag-orange{background:#fef3c7;color:#92400e;}.tag-red{background:#fee2e2;color:#991b1b;}
.tag-purple{background:#ede9fe;color:#5b21b6;}
.action-link{font-size:13px;font-weight:500;color:var(--electric-blue);text-decoration:none;display:flex;align-items:center;gap:4px;}
.action-link:hover{text-decoration:underline;}

/* ─── UN BODIES ─── */
#un{background:#001a33;}
#un .section-label{color:#60a5fa;}
#un .section-title{font-family:'Playfair Display',serif;font-size:clamp(28px,4vw,42px);font-weight:700;color:white;letter-spacing:-0.01em;}
#un .section-sub{color:#94a3b8;}
#un .divider{background:#3b82f6;}
.un-bodies{display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:16px;}
.un-body{
  background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.07);
  border-radius:10px;padding:22px;text-decoration:none;transition:background 0.2s,border-color 0.2s;
}
.un-body:hover{background:rgba(59,130,246,0.1);border-color:rgba(59,130,246,0.3);}
.un-acronym{font-family:'JetBrains Mono',monospace;font-size:13px;font-weight:500;color:#60a5fa;margin-bottom:8px;}
.un-name{font-size:14px;font-weight:600;color:white;margin-bottom:6px;}
.un-desc{font-size:12px;color:#64748b;line-height:1.5;}

/* ─── SUMMIT ─── */
#summit{
  background:linear-gradient(135deg,var(--navy2) 0%,var(--navy) 100%);
  padding:100px 48px;position:relative;overflow:hidden;
}
#summit::before{
  content:'';position:absolute;right:-200px;top:-200px;
  width:600px;height:600px;border-radius:50%;
  background:radial-gradient(circle,rgba(255,209,102,0.08) 0%,transparent 70%);
}
.summit-inner{display:grid;grid-template-columns:1fr 1fr;gap:80px;align-items:center;max-width:1200px;margin:0 auto;}
.summit-tag{
  display:inline-block;padding:5px 14px;border-radius:3px;
  background:rgba(255,209,102,0.12);color:var(--gold);
  font-size:11px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;margin-bottom:22px;
}
.summit-h2{font-family:'Bebas Neue',sans-serif;font-size:clamp(42px,5vw,68px);letter-spacing:0.02em;line-height:1;color:var(--chalk);margin-bottom:22px;}
.summit-h2 em{font-style:normal;color:var(--gold);}
.summit-body{font-size:16px;color:var(--mist);line-height:1.75;margin-bottom:32px;}
.summit-cards{display:flex;flex-direction:column;gap:14px;}
.summit-card{
  background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);
  border-radius:8px;padding:20px 22px;display:flex;gap:16px;align-items:flex-start;
}
.summit-card-icon{font-size:24px;flex-shrink:0;margin-top:2px;}
.summit-card-title{font-weight:600;font-size:14px;color:var(--chalk);margin-bottom:4px;}
.summit-card-desc{font-size:13px;color:var(--mist);line-height:1.55;}

/* ─── COMMUNITY / EVENTS ─── */
#community{background:white;color:var(--text);}
#community .section-label{color:var(--electric-blue);}
#community .section-title{font-family:'Playfair Display',serif;font-size:clamp(28px,4vw,42px);font-weight:700;color:var(--text);letter-spacing:-0.01em;}
#community .section-sub{color:var(--text-muted);}
#community .divider{background:var(--electric-blue);}
.comm-grid{display:grid;grid-template-columns:1fr 1fr;gap:48px;align-items:start;}
.comm-list{list-style:none;display:flex;flex-direction:column;gap:16px;}
.comm-list li{display:flex;align-items:flex-start;gap:14px;font-size:15px;color:var(--text-muted);}
.comm-icon{width:36px;height:36px;border-radius:8px;flex-shrink:0;background:#dbeafe;display:flex;align-items:center;justify-content:center;font-size:17px;margin-top:2px;}
.comm-icon.red{background:#fee2e2;}
.comm-icon.green{background:#dcfce7;}
.comm-icon.purple{background:#ede9fe;}
.comm-events{display:flex;flex-direction:column;gap:12px;}
.event-item{background:var(--light-bg);border-radius:10px;padding:18px 20px;display:flex;gap:16px;align-items:flex-start;border-left:4px solid var(--electric-blue);}
.event-date{text-align:center;flex-shrink:0;}
.event-month{font-size:10px;font-weight:700;text-transform:uppercase;color:var(--electric-blue);}
.event-day{font-size:26px;font-weight:700;color:var(--text);line-height:1;}
.event-title{font-size:14px;font-weight:600;margin-bottom:4px;color:var(--text);}
.event-sub{font-size:12px;color:var(--text-muted);}

/* ─── PARTNERS ─── */
#partners{background:#f8fafc;padding:48px;}
.partners-inner{max-width:1280px;margin:0 auto;}
.partners-label{text-align:center;font-size:12px;font-weight:600;letter-spacing:0.1em;text-transform:uppercase;color:#94a3b8;margin-bottom:28px;}
.partners-grid{display:flex;gap:40px;flex-wrap:wrap;justify-content:center;align-items:center;}
.partner-logo{
  font-family:'JetBrains Mono',monospace;font-size:13px;font-weight:500;
  color:#94a3b8;padding:8px 16px;border-radius:6px;
  border:1px solid #e2e8f0;background:white;transition:color 0.2s,border-color 0.2s;
  text-decoration:none;
}
.partner-logo:hover{color:var(--electric-blue);border-color:var(--electric-blue);}

/* ─── EMAIL CTA ─── */
#cta{background:var(--electric-blue);padding:64px 48px;}
.cta-inner{max-width:600px;margin:0 auto;text-align:center;}
.cta-inner h2{font-family:'Playfair Display',serif;font-size:36px;font-weight:700;color:white;margin-bottom:12px;}
.cta-inner p{color:rgba(255,255,255,0.8);font-size:16px;margin-bottom:28px;}
.email-form{display:flex;gap:8px;max-width:480px;margin:0 auto;flex-wrap:wrap;justify-content:center;}
.email-input{flex:1;min-width:220px;padding:13px 18px;border:none;border-radius:6px;font-size:15px;font-family:'Inter',sans-serif;outline:none;}
.email-input:focus{box-shadow:0 0 0 3px rgba(255,255,255,0.3);}
.email-submit{background:var(--navy);color:white;border:none;padding:13px 24px;border-radius:6px;font-size:15px;font-weight:600;cursor:pointer;font-family:'Inter',sans-serif;transition:background 0.2s;}
.email-submit:hover{background:#0d1f3c;}

/* ─── FOOTER ─── */
footer{background:var(--navy2);padding:60px 48px 32px;border-top:1px solid rgba(240,244,255,0.06);}
.footer-grid{display:grid;grid-template-columns:2fr 1fr 1fr 1fr;gap:48px;max-width:1200px;margin:0 auto 48px;}
.footer-brand-word{font-family:'Bebas Neue',sans-serif;font-size:28px;color:var(--teal);letter-spacing:0.08em;margin-bottom:12px;}
.footer-tagline{font-size:13px;color:var(--mist);line-height:1.65;max-width:260px;}
.footer-col h4{font-size:11px;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;color:var(--mist);margin-bottom:16px;}
.footer-col a{display:block;font-size:13px;color:rgba(240,244,255,0.5);text-decoration:none;margin-bottom:10px;transition:color 0.2s;}
.footer-col a:hover{color:var(--chalk);}
.footer-bottom{max-width:1200px;margin:0 auto;padding-top:24px;border-top:1px solid rgba(240,244,255,0.06);display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:12px;}
.footer-copy{font-size:12px;color:rgba(240,244,255,0.3);}
.footer-sdg-badge{font-size:11px;font-weight:700;letter-spacing:0.08em;color:var(--teal);opacity:0.6;}

/* ─── ROOMS ─── */
#rooms{background:var(--navy);}
.rooms-intro{max-width:680px;margin-bottom:56px;}
.rooms-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:2px;}
.room-card{
  position:relative;overflow:hidden;
  background:var(--slate);padding:40px 36px;
  transition:background 0.25s;cursor:pointer;
}
.room-card::after{
  content:'';position:absolute;bottom:0;left:0;right:0;height:3px;
  background:var(--room-accent,var(--teal));
  transform:scaleX(0);transition:transform 0.3s;transform-origin:left;
}
.room-card:hover{background:#16294A;}
.room-card:hover::after{transform:scaleX(1);}
.room-emoji{font-size:36px;margin-bottom:20px;}
.room-name{font-family:'DM Serif Display',serif;font-size:22px;color:var(--chalk);margin-bottom:10px;line-height:1.2;}
.room-desc{font-size:14px;color:var(--mist);line-height:1.65;margin-bottom:20px;}
.room-link{
  display:inline-flex;align-items:center;gap:6px;
  font-size:12px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;
  color:var(--room-accent,var(--teal));text-decoration:none;
  transition:gap 0.2s;
}
.room-link:hover{gap:10px;}

/* ─── MEMBERSHIP ─── */
#membership{background:var(--navy2);}
#membership .section-label{color:var(--teal);}
.membership-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:20px;margin-top:48px;}
.mem-card{
  background:var(--slate);border-radius:2px;padding:36px 32px;
  position:relative;overflow:hidden;transition:transform 0.2s;
  border-top:3px solid var(--mem-accent,var(--teal));
}
.mem-card:hover{transform:translateY(-4px);}
.mem-card.featured{
  background:var(--teal);color:var(--navy);
  border-top-color:var(--gold);
}
.mem-badge{
  display:inline-block;font-size:10px;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;
  padding:3px 10px;border-radius:20px;margin-bottom:20px;
  background:rgba(255,255,255,0.12);color:var(--chalk);
}
.mem-card.featured .mem-badge{background:rgba(5,13,26,0.15);color:var(--navy);}
.mem-tier{font-family:'Bebas Neue',sans-serif;font-size:28px;letter-spacing:0.06em;color:var(--chalk);margin-bottom:6px;}
.mem-card.featured .mem-tier{color:var(--navy);}
.mem-tagline{font-size:13px;color:var(--mist);margin-bottom:24px;line-height:1.5;}
.mem-card.featured .mem-tagline{color:rgba(5,13,26,0.7);}
.mem-price{font-family:'Bebas Neue',sans-serif;font-size:48px;letter-spacing:0.02em;color:var(--chalk);line-height:1;}
.mem-price sup{font-size:22px;vertical-align:top;margin-top:8px;}
.mem-price sub{font-size:14px;font-family:'Inter',sans-serif;font-weight:400;letter-spacing:0em;}
.mem-card.featured .mem-price{color:var(--navy);}
.mem-divider{height:1px;background:rgba(255,255,255,0.1);margin:24px 0;}
.mem-card.featured .mem-divider{background:rgba(5,13,26,0.15);}
.mem-perks{list-style:none;display:flex;flex-direction:column;gap:10px;margin-bottom:32px;}
.mem-perk{display:flex;align-items:flex-start;gap:10px;font-size:13px;color:var(--mist);line-height:1.5;}
.mem-card.featured .mem-perk{color:rgba(5,13,26,0.8);}
.mem-perk::before{content:'✓';color:var(--teal);font-weight:700;flex-shrink:0;margin-top:1px;}
.mem-card.featured .mem-perk::before{color:var(--navy);}
.mem-btn{
  display:block;text-align:center;padding:13px 20px;border-radius:4px;
  font-size:13px;font-weight:700;letter-spacing:0.06em;text-transform:uppercase;
  text-decoration:none;transition:all 0.2s;
  background:rgba(0,212,180,0.15);color:var(--teal);
  border:1px solid rgba(0,212,180,0.3);
}
.mem-btn:hover{background:var(--teal);color:var(--navy);}
.mem-card.featured .mem-btn{background:var(--navy);color:var(--teal);border-color:var(--navy);}
.mem-card.featured .mem-btn:hover{background:#0d1f3c;}

/* ─── SPONSORSHIP ─── */
#sponsorship{background:var(--slate);}
#sponsorship .section-label{color:var(--gold);}
.sponsor-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:20px;margin-top:48px;}
.sponsor-card{
  background:var(--navy2);padding:36px 32px;border-radius:2px;
  border-top:3px solid var(--sp-accent,var(--gold));
  transition:transform 0.2s;
}
.sponsor-card:hover{transform:translateY(-4px);}
.sp-medal{font-size:32px;margin-bottom:16px;}
.sp-tier{font-family:'Bebas Neue',sans-serif;font-size:28px;letter-spacing:0.06em;color:var(--chalk);margin-bottom:4px;}
.sp-price{font-family:'Bebas Neue',sans-serif;font-size:40px;color:var(--sp-accent,var(--gold));line-height:1;margin-bottom:20px;}
.sp-divider{height:1px;background:rgba(255,255,255,0.08);margin:20px 0;}
.sp-perks{list-style:none;display:flex;flex-direction:column;gap:9px;margin-bottom:28px;}
.sp-perk{display:flex;align-items:flex-start;gap:10px;font-size:13px;color:var(--mist);line-height:1.5;}
.sp-perk::before{content:'→';color:var(--sp-accent,var(--gold));font-weight:700;flex-shrink:0;}
.sp-btn{
  display:block;text-align:center;padding:12px 20px;border-radius:4px;
  font-size:13px;font-weight:700;letter-spacing:0.06em;text-transform:uppercase;
  text-decoration:none;transition:all 0.2s;
  border:1px solid var(--sp-accent,var(--gold));color:var(--sp-accent,var(--gold));
  background:transparent;
}
.sp-btn:hover{background:var(--sp-accent,var(--gold));color:var(--navy);}

/* ─── DONATIONS ─── */
#donate{background:var(--navy);}
#donate .section-label{color:var(--teal);}
.donate-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:16px;margin-top:48px;}
.donate-card{
  background:var(--slate);padding:28px 24px;border-radius:2px;
  border-left:3px solid var(--d-accent,var(--teal));
  transition:transform 0.2s;
}
.donate-card:hover{transform:translateY(-3px);}
.donate-amount{font-family:'Bebas Neue',sans-serif;font-size:48px;color:var(--chalk);line-height:1;margin-bottom:8px;}
.donate-amount em{font-style:normal;color:var(--d-accent,var(--teal));}
.donate-impact{font-size:14px;font-weight:600;color:var(--chalk);margin-bottom:8px;}
.donate-desc{font-size:13px;color:var(--mist);line-height:1.55;margin-bottom:20px;}
.donate-extras{list-style:none;display:flex;flex-direction:column;gap:6px;margin-bottom:24px;}
.donate-extra{font-size:12px;color:var(--mist);display:flex;align-items:center;gap:8px;}
.donate-extra::before{content:'·';color:var(--d-accent,var(--teal));font-size:18px;line-height:1;}
.donate-btn{
  display:block;text-align:center;padding:10px 16px;border-radius:4px;
  font-size:12px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;
  text-decoration:none;transition:all 0.2s;
  background:rgba(0,212,180,0.12);color:var(--teal);border:1px solid rgba(0,212,180,0.25);
}
.donate-btn:hover{background:var(--teal);color:var(--navy);}

/* ─── START YOUR OWN CENTER ─── */
#start-center{
  background:linear-gradient(135deg,var(--navy2) 0%,var(--slate) 100%);
  padding:80px 48px;position:relative;overflow:hidden;
}
#start-center::before{
  content:'';position:absolute;left:-200px;bottom:-200px;
  width:500px;height:500px;border-radius:50%;
  background:radial-gradient(circle,rgba(0,212,180,0.07) 0%,transparent 70%);
}
.start-inner{display:grid;grid-template-columns:1fr 1fr;gap:72px;align-items:center;max-width:1200px;margin:0 auto;}
.start-label{font-size:11px;font-weight:700;letter-spacing:0.14em;text-transform:uppercase;color:var(--teal);margin-bottom:14px;}
.start-h2{font-family:'Bebas Neue',sans-serif;font-size:clamp(42px,5vw,68px);letter-spacing:0.02em;line-height:1;color:var(--chalk);margin-bottom:20px;}
.start-h2 em{font-style:normal;color:var(--teal);}
.start-body{font-size:16px;color:var(--mist);line-height:1.75;margin-bottom:32px;}
.start-steps{display:flex;flex-direction:column;gap:16px;}
.start-step{
  background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);
  border-radius:8px;padding:20px 22px;display:flex;gap:16px;align-items:flex-start;
}
.start-step-num{
  font-family:'Bebas Neue',sans-serif;font-size:32px;color:var(--teal);
  line-height:1;flex-shrink:0;min-width:32px;
}
.start-step-title{font-weight:600;font-size:14px;color:var(--chalk);margin-bottom:4px;}
.start-step-desc{font-size:13px;color:var(--mist);line-height:1.55;}

/* ─── GLOWBAG STYLES ─── */
.gb-label{font-size:11px;font-weight:700;letter-spacing:0.14em;text-transform:uppercase;color:#e879f9;margin-bottom:12px;}
.gb-intro{background:rgba(232,121,249,0.07);border:1px solid rgba(232,121,249,0.2);border-radius:12px;padding:20px 24px;margin-bottom:36px;display:flex;align-items:flex-start;gap:16px;}
.gb-intro-icon{font-size:32px;flex-shrink:0;}
.gb-intro-text{font-size:14px;color:#8A9BBE;line-height:1.7;}
.gb-intro-text strong{color:var(--chalk);display:block;font-size:15px;margin-bottom:6px;font-weight:500;}
.gb-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:16px;margin-bottom:32px;}
.gb-card{border-radius:12px;overflow:hidden;background:rgba(255,255,255,0.04);border:1px solid rgba(232,121,249,0.15);}
.gb-header{padding:20px 20px 16px;text-align:center;}
.gb-emoji{font-size:36px;display:block;margin-bottom:10px;}
.gb-badge{display:inline-block;font-size:10px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;padding:3px 12px;border-radius:20px;margin-bottom:8px;}
.gb-name{font-size:20px;font-weight:700;color:var(--chalk);margin-bottom:4px;letter-spacing:0.04em;}
.gb-tagline{font-size:12px;line-height:1.5;}
.gb-body{padding:0 20px 20px;}
.gb-hr{height:1px;background:rgba(255,255,255,0.07);margin:0 0 14px;}
.gb-items-lbl{font-size:10px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:rgba(255,255,255,0.3);margin-bottom:10px;}
.gb-items{list-style:none;display:flex;flex-direction:column;gap:6px;margin-bottom:18px;}
.gb-item{display:flex;align-items:flex-start;gap:8px;font-size:12px;color:#8A9BBE;line-height:1.4;}
.gb-dot{width:5px;height:5px;border-radius:50%;flex-shrink:0;margin-top:4px;}
.gb-btn{display:block;text-align:center;padding:10px 14px;border-radius:6px;font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;cursor:pointer;width:100%;transition:all 0.2s;}
.gb-woman .gb-header{background:linear-gradient(135deg,rgba(244,63,94,0.18),rgba(232,121,249,0.12));}
.gb-woman .gb-badge{background:rgba(244,63,94,0.15);color:#fb7185;}
.gb-woman .gb-tagline{color:#fda4af;}
.gb-woman .gb-dot{background:#fb7185;}
.gb-woman .gb-btn{background:rgba(244,63,94,0.15);color:#fb7185;border:1px solid rgba(244,63,94,0.3);}
.gb-man .gb-header{background:linear-gradient(135deg,rgba(59,130,246,0.18),rgba(99,102,241,0.12));}
.gb-man .gb-badge{background:rgba(59,130,246,0.15);color:#60a5fa;}
.gb-man .gb-tagline{color:#93c5fd;}
.gb-man .gb-dot{background:#60a5fa;}
.gb-man .gb-btn{background:rgba(59,130,246,0.15);color:#60a5fa;border:1px solid rgba(59,130,246,0.3);}
.gb-girl .gb-header{background:linear-gradient(135deg,rgba(20,184,166,0.18),rgba(52,211,153,0.12));}
.gb-girl .gb-badge{background:rgba(20,184,166,0.15);color:#2dd4bf;}
.gb-girl .gb-tagline{color:#99f6e4;}
.gb-girl .gb-dot{background:#2dd4bf;}
.gb-girl .gb-btn{background:rgba(20,184,166,0.15);color:#2dd4bf;border:1px solid rgba(20,184,166,0.3);}
.gb-boy .gb-header{background:linear-gradient(135deg,rgba(245,158,11,0.18),rgba(251,146,60,0.12));}
.gb-boy .gb-badge{background:rgba(245,158,11,0.15);color:#fbbf24;}
.gb-boy .gb-tagline{color:#fde68a;}
.gb-boy .gb-dot{background:#fbbf24;}
.gb-boy .gb-btn{background:rgba(245,158,11,0.15);color:#fbbf24;border:1px solid rgba(245,158,11,0.3);}
.gb-cta{background:rgba(232,121,249,0.07);border:1px solid rgba(232,121,249,0.2);border-radius:12px;padding:28px;text-align:center;}
.gb-cta h3{font-size:24px;font-weight:700;color:var(--chalk);margin-bottom:8px;letter-spacing:0.04em;}
.gb-cta p{font-size:14px;color:#8A9BBE;margin-bottom:20px;max-width:480px;margin-left:auto;margin-right:auto;}
.gb-cta-btn{display:inline-block;padding:13px 28px;border-radius:4px;background:#e879f9;color:#0d0015;font-weight:700;font-size:13px;letter-spacing:0.04em;}
/* tabbed donations */
.don-tabs{display:flex;gap:10px;flex-wrap:wrap;margin-bottom:32px;}
.don-tab{padding:9px 18px;border-radius:6px;font-size:13px;font-weight:700;letter-spacing:0.04em;cursor:pointer;border:1px solid rgba(240,244,255,0.15);color:#8A9BBE;background:transparent;font-family:'Inter',sans-serif;transition:all 0.2s;}
.don-tab.active{background:#00D4B4;color:#050D1A;border-color:#00D4B4;}
.don-panel{display:none;}
.don-panel.active{display:grid;grid-template-columns:repeat(4,1fr);gap:14px;}
.don-card{background:#122040;padding:24px 20px;border-left:3px solid var(--da,#00D4B4);}
.don-amt{font-size:40px;font-weight:700;color:var(--chalk);line-height:1;margin-bottom:6px;font-family:'Georgia',serif;}
.don-amt em{font-style:normal;color:var(--da,#00D4B4);}
.don-impact{font-size:13px;font-weight:600;color:var(--chalk);margin-bottom:6px;}
.don-desc{font-size:12px;color:#8A9BBE;line-height:1.55;margin-bottom:12px;}
.don-extras{list-style:none;display:flex;flex-direction:column;gap:5px;margin-bottom:18px;}
.don-extra{font-size:11px;color:#8A9BBE;display:flex;align-items:center;gap:6px;}
.don-extra::before{content:'·';font-size:16px;line-height:1;color:var(--da,#00D4B4);}
.don-btn{display:block;text-align:center;padding:9px 14px;font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;background:rgba(0,212,180,0.12);color:#00D4B4;border:1px solid rgba(0,212,180,0.25);cursor:pointer;transition:all 0.2s;}
.don-btn:hover{background:rgba(0,212,180,0.25);}
/* donate strip */
.strip-donate-btn{background:transparent;border:1.5px solid rgba(255,255,255,0.2);color:var(--chalk);padding:0.6rem 1.5rem;font-family:'Inter',sans-serif;font-weight:600;font-size:0.85rem;cursor:pointer;transition:all 0.2s;}
.strip-donate-btn:hover,.strip-donate-btn.active{background:var(--gold);border-color:var(--gold);color:var(--navy);}
/* glow toast */
.glow-toast{position:fixed;bottom:2rem;right:2rem;background:var(--teal);color:var(--navy);padding:1rem 1.5rem;font-weight:700;font-size:0.85rem;z-index:9999;transform:translateY(200%);transition:transform 0.4s;border-radius:4px;}
.glow-toast.show{transform:translateY(0);}
.nav-hamburger{
  display:none;flex-direction:column;justify-content:center;gap:5px;
  background:none;border:none;cursor:pointer;padding:6px;z-index:1000;
}
.nav-hamburger span{display:block;width:24px;height:2px;background:var(--chalk);border-radius:2px;transition:all 0.3s;}
.nav-hamburger.open span:nth-child(1){transform:translateY(7px) rotate(45deg);}
.nav-hamburger.open span:nth-child(2){opacity:0;}
.nav-hamburger.open span:nth-child(3){transform:translateY(-7px) rotate(-45deg);}

/* ─── RESPONSIVE ─── */
@media(max-width:900px){
  #site-nav{padding:16px 24px;}
  .nav-links{display:none;flex-direction:column;position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(5,13,26,0.98);backdrop-filter:blur(16px);z-index:800;padding:80px 32px 40px;gap:4px;overflow-y:auto;}
  .nav-links.open{display:flex;}
  .nav-links a{height:auto;padding:14px 0;font-size:16px;border-bottom:1px solid rgba(255,255,255,0.07);}
  .nav-cta{border:none;background:none!important;color:var(--teal)!important;padding:14px 0!important;margin:0!important;}
  .nav-hamburger{display:flex;}
  .section{padding:64px 24px;}
  #summit{padding:72px 24px;}
  .summit-inner{grid-template-columns:1fr;gap:48px;}
  .start-inner{grid-template-columns:1fr;gap:48px;}
  #start-center{padding:64px 24px;}
  .impact-grid{grid-template-columns:repeat(2,1fr);}
  .comm-grid{grid-template-columns:1fr;}
  .footer-grid{grid-template-columns:1fr 1fr;}
  #partners{padding:40px 24px;}
  #cta{padding:48px 24px;}
  .gb-grid{grid-template-columns:1fr 1fr;}
  .don-panel.active{grid-template-columns:1fr 1fr;}
  .hero-globe-dome{width:300px;height:300px;right:-60px;opacity:0.35;}
  .doomsday-banner{padding:20px 24px;}
  footer{padding:48px 24px 28px;}
}
@media(max-width:600px){
  .hero-stat{padding:0 20px;}
  .impact-grid{grid-template-columns:repeat(2,1fr);}
  .footer-grid{grid-template-columns:1fr;}
  .sdg-grid{grid-template-columns:repeat(6,1fr);}
  .sdg-item{font-size:8px;}
}
@media(prefers-reduced-motion:reduce){
  .ticker-track,.clock-ring,.hero-eyebrow-dot{animation:none!important;transition:none!important;}
}
</style>
</head>
<body>

<!-- ─── NAVIGATION ─── -->
<nav id="site-nav">
  <a class="nav-logo-word" href="#hero">
    <div class="nav-logo-globe">🌍</div>
    GCCC
  </a>
  <ul class="nav-links" id="navLinks">
    <li><a href="#hero">Home</a></li>
    <li><a href="#impact">Impact</a></li>
    <li><a href="#live" style="color:var(--coral);">🔴 Live</a></li>
    <li><a href="#programs">Programs</a></li>
    <li><a href="#rooms">Rooms</a></li>
    <li><a href="#goals">Global Goals</a></li>
    <li><a href="#data">World Data</a></li>
    <li><a href="#threats">Critical Threats</a></li>
    <li><a href="#sustainability-hour" style="color:#4ade80;font-weight:700;">🌿 Sustainability Hour</a></li>
    <li><a href="#campaigns">Take Action</a></li>
    <li><a href="#summit">Summit</a></li>
    <li><a href="#membership">Membership</a></li>
    <li><a href="#community">Community</a></li>
    <li><a href="#plan">Plan &amp; Game</a></li>
    <li><a href="community-center.html" class="nav-cta" style="background:rgba(0,212,180,0.12);color:var(--teal);border:1px solid rgba(0,212,180,0.3);margin-left:4px;">Community</a></li>
    <li><a href="gccc-pages.html" class="nav-cta">Sign In</a></li>
    <li><a href="#membership" class="nav-cta" style="background:var(--gold);color:var(--navy);margin-left:4px;">Sign Up</a></li>
    <li><a href="fundraiser.html" class="nav-cta" style="background:var(--teal);color:var(--navy);margin-left:4px;">Start Fundraiser</a></li>
  </ul>
  <button class="nav-hamburger" id="navHamburger" aria-label="Open menu" onclick="document.getElementById('navLinks').classList.toggle('open');this.classList.toggle('open');">
    <span></span><span></span><span></span>
  </button>
</nav>

<!-- ─── HERO ─── -->
<section id="hero">
  <div class="hero-bg-grid"></div>
  <!-- Rotating globe dome (from GCCC_Website_2) -->
  <div class="hero-globe-dome"></div>
  <div class="hero-inner">
    <div class="hero-eyebrow">
      <span class="hero-eyebrow-dot"></span>
      Global Hive · SDG Community Hub · New York
    </div>
    <h1 class="hero-h1">Global<br><em>Citizens</em><br>Community</h1>
    <p class="hero-sub">Where immigrants, refugees, and global citizens find language, career, and community — powered by the belief that every person deserves to belong.</p>
    <div class="hero-ctas">
      <a class="btn-primary" href="#programs">Explore Programs</a>
      <a class="btn-primary" href="fundraiser.html" style="background:var(--gold);color:var(--navy);">Start Your Fundraiser Now</a>
      <a class="btn-outline" href="#goals">Global Goals</a>
    </div>
    <div class="hero-stats">
      <div class="hero-stat">
        <div class="hero-stat-num">193</div>
        <div class="hero-stat-label">UN Member Nations</div>
      </div>
      <div class="hero-stat">
        <div class="hero-stat-num">17</div>
        <div class="hero-stat-label">Sustainable Dev. Goals</div>
      </div>
      <div class="hero-stat">
        <div class="hero-stat-num">8.1<em>B</em></div>
        <div class="hero-stat-label">Global Citizens</div>
      </div>
      <div class="hero-stat">
        <div class="hero-stat-num">$1.64<em>T</em></div>
        <div class="hero-stat-label">World Bank est. to end extreme poverty by 2030</div>
      </div>
      <div class="hero-stat">
        <div class="hero-stat-num">2030</div>
        <div class="hero-stat-label">SDG Deadline</div>
      </div>
    </div>
  </div>
</section>

<!-- ─── DOOMSDAY CLOCK BANNER ─── -->
<div class="doomsday-banner">
  <div class="doomsday-inner">
    <div class="clock-display">
      <!-- Ticking analog clock dome -->
      <div class="clock-dome-wrap">
        <canvas id="doomClock" width="100" height="100"></canvas>
      </div>
      <!-- Live digital countdown -->
      <div class="clock-countdown-wrap">
        <div class="clock-countdown-label">LIVE COUNTDOWN</div>
        <div class="clock-countdown-digits" id="clockDigits">1:25</div>
        <div class="clock-countdown-sub">to midnight</div>
      </div>
    </div>
    <div class="doomsday-info">
      <h3>⚠ Doomsday Clock — 85 Seconds to Midnight</h3>
      <p>Updated January 2026 — the closest the clock has ever been. <span>Nuclear risk, AI disruption, climate change, and geopolitical instability</span> drive this unprecedented warning from the Bulletin of Atomic Scientists.</p>
    </div>
    <div class="doomsday-source">
      Source: <a href="https://thebulletin.org" target="_blank" rel="noopener">Bulletin of Atomic Scientists</a><br/>
      <span style="font-size:11px">Updated annually since 1947</span>
    </div>
  </div>
</div>

<!-- ─── TICKER ─── -->
<div id="ticker">
  <div class="ticker-track">
    <span class="ticker-item" style="color:#0d2a10;background:#4ade80;padding:2px 14px;border-radius:2px;font-weight:900;">🌿 START SUSTAINABILITY HOUR NOW</span><span class="ticker-dot"></span>
    <span class="ticker-item">ESL Classes <span class="ticker-dot"></span></span>
    <span class="ticker-item">1 Hour A Day · Save The Planet <span class="ticker-dot"></span></span>
    <span class="ticker-item">Job Readiness <span class="ticker-dot"></span></span>
    <span class="ticker-item">Youth After School <span class="ticker-dot"></span></span>
    <span class="ticker-item">Sustainability Hour · Schools · Colleges · Institutions <span class="ticker-dot"></span></span>
    <span class="ticker-item">Citizenship Prep <span class="ticker-dot"></span></span>
    <span class="ticker-item">Community Dinners <span class="ticker-dot"></span></span>
    <span class="ticker-item">Global Summit 2025 <span class="ticker-dot"></span></span>
    <span class="ticker-item">SDG Goals 2030 <span class="ticker-dot"></span></span>
    <span class="ticker-item">Staff Training <span class="ticker-dot"></span></span>
    <span class="ticker-item">Partner: NYPD <span class="ticker-dot"></span></span>
    <span class="ticker-item">Partner: HDS <span class="ticker-dot"></span></span>
    <span class="ticker-item">Partner: Brooklyn Family Court <span class="ticker-dot"></span></span>
    <span class="ticker-item">Partner: NYPD Family Benches <span class="ticker-dot"></span></span>
    <span class="ticker-item">Partner: Family Affair Organization <span class="ticker-dot"></span></span>
    <span class="ticker-item">Entertainment Partner: Four Walls <span class="ticker-dot"></span></span>
    <span class="ticker-item" style="color:#0d2a10;background:#4ade80;padding:2px 14px;border-radius:2px;font-weight:900;">🌿 START SUSTAINABILITY HOUR NOW</span><span class="ticker-dot"></span>
    <span class="ticker-item">ESL Classes <span class="ticker-dot"></span></span>
    <span class="ticker-item">1 Hour A Day · Save The Planet <span class="ticker-dot"></span></span>
    <span class="ticker-item">Job Readiness <span class="ticker-dot"></span></span>
    <span class="ticker-item">Youth After School <span class="ticker-dot"></span></span>
    <span class="ticker-item">Sustainability Hour · Schools · Colleges · Institutions <span class="ticker-dot"></span></span>
    <span class="ticker-item">Citizenship Prep <span class="ticker-dot"></span></span>
    <span class="ticker-item">Community Dinners <span class="ticker-dot"></span></span>
    <span class="ticker-item">Global Summit 2025 <span class="ticker-dot"></span></span>
    <span class="ticker-item">SDG Goals 2030 <span class="ticker-dot"></span></span>
    <span class="ticker-item">Staff Training <span class="ticker-dot"></span></span>
    <span class="ticker-item">Partner: NYPD <span class="ticker-dot"></span></span>
    <span class="ticker-item">Partner: HDS <span class="ticker-dot"></span></span>
    <span class="ticker-item">Partner: Brooklyn Family Court <span class="ticker-dot"></span></span>
    <span class="ticker-item">Partner: NYPD Family Benches <span class="ticker-dot"></span></span>
    <span class="ticker-item">Partner: Family Affair Organization <span class="ticker-dot"></span></span>
    <span class="ticker-item">Entertainment Partner: Four Walls <span class="ticker-dot"></span></span>
  </div>
</div>


<!-- ─── SUSTAINABILITY HOUR ─── -->
<style>
#sustainability-hour{
  background:linear-gradient(160deg,#020f04 0%,#051a09 40%,#031205 100%);
  position:relative;overflow:hidden;
  border-top:4px solid #4ade80;
  border-bottom:2px solid #166534;
}
#sustainability-hour::before{
  content:'';position:absolute;inset:0;
  background-image:radial-gradient(ellipse 80% 50% at 50% -10%,rgba(74,222,128,0.18) 0%,transparent 65%);
  pointer-events:none;
}
.sh-pulse-ring{
  position:absolute;top:-140px;right:-140px;
  width:600px;height:600px;border-radius:50%;
  border:1px solid rgba(74,222,128,0.07);
  animation:shRingPulse 4s ease-in-out infinite;
  pointer-events:none;
}
.sh-pulse-ring:nth-child(2){width:400px;height:400px;top:-60px;right:-60px;animation-delay:1.2s;border-color:rgba(74,222,128,0.11);}
.sh-pulse-ring:nth-child(3){width:220px;height:220px;top:30px;right:30px;animation-delay:2.4s;border-color:rgba(74,222,128,0.15);}
@keyframes shRingPulse{0%,100%{opacity:0.4;transform:scale(1);}50%{opacity:1;transform:scale(1.04);}}

.sh-launch-banner{
  background:linear-gradient(90deg,#166534,#14532d);
  border-bottom:1px solid #15803d;
  padding:14px 48px;
  display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:12px;
}
.sh-launch-tag{
  display:inline-flex;align-items:center;gap:10px;
  font-size:11px;font-weight:800;letter-spacing:0.18em;text-transform:uppercase;color:#4ade80;
}
.sh-launch-dot{
  width:8px;height:8px;border-radius:50%;background:#4ade80;
  animation:pulse 1.5s infinite;
}
.sh-launch-call{
  font-size:13px;font-weight:700;color:#bbf7d0;letter-spacing:0.06em;text-transform:uppercase;
}

.sh-inner{max-width:1280px;margin:0 auto;padding:80px 48px;position:relative;z-index:2;}

.sh-eyebrow{
  display:inline-flex;align-items:center;gap:8px;
  padding:6px 18px;border-radius:20px;
  border:1px solid rgba(74,222,128,0.35);background:rgba(74,222,128,0.09);
  font-size:11px;font-weight:700;letter-spacing:0.14em;text-transform:uppercase;
  color:#4ade80;margin-bottom:28px;
}

.sh-headline{
  font-family:'Bebas Neue',sans-serif;
  font-size:clamp(60px,9vw,120px);
  line-height:0.88;letter-spacing:0.02em;
  color:#f0f4ff;margin-bottom:8px;
}
.sh-headline em{font-style:normal;color:#4ade80;}

.sh-sub-headline{
  font-family:'Bebas Neue',sans-serif;
  font-size:clamp(22px,3.5vw,38px);
  letter-spacing:0.06em;color:#86efac;
  margin-bottom:32px;text-transform:uppercase;
}

.sh-lead{
  font-size:clamp(16px,2vw,20px);color:#a7f3d0;font-weight:300;
  max-width:760px;line-height:1.75;margin-bottom:48px;
}
.sh-lead strong{color:#4ade80;font-weight:700;}

/* Why it's urgent */
.sh-urgency{
  display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:2px;
  margin-bottom:64px;background:rgba(74,222,128,0.04);
  border:1px solid rgba(74,222,128,0.12);border-radius:4px;overflow:hidden;
}
.sh-urg-cell{
  padding:32px 28px;background:rgba(3,18,5,0.7);
  border-right:1px solid rgba(74,222,128,0.08);
  transition:background 0.2s;
}
.sh-urg-cell:last-child{border-right:none;}
.sh-urg-cell:hover{background:rgba(74,222,128,0.06);}
.sh-urg-icon{font-size:28px;margin-bottom:12px;}
.sh-urg-num{
  font-family:'Bebas Neue',sans-serif;font-size:44px;color:#4ade80;line-height:1;margin-bottom:4px;
}
.sh-urg-label{font-size:12px;color:#6ee7b7;letter-spacing:0.04em;font-weight:600;margin-bottom:6px;text-transform:uppercase;}
.sh-urg-desc{font-size:13px;color:#52716b;line-height:1.55;}

/* Two-column layout */
.sh-body{display:grid;grid-template-columns:1.1fr 0.9fr;gap:64px;margin-bottom:72px;align-items:start;}

/* What is it */
.sh-what h3{
  font-family:'DM Serif Display',serif;
  font-size:clamp(24px,3vw,34px);color:#f0f4ff;
  margin-bottom:20px;line-height:1.2;
}
.sh-what p{font-size:15px;color:#86efac;line-height:1.8;margin-bottom:18px;}
.sh-activities{list-style:none;display:flex;flex-direction:column;gap:12px;margin:24px 0 32px;}
.sh-activity{
  display:flex;align-items:flex-start;gap:14px;
  background:rgba(74,222,128,0.05);border:1px solid rgba(74,222,128,0.12);
  padding:14px 18px;border-radius:6px;font-size:14px;color:#a7f3d0;line-height:1.55;
  transition:border-color 0.2s,background 0.2s;
}
.sh-activity:hover{border-color:rgba(74,222,128,0.3);background:rgba(74,222,128,0.09);}
.sh-act-icon{font-size:22px;flex-shrink:0;margin-top:1px;}
.sh-act-text strong{color:#4ade80;display:block;font-size:13px;font-weight:700;letter-spacing:0.04em;text-transform:uppercase;margin-bottom:3px;}

/* Who must join */
.sh-who{position:relative;}
.sh-who h3{
  font-family:'DM Serif Display',serif;
  font-size:clamp(22px,2.5vw,30px);color:#f0f4ff;
  margin-bottom:20px;line-height:1.2;
}
.sh-sectors{display:flex;flex-direction:column;gap:10px;}
.sh-sector{
  display:flex;align-items:center;gap:16px;
  padding:16px 20px;border-radius:6px;
  background:rgba(0,0,0,0.4);border-left:4px solid var(--sc,#4ade80);
  font-size:14px;color:#d1fae5;font-weight:600;
  transition:transform 0.15s;
}
.sh-sector:hover{transform:translateX(6px);}
.sh-sector-icon{font-size:26px;flex-shrink:0;}
.sh-sector-body{display:flex;flex-direction:column;gap:2px;}
.sh-sector-name{font-size:14px;font-weight:700;color:#ecfdf5;letter-spacing:0.03em;}
.sh-sector-note{font-size:12px;color:#52716b;font-weight:400;}

/* Media reach */
.sh-media{
  background:rgba(74,222,128,0.04);border:1px solid rgba(74,222,128,0.15);
  border-radius:8px;padding:40px 40px;margin-bottom:64px;
}
.sh-media h3{
  font-family:'Bebas Neue',sans-serif;font-size:32px;
  letter-spacing:0.06em;color:#4ade80;margin-bottom:8px;
}
.sh-media-sub{font-size:15px;color:#86efac;margin-bottom:32px;font-weight:300;line-height:1.65;}
.sh-channels{display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:12px;}
.sh-channel{
  background:rgba(0,0,0,0.5);border:1px solid rgba(74,222,128,0.12);
  border-radius:6px;padding:20px;text-align:center;
  transition:border-color 0.2s,transform 0.15s;
}
.sh-channel:hover{border-color:rgba(74,222,128,0.4);transform:translateY(-3px);}
.sh-ch-icon{font-size:32px;margin-bottom:10px;}
.sh-ch-name{font-size:13px;font-weight:700;color:#d1fae5;letter-spacing:0.04em;text-transform:uppercase;}
.sh-ch-note{font-size:11px;color:#52716b;margin-top:4px;}

/* Quote / call to arms */
.sh-callout{
  background:linear-gradient(135deg,rgba(22,101,52,0.35),rgba(3,18,5,0.8));
  border:1px solid rgba(74,222,128,0.25);border-left:5px solid #4ade80;
  border-radius:4px;padding:36px 40px;margin-bottom:64px;
  position:relative;
}
.sh-callout::before{
  content:'"';font-family:'DM Serif Display',serif;font-size:120px;line-height:0.8;
  color:rgba(74,222,128,0.1);position:absolute;top:10px;left:16px;
}
.sh-callout-text{
  font-family:'DM Serif Display',serif;
  font-size:clamp(18px,2.5vw,26px);color:#ecfdf5;line-height:1.55;
  position:relative;z-index:1;margin-bottom:18px;
  font-style:italic;
}
.sh-callout-text strong{font-style:normal;color:#4ade80;}
.sh-callout-attr{font-size:13px;color:#52716b;font-weight:600;letter-spacing:0.06em;text-transform:uppercase;}

/* CTA strip */
.sh-ctas{display:flex;gap:16px;flex-wrap:wrap;align-items:center;margin-top:48px;}
.sh-btn-main{
  padding:17px 40px;border-radius:4px;
  background:#4ade80;color:#020f04;
  font-weight:800;font-size:16px;letter-spacing:0.05em;text-transform:uppercase;
  text-decoration:none;transition:all 0.2s;border:none;cursor:pointer;
  box-shadow:0 0 32px rgba(74,222,128,0.35);
}
.sh-btn-main:hover{background:#86efac;transform:translateY(-3px);box-shadow:0 0 48px rgba(74,222,128,0.5);}
.sh-btn-ghost{
  padding:17px 40px;border-radius:4px;
  background:transparent;color:#4ade80;
  font-weight:700;font-size:15px;letter-spacing:0.04em;
  text-decoration:none;transition:all 0.2s;
  border:1.5px solid rgba(74,222,128,0.4);cursor:pointer;
  text-transform:uppercase;
}
.sh-btn-ghost:hover{border-color:#4ade80;background:rgba(74,222,128,0.08);transform:translateY(-2px);}
.sh-pledge-count{
  font-size:13px;color:#52716b;font-weight:600;
  letter-spacing:0.06em;text-transform:uppercase;
  padding-left:12px;
}
.sh-pledge-count span{color:#4ade80;}

/* Global clock */
.sh-clock-strip{
  display:flex;align-items:center;gap:24px;flex-wrap:wrap;
  background:rgba(0,0,0,0.6);border:1px solid rgba(74,222,128,0.15);
  border-radius:6px;padding:20px 28px;margin-bottom:48px;
}
.sh-clock-label{
  font-size:11px;font-weight:700;letter-spacing:0.14em;text-transform:uppercase;
  color:#166534;
}
.sh-clock-time{
  font-family:'JetBrains Mono',monospace;font-size:38px;font-weight:700;
  color:#4ade80;line-height:1;text-shadow:0 0 18px rgba(74,222,128,0.5);
}
.sh-clock-sub{font-size:13px;color:#52716b;font-weight:500;flex:1;line-height:1.55;}
.sh-clock-sub strong{color:#86efac;}

@media(max-width:900px){
  .sh-inner{padding:56px 24px;}
  .sh-body{grid-template-columns:1fr;gap:48px;}
  .sh-launch-banner{padding:12px 24px;}
  .sh-media{padding:28px 24px;}
  .sh-callout{padding:28px 24px;}
}
</style>

<section id="sustainability-hour">
  <div class="sh-pulse-ring"></div>
  <div class="sh-pulse-ring"></div>
  <div class="sh-pulse-ring"></div>

  <!-- Urgency banner -->
  <div class="sh-launch-banner">
    <div class="sh-launch-tag">
      <span class="sh-launch-dot"></span>
      GLOBAL MOVEMENT — LAUNCHING NOW
    </div>
    <div class="sh-launch-call">📢 Share This · Tag Your School · Make It Go Viral · #SustainabilityHour</div>
  </div>

  <div class="sh-inner">

    <div class="sh-eyebrow">
      <span>🌿</span> The Most Important Hour You'll Ever Spend
    </div>

    <h2 class="sh-headline">START<br><em>SUSTAINABILITY</em><br>HOUR</h2>
    <div class="sh-sub-headline">One Hour · Every Day · Every Person · Every Nation</div>

    <p class="sh-lead">
      The planet cannot wait. Scientists, world leaders, and the Doomsday Clock itself are telling us — we are out of time.
      <strong>Sustainability Hour is a global daily practice</strong>: one hour per day dedicated to learning, acting, and building the habits that will keep Earth livable for every generation that follows ours.
      This is not optional. This is the most important thing any human being can do right now.
    </p>

    <!-- Urgency stats -->
    <div class="sh-urgency">
      <div class="sh-urg-cell">
        <div class="sh-urg-icon">⏰</div>
        <div class="sh-urg-num">85s</div>
        <div class="sh-urg-label">To Midnight</div>
        <div class="sh-urg-desc">The Doomsday Clock has never been closer. Each day we delay costs us decades we don't have.</div>
      </div>
      <div class="sh-urg-cell">
        <div class="sh-urg-icon">🌡️</div>
        <div class="sh-urg-num">1.5°C</div>
        <div class="sh-urg-label">Tipping Point</div>
        <div class="sh-urg-desc">We are on track to exceed the critical threshold within this decade without massive behavior change now.</div>
      </div>
      <div class="sh-urg-cell">
        <div class="sh-urg-icon">👥</div>
        <div class="sh-urg-num">8B</div>
        <div class="sh-urg-label">People Needed</div>
        <div class="sh-urg-desc">Every single person on Earth must participate. No community, country, or generation is exempt from this call.</div>
      </div>
      <div class="sh-urg-cell">
        <div class="sh-urg-icon">📅</div>
        <div class="sh-urg-num">2030</div>
        <div class="sh-urg-label">SDG Deadline</div>
        <div class="sh-urg-desc">Four years left to achieve all 17 Global Goals. One hour a day, starting today, is how we get there.</div>
      </div>
      <div class="sh-urg-cell">
        <div class="sh-urg-icon">🌍</div>
        <div class="sh-urg-num">1 hr</div>
        <div class="sh-urg-label">All It Takes</div>
        <div class="sh-urg-desc">That's 4.2% of your day. Less than a lunch break. Enough to change the fate of the entire human species.</div>
      </div>
    </div>

    <!-- Global live clock -->
    <div class="sh-clock-strip">
      <div>
        <div class="sh-clock-label">Global Sustainability Hour — Today's Countdown</div>
        <div class="sh-clock-time" id="shCountdown">00:00:00</div>
      </div>
      <div class="sh-clock-sub">
        Every day at <strong>any dedicated hour of your choosing</strong>, stop what you are doing and practice sustainability — alone, with family, in your classroom, office, or community.
        The world changes when billions of individuals make the same commitment at the same time.
      </div>
    </div>

    <!-- Body: What + Who -->
    <div class="sh-body">
      <div class="sh-what">
        <h3>What Is Sustainability Hour?</h3>
        <p>
          Sustainability Hour is a structured daily practice — a minimum of <strong style="color:#4ade80;">60 minutes every single day</strong> — in which individuals, families, schools, businesses, and governments actively engage in behaviors, education, and projects that move the world toward a sustainable future.
        </p>
        <p>
          It is not symbolic. It is not a once-a-year event. It is a permanent, daily, non-negotiable commitment to the survival of our planet, modeled after the discipline of prayer, exercise, and study that already structure billions of lives.
        </p>
        <ul class="sh-activities">
          <li class="sh-activity"><span class="sh-act-icon">📚</span><span class="sh-act-text"><strong>Learn</strong>Study climate science, SDG progress, ecological systems, and sustainable technology. Knowledge is the first act of survival.</span></li>
          <li class="sh-activity"><span class="sh-act-icon">🌱</span><span class="sh-act-text"><strong>Grow</strong>Plant, compost, reduce waste, repair instead of discard. Every green act multiplied by billions rewrites the future.</span></li>
          <li class="sh-activity"><span class="sh-act-icon">⚡</span><span class="sh-act-text"><strong>Reduce</strong>Audit your energy and water use. Shift one habit today. Every household that reduces 20% is a win for the whole planet.</span></li>
          <li class="sh-activity"><span class="sh-act-icon">📣</span><span class="sh-act-text"><strong>Spread</strong>Teach your family, your neighbors, your school. A movement only becomes viral when every person recruits one more.</span></li>
          <li class="sh-activity"><span class="sh-act-icon">🤝</span><span class="sh-act-text"><strong>Organize</strong>Join or start a local sustainability group. Show up. Vote. Hold institutions accountable. Collective action is the only action that scales.</span></li>
          <li class="sh-activity"><span class="sh-act-icon">💡</span><span class="sh-act-text"><strong>Innovate</strong>Build, invent, code, create solutions. The next breakthrough for humanity will come from a classroom or garage — maybe yours.</span></li>
        </ul>
      </div>
      <div class="sh-who">
        <h3>Who Must Join — Right Now</h3>
        <p style="font-size:14px;color:#6ee7b7;margin-bottom:20px;line-height:1.7;">This is not for one community. This is for every sector of human civilization. No exemptions. No excuses.</p>
        <div class="sh-sectors">
          <div class="sh-sector" style="--sc:#4ade80;"><span class="sh-sector-icon">📺</span><div class="sh-sector-body"><span class="sh-sector-name">Major News & Media Outlets</span><span class="sh-sector-note">CNN, BBC, ABC, NBC, Al Jazeera — air it daily. Make it the story of the century.</span></div></div>
          <div class="sh-sector" style="--sc:#facc15;"><span class="sh-sector-icon">🏫</span><div class="sh-sector-body"><span class="sh-sector-name">All Schools — K through 12</span><span class="sh-sector-note">Elementary, middle, and high schools: dedicate one class period per day to sustainability education and action.</span></div></div>
          <div class="sh-sector" style="--sc:#60a5fa;"><span class="sh-sector-icon">🎓</span><div class="sh-sector-body"><span class="sh-sector-name">Colleges & Universities</span><span class="sh-sector-note">Every campus, every major, every department — integrate sustainability hour into the academic experience.</span></div></div>
          <div class="sh-sector" style="--sc:#f97316;"><span class="sh-sector-icon">🏛️</span><div class="sh-sector-body"><span class="sh-sector-name">Government Institutions</span><span class="sh-sector-note">City halls, agencies, legislatures — model it from the top. Lead by visible, daily practice.</span></div></div>
          <div class="sh-sector" style="--sc:#e879f9;"><span class="sh-sector-icon">🏢</span><div class="sh-sector-body"><span class="sh-sector-name">Corporations & Businesses</span><span class="sh-sector-note">From Fortune 500s to corner shops — restructure one hour of every workday around sustainability goals.</span></div></div>
          <div class="sh-sector" style="--sc:#2dd4bf;"><span class="sh-sector-icon">⛪</span><div class="sh-sector-body"><span class="sh-sector-name">Faith & Community Organizations</span><span class="sh-sector-note">Every mosque, church, temple, and community center — stewardship of the Earth is stewardship of humanity.</span></div></div>
          <div class="sh-sector" style="--sc:#fb7185;"><span class="sh-sector-icon">👨‍👩‍👧‍👦</span><div class="sh-sector-body"><span class="sh-sector-name">Every Family, Every Household</span><span class="sh-sector-note">You are the most powerful unit of change. When families commit, communities transform, and nations follow.</span></div></div>
        </div>
      </div>
    </div>

    <!-- Why it must go viral — media section -->
    <div class="sh-media">
      <h3>THIS MUST GO VIRAL. NOW.</h3>
      <p class="sh-media-sub">
        Sustainability Hour is not a campaign. It is an emergency protocol for the human species. It must spread faster than any news story, faster than any election, faster than any trend. We need every platform, every journalist, every influencer, every teacher, every parent, every student to become a messenger — because the planet's survival depends on how many people we reach in the next 90 days.
      </p>
      <div class="sh-channels">
        <div class="sh-channel"><div class="sh-ch-icon">📡</div><div class="sh-ch-name">Television Networks</div><div class="sh-ch-note">National & international broadcast daily coverage</div></div>
        <div class="sh-channel"><div class="sh-ch-icon">📱</div><div class="sh-ch-name">Social Media</div><div class="sh-ch-note">#SustainabilityHour — every platform, every day</div></div>
        <div class="sh-channel"><div class="sh-ch-icon">📰</div><div class="sh-ch-name">Print & Online Press</div><div class="sh-ch-note">Newspapers, magazines, digital media worldwide</div></div>
        <div class="sh-channel"><div class="sh-ch-icon">🎙️</div><div class="sh-ch-name">Podcasts & Radio</div><div class="sh-ch-name">Podcast & Radio</div><div class="sh-ch-note">Reach communities with no internet access</div></div>
        <div class="sh-channel"><div class="sh-ch-icon">🏫</div><div class="sh-ch-name">School Curricula</div><div class="sh-ch-note">Built into every lesson plan, every grade level</div></div>
        <div class="sh-channel"><div class="sh-ch-icon">🌐</div><div class="sh-ch-name">UN & NGO Networks</div><div class="sh-ch-note">Global governance channels amplifying the call</div></div>
      </div>
    </div>

    <!-- Callout quote -->
    <div class="sh-callout">
      <p class="sh-callout-text">
        "There is no Planet B. There is no second chance. <strong>One hour a day is the smallest possible sacrifice</strong> — and the largest possible gift — we can give to every child who will ever be born on this Earth. We owe them that hour. We owe them a living planet. Start today."
      </p>
      <div class="sh-callout-attr">— Global Citizens Community Center · #SustainabilityHour · Est. 2026</div>
    </div>

    <!-- CTA -->
    <div class="sh-ctas">
      <a href="#community" class="sh-btn-main">🌿 Pledge My Hour Today</a>
      <button class="sh-btn-main" onclick="document.getElementById('sgtSignupModal').style.display='flex'" style="background:#facc15;color:#020f04;box-shadow:0 0 32px rgba(250,204,21,0.35);">🌍 Sign Up — Sustainability Global Tour</button>
      <a href="#campaigns" class="sh-btn-ghost">📢 Spread The Word</a>
      <div class="sh-pledge-count">Join <span id="shPledgeNum">47,391</span> global pledgers — and counting</div>
    </div>

    <!-- ── SUSTAINABILITY GLOBAL TOUR FEATURE BLOCK ── -->
    <div style="margin-top:72px;background:linear-gradient(135deg,rgba(250,204,21,0.08),rgba(74,222,128,0.06));border:1px solid rgba(250,204,21,0.25);border-radius:12px;padding:48px 44px;position:relative;overflow:hidden;">
      <div style="position:absolute;top:-60px;right:-60px;width:300px;height:300px;border-radius:50%;background:radial-gradient(circle,rgba(250,204,21,0.08) 0%,transparent 70%);pointer-events:none;"></div>
      <div style="font-size:11px;font-weight:800;letter-spacing:0.18em;text-transform:uppercase;color:#facc15;margin-bottom:14px;">🏁 NEW · Fundraiser Partnership</div>
      <h3 style="font-family:'Bebas Neue',sans-serif;font-size:clamp(38px,5vw,64px);letter-spacing:0.03em;line-height:0.95;color:#f0f4ff;margin-bottom:10px;">SUSTAINABILITY<br><span style="color:#facc15;">GLOBAL TOUR</span></h3>
      <div style="font-family:'Bebas Neue',sans-serif;font-size:clamp(16px,2.5vw,26px);letter-spacing:0.08em;color:#86efac;margin-bottom:28px;text-transform:uppercase;">7 Continents · 7 Days · 17 Teams · Taking Action on the Global Goals</div>
      <p style="font-size:15px;color:#a7f3d0;line-height:1.8;max-width:760px;margin-bottom:36px;">We're partnering with the <strong style="color:#facc15;">World's Greatest Race</strong> to circle the globe — one continent per day, seven days straight. Seventeen teams compete, each championing one of the 17 UN Sustainable Development Goals. And we're fueling the mission with a <strong style="color:#4ade80;">No-Bake, Vegan, Gluten-Free Bake Sale Fundraiser</strong> in partnership with <strong style="color:#4ade80;">No Kid Hungry</strong> — because feeding the planet starts with feeding our kids.</p>
      <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:16px;margin-bottom:40px;">
        <div style="background:rgba(0,0,0,0.4);border:1px solid rgba(250,204,21,0.2);border-radius:8px;padding:22px 20px;text-align:center;">
          <div style="font-size:32px;margin-bottom:8px;">🌍</div>
          <div style="font-family:'Bebas Neue',sans-serif;font-size:36px;color:#facc15;line-height:1;">7</div>
          <div style="font-size:12px;color:#86efac;font-weight:700;letter-spacing:0.06em;text-transform:uppercase;">Continents</div>
          <div style="font-size:11px;color:#52716b;margin-top:4px;">Africa · Antarctica · Asia · Australia · Europe · N. America · S. America</div>
        </div>
        <div style="background:rgba(0,0,0,0.4);border:1px solid rgba(250,204,21,0.2);border-radius:8px;padding:22px 20px;text-align:center;">
          <div style="font-size:32px;margin-bottom:8px;">📅</div>
          <div style="font-family:'Bebas Neue',sans-serif;font-size:36px;color:#facc15;line-height:1;">7</div>
          <div style="font-size:12px;color:#86efac;font-weight:700;letter-spacing:0.06em;text-transform:uppercase;">Days</div>
          <div style="font-size:11px;color:#52716b;margin-top:4px;">One continent per day — a race against time for the planet</div>
        </div>
        <div style="background:rgba(0,0,0,0.4);border:1px solid rgba(74,222,128,0.2);border-radius:8px;padding:22px 20px;text-align:center;">
          <div style="font-size:32px;margin-bottom:8px;">🏆</div>
          <div style="font-family:'Bebas Neue',sans-serif;font-size:36px;color:#4ade80;line-height:1;">17</div>
          <div style="font-size:12px;color:#86efac;font-weight:700;letter-spacing:0.06em;text-transform:uppercase;">Teams · One Per SDG</div>
          <div style="font-size:11px;color:#52716b;margin-top:4px;">Every team fights for a different Global Goal</div>
        </div>
        <div style="background:rgba(0,0,0,0.4);border:1px solid rgba(74,222,128,0.2);border-radius:8px;padding:22px 20px;text-align:center;">
          <div style="font-size:32px;margin-bottom:8px;">🍪</div>
          <div style="font-family:'Bebas Neue',sans-serif;font-size:36px;color:#4ade80;line-height:1;">0</div>
          <div style="font-size:12px;color:#86efac;font-weight:700;letter-spacing:0.06em;text-transform:uppercase;">Bake Required</div>
          <div style="font-size:11px;color:#52716b;margin-top:4px;">No-Bake · Vegan · Gluten-Free · w/ No Kid Hungry</div>
        </div>
      </div>
      <div style="display:flex;gap:16px;flex-wrap:wrap;align-items:center;">
        <button onclick="document.getElementById('sgtSignupModal').style.display='flex'" style="padding:17px 40px;border-radius:4px;background:#facc15;color:#020f04;font-weight:800;font-size:16px;letter-spacing:0.05em;text-transform:uppercase;border:none;cursor:pointer;box-shadow:0 0 28px rgba(250,204,21,0.4);transition:all 0.2s;" onmouseover="this.style.background='#fde047';this.style.transform='translateY(-3px)'" onmouseout="this.style.background='#facc15';this.style.transform='translateY(0)'">🏁 Sign Up for the Global Tour</button>
        <div style="font-size:13px;color:#52716b;font-weight:600;letter-spacing:0.05em;text-transform:uppercase;">Partnering with the <span style="color:#facc15;">World's Greatest Race</span> &amp; <span style="color:#4ade80;">No Kid Hungry</span></div>
      </div>
    </div>

  </div>
</section>

<!-- ── SUSTAINABILITY GLOBAL TOUR SIGN-UP MODAL ── -->
<div id="sgtSignupModal" style="display:none;position:fixed;inset:0;z-index:9999;align-items:center;justify-content:center;background:rgba(2,15,4,0.92);backdrop-filter:blur(8px);padding:24px;">
  <div style="background:linear-gradient(160deg,#020f04,#051a09);border:1px solid rgba(250,204,21,0.3);border-top:4px solid #facc15;border-radius:12px;max-width:560px;width:100%;padding:48px 44px;position:relative;max-height:90vh;overflow-y:auto;">
    <button onclick="document.getElementById('sgtSignupModal').style.display='none'" style="position:absolute;top:16px;right:20px;background:none;border:none;color:#52716b;font-size:22px;cursor:pointer;line-height:1;">✕</button>
    <div style="font-size:11px;font-weight:800;letter-spacing:0.18em;text-transform:uppercase;color:#facc15;margin-bottom:12px;">🏁 Sign Up Now</div>
    <h3 style="font-family:'Bebas Neue',sans-serif;font-size:36px;letter-spacing:0.04em;color:#f0f4ff;margin-bottom:6px;">SUSTAINABILITY GLOBAL TOUR</h3>
    <p style="font-size:14px;color:#86efac;margin-bottom:32px;line-height:1.65;">7 Continents · 7 Days · 17 Teams · No-Bake Vegan GF Bake Sale · Partnership with No Kid Hungry &amp; the World's Greatest Race</p>
    <div style="display:flex;flex-direction:column;gap:16px;">
      <div>
        <label style="font-size:11px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:#4ade80;display:block;margin-bottom:6px;">Full Name *</label>
        <input id="sgtName" type="text" placeholder="Your full name" style="width:100%;padding:13px 16px;background:rgba(0,0,0,0.5);border:1px solid rgba(74,222,128,0.25);border-radius:6px;color:#f0f4ff;font-size:15px;font-family:'Inter',sans-serif;outline:none;" onfocus="this.style.borderColor='rgba(74,222,128,0.6)'" onblur="this.style.borderColor='rgba(74,222,128,0.25)'">
      </div>
      <div>
        <label style="font-size:11px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:#4ade80;display:block;margin-bottom:6px;">Email Address *</label>
        <input id="sgtEmail" type="email" placeholder="your@email.com" style="width:100%;padding:13px 16px;background:rgba(0,0,0,0.5);border:1px solid rgba(74,222,128,0.25);border-radius:6px;color:#f0f4ff;font-size:15px;font-family:'Inter',sans-serif;outline:none;" onfocus="this.style.borderColor='rgba(74,222,128,0.6)'" onblur="this.style.borderColor='rgba(74,222,128,0.25)'">
      </div>
      <div>
        <label style="font-size:11px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:#4ade80;display:block;margin-bottom:6px;">Organization / School (optional)</label>
        <input id="sgtOrg" type="text" placeholder="Your school, business, or organization" style="width:100%;padding:13px 16px;background:rgba(0,0,0,0.5);border:1px solid rgba(74,222,128,0.25);border-radius:6px;color:#f0f4ff;font-size:15px;font-family:'Inter',sans-serif;outline:none;" onfocus="this.style.borderColor='rgba(74,222,128,0.6)'" onblur="this.style.borderColor='rgba(74,222,128,0.25)'">
      </div>
      <div>
        <label style="font-size:11px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:#4ade80;display:block;margin-bottom:6px;">Choose Your SDG Team *</label>
        <select id="sgtTeam" style="width:100%;padding:13px 16px;background:rgba(0,0,0,0.5);border:1px solid rgba(74,222,128,0.25);border-radius:6px;color:#f0f4ff;font-size:14px;font-family:'Inter',sans-serif;outline:none;" onfocus="this.style.borderColor='rgba(74,222,128,0.6)'" onblur="this.style.borderColor='rgba(74,222,128,0.25)'">
          <option value="" style="background:#020f04;">Select your team (SDG 1–17)…</option>
          <option value="1" style="background:#020f04;">Team 1 — No Poverty</option>
          <option value="2" style="background:#020f04;">Team 2 — Zero Hunger</option>
          <option value="3" style="background:#020f04;">Team 3 — Good Health &amp; Well-Being</option>
          <option value="4" style="background:#020f04;">Team 4 — Quality Education</option>
          <option value="5" style="background:#020f04;">Team 5 — Gender Equality</option>
          <option value="6" style="background:#020f04;">Team 6 — Clean Water &amp; Sanitation</option>
          <option value="7" style="background:#020f04;">Team 7 — Affordable &amp; Clean Energy</option>
          <option value="8" style="background:#020f04;">Team 8 — Decent Work &amp; Economic Growth</option>
          <option value="9" style="background:#020f04;">Team 9 — Industry, Innovation &amp; Infrastructure</option>
          <option value="10" style="background:#020f04;">Team 10 — Reduced Inequalities</option>
          <option value="11" style="background:#020f04;">Team 11 — Sustainable Cities &amp; Communities</option>
          <option value="12" style="background:#020f04;">Team 12 — Responsible Consumption &amp; Production</option>
          <option value="13" style="background:#020f04;">Team 13 — Climate Action</option>
          <option value="14" style="background:#020f04;">Team 14 — Life Below Water</option>
          <option value="15" style="background:#020f04;">Team 15 — Life on Land</option>
          <option value="16" style="background:#020f04;">Team 16 — Peace, Justice &amp; Strong Institutions</option>
          <option value="17" style="background:#020f04;">Team 17 — Partnerships for the Goals</option>
        </select>
      </div>
      <div>
        <label style="font-size:11px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:#4ade80;display:block;margin-bottom:6px;">I want to (select all that apply)</label>
        <div style="display:flex;flex-direction:column;gap:8px;">
          <label style="display:flex;align-items:center;gap:10px;font-size:13px;color:#a7f3d0;cursor:pointer;"><input type="checkbox" value="race" style="accent-color:#4ade80;width:16px;height:16px;"> Participate in the Global Race (7 continents, 7 days)</label>
          <label style="display:flex;align-items:center;gap:10px;font-size:13px;color:#a7f3d0;cursor:pointer;"><input type="checkbox" value="bake" style="accent-color:#4ade80;width:16px;height:16px;"> Host a No-Bake Vegan GF Bake Sale fundraiser</label>
          <label style="display:flex;align-items:center;gap:10px;font-size:13px;color:#a7f3d0;cursor:pointer;"><input type="checkbox" value="volunteer" style="accent-color:#4ade80;width:16px;height:16px;"> Volunteer / help organize locally</label>
          <label style="display:flex;align-items:center;gap:10px;font-size:13px;color:#a7f3d0;cursor:pointer;"><input type="checkbox" value="updates" style="accent-color:#4ade80;width:16px;height:16px;"> Receive updates &amp; launch announcements</label>
        </div>
      </div>
      <button onclick="sgtSubmit()" style="margin-top:8px;padding:16px 32px;border-radius:4px;background:#facc15;color:#020f04;font-weight:800;font-size:15px;letter-spacing:0.06em;text-transform:uppercase;border:none;cursor:pointer;width:100%;transition:background 0.2s;" onmouseover="this.style.background='#fde047'" onmouseout="this.style.background='#facc15'">🏁 Join the Sustainability Global Tour</button>
      <div id="sgtConfirm" style="display:none;text-align:center;padding:20px;background:rgba(74,222,128,0.1);border:1px solid rgba(74,222,128,0.3);border-radius:8px;">
        <div style="font-size:28px;margin-bottom:8px;">🌍✅</div>
        <div style="font-weight:700;color:#4ade80;font-size:16px;margin-bottom:4px;">You're on the team!</div>
        <div style="font-size:13px;color:#86efac;">Check your inbox for details. See you on the tour — 7 continents, 7 days, one planet to save.</div>
      </div>
    </div>
  </div>
</div>
<script>
function sgtSubmit(){
  var name=document.getElementById('sgtName').value.trim();
  var email=document.getElementById('sgtEmail').value.trim();
  var team=document.getElementById('sgtTeam').value;
  if(!name||!email||!team){alert('Please fill in your name, email, and choose a team!');return;}
  if(!email.includes('@')){alert('Please enter a valid email address.');return;}
  document.getElementById('sgtConfirm').style.display='block';
  document.querySelector('#sgtSignupModal button[onclick="sgtSubmit()"]').style.display='none';
}
</script>

<script>
// Sustainability Hour live pledge counter animation
(function(){
  let n = 47391;
  const el = document.getElementById('shPledgeNum');
  if(el){
    setInterval(()=>{
      n += Math.floor(Math.random()*3)+1;
      el.textContent = n.toLocaleString();
    }, 3800);
  }

  // Daily countdown: hours left in the current day
  function updateShCountdown(){
    const now = new Date();
    const endOfDay = new Date(now);
    endOfDay.setHours(23,59,59,999);
    const diff = endOfDay - now;
    const h = Math.floor(diff/3600000);
    const m = Math.floor((diff%3600000)/60000);
    const s = Math.floor((diff%60000)/1000);
    const el = document.getElementById('shCountdown');
    if(el) el.textContent = String(h).padStart(2,'0')+':'+String(m).padStart(2,'0')+':'+String(s).padStart(2,'0');
  }
  updateShCountdown();
  setInterval(updateShCountdown, 1000);
})();
</script>

<!-- ─── PROGRAMS ─── -->
<section id="programs" class="section">
  <div class="section-inner">
    <div class="section-label">What We Do</div>
    <h2 class="section-title">Six Programs.<br>One Mission.</h2>
    <p class="section-sub">Every program is a doorway. We meet people where they are and walk with them toward economic security, civic participation, and community belonging.</p>
  </div>
  <div class="programs-grid" style="max-width:1400px;margin:0 auto;">
    <div class="program-card" style="--card-accent:#00D4B4;">
      <div class="program-icon">🗣️</div>
      <div class="program-title">English as a Second Language</div>
      <div class="program-desc">Beginner through advanced cohorts, five mornings a week. Led by certified instructors who understand the immigrant experience firsthand.</div>
    </div>
    <div class="program-card" style="--card-accent:#FFD166;">
      <div class="program-icon">💼</div>
      <div class="program-title">Job Readiness & Employment</div>
      <div class="program-desc">Resume workshops, mock interviews, employer partnerships, and job placement support — turning skills into sustainable careers.</div>
    </div>
    <div class="program-card" style="--card-accent:#FF6B6B;">
      <div class="program-icon">🌱</div>
      <div class="program-title">Youth After School</div>
      <div class="program-desc">Safe afternoon programming for children of community members — homework help, arts, athletics, and mentorship through middle and high school.</div>
    </div>
    <div class="program-card" style="--card-accent:#AFA9EC;">
      <div class="program-icon">🏛️</div>
      <div class="program-title">Citizenship Preparation</div>
      <div class="program-desc">Civics education, naturalization exam prep, and legal navigation — because belonging should be permanent.</div>
    </div>
    <div class="program-card" style="--card-accent:#5DCAA5;">
      <div class="program-icon">🍽️</div>
      <div class="program-title">Community Dinners & Cultural Events</div>
      <div class="program-desc">Monthly shared tables where forty nations eat, celebrate, and remind each other: community is built one meal at a time.</div>
    </div>
    <div class="program-card" style="--card-accent:#3b82f6;">
      <div class="program-icon">🤝</div>
      <div class="program-title">Workforce Reentry Internship Program</div>
      <div class="program-desc">In partnership with the NYC Mayor's Office, we help individuals receiving government benefits transition back into the workforce through paid internships, job coaching, and employer placement support.</div>
    </div>
  </div>
</section>

<!-- ─── IMPACT NUMBERS ─── -->
<section id="impact">
  <div class="impact-grid">
    <div class="impact-cell">
      <div class="impact-num">2<em>K+</em></div>
      <div class="impact-label">Participants Served Annually</div>
    </div>
    <div class="impact-cell">
      <div class="impact-num">40<em>+</em></div>
      <div class="impact-label">Nations Represented</div>
    </div>
    <div class="impact-cell">
      <div class="impact-num">87<em>%</em></div>
      <div class="impact-label">Job Placement Rate</div>
    </div>
    <div class="impact-cell">
      <div class="impact-num">12<em>+</em></div>
      <div class="impact-label">Years in Community</div>
    </div>
  </div>
</section>

<!-- ─── LIVE STREAM ─── -->
<!-- ─── LIVE STUDIO ─── -->
<section id="live" style="background:linear-gradient(135deg,rgba(0,212,180,0.06) 0%,rgba(10,22,40,0.95) 100%);border-top:1px solid rgba(0,212,180,0.12);border-bottom:1px solid rgba(0,212,180,0.12);padding:80px 24px;">
<style>
  @keyframes livepulse{0%,100%{opacity:1;transform:scale(1);}50%{opacity:0.35;transform:scale(1.4);}}
  .stream-tab{padding:10px 22px;border-radius:4px;border:1px solid rgba(255,255,255,0.12);background:transparent;color:var(--mist);font-size:13px;font-weight:600;cursor:pointer;transition:all 0.2s;letter-spacing:0.03em;font-family:'Inter',sans-serif;}
  .stream-tab.active{background:var(--teal);border-color:var(--teal);color:var(--navy);}
  .stream-tab:hover:not(.active){border-color:var(--teal);color:var(--teal);}
  .stream-tab.red.active{background:#FF6B6B;border-color:#FF6B6B;color:#fff;}
  .stream-panel{display:none;}
  .stream-panel.active{display:block;}
  .watch-elsewhere{margin-top:18px;padding:18px 20px;border-radius:8px;background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.08);}
  .watch-elsewhere-label{font-size:11px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:var(--mist);margin-bottom:12px;}
  .watch-elsewhere-row{display:flex;gap:10px;flex-wrap:wrap;}
  .platform-btn{display:inline-flex;align-items:center;gap:8px;padding:10px 18px;border-radius:6px;font-size:13px;font-weight:600;text-decoration:none;color:#fff;transition:transform 0.15s,filter 0.15s;}
  .platform-btn:hover{transform:translateY(-2px);filter:brightness(1.1);}
  .platform-icon{font-size:13px;line-height:1;}
  .platform-btn.yt{background:#FF0000;}
  .platform-btn.fb{background:#1877F2;}
  .platform-btn.tw{background:#9146FF;}
  .platform-btn.tt{background:#000000;border:1px solid #444;}
  .watch-elsewhere-note{font-size:12px;color:var(--mist);margin-top:12px;line-height:1.5;}
  .sbar{display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:12px;margin-top:18px;}
  .sjoin{padding:12px 28px;border-radius:4px;background:var(--teal);color:var(--navy);font-weight:700;font-size:14px;letter-spacing:0.04em;text-decoration:none;border:none;cursor:pointer;transition:all 0.2s;display:inline-block;font-family:'Inter',sans-serif;}
  .sjoin:hover{background:#00FFDF;transform:translateY(-2px);}
  .sjoin.gold{background:var(--gold);color:var(--navy);}
  .sjoin.gold:hover{background:#ffe08a;}
  .sjoin.red{background:#FF6B6B;color:#fff;}
  .sjoin.red:hover{background:#ff8f8f;}
  .sjoin.ghost{background:transparent;border:1px solid rgba(255,255,255,0.2);color:var(--chalk);}
  .sjoin.ghost:hover{border-color:var(--chalk);}
  .snext{background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.08);border-radius:8px;padding:8px;}
  .snext-row{display:flex;align-items:center;gap:14px;padding:13px 16px;border-radius:6px;transition:background 0.15s;}
  .snext-row:hover{background:rgba(255,255,255,0.04);}
  .sdot{width:8px;height:8px;border-radius:50%;flex-shrink:0;}
  /* Jitsi room */
  #gccc-room-wrap{width:100%;aspect-ratio:16/9;border-radius:8px;overflow:hidden;background:#000;position:relative;}
  #gccc-room-wrap iframe{width:100%;height:100%;border:none;}
  .room-lobby{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:20px;text-align:center;padding:40px;background:radial-gradient(ellipse 80% 80% at 50% 50%,rgba(0,212,180,0.08),transparent),rgba(5,13,26,0.97);}
  .room-lobby.hidden{display:none;}
  .room-pin-wrap{display:flex;gap:10px;align-items:center;flex-wrap:wrap;justify-content:center;}
  .room-pin-input{padding:12px 18px;border-radius:4px;border:1px solid rgba(0,212,180,0.4);background:rgba(0,212,180,0.06);color:var(--chalk);font-size:15px;font-family:'Inter',sans-serif;width:160px;text-align:center;letter-spacing:0.15em;}
  .room-pin-input::placeholder{letter-spacing:0.04em;color:var(--mist);}
  .room-pin-input:focus{outline:none;border-color:var(--teal);}
  .room-error{font-size:12px;color:#FF6B6B;min-height:16px;}
</style>

<div style="max-width:1100px;margin:0 auto;">

  <!-- Header -->
  <div style="display:flex;align-items:flex-start;justify-content:space-between;flex-wrap:wrap;gap:16px;margin-bottom:36px;">
    <div>
      <div class="section-label">Live &amp; Virtual</div>
      <h2 class="section-title" style="margin-bottom:8px;">GCCC Live Network</h2>
      <p style="font-size:15px;color:var(--mist);max-width:540px;line-height:1.65;">Connect live with the global community — join or host sessions directly inside the Global Citizens Community Center. No downloads needed.</p>
    </div>
    <div style="display:flex;align-items:center;gap:8px;padding:10px 18px;border-radius:6px;background:rgba(255,107,107,0.1);border:1px solid rgba(255,107,107,0.25);">
      <span style="width:9px;height:9px;border-radius:50%;background:#FF6B6B;display:inline-block;animation:livepulse 1.2s ease-in-out infinite;"></span>
      <span style="font-size:12px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:#FF6B6B;">Live Now</span>
    </div>
  </div>

  <!-- Tabs -->
  <div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:24px;">
    <button class="stream-tab active red"    onclick="switchLive('room',this)">🔴 GCCC Live Network</button>
    <button class="stream-tab"              onclick="switchLive('schedule',this)">📅 Schedule</button>
  </div>

  <!-- ── PANEL 1: GCCC Native Video Room (Jitsi) ── -->
  <div id="stream-room" class="stream-panel active">
    <div id="gccc-room-wrap">
      <!-- Lobby shown before entering -->
      <div class="room-lobby" id="room-lobby">
        <div style="font-size:44px;">🎙️</div>
        <div style="font-family:'Bebas Neue',sans-serif;font-size:32px;color:var(--chalk);letter-spacing:0.04em;">GCCC Live Network</div>
        <div style="font-size:14px;color:var(--mist);max-width:400px;line-height:1.65;">Our own video space — no Zoom, no YouTube. You host right here. Members join right here. Enter the room PIN to join or start a session.</div>
        <div class="room-pin-wrap">
          <input class="room-pin-input" id="roomPin" type="password" placeholder="Room PIN" maxlength="8"/>
          <button class="sjoin red" onclick="enterRoom()">Enter Room →</button>
        </div>
        <div class="room-error" id="roomError"></div>
        <div style="font-size:12px;color:var(--mist);margin-top:4px;">Members: use your membership PIN &nbsp;·&nbsp; Host: use your admin PIN</div>
      </div>
      <!-- Jitsi loads here after PIN -->
      <div id="room-frame-wrap" style="display:none;width:100%;height:100%;"></div>
    </div>
    <div class="sbar">
      <div style="font-size:13px;color:var(--mist);">Powered by open-source video · No downloads · Works in any browser</div>
      <div style="display:flex;gap:10px;flex-wrap:wrap;">
        <a class="sjoin ghost" href="#membership">Get Member PIN</a>
        <a class="sjoin gold" href="fundraiser.html">Start Your Fundraiser</a>
      </div>
    </div>

    <!-- ── Also Watch / Go Live On ── -->
    <div class="watch-elsewhere">
      <div class="watch-elsewhere-label">Also Watch &amp; Go Live On</div>
      <div class="watch-elsewhere-row">
        <a class="platform-btn yt" href="https://www.youtube.com/@GCCC/live" target="_blank" rel="noopener">
          <span class="platform-icon">▶</span> YouTube
        </a>
        <a class="platform-btn fb" href="https://www.facebook.com/GCCC/live" target="_blank" rel="noopener">
          <span class="platform-icon">f</span> Facebook Live
        </a>
        <a class="platform-btn tw" href="https://www.twitch.tv/gccc" target="_blank" rel="noopener">
          <span class="platform-icon">◇</span> Twitch
        </a>
        <a class="platform-btn tt" href="https://www.tiktok.com/@gccc/live" target="_blank" rel="noopener">
          <span class="platform-icon">♪</span> TikTok
        </a>
      </div>
      <div class="watch-elsewhere-note">Hosting? Open your platform's app and tap "Go Live" — link your account once and it'll remember you.</div>
    </div>
  </div>

  <!-- ── PANEL 3: Schedule ── -->
  <div id="stream-schedule" class="stream-panel">
    <div class="snext">
      <div style="font-size:11px;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;color:var(--teal);padding:12px 16px 8px;">Upcoming Live Sessions</div>
      <div class="snext-row">
        <span class="sdot" style="background:#FF6B6B;"></span>
        <div style="flex:1;">
          <div style="font-weight:600;font-size:14px;color:var(--chalk);">Community Town Hall</div>
          <div style="font-size:12px;color:var(--mist);margin-top:2px;">Open to all · GCCC Live Network</div>
        </div>
        <span style="font-size:12px;color:var(--mist);white-space:nowrap;">Mondays · 6 PM ET</span>
      </div>
      <div class="snext-row">
        <span class="sdot" style="background:var(--teal);"></span>
        <div style="flex:1;">
          <div style="font-weight:600;font-size:14px;color:var(--chalk);">ESL &amp; Job Readiness Workshop</div>
          <div style="font-size:12px;color:var(--mist);margin-top:2px;">GCCC Room · Members only</div>
        </div>
        <span style="font-size:12px;color:var(--mist);white-space:nowrap;">Wednesdays · 10 AM ET</span>
      </div>
      <div class="snext-row">
        <span class="sdot" style="background:var(--gold);"></span>
        <div style="flex:1;">
          <div style="font-weight:600;font-size:14px;color:var(--chalk);">No Kid Hungry Bake Sale Kickoff</div>
          <div style="font-size:12px;color:var(--mist);margin-top:2px;">Fundraiser launch · GCCC Live Network</div>
        </div>
        <span style="font-size:12px;color:var(--mist);white-space:nowrap;">Coming Soon</span>
      </div>
      <div class="snext-row">
        <span class="sdot" style="background:#AFA9EC;"></span>
        <div style="flex:1;">
          <div style="font-weight:600;font-size:14px;color:var(--chalk);">Global Citizens Summit — Live Broadcast</div>
          <div style="font-size:12px;color:var(--mist);margin-top:2px;">All 193 nations invited · Full broadcast</div>
        </div>
        <span style="font-size:12px;color:var(--mist);white-space:nowrap;">Announced Soon</span>
      </div>
      <div class="snext-row">
        <span class="sdot" style="background:#1ad2dc;"></span>
        <div style="flex:1;">
          <div style="font-weight:600;font-size:14px;color:var(--chalk);">GlowBag Distribution Day</div>
          <div style="font-size:12px;color:var(--mist);margin-top:2px;">Community celebration · GCCC Live Network</div>
        </div>
        <span style="font-size:12px;color:var(--mist);white-space:nowrap;">Monthly</span>
      </div>
    </div>
    <div class="sbar" style="margin-top:16px;">
      <div style="font-size:13px;color:var(--mist);">All events free to attend. Members get recording access.</div>
      <div style="display:flex;gap:10px;flex-wrap:wrap;">
        <a class="sjoin" href="#membership">Join Free</a>
        <a class="sjoin gold" href="fundraiser.html">Start Your Fundraiser</a>
      </div>
    </div>
  </div>

</div>
</section>

<script>
// ── Live studio tab switcher ──
function switchLive(tab, btn) {
  document.querySelectorAll('.stream-panel').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.stream-tab').forEach(t => t.classList.remove('active'));
  document.getElementById('stream-' + tab).classList.add('active');
  btn.classList.add('active');
}

// ── GCCC Native Room (Jitsi) ──
// Set your own PINs here — member PIN and host/admin PIN
const MEMBER_PIN  = '1234';   // ← change to your member PIN
const HOST_PIN    = '0000';   // ← change to your host/admin PIN
const ROOM_NAME   = 'GCCCLiveRoom2026';

function enterRoom() {
  const pin = document.getElementById('roomPin').value.trim();
  const err = document.getElementById('roomError');
  if (pin !== MEMBER_PIN && pin !== HOST_PIN) {
    err.textContent = 'Incorrect PIN. Members: check your dashboard. Host: use your admin PIN.';
    return;
  }
  err.textContent = '';
  document.getElementById('room-lobby').classList.add('hidden');
  const wrap = document.getElementById('room-frame-wrap');
  wrap.style.display = 'block';
  // Load Jitsi Meet API
  const script = document.createElement('script');
  script.src = 'https://meet.jit.si/external_api.js';
  script.onload = function() {
    const domain = 'meet.jit.si';
    const isHost = pin === HOST_PIN;
    const options = {
      roomName: ROOM_NAME,
      parentNode: wrap,
      width: '100%',
      height: '100%',
      configOverwrite: {
        startWithAudioMuted: !isHost,
        startWithVideoMuted: !isHost,
        toolbarButtons: ['microphone','camera','chat','raisehand','tileview','hangup'],
        prejoinPageEnabled: false,
        disableDeepLinking: true,
      },
      interfaceConfigOverwrite: {
        SHOW_JITSI_WATERMARK: false,
        SHOW_BRAND_WATERMARK: false,
        DEFAULT_BACKGROUND: '#050D1A',
        TOOLBAR_ALWAYS_VISIBLE: true,
        APP_NAME: 'GCCC Live Network',
      },
      userInfo: { displayName: isHost ? 'GCCC Host' : 'GCCC Member' }
    };
    new JitsiMeetExternalAPI(domain, options);
  };
  document.head.appendChild(script);
}

// Allow Enter key in PIN field
document.getElementById('roomPin').addEventListener('keydown', function(e){
  if (e.key === 'Enter') enterRoom();
});
</script>

<!-- ─── SDG GOALS ─── -->
<section id="goals" class="section">
  <div class="section-inner">
    <div class="section-label">United Nations · Agenda 2030</div>
    <h2 class="section-title">The 17 Sustainable<br>Development Goals</h2>
    <div class="divider"></div>
    <p class="section-sub">Adopted by all UN Member States in 2015, the SDGs are a universal call to action to end poverty, protect the planet, and ensure prosperity for all by 2030.</p>
    <div class="sdg-grid">
      <a class="sdg-item sdg-1" href="https://sdgs.un.org/goals/goal1" target="_blank"><span class="sdg-num">1</span>No Poverty</a>
      <a class="sdg-item sdg-2" href="https://sdgs.un.org/goals/goal2" target="_blank"><span class="sdg-num">2</span>Zero Hunger</a>
      <a class="sdg-item sdg-3" href="https://sdgs.un.org/goals/goal3" target="_blank"><span class="sdg-num">3</span>Good Health</a>
      <a class="sdg-item sdg-4" href="https://sdgs.un.org/goals/goal4" target="_blank"><span class="sdg-num">4</span>Quality Education</a>
      <a class="sdg-item sdg-5" href="https://sdgs.un.org/goals/goal5" target="_blank"><span class="sdg-num">5</span>Gender Equality</a>
      <a class="sdg-item sdg-6" href="https://sdgs.un.org/goals/goal6" target="_blank"><span class="sdg-num">6</span>Clean Water</a>
      <a class="sdg-item sdg-7" href="https://sdgs.un.org/goals/goal7" target="_blank"><span class="sdg-num">7</span>Clean Energy</a>
      <a class="sdg-item sdg-8" href="https://sdgs.un.org/goals/goal8" target="_blank"><span class="sdg-num">8</span>Decent Work</a>
      <a class="sdg-item sdg-9" href="https://sdgs.un.org/goals/goal9" target="_blank"><span class="sdg-num">9</span>Industry & Innovation</a>
      <a class="sdg-item sdg-10" href="https://sdgs.un.org/goals/goal10" target="_blank"><span class="sdg-num">10</span>Reduced Inequality</a>
      <a class="sdg-item sdg-11" href="https://sdgs.un.org/goals/goal11" target="_blank"><span class="sdg-num">11</span>Sustainable Cities</a>
      <a class="sdg-item sdg-12" href="https://sdgs.un.org/goals/goal12" target="_blank"><span class="sdg-num">12</span>Responsible Consumption</a>
      <a class="sdg-item sdg-13" href="https://sdgs.un.org/goals/goal13" target="_blank"><span class="sdg-num">13</span>Climate Action</a>
      <a class="sdg-item sdg-14" href="https://sdgs.un.org/goals/goal14" target="_blank"><span class="sdg-num">14</span>Life Below Water</a>
      <a class="sdg-item sdg-15" href="https://sdgs.un.org/goals/goal15" target="_blank"><span class="sdg-num">15</span>Life on Land</a>
      <a class="sdg-item sdg-16" href="https://sdgs.un.org/goals/goal16" target="_blank"><span class="sdg-num">16</span>Peace & Justice</a>
      <a class="sdg-item sdg-17" href="https://sdgs.un.org/goals/goal17" target="_blank"><span class="sdg-num">17</span>Partnerships</a>
    </div>
    <p style="margin-top:16px;font-size:12px;color:var(--mist);">Source: <a href="https://globalgoals.org" target="_blank" style="color:var(--teal)">globalgoals.org</a> · <a href="https://un.org/sustainabledevelopment" target="_blank" style="color:var(--teal)">un.org/sustainabledevelopment</a></p>
  </div>
</section>

<!-- ─── WORLD DATA ─── -->
<section id="data" class="section">
  <div class="section-inner">
    <div class="section-label">Our World in Data · Key Metrics</div>
    <h2 class="section-title">The State of Our World</h2>
    <div class="divider"></div>
    <p class="section-sub">Data-driven snapshots of progress — and the work still ahead. Updated from global research institutions and the Our World in Data project.</p>
    <div class="data-grid">
      <div class="data-card blue">
        <div class="data-num">9.2<span class="data-unit">%</span></div>
        <div class="data-label">Extreme Poverty Rate</div>
        <div class="data-desc">Share of world living below $2.15/day (2024 est.)</div>
        <div class="data-source">World Bank · Our World in Data</div>
      </div>
      <div class="data-card crimson">
        <div class="data-num">733<span class="data-unit">M</span></div>
        <div class="data-label">People Facing Hunger</div>
        <div class="data-desc">Chronically food insecure people globally (2023)</div>
        <div class="data-source">FAO / WFP · UN</div>
      </div>
      <div class="data-card teal">
        <div class="data-num">1.4<span class="data-unit">°C</span></div>
        <div class="data-label">Global Warming Above Pre-Industrial</div>
        <div class="data-desc">Average temperature increase since 1850–1900 baseline</div>
        <div class="data-source">WMO · Copernicus Climate Service</div>
      </div>
      <div class="data-card sage">
        <div class="data-num">91<span class="data-unit">%</span></div>
        <div class="data-label">Global Literacy Rate</div>
        <div class="data-desc">Adults aged 15+ who can read and write (2024)</div>
        <div class="data-source">UNESCO Institute for Statistics</div>
      </div>
      <div class="data-card gold">
        <div class="data-num">2.4<span class="data-unit">B</span></div>
        <div class="data-label">Without Safe Drinking Water</div>
        <div class="data-desc">People lacking safely managed water services (2022)</div>
        <div class="data-source">WHO / UNICEF JMP</div>
      </div>
      <div class="data-card sky">
        <div class="data-num">30<span class="data-unit">%</span></div>
        <div class="data-label">Clean Energy Share</div>
        <div class="data-desc">Renewables share of global electricity generation (2024)</div>
        <div class="data-source">IEA · IRENA</div>
      </div>
    </div>
  </div>
</section>

<!-- ─── ECONOMIC DATA ─── -->
<section id="econ" class="section">
  <div class="section-inner">
    <div class="section-label">World Bank · Regional Development</div>
    <h2 class="section-title">Economic Development by Region</h2>
    <div class="divider"></div>
    <p class="section-sub">Tracking progress on income growth, poverty reduction, and human development across the world's major regions.</p>
    <div class="econ-grid">
      <div class="econ-card">
        <div class="econ-region">Sub-Saharan Africa</div>
        <div class="econ-metric">$2,380</div>
        <div class="econ-desc">GNI per capita (Atlas method, 2023)</div>
        <div class="econ-bar-track"><div class="econ-bar-fill" style="width:12%;background:#ef4444;"></div></div>
        <div class="econ-bar-label"><span>vs. global avg $13,800</span><span>12%</span></div>
      </div>
      <div class="econ-card">
        <div class="econ-region">South Asia</div>
        <div class="econ-metric">$2,710</div>
        <div class="econ-desc">GNI per capita · 2.0B people</div>
        <div class="econ-bar-track"><div class="econ-bar-fill" style="width:20%;background:#f97316;"></div></div>
        <div class="econ-bar-label"><span>vs. global avg</span><span>20%</span></div>
      </div>
      <div class="econ-card">
        <div class="econ-region">Latin America & Caribbean</div>
        <div class="econ-metric">$9,460</div>
        <div class="econ-desc">GNI per capita · upper-middle income</div>
        <div class="econ-bar-track"><div class="econ-bar-fill" style="width:69%;background:#eab308;"></div></div>
        <div class="econ-bar-label"><span>vs. global avg</span><span>69%</span></div>
      </div>
      <div class="econ-card">
        <div class="econ-region">East Asia & Pacific</div>
        <div class="econ-metric">$12,850</div>
        <div class="econ-desc">GNI per capita · fastest growing region</div>
        <div class="econ-bar-track"><div class="econ-bar-fill" style="width:93%;background:#22c55e;"></div></div>
        <div class="econ-bar-label"><span>vs. global avg</span><span>93%</span></div>
      </div>
      <div class="econ-card">
        <div class="econ-region">Middle East & N. Africa</div>
        <div class="econ-metric">$8,200</div>
        <div class="econ-desc">GNI per capita · varies widely by state</div>
        <div class="econ-bar-track"><div class="econ-bar-fill" style="width:59%;background:#60a5fa;"></div></div>
        <div class="econ-bar-label"><span>vs. global avg</span><span>59%</span></div>
      </div>
      <div class="econ-card">
        <div class="econ-region">Europe & Central Asia</div>
        <div class="econ-metric">$29,740</div>
        <div class="econ-desc">GNI per capita · high income avg</div>
        <div class="econ-bar-track"><div class="econ-bar-fill" style="width:100%;background:#818cf8;"></div></div>
        <div class="econ-bar-label"><span>vs. global avg</span><span>215%</span></div>
      </div>
    </div>
    <p style="margin-top:20px;font-size:12px;color:#475569;">Source: <a href="https://worldbank.org" target="_blank" style="color:#60a5fa">World Bank Open Data</a> · data.worldbank.org</p>
  </div>
</section>

<!-- ─── CRITICAL THREATS ─── -->
<section id="threats" class="section">
  <div class="section-inner">
    <div class="section-label">Bulletin of Atomic Scientists · Global Risk Monitor</div>
    <h2 class="section-title">Existential & Critical Threats</h2>
    <div class="divider"></div>
    <p class="section-sub">The Bulletin of Atomic Scientists has tracked civilizational threats since 1945. These are the priority risk categories shaping the Doomsday Clock assessment.</p>
    <div class="threats-grid">
      <div class="threat-card t1">
        <div class="threat-icon">☢️</div>
        <div class="threat-level">Critical Risk</div>
        <div class="threat-title">Nuclear Weapons</div>
        <div class="threat-desc">Over 12,000 nuclear warheads globally. Arms control agreements eroding. Russia-NATO tensions at Cold War highs. Modernization programs accelerating across all major powers.</div>
        <div class="threat-mag">01</div>
      </div>
      <div class="threat-card t1">
        <div class="threat-icon">🌡️</div>
        <div class="threat-level">Critical Risk</div>
        <div class="threat-title">Climate Disruption</div>
        <div class="threat-desc">Global temperature tracking toward 2.5–3°C above pre-industrial levels by 2100 without dramatic intervention. 2024 was the hottest year ever recorded, breaching 1.5°C threshold.</div>
        <div class="threat-mag">02</div>
      </div>
      <div class="threat-card t2">
        <div class="threat-icon">🦠</div>
        <div class="threat-level">High Risk</div>
        <div class="threat-title">Biological Threats</div>
        <div class="threat-desc">Advances in synthetic biology and gain-of-function research increase pandemic potential. Biosurveillance gaps remain significant. WHO pandemic treaty negotiations ongoing.</div>
        <div class="threat-mag">03</div>
      </div>
      <div class="threat-card t2">
        <div class="threat-icon">🤖</div>
        <div class="threat-level">High Risk</div>
        <div class="threat-title">Disruptive Technologies</div>
        <div class="threat-desc">AI systems advancing faster than governance frameworks. Autonomous weapons without human control, cyber-enabled disinformation at scale, and unaligned AI systems pose new civilizational risks.</div>
        <div class="threat-mag">04</div>
      </div>
      <div class="threat-card t3">
        <div class="threat-icon">🛡️</div>
        <div class="threat-level">Elevated Risk</div>
        <div class="threat-title">Erosion of Institutions</div>
        <div class="threat-desc">Weakening of multilateral institutions, withdrawal from international agreements, and rising authoritarianism undermine the cooperative frameworks needed to address global threats.</div>
        <div class="threat-mag">05</div>
      </div>
      <div class="threat-card t4">
        <div class="threat-icon">📡</div>
        <div class="threat-level">Monitored</div>
        <div class="threat-title">Information Ecosystem</div>
        <div class="threat-desc">Coordinated disinformation, AI-generated content, and algorithmic amplification of extremism undermine democratic decision-making and public trust in science and institutions.</div>
        <div class="threat-mag">06</div>
      </div>
    </div>
    <p style="margin-top:20px;font-size:12px;color:#475569">Source: <a href="https://thebulletin.org" target="_blank" style="color:#f87171">Bulletin of Atomic Scientists</a> · thebulletin.org · Founded 1945 by Manhattan Project scientists</p>
  </div>
</section>

<!-- ─── GLOBAL CITIZEN CAMPAIGNS ─── -->
<section id="campaigns" class="section">
  <div class="section-inner">
    <div class="section-label">Global Citizen · Active Campaigns</div>
    <h2 class="section-title">Take Action on Issues That Matter</h2>
    <div class="divider"></div>
    <p class="section-sub">Join campaigns, sign petitions, and earn rewards for civic engagement on the world's most pressing issues. Inspired by globalcitizen.org's action model.</p>
    <div class="campaigns-grid">
      <div class="campaign-card">
        <div class="campaign-img" style="background:#e0f2fe;">🌊</div>
        <div class="campaign-body">
          <div class="campaign-category">Climate Action · SDG 13</div>
          <div class="campaign-title">Fund Loss & Damage for Climate-Vulnerable Nations</div>
          <div class="campaign-desc">Demand world leaders fully capitalize the Loss and Damage Fund established at COP28, to help nations suffering climate-related disasters they didn't cause.</div>
          <div class="campaign-progress">
            <div class="progress-bar"><div class="progress-fill" style="width:73%"></div></div>
            <div class="progress-label"><span>1,460,000 actions taken</span><span>73% of goal</span></div>
          </div>
          <div class="campaign-footer">
            <a href="https://globalcitizen.org" target="_blank" class="sign-btn">Take Action</a>
            <span class="campaign-sigs">2M goal</span>
          </div>
        </div>
      </div>
      <div class="campaign-card">
        <div class="campaign-img" style="background:#fef3c7;">🍽️</div>
        <div class="campaign-body">
          <div class="campaign-category">Zero Hunger · SDG 2</div>
          <div class="campaign-title">End Famine: Urge G20 Leaders to Act Now</div>
          <div class="campaign-desc">With 260 million people facing acute food insecurity, call on G20 governments to restore funding to the World Food Programme and UNICEF nutrition programs.</div>
          <div class="campaign-progress">
            <div class="progress-bar"><div class="progress-fill" style="width:58%;background:#f59e0b;"></div></div>
            <div class="progress-label"><span>870,000 actions taken</span><span>58% of goal</span></div>
          </div>
          <div class="campaign-footer">
            <a href="https://globalcitizen.org" target="_blank" class="sign-btn" style="background:#d97706">Take Action</a>
            <span class="campaign-sigs">1.5M goal</span>
          </div>
        </div>
      </div>
      <div class="campaign-card">
        <div class="campaign-img" style="background:#dcfce7;">📚</div>
        <div class="campaign-body">
          <div class="campaign-category">Education · SDG 4</div>
          <div class="campaign-title">Get 300 Million Out-of-School Children Learning</div>
          <div class="campaign-desc">Demand donor governments meet their International Finance Facility for Education pledges. Quality education is the single greatest tool against poverty and inequality.</div>
          <div class="campaign-progress">
            <div class="progress-bar"><div class="progress-fill" style="width:44%;background:#16a34a;"></div></div>
            <div class="progress-label"><span>660,000 actions taken</span><span>44% of goal</span></div>
          </div>
          <div class="campaign-footer">
            <a href="https://globalcitizen.org" target="_blank" class="sign-btn" style="background:#16a34a">Take Action</a>
            <span class="campaign-sigs">1.5M goal</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ─── CIVIC ACTION ─── -->
<section id="action" class="section">
  <div class="section-inner">
    <div class="section-label">Civic Action Network · Community Organizing</div>
    <h2 class="section-title">Organize. Mobilize. Demand Change.</h2>
    <div class="divider"></div>
    <p class="section-sub">Inspired by community organizing models pioneered by organizations like the National Action Network — real change requires real people in the streets, the courts, and the halls of power.</p>
    <div class="action-grid">
      <div class="action-card">
        <div class="action-header">
          <div class="action-icon" style="background:#dbeafe">✊</div>
          <div>
            <div class="action-title">Community Organizing</div>
            <div class="action-desc">Build local coalitions and chapter networks. Connect with organizers in your city working on housing, policing, education, and economic justice issues.</div>
          </div>
        </div>
        <div class="action-footer">
          <span class="action-tag tag-blue">Grassroots</span>
          <a href="#" class="action-link">Find your chapter →</a>
        </div>
      </div>
      <div class="action-card">
        <div class="action-header">
          <div class="action-icon" style="background:#dcfce7">🗳️</div>
          <div>
            <div class="action-title">Voter Registration & Turnout</div>
            <div class="action-desc">Register voters, host elections information drives, and turn out communities. Democracy only works when everyone participates — especially those historically excluded.</div>
          </div>
        </div>
        <div class="action-footer">
          <span class="action-tag tag-green">Democracy</span>
          <a href="#" class="action-link">Register now →</a>
        </div>
      </div>
      <div class="action-card">
        <div class="action-header">
          <div class="action-icon" style="background:#fee2e2">⚖️</div>
          <div>
            <div class="action-title">Criminal Justice Reform</div>
            <div class="action-desc">Advocate for police accountability, end mass incarceration, and restore voting rights for returning citizens. Policy change starts with organized people, not organized money.</div>
          </div>
        </div>
        <div class="action-footer">
          <span class="action-tag tag-red">Justice</span>
          <a href="#" class="action-link">Get involved →</a>
        </div>
      </div>
      <div class="action-card">
        <div class="action-header">
          <div class="action-icon" style="background:#fef3c7">📣</div>
          <div>
            <div class="action-title">Rallies & Direct Action</div>
            <div class="action-desc">Nonviolent protest remains one of the most powerful tools for social change. Find upcoming marches, rallies, and demonstrations in your area.</div>
          </div>
        </div>
        <div class="action-footer">
          <span class="action-tag tag-orange">Protest</span>
          <a href="#" class="action-link">See events →</a>
        </div>
      </div>
      <div class="action-card">
        <div class="action-header">
          <div class="action-icon" style="background:#ede9fe">💰</div>
          <div>
            <div class="action-title">Economic Empowerment</div>
            <div class="action-desc">Support cooperative ownership, Black-owned businesses, and wealth-building programs in underinvested communities. Economic justice and civil rights are inseparable.</div>
          </div>
        </div>
        <div class="action-footer">
          <span class="action-tag tag-purple">Economics</span>
          <a href="#" class="action-link">Learn more →</a>
        </div>
      </div>
      <div class="action-card">
        <div class="action-header">
          <div class="action-icon" style="background:#d1fae5">📰</div>
          <div>
            <div class="action-title">Know Your Rights</div>
            <div class="action-desc">Legal education workshops, know-your-rights trainings, and connections to legal aid. An informed citizen is a protected citizen. Access resources in 40+ languages.</div>
          </div>
        </div>
        <div class="action-footer">
          <span class="action-tag tag-green">Education</span>
          <a href="#" class="action-link">Get resources →</a>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ─── UN BODIES ─── -->
<section id="un" class="section">
  <div class="section-inner">
    <div class="section-label">United Nations System</div>
    <h2 class="section-title">Key UN Bodies & Programs</h2>
    <div class="divider"></div>
    <p class="section-sub">The United Nations and its affiliated programs form the backbone of international cooperation on peace, development, and human rights.</p>
    <div class="un-bodies">
      <div class="un-body">
        <div class="un-acronym">UN GA</div>
        <div class="un-name">General Assembly</div>
        <div class="un-desc">Main deliberative body — 193 Member States, one vote each. Approves the UN budget and sets global agendas.</div>
      </div>
      <div class="un-body">
        <div class="un-acronym">UNSC</div>
        <div class="un-name">Security Council</div>
        <div class="un-desc">Primary responsibility for international peace and security. 5 permanent members with veto power, 10 rotating elected members.</div>
      </div>
      <div class="un-body">
        <div class="un-acronym">UNDP</div>
        <div class="un-name">Development Programme</div>
        <div class="un-desc">Works in 170 countries to eradicate poverty and reduce inequalities through sustainable development.</div>
      </div>
      <div class="un-body">
        <div class="un-acronym">UNICEF</div>
        <div class="un-name">Children's Fund</div>
        <div class="un-desc">Provides humanitarian and development aid to children in 190+ countries. Nutrition, vaccines, education, and protection.</div>
      </div>
      <div class="un-body">
        <div class="un-acronym">WHO</div>
        <div class="un-name">World Health Org.</div>
        <div class="un-desc">Directs international health within the UN system. Leads responses to pandemics, disease outbreaks, and health emergencies.</div>
      </div>
      <div class="un-body">
        <div class="un-acronym">UNHCR</div>
        <div class="un-name">Refugee Agency</div>
        <div class="un-desc">Protects and supports over 100 million forcibly displaced people worldwide — the largest displacement crisis in recorded history.</div>
      </div>
      <div class="un-body">
        <div class="un-acronym">UNEP</div>
        <div class="un-name">Environment Programme</div>
        <div class="un-desc">The leading global environmental authority. Coordinates the IPCC and tracks planetary boundaries and ecosystem health.</div>
      </div>
      <div class="un-body">
        <div class="un-acronym">WFP</div>
        <div class="un-name">World Food Programme</div>
        <div class="un-desc">Nobel Peace Prize 2020. Delivers food assistance to 160 million people annually in crisis-affected regions.</div>
      </div>
      <div class="un-body">
        <div class="un-acronym">UNESCO</div>
        <div class="un-name">Education, Science & Culture</div>
        <div class="un-desc">Protects World Heritage Sites, promotes press freedom, and advances education, science, and cultural diversity globally.</div>
      </div>
      <div class="un-body">
        <div class="un-acronym">OHCHR</div>
        <div class="un-name">Human Rights Office</div>
        <div class="un-desc">Promotes and protects human rights guaranteed under international law. Supports special rapporteurs and the Human Rights Council.</div>
      </div>
    </div>
    <p style="margin-top:20px;font-size:12px;color:#475569">Source: <a href="https://un.org" target="_blank" style="color:#60a5fa">un.org</a></p>
  </div>
</section>

<!-- ─── SUMMIT ─── -->
<section id="summit">
  <div class="summit-inner">
    <div>
      <div class="summit-tag">Global Summit 2025</div>
      <h2 class="summit-h2">Where <em>Local</em><br>Meets Global</h2>
      <p class="summit-body">The annual Global Citizens Summit convenes community centers, NGOs, civic leaders, and grassroots organizers from across the world — to share what's working, what isn't, and what comes next.</p>
      <a class="btn-primary" href="https://globalcitizencommunitycenter.univer.se/" target="_blank" rel="noopener" style="display:inline-block;">Register Interest ↗</a>
    </div>
    <div class="summit-cards">
      <div class="summit-card">
        <div class="summit-card-icon">🌐</div>
        <div>
          <div class="summit-card-title">40+ Countries Represented</div>
          <div class="summit-card-desc">Delegates, advocates, and organizers from every continent join the conversation.</div>
        </div>
      </div>
      <div class="summit-card">
        <div class="summit-card-icon">🎤</div>
        <div>
          <div class="summit-card-title">Keynotes & Workshops</div>
          <div class="summit-card-desc">Three days of talks, skills-building sessions, and policy roundtables.</div>
        </div>
      </div>
      <div class="summit-card">
        <div class="summit-card-icon">🤝</div>
        <div>
          <div class="summit-card-title">Partnership Matchmaking</div>
          <div class="summit-card-desc">Connect your organization with funders, peer networks, and implementation partners.</div>
        </div>
      </div>
      <div class="summit-card">
        <div class="summit-card-icon">📋</div>
        <div>
          <div class="summit-card-title">SDG Progress Reports</div>
          <div class="summit-card-desc">Community-level data shared transparently toward 2030 accountability.</div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ─── COMMUNITY / EVENTS ─── -->
<section id="community" class="section">
  <div class="section-inner">
    <div class="comm-grid">
      <div class="comm-text">
        <div class="section-label">Global Citizens Community Center</div>
        <h2 class="section-title" style="font-family:'Playfair Display',serif;font-size:clamp(28px,4vw,42px);font-weight:700;color:var(--text);letter-spacing:-0.01em;">Connect, Learn, Lead</h2>
        <div class="divider"></div>
        <p class="section-sub" style="margin-bottom:32px;color:var(--text-muted);">Your local hub for global action. Whether you're a student, activist, researcher, or concerned citizen — there's a place for you here.</p>
        <ul class="comm-list">
          <li>
            <div class="comm-icon">🎓</div>
            <div><strong style="display:block;margin-bottom:3px;color:var(--text);">Education & Workshops</strong>Policy briefings, research literacy courses, and global issues seminars open to all community members. Free of charge.</div>
          </li>
          <li>
            <div class="comm-icon red">🤝</div>
            <div><strong style="display:block;margin-bottom:3px;color:var(--text);">Coalition Building</strong>Connect across race, class, and geography. We believe intersectionality is not a buzzword — it's the architecture of effective organizing.</div>
          </li>
          <li>
            <div class="comm-icon green">🌱</div>
            <div><strong style="display:block;margin-bottom:3px;color:var(--text);">Youth Leadership</strong>Programs for ages 14–25 to develop the next generation of global citizens, advocates, and community leaders.</div>
          </li>
          <li>
            <div class="comm-icon purple">📡</div>
            <div><strong style="display:block;margin-bottom:3px;color:var(--text);">Media & Advocacy</strong>Storytelling workshops, social media strategy, and press engagement training to amplify community voices.</div>
          </li>
        </ul>
      </div>
      <div>
        <div class="section-label" style="color:var(--electric-blue);">Upcoming Events</div>
        <div class="comm-events">
          <div class="event-item">
            <div class="event-date">
              <div class="event-month">JUL</div>
              <div class="event-day">12</div>
            </div>
            <div>
              <div class="event-title">SDG Progress Summit — Community Town Hall</div>
              <div class="event-sub">Virtual + In-Person · 6pm EST · Free admission</div>
            </div>
          </div>
          <div class="event-item" style="border-color:#dc2626">
            <div class="event-date">
              <div class="event-month" style="color:#dc2626">JUL</div>
              <div class="event-day">19</div>
            </div>
            <div>
              <div class="event-title">Doomsday Clock Teach-In: Nuclear Policy for Beginners</div>
              <div class="event-sub">Online Webinar · Bulletin of Atomic Scientists speaker</div>
            </div>
          </div>
          <div class="event-item" style="border-color:#16a34a">
            <div class="event-date">
              <div class="event-month" style="color:#16a34a">AUG</div>
              <div class="event-day">03</div>
            </div>
            <div>
              <div class="event-title">Climate Data Literacy Workshop</div>
              <div class="event-sub">Our World in Data · Understanding global climate charts</div>
            </div>
          </div>
          <div class="event-item" style="border-color:#7c3aed">
            <div class="event-date">
              <div class="event-month" style="color:#7c3aed">AUG</div>
              <div class="event-day">17</div>
            </div>
            <div>
              <div class="event-title">Voter Rights Mobilization Day</div>
              <div class="event-sub">National Action Network · 50+ cities · Street outreach</div>
            </div>
          </div>
          <div class="event-item" style="border-color:#0d9488">
            <div class="event-date">
              <div class="event-month" style="color:#0d9488">SEP</div>
              <div class="event-day">20</div>
            </div>
            <div>
              <div class="event-title">UN General Assembly Watch Party</div>
              <div class="event-sub">Live-stream + Community Discussion Panel</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ─── ROOMS ─── -->
<section id="rooms" class="section">
  <div class="section-inner">
    <div class="section-label">Inside the Center</div>
    <h2 class="section-title">Every Room.<br>A Purpose.</h2>
    <p class="section-sub rooms-intro">The GCCC is home to specialized spaces — each one a doorway into a different dimension of global citizenship, personal growth, and community power.</p>
    <div class="rooms-grid">
      <div class="room-card" style="--room-accent:#6366f1;">
        <div class="room-emoji">🎓</div>
        <div class="room-name">Learning Center</div>
        <div class="room-desc">The Global Scholars School — a full academic hub for lifelong learners. SDG-aligned curriculum, tutoring, adult education, language learning, and youth academic enrichment programs.</div>
        <a href="https://theglobalscholarsschool.univer.se/" target="_blank" class="room-link">Enter Learning Center →</a>
      </div>
      <div class="room-card" style="--room-accent:#00D4B4;">
        <div class="room-emoji">💼</div>
        <div class="room-name">Business Lounge</div>
        <div class="room-desc">Co-working space for founders, freelancers, and entrepreneurs. Access to business tools, staffing resources, funding connections, and operations support.</div>
        <a href="https://globalcitizencommunitycenter.univer.se/business-lounge" target="_blank" class="room-link">Enter the Lounge →</a>
      </div>
      <div class="room-card" style="--room-accent:#e879f9;background:linear-gradient(160deg,#120929 0%,#122040 100%);">
        <div class="room-emoji">🎭</div>
        <div class="room-name">Global Auditorium</div>
        <div class="room-desc">A world-class venue open to members and the public — hosting live concerts, cultural showcases, gallery exhibitions, film screenings, guided tours, speaker events, and community performances. Where every nation's story gets a stage.</div>
        <div style="display:flex;flex-wrap:wrap;gap:6px;margin:14px 0 18px;">
          <span style="font-size:10px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;padding:3px 10px;border-radius:20px;background:rgba(232,121,249,0.12);color:#e879f9;border:1px solid rgba(232,121,249,0.25);">🎵 Concerts</span>
          <span style="font-size:10px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;padding:3px 10px;border-radius:20px;background:rgba(232,121,249,0.12);color:#e879f9;border:1px solid rgba(232,121,249,0.25);">🖼️ Exhibits</span>
          <span style="font-size:10px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;padding:3px 10px;border-radius:20px;background:rgba(232,121,249,0.12);color:#e879f9;border:1px solid rgba(232,121,249,0.25);">🏛️ Galleries</span>
          <span style="font-size:10px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;padding:3px 10px;border-radius:20px;background:rgba(232,121,249,0.12);color:#e879f9;border:1px solid rgba(232,121,249,0.25);">🌍 Tours</span>
          <span style="font-size:10px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;padding:3px 10px;border-radius:20px;background:rgba(232,121,249,0.12);color:#e879f9;border:1px solid rgba(232,121,249,0.25);">🎪 Showcases</span>
          <span style="font-size:10px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;padding:3px 10px;border-radius:20px;background:rgba(232,121,249,0.12);color:#e879f9;border:1px solid rgba(232,121,249,0.25);">🎤 Events</span>
        </div>
        <a href="#community" class="room-link" style="color:#e879f9;">Reserve the Stage →</a>
      </div>
      <div class="room-card" style="--room-accent:#f43f5e;">
        <div class="room-emoji">🗳️</div>
        <div class="room-name">Run For Office</div>
        <div class="room-desc">Ready to lead? Get the tools, resources, and community support to run for local, state, or national office. GCCC empowers global citizens to step into civic leadership and make change from the inside.</div>
        <a href="https://rosieforpresident.univer.se/" target="_blank" class="room-link">Start Your Campaign →</a>
      </div>
      <div class="room-card" style="--room-accent:#1ad2dc;">
        <div class="room-emoji">☕</div>
        <div class="room-name">Global Cafe &amp; Bake Sale</div>
        <div class="room-desc">Our community café and virtual bake sale — proudly partnered with <strong style="color:#1ad2dc;">No Kid Hungry</strong> to end childhood hunger. Purchase baked goods, donate gift cards or services, or join the raffle. Every contribution supports SDG 2: Zero Hunger, and comes with a free membership to the Global Citizens Community Center. Goal: raise $2 million for our global tour.</div>
        <a href="https://globalcafe.univer.se/" target="_blank" class="room-link">Visit Global Cafe &amp; Bake Sale →</a>
      </div>
      <div class="room-card" style="--room-accent:#FFD166;">
        <div class="room-emoji">🛡️</div>
        <div class="room-name">Freedom Cove</div>
        <div class="room-desc">A dedicated sanctuary for military veterans. Access benefits navigation, healthcare resources, housing support, mental wellness services, legal advocacy, and a community that honors your service and fights for what you deserve.</div>
        <a href="https://globalcitizencommunitycenter.univer.se/freedom-cove" target="_blank" class="room-link">Enter Freedom Cove →</a>
      </div>
      <div class="room-card" style="--room-accent:#FF6B6B;">
        <div class="room-emoji">🏥</div>
        <div class="room-name">Health Spa & Wellness Center</div>
        <div class="room-desc">Holistic health resources, DAC healthcare memberships, Rx savings, mental wellness workshops, and fitness programming for global citizens of all ages.</div>
        <a href="https://globalcitizencommunitycenter.univer.se/health-spa" target="_blank" class="room-link">Enter Health Center →</a>
      </div>
      <div class="room-card" style="--room-accent:#AFA9EC;">
        <div class="room-emoji">🎮</div>
        <div class="room-name">Rec Suite</div>
        <div class="room-desc">The place to play, unwind, and connect. Games, social events, community celebrations, and a space where relationships are built beyond the work.</div>
        <a href="https://globalcitizencommunitycenter.univer.se/recsuite" target="_blank" class="room-link">Enter Rec Suite →</a>
      </div>
      <div class="room-card" style="--room-accent:#5DCAA5;">
        <div class="room-emoji">💻</div>
        <div class="room-name">Dev Dojo</div>
        <div class="room-desc">Tech education and software development hub. Junior developers, QA testers, and tech support — training the next generation of global citizen technologists.</div>
        <a href="https://globalcitizencommunitycenter.univer.se/dev-dojo" target="_blank" class="room-link">Enter Dev Dojo →</a>
      </div>
      <div class="room-card" style="--room-accent:#F87171;">
        <div class="room-emoji">🚨</div>
        <div class="room-name">Emergency Services</div>
        <div class="room-desc">Rapid-response resource navigation for housing, food, healthcare, and crisis support. Connecting community members to local and global aid networks.</div>
        <a href="https://globalcitizencommunitycenter.univer.se/emergency-services" target="_blank" class="room-link">Access Services →</a>
      </div>
      <div class="room-card" style="--room-accent:#FB923C;">
        <div class="room-emoji">🎤</div>
        <div class="room-name">Studio</div>
        <div class="room-desc">Creative production space for podcasts, video, and multimedia storytelling. Where community voices are recorded, edited, and amplified to the world.</div>
        <a href="https://globalcitizencommunitycenter.univer.se/studio" target="_blank" class="room-link">Enter the Studio →</a>
      </div>
      <div class="room-card" style="--room-accent:#34D399;">
        <div class="room-emoji">⚖️</div>
        <div class="room-name">Global Counsel</div>
        <div class="room-desc">Legal guidance, compliance templates, and policy navigation. Connecting members to trusted advisors, filing guides, and international legal resources. Global Counsel is also a professional training hub for anyone in the legal field — law students at every stage, newly graduated attorneys, practicing lawyers, judges, and all court participants. Get trained on courtroom conduct, the rules and regulations of representing clients, proper courtroom behavior, and the specific protocols for each role in a court proceeding.</div>
        <a href="https://globalcitizencommunitycenter.univer.se/global-counsel" target="_blank" class="room-link">Enter Global Counsel →</a>
      </div>
      <div class="room-card" style="--room-accent:#E879F9;">
        <div class="room-emoji">🛒</div>
        <div class="room-name">GloMart — Global Market</div>
        <div class="room-desc">Community marketplace featuring mission-aligned products, services, and businesses. Buy, sell, and support fellow global citizens building economic power.</div>
        <a href="https://globalcitizencommunitycenter.univer.se/glomart" target="_blank" class="room-link">Visit GloMart →</a>
      </div>
      <div class="room-card" style="--room-accent:#FBBF24;">
        <div class="room-emoji">🌐</div>
        <div class="room-name">Global Exchange</div>
        <div class="room-desc">Cross-cultural dialogue, international partnerships, and global networking. Where local communities connect with peers from all 193 UN member nations.</div>
        <a href="https://globalcitizencommunitycenter.univer.se/globalexchange" target="_blank" class="room-link">Enter Global Exchange →</a>
      </div>
      <div class="room-card" style="--room-accent:#A78BFA;">
        <div class="room-emoji">🙏</div>
        <div class="room-name">Global Citizens Ministry</div>
        <div class="room-desc">Interfaith dialogue, spiritual wellness, and values-driven community. A welcoming space for reflection, purpose, and faith in a just and peaceful world.</div>
        <a href="https://globalcitizencommunitycenter.univer.se/globalcitizensministry" target="_blank" class="room-link">Enter Ministry →</a>
      </div>
      <div class="room-card" style="--room-accent:#4ade80;">
        <div class="room-emoji">🌍</div>
        <div class="room-name">Missions</div>
        <div class="room-desc">Our SDG-aligned action hub — volunteer mobilization, community cleanup, eco-education, and global campaigns driven by citizens committed to a better world.</div>
        <a href="https://globalcitizencommunitycenter.univer.se/missions" target="_blank" class="room-link">View Missions →</a>
      </div>
      <div class="room-card" style="--room-accent:#38bdf8;">
        <div class="room-emoji">🏝️</div>
        <div class="room-name">GCCC Resorts</div>
        <div class="room-desc">Retreat, recharge, and reconnect. GCCC Resorts offer wellness getaways, leadership retreats, and global citizen experiences designed to restore and inspire.</div>
        <a href="https://globalcitizencommunitycenter.univer.se/resorts" target="_blank" class="room-link">Explore Resorts →</a>
      </div>
      <div class="room-card" style="--room-accent:#f59e0b;">
        <div class="room-emoji">🔑</div>
        <div class="room-name">Members Cove</div>
        <div class="room-desc">Your private member portal — access exclusive resources, perks, community events, and the full GCCC member network. Your membership unlocks it all.</div>
        <a href="https://globalcitizencommunitycenter.univer.se/emergency-services-cxqxw" target="_blank" class="room-link">Enter Members Cove →</a>
      </div>
      <div class="room-card" style="--room-accent:#f472b6;">
        <div class="room-emoji">🏗️</div>
        <div class="room-name">Start Your Own Center</div>
        <div class="room-desc">Ready to build a GCCC in your city? Get the blueprint — operational guides, funding tools, staffing templates, and mentorship to launch your own center anywhere in the world.</div>
        <a href="https://globalcitizencommunitycenter.univer.se/startyourowncenter" target="_blank" class="room-link">Start Your Center →</a>
      </div>
      <div class="room-card" style="--room-accent:#a3e635;">
        <div class="room-emoji">🙌</div>
        <div class="room-name">Volunteer</div>
        <div class="room-desc">Join the team and give your time, skills, and passion to a global movement. Every volunteer hour advances the SDGs and strengthens communities near and far.</div>
        <a href="https://globalcitizencommunitycenter.univer.se/jointheteam" target="_blank" class="room-link">Join the Team →</a>
      </div>
      <div class="room-card" style="--room-accent:#fb7185;">
        <div class="room-emoji">🎟️</div>
        <div class="room-name">Raffle</div>
        <div class="room-desc">Enter our community raffle for a chance to win amazing prizes — every ticket supports GCCC programs, SDG initiatives, and families in need.</div>
        <a href="https://amazonraffles.univer.se/" target="_blank" class="room-link">Enter the Raffle →</a>
      </div>
    </div>
  </div>
</section>

<!-- ─── MEMBERSHIP ─── -->
<section id="membership" class="section">
  <div class="section-inner">
    <div class="section-label">Join the Center</div>
    <h2 class="section-title">Membership Levels</h2>
    <div class="divider" style="background:var(--teal);"></div>
    <p class="section-sub">The GCCC operates on a free-to-low-cost model to ensure every person — regardless of budget or background — can access global community, resources, and opportunity.</p>
    <div class="membership-grid">
      <div class="mem-card" style="--mem-accent:#5DCAA5;">
        <div class="mem-badge">Tier 1</div>
        <div class="mem-tier">Home Town Heroes</div>
        <div class="mem-tagline">For curious newcomers, students, and volunteers ready to start their global journey.</div>
        <div class="mem-price"><sup>$</sup>Free</div>
        <div class="mem-divider"></div>
        <ul class="mem-perks">
          <li class="mem-perk">Access to free member publication program</li>
          <li class="mem-perk">Public events and open workshops</li>
          <li class="mem-perk">Monthly newsletter with global citizenship updates</li>
          <li class="mem-perk">Recognition as a GCCC supporter</li>
          <li class="mem-perk">Volunteer or intern opportunities (college credit available)</li>
        </ul>
        <a href="#cta" class="mem-btn">Start for Free</a>
      </div>
      <div class="mem-card featured" style="--mem-accent:var(--gold);">
        <div class="mem-badge">⭐ Tier 2 · Community Leaders</div>
        <div class="mem-tier">Metropolis Avengers</div>
        <div class="mem-tagline">For active community members and program participants ready to go deeper.</div>
        <div class="mem-price"><sup>$</sup>50,000</div>
        <div class="mem-divider"></div>
        <ul class="mem-perks">
          <li class="mem-perk">All Home Town Heroes benefits</li>
          <li class="mem-perk">Priority registration for events and classes</li>
          <li class="mem-perk">Member-only workshops and discussion circles</li>
          <li class="mem-perk">Access to resource library and digital tools</li>
          <li class="mem-perk">Invitations to seasonal community celebrations</li>
        </ul>
        <a href="#cta" class="mem-btn">Join Now</a>
      </div>
      <div class="mem-card" style="--mem-accent:#60a5fa;">
        <div class="mem-badge">Tier 3</div>
        <div class="mem-tier">Global Ambassadors</div>
        <div class="mem-tagline">For leaders, changemakers, and program participants ready to lead the charge.</div>
        <div class="mem-price"><sup>$</sup>100,000</div>
        <div class="mem-divider"></div>
        <ul class="mem-perks">
          <li class="mem-perk">All Metropolis Avengers benefits</li>
          <li class="mem-perk">VIP invitations to exclusive community events</li>
          <li class="mem-perk">1-on-1 mentorship access</li>
          <li class="mem-perk">Featured in GCCC member spotlight</li>
          <li class="mem-perk">Leadership development programming</li>
          <li class="mem-perk">Global Ambassadors network access</li>
        </ul>
        <a href="#cta" class="mem-btn">Become an Ambassador</a>
      </div>
      <div class="mem-card" style="--mem-accent:var(--gold);">
        <div class="mem-badge">Tier 4 · Organizations</div>
        <div class="mem-tier">Elite Crusaders</div>
        <div class="mem-tagline">For businesses and organizations committed to global citizenship at scale.</div>
        <div class="mem-price"><sup>$</sup>350,000</div>
        <div class="mem-divider"></div>
        <ul class="mem-perks">
          <li class="mem-perk">All Ambassador benefits for up to 5 team members</li>
          <li class="mem-perk">Custom workshops and team-building sessions</li>
          <li class="mem-perk">Co-branded sponsorship opportunities</li>
          <li class="mem-perk">Recognition as a GCCC corporate partner</li>
          <li class="mem-perk">Invitations to leadership roundtables and networking events</li>
          <li class="mem-perk">SDG team activation support</li>
        </ul>
        <a href="#cta" class="mem-btn">Apply for Org Membership</a>
      </div>
    </div>
  </div>
</section>

<!-- ─── SPONSORSHIP ─── -->
<section id="sponsorship" class="section">
  <div class="section-inner">
    <div class="section-label">Partner With Us</div>
    <h2 class="section-title" style="color:var(--chalk);">Sponsorship Packages</h2>
    <div class="divider" style="background:var(--gold);"></div>
    <p class="section-sub">Align your brand with a global mission. Sponsoring GCCC puts your organization at the heart of sustainable development, civic leadership, and community impact across 193 countries.</p>
    <div class="sponsor-grid">
      <div class="sponsor-card" style="--sp-accent:#CD7F32;">
        <div class="sp-medal">🥉</div>
        <div class="sp-tier">Bronze</div>
        <div class="sp-price">$50,000</div>
        <div class="sp-divider"></div>
        <ul class="sp-perks">
          <li class="sp-perk">Logo on sponsor page</li>
          <li class="sp-perk">Monthly newsletter mention</li>
          <li class="sp-perk">1 social media shout-out per month</li>
          <li class="sp-perk">Logo on seminar materials</li>
        </ul>
        <a href="mailto:gccc@example.com" class="sp-btn">Become a Bronze Sponsor</a>
      </div>
      <div class="sponsor-card" style="--sp-accent:#A8A9AD;">
        <div class="sp-medal">🥈</div>
        <div class="sp-tier">Silver</div>
        <div class="sp-price">$100,000</div>
        <div class="sp-divider"></div>
        <ul class="sp-perks">
          <li class="sp-perk">All Bronze benefits</li>
          <li class="sp-perk">Homepage logo placement</li>
          <li class="sp-perk">Weekly newsletter mention</li>
          <li class="sp-perk">2 social media posts per month</li>
          <li class="sp-perk">Banner ad on registration pages</li>
          <li class="sp-perk">Verbal acknowledgment at seminars</li>
        </ul>
        <a href="mailto:gccc@example.com" class="sp-btn">Become a Silver Sponsor</a>
      </div>
      <div class="sponsor-card" style="--sp-accent:#FFD166;">
        <div class="sp-medal">🥇</div>
        <div class="sp-tier">Gold</div>
        <div class="sp-price">$250,000</div>
        <div class="sp-divider"></div>
        <ul class="sp-perks">
          <li class="sp-perk">All Silver benefits</li>
          <li class="sp-perk">Featured homepage placement</li>
          <li class="sp-perk">Dedicated newsletter section</li>
          <li class="sp-perk">4 social media posts per month</li>
          <li class="sp-perk">Promo materials at seminars</li>
          <li class="sp-perk">5 complimentary seminar tickets</li>
        </ul>
        <a href="mailto:gccc@example.com" class="sp-btn">Become a Gold Sponsor</a>
      </div>
      <div class="sponsor-card" style="--sp-accent:#E5E4E2;">
        <div class="sp-medal">💎</div>
        <div class="sp-tier">Platinum</div>
        <div class="sp-price">$500,000</div>
        <div class="sp-divider"></div>
        <ul class="sp-perks">
          <li class="sp-perk">All Gold benefits</li>
          <li class="sp-perk">Exclusive homepage placement</li>
          <li class="sp-perk">Full-page newsletter ad</li>
          <li class="sp-perk">8 social media posts per month</li>
          <li class="sp-perk">Speaking slot at seminars</li>
          <li class="sp-perk">10 complimentary seminar tickets</li>
          <li class="sp-perk">Naming rights for a seminar series</li>
        </ul>
        <a href="mailto:gccc@example.com" class="sp-btn">Become a Platinum Sponsor</a>
      </div>
    </div>
    <p style="margin-top:28px;font-size:13px;color:var(--mist);text-align:center;">À la carte add-ons and event-specific sponsorships also available. <a href="mailto:gccc@example.com" style="color:var(--gold);">Contact us for custom packages →</a></p>
  </div>
</section>

<!-- ─── DONATIONS ─── -->
<section id="donate" class="section">
  <div class="section-inner">
    <div class="section-label">Give What You Can</div>
    <h2 class="section-title">Every Dollar<br>Builds Community</h2>
    <div class="divider" style="background:var(--teal);"></div>
    <p class="section-sub">Your donation directly funds meals, programs, education, and opportunity for individuals and families who need it most — across New York and around the world.</p>
    <div class="donate-grid">
      <div class="donate-card" style="--d-accent:#5DCAA5;">
        <div class="donate-amount"><em>$</em>35</div>
        <div class="donate-impact">350 Meals for a Child</div>
        <div class="donate-desc">Connects a child with up to 350 nourishing school meals — a month of food security and one less thing for a family to worry about.</div>
        <ul class="donate-extras">
          <li class="donate-extra">Personalized thank-you email</li>
          <li class="donate-extra">Recognition on the donor wall</li>
        </ul>
        <a href="https://globalcitizencommunitycenter.univer.se/blank" target="_blank" class="donate-btn">Donate $35</a>
      </div>
      <div class="donate-card" style="--d-accent:#60a5fa;">
        <div class="donate-amount"><em>$</em>50</div>
        <div class="donate-impact">500 School Meals All Year</div>
        <div class="donate-desc">Provides a child with 500 school meals — giving a full year of nutritional support and the energy to learn, grow, and thrive.</div>
        <ul class="donate-extras">
          <li class="donate-extra">All $35 benefits</li>
          <li class="donate-extra">Quarterly impact updates</li>
          <li class="donate-extra">Social media shout-out</li>
        </ul>
        <a href="https://globalcitizencommunitycenter.univer.se/blank" target="_blank" class="donate-btn">Donate $50</a>
      </div>
      <div class="donate-card" style="--d-accent:#FFD166;">
        <div class="donate-amount"><em>$</em>100</div>
        <div class="donate-impact">A Full Meal Cart</div>
        <div class="donate-desc">Funds a school meal cart — providing hot, nutritious meals to an entire classroom of children for weeks at a time.</div>
        <ul class="donate-extras">
          <li class="donate-extra">All $50 benefits</li>
          <li class="donate-extra">Handwritten thank-you from a child</li>
          <li class="donate-extra">Virtual tour of the center</li>
        </ul>
        <a href="https://globalcitizencommunitycenter.univer.se/blank" target="_blank" class="donate-btn">Donate $100</a>
      </div>
      <div class="donate-card" style="--d-accent:#F87171;">
        <div class="donate-amount"><em>$</em>250</div>
        <div class="donate-impact">10 Months of Afterschool Snacks</div>
        <div class="donate-desc">Covers 10 months of afterschool snacks for multiple children — fueling the hours between school and home when hunger hits hardest.</div>
        <ul class="donate-extras">
          <li class="donate-extra">All $100 benefits</li>
          <li class="donate-extra">Exclusive donor newsletter</li>
          <li class="donate-extra">Invitation to donor appreciation event</li>
        </ul>
        <a href="https://globalcitizencommunitycenter.univer.se/blank" target="_blank" class="donate-btn">Donate $250</a>
      </div>
    </div>
    <p style="margin-top:24px;font-size:13px;color:var(--mist);text-align:center;">Larger gifts of $1,000–$25,000 available with expanded recognition and VIP impact access. <a href="https://globalcitizencommunitycenter.univer.se/blank" target="_blank" style="color:var(--teal);">See all donation levels →</a></p>

    <!-- END POVERTY STATS + SUBSCRIPTION -->
    <div style="margin-top:64px;padding:40px;background:linear-gradient(135deg,rgba(29,78,216,0.15),rgba(5,150,105,0.15));border:1px solid rgba(255,255,255,0.08);border-radius:16px;">
      <div class="section-label" style="margin-bottom:12px;">The Math Behind the Mission</div>
      <h3 style="font-family:'Bebas Neue',sans-serif;font-size:36px;color:var(--chalk);letter-spacing:0.04em;margin-bottom:8px;">What Would It Cost to End<br>Extreme Poverty — Forever?</h3>
      <div style="width:40px;height:3px;background:var(--teal);margin:0 0 24px;"></div>
      <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:20px;margin-bottom:32px;">
        <div style="background:rgba(255,255,255,0.04);border-radius:12px;padding:20px;text-align:center;">
          <div style="font-family:'Bebas Neue',sans-serif;font-size:42px;color:#4ade80;letter-spacing:0.02em;">808M</div>
          <div style="font-size:13px;color:var(--mist);margin-top:4px;">People currently living in extreme poverty — surviving on less than $3/day</div>
        </div>
        <div style="background:rgba(255,255,255,0.04);border-radius:12px;padding:20px;text-align:center;">
          <div style="font-family:'Bebas Neue',sans-serif;font-size:42px;color:#60a5fa;letter-spacing:0.02em;">$318B</div>
          <div style="font-size:13px;color:var(--mist);margin-top:4px;">Per year needed to permanently end extreme poverty worldwide (Stanford &amp; UC Berkeley, 2026)</div>
        </div>
        <div style="background:rgba(255,255,255,0.04);border-radius:12px;padding:20px;text-align:center;">
          <div style="font-family:'Bebas Neue',sans-serif;font-size:42px;color:#f59e0b;letter-spacing:0.02em;">0.3%</div>
          <div style="font-size:13px;color:var(--mist);margin-top:4px;">Of global GDP — less than what the world spends on cosmetics each year</div>
        </div>
        <div style="background:rgba(255,255,255,0.04);border-radius:12px;padding:20px;text-align:center;">
          <div style="font-family:'Bebas Neue',sans-serif;font-size:42px;color:#e879f9;letter-spacing:0.02em;">~$40</div>
          <div style="font-size:13px;color:var(--mist);margin-top:4px;">Per person on Earth per year — that's all it would take if we all contributed</div>
        </div>
      </div>
      <p style="font-size:14px;color:var(--mist);line-height:1.7;margin-bottom:32px;max-width:680px;">The world spends 7× more on alcohol every year than it would cost to lift every person out of extreme poverty. Jeffrey Sachs, Columbia University economist, estimates that <strong style="color:var(--chalk);">$175 billion per year sustained for 20 years</strong> is all it takes to end extreme poverty for good — building the infrastructure, healthcare, and education systems that make the change permanent. That's less than 1% of the combined income of the world's richest nations.</p>

      <!-- subscription cards -->
      <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:24px;">

        <!-- $25/month -->
        <div style="background:linear-gradient(135deg,rgba(16,185,129,0.12),rgba(59,130,246,0.12));border:2px solid #10b981;border-radius:16px;padding:32px;text-align:center;">
          <div style="display:inline-block;background:#10b981;color:#000;font-weight:700;font-size:11px;letter-spacing:0.12em;padding:4px 14px;border-radius:20px;margin-bottom:16px;text-transform:uppercase;">Monthly Subscription</div>
          <div style="font-family:'Bebas Neue',sans-serif;font-size:64px;color:var(--chalk);letter-spacing:0.02em;line-height:1;"><em style="font-family:'DM Sans',sans-serif;font-size:28px;font-style:normal;vertical-align:top;margin-top:12px;display:inline-block;">$</em>25<span style="font-family:'DM Sans',sans-serif;font-size:18px;color:var(--mist);">/mo</span></div>
          <div style="font-size:17px;font-weight:700;color:#4ade80;margin:8px 0 4px;">End Extreme Poverty — For Good</div>
          <div style="font-size:13px;color:var(--mist);line-height:1.6;margin-bottom:20px;">Your $25 monthly contribution joins a global movement. Together, if enough people commit, we can permanently close the poverty gap and change the trajectory of humanity.</div>
          <ul style="list-style:none;padding:0;margin:0 0 24px;text-align:left;">
            <li style="font-size:13px;color:var(--chalk);padding:5px 0;border-bottom:1px solid rgba(255,255,255,0.06);">✅ Monthly impact report from GCCC</li>
            <li style="font-size:13px;color:var(--chalk);padding:5px 0;border-bottom:1px solid rgba(255,255,255,0.06);">✅ SDG progress updates delivered to you</li>
            <li style="font-size:13px;color:var(--chalk);padding:5px 0;border-bottom:1px solid rgba(255,255,255,0.06);">✅ Recognition on the Global Donor Wall</li>
            <li style="font-size:13px;color:var(--chalk);padding:5px 0;border-bottom:1px solid rgba(255,255,255,0.06);">✅ Exclusive subscriber newsletter</li>
            <li style="font-size:13px;color:var(--chalk);padding:5px 0;">✅ Free GCCC membership</li>
          </ul>
          <a href="https://globalcitizencommunitycenter.univer.se/blank" target="_blank" style="display:block;background:linear-gradient(90deg,#10b981,#3b82f6);color:#fff;font-weight:700;font-size:15px;padding:14px 24px;border-radius:10px;text-decoration:none;letter-spacing:0.04em;">Subscribe $25/month →</a>
          <p style="font-size:11px;color:var(--mist);margin-top:12px;">Cancel anytime. 100% goes toward poverty elimination programs.</p>
        </div>

        <!-- $40/year -->
        <div style="background:linear-gradient(135deg,rgba(245,158,11,0.12),rgba(239,68,68,0.12));border:2px solid #f59e0b;border-radius:16px;padding:32px;text-align:center;">
          <div style="display:inline-block;background:#f59e0b;color:#000;font-weight:700;font-size:11px;letter-spacing:0.12em;padding:4px 14px;border-radius:20px;margin-bottom:16px;text-transform:uppercase;">Annual Subscription</div>
          <div style="font-family:'Bebas Neue',sans-serif;font-size:64px;color:var(--chalk);letter-spacing:0.02em;line-height:1;"><em style="font-family:'DM Sans',sans-serif;font-size:28px;font-style:normal;vertical-align:top;margin-top:12px;display:inline-block;">$</em>40<span style="font-family:'DM Sans',sans-serif;font-size:18px;color:var(--mist);">/yr</span></div>
          <div style="font-size:17px;font-weight:700;color:#f59e0b;margin:8px 0 4px;">The Exact Amount. The Real Number.</div>
          <div style="font-size:13px;color:var(--mist);line-height:1.6;margin-bottom:20px;">According to Stanford & UC Berkeley research, $40 per person per year is precisely what it would take — if every person on Earth contributed — to end extreme poverty permanently. This is your share.</div>
          <ul style="list-style:none;padding:0;margin:0 0 24px;text-align:left;">
            <li style="font-size:13px;color:var(--chalk);padding:5px 0;border-bottom:1px solid rgba(255,255,255,0.06);">✅ Annual impact report from GCCC</li>
            <li style="font-size:13px;color:var(--chalk);padding:5px 0;border-bottom:1px solid rgba(255,255,255,0.06);">✅ SDG progress updates delivered to you</li>
            <li style="font-size:13px;color:var(--chalk);padding:5px 0;border-bottom:1px solid rgba(255,255,255,0.06);">✅ Recognition on the Global Donor Wall</li>
            <li style="font-size:13px;color:var(--chalk);padding:5px 0;border-bottom:1px solid rgba(255,255,255,0.06);">✅ Exclusive subscriber newsletter</li>
            <li style="font-size:13px;color:var(--chalk);padding:5px 0;">✅ Free GCCC membership</li>
          </ul>
          <a href="https://globalcitizencommunitycenter.univer.se/blank" target="_blank" style="display:block;background:linear-gradient(90deg,#f59e0b,#ef4444);color:#fff;font-weight:700;font-size:15px;padding:14px 24px;border-radius:10px;text-decoration:none;letter-spacing:0.04em;">Subscribe $40/year →</a>
          <p style="font-size:11px;color:var(--mist);margin-top:12px;">Cancel anytime. 100% goes toward poverty elimination programs.</p>
        </div>

      </div>
    </div>

  </div>
</section>

<!-- ─── GLOWBAGS ─── -->
<section id="glowbags" class="section" style="background:linear-gradient(135deg,#0d1a2e 0%,#1a0a2e 100%);padding:72px 48px;">
  <div class="section-inner">
    <div class="gb-label">Emergency Care · Community Giving</div>
    <h2 class="section-title" style="font-family:'Bebas Neue',sans-serif;color:var(--chalk);margin-bottom:12px;">Sponsor a GlowBag</h2>
    <div style="width:40px;height:3px;background:#e879f9;margin:0 0 16px;"></div>
    <p class="section-sub">GlowBags are emergency swag bags filled with donated goods, gift cards, services, and supplies — given free to people in crisis. Sponsor a bag and help us stock them with whatever is needed most.</p>
    <div class="gb-intro">
      <div class="gb-intro-icon">✨</div>
      <div class="gb-intro-text">
        <strong>What's inside a GlowBag?</strong>
        Each bag is packed with donated items tailored to the recipient — free haircare, nail services, spa days, outfits, gift cards, school supplies, emergency prep items, and whatever our community donates. Sometimes a car lead, a housing resource, a free vet visit. No two bags are alike. Every bag is a lifeline.
      </div>
    </div>
    <div class="gb-grid">
      <div class="gb-card gb-woman">
        <div class="gb-header">
          <span class="gb-emoji">💜</span>
          <div class="gb-badge">Woman's GlowBag</div>
          <div class="gb-name">Her Glow</div>
          <div class="gb-tagline">Honoring the dignity and resilience of women in need.</div>
        </div>
        <div class="gb-body">
          <div class="gb-hr"></div>
          <div class="gb-items-lbl">What may be included</div>
          <ul class="gb-items">
            <li class="gb-item"><span class="gb-dot"></span>Free hair appointment or salon gift card</li>
            <li class="gb-item"><span class="gb-dot"></span>Manicure / pedicure voucher</li>
            <li class="gb-item"><span class="gb-dot"></span>Spa day or wellness gift card</li>
            <li class="gb-item"><span class="gb-dot"></span>New outfit or clothing gift card</li>
            <li class="gb-item"><span class="gb-dot"></span>Hygiene &amp; personal care essentials</li>
            <li class="gb-item"><span class="gb-dot"></span>Grocery / food gift card</li>
            <li class="gb-item"><span class="gb-dot"></span>Emergency housing or transport resource</li>
            <li class="gb-item"><span class="gb-dot"></span>Donated community gifts &amp; surprises</li>
          </ul>
          <div class="gb-btn" onclick="showGlowToast('Her GlowBag sponsored! 💜')">Sponsor Her GlowBag →</div>
        </div>
      </div>
      <div class="gb-card gb-man">
        <div class="gb-header">
          <span class="gb-emoji">🎒</span>
          <div class="gb-badge">Man's GlowBag</div>
          <div class="gb-name">His Glow</div>
          <div class="gb-tagline">Everything a man in crisis needs to rebuild and stand tall.</div>
        </div>
        <div class="gb-body">
          <div class="gb-hr"></div>
          <div class="gb-items-lbl">What may be included</div>
          <ul class="gb-items">
            <li class="gb-item"><span class="gb-dot"></span>Free barber appointment or gift card</li>
            <li class="gb-item"><span class="gb-dot"></span>New outfit or clothing gift card</li>
            <li class="gb-item"><span class="gb-dot"></span>Grooming &amp; hygiene essentials kit</li>
            <li class="gb-item"><span class="gb-dot"></span>Grocery / food gift card</li>
            <li class="gb-item"><span class="gb-dot"></span>Tool kit or job-readiness supplies</li>
            <li class="gb-item"><span class="gb-dot"></span>Emergency transport / transit card</li>
            <li class="gb-item"><span class="gb-dot"></span>Housing or shelter resource guide</li>
            <li class="gb-item"><span class="gb-dot"></span>Donated community gifts &amp; surprises</li>
          </ul>
          <div class="gb-btn" onclick="showGlowToast('His GlowBag sponsored! 🎒')">Sponsor His GlowBag →</div>
        </div>
      </div>
      <div class="gb-card gb-girl">
        <div class="gb-header">
          <span class="gb-emoji">🌸</span>
          <div class="gb-badge">Girl's GlowBag</div>
          <div class="gb-name">Little Glow</div>
          <div class="gb-tagline">Reminding every girl she is seen, loved, and worthy of care.</div>
        </div>
        <div class="gb-body">
          <div class="gb-hr"></div>
          <div class="gb-items-lbl">What may be included</div>
          <ul class="gb-items">
            <li class="gb-item"><span class="gb-dot"></span>New outfit or clothing gift card</li>
            <li class="gb-item"><span class="gb-dot"></span>Hair accessories &amp; styling products</li>
            <li class="gb-item"><span class="gb-dot"></span>School supplies (backpack, notebooks)</li>
            <li class="gb-item"><span class="gb-dot"></span>Books &amp; educational materials</li>
            <li class="gb-item"><span class="gb-dot"></span>Hygiene &amp; personal care essentials</li>
            <li class="gb-item"><span class="gb-dot"></span>Toy, game, or activity gift</li>
            <li class="gb-item"><span class="gb-dot"></span>Snacks &amp; food gift card</li>
            <li class="gb-item"><span class="gb-dot"></span>Donated community gifts &amp; surprises</li>
          </ul>
          <div class="gb-btn" onclick="showGlowToast('Her Little GlowBag sponsored! 🌸')">Sponsor Her GlowBag →</div>
        </div>
      </div>
      <div class="gb-card gb-boy">
        <div class="gb-header">
          <span class="gb-emoji">⭐</span>
          <div class="gb-badge">Boy's GlowBag</div>
          <div class="gb-name">Young Glow</div>
          <div class="gb-tagline">Fueling every boy in crisis to keep dreaming and growing.</div>
        </div>
        <div class="gb-body">
          <div class="gb-hr"></div>
          <div class="gb-items-lbl">What may be included</div>
          <ul class="gb-items">
            <li class="gb-item"><span class="gb-dot"></span>New outfit or clothing gift card</li>
            <li class="gb-item"><span class="gb-dot"></span>Free barber voucher or hair gift card</li>
            <li class="gb-item"><span class="gb-dot"></span>School supplies (backpack, notebooks)</li>
            <li class="gb-item"><span class="gb-dot"></span>Books, STEM kits, or activity set</li>
            <li class="gb-item"><span class="gb-dot"></span>Hygiene &amp; personal care essentials</li>
            <li class="gb-item"><span class="gb-dot"></span>Snacks &amp; food gift card</li>
            <li class="gb-item"><span class="gb-dot"></span>Sport or hobby activity gift</li>
            <li class="gb-item"><span class="gb-dot"></span>Donated community gifts &amp; surprises</li>
          </ul>
          <div class="gb-btn" onclick="showGlowToast('His Young GlowBag sponsored! ⭐')">Sponsor His GlowBag →</div>
        </div>
      </div>
    </div>
    <div class="gb-cta">
      <h3>Donate items or sponsor a bag</h3>
      <p>Want to donate goods, gift cards, services, or sponsor a full GlowBag? Every contribution goes directly into the hands of someone who needs it most.</p>
      <div class="gb-cta-btn" onclick="showGlowToast('Thank you! We will be in touch about your GlowBag donation. ✨')" style="cursor:pointer;">Donate or sponsor a GlowBag ✨</div>
    </div>
  </div>
</section>

<!-- ─── ENHANCED DONATIONS (Tabbed) ─── -->
<section id="donate-enhanced" class="section" style="background:#050D1A;padding:72px 48px;">
  <div class="section-inner">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.14em;text-transform:uppercase;color:#00D4B4;margin-bottom:12px;">Give What You Can</div>
    <h2 style="font-family:'Georgia',serif;font-size:clamp(28px,4vw,38px);font-weight:700;color:var(--chalk);margin-bottom:12px;line-height:1.1;">Every Dollar<br>Builds Community</h2>
    <div style="width:40px;height:3px;background:#00D4B4;margin:0 0 16px;"></div>
    <p class="section-sub">Your donation directly funds meals, programs, education, and opportunity for individuals and families who need it most — across New York and around the world.</p>
    <div class="don-tabs">
      <button class="don-tab active" onclick="switchDonTab('enhanced',this)">Enhanced packages ($35–$250)</button>
      <button class="don-tab" onclick="switchDonTab('major',this)">Major gifts ($1K–$25K)</button>
    </div>
    <div id="dtab-enhanced" class="don-panel active">
      <div class="don-card" style="--da:#5DCAA5">
        <div class="don-amt"><em>$</em>35</div>
        <div class="don-impact">350 meals for a child</div>
        <div class="don-desc">Connects a child with up to 350 nourishing school meals — a month of food security.</div>
        <ul class="don-extras"><li class="don-extra">Personalized thank-you email</li><li class="don-extra">Recognition on the donor wall</li></ul>
        <div class="don-btn" onclick="showGlowToast('Thank you! Donating $35 →')">Donate $35</div>
      </div>
      <div class="don-card" style="--da:#60a5fa">
        <div class="don-amt"><em>$</em>50</div>
        <div class="don-impact">500 school meals all year</div>
        <div class="don-desc">A full year of nutritional support and the energy to learn, grow, and thrive.</div>
        <ul class="don-extras"><li class="don-extra">All $35 benefits</li><li class="don-extra">Quarterly impact updates</li><li class="don-extra">Social media shout-out</li></ul>
        <div class="don-btn" onclick="showGlowToast('Thank you! Donating $50 →')">Donate $50</div>
      </div>
      <div class="don-card" style="--da:#FFD166">
        <div class="don-amt"><em>$</em>100</div>
        <div class="don-impact">A full school meal cart</div>
        <div class="don-desc">Funds a meal cart — hot, nutritious meals for an entire classroom for weeks.</div>
        <ul class="don-extras"><li class="don-extra">All $50 benefits</li><li class="don-extra">Handwritten thank-you from a child</li><li class="don-extra">Virtual tour of the center</li></ul>
        <div class="don-btn" onclick="showGlowToast('Thank you! Donating $100 →')">Donate $100</div>
      </div>
      <div class="don-card" style="--da:#F87171">
        <div class="don-amt"><em>$</em>250</div>
        <div class="don-impact">10 months of afterschool snacks</div>
        <div class="don-desc">Fueling the hours between school and home when hunger hits hardest.</div>
        <ul class="don-extras"><li class="don-extra">All $100 benefits</li><li class="don-extra">Exclusive donor newsletter</li><li class="don-extra">Invitation to donor appreciation event</li></ul>
        <div class="don-btn" onclick="showGlowToast('Thank you! Donating $250 →')">Donate $250</div>
      </div>
    </div>
    <div id="dtab-major" class="don-panel">
      <div class="don-card" style="--da:#5DCAA5">
        <div class="don-amt"><em>$</em>1K</div>
        <div class="don-impact">10,000 meals for a child</div>
        <div class="don-desc">Transformative, lasting nutritional support connecting a child with 10,000 meals.</div>
        <ul class="don-extras"><li class="don-extra">Personalized thank-you email</li><li class="don-extra">Donor wall recognition</li><li class="don-extra">Quarterly impact report</li></ul>
        <div class="don-btn" onclick="showGlowToast('Thank you! Donating $1,000 →')">Donate $1,000</div>
      </div>
      <div class="don-card" style="--da:#60a5fa">
        <div class="don-amt"><em>$</em>5K</div>
        <div class="don-impact">50,000 school meals all year</div>
        <div class="don-desc">A full year of food security — 50,000 meals and the energy to grow.</div>
        <ul class="don-extras"><li class="don-extra">All $1,000 benefits</li><li class="don-extra">Handwritten thank-you from a child</li><li class="don-extra">Virtual center tour + shout-out</li></ul>
        <div class="don-btn" onclick="showGlowToast('Thank you! Donating $5,000 →')">Donate $5,000</div>
      </div>
      <div class="don-card" style="--da:#FFD166">
        <div class="don-amt"><em>$</em>10K</div>
        <div class="don-impact">Multiple school meal carts</div>
        <div class="don-desc">Feeds entire classrooms and communities for months at a time.</div>
        <ul class="don-extras"><li class="don-extra">All $5,000 benefits</li><li class="don-extra">Exclusive donor newsletter</li><li class="don-extra">Name on donor plaque at center</li></ul>
        <div class="don-btn" onclick="showGlowToast('Thank you! Donating $10,000 →')">Donate $10,000</div>
      </div>
      <div class="don-card" style="--da:#F87171">
        <div class="don-amt"><em>$</em>25K</div>
        <div class="don-impact">VIP community impact</div>
        <div class="don-desc">Plus VIP access and a meeting with center leadership to shape our mission.</div>
        <ul class="don-extras"><li class="don-extra">All $10,000 benefits</li><li class="don-extra">Meet with leadership team</li><li class="don-extra">VIP access + personalized recognition</li></ul>
        <div class="don-btn" onclick="showGlowToast('Thank you! Donating $25,000 →')">Donate $25,000</div>
      </div>
    </div>
    <p style="margin-top:20px;font-size:12px;color:#8A9BBE;text-align:center;">Matching gifts available — check if your employer doubles your impact. Recurring monthly donations also accepted.</p>
  </div>
</section>

<!-- ─── DONATE STRIP (from GCCC Website) ─── -->
<section id="donate-strip-section" style="background:linear-gradient(135deg,var(--navy) 0%,#0D2B50 100%);text-align:center;padding:72px 48px;">
  <div style="max-width:800px;margin:0 auto;">
    <p style="font-size:11px;font-weight:700;letter-spacing:0.2em;text-transform:uppercase;color:var(--teal);margin-bottom:1rem;">Join the Movement</p>
    <h2 style="font-family:'Bebas Neue',sans-serif;font-size:clamp(2.5rem,6vw,5rem);line-height:1;color:var(--chalk);margin-bottom:1.5rem;">Be the Change Our <span style="color:var(--gold);">World</span> Needs</h2>
    <p style="max-width:520px;margin:0 auto 3rem;font-size:1rem;line-height:1.7;color:rgba(240,244,255,0.65);">Sign up to receive action alerts, event invites, and resources to help you make a measurable difference before 2030.</p>
    <form style="display:flex;gap:0;max-width:460px;margin:0 auto 1.5rem;" onsubmit="handleStripJoin(event)">
      <input type="email" id="stripEmail" placeholder="Your email address" required style="flex:1;padding:0.9rem 1.2rem;font-family:'Inter',sans-serif;font-size:0.9rem;border:1.5px solid rgba(255,255,255,0.2);background:rgba(255,255,255,0.07);color:var(--chalk);outline:none;"/>
      <button type="submit" style="background:var(--gold);color:var(--navy);border:none;padding:0 1.75rem;font-family:'Inter',sans-serif;font-weight:700;font-size:0.85rem;letter-spacing:0.05em;text-transform:uppercase;cursor:pointer;">Join Now</button>
    </form>
    <p style="font-size:0.75rem;color:rgba(255,255,255,0.35);margin-bottom:3rem;">No spam. Unsubscribe any time. Your data stays with GCCC.</p>
    <p style="font-size:0.8rem;letter-spacing:0.15em;text-transform:uppercase;color:rgba(255,255,255,0.4);margin-bottom:1rem;">Make a One-Click Donation</p>
    <div style="display:flex;justify-content:center;gap:1rem;flex-wrap:wrap;">
      <button class="strip-donate-btn active" onclick="setStripDonate(this,'$10')">$10</button>
      <button class="strip-donate-btn" onclick="setStripDonate(this,'$25')">$25</button>
      <button class="strip-donate-btn" onclick="setStripDonate(this,'$50')">$50</button>
      <button class="strip-donate-btn" onclick="setStripDonate(this,'$100')">$100</button>
      <button class="strip-donate-btn" onclick="setStripDonate(this,'Custom')">Custom</button>
    </div>
    <div style="margin-top:1.5rem;">
      <button class="btn-primary" onclick="showGlowToast('Thank you! Your donation makes a real difference. 💛')">Donate Now</button>
    </div>
  </div>
</section>

<!-- ─── PLAN & TAMAGOTCHI GAME ─── -->
<section id="plan" style="background:var(--navy2);padding:72px 48px;">
  <div style="max-width:1280px;margin:0 auto;">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.14em;text-transform:uppercase;color:var(--teal);margin-bottom:14px;">Plan &amp; Play</div>
    <h2 style="font-family:'Bebas Neue',sans-serif;font-size:clamp(36px,5vw,58px);color:var(--chalk);margin-bottom:18px;line-height:1;">GCCC Action Plan &amp; SDG Guardian Game</h2>
    <div style="width:48px;height:3px;background:var(--teal);margin:0 0 24px;"></div>
    <p style="font-size:16px;color:var(--mist);line-height:1.75;max-width:600px;margin-bottom:56px;">Explore our 2030 roadmap — then take a break and play Chamagotsu, the SDG Guardian Tamagotchi. Feed it, train it, and level it up by advancing the Global Goals!</p>

    <!-- 2030 PLAN GRID -->
    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:20px;margin-bottom:64px;">
      <div style="background:rgba(0,212,180,0.06);border:1px solid rgba(0,212,180,0.2);border-top:3px solid var(--teal);padding:28px;">
        <div style="font-size:28px;margin-bottom:12px;">📋</div>
        <div style="font-family:'Bebas Neue',sans-serif;font-size:20px;color:var(--chalk);margin-bottom:8px;">Year 1 — Foundation</div>
        <p style="font-size:13px;color:var(--mist);line-height:1.65;">501(c)(3) filing, board formation, pilot programs in ESL, job readiness, and youth afterschool. Launch GlobalHive platform.</p>
      </div>
      <div style="background:rgba(255,209,102,0.06);border:1px solid rgba(255,209,102,0.2);border-top:3px solid var(--gold);padding:28px;">
        <div style="font-size:28px;margin-bottom:12px;">🌱</div>
        <div style="font-family:'Bebas Neue',sans-serif;font-size:20px;color:var(--chalk);margin-bottom:8px;">Year 2 — Growth</div>
        <p style="font-size:13px;color:var(--mist);line-height:1.65;">Expand to 3 borough chapters. Launch GlowBag program, GloMart marketplace, and the Global Citizens Magazine. First summit.</p>
      </div>
      <div style="background:rgba(232,121,249,0.06);border:1px solid rgba(232,121,249,0.2);border-top:3px solid #e879f9;padding:28px;">
        <div style="font-size:28px;margin-bottom:12px;">🌍</div>
        <div style="font-family:'Bebas Neue',sans-serif;font-size:20px;color:var(--chalk);margin-bottom:8px;">Year 3–5 — Scale</div>
        <p style="font-size:13px;color:var(--mist);line-height:1.65;">10 international chapters. Full SDG monitoring dashboard. Continental coordinator network. $1M+ annual budget milestone.</p>
      </div>
      <div style="background:rgba(96,165,250,0.06);border:1px solid rgba(96,165,250,0.2);border-top:3px solid #60a5fa;padding:28px;">
        <div style="font-size:28px;margin-bottom:12px;">🏆</div>
        <div style="font-family:'Bebas Neue',sans-serif;font-size:20px;color:var(--chalk);margin-bottom:8px;">2030 — SDG Target</div>
        <p style="font-size:13px;color:var(--mist);line-height:1.65;">50+ centers globally. 1 million members. Active policy voice at the UN. Measurable community-level SDG progress documented.</p>
      </div>
    </div>

    <!-- READ THE FULL PROPOSAL -->
    <div style="text-align:center;margin:-32px 0 56px;">
      <a href="gccc-proposal.pdf" target="_blank" rel="noopener" style="display:inline-flex;align-items:center;gap:10px;padding:14px 32px;border-radius:4px;background:var(--teal);color:var(--navy);font-weight:700;font-size:14px;letter-spacing:0.04em;text-decoration:none;transition:background 0.2s;">
        📄 Read the Full GCCC Proposal
      </a>
    </div>

    <!-- GLOBE VS DOOMSDAY GAME -->
    <div id="globeGame" style="background:rgba(0,0,0,0.55);border:1px solid rgba(220,38,38,0.3);border-radius:20px;padding:36px 40px;max-width:720px;margin:0 auto;text-align:center;position:relative;overflow:hidden;">

      <!-- Background pulse rings -->
      <div style="position:absolute;inset:0;pointer-events:none;overflow:hidden;border-radius:20px;">
        <div id="ggPulse" style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:500px;height:500px;border-radius:50%;background:radial-gradient(circle,rgba(220,38,38,0.04),transparent 70%);animation:ggPulseAnim 3s ease-in-out infinite;"></div>
      </div>

      <div style="font-size:11px;font-weight:700;letter-spacing:0.14em;text-transform:uppercase;color:#ef4444;margin-bottom:8px;">🌍 Race Against Midnight</div>
      <h3 style="font-family:'Bebas Neue',sans-serif;font-size:36px;color:var(--chalk);margin-bottom:6px;letter-spacing:0.04em;">Save the Planet</h3>
      <p style="font-size:13px;color:var(--mist);margin-bottom:28px;max-width:480px;margin-left:auto;margin-right:auto;">The Doomsday Clock is ticking. Complete all 17 SDGs before midnight strikes — or the world is lost. The planet starts barren. Every goal you complete brings it back to life.</p>

      <!-- TOP ROW: Globe + Clock side by side -->
      <div style="display:flex;align-items:center;justify-content:center;gap:40px;margin-bottom:24px;flex-wrap:wrap;">

        <!-- GLOBE CANVAS -->
        <div style="position:relative;">
          <canvas id="ggGlobe" width="180" height="180" style="border-radius:50%;display:block;"></canvas>
          <div id="ggGlobeLabel" style="font-size:11px;color:var(--mist);margin-top:8px;letter-spacing:0.06em;text-transform:uppercase;">Barren World</div>
        </div>

        <!-- DOOMSDAY CLOCK COUNTDOWN -->
        <div style="text-align:center;">
          <div style="font-size:10px;font-weight:700;letter-spacing:0.14em;text-transform:uppercase;color:#7f1d1d;margin-bottom:6px;">⏱ Time Remaining</div>
          <canvas id="ggClock" width="120" height="120" style="display:block;margin:0 auto;border-radius:50%;"></canvas>
          <div id="ggTimeLeft" style="font-family:'JetBrains Mono',monospace;font-size:28px;font-weight:700;color:#ef4444;margin-top:8px;text-shadow:0 0 10px rgba(239,68,68,0.5);letter-spacing:0.04em;">4:15</div>
          <div style="font-size:10px;color:#7f1d1d;text-transform:uppercase;letter-spacing:0.1em;">before midnight</div>
        </div>

      </div>

      <!-- PLANET HEALTH BAR -->
      <div style="margin-bottom:20px;text-align:left;">
        <div style="display:flex;justify-content:space-between;font-size:11px;color:var(--mist);margin-bottom:5px;">
          <span>🌱 Planet Health</span><span id="ggHealthPct">0%</span>
        </div>
        <div style="height:14px;background:rgba(255,255,255,0.06);border-radius:7px;border:1px solid rgba(0,212,180,0.15);overflow:hidden;">
          <div id="ggHealthBar" style="height:100%;width:0%;background:linear-gradient(90deg,#ef4444,#f59e0b,#4ade80);border-radius:7px;transition:width 0.6s;"></div>
        </div>
      </div>

      <!-- SDG GOALS GRID (17 goals) -->
      <div style="margin-bottom:22px;">
        <div style="font-size:10px;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;color:var(--mist);margin-bottom:10px;text-align:left;">Complete the SDGs — in order:</div>
        <div id="ggSdgGrid" style="display:grid;grid-template-columns:repeat(9,1fr);gap:6px;"></div>
      </div>

      <!-- STATUS MESSAGE -->
      <div id="ggMsg" style="min-height:32px;font-size:13px;color:var(--teal);margin-bottom:18px;font-style:italic;font-weight:500;">The planet is barren and silent. Humanity's clock is ticking. Will you act?</div>

      <!-- ACTION BUTTON -->
      <div id="ggActionWrap">
        <button id="ggActionBtn" onclick="ggDoGoal()" style="width:100%;background:linear-gradient(135deg,rgba(0,212,180,0.18),rgba(96,165,250,0.18));border:1px solid rgba(0,212,180,0.4);color:var(--teal);padding:16px;border-radius:10px;font-family:'Bebas Neue',sans-serif;font-size:22px;letter-spacing:0.08em;cursor:pointer;transition:all 0.25s;" onmouseover="this.style.background='linear-gradient(135deg,rgba(0,212,180,0.32),rgba(96,165,250,0.32))'" onmouseout="this.style.background='linear-gradient(135deg,rgba(0,212,180,0.18),rgba(96,165,250,0.18))'">
          ✊ Complete SDG 1: No Poverty
        </button>
      </div>

      <!-- RESTART (hidden initially) -->
      <div id="ggRestartWrap" style="display:none;margin-top:16px;">
        <button onclick="ggRestart()" style="background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.2);color:var(--chalk);padding:12px 32px;border-radius:8px;font-size:14px;font-weight:700;cursor:pointer;letter-spacing:0.04em;">🔄 Play Again</button>
      </div>

    </div>
  </div>
</section>

<!-- ─── START YOUR OWN CENTER ─── -->
<section id="start-center">
  <div class="start-inner">
    <div>
      <div class="start-label">Expand the Network</div>
      <h2 class="start-h2">Start Your <em>Own</em><br>Center</h2>
      <p class="start-body">The GCCC model is replicable, scalable, and free to launch. Communities around the world are starting their own Global Citizens Community Centers — bringing language, jobs, wellness, and belonging to their neighborhoods.</p>
      <a class="btn-primary" href="https://globalcitizencommunitycenter.univer.se/startyourowncenter" target="_blank" rel="noopener">Get the Playbook ↗</a>
    </div>
    <div class="start-steps">
      <div class="start-step">
        <div class="start-step-num">1</div>
        <div>
          <div class="start-step-title">Apply & Connect</div>
          <div class="start-step-desc">Submit your community profile. We match you with a dedicated staffing coordinator and operations advisor from day one.</div>
        </div>
      </div>
      <div class="start-step">
        <div class="start-step-num">2</div>
        <div>
          <div class="start-step-title">Build Your Team</div>
          <div class="start-step-desc">Recruit interns, volunteers, and assistants using free LinkedIn outreach and the GCCC Resource List. Low cost, high impact.</div>
        </div>
      </div>
      <div class="start-step">
        <div class="start-step-num">3</div>
        <div>
          <div class="start-step-title">Open Your Rooms</div>
          <div class="start-step-desc">Launch programs from the GCCC playbook — ESL, job readiness, business lounge, health wellness, youth, and more.</div>
        </div>
      </div>
      <div class="start-step">
        <div class="start-step-num">4</div>
        <div>
          <div class="start-step-title">Join the Global Network</div>
          <div class="start-step-desc">Tap into funding partners, endorsements, and the worldwide GCCC community of centers serving 193 countries.</div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ─── PARTNERS ─── -->
<section id="partners">
  <div class="partners-inner">
    <div class="partners-label">Inspired by and aligned with</div>
    <div class="partners-grid">
      <a href="https://un.org" target="_blank" class="partner-logo">un.org</a>
      <a href="https://globalcitizen.org" target="_blank" class="partner-logo">globalcitizen.org</a>
      <a href="https://globalgoals.org" target="_blank" class="partner-logo">globalgoals.org</a>
      <a href="https://thebulletin.org" target="_blank" class="partner-logo">thebulletin.org</a>
      <a href="https://ourworldindata.org" target="_blank" class="partner-logo">ourworldindata.org</a>
      <a href="https://worldbank.org" target="_blank" class="partner-logo">worldbank.org</a>
      <a href="https://nationalactionnetwork.net" target="_blank" class="partner-logo">nationalactionnetwork.net</a>
      <a href="https://www.savethechildren.org" target="_blank" class="partner-logo">💛 Save the Children</a>
      <a href="https://globalcitizencommunitycenter.univer.se/emergency-career" target="_blank" class="partner-logo">💼 Careers</a>
    </div>
    <div class="partners-label" style="margin-top:36px;">Our Sponsors &amp; Community Partners</div>
    <div class="partners-grid">
      <span class="partner-logo" style="cursor:default;">🚔 NYPD</span>
      <span class="partner-logo" style="cursor:default;">🏛️ HDS</span>
      <span class="partner-logo" style="cursor:default;">⚖️ Brooklyn Family Court</span>
      <span class="partner-logo" style="cursor:default;">🤝 NYPD Family Benches</span>
      <span class="partner-logo" style="cursor:default;">❤️ Family Affair Organization</span>
      <a href="https://www.4wall.com/" target="_blank" class="partner-logo">🎭 Four Walls Ent.</a>
    </div>
  </div>
</section>

<!-- ─── EMAIL CTA ─── -->
<section id="cta">
  <div class="cta-inner">
    <h2>Stay Informed. Stay Active.</h2>
    <p>Get the weekly Global Citizens Digest — curated data, campaign updates, and civic action opportunities, direct to your inbox.</p>
    <div class="email-form">
      <input type="email" class="email-input" placeholder="your@email.com" aria-label="Email address"/>
      <button class="email-submit">Subscribe Free</button>
    </div>
    <p style="margin-top:14px;font-size:12px;color:rgba(255,255,255,0.5)">No spam. Unsubscribe anytime. We never sell your data.</p>
  </div>
</section>

<!-- ─── FOOTER ─── -->
<footer>
  <div class="footer-grid">
    <div>
      <div class="footer-brand-word">GCCC</div>
      <div class="footer-tagline">Global Citizens Community Center — where every person who arrives finds language, work, and belonging. A nonprofit hub for civic action and data-driven advocacy.</div>
    </div>
    <div class="footer-col">
      <h4>Programs</h4>
      <a href="#programs">ESL Classes</a>
      <a href="#programs">Job Readiness</a>
      <a href="#programs">Youth After School</a>
      <a href="#programs">Citizenship Prep</a>
      <a href="#programs">Community Dinners</a>
    </div>
    <div class="footer-col">
      <h4>Global Issues</h4>
      <a href="#goals">SDG Goals</a>
      <a href="#data">World Data</a>
      <a href="#threats">Critical Threats</a>
      <a href="#campaigns">Take Action</a>
      <a href="#summit">Global Summit</a>
    </div>
    <div class="footer-col">
      <h4>Site Pages</h4>
      <a href="gccc-pages.html">Sign In / Member Portal</a>
      <a href="fundraiser.html">Start a Fundraiser</a>
      <a href="community-center.html">Community Center</a>
      <a href="back-office-login.html">Back Office Sign In</a>
      <a href="https://globalcitizencommunitycenter.univer.se/" target="_blank">Public Website ↗</a>
    </div>
  </div>
  <div class="footer-bottom">
    <div class="footer-copy">© 2026 Global Citizens Community Center · Global Hive · New York · Not affiliated with the United Nations or any named organizations. Educational & advocacy use.</div>
    <div class="footer-sdg-badge">SDG 2030 · 17 Goals · One Community</div>
  </div>
</footer>

<script>
/* NAV SCROLL */
window.addEventListener('scroll',()=>{
  document.getElementById('site-nav').classList.toggle('scrolled',window.scrollY>40);
});
// Close mobile menu when any nav link is clicked
document.querySelectorAll('#navLinks a').forEach(link=>{
  link.addEventListener('click',()=>{
    document.getElementById('navLinks').classList.remove('open');
    document.getElementById('navHamburger').classList.remove('open');
  });
});

/* COUNTER ANIMATION */
const counters=document.querySelectorAll('.impact-num');
const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(!entry.isIntersecting)return;
    const el=entry.target;
    const text=el.innerHTML;
    const match=text.match(/^(\d+)/);
    if(!match)return;
    const target=parseInt(match[1]);
    const suffix=text.replace(/^\d+/,'');
    let current=0;
    const step=Math.ceil(target/40);
    const timer=setInterval(()=>{
      current=Math.min(current+step,target);
      el.innerHTML=current+suffix;
      if(current>=target)clearInterval(timer);
    },30);
    observer.unobserve(el);
  });
},{threshold:0.5});
counters.forEach(c=>observer.observe(c));
</script>
<div class="glow-toast" id="glowToast"></div>

<script>
/* ─── GLOW TOAST ─── */
function showGlowToast(msg){
  const t=document.getElementById('glowToast');
  t.textContent=msg;
  t.classList.add('show');
  setTimeout(()=>t.classList.remove('show'),3500);
}

/* ─── TABBED DONATIONS ─── */
function switchDonTab(tab,btn){
  document.querySelectorAll('.don-panel').forEach(p=>p.classList.remove('active'));
  document.querySelectorAll('.don-tab').forEach(t=>t.classList.remove('active'));
  document.getElementById('dtab-'+tab).classList.add('active');
  btn.classList.add('active');
}

/* ─── DONATE STRIP ─── */
function setStripDonate(btn,amt){
  document.querySelectorAll('.strip-donate-btn').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
}
function handleStripJoin(e){
  e.preventDefault();
  const v=document.getElementById('stripEmail').value;
  if(v){showGlowToast('Welcome to GCCC! Check your inbox soon. 🌍');document.getElementById('stripEmail').value='';}
}

/* ─── DOOMSDAY CLOCK — Ticking Analog Dome ─── */
function drawDoomClock(){
  const canvas=document.getElementById('doomClock');
  if(!canvas)return;
  const ctx=canvas.getContext('2d');
  const W=100,H=100,cx=50,cy=50,r=44;
  const now=new Date();
  // 85 sec to midnight: position hands near 12 o'clock
  // minute hand: 85 sec before midnight = 1 min 25 sec before = 58:35 on the clock face
  const secFraction=now.getSeconds()/60;
  const minAngle=((58+secFraction)/60)*2*Math.PI - Math.PI/2; // near 12
  const secAngle=(now.getSeconds()/60)*2*Math.PI - Math.PI/2;

  ctx.clearRect(0,0,W,H);

  // Dome gradient face
  const grad=ctx.createRadialGradient(cx-8,cy-10,4,cx,cy,r);
  grad.addColorStop(0,'#2a0505');
  grad.addColorStop(1,'#0d0000');
  ctx.beginPath();ctx.arc(cx,cy,r,0,2*Math.PI);
  ctx.fillStyle=grad;ctx.fill();

  // Rim glow
  ctx.beginPath();ctx.arc(cx,cy,r,0,2*Math.PI);
  ctx.strokeStyle='#dc2626';ctx.lineWidth=2.5;
  ctx.shadowColor='#dc2626';ctx.shadowBlur=8;ctx.stroke();
  ctx.shadowBlur=0;

  // Hour ticks
  for(let i=0;i<12;i++){
    const a=(i/12)*2*Math.PI-Math.PI/2;
    const x1=cx+Math.cos(a)*(r-6),y1=cy+Math.sin(a)*(r-6);
    const x2=cx+Math.cos(a)*(r-2),y2=cy+Math.sin(a)*(r-2);
    ctx.beginPath();ctx.moveTo(x1,y1);ctx.lineTo(x2,y2);
    ctx.strokeStyle=i===0?'#ef4444':'#7f1d1d';ctx.lineWidth=i===0?2:1;ctx.stroke();
  }

  // Minute hand (near 12 — danger zone)
  ctx.beginPath();
  ctx.moveTo(cx+Math.cos(minAngle+Math.PI)*8,cy+Math.sin(minAngle+Math.PI)*8);
  ctx.lineTo(cx+Math.cos(minAngle)*28,cy+Math.sin(minAngle)*28);
  ctx.strokeStyle='#ef4444';ctx.lineWidth=2.5;ctx.lineCap='round';
  ctx.shadowColor='#ef4444';ctx.shadowBlur=4;ctx.stroke();ctx.shadowBlur=0;

  // Second hand (sweeping live)
  ctx.beginPath();
  ctx.moveTo(cx+Math.cos(secAngle+Math.PI)*10,cy+Math.sin(secAngle+Math.PI)*10);
  ctx.lineTo(cx+Math.cos(secAngle)*38,cy+Math.sin(secAngle)*38);
  ctx.strokeStyle='#ff0000';ctx.lineWidth=1;ctx.lineCap='round';ctx.stroke();

  // Center pin
  ctx.beginPath();ctx.arc(cx,cy,3,0,2*Math.PI);
  ctx.fillStyle='#ef4444';ctx.fill();
}
setInterval(drawDoomClock,1000);
drawDoomClock();

/* ─── COUNTDOWN DIGITS (counting up to midnight) ─── */
function updateCountdown(){
  const el=document.getElementById('clockDigits');
  if(!el)return;
  const now=new Date();
  const sec=now.getSeconds();
  const remaining=85-sec%85;
  const m=Math.floor(remaining/60);
  const s=remaining%60;
  el.textContent=m+':'+(s<10?'0':'')+s;
}
setInterval(updateCountdown,1000);
updateCountdown();

/* ─── GLOBE vs DOOMSDAY CLOCK GAME ─── */
(function(){

  const SDGs=[
    {n:1,  label:'No Poverty',          color:'#E5243B', icon:'💰'},
    {n:2,  label:'Zero Hunger',         color:'#DDA63A', icon:'🌾'},
    {n:3,  label:'Good Health',         color:'#4C9F38', icon:'❤️'},
    {n:4,  label:'Quality Education',   color:'#C5192D', icon:'📚'},
    {n:5,  label:'Gender Equality',     color:'#FF3A21', icon:'♀️'},
    {n:6,  label:'Clean Water',         color:'#26BDE2', icon:'💧'},
    {n:7,  label:'Clean Energy',        color:'#FCC30B', icon:'☀️'},
    {n:8,  label:'Decent Work',         color:'#A21942', icon:'💼'},
    {n:9,  label:'Innovation',          color:'#FD6925', icon:'🏗️'},
    {n:10, label:'Reduced Inequality',  color:'#DD1367', icon:'⚖️'},
    {n:11, label:'Sustainable Cities',  color:'#FD9D24', icon:'🏙️'},
    {n:12, label:'Responsible Consump.',color:'#BF8B2E', icon:'♻️'},
    {n:13, label:'Climate Action',      color:'#3F7E44', icon:'🌡️'},
    {n:14, label:'Life Below Water',    color:'#0A97D9', icon:'🐋'},
    {n:15, label:'Life on Land',        color:'#56C02B', icon:'🌳'},
    {n:16, label:'Peace & Justice',     color:'#00689D', icon:'🕊️'},
    {n:17, label:'Partnerships',        color:'#19486A', icon:'🤝'},
  ];

  const TOTAL_SECS = 255; // 4 min 15 sec — enough pressure
  let gg = {
    running: false,
    won: false,
    lost: false,
    secsLeft: TOTAL_SECS,
    currentGoal: 0, // 0-indexed, 0..16
    completed: [],
    intervalId: null,
    globeAngle: 0,
  };

  /* ── Build SDG grid ── */
  function buildGrid(){
    const grid = document.getElementById('ggSdgGrid');
    if(!grid) return;
    grid.innerHTML = '';
    SDGs.forEach((sdg, i) => {
      const cell = document.createElement('div');
      cell.id = 'gg-sdg-'+i;
      cell.title = 'SDG '+sdg.n+': '+sdg.label;
      cell.style.cssText = `width:100%;aspect-ratio:1;border-radius:6px;display:flex;align-items:center;justify-content:center;font-size:15px;cursor:default;transition:all 0.4s;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.08);opacity:0.35;`;
      cell.textContent = sdg.icon;
      grid.appendChild(cell);
    });
  }

  function refreshGrid(){
    SDGs.forEach((sdg,i)=>{
      const cell = document.getElementById('gg-sdg-'+i);
      if(!cell) return;
      if(gg.completed.includes(i)){
        cell.style.background = sdg.color;
        cell.style.opacity = '1';
        cell.style.border = '1px solid '+sdg.color;
        cell.style.transform = 'scale(1.08)';
        cell.style.boxShadow = '0 0 8px '+sdg.color+'88';
      } else if(i === gg.currentGoal && gg.running){
        cell.style.background = 'rgba(255,255,255,0.12)';
        cell.style.opacity = '1';
        cell.style.border = '2px solid #fff';
        cell.style.animation = 'ggPulseCell 1s ease-in-out infinite';
      } else {
        cell.style.background = 'rgba(255,255,255,0.05)';
        cell.style.opacity = '0.35';
        cell.style.border = '1px solid rgba(255,255,255,0.08)';
        cell.style.transform = 'scale(1)';
        cell.style.boxShadow = 'none';
        cell.style.animation = 'none';
      }
    });
  }

  /* ── Draw globe canvas ── */
  function drawGlobe(){
    const canvas = document.getElementById('ggGlobe');
    if(!canvas) return;
    const ctx = canvas.getContext('2d');
    const W=180, H=180, cx=90, cy=90, r=80;
    ctx.clearRect(0,0,W,H);

    const health = gg.completed.length / 17; // 0..1

    // Atmosphere glow
    if(health > 0){
      const atmo = ctx.createRadialGradient(cx,cy,r*0.85,cx,cy,r*1.1);
      const gc = health < 0.5
        ? `rgba(74,222,128,${health*0.4})`
        : `rgba(56,189,248,${health*0.5})`;
      atmo.addColorStop(0, gc);
      atmo.addColorStop(1, 'transparent');
      ctx.beginPath(); ctx.arc(cx,cy,r*1.1,0,Math.PI*2);
      ctx.fillStyle=atmo; ctx.fill();
    }

    // Base sphere — barren (grey-brown) → living (blue-green)
    const barrenC = [60,45,35];
    const liveC   = [30,80,140];
    const r2      = barrenC.map((v,i)=>Math.round(v+(liveC[i]-v)*health));
    const grad = ctx.createRadialGradient(cx-25,cy-25,10,cx,cy,r);
    grad.addColorStop(0, `rgb(${r2[0]+50},${r2[1]+50},${r2[2]+50})`);
    grad.addColorStop(0.5, `rgb(${r2[0]},${r2[1]},${r2[2]})`);
    grad.addColorStop(1, `rgb(${Math.max(0,r2[0]-30)},${Math.max(0,r2[1]-30)},${Math.max(0,r2[2]-30)})`);
    ctx.beginPath(); ctx.arc(cx,cy,r,0,Math.PI*2);
    ctx.fillStyle=grad; ctx.fill();

    // Continent patches that appear as goals complete
    if(health > 0){
      ctx.save();
      ctx.clip(); // clip to sphere
      ctx.beginPath(); ctx.arc(cx,cy,r,0,Math.PI*2); ctx.clip();

      const continents = [
        {x:68,y:55,w:28,h:22},  // N. America
        {x:72,y:88,w:18,h:26},  // S. America
        {x:88,y:52,w:20,h:28},  // Europe/Africa
        {x:110,y:58,w:30,h:24}, // Asia
        {x:120,y:100,w:22,h:14},// Australia
      ];
      const landAlpha = Math.min(health*2.5, 1);
      const landColor = health > 0.5
        ? `rgba(34,197,94,${landAlpha*0.7})`
        : `rgba(120,160,60,${landAlpha*0.5})`;
      ctx.fillStyle = landColor;
      const showCount = Math.ceil(health * continents.length);
      continents.slice(0,showCount).forEach(c=>{
        ctx.beginPath();
        ctx.ellipse(c.x + Math.sin(gg.globeAngle*0.4)*3, c.y, c.w/2, c.h/2, 0, 0, Math.PI*2);
        ctx.fill();
      });
      ctx.restore();
    }

    // Ice caps at high health
    if(health > 0.7){
      const iceAlpha = (health-0.7)/0.3;
      ctx.save();
      ctx.beginPath(); ctx.arc(cx,cy,r,0,Math.PI*2); ctx.clip();
      ctx.fillStyle = `rgba(220,240,255,${iceAlpha*0.6})`;
      ctx.beginPath(); ctx.ellipse(cx, cy-r+14, 20, 10, 0, 0, Math.PI*2); ctx.fill();
      ctx.beginPath(); ctx.ellipse(cx, cy+r-14, 16, 8, 0, 0, Math.PI*2); ctx.fill();
      ctx.restore();
    }

    // Clouds
    if(health > 0.3){
      ctx.save();
      ctx.beginPath(); ctx.arc(cx,cy,r,0,Math.PI*2); ctx.clip();
      const cloudAlpha = Math.min((health-0.3)*2, 0.35);
      ctx.fillStyle = `rgba(255,255,255,${cloudAlpha})`;
      const angle = gg.globeAngle;
      [[70,65,20,8],[100,80,16,6],[85,110,22,7]].forEach(([bx,by,bw,bh])=>{
        ctx.beginPath();
        ctx.ellipse(bx+Math.sin(angle)*5, by, bw, bh, 0, 0, Math.PI*2);
        ctx.fill();
      });
      ctx.restore();
    }

    // Rim highlight
    ctx.beginPath(); ctx.arc(cx,cy,r,0,Math.PI*2);
    ctx.strokeStyle = health > 0.3 ? `rgba(100,200,255,0.4)` : `rgba(150,120,100,0.3)`;
    ctx.lineWidth=2; ctx.stroke();

    // Shine
    const shine = ctx.createRadialGradient(cx-28,cy-28,2,cx-20,cy-20,r*0.6);
    shine.addColorStop(0,'rgba(255,255,255,0.22)');
    shine.addColorStop(1,'rgba(255,255,255,0)');
    ctx.beginPath(); ctx.arc(cx,cy,r,0,Math.PI*2);
    ctx.fillStyle=shine; ctx.fill();

    // Explosion if lost
    if(gg.lost){
      ctx.beginPath(); ctx.arc(cx,cy,r,0,Math.PI*2);
      ctx.fillStyle='rgba(220,38,38,0.7)'; ctx.fill();
      ctx.fillStyle='#fff';
      ctx.font='bold 56px serif';
      ctx.textAlign='center';
      ctx.textBaseline='middle';
      ctx.fillText('💥',cx,cy);
    }

    // Victory shimmer
    if(gg.won){
      ctx.beginPath(); ctx.arc(cx,cy,r,0,Math.PI*2);
      ctx.fillStyle='rgba(250,204,21,0.25)'; ctx.fill();
    }
  }

  /* ── Draw game clock ── */
  function drawGameClock(){
    const canvas = document.getElementById('ggClock');
    if(!canvas) return;
    const ctx = canvas.getContext('2d');
    const W=120,H=120,cx=60,cy=60,r=54;
    ctx.clearRect(0,0,W,H);

    const frac = gg.secsLeft / TOTAL_SECS; // 1→0
    const danger = frac < 0.25;

    // Face
    const g = ctx.createRadialGradient(cx-10,cy-10,4,cx,cy,r);
    g.addColorStop(0,'#1a0202'); g.addColorStop(1,'#0a0000');
    ctx.beginPath(); ctx.arc(cx,cy,r,0,Math.PI*2);
    ctx.fillStyle=g; ctx.fill();

    // Countdown arc
    const startAngle = -Math.PI/2;
    const endAngle   = startAngle + (2*Math.PI*frac);
    ctx.beginPath();
    ctx.arc(cx,cy,r-4,startAngle,endAngle);
    ctx.strokeStyle = danger ? '#ef4444' : '#f59e0b';
    ctx.lineWidth = 6;
    ctx.lineCap = 'round';
    if(danger){ ctx.shadowColor='#ef4444'; ctx.shadowBlur=10; }
    ctx.stroke();
    ctx.shadowBlur=0;

    // Tick marks
    for(let i=0;i<12;i++){
      const a=(i/12)*2*Math.PI-Math.PI/2;
      ctx.beginPath();
      ctx.moveTo(cx+Math.cos(a)*(r-10),cy+Math.sin(a)*(r-10));
      ctx.lineTo(cx+Math.cos(a)*(r-4), cy+Math.sin(a)*(r-4));
      ctx.strokeStyle=i===0?'#ef4444':'rgba(127,29,29,0.7)';
      ctx.lineWidth=i===0?2:1; ctx.stroke();
    }

    // Sweeping hand (real seconds)
    const secAngle = ((Date.now()/1000)%(60)/60)*2*Math.PI - Math.PI/2;
    ctx.beginPath();
    ctx.moveTo(cx+Math.cos(secAngle+Math.PI)*10,cy+Math.sin(secAngle+Math.PI)*10);
    ctx.lineTo(cx+Math.cos(secAngle)*42,cy+Math.sin(secAngle)*42);
    ctx.strokeStyle='#ef4444'; ctx.lineWidth=1.5; ctx.lineCap='round'; ctx.stroke();

    // Centre pin
    ctx.beginPath(); ctx.arc(cx,cy,4,0,Math.PI*2);
    ctx.fillStyle='#ef4444'; ctx.fill();

    // Rim
    ctx.beginPath(); ctx.arc(cx,cy,r,0,Math.PI*2);
    ctx.strokeStyle = danger ? '#dc2626' : '#7f1d1d';
    ctx.lineWidth=2.5;
    if(danger){ ctx.shadowColor='#ef4444'; ctx.shadowBlur=12; }
    ctx.stroke(); ctx.shadowBlur=0;
  }

  /* ── Update time display ── */
  function updateTimeDisplay(){
    const el = document.getElementById('ggTimeLeft');
    if(!el) return;
    const m = Math.floor(gg.secsLeft/60);
    const s = gg.secsLeft % 60;
    el.textContent = m+':'+(s<10?'0':'')+s;
    el.style.color = gg.secsLeft < 60 ? '#ff0000' : '#ef4444';
  }

  /* ── Update health bar & label ── */
  function updateHealth(){
    const pct = Math.round((gg.completed.length/17)*100);
    const bar = document.getElementById('ggHealthBar');
    const pctEl = document.getElementById('ggHealthPct');
    const label = document.getElementById('ggGlobeLabel');
    if(bar) bar.style.width = pct+'%';
    if(pctEl) pctEl.textContent = pct+'%';
    if(label){
      const labels=['Barren World','Lifeless Rock','Stirring...','First Signs','Awakening','Growing Hope','Green Shoots','Flourishing','Thriving!','Almost There!','🌍 Saved!'];
      label.textContent = labels[Math.min(Math.floor(pct/10), labels.length-1)];
    }
  }

  /* ── Update action button ── */
  function updateActionBtn(){
    const btn = document.getElementById('ggActionBtn');
    if(!btn) return;
    if(gg.currentGoal < 17){
      const sdg = SDGs[gg.currentGoal];
      btn.textContent = '✊ Complete SDG '+sdg.n+': '+sdg.label;
      btn.style.borderColor = sdg.color+'88';
      btn.style.color = sdg.color;
    }
  }

  /* ── Complete a goal ── */
  window.ggDoGoal = function(){
    if(!gg.running || gg.won || gg.lost) return;
    if(gg.currentGoal >= 17) return;
    const sdg = SDGs[gg.currentGoal];
    gg.completed.push(gg.currentGoal);
    gg.currentGoal++;

    // Bonus time: completing a goal adds seconds
    gg.secsLeft = Math.min(TOTAL_SECS, gg.secsLeft + 10);

    const msg = document.getElementById('ggMsg');
    if(msg) msg.textContent = '✅ SDG '+sdg.n+' unlocked: '+sdg.label+'! +10 seconds added. '+(17-gg.currentGoal)+' goals remaining.';

    refreshGrid();
    updateHealth();
    updateActionBtn();

    if(gg.currentGoal >= 17){
      ggWin();
    }
  };

  /* ── Win ── */
  function ggWin(){
    gg.won = true; gg.running = false;
    clearInterval(gg.intervalId);
    const msg = document.getElementById('ggMsg');
    if(msg) msg.innerHTML = '🌍✨ <strong style="color:#4ade80;">PLANET SAVED!</strong> All 17 SDGs achieved before midnight! The Doomsday Clock has been pushed back. Humanity lives on!';
    const btn = document.getElementById('ggActionBtn');
    if(btn){ btn.textContent='🌍 Planet Saved! You did it!'; btn.style.color='#4ade80'; btn.style.borderColor='#4ade80'; btn.disabled=true; }
    const rw = document.getElementById('ggRestartWrap');
    if(rw) rw.style.display='block';
    showGlowToast('🌍 You saved the planet! All 17 SDGs complete!');
  }

  /* ── Lose ── */
  function ggLose(){
    gg.lost = true; gg.running = false;
    clearInterval(gg.intervalId);
    const msg = document.getElementById('ggMsg');
    if(msg) msg.innerHTML = '💥 <strong style="color:#ef4444;">MIDNIGHT STRIKES.</strong> The Doomsday Clock hit zero. The planet is gone. '+(17-gg.completed.length)+' SDGs remained. Try again — the world needs you.';
    const btn = document.getElementById('ggActionBtn');
    if(btn){ btn.textContent='💥 The world ended. Play again?'; btn.style.color='#ef4444'; btn.style.borderColor='#ef4444'; btn.disabled=true; }
    const rw = document.getElementById('ggRestartWrap');
    if(rw) rw.style.display='block';
    showGlowToast('💥 Midnight struck. The planet was lost. Try again!');
  }

  /* ── Restart ── */
  window.ggRestart = function(){
    clearInterval(gg.intervalId);
    gg = { running:true, won:false, lost:false, secsLeft:TOTAL_SECS, currentGoal:0, completed:[], intervalId:null, globeAngle:0 };
    const btn = document.getElementById('ggActionBtn');
    if(btn){ btn.disabled=false; }
    const rw = document.getElementById('ggRestartWrap');
    if(rw) rw.style.display='none';
    buildGrid(); refreshGrid(); updateHealth(); updateActionBtn();
    const msg = document.getElementById('ggMsg');
    if(msg) msg.textContent='The planet stirs. You have 4:15 to save it. Complete the SDGs — in order!';
    startTimer();
  };

  /* ── Timer ── */
  function startTimer(){
    gg.intervalId = setInterval(()=>{
      if(!gg.running) return;
      gg.secsLeft--;
      gg.globeAngle += 0.02;
      updateTimeDisplay();
      drawGameClock();
      drawGlobe();
      if(gg.secsLeft <= 0) ggLose();
    }, 1000);
  }

  /* ── Render loop for smooth globe spin ── */
  function renderLoop(){
    if(gg.running && !gg.won && !gg.lost){ gg.globeAngle += 0.008; }
    drawGlobe();
    drawGameClock();
    requestAnimationFrame(renderLoop);
  }

  /* ── Init ── */
  function init(){
    buildGrid();
    refreshGrid();
    updateHealth();
    updateActionBtn();
    updateTimeDisplay();
    gg.running = true;
    startTimer();
    renderLoop();
  }

  // Add pulse keyframe CSS
  const style = document.createElement('style');
  style.textContent = `
    @keyframes ggPulseAnim{0%,100%{opacity:0.4;transform:translate(-50%,-50%) scale(0.9);}50%{opacity:1;transform:translate(-50%,-50%) scale(1.1);}}
    @keyframes ggPulseCell{0%,100%{box-shadow:none;}50%{box-shadow:0 0 10px rgba(255,255,255,0.6);}}
  `;
  document.head.appendChild(style);

  // Wait for DOM
  if(document.readyState==='loading'){
    document.addEventListener('DOMContentLoaded', init);
  } else {
    setTimeout(init, 100);
  }

})();
</script>
</body>
</html>
