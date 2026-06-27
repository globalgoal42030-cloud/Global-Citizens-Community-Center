<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<title>GCCC — Global Citizens Community Center (Unified)</title>
<link rel="preconnect" href="https://fonts.googleapis.com"/>
<link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300&family=DM+Serif+Display&family=Playfair+Display:wght@700;900&family=JetBrains+Mono:wght@400;500&family=DM+Sans:wght@300;400;500;700&family=Syne:wght@700;800&display=swap" rel="stylesheet"/>

<style>
/* ---------- master shell ---------- */
*,*::before,*::after{box-sizing:border-box;}
html,body{margin:0;padding:0;}
.gccc-panel{display:none;}
.gccc-panel.active{display:block;}
#gccc-master-nav{position:fixed;top:0;left:0;right:0;z-index:99999;display:flex;align-items:center;gap:6px;flex-wrap:wrap;padding:8px 14px;background:#0A1628;border-bottom:1px solid rgba(255,255,255,0.08);font-family:'Inter',Arial,sans-serif;}
#gccc-master-nav .gccc-brand{color:#00D4B4;font-weight:700;font-size:13px;letter-spacing:0.05em;margin-right:10px;white-space:nowrap;}
#gccc-master-nav button{background:transparent;border:1px solid rgba(255,255,255,0.18);color:#F0F4FF;font-size:12px;font-weight:600;padding:7px 12px;border-radius:5px;cursor:pointer;white-space:nowrap;font-family:'Inter',Arial,sans-serif;}
#gccc-master-nav button:hover{border-color:#00D4B4;color:#00D4B4;}
#gccc-master-nav button.active{background:#00D4B4;color:#050D1A;border-color:#00D4B4;}
#gccc-panels-wrap{padding-top:46px;}

/* ---------- merged & scoped page styles ---------- */
/* ===== index.html ===== */
#page-home *, #page-home *::before, #page-home *::after{box-sizing:border-box;margin:0;padding:0;}
#page-home{
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
#page-home{scroll-behavior:smooth;}
#page-home{font-family:'Inter',sans-serif;background:var(--navy);color:var(--chalk);overflow-x:hidden;line-height:1.6;}
#page-home #site-nav{
  position:fixed;top:0;left:0;right:0;z-index:900;
  display:flex;align-items:center;justify-content:space-between;
  padding:18px 48px;
  background:transparent;
  transition:background 0.4s,backdrop-filter 0.4s;
}
#page-home #site-nav.scrolled{background:rgba(5,13,26,0.92);backdrop-filter:blur(14px);}
#page-home .nav-logo-word{font-family:'Bebas Neue',sans-serif;font-size:22px;letter-spacing:0.08em;color:var(--teal);text-decoration:none;display:flex;align-items:center;gap:10px;}
#page-home .nav-logo-globe{width:34px;height:34px;border-radius:50%;background:rgba(0,212,180,0.15);border:1px solid rgba(0,212,180,0.3);display:flex;align-items:center;justify-content:center;font-size:17px;}
#page-home .nav-links{display:flex;gap:0;list-style:none;}
#page-home .nav-links a{color:rgba(240,244,255,0.65);font-size:13px;letter-spacing:0.03em;text-decoration:none;padding:0 14px;height:56px;display:flex;align-items:center;transition:color 0.2s,background 0.2s;}
#page-home .nav-links a:hover{color:var(--chalk);background:rgba(255,255,255,0.04);}
#page-home .nav-cta{
  padding:9px 22px;border-radius:4px;
  background:var(--teal);color:var(--navy)!important;
  font-size:13px;font-weight:700;letter-spacing:0.04em;
  text-decoration:none;transition:background 0.2s;
  height:auto!important;background:var(--teal)!important;margin-left:8px;
}
#page-home .nav-cta:hover{background:#00FFDF!important;}
#page-home #hero{
  min-height:100vh;display:flex;align-items:center;justify-content:center;
  position:relative;overflow:hidden;
  background:radial-gradient(ellipse 80% 60% at 50% 0%,rgba(0,212,180,0.12) 0%,transparent 70%),var(--navy);
  padding-top:80px;
}
#page-home .hero-bg-grid{
  position:absolute;inset:0;
  background-image:linear-gradient(rgba(0,212,180,0.06) 1px,transparent 1px),linear-gradient(90deg,rgba(0,212,180,0.06) 1px,transparent 1px);
  background-size:60px 60px;
  mask-image:radial-gradient(ellipse 80% 70% at 50% 0%,black 30%,transparent 100%);
}
#page-home .hero-inner{text-align:center;position:relative;z-index:2;max-width:900px;padding:0 24px;}
#page-home .hero-eyebrow{
  display:inline-flex;align-items:center;gap:8px;
  padding:6px 16px;border-radius:20px;
  border:1px solid rgba(0,212,180,0.3);background:rgba(0,212,180,0.08);
  font-size:11px;font-weight:600;letter-spacing:0.12em;text-transform:uppercase;
  color:var(--teal);margin-bottom:28px;
}
#page-home .hero-eyebrow-dot{width:6px;height:6px;border-radius:50%;background:var(--teal);animation:pulse__page-home 2s infinite;}
@keyframes pulse__page-home{0%,100%{opacity:1;transform:scale(1);}50%{opacity:0.5;transform:scale(0.8);}}
#page-home .hero-h1{
  font-family:'Bebas Neue',sans-serif;
  font-size:clamp(52px,9vw,110px);
  line-height:0.92;letter-spacing:0.02em;
  color:var(--chalk);margin-bottom:16px;
}
#page-home .hero-h1 em{font-style:normal;color:var(--teal);}
#page-home .hero-sub{
  font-size:clamp(15px,2vw,19px);color:var(--mist);font-weight:300;
  max-width:580px;margin:0 auto 48px;line-height:1.65;
}
#page-home .hero-ctas{display:flex;gap:14px;justify-content:center;flex-wrap:wrap;margin-bottom:64px;}
#page-home .btn-primary{
  padding:15px 36px;border-radius:4px;
  background:var(--teal);color:var(--navy);
  font-weight:700;font-size:15px;letter-spacing:0.04em;
  text-decoration:none;transition:all 0.2s;border:none;cursor:pointer;
}
#page-home .btn-primary:hover{background:#00FFDF;transform:translateY(-2px);}
#page-home .btn-outline{
  padding:15px 36px;border-radius:4px;
  background:transparent;color:var(--chalk);
  font-weight:500;font-size:15px;letter-spacing:0.04em;
  text-decoration:none;transition:all 0.2s;
  border:1px solid rgba(240,244,255,0.25);cursor:pointer;
}
#page-home .btn-outline:hover{border-color:var(--chalk);transform:translateY(-2px);}
#page-home .hero-stats{
  display:flex;gap:0;justify-content:center;
  border-top:1px solid rgba(255,255,255,0.08);
  padding-top:40px;
  flex-wrap:wrap;
}
#page-home .hero-stat{padding:0 40px;text-align:center;}
#page-home .hero-stat:not(:last-child){border-right:1px solid rgba(255,255,255,0.08);}
#page-home .hero-stat-num{font-family:'Bebas Neue',sans-serif;font-size:44px;color:var(--chalk);line-height:1;}
#page-home .hero-stat-num em{font-style:normal;color:var(--teal);}
#page-home .hero-stat-label{color:var(--mist);font-size:12px;margin-top:4px;letter-spacing:0.04em;}
#page-home .hero-globe-dome{
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
  animation:globeSpin__page-home 35s linear infinite;
  pointer-events:none;
}
#page-home .hero-globe-dome::before{
  content:'';position:absolute;inset:40px;border-radius:50%;
  border:1px dashed rgba(0,212,180,0.22);
}
#page-home .hero-globe-dome::after{
  content:'';position:absolute;inset:100px;border-radius:50%;
  border:1px dashed rgba(255,209,102,0.12);
}
@keyframes globeSpin__page-home{
  from{transform:translateY(-50%) rotate(0deg);}
  to{transform:translateY(-50%) rotate(360deg);}
}
#page-home .doomsday-banner{
  background:linear-gradient(135deg,#1a0000 0%,#0d0a0a 100%);
  border-top:4px solid #dc2626;
  border-bottom:2px solid #7f1d1d;
  padding:20px 48px;
}
#page-home .doomsday-inner{
  max-width:1280px;margin:0 auto;
  display:flex;align-items:center;gap:32px;flex-wrap:wrap;
}
#page-home .clock-display{display:flex;align-items:center;gap:18px;flex-shrink:0;}
#page-home .clock-dome-wrap{
  width:100px;height:100px;border-radius:50% 50% 50% 50% / 60% 60% 40% 40%;
  background:radial-gradient(circle at 40% 35%,#2a0a0a 0%,#0d0000 100%);
  border:2px solid #dc2626;
  box-shadow:0 0 18px rgba(220,38,38,0.4),inset 0 -4px 12px rgba(0,0,0,0.6);
  position:relative;overflow:hidden;flex-shrink:0;
}
#page-home .clock-dome-wrap canvas{display:block;}
#page-home .clock-countdown-wrap{display:flex;flex-direction:column;align-items:flex-start;gap:2px;}
#page-home .clock-countdown-label{font-size:9px;font-weight:700;letter-spacing:0.14em;text-transform:uppercase;color:#7f1d1d;}
#page-home .clock-countdown-digits{
  font-family:'JetBrains Mono',monospace;font-size:32px;font-weight:700;
  color:#ef4444;line-height:1;
  text-shadow:0 0 12px rgba(239,68,68,0.6);
  animation:digitFlicker__page-home 1s step-end infinite;
}
@keyframes digitFlicker__page-home{0%,100%{opacity:1;}50%{opacity:0.85;}}
#page-home .clock-countdown-sub{font-size:10px;color:#7f1d1d;letter-spacing:0.08em;text-transform:uppercase;}
#page-home .doomsday-info h3{color:#ef4444;font-size:16px;font-weight:700;letter-spacing:0.05em;text-transform:uppercase;}
#page-home .doomsday-info p{color:#fca5a5;font-size:14px;margin-top:4px;}
#page-home .doomsday-info span{color:#ef4444;font-weight:600;}
#page-home .doomsday-source{margin-left:auto;color:#7f1d1d;font-size:12px;}
#page-home .doomsday-source a{color:#f87171;text-decoration:none;}
#page-home .doomsday-source a:hover{text-decoration:underline;}
#page-home #ticker{
  background:var(--teal);padding:11px 0;overflow:hidden;
  border-top:1px solid rgba(0,212,180,0.4);border-bottom:1px solid rgba(0,212,180,0.4);
}
#page-home .ticker-track{display:flex;gap:0;white-space:nowrap;animation:ticker__page-home 28s linear infinite;}
#page-home .ticker-item{
  display:inline-flex;align-items:center;gap:10px;
  font-size:12px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;
  color:var(--navy);padding:0 40px;
}
#page-home .ticker-dot{width:5px;height:5px;border-radius:50%;background:var(--navy);opacity:0.5;}
@keyframes ticker__page-home{from{transform:translateX(0);}to{transform:translateX(-50%);}}
#page-home .section{padding:80px 48px;}
#page-home .section-inner{max-width:1280px;margin:0 auto;}
#page-home .section-label{
  font-size:11px;font-weight:700;letter-spacing:0.14em;text-transform:uppercase;
  color:var(--teal);margin-bottom:14px;
}
#page-home .section-title{
  font-family:'Bebas Neue',sans-serif;
  font-size:clamp(36px,5vw,58px);letter-spacing:0.03em;line-height:1;
  color:var(--chalk);margin-bottom:18px;
}
#page-home .section-sub{font-size:16px;color:var(--mist);line-height:1.75;max-width:600px;margin-bottom:48px;}
#page-home .divider{width:48px;height:3px;background:var(--teal);margin:16px 0 24px;}
#page-home #programs{background:var(--navy);}
#page-home .programs-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:2px;margin-top:48px;}
#page-home .program-card{
  background:var(--slate);padding:36px 32px;
  position:relative;overflow:hidden;cursor:pointer;
  transition:background 0.25s;
}
#page-home .program-card::before{
  content:'';position:absolute;top:0;left:0;right:0;height:3px;
  background:var(--card-accent,var(--teal));
  transform:scaleX(0);transition:transform 0.3s;transform-origin:left;
}
#page-home .program-card:hover{background:#16294A;}
#page-home .program-card:hover::before{transform:scaleX(1);}
#page-home .program-icon{font-size:32px;margin-bottom:18px;}
#page-home .program-title{font-family:'DM Serif Display',serif;font-size:22px;color:var(--chalk);margin-bottom:10px;line-height:1.2;}
#page-home .program-desc{font-size:14px;color:var(--mist);line-height:1.65;}
#page-home #impact{
  background:var(--navy2);
  border-top:1px solid rgba(240,244,255,0.05);
  border-bottom:1px solid rgba(240,244,255,0.05);
  padding:0;
}
#page-home .impact-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:1px;background:rgba(240,244,255,0.05);}
#page-home .impact-cell{background:var(--navy2);padding:56px 40px;text-align:center;}
#page-home .impact-num{font-family:'Bebas Neue',sans-serif;font-size:clamp(48px,6vw,80px);color:var(--chalk);line-height:1;}
#page-home .impact-num em{font-style:normal;color:var(--teal);}
#page-home .impact-label{font-size:13px;color:var(--mist);margin-top:8px;letter-spacing:0.04em;}
#page-home #goals{background:var(--slate);}
#page-home .sdg-grid{
  display:grid;grid-template-columns:repeat(auto-fill,minmax(90px,1fr));gap:8px;
}
#page-home .sdg-item{
  aspect-ratio:1;border-radius:6px;
  display:flex;flex-direction:column;align-items:center;justify-content:center;
  font-size:10px;font-weight:600;text-align:center;
  color:white;cursor:pointer;padding:8px;
  transition:transform 0.15s,box-shadow 0.15s;
  text-decoration:none;line-height:1.2;
}
#page-home .sdg-item:hover{transform:scale(1.07);box-shadow:0 4px 20px rgba(0,0,0,0.35);}
#page-home .sdg-num{font-size:20px;font-weight:700;margin-bottom:3px;}
#page-home .sdg-1{background:#e5243b;}
#page-home .sdg-2{background:#DDA63A;}
#page-home .sdg-3{background:#4C9F38;}
#page-home .sdg-4{background:#C5192D;}
#page-home .sdg-5{background:#FF3A21;}
#page-home .sdg-6{background:#26BDE2;}
#page-home .sdg-7{background:#FCC30B;color:#222;}
#page-home .sdg-8{background:#A21942;}
#page-home .sdg-9{background:#FD6925;}
#page-home .sdg-10{background:#DD1367;}
#page-home .sdg-11{background:#FD9D24;}
#page-home .sdg-12{background:#BF8B2E;}
#page-home .sdg-13{background:#3F7E44;}
#page-home .sdg-14{background:#0A97D9;}
#page-home .sdg-15{background:#56C02B;}
#page-home .sdg-16{background:#00689D;}
#page-home .sdg-17{background:#19486A;}
#page-home #data{background:var(--white);color:var(--text);}
#page-home #data .section-label{color:var(--electric-blue);}
#page-home #data .section-title{font-family:'Playfair Display',serif;font-size:clamp(28px,4vw,42px);font-weight:700;color:var(--text);letter-spacing:-0.01em;}
#page-home #data .section-sub{color:var(--text-muted);}
#page-home #data .divider{background:var(--electric-blue);}
#page-home .data-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:20px;}
#page-home .data-card{
  background:var(--light-bg);border-radius:12px;padding:28px 24px;
  border-left:4px solid transparent;transition:transform 0.15s;
}
#page-home .data-card:hover{transform:translateY(-2px);}
#page-home .data-card.blue{border-color:var(--electric-blue);}
#page-home .data-card.teal{border-color:#0d9488;}
#page-home .data-card.gold{border-color:#f59e0b;}
#page-home .data-card.sage{border-color:var(--sage);}
#page-home .data-card.crimson{border-color:var(--crimson);}
#page-home .data-card.sky{border-color:var(--sky);}
#page-home .data-num{font-family:'Playfair Display',serif;font-size:40px;font-weight:700;color:var(--text);line-height:1;}
#page-home .data-unit{font-size:20px;}
#page-home .data-label{font-size:14px;font-weight:500;color:var(--text);margin:8px 0 4px;}
#page-home .data-desc{font-size:12px;color:var(--text-muted);}
#page-home .data-source{font-size:11px;color:#94a3b8;margin-top:10px;}
#page-home #econ{background:var(--navy2);}
#page-home #econ .section-label{color:#60a5fa;}
#page-home #econ .section-title{font-family:'Playfair Display',serif;font-size:clamp(28px,4vw,42px);font-weight:700;color:white;letter-spacing:-0.01em;}
#page-home #econ .section-sub{color:#94a3b8;}
#page-home #econ .divider{background:#3b82f6;}
#page-home .econ-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:20px;}
#page-home .econ-card{
  background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);
  border-radius:12px;padding:28px;transition:border-color 0.2s;
}
#page-home .econ-card:hover{border-color:rgba(59,130,246,0.4);}
#page-home .econ-region{font-size:11px;font-weight:600;letter-spacing:0.08em;text-transform:uppercase;color:#60a5fa;margin-bottom:12px;}
#page-home .econ-metric{font-family:'JetBrains Mono',monospace;font-size:28px;font-weight:500;color:white;margin-bottom:4px;}
#page-home .econ-desc{font-size:13px;color:#64748b;margin-bottom:16px;}
#page-home .econ-bar-track{height:6px;background:rgba(255,255,255,0.06);border-radius:3px;margin-bottom:6px;}
#page-home .econ-bar-fill{height:100%;border-radius:3px;}
#page-home .econ-bar-label{display:flex;justify-content:space-between;font-size:11px;color:#475569;}
#page-home #threats{background:#0c0f1a;}
#page-home #threats .section-label{color:#ef4444;}
#page-home #threats .section-title{font-family:'Playfair Display',serif;font-size:clamp(28px,4vw,42px);font-weight:700;color:white;letter-spacing:-0.01em;}
#page-home #threats .section-sub{color:#94a3b8;}
#page-home #threats .divider{background:#ef4444;}
#page-home .threats-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:16px;}
#page-home .threat-card{
  background:rgba(220,38,38,0.05);border:1px solid rgba(220,38,38,0.15);
  border-radius:10px;padding:24px;position:relative;overflow:hidden;
}
#page-home .threat-card::before{content:'';position:absolute;top:0;left:0;right:0;height:3px;}
#page-home .threat-card.t1::before{background:#ef4444;}
#page-home .threat-card.t2::before{background:#f97316;}
#page-home .threat-card.t3::before{background:#eab308;}
#page-home .threat-card.t4::before{background:#3b82f6;}
#page-home .threat-icon{font-size:28px;margin-bottom:12px;}
#page-home .threat-level{font-size:10px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;margin-bottom:8px;}
#page-home .threat-card.t1 .threat-level{color:#ef4444;}
#page-home .threat-card.t2 .threat-level{color:#f97316;}
#page-home .threat-card.t3 .threat-level{color:#eab308;}
#page-home .threat-card.t4 .threat-level{color:#60a5fa;}
#page-home .threat-title{color:white;font-size:16px;font-weight:600;margin-bottom:8px;}
#page-home .threat-desc{color:#64748b;font-size:13px;line-height:1.6;}
#page-home .threat-mag{
  font-family:'JetBrains Mono',monospace;font-size:32px;font-weight:700;
  color:rgba(239,68,68,0.2);position:absolute;bottom:12px;right:16px;
}
#page-home #campaigns{background:#f0f9ff;color:var(--text);}
#page-home #campaigns .section-label{color:#0284c7;}
#page-home #campaigns .section-title{font-family:'Playfair Display',serif;font-size:clamp(28px,4vw,42px);font-weight:700;color:var(--text);letter-spacing:-0.01em;}
#page-home #campaigns .section-sub{color:var(--text-muted);}
#page-home #campaigns .divider{background:var(--electric-blue);}
#page-home .campaigns-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:24px;}
#page-home .campaign-card{
  background:white;border-radius:12px;overflow:hidden;
  border:1px solid #bae6fd;transition:transform 0.15s;
}
#page-home .campaign-card:hover{transform:translateY(-3px);}
#page-home .campaign-img{height:120px;display:flex;align-items:center;justify-content:center;font-size:48px;}
#page-home .campaign-body{padding:20px;}
#page-home .campaign-category{font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:#0284c7;margin-bottom:8px;}
#page-home .campaign-title{font-size:17px;font-weight:600;margin-bottom:8px;line-height:1.3;color:var(--text);}
#page-home .campaign-desc{font-size:14px;color:var(--text-muted);margin-bottom:16px;line-height:1.5;}
#page-home .campaign-progress{margin-bottom:12px;}
#page-home .progress-bar{height:8px;background:#e0f2fe;border-radius:4px;overflow:hidden;}
#page-home .progress-fill{height:100%;border-radius:4px;background:#0ea5e9;}
#page-home .progress-label{display:flex;justify-content:space-between;font-size:12px;color:#64748b;margin-top:4px;}
#page-home .campaign-footer{display:flex;justify-content:space-between;align-items:center;}
#page-home .sign-btn{
  background:#0284c7;color:white;border:none;border-radius:6px;
  padding:8px 18px;font-size:13px;font-weight:600;cursor:pointer;
  text-decoration:none;transition:background 0.2s;
}
#page-home .sign-btn:hover{background:#0369a1;}
#page-home .campaign-sigs{font-size:12px;color:#64748b;}
#page-home #action{background:white;color:var(--text);}
#page-home #action .section-label{color:var(--electric-blue);}
#page-home #action .section-title{font-family:'Playfair Display',serif;font-size:clamp(28px,4vw,42px);font-weight:700;color:var(--text);letter-spacing:-0.01em;}
#page-home #action .section-sub{color:var(--text-muted);}
#page-home #action .divider{background:var(--electric-blue);}
#page-home .action-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:24px;}
#page-home .action-card{border:1px solid var(--border);border-radius:12px;overflow:hidden;transition:box-shadow 0.2s;}
#page-home .action-card:hover{box-shadow:0 8px 32px rgba(0,0,0,0.1);}
#page-home .action-header{padding:24px;display:flex;align-items:flex-start;gap:16px;}
#page-home .action-icon{width:48px;height:48px;border-radius:10px;flex-shrink:0;display:flex;align-items:center;justify-content:center;font-size:22px;}
#page-home .action-title{font-size:17px;font-weight:600;margin-bottom:6px;color:var(--text);}
#page-home .action-desc{font-size:14px;color:var(--text-muted);line-height:1.5;}
#page-home .action-footer{padding:16px 24px;border-top:1px solid var(--border);background:#f8fafc;display:flex;align-items:center;justify-content:space-between;}
#page-home .action-tag{font-size:11px;font-weight:600;letter-spacing:0.06em;text-transform:uppercase;padding:4px 10px;border-radius:4px;}
#page-home .tag-blue{background:#dbeafe;color:#1e40af;}
#page-home .tag-green{background:#dcfce7;color:#166534;}
#page-home .tag-orange{background:#fef3c7;color:#92400e;}
#page-home .tag-red{background:#fee2e2;color:#991b1b;}
#page-home .tag-purple{background:#ede9fe;color:#5b21b6;}
#page-home .action-link{font-size:13px;font-weight:500;color:var(--electric-blue);text-decoration:none;display:flex;align-items:center;gap:4px;}
#page-home .action-link:hover{text-decoration:underline;}
#page-home #un{background:#001a33;}
#page-home #un .section-label{color:#60a5fa;}
#page-home #un .section-title{font-family:'Playfair Display',serif;font-size:clamp(28px,4vw,42px);font-weight:700;color:white;letter-spacing:-0.01em;}
#page-home #un .section-sub{color:#94a3b8;}
#page-home #un .divider{background:#3b82f6;}
#page-home .un-bodies{display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:16px;}
#page-home .un-body{
  background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.07);
  border-radius:10px;padding:22px;text-decoration:none;transition:background 0.2s,border-color 0.2s;
}
#page-home .un-body:hover{background:rgba(59,130,246,0.1);border-color:rgba(59,130,246,0.3);}
#page-home .un-acronym{font-family:'JetBrains Mono',monospace;font-size:13px;font-weight:500;color:#60a5fa;margin-bottom:8px;}
#page-home .un-name{font-size:14px;font-weight:600;color:white;margin-bottom:6px;}
#page-home .un-desc{font-size:12px;color:#64748b;line-height:1.5;}
#page-home #summit{
  background:linear-gradient(135deg,var(--navy2) 0%,var(--navy) 100%);
  padding:100px 48px;position:relative;overflow:hidden;
}
#page-home #summit::before{
  content:'';position:absolute;right:-200px;top:-200px;
  width:600px;height:600px;border-radius:50%;
  background:radial-gradient(circle,rgba(255,209,102,0.08) 0%,transparent 70%);
}
#page-home .summit-inner{display:grid;grid-template-columns:1fr 1fr;gap:80px;align-items:center;max-width:1200px;margin:0 auto;}
#page-home .summit-tag{
  display:inline-block;padding:5px 14px;border-radius:3px;
  background:rgba(255,209,102,0.12);color:var(--gold);
  font-size:11px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;margin-bottom:22px;
}
#page-home .summit-h2{font-family:'Bebas Neue',sans-serif;font-size:clamp(42px,5vw,68px);letter-spacing:0.02em;line-height:1;color:var(--chalk);margin-bottom:22px;}
#page-home .summit-h2 em{font-style:normal;color:var(--gold);}
#page-home .summit-body{font-size:16px;color:var(--mist);line-height:1.75;margin-bottom:32px;}
#page-home .summit-cards{display:flex;flex-direction:column;gap:14px;}
#page-home .summit-card{
  background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);
  border-radius:8px;padding:20px 22px;display:flex;gap:16px;align-items:flex-start;
}
#page-home .summit-card-icon{font-size:24px;flex-shrink:0;margin-top:2px;}
#page-home .summit-card-title{font-weight:600;font-size:14px;color:var(--chalk);margin-bottom:4px;}
#page-home .summit-card-desc{font-size:13px;color:var(--mist);line-height:1.55;}
#page-home #community{background:white;color:var(--text);}
#page-home #community .section-label{color:var(--electric-blue);}
#page-home #community .section-title{font-family:'Playfair Display',serif;font-size:clamp(28px,4vw,42px);font-weight:700;color:var(--text);letter-spacing:-0.01em;}
#page-home #community .section-sub{color:var(--text-muted);}
#page-home #community .divider{background:var(--electric-blue);}
#page-home .comm-grid{display:grid;grid-template-columns:1fr 1fr;gap:48px;align-items:start;}
#page-home .comm-list{list-style:none;display:flex;flex-direction:column;gap:16px;}
#page-home .comm-list li{display:flex;align-items:flex-start;gap:14px;font-size:15px;color:var(--text-muted);}
#page-home .comm-icon{width:36px;height:36px;border-radius:8px;flex-shrink:0;background:#dbeafe;display:flex;align-items:center;justify-content:center;font-size:17px;margin-top:2px;}
#page-home .comm-icon.red{background:#fee2e2;}
#page-home .comm-icon.green{background:#dcfce7;}
#page-home .comm-icon.purple{background:#ede9fe;}
#page-home .comm-events{display:flex;flex-direction:column;gap:12px;}
#page-home .event-item{background:var(--light-bg);border-radius:10px;padding:18px 20px;display:flex;gap:16px;align-items:flex-start;border-left:4px solid var(--electric-blue);}
#page-home .event-date{text-align:center;flex-shrink:0;}
#page-home .event-month{font-size:10px;font-weight:700;text-transform:uppercase;color:var(--electric-blue);}
#page-home .event-day{font-size:26px;font-weight:700;color:var(--text);line-height:1;}
#page-home .event-title{font-size:14px;font-weight:600;margin-bottom:4px;color:var(--text);}
#page-home .event-sub{font-size:12px;color:var(--text-muted);}
#page-home #partners{background:#f8fafc;padding:48px;}
#page-home .partners-inner{max-width:1280px;margin:0 auto;}
#page-home .partners-label{text-align:center;font-size:12px;font-weight:600;letter-spacing:0.1em;text-transform:uppercase;color:#94a3b8;margin-bottom:28px;}
#page-home .partners-grid{display:flex;gap:40px;flex-wrap:wrap;justify-content:center;align-items:center;}
#page-home .partner-logo{
  font-family:'JetBrains Mono',monospace;font-size:13px;font-weight:500;
  color:#94a3b8;padding:8px 16px;border-radius:6px;
  border:1px solid #e2e8f0;background:white;transition:color 0.2s,border-color 0.2s;
  text-decoration:none;
}
#page-home .partner-logo:hover{color:var(--electric-blue);border-color:var(--electric-blue);}
#page-home #cta{background:var(--electric-blue);padding:64px 48px;}
#page-home .cta-inner{max-width:600px;margin:0 auto;text-align:center;}
#page-home .cta-inner h2{font-family:'Playfair Display',serif;font-size:36px;font-weight:700;color:white;margin-bottom:12px;}
#page-home .cta-inner p{color:rgba(255,255,255,0.8);font-size:16px;margin-bottom:28px;}
#page-home .email-form{display:flex;gap:8px;max-width:480px;margin:0 auto;flex-wrap:wrap;justify-content:center;}
#page-home .email-input{flex:1;min-width:220px;padding:13px 18px;border:none;border-radius:6px;font-size:15px;font-family:'Inter',sans-serif;outline:none;}
#page-home .email-input:focus{box-shadow:0 0 0 3px rgba(255,255,255,0.3);}
#page-home .email-submit{background:var(--navy);color:white;border:none;padding:13px 24px;border-radius:6px;font-size:15px;font-weight:600;cursor:pointer;font-family:'Inter',sans-serif;transition:background 0.2s;}
#page-home .email-submit:hover{background:#0d1f3c;}
#page-home footer{background:var(--navy2);padding:60px 48px 32px;border-top:1px solid rgba(240,244,255,0.06);}
#page-home .footer-grid{display:grid;grid-template-columns:2fr 1fr 1fr 1fr;gap:48px;max-width:1200px;margin:0 auto 48px;}
#page-home .footer-brand-word{font-family:'Bebas Neue',sans-serif;font-size:28px;color:var(--teal);letter-spacing:0.08em;margin-bottom:12px;}
#page-home .footer-tagline{font-size:13px;color:var(--mist);line-height:1.65;max-width:260px;}
#page-home .footer-col h4{font-size:11px;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;color:var(--mist);margin-bottom:16px;}
#page-home .footer-col a{display:block;font-size:13px;color:rgba(240,244,255,0.5);text-decoration:none;margin-bottom:10px;transition:color 0.2s;}
#page-home .footer-col a:hover{color:var(--chalk);}
#page-home .footer-bottom{max-width:1200px;margin:0 auto;padding-top:24px;border-top:1px solid rgba(240,244,255,0.06);display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:12px;}
#page-home .footer-copy{font-size:12px;color:rgba(240,244,255,0.3);}
#page-home .footer-sdg-badge{font-size:11px;font-weight:700;letter-spacing:0.08em;color:var(--teal);opacity:0.6;}
#page-home #rooms{background:var(--navy);}
#page-home .rooms-intro{max-width:680px;margin-bottom:56px;}
#page-home .rooms-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:2px;}
#page-home .room-card{
  position:relative;overflow:hidden;
  background:var(--slate);padding:40px 36px;
  transition:background 0.25s;cursor:pointer;
}
#page-home .room-card::after{
  content:'';position:absolute;bottom:0;left:0;right:0;height:3px;
  background:var(--room-accent,var(--teal));
  transform:scaleX(0);transition:transform 0.3s;transform-origin:left;
}
#page-home .room-card:hover{background:#16294A;}
#page-home .room-card:hover::after{transform:scaleX(1);}
#page-home .room-emoji{font-size:36px;margin-bottom:20px;}
#page-home .room-name{font-family:'DM Serif Display',serif;font-size:22px;color:var(--chalk);margin-bottom:10px;line-height:1.2;}
#page-home .room-desc{font-size:14px;color:var(--mist);line-height:1.65;margin-bottom:20px;}
#page-home .room-link{
  display:inline-flex;align-items:center;gap:6px;
  font-size:12px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;
  color:var(--room-accent,var(--teal));text-decoration:none;
  transition:gap 0.2s;
}
#page-home .room-link:hover{gap:10px;}
#page-home #membership{background:var(--navy2);}
#page-home #membership .section-label{color:var(--teal);}
#page-home .membership-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:20px;margin-top:48px;}
#page-home .mem-card{
  background:var(--slate);border-radius:2px;padding:36px 32px;
  position:relative;overflow:hidden;transition:transform 0.2s;
  border-top:3px solid var(--mem-accent,var(--teal));
}
#page-home .mem-card:hover{transform:translateY(-4px);}
#page-home .mem-card.featured{
  background:var(--teal);color:var(--navy);
  border-top-color:var(--gold);
}
#page-home .mem-badge{
  display:inline-block;font-size:10px;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;
  padding:3px 10px;border-radius:20px;margin-bottom:20px;
  background:rgba(255,255,255,0.12);color:var(--chalk);
}
#page-home .mem-card.featured .mem-badge{background:rgba(5,13,26,0.15);color:var(--navy);}
#page-home .mem-tier{font-family:'Bebas Neue',sans-serif;font-size:28px;letter-spacing:0.06em;color:var(--chalk);margin-bottom:6px;}
#page-home .mem-card.featured .mem-tier{color:var(--navy);}
#page-home .mem-tagline{font-size:13px;color:var(--mist);margin-bottom:24px;line-height:1.5;}
#page-home .mem-card.featured .mem-tagline{color:rgba(5,13,26,0.7);}
#page-home .mem-price{font-family:'Bebas Neue',sans-serif;font-size:48px;letter-spacing:0.02em;color:var(--chalk);line-height:1;}
#page-home .mem-price sup{font-size:22px;vertical-align:top;margin-top:8px;}
#page-home .mem-price sub{font-size:14px;font-family:'Inter',sans-serif;font-weight:400;letter-spacing:0em;}
#page-home .mem-card.featured .mem-price{color:var(--navy);}
#page-home .mem-divider{height:1px;background:rgba(255,255,255,0.1);margin:24px 0;}
#page-home .mem-card.featured .mem-divider{background:rgba(5,13,26,0.15);}
#page-home .mem-perks{list-style:none;display:flex;flex-direction:column;gap:10px;margin-bottom:32px;}
#page-home .mem-perk{display:flex;align-items:flex-start;gap:10px;font-size:13px;color:var(--mist);line-height:1.5;}
#page-home .mem-card.featured .mem-perk{color:rgba(5,13,26,0.8);}
#page-home .mem-perk::before{content:'✓';color:var(--teal);font-weight:700;flex-shrink:0;margin-top:1px;}
#page-home .mem-card.featured .mem-perk::before{color:var(--navy);}
#page-home .mem-btn{
  display:block;text-align:center;padding:13px 20px;border-radius:4px;
  font-size:13px;font-weight:700;letter-spacing:0.06em;text-transform:uppercase;
  text-decoration:none;transition:all 0.2s;
  background:rgba(0,212,180,0.15);color:var(--teal);
  border:1px solid rgba(0,212,180,0.3);
}
#page-home .mem-btn:hover{background:var(--teal);color:var(--navy);}
#page-home .mem-card.featured .mem-btn{background:var(--navy);color:var(--teal);border-color:var(--navy);}
#page-home .mem-card.featured .mem-btn:hover{background:#0d1f3c;}
#page-home #sponsorship{background:var(--slate);}
#page-home #sponsorship .section-label{color:var(--gold);}
#page-home .sponsor-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:20px;margin-top:48px;}
#page-home .sponsor-card{
  background:var(--navy2);padding:36px 32px;border-radius:2px;
  border-top:3px solid var(--sp-accent,var(--gold));
  transition:transform 0.2s;
}
#page-home .sponsor-card:hover{transform:translateY(-4px);}
#page-home .sp-medal{font-size:32px;margin-bottom:16px;}
#page-home .sp-tier{font-family:'Bebas Neue',sans-serif;font-size:28px;letter-spacing:0.06em;color:var(--chalk);margin-bottom:4px;}
#page-home .sp-price{font-family:'Bebas Neue',sans-serif;font-size:40px;color:var(--sp-accent,var(--gold));line-height:1;margin-bottom:20px;}
#page-home .sp-divider{height:1px;background:rgba(255,255,255,0.08);margin:20px 0;}
#page-home .sp-perks{list-style:none;display:flex;flex-direction:column;gap:9px;margin-bottom:28px;}
#page-home .sp-perk{display:flex;align-items:flex-start;gap:10px;font-size:13px;color:var(--mist);line-height:1.5;}
#page-home .sp-perk::before{content:'→';color:var(--sp-accent,var(--gold));font-weight:700;flex-shrink:0;}
#page-home .sp-btn{
  display:block;text-align:center;padding:12px 20px;border-radius:4px;
  font-size:13px;font-weight:700;letter-spacing:0.06em;text-transform:uppercase;
  text-decoration:none;transition:all 0.2s;
  border:1px solid var(--sp-accent,var(--gold));color:var(--sp-accent,var(--gold));
  background:transparent;
}
#page-home .sp-btn:hover{background:var(--sp-accent,var(--gold));color:var(--navy);}
#page-home #donate{background:var(--navy);}
#page-home #donate .section-label{color:var(--teal);}
#page-home .donate-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:16px;margin-top:48px;}
#page-home .donate-card{
  background:var(--slate);padding:28px 24px;border-radius:2px;
  border-left:3px solid var(--d-accent,var(--teal));
  transition:transform 0.2s;
}
#page-home .donate-card:hover{transform:translateY(-3px);}
#page-home .donate-amount{font-family:'Bebas Neue',sans-serif;font-size:48px;color:var(--chalk);line-height:1;margin-bottom:8px;}
#page-home .donate-amount em{font-style:normal;color:var(--d-accent,var(--teal));}
#page-home .donate-impact{font-size:14px;font-weight:600;color:var(--chalk);margin-bottom:8px;}
#page-home .donate-desc{font-size:13px;color:var(--mist);line-height:1.55;margin-bottom:20px;}
#page-home .donate-extras{list-style:none;display:flex;flex-direction:column;gap:6px;margin-bottom:24px;}
#page-home .donate-extra{font-size:12px;color:var(--mist);display:flex;align-items:center;gap:8px;}
#page-home .donate-extra::before{content:'·';color:var(--d-accent,var(--teal));font-size:18px;line-height:1;}
#page-home .donate-btn{
  display:block;text-align:center;padding:10px 16px;border-radius:4px;
  font-size:12px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;
  text-decoration:none;transition:all 0.2s;
  background:rgba(0,212,180,0.12);color:var(--teal);border:1px solid rgba(0,212,180,0.25);
}
#page-home .donate-btn:hover{background:var(--teal);color:var(--navy);}
#page-home #start-center{
  background:linear-gradient(135deg,var(--navy2) 0%,var(--slate) 100%);
  padding:80px 48px;position:relative;overflow:hidden;
}
#page-home #start-center::before{
  content:'';position:absolute;left:-200px;bottom:-200px;
  width:500px;height:500px;border-radius:50%;
  background:radial-gradient(circle,rgba(0,212,180,0.07) 0%,transparent 70%);
}
#page-home .start-inner{display:grid;grid-template-columns:1fr 1fr;gap:72px;align-items:center;max-width:1200px;margin:0 auto;}
#page-home .start-label{font-size:11px;font-weight:700;letter-spacing:0.14em;text-transform:uppercase;color:var(--teal);margin-bottom:14px;}
#page-home .start-h2{font-family:'Bebas Neue',sans-serif;font-size:clamp(42px,5vw,68px);letter-spacing:0.02em;line-height:1;color:var(--chalk);margin-bottom:20px;}
#page-home .start-h2 em{font-style:normal;color:var(--teal);}
#page-home .start-body{font-size:16px;color:var(--mist);line-height:1.75;margin-bottom:32px;}
#page-home .start-steps{display:flex;flex-direction:column;gap:16px;}
#page-home .start-step{
  background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);
  border-radius:8px;padding:20px 22px;display:flex;gap:16px;align-items:flex-start;
}
#page-home .start-step-num{
  font-family:'Bebas Neue',sans-serif;font-size:32px;color:var(--teal);
  line-height:1;flex-shrink:0;min-width:32px;
}
#page-home .start-step-title{font-weight:600;font-size:14px;color:var(--chalk);margin-bottom:4px;}
#page-home .start-step-desc{font-size:13px;color:var(--mist);line-height:1.55;}
#page-home .gb-label{font-size:11px;font-weight:700;letter-spacing:0.14em;text-transform:uppercase;color:#e879f9;margin-bottom:12px;}
#page-home .gb-intro{background:rgba(232,121,249,0.07);border:1px solid rgba(232,121,249,0.2);border-radius:12px;padding:20px 24px;margin-bottom:36px;display:flex;align-items:flex-start;gap:16px;}
#page-home .gb-intro-icon{font-size:32px;flex-shrink:0;}
#page-home .gb-intro-text{font-size:14px;color:#8A9BBE;line-height:1.7;}
#page-home .gb-intro-text strong{color:var(--chalk);display:block;font-size:15px;margin-bottom:6px;font-weight:500;}
#page-home .gb-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:16px;margin-bottom:32px;}
#page-home .gb-card{border-radius:12px;overflow:hidden;background:rgba(255,255,255,0.04);border:1px solid rgba(232,121,249,0.15);}
#page-home .gb-header{padding:20px 20px 16px;text-align:center;}
#page-home .gb-emoji{font-size:36px;display:block;margin-bottom:10px;}
#page-home .gb-badge{display:inline-block;font-size:10px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;padding:3px 12px;border-radius:20px;margin-bottom:8px;}
#page-home .gb-name{font-size:20px;font-weight:700;color:var(--chalk);margin-bottom:4px;letter-spacing:0.04em;}
#page-home .gb-tagline{font-size:12px;line-height:1.5;}
#page-home .gb-body{padding:0 20px 20px;}
#page-home .gb-hr{height:1px;background:rgba(255,255,255,0.07);margin:0 0 14px;}
#page-home .gb-items-lbl{font-size:10px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:rgba(255,255,255,0.3);margin-bottom:10px;}
#page-home .gb-items{list-style:none;display:flex;flex-direction:column;gap:6px;margin-bottom:18px;}
#page-home .gb-item{display:flex;align-items:flex-start;gap:8px;font-size:12px;color:#8A9BBE;line-height:1.4;}
#page-home .gb-dot{width:5px;height:5px;border-radius:50%;flex-shrink:0;margin-top:4px;}
#page-home .gb-btn{display:block;text-align:center;padding:10px 14px;border-radius:6px;font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;cursor:pointer;width:100%;transition:all 0.2s;}
#page-home .gb-woman .gb-header{background:linear-gradient(135deg,rgba(244,63,94,0.18),rgba(232,121,249,0.12));}
#page-home .gb-woman .gb-badge{background:rgba(244,63,94,0.15);color:#fb7185;}
#page-home .gb-woman .gb-tagline{color:#fda4af;}
#page-home .gb-woman .gb-dot{background:#fb7185;}
#page-home .gb-woman .gb-btn{background:rgba(244,63,94,0.15);color:#fb7185;border:1px solid rgba(244,63,94,0.3);}
#page-home .gb-man .gb-header{background:linear-gradient(135deg,rgba(59,130,246,0.18),rgba(99,102,241,0.12));}
#page-home .gb-man .gb-badge{background:rgba(59,130,246,0.15);color:#60a5fa;}
#page-home .gb-man .gb-tagline{color:#93c5fd;}
#page-home .gb-man .gb-dot{background:#60a5fa;}
#page-home .gb-man .gb-btn{background:rgba(59,130,246,0.15);color:#60a5fa;border:1px solid rgba(59,130,246,0.3);}
#page-home .gb-girl .gb-header{background:linear-gradient(135deg,rgba(20,184,166,0.18),rgba(52,211,153,0.12));}
#page-home .gb-girl .gb-badge{background:rgba(20,184,166,0.15);color:#2dd4bf;}
#page-home .gb-girl .gb-tagline{color:#99f6e4;}
#page-home .gb-girl .gb-dot{background:#2dd4bf;}
#page-home .gb-girl .gb-btn{background:rgba(20,184,166,0.15);color:#2dd4bf;border:1px solid rgba(20,184,166,0.3);}
#page-home .gb-boy .gb-header{background:linear-gradient(135deg,rgba(245,158,11,0.18),rgba(251,146,60,0.12));}
#page-home .gb-boy .gb-badge{background:rgba(245,158,11,0.15);color:#fbbf24;}
#page-home .gb-boy .gb-tagline{color:#fde68a;}
#page-home .gb-boy .gb-dot{background:#fbbf24;}
#page-home .gb-boy .gb-btn{background:rgba(245,158,11,0.15);color:#fbbf24;border:1px solid rgba(245,158,11,0.3);}
#page-home .gb-cta{background:rgba(232,121,249,0.07);border:1px solid rgba(232,121,249,0.2);border-radius:12px;padding:28px;text-align:center;}
#page-home .gb-cta h3{font-size:24px;font-weight:700;color:var(--chalk);margin-bottom:8px;letter-spacing:0.04em;}
#page-home .gb-cta p{font-size:14px;color:#8A9BBE;margin-bottom:20px;max-width:480px;margin-left:auto;margin-right:auto;}
#page-home .gb-cta-btn{display:inline-block;padding:13px 28px;border-radius:4px;background:#e879f9;color:#0d0015;font-weight:700;font-size:13px;letter-spacing:0.04em;}
#page-home .don-tabs{display:flex;gap:10px;flex-wrap:wrap;margin-bottom:32px;}
#page-home .don-tab{padding:9px 18px;border-radius:6px;font-size:13px;font-weight:700;letter-spacing:0.04em;cursor:pointer;border:1px solid rgba(240,244,255,0.15);color:#8A9BBE;background:transparent;font-family:'Inter',sans-serif;transition:all 0.2s;}
#page-home .don-tab.active{background:#00D4B4;color:#050D1A;border-color:#00D4B4;}
#page-home .don-panel{display:none;}
#page-home .don-panel.active{display:grid;grid-template-columns:repeat(4,1fr);gap:14px;}
#page-home .don-card{background:#122040;padding:24px 20px;border-left:3px solid var(--da,#00D4B4);}
#page-home .don-amt{font-size:40px;font-weight:700;color:var(--chalk);line-height:1;margin-bottom:6px;font-family:'Georgia',serif;}
#page-home .don-amt em{font-style:normal;color:var(--da,#00D4B4);}
#page-home .don-impact{font-size:13px;font-weight:600;color:var(--chalk);margin-bottom:6px;}
#page-home .don-desc{font-size:12px;color:#8A9BBE;line-height:1.55;margin-bottom:12px;}
#page-home .don-extras{list-style:none;display:flex;flex-direction:column;gap:5px;margin-bottom:18px;}
#page-home .don-extra{font-size:11px;color:#8A9BBE;display:flex;align-items:center;gap:6px;}
#page-home .don-extra::before{content:'·';font-size:16px;line-height:1;color:var(--da,#00D4B4);}
#page-home .don-btn{display:block;text-align:center;padding:9px 14px;font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;background:rgba(0,212,180,0.12);color:#00D4B4;border:1px solid rgba(0,212,180,0.25);cursor:pointer;transition:all 0.2s;}
#page-home .don-btn:hover{background:rgba(0,212,180,0.25);}
#page-home .strip-donate-btn{background:transparent;border:1.5px solid rgba(255,255,255,0.2);color:var(--chalk);padding:0.6rem 1.5rem;font-family:'Inter',sans-serif;font-weight:600;font-size:0.85rem;cursor:pointer;transition:all 0.2s;}
#page-home .strip-donate-btn:hover, #page-home .strip-donate-btn.active{background:var(--gold);border-color:var(--gold);color:var(--navy);}
#page-home .glow-toast{position:fixed;bottom:2rem;right:2rem;background:var(--teal);color:var(--navy);padding:1rem 1.5rem;font-weight:700;font-size:0.85rem;z-index:9999;transform:translateY(200%);transition:transform 0.4s;border-radius:4px;}
#page-home .glow-toast.show{transform:translateY(0);}
#page-home .nav-hamburger{
  display:none;flex-direction:column;justify-content:center;gap:5px;
  background:none;border:none;cursor:pointer;padding:6px;z-index:1000;
}
#page-home .nav-hamburger span{display:block;width:24px;height:2px;background:var(--chalk);border-radius:2px;transition:all 0.3s;}
#page-home .nav-hamburger.open span:nth-child(1){transform:translateY(7px) rotate(45deg);}
#page-home .nav-hamburger.open span:nth-child(2){opacity:0;}
#page-home .nav-hamburger.open span:nth-child(3){transform:translateY(-7px) rotate(-45deg);}
@media(max-width:900px){#page-home #site-nav{padding:16px 24px;}
#page-home .nav-links{display:none;flex-direction:column;position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(5,13,26,0.98);backdrop-filter:blur(16px);z-index:800;padding:80px 32px 40px;gap:4px;overflow-y:auto;}
#page-home .nav-links.open{display:flex;}
#page-home .nav-links a{height:auto;padding:14px 0;font-size:16px;border-bottom:1px solid rgba(255,255,255,0.07);}
#page-home .nav-cta{border:none;background:none!important;color:var(--teal)!important;padding:14px 0!important;margin:0!important;}
#page-home .nav-hamburger{display:flex;}
#page-home .section{padding:64px 24px;}
#page-home #summit{padding:72px 24px;}
#page-home .summit-inner{grid-template-columns:1fr;gap:48px;}
#page-home .start-inner{grid-template-columns:1fr;gap:48px;}
#page-home #start-center{padding:64px 24px;}
#page-home .impact-grid{grid-template-columns:repeat(2,1fr);}
#page-home .comm-grid{grid-template-columns:1fr;}
#page-home .footer-grid{grid-template-columns:1fr 1fr;}
#page-home #partners{padding:40px 24px;}
#page-home #cta{padding:48px 24px;}
#page-home .gb-grid{grid-template-columns:1fr 1fr;}
#page-home .don-panel.active{grid-template-columns:1fr 1fr;}
#page-home .hero-globe-dome{width:300px;height:300px;right:-60px;opacity:0.35;}
#page-home .doomsday-banner{padding:20px 24px;}
#page-home footer{padding:48px 24px 28px;}}
@media(max-width:600px){#page-home .hero-stat{padding:0 20px;}
#page-home .impact-grid{grid-template-columns:repeat(2,1fr);}
#page-home .footer-grid{grid-template-columns:1fr;}
#page-home .sdg-grid{grid-template-columns:repeat(6,1fr);}
#page-home .sdg-item{font-size:8px;}}
@media(prefers-reduced-motion:reduce){#page-home .ticker-track, #page-home .clock-ring, #page-home .hero-eyebrow-dot{animation:none!important;transition:none!important;}}
#page-home #sustainability-hour{
  background:linear-gradient(160deg,#020f04 0%,#051a09 40%,#031205 100%);
  position:relative;overflow:hidden;
  border-top:4px solid #4ade80;
  border-bottom:2px solid #166534;
}
#page-home #sustainability-hour::before{
  content:'';position:absolute;inset:0;
  background-image:radial-gradient(ellipse 80% 50% at 50% -10%,rgba(74,222,128,0.18) 0%,transparent 65%);
  pointer-events:none;
}
#page-home .sh-pulse-ring{
  position:absolute;top:-140px;right:-140px;
  width:600px;height:600px;border-radius:50%;
  border:1px solid rgba(74,222,128,0.07);
  animation:shRingPulse__page-home 4s ease-in-out infinite;
  pointer-events:none;
}
#page-home .sh-pulse-ring:nth-child(2){width:400px;height:400px;top:-60px;right:-60px;animation-delay:1.2s;border-color:rgba(74,222,128,0.11);}
#page-home .sh-pulse-ring:nth-child(3){width:220px;height:220px;top:30px;right:30px;animation-delay:2.4s;border-color:rgba(74,222,128,0.15);}
@keyframes shRingPulse__page-home{0%,100%{opacity:0.4;transform:scale(1);}50%{opacity:1;transform:scale(1.04);}}
#page-home .sh-launch-banner{
  background:linear-gradient(90deg,#166534,#14532d);
  border-bottom:1px solid #15803d;
  padding:14px 48px;
  display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:12px;
}
#page-home .sh-launch-tag{
  display:inline-flex;align-items:center;gap:10px;
  font-size:11px;font-weight:800;letter-spacing:0.18em;text-transform:uppercase;color:#4ade80;
}
#page-home .sh-launch-dot{
  width:8px;height:8px;border-radius:50%;background:#4ade80;
  animation:pulse__page-home 1.5s infinite;
}
#page-home .sh-launch-call{
  font-size:13px;font-weight:700;color:#bbf7d0;letter-spacing:0.06em;text-transform:uppercase;
}
#page-home .sh-inner{max-width:1280px;margin:0 auto;padding:80px 48px;position:relative;z-index:2;}
#page-home .sh-eyebrow{
  display:inline-flex;align-items:center;gap:8px;
  padding:6px 18px;border-radius:20px;
  border:1px solid rgba(74,222,128,0.35);background:rgba(74,222,128,0.09);
  font-size:11px;font-weight:700;letter-spacing:0.14em;text-transform:uppercase;
  color:#4ade80;margin-bottom:28px;
}
#page-home .sh-headline{
  font-family:'Bebas Neue',sans-serif;
  font-size:clamp(60px,9vw,120px);
  line-height:0.88;letter-spacing:0.02em;
  color:#f0f4ff;margin-bottom:8px;
}
#page-home .sh-headline em{font-style:normal;color:#4ade80;}
#page-home .sh-sub-headline{
  font-family:'Bebas Neue',sans-serif;
  font-size:clamp(22px,3.5vw,38px);
  letter-spacing:0.06em;color:#86efac;
  margin-bottom:32px;text-transform:uppercase;
}
#page-home .sh-lead{
  font-size:clamp(16px,2vw,20px);color:#a7f3d0;font-weight:300;
  max-width:760px;line-height:1.75;margin-bottom:48px;
}
#page-home .sh-lead strong{color:#4ade80;font-weight:700;}
#page-home .sh-urgency{
  display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:2px;
  margin-bottom:64px;background:rgba(74,222,128,0.04);
  border:1px solid rgba(74,222,128,0.12);border-radius:4px;overflow:hidden;
}
#page-home .sh-urg-cell{
  padding:32px 28px;background:rgba(3,18,5,0.7);
  border-right:1px solid rgba(74,222,128,0.08);
  transition:background 0.2s;
}
#page-home .sh-urg-cell:last-child{border-right:none;}
#page-home .sh-urg-cell:hover{background:rgba(74,222,128,0.06);}
#page-home .sh-urg-icon{font-size:28px;margin-bottom:12px;}
#page-home .sh-urg-num{
  font-family:'Bebas Neue',sans-serif;font-size:44px;color:#4ade80;line-height:1;margin-bottom:4px;
}
#page-home .sh-urg-label{font-size:12px;color:#6ee7b7;letter-spacing:0.04em;font-weight:600;margin-bottom:6px;text-transform:uppercase;}
#page-home .sh-urg-desc{font-size:13px;color:#52716b;line-height:1.55;}
#page-home .sh-body{display:grid;grid-template-columns:1.1fr 0.9fr;gap:64px;margin-bottom:72px;align-items:start;}
#page-home .sh-what h3{
  font-family:'DM Serif Display',serif;
  font-size:clamp(24px,3vw,34px);color:#f0f4ff;
  margin-bottom:20px;line-height:1.2;
}
#page-home .sh-what p{font-size:15px;color:#86efac;line-height:1.8;margin-bottom:18px;}
#page-home .sh-activities{list-style:none;display:flex;flex-direction:column;gap:12px;margin:24px 0 32px;}
#page-home .sh-activity{
  display:flex;align-items:flex-start;gap:14px;
  background:rgba(74,222,128,0.05);border:1px solid rgba(74,222,128,0.12);
  padding:14px 18px;border-radius:6px;font-size:14px;color:#a7f3d0;line-height:1.55;
  transition:border-color 0.2s,background 0.2s;
}
#page-home .sh-activity:hover{border-color:rgba(74,222,128,0.3);background:rgba(74,222,128,0.09);}
#page-home .sh-act-icon{font-size:22px;flex-shrink:0;margin-top:1px;}
#page-home .sh-act-text strong{color:#4ade80;display:block;font-size:13px;font-weight:700;letter-spacing:0.04em;text-transform:uppercase;margin-bottom:3px;}
#page-home .sh-who{position:relative;}
#page-home .sh-who h3{
  font-family:'DM Serif Display',serif;
  font-size:clamp(22px,2.5vw,30px);color:#f0f4ff;
  margin-bottom:20px;line-height:1.2;
}
#page-home .sh-sectors{display:flex;flex-direction:column;gap:10px;}
#page-home .sh-sector{
  display:flex;align-items:center;gap:16px;
  padding:16px 20px;border-radius:6px;
  background:rgba(0,0,0,0.4);border-left:4px solid var(--sc,#4ade80);
  font-size:14px;color:#d1fae5;font-weight:600;
  transition:transform 0.15s;
}
#page-home .sh-sector:hover{transform:translateX(6px);}
#page-home .sh-sector-icon{font-size:26px;flex-shrink:0;}
#page-home .sh-sector-body{display:flex;flex-direction:column;gap:2px;}
#page-home .sh-sector-name{font-size:14px;font-weight:700;color:#ecfdf5;letter-spacing:0.03em;}
#page-home .sh-sector-note{font-size:12px;color:#52716b;font-weight:400;}
#page-home .sh-media{
  background:rgba(74,222,128,0.04);border:1px solid rgba(74,222,128,0.15);
  border-radius:8px;padding:40px 40px;margin-bottom:64px;
}
#page-home .sh-media h3{
  font-family:'Bebas Neue',sans-serif;font-size:32px;
  letter-spacing:0.06em;color:#4ade80;margin-bottom:8px;
}
#page-home .sh-media-sub{font-size:15px;color:#86efac;margin-bottom:32px;font-weight:300;line-height:1.65;}
#page-home .sh-channels{display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:12px;}
#page-home .sh-channel{
  background:rgba(0,0,0,0.5);border:1px solid rgba(74,222,128,0.12);
  border-radius:6px;padding:20px;text-align:center;
  transition:border-color 0.2s,transform 0.15s;
}
#page-home .sh-channel:hover{border-color:rgba(74,222,128,0.4);transform:translateY(-3px);}
#page-home .sh-ch-icon{font-size:32px;margin-bottom:10px;}
#page-home .sh-ch-name{font-size:13px;font-weight:700;color:#d1fae5;letter-spacing:0.04em;text-transform:uppercase;}
#page-home .sh-ch-note{font-size:11px;color:#52716b;margin-top:4px;}
#page-home .sh-callout{
  background:linear-gradient(135deg,rgba(22,101,52,0.35),rgba(3,18,5,0.8));
  border:1px solid rgba(74,222,128,0.25);border-left:5px solid #4ade80;
  border-radius:4px;padding:36px 40px;margin-bottom:64px;
  position:relative;
}
#page-home .sh-callout::before{
  content:'"';font-family:'DM Serif Display',serif;font-size:120px;line-height:0.8;
  color:rgba(74,222,128,0.1);position:absolute;top:10px;left:16px;
}
#page-home .sh-callout-text{
  font-family:'DM Serif Display',serif;
  font-size:clamp(18px,2.5vw,26px);color:#ecfdf5;line-height:1.55;
  position:relative;z-index:1;margin-bottom:18px;
  font-style:italic;
}
#page-home .sh-callout-text strong{font-style:normal;color:#4ade80;}
#page-home .sh-callout-attr{font-size:13px;color:#52716b;font-weight:600;letter-spacing:0.06em;text-transform:uppercase;}
#page-home .sh-ctas{display:flex;gap:16px;flex-wrap:wrap;align-items:center;margin-top:48px;}
#page-home .sh-btn-main{
  padding:17px 40px;border-radius:4px;
  background:#4ade80;color:#020f04;
  font-weight:800;font-size:16px;letter-spacing:0.05em;text-transform:uppercase;
  text-decoration:none;transition:all 0.2s;border:none;cursor:pointer;
  box-shadow:0 0 32px rgba(74,222,128,0.35);
}
#page-home .sh-btn-main:hover{background:#86efac;transform:translateY(-3px);box-shadow:0 0 48px rgba(74,222,128,0.5);}
#page-home .sh-btn-ghost{
  padding:17px 40px;border-radius:4px;
  background:transparent;color:#4ade80;
  font-weight:700;font-size:15px;letter-spacing:0.04em;
  text-decoration:none;transition:all 0.2s;
  border:1.5px solid rgba(74,222,128,0.4);cursor:pointer;
  text-transform:uppercase;
}
#page-home .sh-btn-ghost:hover{border-color:#4ade80;background:rgba(74,222,128,0.08);transform:translateY(-2px);}
#page-home .sh-pledge-count{
  font-size:13px;color:#52716b;font-weight:600;
  letter-spacing:0.06em;text-transform:uppercase;
  padding-left:12px;
}
#page-home .sh-pledge-count span{color:#4ade80;}
#page-home .sh-clock-strip{
  display:flex;align-items:center;gap:24px;flex-wrap:wrap;
  background:rgba(0,0,0,0.6);border:1px solid rgba(74,222,128,0.15);
  border-radius:6px;padding:20px 28px;margin-bottom:48px;
}
#page-home .sh-clock-label{
  font-size:11px;font-weight:700;letter-spacing:0.14em;text-transform:uppercase;
  color:#166534;
}
#page-home .sh-clock-time{
  font-family:'JetBrains Mono',monospace;font-size:38px;font-weight:700;
  color:#4ade80;line-height:1;text-shadow:0 0 18px rgba(74,222,128,0.5);
}
#page-home .sh-clock-sub{font-size:13px;color:#52716b;font-weight:500;flex:1;line-height:1.55;}
#page-home .sh-clock-sub strong{color:#86efac;}
@media(max-width:900px){#page-home .sh-inner{padding:56px 24px;}
#page-home .sh-body{grid-template-columns:1fr;gap:48px;}
#page-home .sh-launch-banner{padding:12px 24px;}
#page-home .sh-media{padding:28px 24px;}
#page-home .sh-callout{padding:28px 24px;}}
@keyframes livepulse__page-home{0%,100%{opacity:1;transform:scale(1);}50%{opacity:0.35;transform:scale(1.4);}}
#page-home .stream-tab{padding:10px 22px;border-radius:4px;border:1px solid rgba(255,255,255,0.12);background:transparent;color:var(--mist);font-size:13px;font-weight:600;cursor:pointer;transition:all 0.2s;letter-spacing:0.03em;font-family:'Inter',sans-serif;}
#page-home .stream-tab.active{background:var(--teal);border-color:var(--teal);color:var(--navy);}
#page-home .stream-tab:hover:not(.active){border-color:var(--teal);color:var(--teal);}
#page-home .stream-tab.red.active{background:#FF6B6B;border-color:#FF6B6B;color:#fff;}
#page-home .stream-panel{display:none;}
#page-home .stream-panel.active{display:block;}
#page-home .watch-elsewhere{margin-top:18px;padding:18px 20px;border-radius:8px;background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.08);}
#page-home .watch-elsewhere-label{font-size:11px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:var(--mist);margin-bottom:12px;}
#page-home .watch-elsewhere-row{display:flex;gap:10px;flex-wrap:wrap;}
#page-home .platform-btn{display:inline-flex;align-items:center;gap:8px;padding:10px 18px;border-radius:6px;font-size:13px;font-weight:600;text-decoration:none;color:#fff;transition:transform 0.15s,filter 0.15s;}
#page-home .platform-btn:hover{transform:translateY(-2px);filter:brightness(1.1);}
#page-home .platform-icon{font-size:13px;line-height:1;}
#page-home .platform-btn.yt{background:#FF0000;}
#page-home .platform-btn.fb{background:#1877F2;}
#page-home .platform-btn.tw{background:#9146FF;}
#page-home .platform-btn.tt{background:#000000;border:1px solid #444;}
#page-home .watch-elsewhere-note{font-size:12px;color:var(--mist);margin-top:12px;line-height:1.5;}
#page-home .sbar{display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:12px;margin-top:18px;}
#page-home .sjoin{padding:12px 28px;border-radius:4px;background:var(--teal);color:var(--navy);font-weight:700;font-size:14px;letter-spacing:0.04em;text-decoration:none;border:none;cursor:pointer;transition:all 0.2s;display:inline-block;font-family:'Inter',sans-serif;}
#page-home .sjoin:hover{background:#00FFDF;transform:translateY(-2px);}
#page-home .sjoin.gold{background:var(--gold);color:var(--navy);}
#page-home .sjoin.gold:hover{background:#ffe08a;}
#page-home .sjoin.red{background:#FF6B6B;color:#fff;}
#page-home .sjoin.red:hover{background:#ff8f8f;}
#page-home .sjoin.ghost{background:transparent;border:1px solid rgba(255,255,255,0.2);color:var(--chalk);}
#page-home .sjoin.ghost:hover{border-color:var(--chalk);}
#page-home .snext{background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.08);border-radius:8px;padding:8px;}
#page-home .snext-row{display:flex;align-items:center;gap:14px;padding:13px 16px;border-radius:6px;transition:background 0.15s;}
#page-home .snext-row:hover{background:rgba(255,255,255,0.04);}
#page-home .sdot{width:8px;height:8px;border-radius:50%;flex-shrink:0;}
#page-home #gccc-room-wrap{width:100%;aspect-ratio:16/9;border-radius:8px;overflow:hidden;background:#000;position:relative;}
#page-home #gccc-room-wrap iframe{width:100%;height:100%;border:none;}
#page-home .room-lobby{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:20px;text-align:center;padding:40px;background:radial-gradient(ellipse 80% 80% at 50% 50%,rgba(0,212,180,0.08),transparent),rgba(5,13,26,0.97);}
#page-home .room-lobby.hidden{display:none;}
#page-home .room-pin-wrap{display:flex;gap:10px;align-items:center;flex-wrap:wrap;justify-content:center;}
#page-home .room-pin-input{padding:12px 18px;border-radius:4px;border:1px solid rgba(0,212,180,0.4);background:rgba(0,212,180,0.06);color:var(--chalk);font-size:15px;font-family:'Inter',sans-serif;width:160px;text-align:center;letter-spacing:0.15em;}
#page-home .room-pin-input::placeholder{letter-spacing:0.04em;color:var(--mist);}
#page-home .room-pin-input:focus{outline:none;border-color:var(--teal);}
#page-home .room-error{font-size:12px;color:#FF6B6B;min-height:16px;}

/* ===== gccc-pages.html ===== */
#page-pages *, #page-pages *::before, #page-pages *::after{box-sizing:border-box;margin:0;padding:0;}
#page-pages{
  --navy:#050F1A;
  --navy2:#071422;
  --slate:#0D1F30;
  --chalk:#F0F4FF;
  --mist:#8A9BB5;
  --teal:#00D4B4;
  --gold:#FFD166;
  --accent:#00D4B4;
}
#page-pages{scroll-behavior:smooth;}
#page-pages{font-family:'Inter',sans-serif;background:var(--navy);color:var(--chalk);min-height:100vh;}
#page-pages #site-nav{
  position:fixed;top:0;left:0;right:0;z-index:100;
  display:flex;align-items:center;justify-content:space-between;
  padding:0 40px;height:64px;
  background:rgba(5,15,26,0);
  backdrop-filter:blur(0px);
  transition:background .3s,backdrop-filter .3s,box-shadow .3s;
}
#page-pages #site-nav.scrolled{
  background:rgba(5,15,26,.92);
  backdrop-filter:blur(12px);
  box-shadow:0 1px 0 rgba(255,255,255,.06);
}
#page-pages .nav-logo-word{
  font-family:'Bebas Neue',sans-serif;font-size:26px;letter-spacing:.06em;color:var(--chalk);
  text-decoration:none;display:flex;align-items:center;gap:8px;
}
#page-pages .nav-logo-globe{font-size:20px;}
#page-pages .nav-links{list-style:none;display:flex;align-items:center;gap:4px;}
#page-pages .nav-links li a{
  font-size:13px;font-weight:500;color:var(--mist);text-decoration:none;
  padding:6px 12px;border-radius:4px;transition:color .2s,background .2s;
}
#page-pages .nav-links li a:hover{color:var(--chalk);background:rgba(255,255,255,.06);}
#page-pages .nav-links li a.nav-cta{
  color:var(--teal);border:1px solid rgba(0,212,180,.4);padding:6px 16px;
}
#page-pages .nav-links li a.nav-cta:hover{background:rgba(0,212,180,.12);}
#page-pages .nav-hamburger{display:none;flex-direction:column;gap:5px;cursor:pointer;padding:6px;}
#page-pages .nav-hamburger span{display:block;width:22px;height:2px;background:var(--chalk);border-radius:2px;}
#page-pages .btn-primary{
  display:inline-block;padding:12px 28px;
  background:var(--teal);color:#030D17;
  font-size:13px;font-weight:700;letter-spacing:.04em;text-transform:uppercase;
  text-decoration:none;border-radius:3px;border:none;cursor:pointer;
  transition:opacity .2s,transform .1s;
}
#page-pages .btn-primary:hover{opacity:.88;transform:translateY(-1px);}
#page-pages .btn-outline{
  display:inline-block;padding:12px 28px;
  background:transparent;color:var(--chalk);
  font-size:13px;font-weight:600;letter-spacing:.04em;
  text-decoration:none;border-radius:3px;
  border:1px solid rgba(240,244,255,.2);cursor:pointer;
  transition:border-color .2s,background .2s;
}
#page-pages .btn-outline:hover{border-color:rgba(240,244,255,.5);background:rgba(255,255,255,.05);}
#page-pages .section{padding:80px 48px;}
#page-pages .section-inner{max-width:1200px;margin:0 auto;}
#page-pages .section-label{
  font-size:11px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;
  color:var(--teal);margin-bottom:12px;display:flex;align-items:center;gap:8px;
}
#page-pages .section-label::before{content:'';width:24px;height:2px;background:var(--teal);}
#page-pages .section-title{
  font-family:'Bebas Neue',sans-serif;font-size:clamp(36px,4vw,56px);
  letter-spacing:.03em;color:var(--chalk);margin-bottom:12px;line-height:1;
}
#page-pages .section-sub{font-size:16px;color:var(--mist);max-width:620px;line-height:1.7;margin-bottom:40px;}
#page-pages .divider{width:60px;height:3px;background:var(--accent);border-radius:2px;margin-bottom:20px;}
#page-pages .page-hero{
  position:relative;padding:140px 48px 80px;overflow:hidden;
  background:linear-gradient(160deg,#071422 0%,#050F1A 60%,#071820 100%);
  min-height:480px;
}
#page-pages .page-hero-bg{
  position:absolute;inset:0;pointer-events:none;
  background:
    radial-gradient(ellipse 60% 50% at 80% 30%,rgba(0,212,180,.07) 0%,transparent 70%),
    radial-gradient(ellipse 40% 40% at 10% 80%,rgba(99,102,241,.06) 0%,transparent 70%);
}
#page-pages .page-hero-inner{max-width:1200px;margin:0 auto;position:relative;z-index:2;}
#page-pages .page-hero-label{
  font-size:11px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;
  color:var(--teal);margin-bottom:16px;
}
#page-pages .page-hero h1{
  font-family:'Bebas Neue',sans-serif;
  font-size:clamp(52px,7vw,96px);
  letter-spacing:.02em;color:var(--chalk);line-height:.95;
  margin-bottom:20px;
}
#page-pages .page-hero h1 em{font-style:normal;color:var(--accent);}
#page-pages .page-hero-desc{font-size:18px;color:var(--mist);max-width:560px;line-height:1.7;margin-bottom:32px;}
#page-pages .page-hero-accent{
  position:absolute;right:80px;top:50%;transform:translateY(-50%);
  font-size:clamp(80px,12vw,180px);opacity:.08;pointer-events:none;
  filter:blur(2px);
}
#page-pages .breadcrumb{
  font-size:12px;color:var(--mist);margin-bottom:20px;
  display:flex;align-items:center;gap:8px;
}
#page-pages .breadcrumb a{color:var(--mist);text-decoration:none;}
#page-pages .breadcrumb a:hover{color:var(--teal);}
#page-pages .breadcrumb span{opacity:.4;}
#page-pages .feature-grid{
  display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:20px;
  margin-top:40px;
}
#page-pages .feature-card{
  background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.07);
  border-top:3px solid var(--accent);border-radius:4px;padding:28px 24px;
  transition:background .2s;
}
#page-pages .feature-card:hover{background:rgba(255,255,255,.06);}
#page-pages .feature-icon{font-size:28px;margin-bottom:12px;}
#page-pages .feature-title{font-size:15px;font-weight:700;color:var(--chalk);margin-bottom:8px;}
#page-pages .feature-desc{font-size:13px;color:var(--mist);line-height:1.6;}
#page-pages .resource-list{display:flex;flex-direction:column;gap:8px;max-width:720px;}
#page-pages .resource-item{
  display:flex;align-items:center;gap:16px;
  background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.07);
  border-radius:4px;padding:16px 20px;text-decoration:none;
  transition:background .2s,border-color .2s;
}
#page-pages .resource-item:hover{background:rgba(255,255,255,.07);border-color:rgba(255,255,255,.15);}
#page-pages .resource-item-icon{font-size:22px;width:36px;flex-shrink:0;text-align:center;}
#page-pages .resource-item-text{flex:1;}
#page-pages .resource-item-title{font-size:14px;font-weight:600;color:var(--chalk);margin-bottom:2px;}
#page-pages .resource-item-desc{font-size:12px;color:var(--mist);}
#page-pages .resource-item-arrow{font-size:18px;color:var(--teal);flex-shrink:0;}
#page-pages .info-panel{
  background:rgba(0,212,180,.06);border:1px solid rgba(0,212,180,.2);
  border-left:4px solid var(--accent);border-radius:4px;padding:18px 22px;
}
#page-pages .info-panel p{font-size:13px;color:var(--mist);line-height:1.6;}
#page-pages .form-group{margin-bottom:18px;}
#page-pages .form-label{display:block;font-size:12px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;color:var(--mist);margin-bottom:6px;}
#page-pages .form-input{
  width:100%;padding:11px 14px;
  background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.12);
  border-radius:3px;color:var(--chalk);font-size:14px;font-family:'Inter',sans-serif;
  outline:none;transition:border-color .2s,background .2s;
}
#page-pages .form-input:focus{border-color:var(--teal);background:rgba(255,255,255,.08);}
#page-pages .form-input::placeholder{color:var(--mist);}
#page-pages .form-select{appearance:none;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' fill='none'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%238A9BB5' stroke-width='1.5'/%3E%3C/svg%3E");background-repeat:no-repeat;background-position:right 14px center;}
#page-pages footer{background:var(--navy2);border-top:1px solid rgba(255,255,255,.06);padding:64px 48px 32px;}
#page-pages .footer-grid{max-width:1200px;margin:0 auto;display:grid;grid-template-columns:2fr 1fr 1fr 1fr;gap:40px;margin-bottom:48px;}
#page-pages .footer-brand-word{font-family:'Bebas Neue',sans-serif;font-size:36px;letter-spacing:.06em;color:var(--chalk);margin-bottom:12px;}
#page-pages .footer-tagline{font-size:13px;color:var(--mist);line-height:1.7;max-width:280px;}
#page-pages .footer-col h4{font-size:11px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:var(--chalk);margin-bottom:16px;}
#page-pages .footer-col{display:flex;flex-direction:column;gap:2px;}
#page-pages .footer-col a{font-size:13px;color:var(--mist);text-decoration:none;padding:4px 0;transition:color .2s;}
#page-pages .footer-col a:hover{color:var(--teal);}
#page-pages .footer-bottom{max-width:1200px;margin:0 auto;border-top:1px solid rgba(255,255,255,.06);padding-top:24px;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:12px;}
#page-pages .footer-copy{font-size:12px;color:var(--mist);}
#page-pages .footer-sdg-badge{font-size:11px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--teal);border:1px solid rgba(0,212,180,.3);border-radius:20px;padding:4px 14px;}
#page-pages .rooms-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:16px;margin-top:40px;}
#page-pages .room-card{
  background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.06);
  border-top:3px solid var(--card-accent,var(--teal));border-radius:4px;
  padding:24px 20px;text-decoration:none;
  display:flex;flex-direction:column;gap:10px;
  transition:background .2s,transform .2s,box-shadow .2s;cursor:pointer;
}
#page-pages .room-card:hover{background:rgba(255,255,255,.07);transform:translateY(-3px);box-shadow:0 12px 32px rgba(0,0,0,.3);}
#page-pages .room-card-emoji{font-size:32px;}
#page-pages .room-card-title{font-size:15px;font-weight:700;color:var(--chalk);}
#page-pages .room-card-desc{font-size:12px;color:var(--mist);line-height:1.5;}
#page-pages .campaign-card{
  background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.07);border-radius:6px;
  padding:28px;display:flex;flex-direction:column;gap:14px;
}
#page-pages .campaign-progress{height:6px;background:rgba(255,255,255,.08);border-radius:3px;overflow:hidden;}
#page-pages .campaign-progress-bar{height:100%;background:var(--teal);border-radius:3px;transition:width 1s ease;}
#page-pages .dash-tab{
  padding:8px 18px;font-size:12px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;
  color:var(--mist);background:transparent;border:none;border-bottom:2px solid transparent;
  cursor:pointer;transition:color .2s,border-color .2s;
}
#page-pages .dash-tab.active{color:var(--teal);border-bottom-color:var(--teal);}
#page-pages .dash-tab:hover{color:var(--chalk);}
#page-pages .dash-panel{display:none;}
#page-pages .dash-panel.active{display:block;}
#page-pages .activity-item{
  display:flex;align-items:flex-start;gap:14px;
  padding:14px 0;border-bottom:1px solid rgba(255,255,255,.05);
}
#page-pages .activity-item:last-child{border-bottom:none;}
#page-pages .activity-dot{
  width:10px;height:10px;border-radius:50%;background:var(--teal);
  flex-shrink:0;margin-top:4px;
}
#page-pages .activity-dot.gold{background:var(--gold);}
#page-pages .activity-dot.red{background:#F87171;}
#page-pages .activity-dot.purple{background:#A78BFA;}
#page-pages .donation-row{
  display:flex;align-items:center;justify-content:space-between;
  padding:14px 16px;background:rgba(255,255,255,.02);border-radius:4px;
  border:1px solid rgba(255,255,255,.05);
}
#page-pages .event-item{
  display:flex;gap:16px;align-items:flex-start;padding:16px;
  background:rgba(255,255,255,.02);border-radius:4px;
  border:1px solid rgba(255,255,255,.05);border-left:3px solid var(--teal);
  margin-bottom:10px;
}
#page-pages .event-date-box{
  min-width:48px;text-align:center;background:rgba(0,212,180,.1);
  border-radius:4px;padding:8px 6px;
}
#page-pages .event-date-day{font-family:'Bebas Neue',sans-serif;font-size:24px;color:var(--teal);line-height:1;}
#page-pages .event-date-mon{font-size:9px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--mist);}
#page-pages .glowbag-card{
  background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.07);
  border-top:3px solid var(--gold);border-radius:4px;padding:24px;
}
#page-pages .stat-pill{
  display:inline-flex;align-items:center;gap:6px;
  background:rgba(0,212,180,.08);border:1px solid rgba(0,212,180,.2);
  border-radius:20px;padding:4px 12px;
  font-size:11px;font-weight:700;letter-spacing:.08em;color:var(--teal);
}
#page-pages .vcall-btn{
  display:inline-flex;align-items:center;gap:8px;
  background:rgba(99,102,241,.15);border:1px solid rgba(99,102,241,.4);
  color:#a5b4fc;border-radius:4px;padding:10px 18px;
  font-size:13px;font-weight:600;cursor:pointer;text-decoration:none;
  transition:background .2s,border-color .2s;
}
#page-pages .vcall-btn:hover{background:rgba(99,102,241,.28);border-color:rgba(99,102,241,.6);}
#page-pages .sdg-mini-badge{
  aspect-ratio:1;border-radius:4px;display:flex;align-items:center;
  justify-content:center;font-size:11px;font-weight:700;color:white;
  transition:opacity .2s,transform .2s;cursor:default;
}
#page-pages .sdg-mini-badge.unlocked{opacity:1;}
#page-pages .sdg-mini-badge.locked{opacity:.18;filter:grayscale(1);}
#page-pages .sdg-mini-badge:hover{transform:scale(1.15);}

/* ===== community-center.html ===== */
#page-community{
    --bg: #0D0F14;
    --surface: #161920;
    --surface2: #1E2130;
    --border: rgba(255,255,255,0.07);
    --accent: #6EE7B7;
    --accent2: #818CF8;
    --accent3: #FB923C;
    --accent4: #F472B6;
    --text: #E2E8F0;
    --muted: #64748B;
    --white: #FFFFFF;
    --doom-red: #EF4444;
    --doom-orange: #F97316;
    --sdg-safe: #22C55E;
  }
#page-community *, #page-community *::before, #page-community *::after{ margin: 0; padding: 0; box-sizing: border-box; }
#page-community{
    font-family: 'DM Sans', sans-serif;
    background: var(--bg);
    color: var(--text);
    overflow-x: hidden;
    min-height: 100vh;
  }
#page-community body::before{
    content: '';
    position: fixed; inset: 0;
    background-image:
      linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px);
    background-size: 40px 40px;
    pointer-events: none;
    z-index: 0;
  }
#page-community .app{
    display: grid;
    grid-template-columns: 72px 220px 1fr 300px;
    grid-template-rows: auto 1fr;
    min-height: 100vh;
    position: relative;
    z-index: 1;
  }
#page-community .icon-rail{
    grid-row: 1 / -1;
    background: var(--surface);
    border-right: 1px solid var(--border);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem 0;
    gap: 0.25rem;
    position: sticky;
    top: 0;
    height: 100vh;
  }
#page-community .rail-logo{
    font-family: 'Syne', sans-serif;
    font-weight: 800;
    font-size: 1.1rem;
    color: var(--accent);
    margin-bottom: 1.5rem;
    writing-mode: vertical-rl;
    transform: rotate(180deg);
    letter-spacing: 0.05em;
  }
#page-community .rail-btn{
    width: 44px; height: 44px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.1rem;
    cursor: pointer;
    transition: background 0.2s;
    background: transparent;
    border: none;
    color: var(--muted);
    position: relative;
  }
#page-community .rail-btn:hover, #page-community .rail-btn.active{
    background: rgba(110,231,183,0.12);
    color: var(--accent);
  }
#page-community .rail-btn .badge{
    position: absolute;
    top: 6px; right: 6px;
    width: 8px; height: 8px;
    background: var(--accent3);
    border-radius: 50%;
  }
#page-community .rail-divider{ width: 28px; height: 1px; background: var(--border); margin: 0.5rem 0; }
#page-community .channel-list{
    background: var(--surface);
    border-right: 1px solid var(--border);
    display: flex;
    flex-direction: column;
    position: sticky;
    top: 0;
    height: 100vh;
    overflow-y: auto;
    grid-row: 1 / -1;
  }
#page-community .channel-list::-webkit-scrollbar{ width: 4px; }
#page-community .channel-list::-webkit-scrollbar-thumb{ background: var(--border); border-radius: 2px; }
#page-community .channel-header{ padding: 1.25rem 1rem 1rem; border-bottom: 1px solid var(--border); }
#page-community .server-name{
    font-family: 'Syne', sans-serif;
    font-size: 0.95rem;
    font-weight: 700;
    color: var(--white);
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    margin-bottom: 0.5rem;
  }
#page-community .online-pill{
    font-size: 0.7rem;
    background: rgba(110,231,183,0.15);
    color: var(--accent);
    padding: 0.15rem 0.5rem;
    border-radius: 20px;
    font-family: 'JetBrains Mono', monospace;
  }
#page-community .channel-group-label{
    font-size: 0.65rem;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--muted);
    padding: 1rem 1rem 0.5rem;
  }
#page-community .channel-item{
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.4rem 1rem;
    cursor: pointer;
    border-radius: 6px;
    margin: 0 0.5rem;
    font-size: 0.9rem;
    color: var(--muted);
    transition: background 0.15s, color 0.15s;
    position: relative;
  }
#page-community .channel-item:hover{ background: var(--surface2); color: var(--text); }
#page-community .channel-item.active{ background: rgba(110,231,183,0.12); color: var(--accent); }
#page-community .channel-item .ch-icon{ font-size: 0.85rem; }
#page-community .channel-unread{ margin-left: auto; background: var(--accent2); color: var(--white); font-size: 0.65rem; font-weight: 700; padding: 0.1rem 0.4rem; border-radius: 10px; font-family: 'JetBrains Mono', monospace; }
#page-community .channel-item .ch-voice{ color: var(--accent3); font-size: 0.7rem; margin-left: auto; }
#page-community .live-badge{
    margin-left: auto;
    background: #EF4444;
    color: #fff;
    font-size: 0.6rem;
    font-weight: 700;
    padding: 0.1rem 0.35rem;
    border-radius: 4px;
    letter-spacing: 0.05em;
    animation: livePulse__page-community 2s infinite;
  }
@keyframes livePulse__page-community{ 0%,100%{opacity:1} 50%{opacity:0.6} }
#page-community .user-bar{
    margin-top: auto;
    padding: 0.75rem 1rem;
    border-top: 1px solid var(--border);
    display: flex;
    align-items: center;
    gap: 0.75rem;
    background: rgba(0,0,0,0.2);
  }
#page-community .user-avatar{ width: 32px; height: 32px; border-radius: 50%; background: linear-gradient(135deg, var(--accent2), var(--accent4)); display: flex; align-items: center; justify-content: center; font-size: 0.75rem; font-weight: 700; flex-shrink: 0; }
#page-community .user-name{ font-size: 0.85rem; font-weight: 500; color: var(--text); }
#page-community .user-tag{ font-size: 0.7rem; color: var(--muted); font-family: 'JetBrains Mono', monospace; }
#page-community .chat-area{
    display: flex;
    flex-direction: column;
    height: 100vh;
    position: sticky;
    top: 0;
    overflow: hidden;
  }
#page-community .chat-header{
    padding: 1rem 1.5rem;
    border-bottom: 1px solid var(--border);
    display: flex;
    align-items: center;
    gap: 0.75rem;
    background: var(--bg);
  }
#page-community .chat-channel-name{ font-family: 'Syne', sans-serif; font-weight: 700; font-size: 1rem; color: var(--white); }
#page-community .chat-channel-desc{ font-size: 0.8rem; color: var(--muted); }
#page-community .chat-actions{ margin-left: auto; display: flex; gap: 0.5rem; }
#page-community .hdr-btn{
    width: 32px; height: 32px;
    border-radius: 6px;
    border: 1px solid var(--border);
    background: transparent;
    color: var(--muted);
    cursor: pointer;
    font-size: 0.9rem;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background 0.2s, color 0.2s;
  }
#page-community .hdr-btn:hover{ background: var(--surface2); color: var(--text); }
#page-community .main-content{
    flex: 1;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
  }
#page-community .main-content::-webkit-scrollbar{ width: 4px; }
#page-community .main-content::-webkit-scrollbar-thumb{ background: var(--border); }
#page-community .panel{ display: none; flex-direction: column; flex: 1; }
#page-community .panel.active{ display: flex; }
#page-community .doom-panel{
    padding: 2rem;
    align-items: center;
    background: radial-gradient(ellipse at 50% 0%, rgba(239,68,68,0.06) 0%, transparent 70%);
  }
#page-community .doom-header{ text-align: center; margin-bottom: 2rem; }
#page-community .doom-title{ font-family: 'Syne', sans-serif; font-size: 1.6rem; font-weight: 800; color: var(--white); margin-bottom: 0.4rem; }
#page-community .doom-subtitle{ font-size: 0.85rem; color: var(--muted); max-width: 500px; margin: 0 auto; line-height: 1.6; }
#page-community .doom-clock-wrap{ position: relative; width: 260px; height: 260px; margin: 0 auto 2rem; }
#page-community .doom-clock-svg{ width: 100%; height: 100%; transform: rotate(-90deg); }
#page-community .doom-clock-track{ fill: none; stroke: rgba(255,255,255,0.06); stroke-width: 14; }
#page-community .doom-clock-arc{ fill: none; stroke-width: 14; stroke-linecap: round; transition: stroke-dashoffset 1s ease, stroke 0.5s ease; }
#page-community .doom-clock-center{ position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); text-align: center; }
#page-community .doom-seconds{ font-family: 'JetBrains Mono', monospace; font-size: 2.2rem; font-weight: 500; color: var(--white); line-height: 1; }
#page-community .doom-unit{ font-size: 0.7rem; color: var(--muted); text-transform: uppercase; letter-spacing: 0.15em; margin-top: 0.2rem; }
#page-community .doom-to-midnight{ font-size: 0.75rem; color: var(--doom-red); margin-top: 0.5rem; font-family: 'JetBrains Mono', monospace; animation: flickerRed__page-community 3s infinite; }
@keyframes flickerRed__page-community{ 0%,100%{opacity:1} 50%{opacity:0.7} }
#page-community .doom-progress-wrap{ width: 100%; max-width: 500px; margin-bottom: 1.5rem; }
#page-community .doom-progress-label{ display: flex; justify-content: space-between; font-size: 0.78rem; color: var(--muted); margin-bottom: 0.5rem; }
#page-community .doom-progress-bar{ height: 6px; background: rgba(255,255,255,0.06); border-radius: 3px; overflow: hidden; }
#page-community .doom-progress-fill{ height: 100%; border-radius: 3px; background: linear-gradient(90deg, var(--accent), #3B82F6); transition: width 0.8s ease; }
#page-community .sdg-actions-grid{ width: 100%; max-width: 560px; display: grid; grid-template-columns: repeat(3, 1fr); gap: 0.6rem; margin-bottom: 1.5rem; }
#page-community .sdg-action-btn{ background: var(--surface); border: 1px solid var(--border); border-radius: 8px; padding: 0.6rem 0.5rem; text-align: center; cursor: pointer; transition: all 0.2s; font-size: 0.75rem; color: var(--muted); line-height: 1.4; }
#page-community .sdg-action-btn:hover{ background: var(--surface2); color: var(--text); border-color: var(--accent); transform: translateY(-1px); }
#page-community .sdg-action-btn .sab-icon{ font-size: 1.2rem; display: block; margin-bottom: 0.25rem; }
#page-community .sdg-action-btn .sab-reward{ font-size: 0.65rem; color: var(--accent); font-family: 'JetBrains Mono', monospace; margin-top: 0.2rem; }
#page-community .doom-log{ width: 100%; max-width: 500px; background: var(--surface); border: 1px solid var(--border); border-radius: 10px; padding: 1rem; }
#page-community .doom-log-title{ font-size: 0.7rem; text-transform: uppercase; letter-spacing: 0.1em; color: var(--muted); font-weight: 700; margin-bottom: 0.75rem; }
#page-community .doom-log-entry{ font-size: 0.8rem; color: var(--text); padding: 0.3rem 0; border-bottom: 1px solid var(--border); display: flex; gap: 0.5rem; align-items: center; animation: logIn__page-community 0.4s ease both; }
@keyframes logIn__page-community{ from{opacity:0;transform:translateX(-10px)} to{opacity:1;transform:none} }
#page-community .doom-log-entry:last-child{ border-bottom: none; }
#page-community .doom-log-entry .log-time{ color: var(--muted); font-family: 'JetBrains Mono', monospace; font-size: 0.7rem; flex-shrink: 0; }
#page-community .doom-log-entry .log-delta{ color: var(--accent); font-family: 'JetBrains Mono', monospace; font-size: 0.75rem; margin-left: auto; flex-shrink: 0; }
#page-community .tama-panel{
    padding: 1.5rem 2rem;
    align-items: center;
    background: radial-gradient(ellipse at 50% 0%, rgba(129,140,248,0.06) 0%, transparent 70%);
  }
#page-community .tama-title{ font-family: 'Syne', sans-serif; font-size: 1.4rem; font-weight: 800; color: var(--white); text-align: center; margin-bottom: 0.3rem; }
#page-community .tama-sub{ font-size: 0.82rem; color: var(--muted); text-align: center; margin-bottom: 1.5rem; }
#page-community .tama-device{ background: var(--surface); border: 2px solid rgba(129,140,248,0.3); border-radius: 28px; padding: 1.5rem; width: 320px; box-shadow: 0 0 40px rgba(129,140,248,0.1); margin-bottom: 1.5rem; position: relative; }
#page-community .tama-screen{ background: #0a0c10; border-radius: 16px; border: 2px solid rgba(255,255,255,0.08); height: 200px; display: flex; flex-direction: column; align-items: center; justify-content: center; margin-bottom: 1rem; position: relative; overflow: hidden; }
#page-community .tama-bg-grid{ position: absolute; inset: 0; background-image: linear-gradient(rgba(129,140,248,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(129,140,248,0.04) 1px, transparent 1px); background-size: 20px 20px; }
#page-community .tama-creature{ font-size: 4rem; position: relative; z-index: 2; animation: tamaFloat__page-community 3s ease-in-out infinite; transition: filter 0.5s ease; line-height: 1; }
@keyframes tamaFloat__page-community{ 0%,100%{transform:translateY(0)} 50%{transform:translateY(-8px)} }
#page-community .tama-name-display{ font-family: 'JetBrains Mono', monospace; font-size: 0.7rem; color: var(--accent2); position: relative; z-index: 2; margin-top: 0.4rem; letter-spacing: 0.1em; }
#page-community .tama-mood{ font-size: 0.75rem; color: var(--muted); position: relative; z-index: 2; margin-top: 0.2rem; font-style: italic; }
#page-community .tama-alert{ position: absolute; top: 8px; right: 8px; font-size: 1rem; animation: alertPop__page-community 0.5s ease both; z-index: 3; }
@keyframes alertPop__page-community{ from{transform:scale(0)} to{transform:scale(1)} }
#page-community .tama-stats{ display: grid; grid-template-columns: 1fr 1fr; gap: 0.5rem; margin-bottom: 1rem; }
#page-community .tama-stat{ background: var(--surface2); border-radius: 8px; padding: 0.5rem 0.6rem; }
#page-community .tama-stat-label{ font-size: 0.65rem; color: var(--muted); text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 0.3rem; }
#page-community .tama-stat-bar{ height: 5px; background: rgba(255,255,255,0.06); border-radius: 3px; overflow: hidden; }
#page-community .tama-stat-fill{ height: 100%; border-radius: 3px; transition: width 0.5s ease, background 0.5s ease; }
#page-community .tama-stat-val{ font-family: 'JetBrains Mono', monospace; font-size: 0.7rem; color: var(--text); margin-top: 0.25rem; }
#page-community .tama-doom-link{ background: rgba(239,68,68,0.1); border: 1px solid rgba(239,68,68,0.2); border-radius: 8px; padding: 0.5rem 0.75rem; font-size: 0.78rem; color: #FCA5A5; text-align: center; display: flex; align-items: center; justify-content: center; gap: 0.4rem; }
#page-community .tama-tasks{ width: 100%; max-width: 560px; }
#page-community .tama-tasks-title{ font-size: 0.7rem; text-transform: uppercase; letter-spacing: 0.12em; color: var(--muted); font-weight: 700; margin-bottom: 0.75rem; display: flex; align-items: center; justify-content: space-between; }
#page-community .tama-tasks-grid{ display: grid; grid-template-columns: repeat(2, 1fr); gap: 0.6rem; }
#page-community .tama-task{ background: var(--surface); border: 1px solid var(--border); border-radius: 10px; padding: 0.8rem; cursor: pointer; transition: all 0.2s; display: flex; gap: 0.6rem; align-items: flex-start; }
#page-community .tama-task:hover{ background: var(--surface2); border-color: var(--accent2); transform: translateY(-1px); }
#page-community .tama-task.done{ border-color: var(--accent); opacity: 0.6; pointer-events: none; }
#page-community .tama-task-icon{ font-size: 1.4rem; flex-shrink: 0; margin-top: 1px; }
#page-community .tama-task-info{ flex: 1; min-width: 0; }
#page-community .tama-task-name{ font-size: 0.82rem; font-weight: 600; color: var(--white); margin-bottom: 0.2rem; line-height: 1.3; }
#page-community .tama-task-desc{ font-size: 0.7rem; color: var(--muted); line-height: 1.4; }
#page-community .tama-task-reward{ font-size: 0.68rem; color: var(--accent); font-family: 'JetBrains Mono', monospace; margin-top: 0.25rem; }
#page-community .rooms-panel{
    padding: 1.5rem;
    flex-direction: column;
    overflow-y: auto;
    background: radial-gradient(ellipse at 50% 0%, rgba(110,231,183,0.04) 0%, transparent 70%);
  }
#page-community .rooms-header{ text-align: center; margin-bottom: 1.5rem; }
#page-community .rooms-title{ font-family: 'Syne', sans-serif; font-size: 1.4rem; font-weight: 800; color: var(--white); margin-bottom: 0.3rem; }
#page-community .rooms-sub{ font-size: 0.82rem; color: var(--muted); }
#page-community .rooms-grid{ display: grid; grid-template-columns: repeat(2, 1fr); gap: 0.75rem; max-width: 700px; margin: 0 auto; }
#page-community .room-card{
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: 14px;
    padding: 1.25rem;
    cursor: pointer;
    transition: all 0.2s;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    position: relative;
    overflow: hidden;
  }
#page-community .room-card:hover{ background: var(--surface2); transform: translateY(-2px); border-color: rgba(110,231,183,0.3); }
#page-community .room-card:hover .room-arrow{ opacity: 1; }
#page-community .room-icon{ font-size: 2rem; }
#page-community .room-name{ font-family: 'Syne', sans-serif; font-size: 1rem; font-weight: 700; color: var(--white); }
#page-community .room-desc{ font-size: 0.78rem; color: var(--muted); line-height: 1.5; }
#page-community .room-online{ font-size: 0.7rem; font-family: 'JetBrains Mono', monospace; color: var(--accent); margin-top: 0.25rem; }
#page-community .room-arrow{ position: absolute; top: 1rem; right: 1rem; font-size: 0.9rem; color: var(--accent); opacity: 0; transition: opacity 0.2s; }
#page-community .broadcast-panel{ padding: 0; flex-direction: column; }
#page-community .broadcast-header{ padding: 1.25rem 1.5rem; background: var(--surface); border-bottom: 1px solid var(--border); display: flex; align-items: center; justify-content: space-between; }
#page-community .broadcast-title{ font-family: 'Syne', sans-serif; font-weight: 800; font-size: 1.1rem; color: var(--white); margin-bottom: 0.2rem; }
#page-community .broadcast-sub{ font-size: 0.78rem; color: var(--muted); }
#page-community .broadcast-live-count{ background: rgba(239,68,68,0.15); border: 1px solid rgba(239,68,68,0.3); border-radius: 20px; padding: 0.3rem 0.75rem; font-size: 0.75rem; color: #FCA5A5; display: flex; align-items: center; gap: 0.35rem; font-family: 'JetBrains Mono', monospace; }
#page-community .bc-live-dot{ width: 7px; height: 7px; background: #EF4444; border-radius: 50%; animation: livePulse__page-community 1.5s infinite; }
#page-community .sdg-channels-grid{ display: grid; grid-template-columns: repeat(3, 1fr); gap: 0.75rem; padding: 1.25rem; overflow-y: auto; flex: 1; }
#page-community .sdg-channel-card{ border-radius: 12px; padding: 1rem; cursor: pointer; border: 1px solid var(--border); transition: all 0.2s; position: relative; overflow: hidden; }
#page-community .sdg-channel-card::before{ content: ''; position: absolute; inset: 0; opacity: 0; transition: opacity 0.2s; }
#page-community .sdg-channel-card:hover::before{ opacity: 1; }
#page-community .sdg-channel-card:hover{ transform: translateY(-2px); border-color: transparent; }
#page-community .sdg-ch-num{ font-family: 'JetBrains Mono', monospace; font-size: 0.65rem; font-weight: 700; margin-bottom: 0.3rem; letter-spacing: 0.08em; }
#page-community .sdg-ch-icon{ font-size: 1.6rem; margin-bottom: 0.4rem; display: block; position: relative; z-index: 1; }
#page-community .sdg-ch-name{ font-size: 0.78rem; font-weight: 700; color: var(--white); margin-bottom: 0.2rem; line-height: 1.3; position: relative; z-index: 1; }
#page-community .sdg-ch-viewers{ font-size: 0.68rem; color: var(--muted); font-family: 'JetBrains Mono', monospace; display: flex; align-items: center; gap: 0.3rem; position: relative; z-index: 1; }
#page-community .sdg-ch-viewers .live-dot{ width: 5px; height: 5px; border-radius: 50%; animation: livePulse__page-community 1.5s infinite; }
#page-community .stream-viewer{ display: none; flex-direction: column; flex: 1; overflow: hidden; }
#page-community .stream-viewer.open{ display: flex; }
#page-community .stream-grid.open .sdg-channels-grid{ display: none; }
#page-community .stream-grid{ flex: 1; display: flex; flex-direction: column; overflow: hidden; }
#page-community .stream-grid.open .stream-viewer{ display: flex; }
#page-community .stream-video-wrap{ background: #000; aspect-ratio: 16/9; flex-shrink: 0; position: relative; overflow: hidden; max-height: 260px; }
#page-community .stream-video-bg{ width: 100%; height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 0.75rem; }
#page-community .stream-video-icon{ font-size: 3rem; }
#page-community .stream-video-title{ font-family: 'Syne', sans-serif; font-size: 1.1rem; font-weight: 800; color: var(--white); text-align: center; }
#page-community .stream-video-sub{ font-size: 0.8rem; color: rgba(255,255,255,0.5); text-align: center; }
#page-community .stream-live-tag{ position: absolute; top: 10px; left: 10px; background: #EF4444; color: white; font-size: 0.65rem; font-weight: 700; padding: 0.15rem 0.5rem; border-radius: 3px; letter-spacing: 0.1em; }
#page-community .stream-viewer-count{ position: absolute; top: 10px; right: 10px; background: rgba(0,0,0,0.6); color: white; font-size: 0.72rem; padding: 0.2rem 0.5rem; border-radius: 4px; font-family: 'JetBrains Mono', monospace; }
#page-community .stream-controls{ background: var(--surface); border-bottom: 1px solid var(--border); padding: 0.75rem 1rem; display: flex; align-items: center; gap: 0.75rem; }
#page-community .stream-back{ background: var(--surface2); border: 1px solid var(--border); border-radius: 6px; padding: 0.3rem 0.6rem; color: var(--muted); font-size: 0.8rem; cursor: pointer; transition: all 0.2s; }
#page-community .stream-back:hover{ color: var(--text); border-color: var(--accent); }
#page-community .stream-channel-info{ flex: 1; }
#page-community .stream-ch-name{ font-size: 0.9rem; font-weight: 700; color: var(--white); }
#page-community .stream-ch-goal{ font-size: 0.72rem; color: var(--muted); }
#page-community .stream-chat{ flex: 1; overflow-y: auto; padding: 0.75rem 1rem; display: flex; flex-direction: column; gap: 0.3rem; min-height: 0; }
#page-community .stream-chat::-webkit-scrollbar{ width: 3px; }
#page-community .stream-chat::-webkit-scrollbar-thumb{ background: var(--border); }
#page-community .stream-msg{ font-size: 0.8rem; color: var(--text); line-height: 1.5; animation: msgIn__page-community 0.3s ease both; }
#page-community .stream-msg .sm-author{ font-weight: 700; margin-right: 0.4rem; }
#page-community .stream-input-row{ padding: 0.75rem 1rem; background: var(--bg); border-top: 1px solid var(--border); display: flex; gap: 0.5rem; }
#page-community .stream-input{ flex: 1; background: var(--surface2); border: 1px solid var(--border); border-radius: 6px; padding: 0.45rem 0.75rem; font-family: 'DM Sans', sans-serif; font-size: 0.82rem; color: var(--text); outline: none; }
#page-community .stream-input:focus{ border-color: var(--accent); }
#page-community .stream-send{ background: var(--accent); color: var(--bg); border: none; border-radius: 6px; padding: 0.45rem 0.75rem; font-size: 0.82rem; font-weight: 700; cursor: pointer; }
#page-community .stream-send:hover{ background: #4ade80; }
#page-community .messages{ flex: 1; overflow-y: auto; padding: 1.5rem; display: flex; flex-direction: column; gap: 0.25rem; }
#page-community .messages::-webkit-scrollbar{ width: 4px; }
#page-community .messages::-webkit-scrollbar-thumb{ background: var(--border); }
#page-community .msg-group{ display: flex; gap: 0.75rem; padding: 0.3rem 0; animation: msgIn__page-community 0.3s ease both; }
@keyframes msgIn__page-community{ from{opacity:0;transform:translateY(8px)} to{opacity:1;transform:translateY(0)} }
#page-community .msg-avatar{ width: 36px; height: 36px; border-radius: 50%; flex-shrink: 0; display: flex; align-items: center; justify-content: center; font-size: 0.8rem; font-weight: 700; margin-top: 2px; }
#page-community .msg-body{ flex: 1; }
#page-community .msg-meta{ display: flex; align-items: baseline; gap: 0.5rem; margin-bottom: 0.2rem; }
#page-community .msg-author{ font-size: 0.9rem; font-weight: 700; color: var(--white); }
#page-community .msg-time{ font-size: 0.7rem; color: var(--muted); font-family: 'JetBrains Mono', monospace; }
#page-community .msg-role{ font-size: 0.65rem; padding: 0.1rem 0.4rem; border-radius: 3px; font-weight: 700; letter-spacing: 0.05em; }
#page-community .msg-content{ font-size: 0.92rem; line-height: 1.6; color: var(--text); }
#page-community .msg-content a{ color: var(--accent); text-decoration: none; }
#page-community .msg-content code{ font-family: 'JetBrains Mono', monospace; background: var(--surface2); padding: 0.1rem 0.35rem; border-radius: 3px; font-size: 0.85em; color: var(--accent3); }
#page-community .msg-reactions{ display: flex; gap: 0.35rem; margin-top: 0.4rem; flex-wrap: wrap; }
#page-community .reaction{ background: var(--surface2); border: 1px solid var(--border); border-radius: 12px; padding: 0.2rem 0.5rem; font-size: 0.8rem; cursor: pointer; transition: background 0.2s, border-color 0.2s; display: flex; align-items: center; gap: 0.25rem; }
#page-community .reaction:hover, #page-community .reaction.mine{ background: rgba(110,231,183,0.12); border-color: var(--accent); }
#page-community .reaction span{ font-size: 0.7rem; color: var(--text); }
#page-community .day-divider{ display: flex; align-items: center; gap: 1rem; margin: 1rem 0; color: var(--muted); font-size: 0.75rem; font-weight: 600; }
#page-community .day-divider::before, #page-community .day-divider::after{ content:''; flex:1; height:1px; background:var(--border); }
#page-community .msg-embed{ background: var(--surface); border-left: 3px solid var(--accent2); border-radius: 4px; padding: 0.75rem 1rem; margin-top: 0.5rem; max-width: 400px; }
#page-community .embed-title{ font-weight: 700; font-size: 0.9rem; color: var(--accent2); margin-bottom: 0.25rem; }
#page-community .embed-desc{ font-size: 0.82rem; color: var(--muted); line-height: 1.5; }
#page-community .channel-tabs{ display: flex; gap: 0; border-bottom: 1px solid var(--border); background: var(--bg); padding: 0 1.5rem; overflow-x: auto; flex-shrink: 0; }
#page-community .tab{ padding: 0.6rem 1rem; font-size: 0.82rem; font-weight: 500; color: var(--muted); cursor: pointer; border-bottom: 2px solid transparent; transition: color 0.2s, border-color 0.2s; white-space: nowrap; }
#page-community .tab:hover{ color: var(--text); }
#page-community .tab.active{ color: var(--accent); border-bottom-color: var(--accent); }
#page-community .chat-input-area{ padding: 1rem 1.5rem; background: var(--bg); border-top: 1px solid var(--border); flex-shrink: 0; }
#page-community .input-box{ background: var(--surface2); border: 1px solid var(--border); border-radius: 10px; display: flex; align-items: center; gap: 0.5rem; padding: 0 0.75rem; transition: border-color 0.2s; }
#page-community .input-box:focus-within{ border-color: var(--accent); }
#page-community .input-prefix{ font-size: 1rem; color: var(--muted); flex-shrink: 0; }
#page-community .chat-input{ flex: 1; background: transparent; border: none; outline: none; padding: 0.75rem 0.25rem; font-family: 'DM Sans', sans-serif; font-size: 0.92rem; color: var(--text); }
#page-community .chat-input::placeholder{ color: var(--muted); }
#page-community .input-actions{ display: flex; gap: 0.25rem; }
#page-community .inp-btn{ width: 28px; height: 28px; border-radius: 6px; border: none; background: transparent; color: var(--muted); cursor: pointer; font-size: 1rem; display: flex; align-items: center; justify-content: center; transition: color 0.2s, background 0.2s; }
#page-community .inp-btn:hover{ color: var(--accent); background: rgba(110,231,183,0.1); }
#page-community .send-btn{ background: var(--accent); color: var(--bg) !important; border-radius: 6px !important; }
#page-community .send-btn:hover{ background: #4ade80 !important; color: var(--bg) !important; }
#page-community .typing-indicator{ font-size: 0.75rem; color: var(--muted); padding: 0.25rem 1.5rem; min-height: 1.5rem; display: flex; align-items: center; gap: 0.35rem; flex-shrink: 0; }
#page-community .typing-dots{ display: flex; gap: 2px; }
#page-community .typing-dots span{ width: 4px; height: 4px; background: var(--muted); border-radius: 50%; animation: blink__page-community 1.2s infinite; }
#page-community .typing-dots span:nth-child(2){ animation-delay: 0.2s; }
#page-community .typing-dots span:nth-child(3){ animation-delay: 0.4s; }
@keyframes blink__page-community{ 0%,80%,100%{opacity:0.2} 40%{opacity:1} }
#page-community .right-sidebar{ background: var(--surface); border-left: 1px solid var(--border); height: 100vh; overflow-y: auto; grid-row: 1 / -1; display: flex; flex-direction: column; }
#page-community .right-sidebar::-webkit-scrollbar{ width: 4px; }
#page-community .right-sidebar::-webkit-scrollbar-thumb{ background: var(--border); }
#page-community .rside-section{ padding: 1.25rem 1rem; border-bottom: 1px solid var(--border); }
#page-community .rside-title{ font-size: 0.65rem; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; color: var(--muted); margin-bottom: 0.75rem; display: flex; align-items: center; justify-content: space-between; }
#page-community .rside-title .count{ font-family: 'JetBrains Mono', monospace; font-size: 0.65rem; background: var(--surface2); padding: 0.1rem 0.4rem; border-radius: 10px; color: var(--text); }
#page-community .mini-doom-wrap{ background: var(--surface2); border-radius: 12px; padding: 1rem; margin-bottom: 0.5rem; text-align: center; border: 1px solid rgba(239,68,68,0.15); cursor: pointer; transition: border-color 0.2s; }
#page-community .mini-doom-wrap:hover{ border-color: rgba(239,68,68,0.4); }
#page-community .mini-doom-time{ font-family: 'JetBrains Mono', monospace; font-size: 1.8rem; font-weight: 500; color: var(--doom-red); margin-bottom: 0.2rem; letter-spacing: 0.05em; }
#page-community .mini-doom-label{ font-size: 0.7rem; color: var(--muted); margin-bottom: 0.5rem; }
#page-community .mini-doom-bar{ height: 4px; background: rgba(255,255,255,0.06); border-radius: 2px; overflow: hidden; margin-bottom: 0.5rem; }
#page-community .mini-doom-fill{ height: 100%; border-radius: 2px; background: linear-gradient(90deg,var(--accent),#3B82F6); transition: width 0.8s ease; }
#page-community .mini-doom-cta{ font-size: 0.72rem; color: var(--accent); cursor: pointer; }
#page-community .mini-tama-wrap{ background: var(--surface2); border-radius: 12px; padding: 0.75rem; display: flex; align-items: center; gap: 0.75rem; cursor: pointer; border: 1px solid var(--border); transition: border-color 0.2s; }
#page-community .mini-tama-wrap:hover{ border-color: var(--accent2); }
#page-community .mini-tama-creature{ font-size: 2rem; }
#page-community .mini-tama-info{ flex: 1; }
#page-community .mini-tama-name{ font-size: 0.82rem; font-weight: 600; color: var(--white); }
#page-community .mini-tama-status{ font-size: 0.7rem; color: var(--muted); }
#page-community .mini-tama-hp{ height: 3px; background: rgba(255,255,255,0.06); border-radius: 2px; overflow: hidden; margin-top: 0.3rem; }
#page-community .mini-tama-hp-fill{ height: 100%; border-radius: 2px; background: var(--accent); transition: width 0.5s ease; }
#page-community .member-item{ display: flex; align-items: center; gap: 0.6rem; padding: 0.35rem 0.5rem; margin: 0 -0.5rem; cursor: pointer; border-radius: 6px; transition: background 0.15s; }
#page-community .member-item:hover{ background: var(--surface2); }
#page-community .member-avatar{ width: 28px; height: 28px; border-radius: 50%; flex-shrink: 0; display: flex; align-items: center; justify-content: center; font-size: 0.65rem; font-weight: 700; position: relative; }
#page-community .status-dot{ position: absolute; bottom: 0; right: 0; width: 8px; height: 8px; border-radius: 50%; border: 2px solid var(--surface); }
#page-community .status-dot.online{ background: var(--accent); }
#page-community .status-dot.idle{ background: var(--accent3); }
#page-community .status-dot.dnd{ background: #EF4444; }
#page-community .status-dot.offline{ background: var(--muted); }
#page-community .member-info{ flex: 1; min-width: 0; }
#page-community .member-name{ font-size: 0.82rem; font-weight: 500; color: var(--text); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
#page-community .member-status{ font-size: 0.7rem; color: var(--muted); }
#page-community .poll-card{ background: var(--surface2); border-radius: 10px; padding: 1rem; margin-bottom: 0.75rem; }
#page-community .poll-q{ font-size: 0.88rem; font-weight: 600; color: var(--white); margin-bottom: 0.75rem; }
#page-community .poll-opt{ position: relative; margin-bottom: 0.4rem; }
#page-community .poll-bar{ height: 28px; border-radius: 4px; background: var(--surface); overflow: hidden; cursor: pointer; }
#page-community .poll-fill{ height: 100%; border-radius: 4px; transition: width 0.6s ease; }
#page-community .poll-label{ position: absolute; top: 50%; left: 0.5rem; transform: translateY(-50%); font-size: 0.78rem; font-weight: 500; color: var(--text); white-space: nowrap; }
#page-community .poll-pct{ position: absolute; top: 50%; right: 0.5rem; transform: translateY(-50%); font-size: 0.72rem; font-family: 'JetBrains Mono', monospace; color: var(--muted); }
#page-community .poll-votes{ font-size: 0.7rem; color: var(--muted); text-align: right; margin-top: 0.25rem; }
#page-community .event-pill{ background: var(--surface2); border-radius: 8px; padding: 0.75rem; margin-bottom: 0.5rem; display: flex; gap: 0.75rem; align-items: flex-start; cursor: pointer; border: 1px solid transparent; transition: border-color 0.2s; }
#page-community .event-pill:hover{ border-color: var(--accent2); }
#page-community .event-pill-date{ background: rgba(129,140,248,0.15); border-radius: 6px; padding: 0.4rem 0.5rem; text-align: center; flex-shrink: 0; min-width: 36px; }
#page-community .epd-month{ font-size: 0.6rem; text-transform: uppercase; color: var(--accent2); font-weight: 700; }
#page-community .epd-day{ font-family: 'Syne', sans-serif; font-size: 1.1rem; font-weight: 800; color: var(--white); }
#page-community .event-pill-name{ font-size: 0.82rem; font-weight: 600; color: var(--white); margin-bottom: 0.1rem; }
#page-community .event-pill-sub{ font-size: 0.72rem; color: var(--muted); }
#page-community .search-bar{ padding: 0.75rem 1rem; border-bottom: 1px solid var(--border); }
#page-community .search-input{ width: 100%; background: var(--surface2); border: 1px solid var(--border); border-radius: 6px; padding: 0.4rem 0.75rem; font-family: 'DM Sans', sans-serif; font-size: 0.82rem; color: var(--text); outline: none; }
#page-community .search-input::placeholder{ color: var(--muted); }
#page-community .search-input:focus{ border-color: var(--accent); }
#page-community .voice-status{ background: rgba(110,231,183,0.08); border: 1px solid rgba(110,231,183,0.2); border-radius: 8px; padding: 0.5rem 0.75rem; margin: 0.75rem 0.5rem; font-size: 0.78rem; display: flex; align-items: center; gap: 0.5rem; color: var(--accent); cursor: pointer; }
#page-community .voice-dot{ width: 8px; height: 8px; background: var(--accent); border-radius: 50%; animation: pulse__page-community 1.5s infinite; }
@keyframes pulse__page-community{ 0%,100%{opacity:1} 50%{opacity:0.3} }
#page-community .toast{ position: fixed; bottom: 2rem; left: 50%; transform: translateX(-50%) translateY(100px); background: var(--surface2); border: 1px solid var(--accent); border-radius: 10px; padding: 0.75rem 1.5rem; font-size: 0.85rem; color: var(--text); z-index: 999; transition: transform 0.4s cubic-bezier(0.34,1.56,0.64,1), opacity 0.4s; opacity: 0; display: flex; align-items: center; gap: 0.5rem; box-shadow: 0 8px 32px rgba(0,0,0,0.4); }
#page-community .toast.show{ transform: translateX(-50%) translateY(0); opacity: 1; }
#page-community .emoji-picker{ position: absolute; bottom: 100%; right: 0; background: var(--surface2); border: 1px solid var(--border); border-radius: 12px; padding: 0.75rem; display: none; gap: 0.4rem; flex-wrap: wrap; width: 200px; box-shadow: 0 8px 24px rgba(0,0,0,0.4); z-index: 50; }
#page-community .emoji-picker.open{ display: flex; }
#page-community .ep-emoji{ font-size: 1.3rem; cursor: pointer; padding: 0.2rem; border-radius: 4px; transition: background 0.15s; }
#page-community .ep-emoji:hover{ background: var(--surface); }
#page-community .input-relative{ position: relative; }
@media (max-width: 1100px){#page-community .app{ grid-template-columns: 72px 220px 1fr; }
#page-community .right-sidebar{ display: none; }}
@media (max-width: 768px){#page-community .app{ grid-template-columns: 1fr; }
#page-community .icon-rail, #page-community .channel-list{ display: none; }}
#page-community #gccc-gate{
    position: fixed; inset: 0; z-index: 9999;
    background: radial-gradient(circle at 30% 20%, #1b2030 0%, #0D0F14 60%);
    display: flex; align-items: center; justify-content: center;
    font-family: 'DM Sans', sans-serif;
  }
#page-community #gccc-gate .gate-card{
    width: 380px; max-width: 90vw; background: #161920; border: 1px solid rgba(255,255,255,0.08);
    border-radius: 16px; padding: 36px 32px; color: #E2E8F0; text-align: center;
    box-shadow: 0 20px 60px rgba(0,0,0,0.5);
  }
#page-community #gccc-gate .gate-logo{ font-family:'Syne',sans-serif; font-weight:800; font-size:1.4rem; color:#6EE7B7; margin-bottom:6px; }
#page-community #gccc-gate p.gate-sub{ color:#64748B; font-size:0.85rem; margin-bottom:22px; }
#page-community #gccc-gate input{ width:100%; padding:11px 14px; margin-bottom:12px; border-radius:8px; border:1px solid rgba(255,255,255,0.12); background:#0D0F14; color:#E2E8F0; font-size:0.9rem; }
#page-community #gccc-gate input:focus{ outline:2px solid #6EE7B7; }
#page-community #gccc-gate button.gate-btn{ width:100%; padding:12px; border:none; border-radius:8px; background:#6EE7B7; color:#0D0F14; font-weight:700; cursor:pointer; font-size:0.9rem; margin-top:6px; }
#page-community #gccc-gate button.gate-btn:hover{ background:#5fd6a5; }
#page-community #gccc-gate .gate-toggle{ margin-top:16px; font-size:0.8rem; color:#818CF8; cursor:pointer; }
#page-community #gccc-gate .gate-error{ color:#F472B6; font-size:0.8rem; margin-top:8px; min-height:14px; }
#page-community #gccc-gate .gate-back{ display:block; margin-top:18px; font-size:0.78rem; color:#64748B; text-decoration:none; }
#page-community #gccc-gate .gate-demo-creds{ margin-top:16px; padding:12px 14px; border-radius:8px; background:rgba(110,231,183,0.08); border:1px solid rgba(110,231,183,0.2); text-align:left; }
#page-community #gccc-gate .gate-demo-creds p{ font-size:10px; font-weight:700; letter-spacing:0.08em; text-transform:uppercase; color:#6EE7B7; margin-bottom:6px; }
#page-community #gccc-gate .gate-demo-creds code{ display:block; font-family:monospace; font-size:12.5px; color:#E2E8F0; line-height:1.7; }
#page-community .app[hidden]{ display: none !important; }

/* ===== fundraiser.html ===== */
#page-fundraiser *, #page-fundraiser *::before, #page-fundraiser *::after{box-sizing:border-box;margin:0;padding:0;}
#page-fundraiser{
  --navy:#050D1A;--navy2:#0A1628;--slate:#122040;
  --teal:#00D4B4;--gold:#FFD166;--chalk:#F0F4FF;
  --mist:#8A9BBE;--coral:#FF6B6B;
}
#page-fundraiser{font-family:'Inter',sans-serif;background:var(--navy);color:var(--chalk);line-height:1.6;}
#page-fundraiser a{text-decoration:none;}
#page-fundraiser nav{position:fixed;top:0;left:0;right:0;z-index:900;display:flex;align-items:center;justify-content:space-between;padding:18px 48px;background:rgba(5,13,26,0.92);backdrop-filter:blur(14px);}
#page-fundraiser .nav-logo{font-family:'Bebas Neue',sans-serif;font-size:22px;letter-spacing:0.08em;color:var(--teal);}
#page-fundraiser .nav-back{padding:9px 22px;border-radius:4px;background:transparent;border:1px solid rgba(240,244,255,0.25);color:var(--chalk);font-size:13px;font-weight:600;}
#page-fundraiser .nav-back:hover{border-color:var(--teal);color:var(--teal);}
#page-fundraiser .fr-hero{min-height:60vh;display:flex;align-items:center;justify-content:center;text-align:center;padding:120px 24px 80px;background:radial-gradient(ellipse 80% 60% at 50% 0%,rgba(0,212,180,0.12),transparent),var(--navy);}
#page-fundraiser .fr-hero h1{font-family:'Bebas Neue',sans-serif;font-size:clamp(48px,8vw,96px);letter-spacing:0.03em;line-height:0.95;color:var(--chalk);margin-bottom:20px;}
#page-fundraiser .fr-hero h1 em{font-style:normal;color:var(--gold);}
#page-fundraiser .fr-hero p{font-size:clamp(15px,2vw,19px);color:var(--mist);max-width:560px;margin:0 auto 48px;font-weight:300;}
#page-fundraiser .section{padding:80px 48px;}
#page-fundraiser .inner{max-width:1100px;margin:0 auto;}
#page-fundraiser .label{font-size:11px;font-weight:700;letter-spacing:0.14em;text-transform:uppercase;color:var(--teal);margin-bottom:14px;}
#page-fundraiser .title{font-family:'Bebas Neue',sans-serif;font-size:clamp(36px,5vw,58px);letter-spacing:0.03em;color:var(--chalk);margin-bottom:12px;}
#page-fundraiser .sub{font-size:16px;color:var(--mist);max-width:600px;margin-bottom:48px;line-height:1.75;}
#page-fundraiser .divider{width:48px;height:3px;background:var(--teal);margin:16px 0 24px;}
#page-fundraiser .types-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:24px;}
#page-fundraiser .type-card{background:var(--slate);border-radius:12px;padding:32px;border:1px solid rgba(255,255,255,0.05);transition:border-color 0.2s,transform 0.2s;}
#page-fundraiser .type-card:hover{border-color:rgba(0,212,180,0.3);transform:translateY(-3px);}
#page-fundraiser .type-icon{font-size:36px;margin-bottom:16px;}
#page-fundraiser .type-title{font-family:'DM Serif Display',serif;font-size:20px;color:var(--chalk);margin-bottom:8px;}
#page-fundraiser .type-desc{font-size:14px;color:var(--mist);line-height:1.65;margin-bottom:20px;}
#page-fundraiser .type-btn{display:inline-block;padding:10px 24px;border-radius:4px;background:var(--teal);color:var(--navy);font-size:13px;font-weight:700;letter-spacing:0.04em;transition:background 0.2s;}
#page-fundraiser .type-btn:hover{background:#00FFDF;}
#page-fundraiser .type-btn.gold{background:var(--gold);}
#page-fundraiser .type-btn.gold:hover{background:#ffe08a;}
#page-fundraiser .steps{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:2px;background:rgba(255,255,255,0.04);margin-top:48px;}
#page-fundraiser .step{background:var(--navy2);padding:40px 32px;text-align:center;}
#page-fundraiser .step-num{font-family:'Bebas Neue',sans-serif;font-size:56px;color:var(--teal);line-height:1;}
#page-fundraiser .step-title{font-weight:600;color:var(--chalk);margin:8px 0 6px;}
#page-fundraiser .step-desc{font-size:14px;color:var(--mist);}
#page-fundraiser .form-section{background:var(--slate);border-radius:16px;padding:48px;max-width:680px;margin:0 auto;}
#page-fundraiser .form-section h3{font-family:'Bebas Neue',sans-serif;font-size:36px;color:var(--chalk);letter-spacing:0.04em;margin-bottom:8px;}
#page-fundraiser .form-section p{font-size:14px;color:var(--mist);margin-bottom:32px;}
#page-fundraiser .form-row{display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-bottom:16px;}
#page-fundraiser .form-row.full{grid-template-columns:1fr;}
#page-fundraiser label{display:block;font-size:12px;font-weight:600;letter-spacing:0.06em;text-transform:uppercase;color:var(--mist);margin-bottom:6px;}
#page-fundraiser input, #page-fundraiser select, #page-fundraiser textarea{width:100%;padding:12px 16px;border-radius:6px;border:1px solid rgba(255,255,255,0.1);background:rgba(255,255,255,0.04);color:var(--chalk);font-size:14px;font-family:'Inter',sans-serif;transition:border-color 0.2s;}
#page-fundraiser input:focus, #page-fundraiser select:focus, #page-fundraiser textarea:focus{outline:none;border-color:var(--teal);}
#page-fundraiser textarea{resize:vertical;min-height:100px;}
#page-fundraiser select option{background:var(--navy2);}
#page-fundraiser .submit-btn{width:100%;padding:16px;border-radius:6px;background:var(--teal);color:var(--navy);font-weight:700;font-size:16px;letter-spacing:0.04em;border:none;cursor:pointer;margin-top:8px;transition:background 0.2s;}
#page-fundraiser .submit-btn:hover{background:#00FFDF;}
#page-fundraiser footer{background:var(--navy2);border-top:1px solid rgba(255,255,255,0.06);padding:40px 48px;text-align:center;color:var(--mist);font-size:13px;}
#page-fundraiser footer a{color:var(--teal);}
@media(max-width:768px){#page-fundraiser nav{padding:16px 20px;}
#page-fundraiser .section{padding:60px 20px;}
#page-fundraiser .form-row{grid-template-columns:1fr;}}

/* ===== back-office-login.html ===== */
#page-boLogin *, #page-boLogin *::before, #page-boLogin *::after{ box-sizing: border-box; margin: 0; padding: 0; }
#page-boLogin{
    --teal-50: #E1F5EE; --teal-200: #5DCAA5; --teal-600: #0F6E56; --teal-800: #085041;
    --amber-50: #FAEEDA; --amber-200: #EF9F27; --amber-600: #854F0B;
    --coral-50: #FAECE7; --coral-200: #F0997B; --coral-600: #993C1D;
    --purple-50: #EEEDFE; --purple-200: #AFA9EC; --purple-600: #534AB7;
    --blue-50: #E6F1FB; --blue-200: #85B7EB; --blue-600: #185FA5; --blue-800: #0C447C;
    --gray-50: #F1EFE8; --gray-100: #D3D1C7; --gray-600: #5F5E5A; --gray-800: #444441;
    --bg: #F7F6F2; --surface: #FFFFFF;
    --text: #2C2B27; --text-muted: #5F5E5A;
    --border: rgba(0,0,0,0.1);
    --radius: 14px; --radius-sm: 8px;
  }
#page-boLogin{ font-family: 'Inter', sans-serif; background: var(--bg); color: var(--text); min-height: 100vh; display: flex; }
#page-boLogin .sidebar{ width: 240px; min-height: 100vh; background: var(--teal-800); display: flex; flex-direction: column; padding: 0; flex-shrink: 0; position: sticky; top: 0; height: 100vh; }
#page-boLogin .sidebar-brand{ padding: 24px 20px 20px; border-bottom: 1px solid rgba(255,255,255,0.1); }
#page-boLogin .brand-initials{ width: 40px; height: 40px; border-radius: 10px; background: var(--teal-200); display: flex; align-items: center; justify-content: center; font-family: 'DM Serif Display', serif; font-size: 16px; color: var(--teal-800); margin-bottom: 10px; }
#page-boLogin .brand-name{ font-size: 13px; font-weight: 600; color: #fff; line-height: 1.3; }
#page-boLogin .brand-sub{ font-size: 11px; color: rgba(255,255,255,0.55); margin-top: 2px; }
#page-boLogin .sidebar-nav{ padding: 16px 12px; flex: 1; display: flex; flex-direction: column; gap: 2px; }
#page-boLogin .nav-section-label{ font-size: 10px; font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase; color: rgba(255,255,255,0.4); padding: 12px 8px 6px; }
#page-boLogin .nav-item{ display: flex; align-items: center; gap: 10px; padding: 9px 10px; border-radius: var(--radius-sm); color: rgba(255,255,255,0.7); font-size: 13.5px; font-weight: 400; cursor: pointer; transition: background 0.15s, color 0.15s; border: none; background: none; width: 100%; text-align: left; }
#page-boLogin .nav-item:hover{ background: rgba(255,255,255,0.08); color: #fff; }
#page-boLogin .nav-item.active{ background: rgba(255,255,255,0.15); color: #fff; font-weight: 500; }
#page-boLogin .nav-item svg{ flex-shrink: 0; opacity: 0.9; }
#page-boLogin .sidebar-user{ padding: 14px 16px; border-top: 1px solid rgba(255,255,255,0.1); display: flex; align-items: center; gap: 10px; }
#page-boLogin .user-avatar{ width: 32px; height: 32px; border-radius: 50%; background: var(--amber-200); display: flex; align-items: center; justify-content: center; font-size: 12px; font-weight: 600; color: var(--amber-600); flex-shrink: 0; }
#page-boLogin .user-name{ font-size: 12.5px; font-weight: 500; color: #fff; }
#page-boLogin .user-role{ font-size: 11px; color: rgba(255,255,255,0.5); }
#page-boLogin .main{ flex: 1; display: flex; flex-direction: column; overflow: hidden; }
#page-boLogin .topbar{ background: var(--surface); border-bottom: 1px solid var(--border); padding: 0 28px; height: 60px; display: flex; align-items: center; justify-content: space-between; flex-shrink: 0; }
#page-boLogin .topbar-title{ font-size: 16px; font-weight: 500; color: var(--text); }
#page-boLogin .topbar-date{ font-size: 13px; color: var(--text-muted); }
#page-boLogin .topbar-actions{ display: flex; gap: 10px; align-items: center; }
#page-boLogin .btn{ padding: 7px 14px; border-radius: var(--radius-sm); font-size: 13px; font-weight: 500; cursor: pointer; border: 1px solid var(--border); background: var(--surface); color: var(--text); transition: background 0.15s; }
#page-boLogin .btn:hover{ background: var(--gray-50); }
#page-boLogin .btn-primary{ background: var(--teal-600); color: #fff; border-color: var(--teal-600); }
#page-boLogin .btn-primary:hover{ background: var(--teal-800); border-color: var(--teal-800); }
#page-boLogin .btn-blue{ background: var(--blue-600); color: #fff; border-color: var(--blue-600); }
#page-boLogin .btn-blue:hover{ background: var(--blue-800); border-color: var(--blue-800); }
#page-boLogin .content{ flex: 1; overflow-y: auto; padding: 28px; }
#page-boLogin .page{ display: none; }
#page-boLogin .page.active{ display: block; }
#page-boLogin .card{ background: var(--surface); border-radius: var(--radius); border: 1px solid var(--border); padding: 20px 22px; }
#page-boLogin .card-title{ font-size: 14px; font-weight: 600; color: var(--text); margin-bottom: 16px; display: flex; align-items: center; justify-content: space-between; }
#page-boLogin .card-title span{ font-weight: 400; font-size: 12px; color: var(--text-muted); }
#page-boLogin .stat-grid{ display: grid; grid-template-columns: repeat(4, 1fr); gap: 14px; margin-bottom: 22px; }
#page-boLogin .stat-card{ background: var(--surface); border: 1px solid var(--border); border-radius: var(--radius); padding: 18px 20px; }
#page-boLogin .stat-label{ font-size: 12px; color: var(--text-muted); margin-bottom: 6px; }
#page-boLogin .stat-value{ font-size: 26px; font-weight: 600; color: var(--text); line-height: 1; }
#page-boLogin .stat-sub{ font-size: 11px; color: var(--text-muted); margin-top: 4px; }
#page-boLogin .stat-dot{ width: 8px; height: 8px; border-radius: 50%; display: inline-block; margin-right: 5px; }
#page-boLogin .two-col{ display: grid; grid-template-columns: 1fr 1fr; gap: 18px; margin-bottom: 18px; }
#page-boLogin .schedule-header{ display: grid; grid-template-columns: 80px repeat(5, 1fr); gap: 1px; background: var(--border); border-radius: var(--radius-sm); overflow: hidden; font-size: 12px; }
#page-boLogin .sch-cell{ background: var(--surface); padding: 10px 12px; font-weight: 500; color: var(--text-muted); text-align: center; }
#page-boLogin .sch-time{ background: var(--gray-50); color: var(--text-muted); font-size: 11px; display: flex; align-items: center; justify-content: center; }
#page-boLogin .sch-block{ border-radius: 6px; padding: 5px 8px; font-size: 11px; font-weight: 500; margin: 2px; }
#page-boLogin .sch-teal{ background: var(--teal-50); color: var(--teal-600); }
#page-boLogin .sch-amber{ background: var(--amber-50); color: var(--amber-600); }
#page-boLogin .sch-coral{ background: var(--coral-50); color: var(--coral-600); }
#page-boLogin .sch-purple{ background: var(--purple-50); color: var(--purple-600); }
#page-boLogin .training-card{ border: 1px solid var(--border); border-radius: var(--radius); padding: 16px 18px; display: flex; gap: 14px; align-items: flex-start; cursor: pointer; transition: border-color 0.15s, box-shadow 0.15s; background: var(--surface); }
#page-boLogin .training-card:hover{ border-color: var(--teal-200); }
#page-boLogin .training-icon{ width: 42px; height: 42px; border-radius: 10px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; font-size: 18px; }
#page-boLogin .training-title{ font-size: 14px; font-weight: 500; margin-bottom: 4px; }
#page-boLogin .training-meta{ font-size: 12px; color: var(--text-muted); }
#page-boLogin .training-progress{ margin-top: 10px; }
#page-boLogin .progress-bar-bg{ height: 4px; background: var(--gray-100); border-radius: 2px; overflow: hidden; }
#page-boLogin .progress-bar-fill{ height: 100%; border-radius: 2px; background: var(--teal-200); }
#page-boLogin .badge{ display: inline-block; padding: 2px 8px; border-radius: 20px; font-size: 11px; font-weight: 500; }
#page-boLogin .badge-done{ background: var(--teal-50); color: var(--teal-600); }
#page-boLogin .badge-new{ background: var(--purple-50); color: var(--purple-600); }
#page-boLogin .badge-req{ background: var(--amber-50); color: var(--amber-600); }
#page-boLogin .badge-blue{ background: var(--blue-50); color: var(--blue-600); }
#page-boLogin .lounge-post{ display: flex; gap: 12px; padding: 14px 0; border-bottom: 1px solid var(--border); }
#page-boLogin .lounge-post:last-child{ border-bottom: none; }
#page-boLogin .poster-av{ width: 34px; height: 34px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 12px; font-weight: 600; flex-shrink: 0; }
#page-boLogin .lounge-msg{ font-size: 13.5px; line-height: 1.55; }
#page-boLogin .lounge-who{ font-size: 12px; font-weight: 500; margin-bottom: 3px; color: var(--text); }
#page-boLogin .lounge-time{ font-size: 11px; color: var(--text-muted); }
#page-boLogin .lounge-input-row{ display: flex; gap: 10px; margin-top: 16px; }
#page-boLogin .lounge-input{ flex: 1; padding: 9px 14px; border-radius: 20px; border: 1px solid var(--border); font-size: 13.5px; font-family: 'Inter', sans-serif; outline: none; background: var(--gray-50); color: var(--text); }
#page-boLogin .lounge-input:focus{ border-color: var(--teal-200); background: var(--surface); }
#page-boLogin table{ width: 100%; border-collapse: collapse; font-size: 13.5px; }
#page-boLogin th{ text-align: left; font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.06em; color: var(--text-muted); padding: 0 0 10px; border-bottom: 1px solid var(--border); }
#page-boLogin td{ padding: 12px 0; border-bottom: 1px solid var(--border); color: var(--text); vertical-align: middle; }
#page-boLogin tr:last-child td{ border-bottom: none; }
#page-boLogin .staff-av{ width: 28px; height: 28px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 11px; font-weight: 600; margin-right: 8px; flex-shrink: 0; }
#page-boLogin .staff-name{ display: flex; align-items: center; }
#page-boLogin .status-dot{ width: 7px; height: 7px; border-radius: 50%; display: inline-block; margin-right: 6px; }
#page-boLogin .announcement{ background: var(--teal-50); border: 1px solid var(--teal-200); border-radius: var(--radius); padding: 14px 18px; margin-bottom: 20px; display: flex; align-items: center; gap: 12px; }
#page-boLogin .announcement-icon{ font-size: 18px; flex-shrink: 0; }
#page-boLogin .announcement-text{ font-size: 13.5px; color: var(--teal-800); line-height: 1.5; }
#page-boLogin .announcement-text strong{ font-weight: 600; }
#page-boLogin .room-page-header{ display: flex; align-items: center; justify-content: space-between; margin-bottom: 20px; }
#page-boLogin .room-page-header h2{ font-size: 15px; font-weight: 600; }
#page-boLogin .room-grid{ display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; margin-bottom: 24px; }
#page-boLogin .room-card{ background: var(--surface); border: 1px solid var(--border); border-radius: var(--radius); padding: 18px 20px; transition: border-color 0.15s; }
#page-boLogin .room-card:hover{ border-color: var(--blue-200); }
#page-boLogin .room-card.occupied{ border-left: 3px solid var(--teal-600); }
#page-boLogin .room-card.available{ border-left: 3px solid var(--gray-100); }
#page-boLogin .room-card.reserved{ border-left: 3px solid var(--amber-200); }
#page-boLogin .room-card.maintenance{ border-left: 3px solid var(--coral-200); }
#page-boLogin .room-name{ font-size: 14px; font-weight: 600; margin-bottom: 3px; }
#page-boLogin .room-type{ font-size: 11px; color: var(--text-muted); margin-bottom: 12px; }
#page-boLogin .room-status-row{ display: flex; align-items: center; justify-content: space-between; margin-bottom: 10px; }
#page-boLogin .room-status{ display: flex; align-items: center; gap: 5px; font-size: 12px; font-weight: 500; }
#page-boLogin .room-cap{ font-size: 11px; color: var(--text-muted); }
#page-boLogin .room-current{ background: var(--gray-50); border-radius: var(--radius-sm); padding: 10px 12px; font-size: 12px; }
#page-boLogin .room-current-label{ color: var(--text-muted); margin-bottom: 3px; }
#page-boLogin .room-current-val{ font-weight: 500; color: var(--text); }
#page-boLogin .room-actions{ display: flex; gap: 8px; margin-top: 12px; }
#page-boLogin .room-actions .btn{ font-size: 12px; padding: 5px 10px; flex: 1; }
#page-boLogin .room-detail-panel{ background: var(--surface); border: 1px solid var(--border); border-radius: var(--radius); padding: 20px 22px; margin-bottom: 18px; }
#page-boLogin .room-schedule-row{ display: flex; gap: 10px; align-items: center; padding: 10px 0; border-bottom: 1px solid var(--border); font-size: 13px; }
#page-boLogin .room-schedule-row:last-child{ border-bottom: none; }
#page-boLogin .room-sched-time{ width: 80px; font-size: 12px; color: var(--text-muted); flex-shrink: 0; }
#page-boLogin .room-sched-event{ flex: 1; font-weight: 500; }
#page-boLogin .room-sched-who{ font-size: 12px; color: var(--text-muted); }
#page-boLogin .equip-tag{ display: inline-block; padding: 3px 9px; border-radius: 20px; font-size: 11px; font-weight: 500; background: var(--blue-50); color: var(--blue-800); margin: 3px 3px 3px 0; }
#page-boLogin .issue-row{ display: flex; align-items: start; gap: 10px; padding: 10px 0; border-bottom: 1px solid var(--border); font-size: 13px; }
#page-boLogin .issue-row:last-child{ border-bottom: none; }
#page-boLogin .issue-icon{ font-size: 16px; flex-shrink: 0; }
#page-boLogin .issue-desc{ flex: 1; }
#page-boLogin .issue-meta{ font-size: 11px; color: var(--text-muted); margin-top: 2px; }
#page-boLogin .tab-row{ display: flex; gap: 4px; margin-bottom: 18px; border-bottom: 1px solid var(--border); }
#page-boLogin .tab-btn{ padding: 8px 16px; font-size: 13px; font-weight: 500; color: var(--text-muted); background: none; border: none; border-bottom: 2px solid transparent; cursor: pointer; margin-bottom: -1px; transition: color 0.15s, border-color 0.15s; }
#page-boLogin .tab-btn.active{ color: var(--blue-600); border-bottom-color: var(--blue-600); }
#page-boLogin .tab-btn:hover{ color: var(--text); }
#page-boLogin .tab-content{ display: none; }
#page-boLogin .tab-content.active{ display: block; }
#page-boLogin #gccc-staff-gate{ position: fixed; inset: 0; z-index: 9999; background: linear-gradient(135deg,var(--teal-800),#0a3a2f); display:flex; align-items:center; justify-content:center; font-family:'Inter',sans-serif; }
#page-boLogin #gccc-staff-gate .gate-card{ width: 380px; max-width: 90vw; background: var(--surface); border-radius: var(--radius); padding: 36px 32px; text-align:center; box-shadow: 0 20px 60px rgba(0,0,0,0.35); }
#page-boLogin #gccc-staff-gate .gate-logo{ font-family:'DM Serif Display',serif; font-size:1.4rem; color: var(--teal-800); margin-bottom:4px; }
#page-boLogin #gccc-staff-gate p.gate-sub{ color: var(--text-muted); font-size:0.85rem; margin-bottom:22px; }
#page-boLogin #gccc-staff-gate input{ width:100%; padding:11px 14px; margin-bottom:12px; border-radius:var(--radius-sm); border:1px solid var(--border); font-size:0.9rem; }
#page-boLogin #gccc-staff-gate button.gate-btn{ width:100%; padding:12px; border:none; border-radius:var(--radius-sm); background:var(--teal-600); color:#fff; font-weight:600; cursor:pointer; font-size:0.9rem; margin-top:6px; }
#page-boLogin #gccc-staff-gate button.gate-btn:hover{ background: var(--teal-800); }
#page-boLogin #gccc-staff-gate .gate-error{ color:#993C1D; font-size:0.8rem; margin-top:8px; min-height:14px; }
#page-boLogin #gccc-staff-gate .gate-back{ display:block; margin-top:18px; font-size:0.78rem; color:var(--text-muted); text-decoration:none; }
#page-boLogin #gccc-staff-gate .gate-demo-creds{ margin-top:16px; padding:12px 14px; border-radius:var(--radius-sm); background:rgba(15,110,86,0.06); border:1px solid rgba(15,110,86,0.18); text-align:left; }
#page-boLogin #gccc-staff-gate .gate-demo-creds p{ font-size:10px; font-weight:700; letter-spacing:0.08em; text-transform:uppercase; color:var(--teal-600); margin-bottom:6px; }
#page-boLogin #gccc-staff-gate .gate-demo-creds code{ display:block; font-family:monospace; font-size:12.5px; color:var(--text); line-height:1.7; }
#page-boLogin[data-locked] .sidebar, #page-boLogin[data-locked] .main{ display: none !important; }

/* ===== back-office-dashboard.html ===== */
#page-boDash *, #page-boDash *::before, #page-boDash *::after{ box-sizing: border-box; margin: 0; padding: 0; }
#page-boDash{
    --teal-50: #E1F5EE; --teal-200: #5DCAA5; --teal-600: #0F6E56; --teal-800: #085041;
    --amber-50: #FAEEDA; --amber-200: #EF9F27; --amber-600: #854F0B;
    --coral-50: #FAECE7; --coral-200: #F0997B; --coral-600: #993C1D;
    --purple-50: #EEEDFE; --purple-200: #AFA9EC; --purple-600: #534AB7;
    --blue-50: #E6F1FB; --blue-200: #85B7EB; --blue-600: #185FA5; --blue-800: #0C447C;
    --gray-50: #F1EFE8; --gray-100: #D3D1C7; --gray-600: #5F5E5A; --gray-800: #444441;
    --bg: #F7F6F2; --surface: #FFFFFF;
    --text: #2C2B27; --text-muted: #5F5E5A;
    --border: rgba(0,0,0,0.1);
    --radius: 14px; --radius-sm: 8px;
  }
#page-boDash{ font-family: 'Inter', sans-serif; background: var(--bg); color: var(--text); min-height: 100vh; display: flex; }
#page-boDash .sidebar{ width: 240px; min-height: 100vh; background: var(--teal-800); display: flex; flex-direction: column; padding: 0; flex-shrink: 0; position: sticky; top: 0; height: 100vh; }
#page-boDash .sidebar-brand{ padding: 24px 20px 20px; border-bottom: 1px solid rgba(255,255,255,0.1); }
#page-boDash .brand-initials{ width: 40px; height: 40px; border-radius: 10px; background: var(--teal-200); display: flex; align-items: center; justify-content: center; font-family: 'DM Serif Display', serif; font-size: 16px; color: var(--teal-800); margin-bottom: 10px; }
#page-boDash .brand-name{ font-size: 13px; font-weight: 600; color: #fff; line-height: 1.3; }
#page-boDash .brand-sub{ font-size: 11px; color: rgba(255,255,255,0.55); margin-top: 2px; }
#page-boDash .sidebar-nav{ padding: 16px 12px; flex: 1; display: flex; flex-direction: column; gap: 2px; }
#page-boDash .nav-section-label{ font-size: 10px; font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase; color: rgba(255,255,255,0.4); padding: 12px 8px 6px; }
#page-boDash .nav-item{ display: flex; align-items: center; gap: 10px; padding: 9px 10px; border-radius: var(--radius-sm); color: rgba(255,255,255,0.7); font-size: 13.5px; font-weight: 400; cursor: pointer; transition: background 0.15s, color 0.15s; border: none; background: none; width: 100%; text-align: left; }
#page-boDash .nav-item:hover{ background: rgba(255,255,255,0.08); color: #fff; }
#page-boDash .nav-item.active{ background: rgba(255,255,255,0.15); color: #fff; font-weight: 500; }
#page-boDash .nav-item svg{ flex-shrink: 0; opacity: 0.9; }
#page-boDash .sidebar-user{ padding: 14px 16px; border-top: 1px solid rgba(255,255,255,0.1); display: flex; align-items: center; gap: 10px; }
#page-boDash .user-avatar{ width: 32px; height: 32px; border-radius: 50%; background: var(--amber-200); display: flex; align-items: center; justify-content: center; font-size: 12px; font-weight: 600; color: var(--amber-600); flex-shrink: 0; }
#page-boDash .user-name{ font-size: 12.5px; font-weight: 500; color: #fff; }
#page-boDash .user-role{ font-size: 11px; color: rgba(255,255,255,0.5); }
#page-boDash .main{ flex: 1; display: flex; flex-direction: column; overflow: hidden; }
#page-boDash .topbar{ background: var(--surface); border-bottom: 1px solid var(--border); padding: 0 28px; height: 60px; display: flex; align-items: center; justify-content: space-between; flex-shrink: 0; }
#page-boDash .topbar-title{ font-size: 16px; font-weight: 500; color: var(--text); }
#page-boDash .topbar-date{ font-size: 13px; color: var(--text-muted); }
#page-boDash .topbar-actions{ display: flex; gap: 10px; align-items: center; }
#page-boDash .btn{ padding: 7px 14px; border-radius: var(--radius-sm); font-size: 13px; font-weight: 500; cursor: pointer; border: 1px solid var(--border); background: var(--surface); color: var(--text); transition: background 0.15s; }
#page-boDash .btn:hover{ background: var(--gray-50); }
#page-boDash .btn-primary{ background: var(--teal-600); color: #fff; border-color: var(--teal-600); }
#page-boDash .btn-primary:hover{ background: var(--teal-800); border-color: var(--teal-800); }
#page-boDash .btn-blue{ background: var(--blue-600); color: #fff; border-color: var(--blue-600); }
#page-boDash .btn-blue:hover{ background: var(--blue-800); border-color: var(--blue-800); }
#page-boDash .content{ flex: 1; overflow-y: auto; padding: 28px; }
#page-boDash .page{ display: none; }
#page-boDash .page.active{ display: block; }
#page-boDash .card{ background: var(--surface); border-radius: var(--radius); border: 1px solid var(--border); padding: 20px 22px; }
#page-boDash .card-title{ font-size: 14px; font-weight: 600; color: var(--text); margin-bottom: 16px; display: flex; align-items: center; justify-content: space-between; }
#page-boDash .card-title span{ font-weight: 400; font-size: 12px; color: var(--text-muted); }
#page-boDash .stat-grid{ display: grid; grid-template-columns: repeat(4, 1fr); gap: 14px; margin-bottom: 22px; }
#page-boDash .stat-card{ background: var(--surface); border: 1px solid var(--border); border-radius: var(--radius); padding: 18px 20px; }
#page-boDash .stat-label{ font-size: 12px; color: var(--text-muted); margin-bottom: 6px; }
#page-boDash .stat-value{ font-size: 26px; font-weight: 600; color: var(--text); line-height: 1; }
#page-boDash .stat-sub{ font-size: 11px; color: var(--text-muted); margin-top: 4px; }
#page-boDash .stat-dot{ width: 8px; height: 8px; border-radius: 50%; display: inline-block; margin-right: 5px; }
#page-boDash .two-col{ display: grid; grid-template-columns: 1fr 1fr; gap: 18px; margin-bottom: 18px; }
#page-boDash .schedule-header{ display: grid; grid-template-columns: 80px repeat(5, 1fr); gap: 1px; background: var(--border); border-radius: var(--radius-sm); overflow: hidden; font-size: 12px; }
#page-boDash .sch-cell{ background: var(--surface); padding: 10px 12px; font-weight: 500; color: var(--text-muted); text-align: center; }
#page-boDash .sch-time{ background: var(--gray-50); color: var(--text-muted); font-size: 11px; display: flex; align-items: center; justify-content: center; }
#page-boDash .sch-block{ border-radius: 6px; padding: 5px 8px; font-size: 11px; font-weight: 500; margin: 2px; }
#page-boDash .sch-teal{ background: var(--teal-50); color: var(--teal-600); }
#page-boDash .sch-amber{ background: var(--amber-50); color: var(--amber-600); }
#page-boDash .sch-coral{ background: var(--coral-50); color: var(--coral-600); }
#page-boDash .sch-purple{ background: var(--purple-50); color: var(--purple-600); }
#page-boDash .training-card{ border: 1px solid var(--border); border-radius: var(--radius); padding: 16px 18px; display: flex; gap: 14px; align-items: flex-start; cursor: pointer; transition: border-color 0.15s, box-shadow 0.15s; background: var(--surface); }
#page-boDash .training-card:hover{ border-color: var(--teal-200); }
#page-boDash .training-icon{ width: 42px; height: 42px; border-radius: 10px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; font-size: 18px; }
#page-boDash .training-title{ font-size: 14px; font-weight: 500; margin-bottom: 4px; }
#page-boDash .training-meta{ font-size: 12px; color: var(--text-muted); }
#page-boDash .training-progress{ margin-top: 10px; }
#page-boDash .progress-bar-bg{ height: 4px; background: var(--gray-100); border-radius: 2px; overflow: hidden; }
#page-boDash .progress-bar-fill{ height: 100%; border-radius: 2px; background: var(--teal-200); }
#page-boDash .badge{ display: inline-block; padding: 2px 8px; border-radius: 20px; font-size: 11px; font-weight: 500; }
#page-boDash .badge-done{ background: var(--teal-50); color: var(--teal-600); }
#page-boDash .badge-new{ background: var(--purple-50); color: var(--purple-600); }
#page-boDash .badge-req{ background: var(--amber-50); color: var(--amber-600); }
#page-boDash .badge-blue{ background: var(--blue-50); color: var(--blue-600); }
#page-boDash .lounge-post{ display: flex; gap: 12px; padding: 14px 0; border-bottom: 1px solid var(--border); }
#page-boDash .lounge-post:last-child{ border-bottom: none; }
#page-boDash .poster-av{ width: 34px; height: 34px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 12px; font-weight: 600; flex-shrink: 0; }
#page-boDash .lounge-msg{ font-size: 13.5px; line-height: 1.55; }
#page-boDash .lounge-who{ font-size: 12px; font-weight: 500; margin-bottom: 3px; color: var(--text); }
#page-boDash .lounge-time{ font-size: 11px; color: var(--text-muted); }
#page-boDash .lounge-input-row{ display: flex; gap: 10px; margin-top: 16px; }
#page-boDash .lounge-input{ flex: 1; padding: 9px 14px; border-radius: 20px; border: 1px solid var(--border); font-size: 13.5px; font-family: 'Inter', sans-serif; outline: none; background: var(--gray-50); color: var(--text); }
#page-boDash .lounge-input:focus{ border-color: var(--teal-200); background: var(--surface); }
#page-boDash table{ width: 100%; border-collapse: collapse; font-size: 13.5px; }
#page-boDash th{ text-align: left; font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.06em; color: var(--text-muted); padding: 0 0 10px; border-bottom: 1px solid var(--border); }
#page-boDash td{ padding: 12px 0; border-bottom: 1px solid var(--border); color: var(--text); vertical-align: middle; }
#page-boDash tr:last-child td{ border-bottom: none; }
#page-boDash .staff-av{ width: 28px; height: 28px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 11px; font-weight: 600; margin-right: 8px; flex-shrink: 0; }
#page-boDash .staff-name{ display: flex; align-items: center; }
#page-boDash .status-dot{ width: 7px; height: 7px; border-radius: 50%; display: inline-block; margin-right: 6px; }
#page-boDash .announcement{ background: var(--teal-50); border: 1px solid var(--teal-200); border-radius: var(--radius); padding: 14px 18px; margin-bottom: 20px; display: flex; align-items: center; gap: 12px; }
#page-boDash .announcement-icon{ font-size: 18px; flex-shrink: 0; }
#page-boDash .announcement-text{ font-size: 13.5px; color: var(--teal-800); line-height: 1.5; }
#page-boDash .announcement-text strong{ font-weight: 600; }
#page-boDash .room-page-header{ display: flex; align-items: center; justify-content: space-between; margin-bottom: 20px; }
#page-boDash .room-page-header h2{ font-size: 15px; font-weight: 600; }
#page-boDash .room-grid{ display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; margin-bottom: 24px; }
#page-boDash .room-card{ background: var(--surface); border: 1px solid var(--border); border-radius: var(--radius); padding: 18px 20px; transition: border-color 0.15s; }
#page-boDash .room-card:hover{ border-color: var(--blue-200); }
#page-boDash .room-card.occupied{ border-left: 3px solid var(--teal-600); }
#page-boDash .room-card.available{ border-left: 3px solid var(--gray-100); }
#page-boDash .room-card.reserved{ border-left: 3px solid var(--amber-200); }
#page-boDash .room-card.maintenance{ border-left: 3px solid var(--coral-200); }
#page-boDash .room-name{ font-size: 14px; font-weight: 600; margin-bottom: 3px; }
#page-boDash .room-type{ font-size: 11px; color: var(--text-muted); margin-bottom: 12px; }
#page-boDash .room-status-row{ display: flex; align-items: center; justify-content: space-between; margin-bottom: 10px; }
#page-boDash .room-status{ display: flex; align-items: center; gap: 5px; font-size: 12px; font-weight: 500; }
#page-boDash .room-cap{ font-size: 11px; color: var(--text-muted); }
#page-boDash .room-current{ background: var(--gray-50); border-radius: var(--radius-sm); padding: 10px 12px; font-size: 12px; }
#page-boDash .room-current-label{ color: var(--text-muted); margin-bottom: 3px; }
#page-boDash .room-current-val{ font-weight: 500; color: var(--text); }
#page-boDash .room-actions{ display: flex; gap: 8px; margin-top: 12px; }
#page-boDash .room-actions .btn{ font-size: 12px; padding: 5px 10px; flex: 1; }
#page-boDash .room-detail-panel{ background: var(--surface); border: 1px solid var(--border); border-radius: var(--radius); padding: 20px 22px; margin-bottom: 18px; }
#page-boDash .room-schedule-row{ display: flex; gap: 10px; align-items: center; padding: 10px 0; border-bottom: 1px solid var(--border); font-size: 13px; }
#page-boDash .room-schedule-row:last-child{ border-bottom: none; }
#page-boDash .room-sched-time{ width: 80px; font-size: 12px; color: var(--text-muted); flex-shrink: 0; }
#page-boDash .room-sched-event{ flex: 1; font-weight: 500; }
#page-boDash .room-sched-who{ font-size: 12px; color: var(--text-muted); }
#page-boDash .equip-tag{ display: inline-block; padding: 3px 9px; border-radius: 20px; font-size: 11px; font-weight: 500; background: var(--blue-50); color: var(--blue-800); margin: 3px 3px 3px 0; }
#page-boDash .issue-row{ display: flex; align-items: start; gap: 10px; padding: 10px 0; border-bottom: 1px solid var(--border); font-size: 13px; }
#page-boDash .issue-row:last-child{ border-bottom: none; }
#page-boDash .issue-icon{ font-size: 16px; flex-shrink: 0; }
#page-boDash .issue-desc{ flex: 1; }
#page-boDash .issue-meta{ font-size: 11px; color: var(--text-muted); margin-top: 2px; }
#page-boDash .tab-row{ display: flex; gap: 4px; margin-bottom: 18px; border-bottom: 1px solid var(--border); }
#page-boDash .tab-btn{ padding: 8px 16px; font-size: 13px; font-weight: 500; color: var(--text-muted); background: none; border: none; border-bottom: 2px solid transparent; cursor: pointer; margin-bottom: -1px; transition: color 0.15s, border-color 0.15s; }
#page-boDash .tab-btn.active{ color: var(--blue-600); border-bottom-color: var(--blue-600); }
#page-boDash .tab-btn:hover{ color: var(--text); }
#page-boDash .tab-content{ display: none; }
#page-boDash .tab-content.active{ display: block; }
</style>
</head>
<body>

<nav id="gccc-master-nav">
  <span class="gccc-brand">🌍 GCCC · Unified</span>
  <button data-page="home">Home</button>
  <button data-page="pages">Sign In / Member Portal</button>
  <button data-page="community">Community Center</button>
  <button data-page="fundraiser">Start a Fundraiser</button>
  <button data-page="boLogin">Back Office Sign In</button>
  <button data-page="boDash">Back Office Dashboard</button>
</nav>

<div id="gccc-panels-wrap">
<div id="page-home" class="gccc-panel" data-page="home" hidden>


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
    <li><a href="#" onclick="gcccNavigate('community');return false;" class="nav-cta" style="background:rgba(0,212,180,0.12);color:var(--teal);border:1px solid rgba(0,212,180,0.3);margin-left:4px;">Community</a></li>
    <li><a href="#" onclick="gcccNavigate('pages');return false;" class="nav-cta">Sign In</a></li>
    <li><a href="#membership" class="nav-cta" style="background:var(--gold);color:var(--navy);margin-left:4px;">Sign Up</a></li>
    <li><a href="#" onclick="gcccNavigate('fundraiser');return false;" class="nav-cta" style="background:var(--teal);color:var(--navy);margin-left:4px;">Start Fundraiser</a></li>
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
      <a class="btn-primary" href="#" onclick="gcccNavigate('fundraiser');return false;" style="background:var(--gold);color:var(--navy);">Start Your Fundraiser Now</a>
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
        <a class="sjoin gold" href="#" onclick="gcccNavigate('fundraiser');return false;">Start Your Fundraiser</a>
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
        <a class="sjoin gold" href="#" onclick="gcccNavigate('fundraiser');return false;">Start Your Fundraiser</a>
      </div>
    </div>
  </div>

</div>
</section>



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
      <a href="#" onclick="gcccNavigate('pages');return false;">Sign In / Member Portal</a>
      <a href="#" onclick="gcccNavigate('fundraiser');return false;">Start a Fundraiser</a>
      <a href="#" onclick="gcccNavigate('community');return false;">Community Center</a>
      <a href="#" onclick="gcccNavigate('boLogin');return false;">Back Office Sign In</a>
      <a href="https://globalcitizencommunitycenter.univer.se/" target="_blank">Public Website ↗</a>
    </div>
  </div>
  <div class="footer-bottom">
    <div class="footer-copy">© 2026 Global Citizens Community Center · Global Hive · New York · Not affiliated with the United Nations or any named organizations. Educational & advocacy use.</div>
    <div class="footer-sdg-badge">SDG 2030 · 17 Goals · One Community</div>
  </div>
</footer>


<div class="glow-toast" id="glowToast"></div>



</div>

<div id="page-pages" class="gccc-panel" data-page="pages" hidden>


<!-- NAV -->
<nav id="site-nav">
  <a class="nav-logo-word" href="#" onclick="navigate('home')">
    <span class="nav-logo-globe">🌍</span>GCCC
  </a>
  <ul class="nav-links" id="navLinks">
    <li><a href="#" onclick="navigate('home')">Home</a></li>
    <li><a href="#" onclick="navigate('home','programs')">Programs</a></li>
    <li><a href="#" onclick="navigate('home','rooms')">Rooms</a></li>
    <li><a href="#" onclick="navigate('home','goals')">Global Goals</a></li>
    <li><a href="#" onclick="navigate('home','impact')">Impact</a></li>
    <li><a href="#" onclick="navigate('home','campaigns')">Take Action</a></li>
    <li><a href="#" onclick="navigate('home','summit')">Summit</a></li>
    <li><a href="#" onclick="navigate('home','membership')">Membership</a></li>
    <li><a href="#" onclick="navigate('dashboard')">My Dashboard</a></li>
    <li><a href="#" onclick="navigate('home','membership')" class="nav-cta" style="background:var(--gold);color:#050D1A;">Sign Up</a></li>
    <li><a href="#" class="nav-cta" onclick="navigate('dashboard')">Sign In</a></li>
  </ul>
  <div class="nav-hamburger" onclick="document.getElementById('navLinks').classList.toggle('open')">
    <span></span><span></span><span></span>
  </div>
</nav>

<!-- PAGE CONTAINER -->
<div id="page-container"></div>



</div>

<div id="page-community" class="gccc-panel" data-page="community" hidden>


<!-- MEMBERSHIP GATE: GCCC Community Center requires (free) membership login -->
<div id="gccc-gate">
  <div class="gate-card">
    <div class="gate-logo">🌍 GCCC Community Center</div>
    <p class="gate-sub" id="gate-sub-text">Membership required. Sign in or join free to enter.</p>
    <input type="text" id="gate-name" placeholder="Your name" />
    <input type="email" id="gate-email" placeholder="Email address" />
    <input type="password" id="gate-password" placeholder="Password" />
    <button class="gate-btn" onclick="gcccEnterCommunity()">Enter as Member</button>
    <div class="gate-error" id="gate-error"></div>
    <div class="gate-demo-creds">
      <p>Demo Credentials</p>
      <code>Username: community@gccc.org</code>
      <code>Password: GlobalCitizen2026</code>
    </div>
    <a class="gate-back" href="#" onclick="gcccNavigate('home');return false;">← Back to main site</a>
  </div>
</div>

<div class="app" hidden id="gccc-app">
  <!-- ICON RAIL -->
  <div class="icon-rail">
    <div class="rail-logo">GH</div>
    <button class="rail-btn active" title="Home">🏠</button>
    <button class="rail-btn" title="Explore">🔍</button>
    <button class="rail-btn" title="Notifications" onclick="showToast('🔔 You have 3 new notifications')">
      🔔<span class="badge"></span>
    </button>
    <div class="rail-divider"></div>
    <button class="rail-btn" title="Tech Hub">💻</button>
    <button class="rail-btn" title="Art Collective">🎨</button>
    <button class="rail-btn" title="Music World">🎵</button>
    <button class="rail-btn" title="Science Forum">🔬</button>
    <button class="rail-btn" title="Language Exchange">🌐</button>
    <div class="rail-divider"></div>
    <button class="rail-btn" style="margin-top:auto" title="Settings" onclick="showToast('⚙️ Settings coming soon')">⚙️</button>
    <button class="rail-btn" title="Profile" onclick="showToast('👤 Profile page opening...')">👤</button>
  </div>

  <!-- CHANNEL LIST -->
  <div class="channel-list">
    <div class="channel-header">
      <div class="server-name">GlobalHive <span class="online-pill">🟢 2,847</span></div>
    </div>
    <div class="search-bar">
      <input class="search-input" type="text" placeholder="🔍 Search channels...">
    </div>

    <div class="channel-group-label">📣 Announcements</div>
    <div class="channel-item" onclick="switchChannel(this,'#announcements','Official updates from the team','chat')">
      <span class="ch-icon">📢</span> announcements
    </div>
    <div class="channel-item" onclick="switchChannel(this,'#news','Global news roundup','chat')">
      <span class="ch-icon">#</span> global-news <span class="channel-unread">5</span>
    </div>

    <div class="channel-group-label">💬 General</div>
    <div class="channel-item active" onclick="switchChannel(this,'#general','The main gathering place for everyone','chat')">
      <span class="ch-icon">#</span> general
    </div>
    <div class="channel-item" onclick="switchChannel(this,'#introductions','Say hello to the community','chat')">
      <span class="ch-icon">#</span> introductions <span class="channel-unread">12</span>
    </div>
    <div class="channel-item" onclick="switchChannel(this,'#memes','For the culture','chat')">
      <span class="ch-icon">#</span> memes
    </div>

    <div class="channel-group-label">🏛️ Community Rooms</div>
    <div class="channel-item" onclick="switchChannel(this,'lobby','Welcome hub — meet members & get oriented','rooms')">
      <span class="ch-icon">🚪</span> Lobby
    </div>
    <div class="channel-item" onclick="switchChannel(this,'gallery','SDG art, photos & member showcases','rooms')">
      <span class="ch-icon">🖼️</span> Gallery
    </div>
    <div class="channel-item" onclick="switchChannel(this,'auditorium','Live talks, summits & keynotes','rooms')">
      <span class="ch-icon">🎭</span> Auditorium
    </div>
    <div class="channel-item" onclick="switchChannel(this,'gym','Wellness, fitness & health challenges','rooms')">
      <span class="ch-icon">💪</span> Gym
    </div>
    <div class="channel-item" onclick="switchChannel(this,'workshop','Skill-building, dev dojo & SDG hackathons','rooms')">
      <span class="ch-icon">🔧</span> Workshop
    </div>
    <div class="channel-item" onclick="switchChannel(this,'cafe','Casual hangout, chat & coffee chats','rooms')">
      <span class="ch-icon">☕</span> Café
    </div>
    <div class="channel-item" onclick="switchChannel(this,'market','GloMart — global goods & SDG marketplace','rooms')">
      <span class="ch-icon">🛒</span> Market <span class="channel-unread">new</span>
    </div>

    <div class="channel-group-label">🌍 SDG Mission Control</div>
    <div class="channel-item" onclick="switchChannel(this,'doomsday-clock','Race against time — turn back the clock with SDG actions','doom')">
      <span class="ch-icon">⏰</span> doomsday-clock
    </div>
    <div class="channel-item" onclick="switchChannel(this,'sdg-tamagotchi','Raise your SDG companion — complete goals to keep it alive!','tama')">
      <span class="ch-icon">🌍</span> sdg-tamagotchi
    </div>
    <div class="channel-item" onclick="switchChannel(this,'live-broadcasts','17 live SDG action channels — tune in & take action','broadcast')">
      <span class="ch-icon">📺</span> live-broadcasts <span class="live-badge">LIVE</span>
    </div>

    <div class="channel-group-label">🛠 Tech & Code</div>
    <div class="channel-item" onclick="switchChannel(this,'#dev-talk','Developer discussions','chat')">
      <span class="ch-icon">#</span> dev-talk
    </div>
    <div class="channel-item" onclick="switchChannel(this,'#help-desk','Get help with your code','chat')">
      <span class="ch-icon">#</span> help-desk
    </div>
    <div class="channel-item" onclick="switchChannel(this,'#projects','Share your projects','chat')">
      <span class="ch-icon">#</span> projects <span class="channel-unread">3</span>
    </div>

    <div class="channel-group-label">🎤 Voice Channels</div>
    <div class="channel-item" onclick="joinVoice(this,'Lounge')">
      <span class="ch-icon">🔊</span> Lounge <span class="ch-voice">● 4</span>
    </div>
    <div class="channel-item" onclick="joinVoice(this,'Study Room')">
      <span class="ch-icon">🔊</span> Study Room <span class="ch-voice">● 2</span>
    </div>
    <div class="channel-item" onclick="joinVoice(this,'Gaming')">
      <span class="ch-icon">🔊</span> Gaming <span class="ch-voice">● 8</span>
    </div>

    <div id="voice-status" style="display:none">
      <div class="voice-status">
        <div class="voice-dot"></div>
        <span id="voice-name">Lounge</span> — Connected
        <button style="margin-left:auto;background:none;border:none;color:#EF4444;cursor:pointer" onclick="leaveVoice()">✕</button>
      </div>
    </div>

    <div class="user-bar">
      <div class="user-avatar">YO</div>
      <div>
        <div class="user-name">you</div>
        <div class="user-tag">#4821</div>
      </div>
      <button style="margin-left:auto;background:none;border:none;color:var(--muted);cursor:pointer;font-size:1rem" title="Mute" onclick="showToast('🎤 Microphone muted')">🎤</button>
    </div>
  </div>

  <!-- MAIN CHAT AREA -->
  <div class="chat-area">
    <div class="chat-header">
      <span style="color:var(--muted)" id="chat-channel-prefix">#</span>
      <div>
        <div class="chat-channel-name" id="chat-channel-name">general</div>
        <div class="chat-channel-desc" id="chat-channel-desc">The main gathering place for everyone</div>
      </div>
      <div class="chat-actions">
        <button class="hdr-btn" onclick="showToast('🔔 Notifications configured')" title="Notifications">🔔</button>
        <button class="hdr-btn" onclick="showToast('📌 Pinned messages loading...')" title="Pinned">📌</button>
        <button class="hdr-btn" onclick="showToast('👥 Members panel toggled')" title="Members">👥</button>
        <button class="hdr-btn" onclick="showToast('🔍 Search opened')" title="Search">🔍</button>
      </div>
    </div>

    <div class="channel-tabs" id="main-tabs">
      <div class="tab active" onclick="setTab(this,'chat-panel')">💬 Chat</div>
      <div class="tab" onclick="setTab(this,'doom-panel');switchToDoom()">⏰ Doomsday Clock</div>
      <div class="tab" onclick="setTab(this,'tama-panel');switchToTama()">🌍 SDG Tamagotchi</div>
      <div class="tab" onclick="setTab(this,'rooms-panel');switchToRooms()">🏛️ Rooms</div>
      <div class="tab" onclick="setTab(this,'broadcast-panel');switchToBroadcast()">📺 Live Broadcasts</div>
    </div>

    <div class="main-content" id="main-content">

      <!-- CHAT PANEL -->
      <div class="panel active" id="chat-panel" style="flex-direction:column">
        <div class="messages" id="messages">
          <div class="day-divider">Today</div>
          <div class="msg-group">
            <div class="msg-avatar" style="background:linear-gradient(135deg,#6EE7B7,#3B82F6)">SA</div>
            <div class="msg-body">
              <div class="msg-meta">
                <span class="msg-author">Sakura_A</span>
                <span class="msg-role" style="background:rgba(110,231,183,0.15);color:var(--accent)">MOD</span>
                <span class="msg-time">9:14 AM</span>
              </div>
              <div class="msg-content">Good morning GlobalHive! 🌅 We just crossed <strong>50,000 members</strong> — that's incredible. Thank you all for making this such a welcoming space. And reminder — every SDG action in <strong>#doomsday-clock</strong> helps turn back the clock. We're at 89 seconds to midnight. Let's push it back!</div>
              <div class="msg-reactions">
                <div class="reaction mine" onclick="toggleReaction(this)">🎉 <span>248</span></div>
                <div class="reaction" onclick="toggleReaction(this)">❤️ <span>192</span></div>
                <div class="reaction" onclick="toggleReaction(this)">🌟 <span>87</span></div>
              </div>
            </div>
          </div>
          <div class="msg-group">
            <div class="msg-avatar" style="background:linear-gradient(135deg,#818CF8,#EC4899)">RK</div>
            <div class="msg-body">
              <div class="msg-meta">
                <span class="msg-author">ravi_k</span>
                <span class="msg-time">9:22 AM</span>
              </div>
              <div class="msg-content">Just completed the "Zero Hunger" goal in <strong>#sdg-tamagotchi</strong> and got +4s back on the clock 🔥 The Goal 2 live channel is absolutely popping right now too</div>
              <div class="msg-reactions">
                <div class="reaction" onclick="toggleReaction(this)">🌾 <span>41</span></div>
                <div class="reaction" onclick="toggleReaction(this)">😂 <span>12</span></div>
              </div>
            </div>
          </div>
          <div class="msg-group">
            <div class="msg-avatar" style="background:linear-gradient(135deg,#FB923C,#F472B6)">ML</div>
            <div class="msg-body">
              <div class="msg-meta">
                <span class="msg-author">mia_l</span>
                <span class="msg-time">9:31 AM</span>
              </div>
              <div class="msg-content">My SDG planet 🌍 is named Hopebug and she is THRIVING. I've completed 6 SDG tasks today. The climate action broadcast is incredible — live from COP negotiations!</div>
              <div class="msg-embed">
                <div class="embed-title">📺 SDG Goal 13 — Climate Action (LIVE)</div>
                <div class="embed-desc">12,400 viewers · Live from COP Climate Negotiations · Join the conversation</div>
              </div>
              <div class="msg-reactions">
                <div class="reaction" onclick="toggleReaction(this)">🌍 <span>77</span></div>
                <div class="reaction" onclick="toggleReaction(this)">🌍 <span>55</span></div>
              </div>
            </div>
          </div>
          <div class="msg-group">
            <div class="msg-avatar" style="background:linear-gradient(135deg,#34D399,#059669)">DX</div>
            <div class="msg-body">
              <div class="msg-meta">
                <span class="msg-author">dev_xander</span>
                <span class="msg-role" style="background:rgba(129,140,248,0.15);color:var(--accent2)">DEV</span>
                <span class="msg-time">9:44 AM</span>
              </div>
              <div class="msg-content">Community milestone: we've collectively turned the clock back by <code>12 seconds</code> this week through SDG actions. If we hit 50 seconds total by 2030 we end extreme poverty. Keep going everyone 🚀</div>
              <div class="msg-reactions">
                <div class="reaction" onclick="toggleReaction(this)">🚀 <span>55</span></div>
                <div class="reaction" onclick="toggleReaction(this)">🙏 <span>30</span></div>
              </div>
            </div>
          </div>
        </div>
        <div class="typing-indicator" id="typing-indicator"></div>
        <div class="chat-input-area">
          <div class="input-box">
            <span class="input-prefix">➕</span>
            <input class="chat-input" id="chat-input" type="text" placeholder="Message #general..." onkeydown="handleInput(event)">
            <div class="input-actions">
              <button class="inp-btn" onclick="toggleEmoji()" title="Emoji">😊</button>
              <button class="inp-btn" title="GIF" onclick="showToast('🎬 GIF picker opening...')">GIF</button>
              <button class="inp-btn" title="Attach" onclick="showToast('📎 File upload ready')">📎</button>
              <div class="input-relative">
                <div class="emoji-picker" id="emoji-picker">
                  <span class="ep-emoji" onclick="insertEmoji('😂')">😂</span>
                  <span class="ep-emoji" onclick="insertEmoji('🔥')">🔥</span>
                  <span class="ep-emoji" onclick="insertEmoji('💯')">💯</span>
                  <span class="ep-emoji" onclick="insertEmoji('🚀')">🚀</span>
                  <span class="ep-emoji" onclick="insertEmoji('❤️')">❤️</span>
                  <span class="ep-emoji" onclick="insertEmoji('👀')">👀</span>
                  <span class="ep-emoji" onclick="insertEmoji('🎉')">🎉</span>
                  <span class="ep-emoji" onclick="insertEmoji('👍')">👍</span>
                  <span class="ep-emoji" onclick="insertEmoji('🌍')">🌍</span>
                  <span class="ep-emoji" onclick="insertEmoji('🌱')">🌱</span>
                  <span class="ep-emoji" onclick="insertEmoji('⏰')">⏰</span>
                  <span class="ep-emoji" onclick="insertEmoji('🌍')">🌍</span>
                </div>
              </div>
              <button class="inp-btn send-btn" onclick="sendMessage()" title="Send">↑</button>
            </div>
          </div>
        </div>
      </div>

      <!-- DOOMSDAY CLOCK PANEL -->
      <div class="panel" id="doom-panel" style="flex-direction:column;overflow-y:auto">
        <div class="doom-panel" style="display:flex;flex-direction:column;align-items:center;padding:2rem">
          <div class="doom-header">
            <div class="doom-title">⏰ Doomsday Clock</div>
            <div class="doom-subtitle">The clock stands at <strong id="doom-seconds-text">89 seconds</strong> to midnight — representing global catastrophe. Every SDG action our community takes pushes it back. End extreme poverty by 2030.</div>
          </div>

          <div class="doom-clock-wrap">
            <svg class="doom-clock-svg" viewBox="0 0 240 240" xmlns="http://www.w3.org/2000/svg">
              <circle class="doom-clock-track" cx="120" cy="120" r="100"/>
              <circle class="doom-clock-arc" id="doom-arc" cx="120" cy="120" r="100"
                stroke="#EF4444"
                stroke-dasharray="628.3"
                stroke-dashoffset="628.3"/>
            </svg>
            <div class="doom-clock-center">
              <div class="doom-seconds" id="doom-display">89</div>
              <div class="doom-unit">seconds</div>
              <div class="doom-to-midnight">to midnight</div>
            </div>
          </div>

          <div class="doom-progress-wrap">
            <div class="doom-progress-label">
              <span>🌍 Community SDG Progress</span>
              <span id="doom-pct-text">0% to 2030 goal</span>
            </div>
            <div class="doom-progress-bar">
              <div class="doom-progress-fill" id="doom-progress" style="width:0%"></div>
            </div>
          </div>

          <div class="sdg-actions-grid">
            <div class="sdg-action-btn" onclick="doomAction(this,'No Poverty',4,'🏠')">
              <span class="sab-icon">🏠</span>No Poverty<div class="sab-reward">−4s</div>
            </div>
            <div class="sdg-action-btn" onclick="doomAction(this,'Zero Hunger',4,'🌾')">
              <span class="sab-icon">🌾</span>Zero Hunger<div class="sab-reward">−4s</div>
            </div>
            <div class="sdg-action-btn" onclick="doomAction(this,'Good Health',3,'❤️')">
              <span class="sab-icon">❤️</span>Good Health<div class="sab-reward">−3s</div>
            </div>
            <div class="sdg-action-btn" onclick="doomAction(this,'Quality Education',5,'📚')">
              <span class="sab-icon">📚</span>Quality Education<div class="sab-reward">−5s</div>
            </div>
            <div class="sdg-action-btn" onclick="doomAction(this,'Gender Equality',3,'⚖️')">
              <span class="sab-icon">⚖️</span>Gender Equality<div class="sab-reward">−3s</div>
            </div>
            <div class="sdg-action-btn" onclick="doomAction(this,'Clean Water',4,'💧')">
              <span class="sab-icon">💧</span>Clean Water<div class="sab-reward">−4s</div>
            </div>
            <div class="sdg-action-btn" onclick="doomAction(this,'Clean Energy',5,'⚡')">
              <span class="sab-icon">⚡</span>Clean Energy<div class="sab-reward">−5s</div>
            </div>
            <div class="sdg-action-btn" onclick="doomAction(this,'Climate Action',6,'🌿')">
              <span class="sab-icon">🌿</span>Climate Action<div class="sab-reward">−6s</div>
            </div>
            <div class="sdg-action-btn" onclick="doomAction(this,'Life on Land',5,'🦋')">
              <span class="sab-icon">🦋</span>Life on Land<div class="sab-reward">−5s</div>
            </div>
          </div>

          <div class="doom-log" id="doom-log">
            <div class="doom-log-title">📋 Action Log — Global Community</div>
            <div class="doom-log-entry">
              <span class="log-time">09:41</span>
              <span>mia_l completed Climate Action pledge</span>
              <span class="log-delta">−6s</span>
            </div>
            <div class="doom-log-entry">
              <span class="log-time">09:38</span>
              <span>dev_xander completed Quality Education</span>
              <span class="log-delta">−5s</span>
            </div>
            <div class="doom-log-entry">
              <span class="log-time">09:31</span>
              <span>ravi_k completed Zero Hunger</span>
              <span class="log-delta">−4s</span>
            </div>
          </div>
        </div>
      </div>

      <!-- SDG TAMAGOTCHI PANEL — planet earth replaces egg -->
      <div class="panel" id="tama-panel" style="flex-direction:column;overflow-y:auto">
        <div class="tama-panel" style="display:flex;flex-direction:column;align-items:center">
          <div class="tama-title">🌍 SDG Tamagotchi</div>
          <div class="tama-sub">Raise your planet by completing SDG goals. Keep it thriving — or the doomsday clock ticks forward.</div>

          <div class="tama-device">
            <div class="tama-screen">
              <div class="tama-bg-grid"></div>
              <div class="tama-creature" id="tama-creature">🌍</div>
              <div class="tama-name-display" id="tama-name">PLANET EARTH</div>
              <div class="tama-mood" id="tama-mood">"Curious and hopeful..."</div>
              <div class="tama-alert" id="tama-alert" style="display:none"></div>
            </div>
            <div class="tama-stats">
              <div class="tama-stat">
                <div class="tama-stat-label">Health</div>
                <div class="tama-stat-bar"><div class="tama-stat-fill" id="tama-health-bar" style="width:70%;background:#6EE7B7"></div></div>
                <div class="tama-stat-val" id="tama-health-val">70/100</div>
              </div>
              <div class="tama-stat">
                <div class="tama-stat-label">Happiness</div>
                <div class="tama-stat-bar"><div class="tama-stat-fill" id="tama-happy-bar" style="width:60%;background:#818CF8"></div></div>
                <div class="tama-stat-val" id="tama-happy-val">60/100</div>
              </div>
              <div class="tama-stat">
                <div class="tama-stat-label">Impact</div>
                <div class="tama-stat-bar"><div class="tama-stat-fill" id="tama-impact-bar" style="width:20%;background:#FB923C"></div></div>
                <div class="tama-stat-val" id="tama-impact-val">20/100</div>
              </div>
              <div class="tama-stat">
                <div class="tama-stat-label">Evolution</div>
                <div class="tama-stat-bar"><div class="tama-stat-fill" id="tama-evo-bar" style="width:10%;background:#F472B6"></div></div>
                <div class="tama-stat-val" id="tama-evo-val">Seedling</div>
              </div>
            </div>
            <div class="tama-doom-link" id="tama-doom-link">
              ⏰ Your planet affects the doomsday clock — neglect = +3s!
            </div>
          </div>

          <div class="tama-tasks">
            <div class="tama-tasks-title">
              <span>SDG Tasks — Complete to heal your planet</span>
              <span id="tama-tasks-count" style="font-family:'JetBrains Mono',monospace;font-size:0.72rem;color:var(--accent)">0/8 done</span>
            </div>
            <div class="tama-tasks-grid" id="tama-tasks-grid">
              <div class="tama-task" onclick="completeTask(this,12,8,10,'⭐',2)">
                <div class="tama-task-icon">🏠</div>
                <div class="tama-task-info">
                  <div class="tama-task-name">No Poverty Pledge</div>
                  <div class="tama-task-desc">Donate to a poverty relief organization today</div>
                  <div class="tama-task-reward">+12 Health · +8 Happy · −2s clock</div>
                </div>
              </div>
              <div class="tama-task" onclick="completeTask(this,8,12,15,'🍀',4)">
                <div class="tama-task-icon">🌾</div>
                <div class="tama-task-info">
                  <div class="tama-task-name">Zero Hunger Action</div>
                  <div class="tama-task-desc">Volunteer or donate to a food bank</div>
                  <div class="tama-task-reward">+8 Health · +12 Happy · −4s clock</div>
                </div>
              </div>
              <div class="tama-task" onclick="completeTask(this,15,10,20,'🌿',6)">
                <div class="tama-task-icon">🌿</div>
                <div class="tama-task-info">
                  <div class="tama-task-name">Climate Champion</div>
                  <div class="tama-task-desc">Reduce your carbon footprint this week</div>
                  <div class="tama-task-reward">+15 Health · +10 Happy · −6s clock</div>
                </div>
              </div>
              <div class="tama-task" onclick="completeTask(this,10,15,18,'📖',5)">
                <div class="tama-task-icon">📚</div>
                <div class="tama-task-info">
                  <div class="tama-task-name">Education Access</div>
                  <div class="tama-task-desc">Support a student's learning journey</div>
                  <div class="tama-task-reward">+10 Health · +15 Happy · −5s clock</div>
                </div>
              </div>
              <div class="tama-task" onclick="completeTask(this,8,8,12,'💧',4)">
                <div class="tama-task-icon">💧</div>
                <div class="tama-task-info">
                  <div class="tama-task-name">Clean Water Pledge</div>
                  <div class="tama-task-desc">Support clean water access initiatives</div>
                  <div class="tama-task-reward">+8 Health · +8 Happy · −4s clock</div>
                </div>
              </div>
              <div class="tama-task" onclick="completeTask(this,6,10,8,'⚡',5)">
                <div class="tama-task-icon">⚡</div>
                <div class="tama-task-info">
                  <div class="tama-task-name">Clean Energy Switch</div>
                  <div class="tama-task-desc">Switch one appliance to renewable energy</div>
                  <div class="tama-task-reward">+6 Health · +10 Happy · −5s clock</div>
                </div>
              </div>
              <div class="tama-task" onclick="completeTask(this,5,12,10,'🤝',3)">
                <div class="tama-task-icon">⚖️</div>
                <div class="tama-task-info">
                  <div class="tama-task-name">Gender Equality</div>
                  <div class="tama-task-desc">Amplify a woman-led organization</div>
                  <div class="tama-task-reward">+5 Health · +12 Happy · −3s clock</div>
                </div>
              </div>
              <div class="tama-task" onclick="completeTask(this,10,8,15,'🌊',5)">
                <div class="tama-task-icon">🌊</div>
                <div class="tama-task-info">
                  <div class="tama-task-name">Life Below Water</div>
                  <div class="tama-task-desc">Join an ocean conservation effort</div>
                  <div class="tama-task-reward">+10 Health · +8 Happy · −5s clock</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- COMMUNITY ROOMS PANEL -->
      <div class="panel" id="rooms-panel" style="flex-direction:column;overflow-y:auto">
        <div class="rooms-panel" style="display:flex;flex-direction:column;align-items:center;padding:2rem">
          <div class="rooms-header">
            <div class="rooms-title">🏛️ Community Rooms</div>
            <div class="rooms-sub">Seven spaces — one global home. Choose your room.</div>
          </div>
          <div class="rooms-grid">

            <div class="room-card" onclick="showToast('🚪 Welcome to the Lobby! Get oriented and meet members.')">
              <span class="room-arrow">→</span>
              <div class="room-icon">🚪</div>
              <div class="room-name">Lobby</div>
              <div class="room-desc">Welcome hub for new and returning members. Orientation guides, announcements, and community introductions.</div>
              <div class="room-online">🟢 312 members here</div>
            </div>

            <div class="room-card" onclick="showToast('🖼️ Gallery — SDG art & member showcases loading...')">
              <span class="room-arrow">→</span>
              <div class="room-icon">🖼️</div>
              <div class="room-name">Gallery</div>
              <div class="room-desc">SDG-inspired art, photography, and member creative showcases. Submit your work and inspire the world.</div>
              <div class="room-online">🟢 88 members here</div>
            </div>

            <div class="room-card" onclick="showToast('🎭 Auditorium — Live talks & keynotes opening...')">
              <span class="room-arrow">→</span>
              <div class="room-icon">🎭</div>
              <div class="room-name">Auditorium</div>
              <div class="room-desc">Live summits, keynote speakers, SDG panels, and the Global Goals Empowerment Summit stage.</div>
              <div class="room-online">🔴 Live now · 1,240 watching</div>
            </div>

            <div class="room-card" onclick="showToast('💪 Gym — Wellness challenges & fitness sessions opening...')">
              <span class="room-arrow">→</span>
              <div class="room-icon">💪</div>
              <div class="room-name">Gym</div>
              <div class="room-desc">Weekly fitness for Global Citizens, wellness workshops, mental health support, and health spa access.</div>
              <div class="room-online">🟢 74 members active</div>
            </div>

            <div class="room-card" onclick="showToast('🔧 Workshop — Dev Dojo & SDG hackathons loading...')">
              <span class="room-arrow">→</span>
              <div class="room-icon">🔧</div>
              <div class="room-name">Workshop</div>
              <div class="room-desc">Dev Dojo, SDG Hackathon 2030, skill-building sessions, resume labs, and the weekly webinar series.</div>
              <div class="room-online">🟢 156 members building</div>
            </div>

            <div class="room-card" onclick="showToast('☕ Welcome to the Global Café — hang out & connect!')">
              <span class="room-arrow">→</span>
              <div class="room-icon">☕</div>
              <div class="room-name">Café</div>
              <div class="room-desc">Casual hangouts, coffee chats, language exchange, and the Freedom Cove chill zone. Relax and connect.</div>
              <div class="room-online">🟢 203 members chatting</div>
            </div>

            <div class="room-card" onclick="showToast('🛒 GloMart — Global Citizens Marketplace opening...')">
              <span class="room-arrow">→</span>
              <div class="room-icon">🛒</div>
              <div class="room-name">Market</div>
              <div class="room-desc">GloMart global goods, SDG-aligned products, raffle tickets, fundraising, and the Global Exchange.</div>
              <div class="room-online">🟢 429 members browsing</div>
            </div>

            <div class="room-card" onclick="showToast('🌐 Business Lounge — GCCC resources & funding tools opening...')">
              <span class="room-arrow">→</span>
              <div class="room-icon">🌐</div>
              <div class="room-name">Business Lounge</div>
              <div class="room-desc">Start, run, and grow your business. Staffing, funding, operations, legal resources, and GCCC partner tools.</div>
              <div class="room-online">🟢 91 members working</div>
            </div>

          </div>
        </div>
      </div>

      <!-- BROADCAST PANEL -->
      <div class="panel" id="broadcast-panel" style="flex-direction:column;overflow:hidden">
        <div class="broadcast-header">
          <div class="broadcast-title-group">
            <div class="broadcast-title">📺 SDG Live Broadcasts</div>
            <div class="broadcast-sub">17 channels · 17 global goals · Real-time action from around the world</div>
          </div>
          <div class="broadcast-live-count">
            <div class="bc-live-dot"></div>
            <span id="total-viewers">47,291</span> watching
          </div>
        </div>

        <div class="stream-grid" id="stream-grid">
          <div class="sdg-channels-grid" id="sdg-channels-grid"></div>
          <div class="stream-viewer" id="stream-viewer">
            <div class="stream-video-wrap" id="stream-video-wrap">
              <div class="stream-video-bg" id="stream-video-bg">
                <div class="stream-video-icon" id="stream-video-icon">🌍</div>
                <div class="stream-video-title" id="stream-video-title">SDG Channel</div>
                <div class="stream-video-sub" id="stream-video-sub">Live from around the world</div>
              </div>
              <div class="stream-live-tag">● LIVE</div>
              <div class="stream-viewer-count" id="stream-viewer-count">0 watching</div>
            </div>
            <div class="stream-controls">
              <button class="stream-back" onclick="closeStream()">← All Channels</button>
              <div class="stream-channel-info">
                <div class="stream-ch-name" id="stream-ch-name">Channel Name</div>
                <div class="stream-ch-goal" id="stream-ch-goal">SDG Goal</div>
              </div>
              <button class="inp-btn" onclick="showToast('❤️ Added to favourites!')" style="width:auto;padding:0.3rem 0.6rem;font-size:0.75rem;color:var(--accent4)">♥ Follow</button>
            </div>
            <div class="stream-chat" id="stream-chat"></div>
            <div class="stream-input-row">
              <input class="stream-input" id="stream-input" type="text" placeholder="Chat with the community..." onkeydown="if(event.key==='Enter')sendStreamMsg()">
              <button class="stream-send" onclick="sendStreamMsg()">Send</button>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>

  <!-- RIGHT SIDEBAR -->
  <div class="right-sidebar">
    <div class="rside-section">
      <div class="rside-title">⏰ Doomsday Clock</div>
      <div class="mini-doom-wrap" onclick="switchChannel(null,'doomsday-clock','Race against time','doom');setTabByName('doom-panel')">
        <div class="mini-doom-time" id="mini-doom-time">89s</div>
        <div class="mini-doom-label">to midnight · 2030 target</div>
        <div class="mini-doom-bar"><div class="mini-doom-fill" id="mini-doom-fill" style="width:0%"></div></div>
        <div class="mini-doom-cta">🌍 Take SDG action → push it back</div>
      </div>
    </div>

    <div class="rside-section">
      <div class="rside-title">🌍 Your SDG Planet</div>
      <div class="mini-tama-wrap" onclick="setTabByName('tama-panel')">
        <div class="mini-tama-creature" id="mini-tama-creature">🌍</div>
        <div class="mini-tama-info">
          <div class="mini-tama-name" id="mini-tama-name">Planet Earth</div>
          <div class="mini-tama-status" id="mini-tama-status">Needs your attention!</div>
          <div class="mini-tama-hp"><div class="mini-tama-hp-fill" id="mini-tama-hp-fill" style="width:70%"></div></div>
        </div>
      </div>
    </div>

    <div class="rside-section">
      <div class="rside-title">🏛️ Rooms</div>
      <div style="display:flex;flex-direction:column;gap:0.3rem">
        <div class="member-item" onclick="switchChannel(null,'lobby','Welcome hub','rooms');setTabByName('rooms-panel')">
          <span style="font-size:1.1rem">🚪</span>
          <div class="member-info"><div class="member-name">Lobby</div><div class="member-status">312 inside</div></div>
        </div>
        <div class="member-item" onclick="switchChannel(null,'auditorium','Live talks & keynotes','rooms');setTabByName('rooms-panel')">
          <span style="font-size:1.1rem">🎭</span>
          <div class="member-info"><div class="member-name">Auditorium</div><div class="member-status" style="color:#EF4444">● Live now</div></div>
        </div>
        <div class="member-item" onclick="switchChannel(null,'cafe','Casual hangout','rooms');setTabByName('rooms-panel')">
          <span style="font-size:1.1rem">☕</span>
          <div class="member-info"><div class="member-name">Café</div><div class="member-status">203 chatting</div></div>
        </div>
        <div class="member-item" onclick="switchChannel(null,'market','GloMart marketplace','rooms');setTabByName('rooms-panel')">
          <span style="font-size:1.1rem">🛒</span>
          <div class="member-info"><div class="member-name">Market</div><div class="member-status">429 browsing</div></div>
        </div>
        <div class="member-item" onclick="switchChannel(null,'workshop','Dev Dojo & hackathons','rooms');setTabByName('rooms-panel')">
          <span style="font-size:1.1rem">🔧</span>
          <div class="member-info"><div class="member-name">Workshop</div><div class="member-status">156 building</div></div>
        </div>
      </div>
    </div>

    <div class="rside-section">
      <div class="rside-title">Active Poll</div>
      <div class="poll-card">
        <div class="poll-q">📊 Which SDG should we focus on this month?</div>
        <div class="poll-opt">
          <div class="poll-bar" onclick="vote(this,0)">
            <div class="poll-fill" style="width:38%;background:linear-gradient(90deg,#6EE7B7,#3B82F6)"></div>
            <span class="poll-label">🌿 Climate Action</span>
            <span class="poll-pct">38%</span>
          </div>
        </div>
        <div class="poll-opt">
          <div class="poll-bar" onclick="vote(this,1)">
            <div class="poll-fill" style="width:27%;background:linear-gradient(90deg,#818CF8,#EC4899)"></div>
            <span class="poll-label">🏠 No Poverty</span>
            <span class="poll-pct">27%</span>
          </div>
        </div>
        <div class="poll-opt">
          <div class="poll-bar" onclick="vote(this,2)">
            <div class="poll-fill" style="width:22%;background:linear-gradient(90deg,#FB923C,#F59E0B)"></div>
            <span class="poll-label">📚 Education</span>
            <span class="poll-pct">22%</span>
          </div>
        </div>
        <div class="poll-opt">
          <div class="poll-bar" onclick="vote(this,3)">
            <div class="poll-fill" style="width:13%;background:linear-gradient(90deg,#F472B6,#818CF8)"></div>
            <span class="poll-label">💧 Clean Water</span>
            <span class="poll-pct">13%</span>
          </div>
        </div>
        <div class="poll-votes">2,184 votes · 3 days left</div>
      </div>
    </div>

    <div class="rside-section">
      <div class="rside-title">Upcoming Events <span class="count">4</span></div>
      <div class="event-pill" onclick="showToast('📅 RSVP confirmed for World Music Summit!')">
        <div class="event-pill-date"><div class="epd-month">JAN</div><div class="epd-day">15</div></div>
        <div><div class="event-pill-name">World Music Summit</div><div class="event-pill-sub">🎵 Live stream · 14 countries</div></div>
      </div>
      <div class="event-pill" onclick="showToast('📅 Added: SDG Hackathon 2030')">
        <div class="event-pill-date"><div class="epd-month">JAN</div><div class="epd-day">18</div></div>
        <div><div class="event-pill-name">SDG Hackathon 2030</div><div class="event-pill-sub">💻 Build solutions for the goals</div></div>
      </div>
      <div class="event-pill" onclick="showToast('📅 RSVP sent for Language Exchange')">
        <div class="event-pill-date"><div class="epd-month">JAN</div><div class="epd-day">22</div></div>
        <div><div class="event-pill-name">Language Exchange</div><div class="event-pill-sub">🌐 Practice 40+ languages</div></div>
      </div>
    </div>

    <div class="rside-section">
      <div class="rside-title">Online — 2,847 <span class="count">↑12%</span></div>
      <div style="font-size:0.65rem;letter-spacing:0.1em;text-transform:uppercase;color:var(--muted);margin-bottom:0.5rem">Moderators</div>
      <div class="member-item" onclick="showToast('💬 DM sent to Sakura_A')">
        <div class="member-avatar" style="background:linear-gradient(135deg,#6EE7B7,#3B82F6)">SA<div class="status-dot online"></div></div>
        <div class="member-info"><div class="member-name">Sakura_A</div><div class="member-status">In voice: Lounge</div></div>
      </div>
      <div class="member-item" onclick="showToast('💬 DM sent to mod_carlos')">
        <div class="member-avatar" style="background:linear-gradient(135deg,#818CF8,#6EE7B7)">MC<div class="status-dot online"></div></div>
        <div class="member-info"><div class="member-name">mod_carlos</div><div class="member-status">SDG Tamagotchi</div></div>
      </div>
      <div style="font-size:0.65rem;letter-spacing:0.1em;text-transform:uppercase;color:var(--muted);margin:0.75rem 0 0.5rem">Members</div>
      <div class="member-item" onclick="showToast('💬 Opening DM with ravi_k...')">
        <div class="member-avatar" style="background:linear-gradient(135deg,#818CF8,#EC4899)">RK<div class="status-dot online"></div></div>
        <div class="member-info"><div class="member-name">ravi_k</div><div class="member-status">Watching SDG Goal 2 🌾</div></div>
      </div>
      <div class="member-item" onclick="showToast('💬 Opening DM with mia_l...')">
        <div class="member-avatar" style="background:linear-gradient(135deg,#FB923C,#F472B6)">ML<div class="status-dot online"></div></div>
        <div class="member-info"><div class="member-name">mia_l</div><div class="member-status">Live: Climate Action 🌿</div></div>
      </div>
      <div class="member-item" onclick="showToast('💬 Opening DM with dev_xander...')">
        <div class="member-avatar" style="background:linear-gradient(135deg,#34D399,#059669)">DX<div class="status-dot online"></div></div>
        <div class="member-info"><div class="member-name">dev_xander</div><div class="member-status">Coding 💻</div></div>
      </div>
      <div class="member-item" onclick="showToast('💬 Opening DM with nina_p...')">
        <div class="member-avatar" style="background:linear-gradient(135deg,#F59E0B,#EF4444)">NP<div class="status-dot idle"></div></div>
        <div class="member-info"><div class="member-name">nina_p</div><div class="member-status">Away · Back in 10m</div></div>
      </div>
    </div>
  </div>
</div>

<div class="toast" id="toast"></div>




<footer style="background:#0A1628;border-top:1px solid rgba(255,255,255,0.06);padding:24px 40px;text-align:center;font-size:13px;color:#8A9BBE;font-family:'Inter',sans-serif;">
  © 2026 Global Citizens Community Center &nbsp;·&nbsp;
  <a href="#" onclick="gcccNavigate('home');return false;" style="color:#00D4B4;text-decoration:none;">Home</a> &nbsp;·&nbsp;
  <a href="#" onclick="gcccNavigate('pages');return false;" style="color:#00D4B4;text-decoration:none;">Sign In</a> &nbsp;·&nbsp;
  <a href="#" onclick="gcccNavigate('fundraiser');return false;" style="color:#00D4B4;text-decoration:none;">Fundraiser</a> &nbsp;·&nbsp;
  <a href="#" onclick="gcccNavigate('boLogin');return false;" style="color:#00D4B4;text-decoration:none;">Back Office</a>
</footer>

</div>

<div id="page-fundraiser" class="gccc-panel" data-page="fundraiser" hidden>


<nav>
  <a class="nav-logo" href="#" onclick="gcccNavigate('home');return false;">🌍 GCCC</a>
  <a class="nav-back" href="#" onclick="gcccNavigate('home');return false;">← Back to Home</a>
</nav>

<!-- HERO -->
<div class="fr-hero">
  <div>
    <div style="display:inline-flex;align-items:center;gap:8px;padding:6px 16px;border-radius:20px;border:1px solid rgba(255,209,102,0.3);background:rgba(255,209,102,0.08);font-size:11px;font-weight:600;letter-spacing:0.12em;text-transform:uppercase;color:var(--gold);margin-bottom:28px;">
      <span style="width:6px;height:6px;border-radius:50%;background:var(--gold);"></span>
      Global Fundraising Network
    </div>
    <h1>Start Your<br><em>Fundraiser</em></h1>
    <p>Every campaign is a mission. Whether you're raising for hunger relief, education, or community programs — GCCC gives you the platform, the network, and the purpose.</p>
    <div style="display:flex;gap:14px;justify-content:center;flex-wrap:wrap;">
      <a href="#start" class="type-btn gold" style="padding:15px 36px;font-size:15px;">Start Now →</a>
      <a href="#types" style="padding:15px 36px;border-radius:4px;border:1px solid rgba(240,244,255,0.25);color:var(--chalk);font-size:15px;font-weight:500;">See Fundraiser Types</a>
    </div>
  </div>
</div>

<!-- HOW IT WORKS -->
<section class="section" style="background:var(--navy2);">
  <div class="inner">
    <div class="label">How It Works</div>
    <h2 class="title">Three Steps to Launch</h2>
    <div class="divider"></div>
    <div class="steps">
      <div class="step">
        <div class="step-num">01</div>
        <div class="step-title">Choose Your Cause</div>
        <div class="step-desc">Pick from one of 17 SDG-aligned categories or create your own mission-driven campaign.</div>
      </div>
      <div class="step">
        <div class="step-num">02</div>
        <div class="step-title">Set Your Goal</div>
        <div class="step-desc">Name your fundraising target, timeline, and beneficiary. We help you write a compelling story.</div>
      </div>
      <div class="step">
        <div class="step-num">03</div>
        <div class="step-title">Share & Mobilize</div>
        <div class="step-desc">Your campaign page goes live across the GCCC network instantly. Share it everywhere.</div>
      </div>
      <div class="step">
        <div class="step-num">04</div>
        <div class="step-title">Collect & Impact</div>
        <div class="step-desc">Funds are collected securely and disbursed directly to your cause. We track every dollar.</div>
      </div>
    </div>
  </div>
</section>

<!-- TYPES -->
<section id="types" class="section">
  <div class="inner">
    <div class="label">Fundraiser Types</div>
    <h2 class="title">Find Your Campaign</h2>
    <div class="divider"></div>
    <p class="sub">Every mission deserves a platform. Choose the format that fits your cause.</p>
    <div class="types-grid">
      <div class="type-card">
        <div class="type-icon">🍽️</div>
        <div class="type-title">Global Bake Sale</div>
        <div class="type-desc">Our signature fundraiser. Vegan, no-bake, gluten-free. Partner with No Kid Hungry and raise funds for Zero Hunger (SDG 2). Virtual or in-person.</div>
        <a href="#start" class="type-btn">Start Bake Sale</a>
      </div>
      <div class="type-card">
        <div class="type-icon">🏃</div>
        <div class="type-title">Community Walk / Run</div>
        <div class="type-desc">Rally your neighborhood for a sponsored walk or run. Every mile = dollars toward SDG goals. Includes route planning tools and donor tracking.</div>
        <a href="#start" class="type-btn">Plan Your Event</a>
      </div>
      <div class="type-card">
        <div class="type-icon">🎟️</div>
        <div class="type-title">Raffle Campaign</div>
        <div class="type-desc">Run a community raffle for prizes, experiences, or gift cards. Linked directly to the GCCC raffle platform at amazonraffles.univer.se.</div>
        <a href="https://amazonraffles.univer.se/" target="_blank" class="type-btn">Open Raffle Platform</a>
      </div>
      <div class="type-card">
        <div class="type-icon">🎤</div>
        <div class="type-title">Live Stream Drive</div>
        <div class="type-desc">Host a donation drive on the GCCC Live Network. Collect pledges in real-time while broadcasting to the global community.</div>
        <a href="#" onclick="gcccNavigate('home','live');return false;" class="type-btn">Go to Live Network</a>
      </div>
      <div class="type-card">
        <div class="type-icon">💼</div>
        <div class="type-title">Corporate Match</div>
        <div class="type-desc">Bring your employer into the mission. GCCC provides documentation for corporate matching programs and CSR partnership packages.</div>
        <a href="#start" class="type-btn gold">Get Match Package</a>
      </div>
      <div class="type-card">
        <div class="type-icon">📅</div>
        <div class="type-title">Monthly Subscription</div>
        <div class="type-desc">Launch a recurring giving campaign. $25/month or $40/year — the research-backed amounts needed to help end extreme poverty for good.</div>
        <a href="#" onclick="gcccNavigate('home','donate');return false;" class="type-btn gold">See Subscription Tiers</a>
      </div>
    </div>
  </div>
</section>

<!-- START FORM -->
<section id="start" class="section" style="background:var(--navy2);">
  <div class="inner">
    <div class="label">Launch Your Campaign</div>
    <h2 class="title">Start Your Fundraiser</h2>
    <div class="divider"></div>
    <div class="form-section">
      <h3>Campaign Details</h3>
      <p>Fill out the form below and a GCCC team member will help you launch within 48 hours.</p>
      <form onsubmit="handleSubmit(event)">
        <div class="form-row">
          <div>
            <label>First Name</label>
            <input type="text" placeholder="Rose" required/>
          </div>
          <div>
            <label>Last Name</label>
            <input type="text" placeholder="Williams" required/>
          </div>
        </div>
        <div class="form-row">
          <div>
            <label>Email</label>
            <input type="email" placeholder="you@email.com" required/>
          </div>
          <div>
            <label>Phone</label>
            <input type="tel" placeholder="+1 (555) 000-0000"/>
          </div>
        </div>
        <div class="form-row full">
          <div>
            <label>Campaign Name</label>
            <input type="text" placeholder="e.g. GCCC Brooklyn Bake Sale 2026" required/>
          </div>
        </div>
        <div class="form-row">
          <div>
            <label>Fundraiser Type</label>
            <select required>
              <option value="">Select a type...</option>
              <option>Global Bake Sale</option>
              <option>Community Walk / Run</option>
              <option>Raffle Campaign</option>
              <option>Live Stream Drive</option>
              <option>Corporate Match</option>
              <option>Monthly Subscription Drive</option>
              <option>Other</option>
            </select>
          </div>
          <div>
            <label>Fundraising Goal ($)</label>
            <input type="number" placeholder="e.g. 5000" min="100"/>
          </div>
        </div>
        <div class="form-row full">
          <div>
            <label>SDG Alignment</label>
            <select>
              <option value="">Select an SDG...</option>
              <option>SDG 1 — No Poverty</option>
              <option>SDG 2 — Zero Hunger</option>
              <option>SDG 3 — Good Health</option>
              <option>SDG 4 — Quality Education</option>
              <option>SDG 5 — Gender Equality</option>
              <option>SDG 6 — Clean Water</option>
              <option>SDG 7 — Clean Energy</option>
              <option>SDG 8 — Decent Work</option>
              <option>SDG 10 — Reduced Inequalities</option>
              <option>SDG 11 — Sustainable Cities</option>
              <option>SDG 13 — Climate Action</option>
              <option>SDG 16 — Peace & Justice</option>
              <option>SDG 17 — Partnerships</option>
              <option>Multiple / General</option>
            </select>
          </div>
        </div>
        <div class="form-row full">
          <div>
            <label>Tell Us About Your Campaign</label>
            <textarea placeholder="Describe your cause, who it helps, and why now..."></textarea>
          </div>
        </div>
        <button class="submit-btn" type="submit">Submit Campaign →</button>
        <p style="font-size:12px;color:var(--mist);margin-top:12px;text-align:center;">You'll hear from our team within 48 hours. No commitment required.</p>
      </form>
    </div>
  </div>
</section>

<footer>
  <p>© 2026 Global Citizens Community Center · <a href="#" onclick="gcccNavigate('home');return false;">Home</a> · <a href="#" onclick="gcccNavigate('pages');return false;">Sign In</a> · <a href="#" onclick="gcccNavigate('community');return false;">Community Center</a> · <a href="#" onclick="gcccNavigate('boLogin');return false;">Back Office</a> · <a href="https://globalcitizencommunitycenter.univer.se" target="_blank">Live Site</a></p>
  <p style="margin-top:8px;">Aligned with the UN 2030 Agenda · 17 Sustainable Development Goals</p>
</footer>



</div>

<div id="page-boLogin" class="gccc-panel" data-page="boLogin" hidden>


<!-- STAFF LOGIN GATE: GCCC Back Office requires a staff/volunteer login -->
<div id="gccc-staff-gate">
  <div class="gate-card">
    <div class="gate-logo">GCCC Back Office</div>
    <p class="gate-sub" id="staff-gate-sub">Staff &amp; volunteer login required.</p>
    <input type="text" id="staff-gate-id" placeholder="Staff or volunteer ID / email" />
    <input type="password" id="staff-gate-pw" placeholder="Access code" />
    <button class="gate-btn" onclick="gcccStaffLogin()">Sign In</button>
    <div class="gate-error" id="staff-gate-error"></div>
    <div class="gate-demo-creds">
      <p>Demo Credentials</p>
      <code>Username: admin@gccc.org</code>
      <code>Password: GCCCAdmin2026!</code>
    </div>
    <a class="gate-back" href="#" onclick="gcccNavigate('home');return false;">← Back to main site</a>
  </div>
</div>




</div>

<div id="page-boDash" class="gccc-panel" data-page="boDash" hidden>


<aside class="sidebar">
  <div class="sidebar-brand">
    <div class="brand-initials">GC</div>
    <div class="brand-name">Global Citizens</div>
    <div class="brand-sub">Community Center</div>
  </div>
  <nav class="sidebar-nav">
    <div class="nav-section-label">Main</div>
    <button class="nav-item active" onclick="showPage('dashboard', this)">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>
      Dashboard
    </button>
    <button class="nav-item" onclick="showPage('schedule', this)">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
      Schedule
    </button>
    <button class="nav-item" onclick="showPage('staff', this)">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
      Staff & Employers
    </button>
    <div class="nav-section-label">Spaces</div>
    <button class="nav-item" onclick="showPage('rooms', this)">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
      Rooms
    </button>
    <div class="nav-section-label">Growth</div>
    <button class="nav-item" onclick="showPage('training', this)">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
      Training Hub
    </button>
    <div class="nav-section-label">Community</div>
    <button class="nav-item" onclick="showPage('lounge', this)">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
      Staff Lounge
    </button>
    <button class="nav-item" onclick="showPage('announcements', this)">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>
      Announcements
    </button>
  </nav>
  <div class="sidebar-user">
    <div class="user-avatar" id="staff-avatar-initials">AD</div>
    <div>
      <div class="user-name" id="staff-display-name">Admin</div>
      <div class="user-role">Back Office Manager</div>
    </div>
  </div>
  <div style="padding:10px 14px;border-top:1px solid rgba(255,255,255,0.08);display:flex;flex-direction:column;gap:2px;">
    <a href="#" onclick="gcccNavigate('home');return false;" style="display:flex;align-items:center;gap:8px;font-size:12px;color:rgba(255,255,255,0.5);text-decoration:none;padding:5px 6px;border-radius:4px;" onmouseover="this.style.color='#fff'" onmouseout="this.style.color='rgba(255,255,255,0.5)'">
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>
      Main Site
    </a>
    <a href="#" onclick="gcccNavigate('pages');return false;" style="display:flex;align-items:center;gap:8px;font-size:12px;color:rgba(255,255,255,0.5);text-decoration:none;padding:5px 6px;border-radius:4px;" onmouseover="this.style.color='#fff'" onmouseout="this.style.color='rgba(255,255,255,0.5)'">
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
      Member Portal
    </a>
    <a href="#" onclick="gcccNavigate('community');return false;" style="display:flex;align-items:center;gap:8px;font-size:12px;color:rgba(255,255,255,0.5);text-decoration:none;padding:5px 6px;border-radius:4px;" onmouseover="this.style.color='#fff'" onmouseout="this.style.color='rgba(255,255,255,0.5)'">
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-4 0v2"/></svg>
      Community Center
    </a>
    <a href="#" onclick="gcccNavigate('fundraiser');return false;" style="display:flex;align-items:center;gap:8px;font-size:12px;color:rgba(255,255,255,0.5);text-decoration:none;padding:5px 6px;border-radius:4px;" onmouseover="this.style.color='#fff'" onmouseout="this.style.color='rgba(255,255,255,0.5)'">
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
      Fundraiser
    </a>
    <button onclick="gcccSignOut()" style="display:flex;align-items:center;gap:8px;font-size:12px;color:rgba(255,100,100,0.7);background:none;border:none;cursor:pointer;padding:5px 6px;border-radius:4px;width:100%;text-align:left;" onmouseover="this.style.color='#ff6b6b'" onmouseout="this.style.color='rgba(255,100,100,0.7)'">
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>
      Sign Out
    </button>
  </div>
</aside>

<main class="main">
  <header class="topbar">
    <div class="topbar-title" id="page-title">Dashboard</div>
    <div class="topbar-date" id="topbar-date"></div>
    <div class="topbar-actions">
      <button class="btn">Export</button>
      <button class="btn btn-primary">+ New Event</button>
    </div>
  </header>

  <div class="content">

    <!-- DASHBOARD PAGE -->
    <div class="page active" id="page-dashboard">
      <div class="announcement">
        <div class="announcement-icon">📢</div>
        <div class="announcement-text"><strong>Staff meeting this Friday at 10am</strong> — All coordinators and program leads, please attend. Room 3B. Light refreshments provided.</div>
      </div>
      <div class="stat-grid">
        <div class="stat-card">
          <div class="stat-label">Staff on shift today</div>
          <div class="stat-value">12</div>
          <div class="stat-sub"><span class="stat-dot" style="background:#0F6E56"></span>4 full-time · 8 part-time</div>
        </div>
        <div class="stat-card">
          <div class="stat-label">Programs running</div>
          <div class="stat-value">7</div>
          <div class="stat-sub"><span class="stat-dot" style="background:#EF9F27"></span>2 starting this week</div>
        </div>
        <div class="stat-card">
          <div class="stat-label">Training completions</div>
          <div class="stat-value">34</div>
          <div class="stat-sub"><span class="stat-dot" style="background:#AFA9EC"></span>this month</div>
        </div>
        <div class="stat-card">
          <div class="stat-label">Open shifts</div>
          <div class="stat-value">3</div>
          <div class="stat-sub"><span class="stat-dot" style="background:#F0997B"></span>needs coverage</div>
        </div>
      </div>
      <div class="two-col">
        <div class="card">
          <div class="card-title">Today's schedule highlights <span>Mon, June 23</span></div>
          <table>
            <thead><tr><th>Time</th><th>Program</th><th>Staff</th><th>Room</th></tr></thead>
            <tbody>
              <tr><td>9:00 AM</td><td>ESL Beginner</td><td>M. Owusu</td><td>A1</td></tr>
              <tr><td>10:30 AM</td><td>Job Readiness</td><td>L. Chen</td><td>B2</td></tr>
              <tr><td>1:00 PM</td><td>Youth After School</td><td>R. Diaz</td><td>Gym</td></tr>
              <tr><td>3:00 PM</td><td>Citizenship Prep</td><td>A. Nkosi</td><td>C3</td></tr>
              <tr><td>5:30 PM</td><td>Community Dinner</td><td>Staff team</td><td>Hall</td></tr>
            </tbody>
          </table>
        </div>
        <div class="card">
          <div class="card-title">Staff lounge — latest</div>
          <div class="lounge-post" style="border-bottom:none; padding-top:0;">
            <div class="poster-av" style="background:var(--teal-50);color:var(--teal-600);">MO</div>
            <div>
              <div class="lounge-who">Mariama Owusu <span style="font-weight:400;color:var(--text-muted)">· 8m ago</span></div>
              <div class="lounge-msg">Reminder: ESL room A1 needs the projector set up before 8:45.</div>
            </div>
          </div>
          <div class="lounge-post" style="border-bottom:none;">
            <div class="poster-av" style="background:var(--amber-50);color:var(--amber-600);">LC</div>
            <div>
              <div class="lounge-who">Leo Chen <span style="font-weight:400;color:var(--text-muted)">· 22m ago</span></div>
              <div class="lounge-msg">Coffee machine is back on! ☕ Someone fixed it this morning.</div>
            </div>
          </div>
          <div style="margin-top:10px;">
            <button class="btn" style="font-size:12px;" onclick="showPage('lounge', document.querySelectorAll('.nav-item')[7])">Go to lounge →</button>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="card-title">Training progress this month</div>
        <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:12px;">
          <div>
            <div style="font-size:13px;margin-bottom:8px;">Safeguarding & Child Protection</div>
            <div class="progress-bar-bg"><div class="progress-bar-fill" style="width:88%"></div></div>
            <div style="font-size:11px;color:var(--text-muted);margin-top:4px;">88% staff certified</div>
          </div>
          <div>
            <div style="font-size:13px;margin-bottom:8px;">DEI Foundations</div>
            <div class="progress-bar-bg"><div class="progress-bar-fill" style="width:62%"></div></div>
            <div style="font-size:11px;color:var(--text-muted);margin-top:4px;">62% completed</div>
          </div>
          <div>
            <div style="font-size:13px;margin-bottom:8px;">First Aid Recertification</div>
            <div class="progress-bar-bg"><div class="progress-bar-fill" style="width:45%;background:var(--amber-200)"></div></div>
            <div style="font-size:11px;color:var(--text-muted);margin-top:4px;">45% — due Aug 1</div>
          </div>
        </div>
      </div>
    </div>

    <!-- SCHEDULE PAGE -->
    <div class="page" id="page-schedule">
      <div class="card" style="margin-bottom:18px;">
        <div class="card-title">Weekly schedule — June 23–27, 2025</div>
        <div class="schedule-header" style="margin-bottom:1px;">
          <div class="sch-cell"></div>
          <div class="sch-cell">Monday</div>
          <div class="sch-cell">Tuesday</div>
          <div class="sch-cell">Wednesday</div>
          <div class="sch-cell">Thursday</div>
          <div class="sch-cell">Friday</div>
        </div>
        <div style="display:grid;grid-template-columns:80px repeat(5,1fr);gap:1px;background:var(--border);">
          <div class="sch-cell sch-time">9:00</div>
          <div class="sch-cell"><div class="sch-block sch-teal">ESL Beginner<br><small>A1 · Owusu</small></div></div>
          <div class="sch-cell"><div class="sch-block sch-teal">ESL Beginner<br><small>A1 · Owusu</small></div></div>
          <div class="sch-cell"><div class="sch-block sch-teal">ESL Advanced<br><small>A2 · Chen</small></div></div>
          <div class="sch-cell"><div class="sch-block sch-teal">ESL Beginner<br><small>A1 · Owusu</small></div></div>
          <div class="sch-cell"><div class="sch-block sch-purple">Staff Meeting<br><small>3B · All</small></div></div>
          <div class="sch-cell sch-time">10:30</div>
          <div class="sch-cell"><div class="sch-block sch-amber">Job Readiness<br><small>B2 · Chen</small></div></div>
          <div class="sch-cell"></div>
          <div class="sch-cell"><div class="sch-block sch-amber">Resume Workshop<br><small>B2 · Diaz</small></div></div>
          <div class="sch-cell"></div>
          <div class="sch-cell"><div class="sch-block sch-amber">Job Readiness<br><small>B2 · Chen</small></div></div>
          <div class="sch-cell sch-time">1:00</div>
          <div class="sch-cell"><div class="sch-block sch-coral">Youth Program<br><small>Gym · Diaz</small></div></div>
          <div class="sch-cell"><div class="sch-block sch-coral">Youth Program<br><small>Gym · Diaz</small></div></div>
          <div class="sch-cell"><div class="sch-block sch-coral">Youth Program<br><small>Gym · Diaz</small></div></div>
          <div class="sch-cell"><div class="sch-block sch-coral">Youth Program<br><small>Gym · Diaz</small></div></div>
          <div class="sch-cell"><div class="sch-block sch-coral">Youth Program<br><small>Gym · Diaz</small></div></div>
          <div class="sch-cell sch-time">3:00</div>
          <div class="sch-cell"><div class="sch-block sch-purple">Citizenship Prep<br><small>C3 · Nkosi</small></div></div>
          <div class="sch-cell"><div class="sch-block sch-purple">Citizenship Prep<br><small>C3 · Nkosi</small></div></div>
          <div class="sch-cell"></div>
          <div class="sch-cell"><div class="sch-block sch-purple">Citizenship Prep<br><small>C3 · Nkosi</small></div></div>
          <div class="sch-cell"></div>
          <div class="sch-cell sch-time">5:30</div>
          <div class="sch-cell"><div class="sch-block sch-teal">Comm. Dinner<br><small>Hall · All</small></div></div>
          <div class="sch-cell"></div><div class="sch-cell"></div><div class="sch-cell"></div><div class="sch-cell"></div>
        </div>
        <div style="margin-top:14px;display:flex;gap:10px;flex-wrap:wrap;">
          <span style="font-size:12px;display:flex;align-items:center;gap:5px;"><span class="sch-block sch-teal" style="margin:0;padding:3px 8px;">ESL / Language</span></span>
          <span style="font-size:12px;display:flex;align-items:center;gap:5px;"><span class="sch-block sch-amber" style="margin:0;padding:3px 8px;">Employment</span></span>
          <span style="font-size:12px;display:flex;align-items:center;gap:5px;"><span class="sch-block sch-coral" style="margin:0;padding:3px 8px;">Youth</span></span>
          <span style="font-size:12px;display:flex;align-items:center;gap:5px;"><span class="sch-block sch-purple" style="margin:0;padding:3px 8px;">Civic / Community</span></span>
        </div>
      </div>
    </div>

    <!-- STAFF PAGE -->
    <div class="page" id="page-staff">
      <div class="card">
        <div class="card-title">Staff & employers directory</div>
        <table>
          <thead><tr><th>Name</th><th>Role</th><th>Program</th><th>Status</th><th>Training</th></tr></thead>
          <tbody>
            <tr><td><div class="staff-name"><div class="staff-av" style="background:var(--teal-50);color:var(--teal-600);">MO</div>Mariama Owusu</div></td><td>Program Lead</td><td>ESL</td><td><span class="status-dot" style="background:#0F6E56"></span>On shift</td><td><span class="badge badge-done">Up to date</span></td></tr>
            <tr><td><div class="staff-name"><div class="staff-av" style="background:var(--amber-50);color:var(--amber-600);">LC</div>Leo Chen</div></td><td>Coordinator</td><td>Employment</td><td><span class="status-dot" style="background:#0F6E56"></span>On shift</td><td><span class="badge badge-done">Up to date</span></td></tr>
            <tr><td><div class="staff-name"><div class="staff-av" style="background:var(--coral-50);color:var(--coral-600);">RD</div>Rosa Diaz</div></td><td>Youth Worker</td><td>After School</td><td><span class="status-dot" style="background:#0F6E56"></span>On shift</td><td><span class="badge badge-req">Due Aug 1</span></td></tr>
            <tr><td><div class="staff-name"><div class="staff-av" style="background:var(--purple-50);color:var(--purple-600);">AN</div>Ama Nkosi</div></td><td>Civic Educator</td><td>Citizenship</td><td><span class="status-dot" style="background:#888780"></span>Off today</td><td><span class="badge badge-done">Up to date</span></td></tr>
            <tr><td><div class="staff-name"><div class="staff-av" style="background:var(--teal-50);color:var(--teal-600);">JB</div>Jerome Baptiste</div></td><td>Employer Partner</td><td>Job Placement</td><td><span class="status-dot" style="background:#888780"></span>Remote</td><td><span class="badge badge-new">New module</span></td></tr>
            <tr><td><div class="staff-name"><div class="staff-av" style="background:var(--amber-50);color:var(--amber-600);">SK</div>Sara Kim</div></td><td>Volunteer Lead</td><td>Community</td><td><span class="status-dot" style="background:#0F6E56"></span>On shift</td><td><span class="badge badge-req">Due Aug 1</span></td></tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- ROOMS PAGE -->
    <div class="page" id="page-rooms">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:20px;">
        <div>
          <div style="font-size:13px;color:var(--text-muted);margin-bottom:4px;">All rooms · today</div>
          <div style="display:flex;gap:16px;font-size:12px;">
            <span><span class="status-dot" style="background:#0F6E56;display:inline-block;width:8px;height:8px;border-radius:50%;margin-right:4px;"></span>5 occupied</span>
            <span><span class="status-dot" style="background:var(--gray-100);display:inline-block;width:8px;height:8px;border-radius:50%;margin-right:4px;"></span>3 available</span>
            <span><span class="status-dot" style="background:var(--amber-200);display:inline-block;width:8px;height:8px;border-radius:50%;margin-right:4px;"></span>1 reserved</span>
            <span><span class="status-dot" style="background:var(--coral-200);display:inline-block;width:8px;height:8px;border-radius:50%;margin-right:4px;"></span>1 maintenance</span>
          </div>
        </div>
        <button class="btn btn-blue" onclick="showRoomDetail('employment')">+ Book a room</button>
      </div>

      <div class="room-grid">
        <!-- B2 Employment Dept Room — highlighted -->
        <div class="room-card occupied" style="border:2px solid var(--blue-600);border-left:4px solid var(--blue-600);position:relative;">
          <div style="position:absolute;top:12px;right:12px;"><span class="badge badge-blue">Employment Dept</span></div>
          <div class="room-name">Room B2</div>
          <div class="room-type">Employment Services · Capacity 20</div>
          <div class="room-status-row">
            <div class="room-status"><span class="status-dot" style="background:#0F6E56;width:8px;height:8px;border-radius:50%;display:inline-block;"></span>In use now</div>
          </div>
          <div class="room-current">
            <div class="room-current-label">Current session</div>
            <div class="room-current-val">Job Readiness Workshop</div>
            <div style="font-size:11px;color:var(--text-muted);margin-top:2px;">Leo Chen · 10:30 AM – 12:00 PM · 14 participants</div>
          </div>
          <div class="room-actions">
            <button class="btn" onclick="showRoomDetail('employment')">View details</button>
            <button class="btn btn-blue" onclick="showRoomDetail('employment')">Book</button>
          </div>
        </div>

        <div class="room-card occupied">
          <div class="room-name">Room A1</div>
          <div class="room-type">ESL / Language · Capacity 18</div>
          <div class="room-status-row">
            <div class="room-status"><span class="status-dot" style="background:#0F6E56;width:8px;height:8px;border-radius:50%;display:inline-block;"></span>In use now</div>
          </div>
          <div class="room-current">
            <div class="room-current-label">Current session</div>
            <div class="room-current-val">ESL Beginner</div>
            <div style="font-size:11px;color:var(--text-muted);margin-top:2px;">M. Owusu · 9:00 – 10:15 AM · 12 participants</div>
          </div>
          <div class="room-actions">
            <button class="btn">View details</button>
            <button class="btn">Book</button>
          </div>
        </div>

        <div class="room-card available">
          <div class="room-name">Room A2</div>
          <div class="room-type">ESL / Language · Capacity 18</div>
          <div class="room-status-row">
            <div class="room-status"><span class="status-dot" style="background:var(--gray-100);width:8px;height:8px;border-radius:50%;display:inline-block;"></span>Available</div>
          </div>
          <div class="room-current" style="background:var(--teal-50);">
            <div class="room-current-label">Next booking</div>
            <div class="room-current-val">ESL Advanced — 1:00 PM</div>
            <div style="font-size:11px;color:var(--text-muted);margin-top:2px;">L. Chen · 2.5 hrs until session</div>
          </div>
          <div class="room-actions">
            <button class="btn">View details</button>
            <button class="btn btn-primary">Book now</button>
          </div>
        </div>

        <div class="room-card occupied">
          <div class="room-name">Room C3</div>
          <div class="room-type">Civic Programs · Capacity 25</div>
          <div class="room-status-row">
            <div class="room-status"><span class="status-dot" style="background:#0F6E56;width:8px;height:8px;border-radius:50%;display:inline-block;"></span>In use now</div>
          </div>
          <div class="room-current">
            <div class="room-current-label">Current session</div>
            <div class="room-current-val">Citizenship Prep</div>
            <div style="font-size:11px;color:var(--text-muted);margin-top:2px;">A. Nkosi · 3:00 – 4:30 PM · 18 participants</div>
          </div>
          <div class="room-actions">
            <button class="btn">View details</button>
            <button class="btn">Book</button>
          </div>
        </div>

        <div class="room-card reserved">
          <div class="room-name">Room 3B</div>
          <div class="room-type">Conference / Meeting · Capacity 30</div>
          <div class="room-status-row">
            <div class="room-status"><span class="status-dot" style="background:var(--amber-200);width:8px;height:8px;border-radius:50%;display:inline-block;"></span>Reserved</div>
          </div>
          <div class="room-current" style="background:var(--amber-50);">
            <div class="room-current-label">Upcoming reservation</div>
            <div class="room-current-val">All-staff meeting — Friday 10am</div>
            <div style="font-size:11px;color:var(--text-muted);margin-top:2px;">Admin · June 27 · All coordinators</div>
          </div>
          <div class="room-actions">
            <button class="btn">View details</button>
            <button class="btn">Book</button>
          </div>
        </div>

        <div class="room-card available">
          <div class="room-name">Gym</div>
          <div class="room-type">Recreation · Capacity 60</div>
          <div class="room-status-row">
            <div class="room-status"><span class="status-dot" style="background:#0F6E56;width:8px;height:8px;border-radius:50%;display:inline-block;"></span>In use now</div>
          </div>
          <div class="room-current">
            <div class="room-current-label">Current session</div>
            <div class="room-current-val">Youth After School Program</div>
            <div style="font-size:11px;color:var(--text-muted);margin-top:2px;">R. Diaz · 1:00 – 5:00 PM · 32 participants</div>
          </div>
          <div class="room-actions">
            <button class="btn">View details</button>
            <button class="btn">Book</button>
          </div>
        </div>

        <div class="room-card maintenance">
          <div class="room-name">Community Hall</div>
          <div class="room-type">Large events · Capacity 120</div>
          <div class="room-status-row">
            <div class="room-status"><span class="status-dot" style="background:var(--coral-200);width:8px;height:8px;border-radius:50%;display:inline-block;"></span>Maintenance</div>
          </div>
          <div class="room-current" style="background:var(--coral-50);">
            <div class="room-current-label">Issue reported</div>
            <div class="room-current-val">AV system repair — in progress</div>
            <div style="font-size:11px;color:var(--text-muted);margin-top:2px;">Expected clear by 4:00 PM · Community Dinner at 5:30</div>
          </div>
          <div class="room-actions">
            <button class="btn">View details</button>
            <button class="btn" disabled style="opacity:0.5;cursor:not-allowed;">Unavailable</button>
          </div>
        </div>

        <div class="room-card available">
          <div class="room-name">Room D1</div>
          <div class="room-type">Small meeting · Capacity 8</div>
          <div class="room-status-row">
            <div class="room-status"><span class="status-dot" style="background:var(--gray-100);width:8px;height:8px;border-radius:50%;display:inline-block;"></span>Available all day</div>
          </div>
          <div class="room-current" style="background:var(--teal-50);">
            <div class="room-current-label">Status</div>
            <div class="room-current-val">Open for walk-in bookings</div>
            <div style="font-size:11px;color:var(--text-muted);margin-top:2px;">No reservations today</div>
          </div>
          <div class="room-actions">
            <button class="btn">View details</button>
            <button class="btn btn-primary">Book now</button>
          </div>
        </div>
      </div>

      <!-- EMPLOYMENT DEPT ROOM DETAIL -->
      <div id="room-detail-employment" style="display:none;">
        <div style="display:flex;align-items:center;gap:10px;margin-bottom:18px;">
          <button class="btn" onclick="document.getElementById('room-detail-employment').style.display='none';document.querySelector('.room-grid').style.display='grid';" style="font-size:12px;">← Back to all rooms</button>
          <span style="font-size:15px;font-weight:600;">Room B2 — Employment Department</span>
          <span class="badge badge-blue">Employment Dept</span>
        </div>

        <div style="display:grid;grid-template-columns:2fr 1fr;gap:18px;">
          <div>
            <div class="tab-row">
              <button class="tab-btn active" onclick="switchTab('schedule')">Today's schedule</button>
              <button class="tab-btn" onclick="switchTab('equipment')">Equipment & setup</button>
              <button class="tab-btn" onclick="switchTab('issues')">Issues & notes</button>
            </div>

            <div class="tab-content active" id="tab-schedule">
              <div class="card" style="padding:0 22px;">
                <div style="padding:14px 0 10px;font-size:12px;font-weight:600;color:var(--text-muted);text-transform:uppercase;letter-spacing:0.06em;">Monday June 23</div>
                <div class="room-schedule-row">
                  <div class="room-sched-time">9:00 – 10:00</div>
                  <div>
                    <div class="room-sched-event">Staff prep / setup</div>
                    <div class="room-sched-who">Leo Chen · Employment team</div>
                  </div>
                  <span class="badge" style="background:var(--gray-50);color:var(--gray-600);">Internal</span>
                </div>
                <div class="room-schedule-row" style="background:var(--blue-50);margin:0 -22px;padding-left:22px;padding-right:22px;border-radius:0;">
                  <div class="room-sched-time" style="color:var(--blue-800);">10:30 – 12:00</div>
                  <div>
                    <div class="room-sched-event" style="color:var(--blue-800);">Job Readiness Workshop</div>
                    <div class="room-sched-who">Leo Chen · 14 participants enrolled</div>
                  </div>
                  <span class="badge badge-blue">Now</span>
                </div>
                <div class="room-schedule-row">
                  <div class="room-sched-time">1:00 – 2:30</div>
                  <div>
                    <div class="room-sched-event">Employer partner meeting</div>
                    <div class="room-sched-who">Jerome Baptiste + 3 employer reps</div>
                  </div>
                  <span class="badge badge-req">Reserved</span>
                </div>
                <div class="room-schedule-row">
                  <div class="room-sched-time">3:00 – 4:30</div>
                  <div>
                    <div class="room-sched-event">Resume Writing Workshop</div>
                    <div class="room-sched-who">Rosa Diaz · 8 participants enrolled</div>
                  </div>
                  <span class="badge badge-req">Reserved</span>
                </div>
                <div class="room-schedule-row" style="opacity:0.5;">
                  <div class="room-sched-time">4:30 – close</div>
                  <div>
                    <div class="room-sched-event">Open / available</div>
                    <div class="room-sched-who">No bookings</div>
                  </div>
                  <span class="badge" style="background:var(--teal-50);color:var(--teal-600);">Free</span>
                </div>
              </div>
            </div>

            <div class="tab-content" id="tab-equipment">
              <div class="card">
                <div style="font-size:13px;font-weight:500;margin-bottom:10px;">Standard equipment</div>
                <div style="margin-bottom:14px;">
                  <span class="equip-tag">Projector</span>
                  <span class="equip-tag">Whiteboard (x2)</span>
                  <span class="equip-tag">Laptop cart</span>
                  <span class="equip-tag">Printer access</span>
                  <span class="equip-tag">Video conferencing</span>
                  <span class="equip-tag">Resume paper stock</span>
                  <span class="equip-tag">Job boards display</span>
                  <span class="equip-tag">Wi-Fi (staff + guest)</span>
                </div>
                <div style="font-size:13px;font-weight:500;margin-bottom:8px;">Room layout</div>
                <div style="font-size:13px;color:var(--text-muted);line-height:1.6;">Default layout is workshop style — 5 tables of 4. Can be reconfigured to classroom (rows), boardroom (single table), or open floor. Notify operations 24hrs in advance for layout changes.</div>
                <div style="margin-top:14px;padding:12px;background:var(--amber-50);border-radius:var(--radius-sm);font-size:12.5px;color:var(--amber-600);">⚠ Laptop cart key is with Leo Chen. Sign out via the equipment log before removing laptops.</div>
              </div>
            </div>

            <div class="tab-content" id="tab-issues">
              <div class="card" style="padding:0 22px;">
                <div style="padding:14px 0 10px;display:flex;align-items:center;justify-content:space-between;">
                  <span style="font-size:12px;font-weight:600;color:var(--text-muted);text-transform:uppercase;letter-spacing:0.06em;">Active notes</span>
                  <button class="btn" style="font-size:11px;padding:4px 10px;">+ Log issue</button>
                </div>
                <div class="issue-row">
                  <div class="issue-icon">🖨️</div>
                  <div class="issue-desc">
                    <div style="font-weight:500;">Printer paper jam — intermittent</div>
                    <div class="issue-meta">Reported by L. Chen · June 21 · Ops notified</div>
                  </div>
                  <span class="badge badge-req">Open</span>
                </div>
                <div class="issue-row">
                  <div class="issue-icon">🌡️</div>
                  <div class="issue-desc">
                    <div style="font-weight:500;">AC unit running warm in afternoon</div>
                    <div class="issue-meta">Reported by R. Diaz · June 19 · Facilities ticket #204</div>
                  </div>
                  <span class="badge badge-req">In progress</span>
                </div>
                <div class="issue-row" style="opacity:0.5;">
                  <div class="issue-icon">💡</div>
                  <div class="issue-desc">
                    <div style="font-weight:500;">Flickering light (rear left) — resolved</div>
                    <div class="issue-meta">June 14 · Fixed by facilities</div>
                  </div>
                  <span class="badge badge-done">Resolved</span>
                </div>
              </div>
            </div>
          </div>

          <div style="display:flex;flex-direction:column;gap:14px;">
            <div class="card">
              <div class="card-title">Room info</div>
              <div style="display:flex;flex-direction:column;gap:10px;font-size:13px;">
                <div style="display:flex;justify-content:space-between;"><span style="color:var(--text-muted);">Room</span><span style="font-weight:500;">B2</span></div>
                <div style="display:flex;justify-content:space-between;"><span style="color:var(--text-muted);">Floor</span><span>Ground · East wing</span></div>
                <div style="display:flex;justify-content:space-between;"><span style="color:var(--text-muted);">Capacity</span><span>20 seated</span></div>
                <div style="display:flex;justify-content:space-between;"><span style="color:var(--text-muted);">Primary dept</span><span style="font-weight:500;color:var(--blue-600);">Employment</span></div>
                <div style="display:flex;justify-content:space-between;"><span style="color:var(--text-muted);">Room lead</span><span>Leo Chen</span></div>
                <div style="display:flex;justify-content:space-between;"><span style="color:var(--text-muted);">Bookable by</span><span>All staff</span></div>
              </div>
            </div>
            <div class="card">
              <div class="card-title">Upcoming this week</div>
              <div style="display:flex;flex-direction:column;gap:8px;font-size:12.5px;">
                <div style="display:flex;justify-content:space-between;align-items:center;">
                  <div><div style="font-weight:500;">Job Readiness</div><div style="color:var(--text-muted);">Tue – Thu · 10:30 AM</div></div>
                  <span class="badge" style="background:var(--amber-50);color:var(--amber-600);">Recurring</span>
                </div>
                <div style="height:1px;background:var(--border);"></div>
                <div style="display:flex;justify-content:space-between;align-items:center;">
                  <div><div style="font-weight:500;">Employer fair prep</div><div style="color:var(--text-muted);">Wed · 2:00 PM</div></div>
                  <span class="badge badge-new">New</span>
                </div>
                <div style="height:1px;background:var(--border);"></div>
                <div style="display:flex;justify-content:space-between;align-items:center;">
                  <div><div style="font-weight:500;">Resume Workshop</div><div style="color:var(--text-muted);">Mon & Thu · 3:00 PM</div></div>
                  <span class="badge" style="background:var(--amber-50);color:var(--amber-600);">Recurring</span>
                </div>
              </div>
            </div>
            <button class="btn btn-blue" style="width:100%;">Book Room B2</button>
          </div>
        </div>
      </div>
    </div>

    <!-- TRAINING PAGE -->
    <div class="page" id="page-training">
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:14px;margin-bottom:20px;">
        <div class="training-card">
          <div class="training-icon" style="background:var(--teal-50);">🛡️</div>
          <div style="flex:1;">
            <div style="display:flex;justify-content:space-between;align-items:start;"><div class="training-title">Safeguarding & Child Protection</div><span class="badge badge-req">Required</span></div>
            <div class="training-meta">45 min · Certificate on completion</div>
            <div class="training-progress">
              <div style="display:flex;justify-content:space-between;font-size:11px;margin-bottom:4px;"><span style="color:var(--text-muted)">Your progress</span><span style="font-weight:500;">100%</span></div>
              <div class="progress-bar-bg"><div class="progress-bar-fill" style="width:100%"></div></div>
            </div>
            <div style="margin-top:8px;"><span class="badge badge-done">✓ Completed</span></div>
          </div>
        </div>
        <div class="training-card">
          <div class="training-icon" style="background:var(--purple-50);">🌍</div>
          <div style="flex:1;">
            <div style="display:flex;justify-content:space-between;align-items:start;"><div class="training-title">DEI Foundations</div><span class="badge badge-req">Required</span></div>
            <div class="training-meta">60 min · 4 modules</div>
            <div class="training-progress">
              <div style="display:flex;justify-content:space-between;font-size:11px;margin-bottom:4px;"><span style="color:var(--text-muted)">Your progress</span><span style="font-weight:500;">75%</span></div>
              <div class="progress-bar-bg"><div class="progress-bar-fill" style="width:75%;background:var(--purple-200)"></div></div>
            </div>
            <button class="btn btn-primary" style="margin-top:8px;padding:5px 12px;font-size:12px;">Continue →</button>
          </div>
        </div>
        <div class="training-card">
          <div class="training-icon" style="background:var(--amber-50);">🩺</div>
          <div style="flex:1;">
            <div style="display:flex;justify-content:space-between;align-items:start;"><div class="training-title">First Aid Recertification</div><span class="badge badge-req">Due Aug 1</span></div>
            <div class="training-meta">90 min · Hands-on component required</div>
            <div class="training-progress">
              <div style="display:flex;justify-content:space-between;font-size:11px;margin-bottom:4px;"><span style="color:var(--text-muted)">Your progress</span><span style="font-weight:500;">0%</span></div>
              <div class="progress-bar-bg"><div class="progress-bar-fill" style="width:0%"></div></div>
            </div>
            <button class="btn" style="margin-top:8px;padding:5px 12px;font-size:12px;">Start module →</button>
          </div>
        </div>
        <div class="training-card">
          <div class="training-icon" style="background:var(--teal-50);">💬</div>
          <div style="flex:1;">
            <div style="display:flex;justify-content:space-between;align-items:start;"><div class="training-title">Trauma-Informed Communication</div><span class="badge badge-new">New</span></div>
            <div class="training-meta">30 min · Optional</div>
            <div class="training-progress">
              <div style="display:flex;justify-content:space-between;font-size:11px;margin-bottom:4px;"><span style="color:var(--text-muted)">Your progress</span><span style="font-weight:500;">0%</span></div>
              <div class="progress-bar-bg"><div class="progress-bar-fill" style="width:0%"></div></div>
            </div>
            <button class="btn" style="margin-top:8px;padding:5px 12px;font-size:12px;">Start module →</button>
          </div>
        </div>
        <div class="training-card">
          <div class="training-icon" style="background:var(--coral-50);">📋</div>
          <div style="flex:1;">
            <div style="display:flex;justify-content:space-between;align-items:start;"><div class="training-title">Grant Reporting Basics</div><span class="badge badge-new">New</span></div>
            <div class="training-meta">20 min · For coordinators</div>
            <div class="training-progress">
              <div style="display:flex;justify-content:space-between;font-size:11px;margin-bottom:4px;"><span style="color:var(--text-muted)">Your progress</span><span style="font-weight:500;">0%</span></div>
              <div class="progress-bar-bg"><div class="progress-bar-fill" style="width:0%"></div></div>
            </div>
            <button class="btn" style="margin-top:8px;padding:5px 12px;font-size:12px;">Start module →</button>
          </div>
        </div>
        <div class="training-card">
          <div class="training-icon" style="background:var(--amber-50);">🔒</div>
          <div style="flex:1;">
            <div style="display:flex;justify-content:space-between;align-items:start;"><div class="training-title">Data Privacy & HIPAA Overview</div><span class="badge badge-done">Completed</span></div>
            <div class="training-meta">25 min · Annual requirement</div>
            <div class="training-progress">
              <div style="display:flex;justify-content:space-between;font-size:11px;margin-bottom:4px;"><span style="color:var(--text-muted)">Your progress</span><span style="font-weight:500;">100%</span></div>
              <div class="progress-bar-bg"><div class="progress-bar-fill" style="width:100%"></div></div>
            </div>
            <div style="margin-top:8px;"><span class="badge badge-done">✓ Completed</span></div>
          </div>
        </div>
      </div>
    </div>

    <!-- LOUNGE PAGE -->
    <div class="page" id="page-lounge">
      <div class="two-col" style="align-items:start;">
        <div class="card">
          <div class="card-title">Staff lounge 💬</div>
          <div id="lounge-feed">
            <div class="lounge-post">
              <div class="poster-av" style="background:var(--teal-50);color:var(--teal-600);">MO</div>
              <div><div class="lounge-who">Mariama Owusu <span class="lounge-time">· 8 min ago</span></div><div class="lounge-msg">Reminder: ESL room A1 needs the projector set up before 8:45. Who can help?</div></div>
            </div>
            <div class="lounge-post">
              <div class="poster-av" style="background:var(--amber-50);color:var(--amber-600);">LC</div>
              <div><div class="lounge-who">Leo Chen <span class="lounge-time">· 22 min ago</span></div><div class="lounge-msg">Coffee machine is back on! ☕ Someone fixed it this morning. You're welcome, everyone.</div></div>
            </div>
            <div class="lounge-post">
              <div class="poster-av" style="background:var(--coral-50);color:var(--coral-600);">RD</div>
              <div><div class="lounge-who">Rosa Diaz <span class="lounge-time">· 1 hr ago</span></div><div class="lounge-msg">Youth group made a mural in the gym — it looks incredible. Come see it before tonight's dinner!</div></div>
            </div>
            <div class="lounge-post">
              <div class="poster-av" style="background:var(--purple-50);color:var(--purple-600);">AN</div>
              <div><div class="lounge-who">Ama Nkosi <span class="lounge-time">· 2 hrs ago</span></div><div class="lounge-msg">Out today but if anyone needs the citizenship prep materials, they're in the shared folder under /Programs/Civic.</div></div>
            </div>
          </div>
          <div class="lounge-input-row">
            <input class="lounge-input" id="lounge-msg-input" type="text" placeholder="Say something to the team…" onkeydown="handleLoungePost(event)" />
            <button class="btn btn-primary" onclick="postLounge()">Send</button>
          </div>
        </div>
        <div style="display:flex;flex-direction:column;gap:14px;">
          <div class="card">
            <div class="card-title">Quick links</div>
            <div style="display:flex;flex-direction:column;gap:8px;">
              <button class="btn" style="text-align:left;width:100%;">📂 Shared drive</button>
              <button class="btn" style="text-align:left;width:100%;">📅 Request time off</button>
              <button class="btn" style="text-align:left;width:100%;">📝 Incident report form</button>
              <button class="btn" style="text-align:left;width:100%;">🏥 Benefits & HR portal</button>
              <button class="btn" style="text-align:left;width:100%;">📞 Emergency contacts</button>
            </div>
          </div>
          <div class="card">
            <div class="card-title">Who's in today</div>
            <div style="display:flex;flex-direction:column;gap:10px;">
              <div style="display:flex;align-items:center;gap:8px;font-size:13px;"><div class="staff-av" style="background:var(--teal-50);color:var(--teal-600);width:28px;height:28px;font-size:11px;">MO</div>Mariama Owusu<span class="status-dot" style="background:#0F6E56;margin-left:auto;margin-right:4px;"></span><span style="font-size:11px;color:var(--text-muted)">On shift</span></div>
              <div style="display:flex;align-items:center;gap:8px;font-size:13px;"><div class="staff-av" style="background:var(--amber-50);color:var(--amber-600);width:28px;height:28px;font-size:11px;">LC</div>Leo Chen<span class="status-dot" style="background:#0F6E56;margin-left:auto;margin-right:4px;"></span><span style="font-size:11px;color:var(--text-muted)">On shift</span></div>
              <div style="display:flex;align-items:center;gap:8px;font-size:13px;"><div class="staff-av" style="background:var(--coral-50);color:var(--coral-600);width:28px;height:28px;font-size:11px;">RD</div>Rosa Diaz<span class="status-dot" style="background:#0F6E56;margin-left:auto;margin-right:4px;"></span><span style="font-size:11px;color:var(--text-muted)">On shift</span></div>
              <div style="display:flex;align-items:center;gap:8px;font-size:13px;"><div class="staff-av" style="background:var(--purple-50);color:var(--purple-600);width:28px;height:28px;font-size:11px;">SK</div>Sara Kim<span class="status-dot" style="background:#0F6E56;margin-left:auto;margin-right:4px;"></span><span style="font-size:11px;color:var(--text-muted)">On shift</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- ANNOUNCEMENTS PAGE -->
    <div class="page" id="page-announcements">
      <div class="card">
        <div class="card-title">All announcements</div>
        <div style="display:flex;flex-direction:column;gap:16px;">
          <div style="border:1px solid var(--border);border-radius:var(--radius-sm);padding:16px;">
            <div style="display:flex;justify-content:space-between;align-items:start;margin-bottom:8px;"><div style="font-size:14px;font-weight:500;">Staff meeting — this Friday at 10am</div><span class="badge badge-req">Today</span></div>
            <div style="font-size:13px;color:var(--text-muted);margin-bottom:6px;">Posted by: Admin · June 23</div>
            <div style="font-size:13.5px;line-height:1.6;">All coordinators and program leads, please attend Friday's all-staff meeting in Room 3B. Starts at 10am sharp. Light refreshments provided. We'll be reviewing Q2 outcomes and planning for the fall programming season.</div>
          </div>
          <div style="border:1px solid var(--border);border-radius:var(--radius-sm);padding:16px;">
            <div style="display:flex;justify-content:space-between;align-items:start;margin-bottom:8px;"><div style="font-size:14px;font-weight:500;">New training module: Trauma-Informed Communication</div><span class="badge badge-new">New</span></div>
            <div style="font-size:13px;color:var(--text-muted);margin-bottom:6px;">Posted by: HR · June 20</div>
            <div style="font-size:13.5px;line-height:1.6;">A new optional training module is now available in the Training Hub. It covers communication strategies for working with community members who have experienced trauma. Highly recommended for all front-line staff.</div>
          </div>
          <div style="border:1px solid var(--border);border-radius:var(--radius-sm);padding:16px;">
            <div style="display:flex;justify-content:space-between;align-items:start;margin-bottom:8px;"><div style="font-size:14px;font-weight:500;">First aid recertification — sign up now</div><span class="badge badge-req">Deadline Aug 1</span></div>
            <div style="font-size:13px;color:var(--text-muted);margin-bottom:6px;">Posted by: Admin · June 18</div>
            <div style="font-size:13.5px;line-height:1.6;">All full-time staff must complete first aid recertification before August 1. The online portion is in the Training Hub. The in-person component will be held July 19 — sign up via the HR portal to reserve your spot.</div>
          </div>
        </div>
      </div>
    </div>

  </div>
</main>



</div>
</div>

<script>
// Each page's original inline JavaScript, preserved as-is (wrapped in its
// own function scope) and only re-run when that page is actually visited.
// This is what lets pages that share common helper names (showToast,
// switchTab, etc.) coexist in one document without clobbering each other:
// whichever page you're looking at is the one whose script just ran.
var GCCC_SCRIPTS = {"home": "(function(){\n\nfunction sgtSubmit(){\n  var name=document.getElementById('sgtName').value.trim();\n  var email=document.getElementById('sgtEmail').value.trim();\n  var team=document.getElementById('sgtTeam').value;\n  if(!name||!email||!team){alert('Please fill in your name, email, and choose a team!');return;}\n  if(!email.includes('@')){alert('Please enter a valid email address.');return;}\n  document.getElementById('sgtConfirm').style.display='block';\n  document.querySelector('#sgtSignupModal button[onclick=\"sgtSubmit()\"]').style.display='none';\n}\n\n\n// Sustainability Hour live pledge counter animation\n(function(){\n  let n = 47391;\n  const el = document.getElementById('shPledgeNum');\n  if(el){\n    setInterval(()=>{\n      n += Math.floor(Math.random()*3)+1;\n      el.textContent = n.toLocaleString();\n    }, 3800);\n  }\n\n  // Daily countdown: hours left in the current day\n  function updateShCountdown(){\n    const now = new Date();\n    const endOfDay = new Date(now);\n    endOfDay.setHours(23,59,59,999);\n    const diff = endOfDay - now;\n    const h = Math.floor(diff/3600000);\n    const m = Math.floor((diff%3600000)/60000);\n    const s = Math.floor((diff%60000)/1000);\n    const el = document.getElementById('shCountdown');\n    if(el) el.textContent = String(h).padStart(2,'0')+':'+String(m).padStart(2,'0')+':'+String(s).padStart(2,'0');\n  }\n  updateShCountdown();\n  setInterval(updateShCountdown, 1000);\n})();\n\n\n// \u2500\u2500 Live studio tab switcher \u2500\u2500\nfunction switchLive(tab, btn) {\n  document.querySelectorAll('.stream-panel').forEach(p => p.classList.remove('active'));\n  document.querySelectorAll('.stream-tab').forEach(t => t.classList.remove('active'));\n  document.getElementById('stream-' + tab).classList.add('active');\n  btn.classList.add('active');\n}\n\n// \u2500\u2500 GCCC Native Room (Jitsi) \u2500\u2500\n// Set your own PINs here \u2014 member PIN and host/admin PIN\nconst MEMBER_PIN  = '1234';   // \u2190 change to your member PIN\nconst HOST_PIN    = '0000';   // \u2190 change to your host/admin PIN\nconst ROOM_NAME   = 'GCCCLiveRoom2026';\n\nfunction enterRoom() {\n  const pin = document.getElementById('roomPin').value.trim();\n  const err = document.getElementById('roomError');\n  if (pin !== MEMBER_PIN && pin !== HOST_PIN) {\n    err.textContent = 'Incorrect PIN. Members: check your dashboard. Host: use your admin PIN.';\n    return;\n  }\n  err.textContent = '';\n  document.getElementById('room-lobby').classList.add('hidden');\n  const wrap = document.getElementById('room-frame-wrap');\n  wrap.style.display = 'block';\n  // Load Jitsi Meet API\n  const script = document.createElement('script');\n  script.src = 'https://meet.jit.si/external_api.js';\n  script.onload = function() {\n    const domain = 'meet.jit.si';\n    const isHost = pin === HOST_PIN;\n    const options = {\n      roomName: ROOM_NAME,\n      parentNode: wrap,\n      width: '100%',\n      height: '100%',\n      configOverwrite: {\n        startWithAudioMuted: !isHost,\n        startWithVideoMuted: !isHost,\n        toolbarButtons: ['microphone','camera','chat','raisehand','tileview','hangup'],\n        prejoinPageEnabled: false,\n        disableDeepLinking: true,\n      },\n      interfaceConfigOverwrite: {\n        SHOW_JITSI_WATERMARK: false,\n        SHOW_BRAND_WATERMARK: false,\n        DEFAULT_BACKGROUND: '#050D1A',\n        TOOLBAR_ALWAYS_VISIBLE: true,\n        APP_NAME: 'GCCC Live Network',\n      },\n      userInfo: { displayName: isHost ? 'GCCC Host' : 'GCCC Member' }\n    };\n    new JitsiMeetExternalAPI(domain, options);\n  };\n  document.head.appendChild(script);\n}\n\n// Allow Enter key in PIN field\ndocument.getElementById('roomPin').addEventListener('keydown', function(e){\n  if (e.key === 'Enter') enterRoom();\n});\n\n\n/* NAV SCROLL */\nwindow.addEventListener('scroll',()=>{\n  document.getElementById('site-nav').classList.toggle('scrolled',window.scrollY>40);\n});\n// Close mobile menu when any nav link is clicked\ndocument.querySelectorAll('#navLinks a').forEach(link=>{\n  link.addEventListener('click',()=>{\n    document.getElementById('navLinks').classList.remove('open');\n    document.getElementById('navHamburger').classList.remove('open');\n  });\n});\n\n/* COUNTER ANIMATION */\nconst counters=document.querySelectorAll('.impact-num');\nconst observer=new IntersectionObserver(entries=>{\n  entries.forEach(entry=>{\n    if(!entry.isIntersecting)return;\n    const el=entry.target;\n    const text=el.innerHTML;\n    const match=text.match(/^(\\d+)/);\n    if(!match)return;\n    const target=parseInt(match[1]);\n    const suffix=text.replace(/^\\d+/,'');\n    let current=0;\n    const step=Math.ceil(target/40);\n    const timer=setInterval(()=>{\n      current=Math.min(current+step,target);\n      el.innerHTML=current+suffix;\n      if(current>=target)clearInterval(timer);\n    },30);\n    observer.unobserve(el);\n  });\n},{threshold:0.5});\ncounters.forEach(c=>observer.observe(c));\n\n\n/* \u2500\u2500\u2500 GLOW TOAST \u2500\u2500\u2500 */\nfunction showGlowToast(msg){\n  const t=document.getElementById('glowToast');\n  t.textContent=msg;\n  t.classList.add('show');\n  setTimeout(()=>t.classList.remove('show'),3500);\n}\n\n/* \u2500\u2500\u2500 TABBED DONATIONS \u2500\u2500\u2500 */\nfunction switchDonTab(tab,btn){\n  document.querySelectorAll('.don-panel').forEach(p=>p.classList.remove('active'));\n  document.querySelectorAll('.don-tab').forEach(t=>t.classList.remove('active'));\n  document.getElementById('dtab-'+tab).classList.add('active');\n  btn.classList.add('active');\n}\n\n/* \u2500\u2500\u2500 DONATE STRIP \u2500\u2500\u2500 */\nfunction setStripDonate(btn,amt){\n  document.querySelectorAll('.strip-donate-btn').forEach(b=>b.classList.remove('active'));\n  btn.classList.add('active');\n}\nfunction handleStripJoin(e){\n  e.preventDefault();\n  const v=document.getElementById('stripEmail').value;\n  if(v){showGlowToast('Welcome to GCCC! Check your inbox soon. \ud83c\udf0d');document.getElementById('stripEmail').value='';}\n}\n\n/* \u2500\u2500\u2500 DOOMSDAY CLOCK \u2014 Ticking Analog Dome \u2500\u2500\u2500 */\nfunction drawDoomClock(){\n  const canvas=document.getElementById('doomClock');\n  if(!canvas)return;\n  const ctx=canvas.getContext('2d');\n  const W=100,H=100,cx=50,cy=50,r=44;\n  const now=new Date();\n  // 85 sec to midnight: position hands near 12 o'clock\n  // minute hand: 85 sec before midnight = 1 min 25 sec before = 58:35 on the clock face\n  const secFraction=now.getSeconds()/60;\n  const minAngle=((58+secFraction)/60)*2*Math.PI - Math.PI/2; // near 12\n  const secAngle=(now.getSeconds()/60)*2*Math.PI - Math.PI/2;\n\n  ctx.clearRect(0,0,W,H);\n\n  // Dome gradient face\n  const grad=ctx.createRadialGradient(cx-8,cy-10,4,cx,cy,r);\n  grad.addColorStop(0,'#2a0505');\n  grad.addColorStop(1,'#0d0000');\n  ctx.beginPath();ctx.arc(cx,cy,r,0,2*Math.PI);\n  ctx.fillStyle=grad;ctx.fill();\n\n  // Rim glow\n  ctx.beginPath();ctx.arc(cx,cy,r,0,2*Math.PI);\n  ctx.strokeStyle='#dc2626';ctx.lineWidth=2.5;\n  ctx.shadowColor='#dc2626';ctx.shadowBlur=8;ctx.stroke();\n  ctx.shadowBlur=0;\n\n  // Hour ticks\n  for(let i=0;i<12;i++){\n    const a=(i/12)*2*Math.PI-Math.PI/2;\n    const x1=cx+Math.cos(a)*(r-6),y1=cy+Math.sin(a)*(r-6);\n    const x2=cx+Math.cos(a)*(r-2),y2=cy+Math.sin(a)*(r-2);\n    ctx.beginPath();ctx.moveTo(x1,y1);ctx.lineTo(x2,y2);\n    ctx.strokeStyle=i===0?'#ef4444':'#7f1d1d';ctx.lineWidth=i===0?2:1;ctx.stroke();\n  }\n\n  // Minute hand (near 12 \u2014 danger zone)\n  ctx.beginPath();\n  ctx.moveTo(cx+Math.cos(minAngle+Math.PI)*8,cy+Math.sin(minAngle+Math.PI)*8);\n  ctx.lineTo(cx+Math.cos(minAngle)*28,cy+Math.sin(minAngle)*28);\n  ctx.strokeStyle='#ef4444';ctx.lineWidth=2.5;ctx.lineCap='round';\n  ctx.shadowColor='#ef4444';ctx.shadowBlur=4;ctx.stroke();ctx.shadowBlur=0;\n\n  // Second hand (sweeping live)\n  ctx.beginPath();\n  ctx.moveTo(cx+Math.cos(secAngle+Math.PI)*10,cy+Math.sin(secAngle+Math.PI)*10);\n  ctx.lineTo(cx+Math.cos(secAngle)*38,cy+Math.sin(secAngle)*38);\n  ctx.strokeStyle='#ff0000';ctx.lineWidth=1;ctx.lineCap='round';ctx.stroke();\n\n  // Center pin\n  ctx.beginPath();ctx.arc(cx,cy,3,0,2*Math.PI);\n  ctx.fillStyle='#ef4444';ctx.fill();\n}\nsetInterval(drawDoomClock,1000);\ndrawDoomClock();\n\n/* \u2500\u2500\u2500 COUNTDOWN DIGITS (counting up to midnight) \u2500\u2500\u2500 */\nfunction updateCountdown(){\n  const el=document.getElementById('clockDigits');\n  if(!el)return;\n  const now=new Date();\n  const sec=now.getSeconds();\n  const remaining=85-sec%85;\n  const m=Math.floor(remaining/60);\n  const s=remaining%60;\n  el.textContent=m+':'+(s<10?'0':'')+s;\n}\nsetInterval(updateCountdown,1000);\nupdateCountdown();\n\n/* \u2500\u2500\u2500 GLOBE vs DOOMSDAY CLOCK GAME \u2500\u2500\u2500 */\n(function(){\n\n  const SDGs=[\n    {n:1,  label:'No Poverty',          color:'#E5243B', icon:'\ud83d\udcb0'},\n    {n:2,  label:'Zero Hunger',         color:'#DDA63A', icon:'\ud83c\udf3e'},\n    {n:3,  label:'Good Health',         color:'#4C9F38', icon:'\u2764\ufe0f'},\n    {n:4,  label:'Quality Education',   color:'#C5192D', icon:'\ud83d\udcda'},\n    {n:5,  label:'Gender Equality',     color:'#FF3A21', icon:'\u2640\ufe0f'},\n    {n:6,  label:'Clean Water',         color:'#26BDE2', icon:'\ud83d\udca7'},\n    {n:7,  label:'Clean Energy',        color:'#FCC30B', icon:'\u2600\ufe0f'},\n    {n:8,  label:'Decent Work',         color:'#A21942', icon:'\ud83d\udcbc'},\n    {n:9,  label:'Innovation',          color:'#FD6925', icon:'\ud83c\udfd7\ufe0f'},\n    {n:10, label:'Reduced Inequality',  color:'#DD1367', icon:'\u2696\ufe0f'},\n    {n:11, label:'Sustainable Cities',  color:'#FD9D24', icon:'\ud83c\udfd9\ufe0f'},\n    {n:12, label:'Responsible Consump.',color:'#BF8B2E', icon:'\u267b\ufe0f'},\n    {n:13, label:'Climate Action',      color:'#3F7E44', icon:'\ud83c\udf21\ufe0f'},\n    {n:14, label:'Life Below Water',    color:'#0A97D9', icon:'\ud83d\udc0b'},\n    {n:15, label:'Life on Land',        color:'#56C02B', icon:'\ud83c\udf33'},\n    {n:16, label:'Peace & Justice',     color:'#00689D', icon:'\ud83d\udd4a\ufe0f'},\n    {n:17, label:'Partnerships',        color:'#19486A', icon:'\ud83e\udd1d'},\n  ];\n\n  const TOTAL_SECS = 255; // 4 min 15 sec \u2014 enough pressure\n  let gg = {\n    running: false,\n    won: false,\n    lost: false,\n    secsLeft: TOTAL_SECS,\n    currentGoal: 0, // 0-indexed, 0..16\n    completed: [],\n    intervalId: null,\n    globeAngle: 0,\n  };\n\n  /* \u2500\u2500 Build SDG grid \u2500\u2500 */\n  function buildGrid(){\n    const grid = document.getElementById('ggSdgGrid');\n    if(!grid) return;\n    grid.innerHTML = '';\n    SDGs.forEach((sdg, i) => {\n      const cell = document.createElement('div');\n      cell.id = 'gg-sdg-'+i;\n      cell.title = 'SDG '+sdg.n+': '+sdg.label;\n      cell.style.cssText = `width:100%;aspect-ratio:1;border-radius:6px;display:flex;align-items:center;justify-content:center;font-size:15px;cursor:default;transition:all 0.4s;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.08);opacity:0.35;`;\n      cell.textContent = sdg.icon;\n      grid.appendChild(cell);\n    });\n  }\n\n  function refreshGrid(){\n    SDGs.forEach((sdg,i)=>{\n      const cell = document.getElementById('gg-sdg-'+i);\n      if(!cell) return;\n      if(gg.completed.includes(i)){\n        cell.style.background = sdg.color;\n        cell.style.opacity = '1';\n        cell.style.border = '1px solid '+sdg.color;\n        cell.style.transform = 'scale(1.08)';\n        cell.style.boxShadow = '0 0 8px '+sdg.color+'88';\n      } else if(i === gg.currentGoal && gg.running){\n        cell.style.background = 'rgba(255,255,255,0.12)';\n        cell.style.opacity = '1';\n        cell.style.border = '2px solid #fff';\n        cell.style.animation = 'ggPulseCell 1s ease-in-out infinite';\n      } else {\n        cell.style.background = 'rgba(255,255,255,0.05)';\n        cell.style.opacity = '0.35';\n        cell.style.border = '1px solid rgba(255,255,255,0.08)';\n        cell.style.transform = 'scale(1)';\n        cell.style.boxShadow = 'none';\n        cell.style.animation = 'none';\n      }\n    });\n  }\n\n  /* \u2500\u2500 Draw globe canvas \u2500\u2500 */\n  function drawGlobe(){\n    const canvas = document.getElementById('ggGlobe');\n    if(!canvas) return;\n    const ctx = canvas.getContext('2d');\n    const W=180, H=180, cx=90, cy=90, r=80;\n    ctx.clearRect(0,0,W,H);\n\n    const health = gg.completed.length / 17; // 0..1\n\n    // Atmosphere glow\n    if(health > 0){\n      const atmo = ctx.createRadialGradient(cx,cy,r*0.85,cx,cy,r*1.1);\n      const gc = health < 0.5\n        ? `rgba(74,222,128,${health*0.4})`\n        : `rgba(56,189,248,${health*0.5})`;\n      atmo.addColorStop(0, gc);\n      atmo.addColorStop(1, 'transparent');\n      ctx.beginPath(); ctx.arc(cx,cy,r*1.1,0,Math.PI*2);\n      ctx.fillStyle=atmo; ctx.fill();\n    }\n\n    // Base sphere \u2014 barren (grey-brown) \u2192 living (blue-green)\n    const barrenC = [60,45,35];\n    const liveC   = [30,80,140];\n    const r2      = barrenC.map((v,i)=>Math.round(v+(liveC[i]-v)*health));\n    const grad = ctx.createRadialGradient(cx-25,cy-25,10,cx,cy,r);\n    grad.addColorStop(0, `rgb(${r2[0]+50},${r2[1]+50},${r2[2]+50})`);\n    grad.addColorStop(0.5, `rgb(${r2[0]},${r2[1]},${r2[2]})`);\n    grad.addColorStop(1, `rgb(${Math.max(0,r2[0]-30)},${Math.max(0,r2[1]-30)},${Math.max(0,r2[2]-30)})`);\n    ctx.beginPath(); ctx.arc(cx,cy,r,0,Math.PI*2);\n    ctx.fillStyle=grad; ctx.fill();\n\n    // Continent patches that appear as goals complete\n    if(health > 0){\n      ctx.save();\n      ctx.clip(); // clip to sphere\n      ctx.beginPath(); ctx.arc(cx,cy,r,0,Math.PI*2); ctx.clip();\n\n      const continents = [\n        {x:68,y:55,w:28,h:22},  // N. America\n        {x:72,y:88,w:18,h:26},  // S. America\n        {x:88,y:52,w:20,h:28},  // Europe/Africa\n        {x:110,y:58,w:30,h:24}, // Asia\n        {x:120,y:100,w:22,h:14},// Australia\n      ];\n      const landAlpha = Math.min(health*2.5, 1);\n      const landColor = health > 0.5\n        ? `rgba(34,197,94,${landAlpha*0.7})`\n        : `rgba(120,160,60,${landAlpha*0.5})`;\n      ctx.fillStyle = landColor;\n      const showCount = Math.ceil(health * continents.length);\n      continents.slice(0,showCount).forEach(c=>{\n        ctx.beginPath();\n        ctx.ellipse(c.x + Math.sin(gg.globeAngle*0.4)*3, c.y, c.w/2, c.h/2, 0, 0, Math.PI*2);\n        ctx.fill();\n      });\n      ctx.restore();\n    }\n\n    // Ice caps at high health\n    if(health > 0.7){\n      const iceAlpha = (health-0.7)/0.3;\n      ctx.save();\n      ctx.beginPath(); ctx.arc(cx,cy,r,0,Math.PI*2); ctx.clip();\n      ctx.fillStyle = `rgba(220,240,255,${iceAlpha*0.6})`;\n      ctx.beginPath(); ctx.ellipse(cx, cy-r+14, 20, 10, 0, 0, Math.PI*2); ctx.fill();\n      ctx.beginPath(); ctx.ellipse(cx, cy+r-14, 16, 8, 0, 0, Math.PI*2); ctx.fill();\n      ctx.restore();\n    }\n\n    // Clouds\n    if(health > 0.3){\n      ctx.save();\n      ctx.beginPath(); ctx.arc(cx,cy,r,0,Math.PI*2); ctx.clip();\n      const cloudAlpha = Math.min((health-0.3)*2, 0.35);\n      ctx.fillStyle = `rgba(255,255,255,${cloudAlpha})`;\n      const angle = gg.globeAngle;\n      [[70,65,20,8],[100,80,16,6],[85,110,22,7]].forEach(([bx,by,bw,bh])=>{\n        ctx.beginPath();\n        ctx.ellipse(bx+Math.sin(angle)*5, by, bw, bh, 0, 0, Math.PI*2);\n        ctx.fill();\n      });\n      ctx.restore();\n    }\n\n    // Rim highlight\n    ctx.beginPath(); ctx.arc(cx,cy,r,0,Math.PI*2);\n    ctx.strokeStyle = health > 0.3 ? `rgba(100,200,255,0.4)` : `rgba(150,120,100,0.3)`;\n    ctx.lineWidth=2; ctx.stroke();\n\n    // Shine\n    const shine = ctx.createRadialGradient(cx-28,cy-28,2,cx-20,cy-20,r*0.6);\n    shine.addColorStop(0,'rgba(255,255,255,0.22)');\n    shine.addColorStop(1,'rgba(255,255,255,0)');\n    ctx.beginPath(); ctx.arc(cx,cy,r,0,Math.PI*2);\n    ctx.fillStyle=shine; ctx.fill();\n\n    // Explosion if lost\n    if(gg.lost){\n      ctx.beginPath(); ctx.arc(cx,cy,r,0,Math.PI*2);\n      ctx.fillStyle='rgba(220,38,38,0.7)'; ctx.fill();\n      ctx.fillStyle='#fff';\n      ctx.font='bold 56px serif';\n      ctx.textAlign='center';\n      ctx.textBaseline='middle';\n      ctx.fillText('\ud83d\udca5',cx,cy);\n    }\n\n    // Victory shimmer\n    if(gg.won){\n      ctx.beginPath(); ctx.arc(cx,cy,r,0,Math.PI*2);\n      ctx.fillStyle='rgba(250,204,21,0.25)'; ctx.fill();\n    }\n  }\n\n  /* \u2500\u2500 Draw game clock \u2500\u2500 */\n  function drawGameClock(){\n    const canvas = document.getElementById('ggClock');\n    if(!canvas) return;\n    const ctx = canvas.getContext('2d');\n    const W=120,H=120,cx=60,cy=60,r=54;\n    ctx.clearRect(0,0,W,H);\n\n    const frac = gg.secsLeft / TOTAL_SECS; // 1\u21920\n    const danger = frac < 0.25;\n\n    // Face\n    const g = ctx.createRadialGradient(cx-10,cy-10,4,cx,cy,r);\n    g.addColorStop(0,'#1a0202'); g.addColorStop(1,'#0a0000');\n    ctx.beginPath(); ctx.arc(cx,cy,r,0,Math.PI*2);\n    ctx.fillStyle=g; ctx.fill();\n\n    // Countdown arc\n    const startAngle = -Math.PI/2;\n    const endAngle   = startAngle + (2*Math.PI*frac);\n    ctx.beginPath();\n    ctx.arc(cx,cy,r-4,startAngle,endAngle);\n    ctx.strokeStyle = danger ? '#ef4444' : '#f59e0b';\n    ctx.lineWidth = 6;\n    ctx.lineCap = 'round';\n    if(danger){ ctx.shadowColor='#ef4444'; ctx.shadowBlur=10; }\n    ctx.stroke();\n    ctx.shadowBlur=0;\n\n    // Tick marks\n    for(let i=0;i<12;i++){\n      const a=(i/12)*2*Math.PI-Math.PI/2;\n      ctx.beginPath();\n      ctx.moveTo(cx+Math.cos(a)*(r-10),cy+Math.sin(a)*(r-10));\n      ctx.lineTo(cx+Math.cos(a)*(r-4), cy+Math.sin(a)*(r-4));\n      ctx.strokeStyle=i===0?'#ef4444':'rgba(127,29,29,0.7)';\n      ctx.lineWidth=i===0?2:1; ctx.stroke();\n    }\n\n    // Sweeping hand (real seconds)\n    const secAngle = ((Date.now()/1000)%(60)/60)*2*Math.PI - Math.PI/2;\n    ctx.beginPath();\n    ctx.moveTo(cx+Math.cos(secAngle+Math.PI)*10,cy+Math.sin(secAngle+Math.PI)*10);\n    ctx.lineTo(cx+Math.cos(secAngle)*42,cy+Math.sin(secAngle)*42);\n    ctx.strokeStyle='#ef4444'; ctx.lineWidth=1.5; ctx.lineCap='round'; ctx.stroke();\n\n    // Centre pin\n    ctx.beginPath(); ctx.arc(cx,cy,4,0,Math.PI*2);\n    ctx.fillStyle='#ef4444'; ctx.fill();\n\n    // Rim\n    ctx.beginPath(); ctx.arc(cx,cy,r,0,Math.PI*2);\n    ctx.strokeStyle = danger ? '#dc2626' : '#7f1d1d';\n    ctx.lineWidth=2.5;\n    if(danger){ ctx.shadowColor='#ef4444'; ctx.shadowBlur=12; }\n    ctx.stroke(); ctx.shadowBlur=0;\n  }\n\n  /* \u2500\u2500 Update time display \u2500\u2500 */\n  function updateTimeDisplay(){\n    const el = document.getElementById('ggTimeLeft');\n    if(!el) return;\n    const m = Math.floor(gg.secsLeft/60);\n    const s = gg.secsLeft % 60;\n    el.textContent = m+':'+(s<10?'0':'')+s;\n    el.style.color = gg.secsLeft < 60 ? '#ff0000' : '#ef4444';\n  }\n\n  /* \u2500\u2500 Update health bar & label \u2500\u2500 */\n  function updateHealth(){\n    const pct = Math.round((gg.completed.length/17)*100);\n    const bar = document.getElementById('ggHealthBar');\n    const pctEl = document.getElementById('ggHealthPct');\n    const label = document.getElementById('ggGlobeLabel');\n    if(bar) bar.style.width = pct+'%';\n    if(pctEl) pctEl.textContent = pct+'%';\n    if(label){\n      const labels=['Barren World','Lifeless Rock','Stirring...','First Signs','Awakening','Growing Hope','Green Shoots','Flourishing','Thriving!','Almost There!','\ud83c\udf0d Saved!'];\n      label.textContent = labels[Math.min(Math.floor(pct/10), labels.length-1)];\n    }\n  }\n\n  /* \u2500\u2500 Update action button \u2500\u2500 */\n  function updateActionBtn(){\n    const btn = document.getElementById('ggActionBtn');\n    if(!btn) return;\n    if(gg.currentGoal < 17){\n      const sdg = SDGs[gg.currentGoal];\n      btn.textContent = '\u270a Complete SDG '+sdg.n+': '+sdg.label;\n      btn.style.borderColor = sdg.color+'88';\n      btn.style.color = sdg.color;\n    }\n  }\n\n  /* \u2500\u2500 Complete a goal \u2500\u2500 */\n  window.ggDoGoal = function(){\n    if(!gg.running || gg.won || gg.lost) return;\n    if(gg.currentGoal >= 17) return;\n    const sdg = SDGs[gg.currentGoal];\n    gg.completed.push(gg.currentGoal);\n    gg.currentGoal++;\n\n    // Bonus time: completing a goal adds seconds\n    gg.secsLeft = Math.min(TOTAL_SECS, gg.secsLeft + 10);\n\n    const msg = document.getElementById('ggMsg');\n    if(msg) msg.textContent = '\u2705 SDG '+sdg.n+' unlocked: '+sdg.label+'! +10 seconds added. '+(17-gg.currentGoal)+' goals remaining.';\n\n    refreshGrid();\n    updateHealth();\n    updateActionBtn();\n\n    if(gg.currentGoal >= 17){\n      ggWin();\n    }\n  };\n\n  /* \u2500\u2500 Win \u2500\u2500 */\n  function ggWin(){\n    gg.won = true; gg.running = false;\n    clearInterval(gg.intervalId);\n    const msg = document.getElementById('ggMsg');\n    if(msg) msg.innerHTML = '\ud83c\udf0d\u2728 <strong style=\"color:#4ade80;\">PLANET SAVED!</strong> All 17 SDGs achieved before midnight! The Doomsday Clock has been pushed back. Humanity lives on!';\n    const btn = document.getElementById('ggActionBtn');\n    if(btn){ btn.textContent='\ud83c\udf0d Planet Saved! You did it!'; btn.style.color='#4ade80'; btn.style.borderColor='#4ade80'; btn.disabled=true; }\n    const rw = document.getElementById('ggRestartWrap');\n    if(rw) rw.style.display='block';\n    showGlowToast('\ud83c\udf0d You saved the planet! All 17 SDGs complete!');\n  }\n\n  /* \u2500\u2500 Lose \u2500\u2500 */\n  function ggLose(){\n    gg.lost = true; gg.running = false;\n    clearInterval(gg.intervalId);\n    const msg = document.getElementById('ggMsg');\n    if(msg) msg.innerHTML = '\ud83d\udca5 <strong style=\"color:#ef4444;\">MIDNIGHT STRIKES.</strong> The Doomsday Clock hit zero. The planet is gone. '+(17-gg.completed.length)+' SDGs remained. Try again \u2014 the world needs you.';\n    const btn = document.getElementById('ggActionBtn');\n    if(btn){ btn.textContent='\ud83d\udca5 The world ended. Play again?'; btn.style.color='#ef4444'; btn.style.borderColor='#ef4444'; btn.disabled=true; }\n    const rw = document.getElementById('ggRestartWrap');\n    if(rw) rw.style.display='block';\n    showGlowToast('\ud83d\udca5 Midnight struck. The planet was lost. Try again!');\n  }\n\n  /* \u2500\u2500 Restart \u2500\u2500 */\n  window.ggRestart = function(){\n    clearInterval(gg.intervalId);\n    gg = { running:true, won:false, lost:false, secsLeft:TOTAL_SECS, currentGoal:0, completed:[], intervalId:null, globeAngle:0 };\n    const btn = document.getElementById('ggActionBtn');\n    if(btn){ btn.disabled=false; }\n    const rw = document.getElementById('ggRestartWrap');\n    if(rw) rw.style.display='none';\n    buildGrid(); refreshGrid(); updateHealth(); updateActionBtn();\n    const msg = document.getElementById('ggMsg');\n    if(msg) msg.textContent='The planet stirs. You have 4:15 to save it. Complete the SDGs \u2014 in order!';\n    startTimer();\n  };\n\n  /* \u2500\u2500 Timer \u2500\u2500 */\n  function startTimer(){\n    gg.intervalId = setInterval(()=>{\n      if(!gg.running) return;\n      gg.secsLeft--;\n      gg.globeAngle += 0.02;\n      updateTimeDisplay();\n      drawGameClock();\n      drawGlobe();\n      if(gg.secsLeft <= 0) ggLose();\n    }, 1000);\n  }\n\n  /* \u2500\u2500 Render loop for smooth globe spin \u2500\u2500 */\n  function renderLoop(){\n    if(gg.running && !gg.won && !gg.lost){ gg.globeAngle += 0.008; }\n    drawGlobe();\n    drawGameClock();\n    requestAnimationFrame(renderLoop);\n  }\n\n  /* \u2500\u2500 Init \u2500\u2500 */\n  function init(){\n    buildGrid();\n    refreshGrid();\n    updateHealth();\n    updateActionBtn();\n    updateTimeDisplay();\n    gg.running = true;\n    startTimer();\n    renderLoop();\n  }\n\n  // Add pulse keyframe CSS\n  const style = document.createElement('style');\n  style.textContent = `\n    @keyframes ggPulseAnim{0%,100%{opacity:0.4;transform:translate(-50%,-50%) scale(0.9);}50%{opacity:1;transform:translate(-50%,-50%) scale(1.1);}}\n    @keyframes ggPulseCell{0%,100%{box-shadow:none;}50%{box-shadow:0 0 10px rgba(255,255,255,0.6);}}\n  `;\n  document.head.appendChild(style);\n\n  // Wait for DOM\n  if(document.readyState==='loading'){\n    document.addEventListener('DOMContentLoaded', init);\n  } else {\n    setTimeout(init, 100);\n  }\n\n})();\n\n  window.enterRoom = enterRoom;\n  window.handleStripJoin = handleStripJoin;\n  window.setStripDonate = setStripDonate;\n  window.sgtSubmit = sgtSubmit;\n  window.showGlowToast = showGlowToast;\n  window.switchDonTab = switchDonTab;\n  window.switchLive = switchLive;\n})();", "pages": "(function(){\n\n// \u2500\u2500 DATA \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n\nconst rooms = [\n  {id:\"learning-center\",emoji:\"\ud83c\udf93\",title:\"Learning Center\",label:\"Global Scholars School\",accent:\"#6366f1\",desc:\"A full academic hub for lifelong learners \u2014 SDG-aligned curriculum, tutoring, adult education, language learning, and youth enrichment.\",features:[{icon:\"\ud83d\udcda\",title:\"SDG-Aligned Curriculum\",desc:\"Every course and workshop connects to one or more of the 17 SDGs \u2014 making global learning locally relevant and actionable.\"},{icon:\"\ud83d\udde3\ufe0f\",title:\"ESL & Language Learning\",desc:\"English as a Second Language classes, language exchange pairs, and multilingual support for all backgrounds.\"},{icon:\"\ud83d\udc69\u200d\ud83c\udf93\",title:\"Adult Education\",desc:\"GED prep, workforce readiness, digital literacy, and continuing education programs for adult learners.\"},{icon:\"\ud83e\uddd2\",title:\"Youth Enrichment\",desc:\"After-school tutoring, STEM workshops, arts programs, and mentorship for K\u201312 students.\"},{icon:\"\ud83c\udfdb\ufe0f\",title:\"College & Career Prep\",desc:\"SAT/ACT prep, college application guidance, scholarship searches, and career pathway counseling.\"},{icon:\"\ud83c\udf93\",title:\"Intern & Volunteer Credit\",desc:\"Students can earn college credit by volunteering or interning with GCCC programs.\"}],resources:[{icon:\"\ud83c\udf10\",title:\"Global Scholars School Portal\",desc:\"Full course catalog, registration, and student dashboard\",href:\"https://theglobalscholarsschool.univer.se/\"},{icon:\"\ud83d\udcd6\",title:\"UN SDG Education Resources\",desc:\"Official SDG learning materials\",href:\"https://sdgs.un.org/goals/goal4\"},{icon:\"\ud83d\udcbb\",title:\"Khan Academy\",desc:\"Free world-class education for anyone, anywhere\",href:\"https://khanacademy.org\"}],cta:\"Enter Global Scholars School\",ctaHref:\"https://theglobalscholarsschool.univer.se/\"},\n  {id:\"business-lounge\",emoji:\"\ud83d\udcbc\",title:\"Business Lounge\",label:\"Founders & Entrepreneurs\",accent:\"#00D4B4\",desc:\"Co-working space for founders, freelancers, and entrepreneurs. Access to business tools, staffing resources, funding connections, and operations support.\",features:[{icon:\"\ud83d\udda5\ufe0f\",title:\"Virtual Co-Working\",desc:\"Drop into virtual co-working sessions, focus rooms, and accountability pods.\"},{icon:\"\ud83d\udcb0\",title:\"Funding Connections\",desc:\"Introductions to grants, pitch opportunities, impact investors, and community lending circles.\"},{icon:\"\ud83d\udc65\",title:\"Staffing Resources\",desc:\"Connect with interns, volunteers, virtual assistants, and skilled professionals.\"},{icon:\"\ud83d\udcca\",title:\"Business Tools Library\",desc:\"Templates, SOPs, pitch decks, financial models, and operational frameworks \u2014 free for GCCC members.\"},{icon:\"\ud83e\udd1d\",title:\"Operations Support\",desc:\"One-on-one advisory sessions with business coaches and peer mentorship.\"},{icon:\"\ud83d\ude80\",title:\"Start Your Fundraiser\",desc:\"Need emergency funding? Launch a fundraiser for personal or business needs.\"}],resources:[{icon:\"\ud83d\udcb8\",title:\"Start a Fundraiser Now\",desc:\"Emergency personal or business funding\",href:\"https://p2p.onecause.com/2026bakesale/rose-roman-williams\"},{icon:\"\ud83d\udccb\",title:\"SBA Resources\",desc:\"Free small business resources\",href:\"https://sba.gov\"},{icon:\"\ud83c\udf31\",title:\"SCORE Mentoring\",desc:\"Free business mentoring and education\",href:\"https://score.org\"}],cta:\"Enter Business Lounge\",ctaHref:\"https://globalcitizencommunitycenter.univer.se/business-lounge\"},\n  {id:\"global-cafe\",emoji:\"\u2615\",title:\"Global Cafe & Bake Sale\",label:\"No Kid Hungry Partnership\",accent:\"#1ad2dc\",desc:\"Our community caf\u00e9 and virtual bake sale \u2014 proudly partnered with No Kid Hungry. Every contribution supports SDG 2: Zero Hunger.\",features:[{icon:\"\ud83e\uddc1\",title:\"Virtual Bake Sale\",desc:\"Browse and purchase community baked goods, gift cards, and services. Every item supports No Kid Hungry.\"},{icon:\"\ud83c\udf9f\ufe0f\",title:\"Raffle & Events\",desc:\"Join community raffles, virtual meet-and-greets, and fundraising events.\"},{icon:\"\ud83c\udf81\",title:\"Gift Card Donations\",desc:\"Donate gift cards for families in need \u2014 100% goes to hunger relief programs.\"},{icon:\"\ud83c\udf0d\",title:\"Global Tour Fund\",desc:\"We're raising $2 million for our global tour across all 193 UN member nations.\"},{icon:\"\u2615\",title:\"Community Caf\u00e9 Space\",desc:\"Virtual caf\u00e9 hangouts, community coffee chats, and casual networking events.\"},{icon:\"\ud83e\udd1d\",title:\"Free Membership with Purchase\",desc:\"Every bake sale contribution automatically includes a free Home Town Heroes membership.\"}],resources:[{icon:\"\u2615\",title:\"Global Cafe & Bake Sale\",desc:\"Browse items, donate, and join the raffle\",href:\"https://globalcafe.univer.se/\"},{icon:\"\u2764\ufe0f\",title:\"No Kid Hungry\",desc:\"Learn about our hunger relief partner\",href:\"https://nokidhungry.org\"},{icon:\"\ud83d\udcb8\",title:\"Start Your Own Fundraiser\",desc:\"Need emergency funding? Launch a fundraiser now\",href:\"https://p2p.onecause.com/2026bakesale/rose-roman-williams\"}],cta:\"Visit the Global Cafe\",ctaHref:\"https://globalcafe.univer.se/\",note:\"\ud83c\udf89 Every purchase from the Global Cafe Bake Sale includes a <strong>free membership</strong> to the GCCC. Goal: raise $2 million for our global tour across 193 countries.\"},\n  {id:\"freedom-cove\",emoji:\"\ud83d\udee1\ufe0f\",title:\"Freedom Cove\",label:\"Civil Liberties & Rights\",accent:\"#FFD166\",desc:\"A sanctuary for civil liberties, advocacy, and rights education. Legal literacy workshops, know-your-rights trainings, and civic empowerment resources.\",features:[{icon:\"\ud83d\udcdc\",title:\"Know Your Rights\",desc:\"Workshops on tenant, immigrant, labor, voting, and civil rights \u2014 delivered in multiple languages.\"},{icon:\"\ud83d\uddf3\ufe0f\",title:\"Civic Empowerment\",desc:\"Voter registration, election literacy, candidate forums, and civic participation tools.\"},{icon:\"\u2696\ufe0f\",title:\"Legal Literacy Workshops\",desc:\"Plain-language explanations of laws affecting everyday community members.\"},{icon:\"\u270a\",title:\"Advocacy Training\",desc:\"Learn how to organize, petition, lobby, and advocate for policy change at every level.\"},{icon:\"\ud83c\udf10\",title:\"International Human Rights\",desc:\"Education on UN Human Rights frameworks and the Universal Declaration of Human Rights.\"},{icon:\"\ud83e\udd1d\",title:\"Legal Aid Referrals\",desc:\"Connections to pro bono legal services and community legal aid organizations.\"}],resources:[{icon:\"\ud83c\udf0d\",title:\"UN Human Rights\",desc:\"UN Office of the High Commissioner for Human Rights\",href:\"https://ohchr.org\"},{icon:\"\ud83d\uddf3\ufe0f\",title:\"Vote.org\",desc:\"Voter registration, election info, and civic tools\",href:\"https://vote.org\"},{icon:\"\u2696\ufe0f\",title:\"ACLU Know Your Rights\",desc:\"Comprehensive rights education and resources\",href:\"https://aclu.org/know-your-rights\"}],cta:\"Enter Freedom Cove\",ctaHref:\"https://globalcitizencommunitycenter.univer.se/freedom-cove\"},\n  {id:\"health-spa\",emoji:\"\ud83c\udfe5\",title:\"Health & Wellness Center\",label:\"Holistic Health & Wellbeing\",accent:\"#FF6B6B\",desc:\"Holistic health resources, DAC healthcare memberships, Rx savings, mental wellness workshops, and fitness programming for global citizens of all ages.\",features:[{icon:\"\ud83d\udc8a\",title:\"Rx Savings Program\",desc:\"Prescription savings cards and discount programs for uninsured and underinsured members.\"},{icon:\"\ud83e\udde0\",title:\"Mental Wellness Workshops\",desc:\"Stress management, mindfulness, grief support, and community mental health circles \u2014 free to all members.\"},{icon:\"\ud83c\udfc3\",title:\"Fitness Programming\",desc:\"Virtual and in-person fitness classes, wellness challenges, and community sports leagues.\"},{icon:\"\ud83e\ude7a\",title:\"DAC Healthcare Memberships\",desc:\"Discounted access to healthcare memberships and telehealth services.\"},{icon:\"\ud83c\udf3f\",title:\"Holistic Wellness\",desc:\"Nutrition counseling, herbal wellness, yoga, meditation, and culturally-responsive healing.\"},{icon:\"\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc67\",title:\"Family & Senior Programs\",desc:\"Dedicated programming for families, seniors, and youth including developmental screenings.\"}],resources:[{icon:\"\ud83d\udc8a\",title:\"GoodRx Rx Savings\",desc:\"Find prescription discounts near you\",href:\"https://goodrx.com\"},{icon:\"\ud83e\udde0\",title:\"NAMI \u2014 Mental Health Support\",desc:\"National Alliance on Mental Illness resources\",href:\"https://nami.org\"},{icon:\"\ud83c\udf0d\",title:\"SDG 3 \u2014 Good Health & Wellbeing\",desc:\"UN goals for health and wellbeing worldwide\",href:\"https://sdgs.un.org/goals/goal3\"}],cta:\"Enter Health Center\",ctaHref:\"https://globalcitizencommunitycenter.univer.se/health-spa\"},\n  {id:\"rec-suite\",emoji:\"\ud83c\udfae\",title:\"Rec Suite\",label:\"Play, Unwind & Connect\",accent:\"#AFA9EC\",desc:\"The place to play, unwind, and connect. Games, social events, community celebrations, and a space where relationships are built beyond the work.\",features:[{icon:\"\ud83c\udfae\",title:\"Community Games\",desc:\"Board game nights, trivia tournaments, esports events, and cultural game showcases from around the world.\"},{icon:\"\ud83c\udf89\",title:\"Social Events\",desc:\"Virtual mixers, community celebrations, cultural holidays, and member spotlight events year-round.\"},{icon:\"\ud83c\udfad\",title:\"Arts & Culture Showcases\",desc:\"Talent shows, cultural performances, art exhibitions, and community storytelling events.\"},{icon:\"\ud83c\udfc6\",title:\"Leaderboards & Challenges\",desc:\"Friendly competitions, wellness challenges, community goals, and achievement tracking.\"},{icon:\"\ud83c\udf0d\",title:\"International Culture Nights\",desc:\"Virtual events celebrating cultures, cuisines, traditions from all 193 nations.\"},{icon:\"\ud83d\udcac\",title:\"Community Lounges\",desc:\"Casual drop-in chat rooms, interest-based groups, and affinity spaces.\"}],resources:[{icon:\"\ud83d\udcc5\",title:\"Events Calendar\",desc:\"Full GCCC community events and activities\",href:\"#\"},{icon:\"\ud83c\udfc6\",title:\"Member Dashboard\",desc:\"Track your GCCC activity and achievements\",href:\"#\"}],cta:\"Enter Rec Suite\",ctaHref:\"https://globalcitizencommunitycenter.univer.se/recsuite\"},\n  {id:\"dev-dojo\",emoji:\"\ud83d\udcbb\",title:\"Dev Dojo\",label:\"Tech Education & Development\",accent:\"#5DCAA5\",desc:\"Tech education and software development hub. Junior developers, QA testers, and tech support \u2014 training the next generation of global citizen technologists.\",features:[{icon:\"\ud83d\udc69\u200d\ud83d\udcbb\",title:\"Junior Developer Training\",desc:\"Structured coding bootcamps, self-paced courses, and project-based learning at every skill level.\"},{icon:\"\ud83d\udd0d\",title:\"QA & Testing Track\",desc:\"Quality assurance fundamentals, test automation, bug bounties, and real-world testing on live GCCC projects.\"},{icon:\"\ud83d\udee0\ufe0f\",title:\"Tech Support Corps\",desc:\"Community members learn IT support while providing real help to GCCC members and nonprofits.\"},{icon:\"\ud83e\udd16\",title:\"AI & Emerging Tech\",desc:\"Workshops on AI tools, prompt engineering, automation, and ethical use of emerging technologies.\"},{icon:\"\ud83c\udf10\",title:\"Open Source Projects\",desc:\"Contribute to GCCC's own open source tools and join collaborative projects.\"},{icon:\"\ud83c\udfc5\",title:\"Certifications & Credentials\",desc:\"Earn verified GCCC tech credentials and prepare for industry certifications.\"}],resources:[{icon:\"\ud83d\udcda\",title:\"freeCodeCamp\",desc:\"Free coding education with certifications\",href:\"https://freecodecamp.org\"},{icon:\"\ud83d\udc19\",title:\"GitHub\",desc:\"Open source projects and version control\",href:\"https://github.com\"},{icon:\"\ud83e\udd16\",title:\"AI for Everyone\",desc:\"Coursera's intro to AI by Andrew Ng\",href:\"https://coursera.org/learn/ai-for-everyone\"}],cta:\"Enter Dev Dojo\",ctaHref:\"https://globalcitizencommunitycenter.univer.se/dev-dojo\"},\n  {id:\"emergency\",emoji:\"\ud83d\udea8\",title:\"Emergency Services\",label:\"Crisis Support & Resources\",accent:\"#F87171\",desc:\"Rapid-response resource navigation for housing, food, healthcare, and crisis support. Connecting community members to local and global aid networks.\",features:[{icon:\"\ud83c\udfe0\",title:\"Housing Crisis Support\",desc:\"Emergency shelter referrals, rental assistance navigation, and eviction prevention resources.\"},{icon:\"\ud83c\udf7d\ufe0f\",title:\"Food Assistance\",desc:\"Food bank directories, SNAP enrollment help, community meal programs, and emergency food distribution.\"},{icon:\"\ud83c\udfe5\",title:\"Healthcare Navigation\",desc:\"Connections to free clinics, community health centers, and mental health crisis lines.\"},{icon:\"\ud83d\udcb8\",title:\"Emergency Financial Aid\",desc:\"Rapid connections to emergency funds, utility assistance, and community mutual aid networks.\"},{icon:\"\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc67\",title:\"Family & Domestic Safety\",desc:\"DV hotlines, safe house referrals, and safety planning support for families in crisis.\"},{icon:\"\ud83c\udf0d\",title:\"Immigration Emergency Support\",desc:\"Connections to immigration attorneys and community sanctuary support.\"}],resources:[{icon:\"\ud83d\udcb8\",title:\"Start an Emergency Fundraiser\",desc:\"Need immediate funding? Launch a fundraiser right now\",href:\"https://p2p.onecause.com/2026bakesale/rose-roman-williams\"},{icon:\"\ud83d\udcde\",title:\"211 Helpline\",desc:\"Free social service referrals \u2014 call or text 211\",href:\"https://211.org\"},{icon:\"\ud83c\udfe0\",title:\"HUD Housing Resources\",desc:\"Federal housing assistance programs\",href:\"https://hud.gov\"}],cta:\"Access Emergency Services\",ctaHref:\"https://globalcitizencommunitycenter.univer.se/emergency-services\",note:\"\ud83d\udea8 If you are in immediate danger, call <strong>911</strong> (US) or your local emergency number. For crisis counseling, call or text <strong>988</strong> (Suicide &amp; Crisis Lifeline, US).\"},\n  {id:\"magazine\",emoji:\"\ud83d\udcf0\",title:\"Magazine & Press\",label:\"Community Journalism\",accent:\"#60a5fa\",desc:\"Independent media created by and for global citizens. Features, analysis, and storytelling across the 17 SDGs \u2014 100% community-powered journalism.\",features:[{icon:\"\u270d\ufe0f\",title:\"Community Journalism\",desc:\"Submit articles, opinion pieces, investigative reports, and human interest stories. All voices welcome.\"},{icon:\"\ud83d\udcca\",title:\"SDG Analysis & Reporting\",desc:\"Deep dives into progress on each of the 17 SDGs \u2014 written accessibly for global citizens.\"},{icon:\"\ud83c\udf99\ufe0f\",title:\"Podcast & Audio Features\",desc:\"Companion audio content produced in the GCCC Studio \u2014 interviews and panel discussions.\"},{icon:\"\ud83c\udf0d\",title:\"Global Perspectives\",desc:\"Stories and op-eds from community members in all 193 UN member nations.\"},{icon:\"\ud83d\udcf8\",title:\"Photo & Visual Journalism\",desc:\"Community photo essays, infographic reporting, and visual storytelling.\"},{icon:\"\ud83c\udfc6\",title:\"Writer Recognition Program\",desc:\"Top contributors are featured, credentialed, and supported in building their communications careers.\"}],resources:[{icon:\"\ud83d\udcf0\",title:\"GCM Magazine Portal\",desc:\"Read the latest issues and submit your story\",href:\"https://globalcitizencommunitycenter.univer.se/gcm\"},{icon:\"\u270d\ufe0f\",title:\"Submit a Story\",desc:\"Your story matters \u2014 contribute to the community press\",href:\"#\"},{icon:\"\ud83c\udf0d\",title:\"Global Citizen Journalism Hub\",desc:\"Resources for aspiring community journalists\",href:\"https://ijnet.org\"}],cta:\"Read the Magazine\",ctaHref:\"https://globalcitizencommunitycenter.univer.se/gcm\"},\n  {id:\"studio\",emoji:\"\ud83c\udfa4\",title:\"Studio\",label:\"Creative Production Space\",accent:\"#FB923C\",desc:\"Creative production space for podcasts, video, and multimedia storytelling. Where community voices are recorded, edited, and amplified to the world.\",features:[{icon:\"\ud83c\udf99\ufe0f\",title:\"Podcast Production\",desc:\"Full podcast production support \u2014 from concept to distribution across all major platforms.\"},{icon:\"\ud83c\udfac\",title:\"Video & Multimedia\",desc:\"Video recording setups, editing tools, and production guidance for YouTube, documentaries, and social media.\"},{icon:\"\ud83d\udcfb\",title:\"Live Streaming\",desc:\"Community live streams, town halls, panel discussions, and virtual events.\"},{icon:\"\ud83c\udfb5\",title:\"Music & Spoken Word\",desc:\"Recording sessions for musicians, poets, and community performers.\"},{icon:\"\ud83c\udf10\",title:\"Multilingual Production\",desc:\"Dubbing, subtitling, and translation support to reach audiences in every language.\"},{icon:\"\ud83d\udce1\",title:\"Distribution & Amplification\",desc:\"Social media strategy, SEO, press release templates, and cross-promotion within the GCCC network.\"}],resources:[{icon:\"\ud83c\udf99\ufe0f\",title:\"Anchor / Spotify for Podcasters\",desc:\"Free podcast hosting and distribution\",href:\"https://podcasters.spotify.com\"},{icon:\"\ud83c\udfac\",title:\"DaVinci Resolve\",desc:\"Free professional video editing software\",href:\"https://blackmagicdesign.com/products/davinciresolve\"},{icon:\"\ud83d\udcf0\",title:\"GCM Magazine\",desc:\"Publish your audio or video as part of the magazine\",href:\"#\"}],cta:\"Enter the Studio\",ctaHref:\"https://globalcitizencommunitycenter.univer.se/studio\"},\n  {id:\"global-counsel\",emoji:\"\u2696\ufe0f\",title:\"Global Counsel\",label:\"Legal Guidance & Policy\",accent:\"#34D399\",desc:\"Legal guidance, compliance templates, and policy navigation. Connecting members to trusted advisors, filing guides, and international legal resources.\",features:[{icon:\"\ud83d\udccb\",title:\"Compliance Templates\",desc:\"Ready-to-use legal templates for nonprofits, small businesses, and community organizations.\"},{icon:\"\ud83c\udf10\",title:\"International Legal Resources\",desc:\"Guides to international law, cross-border business regulations, and immigration pathways.\"},{icon:\"\ud83e\udd1d\",title:\"Pro Bono Legal Connections\",desc:\"Referrals to attorneys and legal aid organizations offering free or reduced-cost services.\"},{icon:\"\ud83d\udcdc\",title:\"Nonprofit & NGO Support\",desc:\"IRS filing guidance, 501(c)(3) resources, and organizational governance templates.\"},{icon:\"\ud83c\udfdb\ufe0f\",title:\"Policy Navigation\",desc:\"Plain-language breakdowns of legislation and regulatory changes affecting community members.\"},{icon:\"\ud83d\udd12\",title:\"Digital Rights & Privacy\",desc:\"Resources on data privacy, digital security, and protecting community members online.\"}],resources:[{icon:\"\ud83d\udccb\",title:\"Rocket Lawyer\",desc:\"Affordable online legal documents and attorney access\",href:\"https://rocketlawyer.com\"},{icon:\"\ud83c\udf0d\",title:\"UN Treaty Collection\",desc:\"International treaties and legal instruments\",href:\"https://treaties.un.org\"},{icon:\"\ud83d\udee1\ufe0f\",title:\"Freedom Cove\",desc:\"Know-your-rights training and civic empowerment\",href:\"#\"}],cta:\"Enter Global Counsel\",ctaHref:\"https://globalcitizencommunitycenter.univer.se/global-counsel\"},\n  {id:\"glomart\",emoji:\"\ud83d\uded2\",title:\"GloMart \u2014 Global Market\",label:\"Community Marketplace\",accent:\"#E879F9\",desc:\"Community marketplace featuring mission-aligned products, services, and businesses. Buy, sell, and support fellow global citizens building economic power.\",features:[{icon:\"\ud83d\udecd\ufe0f\",title:\"Sell Your Products\",desc:\"List physical goods, digital products, handmade items, and merchandise to the entire GCCC membership.\"},{icon:\"\ud83d\udcbc\",title:\"Offer Your Services\",desc:\"Freelancers, consultants, tutors, and professionals can list services and connect with clients.\"},{icon:\"\ud83c\udf31\",title:\"Mission-Aligned Vetting\",desc:\"All GloMart vendors are reviewed for alignment with GCCC values and UN SDG commitments.\"},{icon:\"\ud83c\udf0d\",title:\"Global Reach, Local Impact\",desc:\"Products and services connect worldwide while keeping economic value circulating in the community.\"},{icon:\"\ud83d\udcb3\",title:\"Community Currency\",desc:\"GCCC members earn and spend community credits for discounts and exclusive GloMart benefits.\"},{icon:\"\ud83d\udce6\",title:\"Storefront Setup Support\",desc:\"The Business Lounge and Dev Dojo teams can help you build your GloMart presence.\"}],resources:[{icon:\"\ud83d\uded2\",title:\"GloMart Portal\",desc:\"Browse the marketplace and open your store\",href:\"https://globalcitizencommunitycenter.univer.se/glomart\"},{icon:\"\ud83d\udcb8\",title:\"Etsy for Handmade Goods\",desc:\"Additional marketplace platform for community artisans\",href:\"https://etsy.com\"},{icon:\"\ud83c\udf31\",title:\"B Corp Certification\",desc:\"Become a certified mission-driven business\",href:\"https://bcorporation.net\"}],cta:\"Visit GloMart\",ctaHref:\"https://globalcitizencommunitycenter.univer.se/glomart\"},\n  {id:\"global-exchange\",emoji:\"\ud83c\udf10\",title:\"Global Exchange\",label:\"International Networking\",accent:\"#FBBF24\",desc:\"Cross-cultural dialogue, international partnerships, and global networking. Where local communities connect with peers from all 193 UN member nations.\",features:[{icon:\"\ud83e\udd1d\",title:\"Cross-Cultural Dialogue\",desc:\"Facilitated conversations and cultural exchange programs to build understanding across difference.\"},{icon:\"\ud83c\udf0d\",title:\"193-Nation Network\",desc:\"Connect with GCCC community members from all 193 UN member nations.\"},{icon:\"\ud83c\udfdb\ufe0f\",title:\"International Partnerships\",desc:\"Formal partnership agreements between GCCC chapters and international civil society groups.\"},{icon:\"\ud83d\udce1\",title:\"Sister City Connections\",desc:\"Link your local community with a counterpart community abroad \u2014 exchange programs and joint projects.\"},{icon:\"\ud83c\udf93\",title:\"Cultural Education Series\",desc:\"Weekly programming on different countries and cultures presented by members with lived experience.\"},{icon:\"\ud83c\udf31\",title:\"SDG Collaboration Projects\",desc:\"International working groups tackling specific SDG challenges through cross-border collaboration.\"}],resources:[{icon:\"\ud83c\udf0d\",title:\"UN Sustainable Development\",desc:\"Official SDG frameworks for international cooperation\",href:\"https://un.org/sustainabledevelopment\"},{icon:\"\ud83e\udd1d\",title:\"Global Citizen\",desc:\"Actions and campaigns connecting global citizens worldwide\",href:\"https://globalcitizen.org\"},{icon:\"\ud83c\udfdb\ufe0f\",title:\"Council on Foreign Relations\",desc:\"Global affairs analysis and policy resources\",href:\"https://cfr.org\"}],cta:\"Enter Global Exchange\",ctaHref:\"https://globalcitizencommunitycenter.univer.se/globalexchange\"},\n  {id:\"ministry\",emoji:\"\ud83d\ude4f\",title:\"Global Citizens Ministry\",label:\"Interfaith & Spiritual Wellness\",accent:\"#A78BFA\",desc:\"Interfaith dialogue, spiritual wellness, and values-driven community. A welcoming space for reflection, purpose, and faith in a just and peaceful world.\",features:[{icon:\"\ud83d\udd4a\ufe0f\",title:\"Interfaith Dialogue\",desc:\"Respectful conversations across faith traditions \u2014 finding shared values of peace, justice, and care for creation.\"},{icon:\"\ud83e\uddd8\",title:\"Spiritual Wellness\",desc:\"Meditation, prayer, reflection, and spiritual care programs open to members of all faiths.\"},{icon:\"\ud83d\udcd6\",title:\"Sacred Texts Study\",desc:\"Comparative religion study groups and theological discussions grounded in global citizenship values.\"},{icon:\"\ud83c\udf0d\",title:\"Faith-Based Advocacy\",desc:\"Connecting spiritual values to social action \u2014 how faith communities drive SDG progress.\"},{icon:\"\ud83e\udd32\",title:\"Community Chaplaincy\",desc:\"Pastoral support, grief counseling, and spiritual care for members navigating life's hardest moments.\"},{icon:\"\ud83d\udd6f\ufe0f\",title:\"Sacred Calendar Observances\",desc:\"Community recognition and celebration of sacred holidays from faith traditions worldwide.\"}],resources:[{icon:\"\ud83d\udd4a\ufe0f\",title:\"Parliament of World Religions\",desc:\"Global interfaith dialogue and community\",href:\"https://parliamentofreligions.org\"},{icon:\"\ud83c\udf0d\",title:\"SDG 16 \u2014 Peace & Justice\",desc:\"Faith communities and the UN peace agenda\",href:\"https://sdgs.un.org/goals/goal16\"},{icon:\"\ud83e\udd32\",title:\"Interfaith America\",desc:\"Resources for interfaith cooperation\",href:\"https://interfaithamerica.org\"}],cta:\"Enter Ministry\",ctaHref:\"https://globalcitizencommunitycenter.univer.se/globalcitizensministry\"},\n];\n\nconst sdgs = [\n  {num:1,name:\"No Poverty\",color:\"#e5243b\"},\n  {num:2,name:\"Zero Hunger\",color:\"#DDA63A\"},\n  {num:3,name:\"Good Health\",color:\"#4C9F38\"},\n  {num:4,name:\"Quality Education\",color:\"#C5192D\"},\n  {num:5,name:\"Gender Equality\",color:\"#FF3A21\"},\n  {num:6,name:\"Clean Water\",color:\"#26BDE2\"},\n  {num:7,name:\"Clean Energy\",color:\"#FCC30B\"},\n  {num:8,name:\"Decent Work\",color:\"#A21942\"},\n  {num:9,name:\"Industry\",color:\"#FD6925\"},\n  {num:10,name:\"Reduced Inequality\",color:\"#DD1367\"},\n  {num:11,name:\"Sustainable Cities\",color:\"#FD9D24\"},\n  {num:12,name:\"Responsible Consumption\",color:\"#BF8B2E\"},\n  {num:13,name:\"Climate Action\",color:\"#3F7E44\"},\n  {num:14,name:\"Life Below Water\",color:\"#0A97D9\"},\n  {num:15,name:\"Life on Land\",color:\"#56C02B\"},\n  {num:16,name:\"Peace & Justice\",color:\"#00689D\"},\n  {num:17,name:\"Partnerships\",color:\"#19486A\"},\n];\n\nconst membershipTiers = [\n  {name:\"Home Town Heroes\",price:\"Free\",period:\"\",desc:\"Your free entry into the global community. Full room access from day one.\",badge:null,features:[\"Access to all 14 rooms\",\"Public events & open workshops\",\"Monthly newsletter\",\"Volunteer & intern opportunities\",\"Community forum access\"]},\n  {name:\"Metropolis Avengers\",price:\"$25\",period:\"/mo\",desc:\"For committed members ready to invest in the community they're building.\",badge:\"Most Popular\",featured:true,features:[\"Everything in Tier 1\",\"Exclusive member events\",\"Priority workshop registration\",\"GCCC digital membership card\",\"Quarterly impact reports\",\"Access to member-only resources\"]},\n  {name:\"Global Guardians\",price:\"$75\",period:\"/mo\",desc:\"For advocates and community builders driving real SDG impact.\",badge:null,features:[\"Everything in Tier 2\",\"Monthly 1-on-1 advisory call\",\"VIP Summit access\",\"Recognition in Magazine\",\"Co-create GCCC programming\",\"Advisory circle membership\"]},\n  {name:\"World Champions\",price:\"$150\",period:\"/mo\",desc:\"For organizations, leaders, and major donors shaping the GCCC mission.\",badge:null,features:[\"Everything in Tier 3\",\"Named organizational membership\",\"Board advisory input\",\"Co-branded campaigns\",\"Global tour priority inclusion\",\"Custom impact reporting\"]},\n];\n\n// \u2500\u2500 RENDER ENGINE \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n\nfunction renderNav() {\n  const nav = document.getElementById('site-nav');\n  window.addEventListener('scroll', () => {\n    nav.classList.toggle('scrolled', window.scrollY > 40);\n  });\n  nav.classList.toggle('scrolled', window.scrollY > 40);\n}\n\nfunction renderFooter() {\n  return `<footer>\n  <div class=\"footer-grid\">\n    <div>\n      <div class=\"footer-brand-word\">\ud83c\udf0d GCCC</div>\n      <div class=\"footer-tagline\">Global Citizens Community Center \u2014 building bridges across 193 nations through education, community, and action.</div>\n    </div>\n    <div class=\"footer-col\">\n      <h4>Rooms</h4>\n      ${rooms.slice(0,6).map(r=>`<a href=\"#\" onclick=\"navigate('room','${r.id}')\">${r.emoji} ${r.title}</a>`).join('')}\n    </div>\n    <div class=\"footer-col\">\n      <h4>More Rooms</h4>\n      ${rooms.slice(6).map(r=>`<a href=\"#\" onclick=\"navigate('room','${r.id}')\">${r.emoji} ${r.title}</a>`).join('')}\n    </div>\n    <div class=\"footer-col\">\n      <h4>Community</h4>\n      <a href=\"#\" onclick=\"navigate('dashboard')\">Sign In</a>\n      <a href=\"#\" onclick=\"navigate('dashboard')\">Join Free</a>\n      <a href=\"#\" onclick=\"navigate('dashboard')\">My Dashboard</a>\n      <a href=\"#\" onclick=\"navigate('home','membership')\">Membership Levels</a>\n    </div>\n  </div>\n  <div class=\"footer-bottom\">\n    <div class=\"footer-copy\">\u00a9 2026 Global Citizens Community Center. All rights reserved.</div>\n    <div class=\"footer-sdg-badge\">Aligned with all 17 UN SDGs</div>\n  </div>\n</footer>`;\n}\n\nfunction navigate(page, arg) {\n  window.scrollTo(0, 0);\n  const container = document.getElementById('page-container');\n  if (page === 'home') {\n    // Landing page lives in the main site file \u2014 redirect there\n    gcccNavigate('home', arg || null); return;\n  } else if (page === 'room') {\n    const room = rooms.find(r => r.id === arg);\n    if (room) container.innerHTML = renderRoom(room);\n  } else if (page === 'dashboard') {\n    container.innerHTML = renderDashboard();\n  }\n  renderNav();\n}\n\n// \u2500\u2500 ROOM PAGE \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\nfunction renderRoom(room) {\n  const featsHtml = room.features.map(f => `\n    <div class=\"feature-card\" style=\"--accent:${room.accent};\">\n      <div class=\"feature-icon\">${f.icon}</div>\n      <div class=\"feature-title\">${f.title}</div>\n      <div class=\"feature-desc\">${f.desc}</div>\n    </div>\n  `).join('');\n\n  const resHtml = room.resources.map(r => `\n    <a class=\"resource-item\" href=\"${r.href}\" target=\"_blank\" rel=\"noopener\">\n      <div class=\"resource-item-icon\">${r.icon}</div>\n      <div class=\"resource-item-text\">\n        <div class=\"resource-item-title\">${r.title}</div>\n        <div class=\"resource-item-desc\">${r.desc}</div>\n      </div>\n      <div class=\"resource-item-arrow\">\u2192</div>\n    </a>\n  `).join('');\n\n  const noteHtml = room.note ? `<div class=\"info-panel\" style=\"--accent:${room.accent};margin-top:40px;\"><p>${room.note}</p></div>` : '';\n\n  return `\n  <main>\n    <div class=\"page-hero\" style=\"--accent:${room.accent};\">\n      <div class=\"page-hero-bg\"></div>\n      <div class=\"page-hero-inner\">\n        <div class=\"breadcrumb\">\n          <a href=\"#\" onclick=\"gcccNavigate('home');return false;\">Home</a><span>/</span>\n          <a href=\"#\" onclick=\"gcccNavigate('home','rooms');return false;\">Rooms</a><span>/</span>\n          ${room.title}\n        </div>\n        <div class=\"page-hero-label\">${room.label}</div>\n        <h1>${room.emoji} <em>${room.title}</em></h1>\n        <p class=\"page-hero-desc\">${room.desc}</p>\n        <a class=\"btn-primary\" href=\"${room.ctaHref}\" target=\"_blank\" rel=\"noopener\" style=\"background:${room.accent};margin-right:12px;\">${room.cta} \u2197</a>\n        <a class=\"btn-outline\" href=\"#\" onclick=\"gcccNavigate('home','rooms');return false;\">All Rooms</a>\n      </div>\n      <div class=\"page-hero-accent\">${room.emoji}</div>\n    </div>\n\n    <section class=\"section\" style=\"background:var(--navy);\">\n      <div class=\"section-inner\">\n        <div class=\"section-label\" style=\"--teal:${room.accent};\">What We Offer</div>\n        <h2 class=\"section-title\">Inside the ${room.title}</h2>\n        <div class=\"divider\" style=\"background:${room.accent};\"></div>\n        <div class=\"feature-grid\">${featsHtml}</div>\n        ${noteHtml}\n      </div>\n    </section>\n\n    <section class=\"section\" style=\"background:var(--navy2);\">\n      <div class=\"section-inner\">\n        <div class=\"section-label\" style=\"--teal:${room.accent};\">Resources & Links</div>\n        <h2 class=\"section-title\">Tools & Connections</h2>\n        <div class=\"divider\" style=\"background:${room.accent};\"></div>\n        <div class=\"resource-list\">${resHtml}</div>\n      </div>\n    </section>\n\n    <section style=\"background:var(--slate);padding:60px 48px;text-align:center;\">\n      <div style=\"max-width:560px;margin:0 auto;\">\n        <div style=\"font-size:36px;margin-bottom:12px;\">\ud83c\udf0d</div>\n        <h3 style=\"font-family:'Bebas Neue',sans-serif;font-size:32px;letter-spacing:.04em;color:var(--chalk);margin-bottom:12px;\">Ready to Go Deeper?</h3>\n        <p style=\"font-size:14px;color:var(--mist);margin-bottom:24px;line-height:1.7;\">Your membership unlocks every room, every resource, and every connection in the GCCC network.</p>\n        <a href=\"#\" onclick=\"navigate('dashboard')\" class=\"btn-primary\" style=\"margin-right:12px;\">My Dashboard</a>\n        <a class=\"btn-outline\" href=\"#\" onclick=\"gcccNavigate('home','rooms');return false;\">All Rooms</a>\n      </div>\n    </section>\n  </main>\n  ${renderFooter()}`;\n}\n\n// \u2500\u2500 DASHBOARD PAGE \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\nfunction renderDashboard() {\n  const roomGrid = rooms.map(r => `\n    <a href=\"#\" onclick=\"navigate('room','${r.id}')\" style=\"display:flex;flex-direction:column;align-items:center;gap:6px;padding:14px 8px;background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.07);border-top:2px solid ${r.accent};border-radius:6px;text-decoration:none;text-align:center;transition:background .2s;\"\n    onmouseover=\"this.style.background='rgba(255,255,255,.07)'\" onmouseout=\"this.style.background='rgba(255,255,255,.03)'\">\n      <span style=\"font-size:22px;\">${r.emoji}</span>\n      <span style=\"font-size:11px;font-weight:600;color:var(--chalk);line-height:1.2;\">${r.title}</span>\n    </a>\n  `).join('');\n\n  const sdgMini = sdgs.map((s,i) => `\n    <div class=\"sdg-mini-badge ${i<5?'unlocked':'locked'}\" style=\"background:${s.color};\" title=\"SDG ${s.num}: ${s.name}\">${s.num}</div>\n  `).join('');\n\n  // Activity feed data\n  const activityFeed = [\n    {dot:\"\",icon:\"\ud83c\udf93\",text:\"Visited <strong>Learning Center</strong> \u2014 SDG 4 badge unlocked\",time:\"2 hours ago\"},\n    {dot:\"gold\",icon:\"\ud83c\udf31\",text:\"Upgraded to <strong>Home Town Heroes</strong> membership\",time:\"1 day ago\"},\n    {dot:\"\",icon:\"\u2615\",text:\"Contributed to the <strong>Global Cafe Bake Sale</strong>\",time:\"3 days ago\"},\n    {dot:\"purple\",icon:\"\ud83c\udfa4\",text:\"Registered for <strong>Studio Open Mic Night</strong>\",time:\"5 days ago\"},\n    {dot:\"red\",icon:\"\ud83d\udea8\",text:\"Shared <strong>Emergency Services</strong> page with a neighbor\",time:\"1 week ago\"},\n    {dot:\"\",icon:\"\ud83d\udcf0\",text:\"Read 3 articles in the <strong>Magazine & Press</strong> room\",time:\"1 week ago\"},\n    {dot:\"gold\",icon:\"\ud83c\udfc6\",text:\"Earned <strong>Early Adopter</strong> community badge\",time:\"2 weeks ago\"},\n  ];\n\n  // Donation history data\n  const donations = [\n    {date:\"Jun 12, 2026\",amount:\"$25.00\",type:\"Monthly Membership\",status:\"Active\",color:\"var(--teal)\"},\n    {date:\"Jun 1, 2026\",amount:\"$10.00\",type:\"Global Cafe Bake Sale\",status:\"Complete\",color:\"#60a5fa\"},\n    {date:\"May 20, 2026\",amount:\"$50.00\",type:\"GlowBag Sponsorship \u2014 Woman's\",status:\"Complete\",color:\"var(--gold)\"},\n    {date:\"May 1, 2026\",amount:\"$25.00\",type:\"Monthly Membership\",status:\"Complete\",color:\"var(--teal)\"},\n    {date:\"Apr 14, 2026\",amount:\"$100.00\",type:\"Emergency Services Fund\",status:\"Complete\",color:\"#F87171\"},\n    {date:\"Apr 1, 2026\",amount:\"$25.00\",type:\"Monthly Membership\",status:\"Complete\",color:\"var(--teal)\"},\n  ];\n\n  // Events data\n  const events = [\n    {day:\"28\",mon:\"JUN\",title:\"GCCC Global Summit \u2014 Registration Open\",desc:\"Register your delegate spot for the upcoming cross-nation summit.\",accent:\"var(--teal)\",link:\"#\"},\n    {day:\"4\",mon:\"JUL\",title:\"Global Cafe Community Coffee Chat\",desc:\"Monthly casual networking and community updates over virtual coffee.\",accent:\"#1ad2dc\",link:\"https://globalcafe.univer.se/\"},\n    {day:\"10\",mon:\"JUL\",title:\"Studio Open Mic Night\",desc:\"Share your voice \u2014 poetry, music, spoken word, and storytelling.\",accent:\"#FB923C\",link:\"https://globalcitizencommunitycenter.univer.se/studio\"},\n    {day:\"15\",mon:\"JUL\",title:\"Freedom Cove: Know Your Rights Workshop\",desc:\"Tenant rights, labor rights, and immigrant rights \u2014 in plain language.\",accent:\"#FFD166\",link:\"#\"},\n    {day:\"22\",mon:\"JUL\",title:\"GloMart Vendor Showcase\",desc:\"Browse the latest community marketplace listings and meet the sellers.\",accent:\"#E879F9\",link:\"https://globalcitizencommunitycenter.univer.se/glomart\"},\n    {day:\"1\",mon:\"AUG\",title:\"GCCC Monthly Town Hall\",desc:\"Full community update \u2014 programs, campaigns, and Q&A with leadership.\",accent:\"var(--gold)\",link:\"#\"},\n  ];\n\n  // GlowBag types\n  const glowbags = [\n    {type:\"Woman's GlowBag\",emoji:\"\ud83d\udc5c\",color:\"#FF6B9D\",desc:\"Emergency care package for women in crisis \u2014 hygiene essentials, gift cards, resource guides, and donated goods tailored to women's needs.\",items:[\"Hygiene & personal care essentials\",\"Gift cards (grocery, pharmacy)\",\"Resource & referral guide\",\"Donated clothing items\",\"Comfort & wellness items\"]},\n    {type:\"Man's GlowBag\",emoji:\"\ud83c\udf92\",color:\"#00D4B4\",desc:\"Emergency care package for men in crisis \u2014 personal essentials, work-readiness items, and practical support resources.\",items:[\"Hygiene & grooming essentials\",\"Gift cards (grocery, hardware)\",\"Job readiness resources\",\"Donated clothing items\",\"Practical household supplies\"]},\n    {type:\"Girl's GlowBag\",emoji:\"\ud83c\udf38\",color:\"#A78BFA\",desc:\"Emergency care package for girls \u2014 age-appropriate essentials, school supplies, and comfort items to support girls in difficult situations.\",items:[\"Age-appropriate hygiene items\",\"School & learning supplies\",\"Gift cards for essentials\",\"Books & creative activities\",\"Comfort & wellness items\"]},\n    {type:\"Boy's GlowBag\",emoji:\"\ud83c\udf1f\",color:\"#FBBF24\",desc:\"Emergency care package for boys \u2014 essentials, school supplies, and activities for boys in crisis situations.\",items:[\"Hygiene essentials\",\"School & learning supplies\",\"Gift cards for essentials\",\"Books & activity items\",\"Practical clothing items\"]},\n  ];\n\n  return `\n  <main>\n    <!-- DASHBOARD HEADER -->\n    <div style=\"background:var(--navy2);padding:100px 48px 0;border-bottom:1px solid rgba(240,244,255,.06);\">\n      <div style=\"max-width:1200px;margin:0 auto;\">\n        <div style=\"display:flex;align-items:flex-end;justify-content:space-between;flex-wrap:wrap;gap:20px;padding-bottom:32px;\">\n          <div>\n            <div style=\"font-size:11px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:var(--teal);margin-bottom:8px;\">Member Dashboard</div>\n            <h1 style=\"font-family:'Bebas Neue',sans-serif;font-size:clamp(36px,5vw,56px);color:var(--chalk);letter-spacing:.03em;margin-bottom:6px;\">Welcome Back, <em style=\"font-style:normal;color:var(--teal);\">Global Citizen</em></h1>\n            <p style=\"font-size:14px;color:var(--mist);\">Home Town Heroes \u00b7 Member since 2026</p>\n          </div>\n          <div style=\"display:flex;gap:12px;flex-wrap:wrap;\">\n            <a href=\"https://globalcitizencommunitycenter.univer.se/\" class=\"vcall-btn\" target=\"_blank\">\n              <span>\ud83d\udcf9</span> Join Community Call\n            </a>\n            <a href=\"#\" onclick=\"gcccNavigate('home','membership');return false;\" class=\"btn-outline\" style=\"font-size:13px;padding:10px 20px;\">Upgrade Membership</a>\n            <a href=\"#\" onclick=\"gcccNavigate('home');return false;\" class=\"btn-primary\" style=\"font-size:13px;padding:10px 20px;\">Sign Out</a>\n          </div>\n        </div>\n\n        <!-- STATS BAR -->\n        <div style=\"display:flex;gap:0;border-top:1px solid rgba(255,255,255,.06);\">\n          ${[[\"1\",\"Membership Tier\"],[\"5\",\"Rooms Visited\"],[\"5\",\"SDGs Engaged\"],[\"180\",\"Days as Member\"],[\"$235\",\"Total Contributed\"]].map(([n,l])=>`\n          <div style=\"padding:20px 32px;flex:1;min-width:100px;border-left:1px solid rgba(255,255,255,.06);\">\n            <div style=\"font-family:'Bebas Neue',sans-serif;font-size:32px;color:var(--chalk);line-height:1;\"><em style=\"font-style:normal;color:var(--teal);\">${n}</em></div>\n            <div style=\"font-size:11px;color:var(--mist);margin-top:4px;letter-spacing:.04em;\">${l}</div>\n          </div>`).join('')}\n        </div>\n\n        <!-- DASHBOARD TABS -->\n        <div style=\"display:flex;gap:0;margin-top:24px;border-bottom:1px solid rgba(255,255,255,.06);\">\n          <button class=\"dash-tab active\" onclick=\"switchTab('overview')\">Overview</button>\n          <button class=\"dash-tab\" onclick=\"switchTab('activity')\">Activity</button>\n          <button class=\"dash-tab\" onclick=\"switchTab('donations')\">Donation History</button>\n          <button class=\"dash-tab\" onclick=\"switchTab('events')\">Event Calendar</button>\n          <button class=\"dash-tab\" onclick=\"switchTab('glowbags')\">GlowBag Sponsorship</button>\n          <button class=\"dash-tab\" onclick=\"switchTab('video')\">Video Call</button>\n        </div>\n      </div>\n    </div>\n\n    <!-- TAB PANELS -->\n    <section style=\"background:var(--navy);padding:40px 48px 80px;\">\n      <div style=\"max-width:1200px;margin:0 auto;\">\n\n        <!-- \u2500\u2500 OVERVIEW TAB \u2500\u2500 -->\n        <div class=\"dash-panel active\" id=\"tab-overview\">\n          <div style=\"display:grid;grid-template-columns:1fr 1fr;gap:24px;\">\n\n            <!-- Room Quick Access -->\n            <div style=\"background:var(--slate);padding:28px;border-radius:4px;grid-column:1/-1;\">\n              <div style=\"font-size:11px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:var(--teal);margin-bottom:16px;\">Quick Access \u2014 All 14 Rooms</div>\n              <div style=\"display:grid;grid-template-columns:repeat(auto-fill,minmax(120px,1fr));gap:8px;\">${roomGrid}</div>\n            </div>\n\n            <!-- Membership Card -->\n            <div style=\"background:linear-gradient(135deg,#0A2A1A 0%,#051810 100%);padding:28px;border-radius:4px;border:1px solid rgba(0,212,180,.2);\">\n              <div style=\"font-size:11px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:var(--teal);margin-bottom:12px;\">Your Membership</div>\n              <div style=\"display:flex;align-items:center;gap:12px;margin-bottom:16px;\">\n                <div style=\"width:48px;height:48px;border-radius:50%;background:rgba(0,212,180,.15);border:2px solid var(--teal);display:flex;align-items:center;justify-content:center;font-size:22px;\">\ud83c\udf31</div>\n                <div>\n                  <div style=\"font-family:'Bebas Neue',sans-serif;font-size:22px;color:var(--chalk);letter-spacing:.04em;\">Home Town Heroes</div>\n                  <div style=\"font-size:12px;color:var(--mist);\">Tier 1 \u00b7 Free</div>\n                </div>\n              </div>\n              <ul style=\"list-style:none;display:flex;flex-direction:column;gap:8px;margin-bottom:20px;\">\n                ${[\"Access to all 14 rooms\",\"Public events & open workshops\",\"Monthly newsletter\",\"Volunteer & intern opportunities\"].map(f=>`<li style=\"font-size:13px;color:var(--mist);display:flex;gap:8px;\"><span style=\"color:var(--teal);\">\u2713</span>${f}</li>`).join('')}\n              </ul>\n              <a href=\"#\" onclick=\"gcccNavigate('home','membership');return false;\" class=\"btn-primary\" style=\"width:100%;text-align:center;display:block;font-size:13px;padding:11px;\">Upgrade to Metropolis Avengers \u2192</a>\n            </div>\n\n            <!-- Profile -->\n            <div style=\"background:var(--slate);padding:28px;border-radius:4px;\">\n              <div style=\"font-size:11px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:var(--teal);margin-bottom:16px;\">Your Profile</div>\n              <div class=\"form-group\"><label class=\"form-label\">Display Name</label><input type=\"text\" class=\"form-input\" placeholder=\"Your name\" id=\"profileName\"/></div>\n              <div class=\"form-group\"><label class=\"form-label\">Email</label><input type=\"email\" class=\"form-input\" placeholder=\"you@example.com\" id=\"profileEmail\"/></div>\n              <div class=\"form-group\">\n                <label class=\"form-label\">Country</label>\n                <select class=\"form-input form-select\">\n                  ${[\"United States\",\"United Kingdom\",\"Canada\",\"Nigeria\",\"Ghana\",\"Kenya\",\"Jamaica\",\"India\",\"Philippines\",\"Brazil\",\"Other\"].map(c=>`<option>${c}</option>`).join('')}\n                </select>\n              </div>\n              <div class=\"form-group\"><label class=\"form-label\">Bio (optional)</label><textarea class=\"form-input\" rows=\"2\" placeholder=\"Tell the community about yourself\u2026\" style=\"resize:vertical;\"></textarea></div>\n              <button class=\"btn-primary\" style=\"width:100%;font-size:13px;padding:11px;\" onclick=\"saveProfile()\">Save Profile</button>\n              <div id=\"profileMsg\" style=\"margin-top:10px;font-size:12px;text-align:center;color:var(--teal);min-height:16px;\"></div>\n            </div>\n\n            <!-- Announcements -->\n            <div style=\"background:var(--slate);padding:28px;border-radius:4px;\">\n              <div style=\"font-size:11px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:var(--teal);margin-bottom:16px;\">Community Announcements</div>\n              <div style=\"display:flex;flex-direction:column;gap:12px;\">\n                ${[\n                  [\"var(--teal)\",\"\ud83c\udf89 Welcome to the new GCCC site!\",\"We've moved! Explore all 14 rooms and update your profile.\"],\n                  [\"var(--gold)\",\"\ud83c\udf0d Global Summit Registration Open\",\"Register your interest for the upcoming GCCC Global Summit.\"],\n                  [\"#FB923C\",\"\u2615 Bake Sale Goal: $2M for Global Tour\",\"Visit the Global Cafe to contribute and earn your free membership.\"],\n                  [\"#F87171\",\"\ud83d\udcb8 Need Emergency Funding?\",\"Start a fundraiser now via our Emergency Services room.\"],\n                ].map(([c,t,d])=>`<div style=\"border-left:3px solid ${c};padding:10px 14px;background:rgba(255,255,255,.02);\">\n                  <div style=\"font-size:13px;font-weight:600;color:var(--chalk);margin-bottom:3px;\">${t}</div>\n                  <div style=\"font-size:12px;color:var(--mist);\">${d}</div>\n                </div>`).join('')}\n              </div>\n            </div>\n\n            <!-- SDG Engagement -->\n            <div style=\"background:var(--slate);padding:28px;border-radius:4px;\">\n              <div style=\"font-size:11px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:var(--teal);margin-bottom:16px;\">Your SDG Engagement</div>\n              <p style=\"font-size:13px;color:var(--mist);margin-bottom:16px;\">Track which Sustainable Development Goals you're actively supporting through your GCCC activity. Visit more rooms to unlock more SDGs.</p>\n              <div style=\"display:grid;grid-template-columns:repeat(auto-fill,minmax(44px,1fr));gap:6px;\">${sdgMini}</div>\n              <div style=\"margin-top:16px;font-size:12px;color:var(--mist);\">5 of 17 SDGs engaged. <a href=\"#\" onclick=\"gcccNavigate('home','goals');return false;\" style=\"color:var(--teal);\">Learn about all 17 SDGs \u2192</a></div>\n            </div>\n\n            <!-- Quick Resources -->\n            <div style=\"background:var(--slate);padding:28px;border-radius:4px;\">\n              <div style=\"font-size:11px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:var(--teal);margin-bottom:16px;\">Quick Resources</div>\n              <div style=\"display:flex;flex-direction:column;gap:8px;\">\n                <a href=\"https://p2p.onecause.com/2026bakesale/rose-roman-williams\" target=\"_blank\" class=\"resource-item\" style=\"border-radius:4px;\">\n                  <div class=\"resource-item-icon\">\ud83d\udcb8</div>\n                  <div class=\"resource-item-text\"><div class=\"resource-item-title\">Get Your Fundraiser Now</div><div class=\"resource-item-desc\">Emergency personal or business funding now</div></div>\n                  <div class=\"resource-item-arrow\">\u2192</div>\n                </a>\n                <a href=\"#\" onclick=\"navigate('room','emergency')\" class=\"resource-item\" style=\"border-radius:4px;\">\n                  <div class=\"resource-item-icon\">\ud83d\udea8</div>\n                  <div class=\"resource-item-text\"><div class=\"resource-item-title\">Emergency Services</div><div class=\"resource-item-desc\">Housing, food, healthcare crisis support</div></div>\n                  <div class=\"resource-item-arrow\">\u2192</div>\n                </a>\n                <a href=\"#\" onclick=\"navigate('room','business-lounge')\" class=\"resource-item\" style=\"border-radius:4px;\">\n                  <div class=\"resource-item-icon\">\ud83d\udcbc</div>\n                  <div class=\"resource-item-text\"><div class=\"resource-item-title\">Business Lounge</div><div class=\"resource-item-desc\">Co-working, funding, and business tools</div></div>\n                  <div class=\"resource-item-arrow\">\u2192</div>\n                </a>\n                <a href=\"#\" onclick=\"gcccNavigate('home','membership');return false;\" class=\"resource-item\" style=\"border-radius:4px;\">\n                  <div class=\"resource-item-icon\">\u2b50</div>\n                  <div class=\"resource-item-text\"><div class=\"resource-item-title\">Upgrade Membership</div><div class=\"resource-item-desc\">Unlock more benefits and VIP access</div></div>\n                  <div class=\"resource-item-arrow\">\u2192</div>\n                </a>\n              </div>\n            </div>\n\n          </div>\n        </div>\n\n        <!-- \u2500\u2500 ACTIVITY TAB \u2500\u2500 -->\n        <div class=\"dash-panel\" id=\"tab-activity\">\n          <div style=\"display:grid;grid-template-columns:2fr 1fr;gap:24px;\">\n            <div style=\"background:var(--slate);padding:28px;border-radius:4px;\">\n              <div style=\"font-size:11px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:var(--teal);margin-bottom:20px;\">Recent Activity</div>\n              <div>\n                ${activityFeed.map(a=>`\n                <div class=\"activity-item\">\n                  <div class=\"activity-dot ${a.dot}\"></div>\n                  <div>\n                    <div style=\"font-size:13px;color:var(--chalk);line-height:1.5;\">${a.icon} ${a.text}</div>\n                    <div style=\"font-size:11px;color:var(--mist);margin-top:3px;\">${a.time}</div>\n                  </div>\n                </div>`).join('')}\n              </div>\n            </div>\n            <div style=\"display:flex;flex-direction:column;gap:20px;\">\n              <div style=\"background:var(--slate);padding:24px;border-radius:4px;\">\n                <div style=\"font-size:11px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:var(--teal);margin-bottom:16px;\">Membership Activity</div>\n                ${[\n                  [\"Rooms Visited\",\"5 / 14\",\"var(--teal)\",5/14],\n                  [\"Events Attended\",\"2 / 6\",\"#A78BFA\",2/6],\n                  [\"SDGs Engaged\",\"5 / 17\",\"var(--gold)\",5/17],\n                  [\"Contributions\",\"$235 total\",\"#60a5fa\",1],\n                ].map(([l,v,c,pct])=>`\n                <div style=\"margin-bottom:14px;\">\n                  <div style=\"display:flex;justify-content:space-between;font-size:12px;margin-bottom:6px;\">\n                    <span style=\"color:var(--mist);\">${l}</span>\n                    <span style=\"color:var(--chalk);font-weight:600;\">${v}</span>\n                  </div>\n                  <div style=\"height:5px;background:rgba(255,255,255,.08);border-radius:3px;overflow:hidden;\">\n                    <div style=\"height:100%;width:${Math.round(pct*100)}%;background:${c};border-radius:3px;\"></div>\n                  </div>\n                </div>`).join('')}\n              </div>\n              <div style=\"background:var(--slate);padding:24px;border-radius:4px;\">\n                <div style=\"font-size:11px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:var(--teal);margin-bottom:14px;\">Badges Earned</div>\n                <div style=\"display:flex;flex-wrap:wrap;gap:8px;\">\n                  ${[\n                    [\"\ud83c\udf31\",\"Founding Member\"],\n                    [\"\ud83c\udfc6\",\"Early Adopter\"],\n                    [\"\ud83c\udf0d\",\"Global Citizen\"],\n                    [\"\u2615\",\"Bake Sale Supporter\"],\n                    [\"\ud83c\udf93\",\"Learner\"],\n                  ].map(([e,l])=>`<div style=\"display:flex;align-items:center;gap:6px;background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.1);border-radius:20px;padding:5px 12px;font-size:11px;font-weight:600;color:var(--chalk);\">${e} ${l}</div>`).join('')}\n                  <div style=\"display:flex;align-items:center;gap:6px;background:rgba(255,255,255,.02);border:1px dashed rgba(255,255,255,.1);border-radius:20px;padding:5px 12px;font-size:11px;color:var(--mist);\">\ud83d\udd12 More to unlock\u2026</div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n\n        <!-- \u2500\u2500 DONATIONS TAB \u2500\u2500 -->\n        <div class=\"dash-panel\" id=\"tab-donations\">\n          <div style=\"display:grid;grid-template-columns:2fr 1fr;gap:24px;\">\n            <div style=\"background:var(--slate);padding:28px;border-radius:4px;\">\n              <div style=\"display:flex;justify-content:space-between;align-items:center;margin-bottom:20px;\">\n                <div style=\"font-size:11px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:var(--teal);\">Donation History</div>\n                <a href=\"https://p2p.onecause.com/2026bakesale/rose-roman-williams\" target=\"_blank\" class=\"btn-primary\" style=\"font-size:11px;padding:7px 16px;\">+ Donate Now</a>\n              </div>\n              <div style=\"display:flex;flex-direction:column;gap:8px;\">\n                ${donations.map(d=>`\n                <div class=\"donation-row\">\n                  <div style=\"display:flex;gap:12px;align-items:center;\">\n                    <div style=\"width:4px;height:40px;background:${d.color};border-radius:2px;flex-shrink:0;\"></div>\n                    <div>\n                      <div style=\"font-size:13px;font-weight:600;color:var(--chalk);\">${d.type}</div>\n                      <div style=\"font-size:11px;color:var(--mist);\">${d.date}</div>\n                    </div>\n                  </div>\n                  <div style=\"text-align:right;\">\n                    <div style=\"font-size:15px;font-weight:700;color:var(--chalk);\">${d.amount}</div>\n                    <div style=\"font-size:11px;color:${d.status==='Active'?'var(--teal)':'var(--mist)'};\">${d.status}</div>\n                  </div>\n                </div>`).join('')}\n              </div>\n            </div>\n            <div style=\"display:flex;flex-direction:column;gap:20px;\">\n              <div style=\"background:linear-gradient(135deg,#0A2A1A 0%,#051810 100%);padding:24px;border-radius:4px;border:1px solid rgba(0,212,180,.2);\">\n                <div style=\"font-size:11px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:var(--teal);margin-bottom:16px;\">Giving Summary</div>\n                ${[[\"Total Contributed\",\"$235.00\"],[\"Active Subscriptions\",\"1\"],[\"One-Time Gifts\",\"5\"],[\"GlowBag Sponsorships\",\"1\"]].map(([l,v])=>`\n                <div style=\"display:flex;justify-content:space-between;padding:10px 0;border-bottom:1px solid rgba(255,255,255,.05);\">\n                  <span style=\"font-size:13px;color:var(--mist);\">${l}</span>\n                  <span style=\"font-size:13px;font-weight:700;color:var(--chalk);\">${v}</span>\n                </div>`).join('')}\n              </div>\n              <div style=\"background:var(--slate);padding:24px;border-radius:4px;\">\n                <div style=\"font-size:11px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:var(--teal);margin-bottom:12px;\">Support the Mission</div>\n                <p style=\"font-size:13px;color:var(--mist);line-height:1.6;margin-bottom:16px;\">Every contribution funds free programming, emergency care, and the GCCC's global mission across 193 nations.</p>\n                <div style=\"display:flex;flex-direction:column;gap:8px;\">\n                  ${[[\"$10\",\"One-time gift\"],[\"$25\",\"Monthly membership\"],[\"$50\",\"GlowBag sponsor\"],[\"$100\",\"Emergency fund\"]].map(([amt,lbl])=>`\n                  <a href=\"https://p2p.onecause.com/2026bakesale/rose-roman-williams\" target=\"_blank\" style=\"display:flex;justify-content:space-between;align-items:center;background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);border-radius:4px;padding:10px 14px;text-decoration:none;transition:background .2s;\" onmouseover=\"this.style.background='rgba(255,255,255,.09)'\" onmouseout=\"this.style.background='rgba(255,255,255,.04)'\">\n                    <span style=\"font-size:13px;font-weight:700;color:var(--teal);\">${amt}</span>\n                    <span style=\"font-size:12px;color:var(--mist);\">${lbl}</span>\n                    <span style=\"color:var(--teal);font-size:14px;\">\u2192</span>\n                  </a>`).join('')}\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n\n        <!-- \u2500\u2500 EVENTS TAB \u2500\u2500 -->\n        <div class=\"dash-panel\" id=\"tab-events\">\n          <div style=\"display:grid;grid-template-columns:2fr 1fr;gap:24px;\">\n            <div>\n              <div style=\"font-size:11px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:var(--teal);margin-bottom:20px;\">Upcoming Events</div>\n              ${events.map(e=>`\n              <div class=\"event-item\" style=\"border-left-color:${e.accent};\">\n                <div class=\"event-date-box\" style=\"background:rgba(0,0,0,.2);border:1px solid ${e.accent}30;\">\n                  <div class=\"event-date-day\" style=\"color:${e.accent};\">${e.day}</div>\n                  <div class=\"event-date-mon\">${e.mon}</div>\n                </div>\n                <div style=\"flex:1;\">\n                  <div style=\"font-size:14px;font-weight:600;color:var(--chalk);margin-bottom:4px;\">${e.title}</div>\n                  <div style=\"font-size:12px;color:var(--mist);line-height:1.5;\">${e.desc}</div>\n                </div>\n                <a href=\"${e.link}\" target=\"_blank\" style=\"font-size:12px;color:${e.accent};text-decoration:none;white-space:nowrap;align-self:center;\">Register \u2192</a>\n              </div>`).join('')}\n            </div>\n            <div style=\"display:flex;flex-direction:column;gap:20px;\">\n              <div style=\"background:var(--slate);padding:24px;border-radius:4px;\">\n                <div style=\"font-size:11px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:var(--teal);margin-bottom:16px;\">Registered Events</div>\n                <div style=\"display:flex;align-items:center;gap:10px;padding:12px;background:rgba(0,212,180,.06);border:1px solid rgba(0,212,180,.2);border-radius:4px;margin-bottom:10px;\">\n                  <span style=\"font-size:18px;\">\ud83c\udfa4</span>\n                  <div>\n                    <div style=\"font-size:13px;font-weight:600;color:var(--chalk);\">Studio Open Mic Night</div>\n                    <div style=\"font-size:11px;color:var(--mist);\">Jul 10, 2026</div>\n                  </div>\n                  <span class=\"stat-pill\" style=\"margin-left:auto;font-size:10px;\">Registered</span>\n                </div>\n                <p style=\"font-size:12px;color:var(--mist);\">You're registered for 1 upcoming event. Check back for new events each week.</p>\n              </div>\n              <div style=\"background:var(--slate);padding:24px;border-radius:4px;\">\n                <div style=\"font-size:11px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:var(--teal);margin-bottom:12px;\">Host an Event</div>\n                <p style=\"font-size:13px;color:var(--mist);line-height:1.6;margin-bottom:14px;\">GCCC members can propose community events. Upgrading to Metropolis Avengers unlocks event hosting.</p>\n                <a href=\"#\" onclick=\"gcccNavigate('home','membership');return false;\" class=\"btn-outline\" style=\"width:100%;text-align:center;display:block;font-size:12px;padding:10px;\">Upgrade to Host Events</a>\n              </div>\n            </div>\n          </div>\n        </div>\n\n        <!-- \u2500\u2500 GLOWBAG TAB \u2500\u2500 -->\n        <div class=\"dash-panel\" id=\"tab-glowbags\">\n          <div style=\"margin-bottom:28px;\">\n            <div style=\"font-size:11px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:var(--gold);margin-bottom:8px;\">GlowBag Program</div>\n            <h2 style=\"font-family:'Bebas Neue',sans-serif;font-size:clamp(28px,3vw,42px);color:var(--chalk);letter-spacing:.03em;margin-bottom:10px;\">Sponsor an Emergency Care Package</h2>\n            <p style=\"font-size:15px;color:var(--mist);max-width:680px;line-height:1.7;\">GlowBags are emergency care packages given free to people in crisis \u2014 containing donated goods, gift cards, services, and supplies tailored to the recipient. Your sponsorship funds one complete bag delivered to someone in need.</p>\n          </div>\n\n          <div style=\"display:grid;grid-template-columns:repeat(auto-fill,minmax(260px,1fr));gap:20px;margin-bottom:40px;\">\n            ${glowbags.map(g=>`\n            <div class=\"glowbag-card\" style=\"border-top-color:${g.color};\">\n              <div style=\"display:flex;align-items:center;gap:12px;margin-bottom:14px;\">\n                <div style=\"font-size:32px;\">${g.emoji}</div>\n                <div>\n                  <div style=\"font-family:'Bebas Neue',sans-serif;font-size:20px;color:var(--chalk);letter-spacing:.04em;\">${g.type}</div>\n                  <div style=\"font-size:12px;color:${g.color};font-weight:600;\">$50 sponsors one bag</div>\n                </div>\n              </div>\n              <p style=\"font-size:12px;color:var(--mist);line-height:1.6;margin-bottom:14px;\">${g.desc}</p>\n              <div style=\"margin-bottom:16px;\">\n                <div style=\"font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:var(--mist);margin-bottom:8px;\">What's Inside</div>\n                <ul style=\"list-style:none;display:flex;flex-direction:column;gap:5px;\">\n                  ${g.items.map(i=>`<li style=\"font-size:12px;color:var(--mist);display:flex;gap:8px;\"><span style=\"color:${g.color};\">\u2726</span>${i}</li>`).join('')}\n                </ul>\n              </div>\n              <a href=\"https://p2p.onecause.com/2026bakesale/rose-roman-williams\" target=\"_blank\" class=\"btn-primary\" style=\"width:100%;text-align:center;display:block;font-size:12px;padding:10px;background:${g.color};color:#fff;\">Sponsor a ${g.type} \u2192</a>\n            </div>`).join('')}\n          </div>\n\n          <div style=\"background:var(--slate);padding:28px;border-radius:4px;border-left:4px solid var(--gold);\">\n            <div style=\"font-size:11px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:var(--gold);margin-bottom:10px;\">Your GlowBag Sponsorships</div>\n            <div style=\"display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:16px;\">\n              <div>\n                <div style=\"font-size:13px;color:var(--chalk);font-weight:600;\">1 bag sponsored \u00b7 Woman's GlowBag \u00b7 May 20, 2026</div>\n                <div style=\"font-size:12px;color:var(--mist);margin-top:4px;\">Thank you for your generosity. Your sponsored bag was delivered to a woman in crisis.</div>\n              </div>\n              <div style=\"display:flex;align-items:center;gap:6px;background:rgba(255,209,102,.1);border:1px solid rgba(255,209,102,.3);border-radius:20px;padding:6px 14px;font-size:11px;font-weight:700;color:var(--gold);\">\ud83c\udf1f GlowBag Sponsor</div>\n            </div>\n          </div>\n        </div>\n\n        <!-- \u2500\u2500 VIDEO CALL TAB \u2500\u2500 -->\n        <div class=\"dash-panel\" id=\"tab-video\">\n          <div style=\"display:grid;grid-template-columns:2fr 1fr;gap:24px;\">\n            <div>\n              <div style=\"font-size:11px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:var(--teal);margin-bottom:20px;\">Community Video Calls</div>\n\n              <!-- Featured call -->\n              <div style=\"background:linear-gradient(135deg,#0D1A40 0%,#071422 100%);border:1px solid rgba(99,102,241,.3);border-radius:6px;padding:32px;margin-bottom:20px;\">\n                <div style=\"display:flex;justify-content:space-between;align-items:flex-start;flex-wrap:wrap;gap:16px;margin-bottom:20px;\">\n                  <div>\n                    <div style=\"display:inline-flex;align-items:center;gap:6px;background:rgba(239,68,68,.2);border:1px solid rgba(239,68,68,.4);border-radius:20px;padding:4px 12px;font-size:11px;font-weight:700;color:#fca5a5;margin-bottom:12px;\">\n                      \ud83d\udd34 Live Now\n                    </div>\n                    <h3 style=\"font-family:'Bebas Neue',sans-serif;font-size:28px;color:var(--chalk);letter-spacing:.04em;margin-bottom:6px;\">GCCC Community Open Hour</h3>\n                    <p style=\"font-size:13px;color:var(--mist);\">Every Tuesday & Thursday \u00b7 Drop in anytime \u00b7 No registration needed</p>\n                  </div>\n                  <a href=\"https://globalcitizencommunitycenter.univer.se/\" target=\"_blank\" class=\"vcall-btn\" style=\"background:rgba(99,102,241,.3);border-color:rgba(99,102,241,.6);font-size:14px;padding:14px 24px;\">\n                    \ud83d\udcf9 Join Call Now\n                  </a>\n                </div>\n                <div style=\"display:flex;gap:20px;flex-wrap:wrap;\">\n                  ${[[\"\ud83d\udc65\",\"14 members online\"],[\"\u23f1\ufe0f\",\"Started 32 min ago\"],[\"\ud83c\udf0d\",\"6 nations represented\"]].map(([e,t])=>`\n                  <div style=\"display:flex;align-items:center;gap:6px;font-size:12px;color:var(--mist);\">${e} ${t}</div>`).join('')}\n                </div>\n              </div>\n\n              <!-- Scheduled calls -->\n              <div style=\"background:var(--slate);padding:28px;border-radius:4px;\">\n                <div style=\"font-size:11px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:var(--teal);margin-bottom:16px;\">Scheduled Calls</div>\n                ${[\n                  {emoji:\"\ud83c\udf0d\",title:\"Global Summit Preview Call\",time:\"Jun 28 \u00b7 3:00 PM EST\",host:\"GCCC Leadership\",accent:\"var(--teal)\"},\n                  {emoji:\"\ud83d\udcbc\",title:\"Business Lounge Office Hours\",time:\"Jul 2 \u00b7 1:00 PM EST\",host:\"Business Lounge Team\",accent:\"#00D4B4\"},\n                  {emoji:\"\ud83c\udf93\",title:\"Global Scholars Q&A Session\",time:\"Jul 5 \u00b7 11:00 AM EST\",host:\"Learning Center\",accent:\"#6366f1\"},\n                  {emoji:\"\u2696\ufe0f\",title:\"Know Your Rights Workshop\",time:\"Jul 15 \u00b7 2:00 PM EST\",host:\"Freedom Cove\",accent:\"#FFD166\"},\n                  {emoji:\"\ud83c\udf10\",title:\"International Networking Mixer\",time:\"Jul 22 \u00b7 5:00 PM EST\",host:\"Global Exchange\",accent:\"#FBBF24\"},\n                ].map(c=>`\n                <div style=\"display:flex;align-items:center;justify-content:space-between;padding:14px 0;border-bottom:1px solid rgba(255,255,255,.05);flex-wrap:wrap;gap:12px;\">\n                  <div style=\"display:flex;align-items:center;gap:12px;\">\n                    <div style=\"width:40px;height:40px;border-radius:50%;background:rgba(255,255,255,.05);border:2px solid ${c.accent}40;display:flex;align-items:center;justify-content:center;font-size:18px;flex-shrink:0;\">${c.emoji}</div>\n                    <div>\n                      <div style=\"font-size:13px;font-weight:600;color:var(--chalk);\">${c.title}</div>\n                      <div style=\"font-size:11px;color:var(--mist);\">${c.time} \u00b7 Hosted by ${c.host}</div>\n                    </div>\n                  </div>\n                  <a href=\"https://globalcitizencommunitycenter.univer.se/\" target=\"_blank\" class=\"vcall-btn\" style=\"font-size:11px;padding:7px 14px;\">Register</a>\n                </div>`).join('')}\n              </div>\n            </div>\n\n            <div style=\"display:flex;flex-direction:column;gap:20px;\">\n              <div style=\"background:var(--slate);padding:24px;border-radius:4px;\">\n                <div style=\"font-size:11px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:var(--teal);margin-bottom:16px;\">Your Calls</div>\n                <div style=\"display:flex;flex-direction:column;gap:8px;\">\n                  ${[[\"2\",\"Calls attended\"],[\"1\",\"Call registered\"],[\"6\",\"Nations met\"]].map(([n,l])=>`\n                  <div style=\"display:flex;justify-content:space-between;align-items:center;padding:10px 0;border-bottom:1px solid rgba(255,255,255,.05);\">\n                    <span style=\"font-size:13px;color:var(--mist);\">${l}</span>\n                    <span style=\"font-family:'Bebas Neue',sans-serif;font-size:22px;color:var(--teal);\">${n}</span>\n                  </div>`).join('')}\n                </div>\n              </div>\n              <div style=\"background:var(--slate);padding:24px;border-radius:4px;\">\n                <div style=\"font-size:11px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:var(--teal);margin-bottom:12px;\">Host a Call</div>\n                <p style=\"font-size:13px;color:var(--mist);line-height:1.6;margin-bottom:14px;\">Metropolis Avengers members and above can host community video calls and workshops.</p>\n                <a href=\"#\" onclick=\"gcccNavigate('home','membership');return false;\" class=\"btn-outline\" style=\"width:100%;text-align:center;display:block;font-size:12px;padding:10px;\">Upgrade to Host</a>\n              </div>\n              <div style=\"background:rgba(0,212,180,.06);border:1px solid rgba(0,212,180,.2);border-radius:4px;padding:20px;\">\n                <div style=\"font-size:13px;font-weight:600;color:var(--chalk);margin-bottom:6px;\">\ud83d\udcf1 Join on Mobile</div>\n                <p style=\"font-size:12px;color:var(--mist);line-height:1.6;\">All GCCC calls are browser-based \u2014 no app download needed. Works on any device.</p>\n              </div>\n            </div>\n          </div>\n        </div>\n\n      </div>\n    </section>\n  </main>\n  ${renderFooter()}\n  <script>\n  function saveProfile(){\n    document.getElementById('profileMsg').textContent='Profile saved! \u2713';\n    setTimeout(()=>document.getElementById('profileMsg').textContent='',3000);\n  }\n  function switchTab(name) {\n    document.querySelectorAll('.dash-tab').forEach(t=>t.classList.remove('active'));\n    document.querySelectorAll('.dash-panel').forEach(p=>p.classList.remove('active'));\n    const tabs = ['overview','activity','donations','events','glowbags','video'];\n    const tabEls = document.querySelectorAll('.dash-tab');\n    tabEls[tabs.indexOf(name)].classList.add('active');\n    document.getElementById('tab-'+name).classList.add('active');\n  }\n  <\\/script>`;\n}\n\n// \u2500\u2500 INIT \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\nnavigate('dashboard');\nrenderNav();\n\n  window.navigate = navigate;\n  window.saveProfile = saveProfile;\n  window.switchTab = switchTab;\n})();", "community": "(function(){\n\nlet doomSeconds = 89;\nconst DOOM_MAX = 89;\nlet doomSaved = 0;\nconst doomGoal = 50;\n\nfunction updateDoomDisplay() {\n  const pct = Math.min(100, (doomSaved / doomGoal) * 100);\n  const arcPct = doomSeconds / DOOM_MAX;\n  const circumference = 628.3;\n  const offset = circumference - (arcPct * circumference);\n  document.getElementById('doom-display').textContent = doomSeconds;\n  document.getElementById('doom-seconds-text').textContent = doomSeconds + ' seconds';\n  document.getElementById('doom-arc').style.strokeDashoffset = offset;\n  let color = doomSeconds > 70 ? '#EF4444' : doomSeconds > 50 ? '#F97316' : doomSeconds > 30 ? '#EAB308' : '#22C55E';\n  document.getElementById('doom-arc').style.stroke = color;\n  if (document.getElementById('doom-progress')) {\n    document.getElementById('doom-progress').style.width = pct + '%';\n    document.getElementById('doom-pct-text').textContent = Math.round(pct) + '% to 2030 goal';\n  }\n  document.getElementById('mini-doom-time').textContent = doomSeconds + 's';\n  document.getElementById('mini-doom-fill').style.width = pct + '%';\n}\n\nfunction addDoomLog(action, delta) {\n  const log = document.getElementById('doom-log');\n  if (!log) return;\n  const now = new Date();\n  const time = now.toLocaleTimeString([], {hour:'2-digit', minute:'2-digit'});\n  const entry = document.createElement('div');\n  entry.className = 'doom-log-entry';\n  entry.innerHTML = `<span class=\"log-time\">${time}</span><span>you completed ${action}</span><span class=\"log-delta\">\u2212${delta}s</span>`;\n  const title = log.querySelector('.doom-log-title');\n  log.insertBefore(entry, title.nextSibling);\n  const entries = log.querySelectorAll('.doom-log-entry');\n  if (entries.length > 8) entries[entries.length-1].remove();\n}\n\nfunction doomAction(btn, action, delta, icon) {\n  btn.style.opacity = '0.5';\n  btn.style.pointerEvents = 'none';\n  btn.innerHTML = `<span class=\"sab-icon\">\u2705</span>${action}<div class=\"sab-reward\" style=\"color:var(--accent)\">Done!</div>`;\n  doomSeconds = Math.max(0, doomSeconds - delta);\n  doomSaved += delta;\n  updateDoomDisplay();\n  addDoomLog(action, delta);\n  showToast(`${icon} ${action} complete! Clock pushed back ${delta}s \u23f0`);\n  tamaHealth = Math.min(100, tamaHealth + 3);\n  tamaHappy = Math.min(100, tamaHappy + 3);\n  updateTamaDisplay();\n}\n\n// ===== TAMAGOTCHI / PLANET EARTH =====\nlet tamaHealth = 70, tamaHappy = 60, tamaImpact = 20, tamaTasksDone = 0;\nconst tamaTotalTasks = 8;\n\nconst tamaStages = [\n  { min:0,  max:29,  creature:'\ud83c\udf11', name:'BARREN WORLD',   mood:'\"...waiting for life to begin\"' },\n  { min:30, max:49,  creature:'\ud83c\udf0d', name:'PLANET EARTH',   mood:'\"Curious and hopeful...\"' },\n  { min:50, max:69,  creature:'\ud83c\udf0d', name:'LIVING EARTH',   mood:'\"Life is stirring!\"' },\n  { min:70, max:84,  creature:'\ud83c\udf0d', name:'THRIVING EARTH', mood:'\"Making a real difference!\"' },\n  { min:85, max:94,  creature:'\ud83c\udf1f', name:'RADIANT WORLD',  mood:'\"Fighting for all people!\"' },\n  { min:95, max:100, creature:'\u2728', name:'HEALED PLANET',  mood:'\"We changed the world! \ud83c\udf0d\"' },\n];\n\nfunction getTamaStage(impact) {\n  return tamaStages.find(s => impact >= s.min && impact <= s.max) || tamaStages[0];\n}\n\nfunction updateTamaDisplay() {\n  const stage = getTamaStage(tamaImpact);\n  document.getElementById('tama-creature').textContent = stage.creature;\n  document.getElementById('tama-name').textContent = stage.name;\n  document.getElementById('tama-mood').textContent = stage.mood;\n  document.getElementById('tama-health-bar').style.width = tamaHealth + '%';\n  document.getElementById('tama-health-val').textContent = tamaHealth + '/100';\n  document.getElementById('tama-health-bar').style.background = tamaHealth > 50 ? '#6EE7B7' : tamaHealth > 25 ? '#FB923C' : '#EF4444';\n  document.getElementById('tama-happy-bar').style.width = tamaHappy + '%';\n  document.getElementById('tama-happy-val').textContent = tamaHappy + '/100';\n  document.getElementById('tama-impact-bar').style.width = tamaImpact + '%';\n  document.getElementById('tama-impact-val').textContent = Math.round(tamaImpact) + '/100';\n  document.getElementById('tama-evo-bar').style.width = tamaImpact + '%';\n  document.getElementById('tama-evo-val').textContent = stage.name;\n  document.getElementById('tama-tasks-count').textContent = tamaTasksDone + '/' + tamaTotalTasks + ' done';\n  document.getElementById('mini-tama-creature').textContent = stage.creature;\n  document.getElementById('mini-tama-name').textContent = stage.name;\n  document.getElementById('mini-tama-hp-fill').style.width = tamaHealth + '%';\n  document.getElementById('mini-tama-status').textContent = tamaHealth > 60 ? 'Thriving! Keep going \ud83c\udf1f' : tamaHealth > 30 ? 'Needs attention!' : '\u26a0\ufe0f Critical \u2014 do an SDG task!';\n  if (tamaHealth < 30) {\n    document.getElementById('tama-creature').style.filter = 'grayscale(0.7) brightness(0.7)';\n    document.getElementById('tama-alert').style.display = 'block';\n    document.getElementById('tama-alert').textContent = '\u26a0\ufe0f';\n  } else {\n    document.getElementById('tama-creature').style.filter = 'none';\n    document.getElementById('tama-alert').style.display = 'none';\n  }\n}\n\nfunction completeTask(el, healthGain, happyGain, impactGain, alertEmoji, clockSave) {\n  el.classList.add('done');\n  tamaHealth = Math.min(100, tamaHealth + healthGain);\n  tamaHappy = Math.min(100, tamaHappy + happyGain);\n  tamaImpact = Math.min(100, tamaImpact + impactGain * 0.5);\n  tamaTasksDone++;\n  updateTamaDisplay();\n  doomSeconds = Math.max(0, doomSeconds - clockSave);\n  doomSaved += clockSave;\n  updateDoomDisplay();\n  const alert = document.getElementById('tama-alert');\n  alert.textContent = alertEmoji;\n  alert.style.display = 'block';\n  setTimeout(() => { if (tamaHealth >= 30) alert.style.display = 'none'; }, 2000);\n  const name = el.querySelector('.tama-task-name').textContent;\n  showToast(`\u2705 ${name} complete! Your planet grows stronger \ud83c\udf0d`);\n}\n\nsetInterval(() => {\n  tamaHealth = Math.max(0, tamaHealth - 1);\n  if (tamaHealth < 20 && Math.random() < 0.3) {\n    doomSeconds = Math.min(DOOM_MAX, doomSeconds + 1);\n    updateDoomDisplay();\n  }\n  updateTamaDisplay();\n}, 30000);\n\n// ===== SDG BROADCAST CHANNELS =====\nconst sdgChannels = [\n  { n:1,  icon:'\ud83c\udfe0', name:'No Poverty',          color:'#E5243B', bg:'rgba(229,36,59,0.1)',   viewers:3240,  goal:'End poverty in all its forms everywhere' },\n  { n:2,  icon:'\ud83c\udf3e', name:'Zero Hunger',           color:'#DDA63A', bg:'rgba(221,166,58,0.1)', viewers:4120,  goal:'End hunger and achieve food security' },\n  { n:3,  icon:'\u2764\ufe0f', name:'Good Health',            color:'#4C9F38', bg:'rgba(76,159,56,0.1)',  viewers:5830,  goal:'Ensure healthy lives for all ages' },\n  { n:4,  icon:'\ud83d\udcda', name:'Quality Education',      color:'#C5192D', bg:'rgba(197,25,45,0.1)',  viewers:4450,  goal:'Ensure inclusive and equitable education' },\n  { n:5,  icon:'\u2696\ufe0f', name:'Gender Equality',        color:'#FF3A21', bg:'rgba(255,58,33,0.1)',  viewers:3900,  goal:'Achieve gender equality and empower women' },\n  { n:6,  icon:'\ud83d\udca7', name:'Clean Water',            color:'#26BDE2', bg:'rgba(38,189,226,0.1)', viewers:2870,  goal:'Ensure water and sanitation for all' },\n  { n:7,  icon:'\u26a1', name:'Clean Energy',           color:'#FCC30B', bg:'rgba(252,195,11,0.1)', viewers:3610,  goal:'Ensure affordable and clean energy' },\n  { n:8,  icon:'\ud83d\udcbc', name:'Decent Work',            color:'#A21942', bg:'rgba(162,25,66,0.1)',  viewers:2980,  goal:'Promote sustained, inclusive economic growth' },\n  { n:9,  icon:'\ud83c\udfd7\ufe0f', name:'Industry & Innovation',  color:'#FD6925', bg:'rgba(253,105,37,0.1)', viewers:2140,  goal:'Build resilient infrastructure and innovation' },\n  { n:10, icon:'\ud83e\udd1d', name:'Reduced Inequalities',   color:'#DD1367', bg:'rgba(221,19,103,0.1)', viewers:3200,  goal:'Reduce inequality within and among countries' },\n  { n:11, icon:'\ud83c\udfd9\ufe0f', name:'Sustainable Cities',     color:'#FD9D24', bg:'rgba(253,157,36,0.1)', viewers:4660,  goal:'Make cities inclusive, safe and sustainable' },\n  { n:12, icon:'\u267b\ufe0f', name:'Responsible Consumption', color:'#BF8B2E', bg:'rgba(191,139,46,0.1)', viewers:3100, goal:'Ensure sustainable consumption and production' },\n  { n:13, icon:'\ud83c\udf3f', name:'Climate Action',          color:'#3F7E44', bg:'rgba(63,126,68,0.1)',  viewers:12400, goal:'Take urgent action to combat climate change' },\n  { n:14, icon:'\ud83c\udf0a', name:'Life Below Water',        color:'#0A97D9', bg:'rgba(10,151,217,0.1)', viewers:2800,  goal:'Conserve and use oceans sustainably' },\n  { n:15, icon:'\ud83e\udd8b', name:'Life on Land',            color:'#56C02B', bg:'rgba(86,192,43,0.1)',  viewers:3340,  goal:'Protect, restore and promote terrestrial ecosystems' },\n  { n:16, icon:'\u262e\ufe0f', name:'Peace & Justice',         color:'#00689D', bg:'rgba(0,104,157,0.1)',  viewers:2600,  goal:'Promote peaceful and inclusive societies' },\n  { n:17, icon:'\ud83c\udf10', name:'Partnerships',            color:'#19486A', bg:'rgba(25,72,106,0.1)',  viewers:5060,  goal:'Strengthen means of implementation' },\n];\n\nfunction renderSDGChannels() {\n  const grid = document.getElementById('sdg-channels-grid');\n  if (!grid) return;\n  grid.innerHTML = '';\n  sdgChannels.forEach(ch => {\n    const el = document.createElement('div');\n    el.className = 'sdg-channel-card';\n    el.style.background = ch.bg;\n    el.style.borderColor = ch.color + '44';\n    el.innerHTML = `<div class=\"sdg-ch-num\" style=\"color:${ch.color}\">SDG ${ch.n}</div><span class=\"sdg-ch-icon\">${ch.icon}</span><div class=\"sdg-ch-name\">${ch.name}</div><div class=\"sdg-ch-viewers\"><span class=\"live-dot\" style=\"background:${ch.color}\"></span>${ch.viewers.toLocaleString()} watching</div>`;\n    el.addEventListener('click', () => openStream(ch));\n    grid.appendChild(el);\n  });\n}\n\nlet currentStream = null;\nconst genericStreamMsgs = ['This is incredible to watch live','Taking action right now because of this stream! \ud83d\udcaa','The team behind this SDG is doing amazing work','Just shared this channel with my whole network \ud83c\udf0d','How can I get involved?','This is why GlobalHive exists \u2764\ufe0f'];\nconst msgColors = ['#6EE7B7','#818CF8','#FB923C','#F472B6','#FCD34D','#34D399'];\nconst msgAuthors = ['Sakura_A','ravi_k','mia_l','dev_xander','nina_p','tom\u00e1s_j','aiko_i','carlos_m'];\nlet streamChatInterval = null;\n\nfunction openStream(ch) {\n  currentStream = ch;\n  document.getElementById('stream-grid').classList.add('open');\n  document.getElementById('stream-viewer').classList.add('open');\n  document.getElementById('stream-video-bg').style.background = ch.bg.replace('0.1','0.3');\n  document.getElementById('stream-video-icon').textContent = ch.icon;\n  document.getElementById('stream-video-title').textContent = 'SDG ' + ch.n + ': ' + ch.name;\n  document.getElementById('stream-video-sub').textContent = ch.goal;\n  document.getElementById('stream-viewer-count').textContent = ch.viewers.toLocaleString() + ' watching';\n  document.getElementById('stream-ch-name').textContent = 'SDG ' + ch.n + ' \u00b7 ' + ch.name;\n  document.getElementById('stream-ch-goal').textContent = ch.goal;\n  const chatEl = document.getElementById('stream-chat');\n  chatEl.innerHTML = '';\n  genericStreamMsgs.slice(0,3).forEach((text, i) => {\n    const color = msgColors[i % msgColors.length];\n    const el = document.createElement('div');\n    el.className = 'stream-msg';\n    el.innerHTML = `<span class=\"sm-author\" style=\"color:${color}\">${msgAuthors[i]}</span>${text}`;\n    chatEl.appendChild(el);\n  });\n  if (streamChatInterval) clearInterval(streamChatInterval);\n  streamChatInterval = setInterval(() => {\n    if (!currentStream) return;\n    const author = msgAuthors[Math.floor(Math.random() * msgAuthors.length)];\n    const text = genericStreamMsgs[Math.floor(Math.random() * genericStreamMsgs.length)];\n    const color = msgColors[Math.floor(Math.random() * msgColors.length)];\n    const el = document.createElement('div');\n    el.className = 'stream-msg';\n    el.innerHTML = `<span class=\"sm-author\" style=\"color:${color}\">${author}</span>${text}`;\n    chatEl.appendChild(el);\n    chatEl.scrollTop = chatEl.scrollHeight;\n    while (chatEl.children.length > 30) chatEl.removeChild(chatEl.firstChild);\n  }, 3500 + Math.random() * 2000);\n}\n\nfunction closeStream() {\n  currentStream = null;\n  document.getElementById('stream-grid').classList.remove('open');\n  document.getElementById('stream-viewer').classList.remove('open');\n  if (streamChatInterval) { clearInterval(streamChatInterval); streamChatInterval = null; }\n}\n\nfunction sendStreamMsg() {\n  const input = document.getElementById('stream-input');\n  const text = input.value.trim();\n  if (!text) return;\n  const chatEl = document.getElementById('stream-chat');\n  const el = document.createElement('div');\n  el.className = 'stream-msg';\n  el.innerHTML = `<span class=\"sm-author\" style=\"color:var(--accent)\">you</span>${text}`;\n  chatEl.appendChild(el);\n  chatEl.scrollTop = chatEl.scrollHeight;\n  input.value = '';\n}\n\nsetInterval(() => {\n  sdgChannels.forEach(ch => { ch.viewers = Math.max(500, ch.viewers + Math.round((Math.random() - 0.48) * 50)); });\n  const total = sdgChannels.reduce((a,b) => a + b.viewers, 0);\n  const el = document.getElementById('total-viewers');\n  if (el) el.textContent = total.toLocaleString();\n  if (currentStream) {\n    const vEl = document.getElementById('stream-viewer-count');\n    if (vEl) vEl.textContent = currentStream.viewers.toLocaleString() + ' watching';\n  }\n}, 4000);\n\n// ===== NAVIGATION =====\nfunction setTab(el, panelId) {\n  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));\n  el.classList.add('active');\n  document.querySelectorAll('.panel').forEach(p => p.classList.remove('active'));\n  const panel = document.getElementById(panelId);\n  if (panel) panel.classList.add('active');\n  if (panelId === 'broadcast-panel') renderSDGChannels();\n}\n\nfunction setTabByName(panelId) {\n  const panels = ['chat-panel','doom-panel','tama-panel','rooms-panel','broadcast-panel'];\n  const tabs = document.querySelectorAll('.tab');\n  const idx = panels.indexOf(panelId);\n  if (idx >= 0 && tabs[idx]) {\n    tabs.forEach(t => t.classList.remove('active'));\n    tabs[idx].classList.add('active');\n    document.querySelectorAll('.panel').forEach(p => p.classList.remove('active'));\n    document.getElementById(panelId).classList.add('active');\n    if (panelId === 'broadcast-panel') renderSDGChannels();\n  }\n}\n\nfunction switchToDoom() { document.getElementById('chat-channel-name').textContent = 'doomsday-clock'; document.getElementById('chat-channel-desc').textContent = 'Race against time \u2014 turn back the clock with SDG actions'; }\nfunction switchToTama() { document.getElementById('chat-channel-name').textContent = 'sdg-tamagotchi'; document.getElementById('chat-channel-desc').textContent = 'Raise your SDG planet \u2014 complete goals to keep Earth thriving!'; }\nfunction switchToRooms() { document.getElementById('chat-channel-name').textContent = 'community-rooms'; document.getElementById('chat-channel-desc').textContent = 'Lobby \u00b7 Gallery \u00b7 Auditorium \u00b7 Gym \u00b7 Workshop \u00b7 Caf\u00e9 \u00b7 Market'; }\nfunction switchToBroadcast() { document.getElementById('chat-channel-name').textContent = 'live-broadcasts'; document.getElementById('chat-channel-desc').textContent = '17 live SDG action channels \u2014 tune in & take action'; renderSDGChannels(); }\n\nfunction switchChannel(el, name, desc, view) {\n  if (el) { document.querySelectorAll('.channel-item').forEach(i => i.classList.remove('active')); el.classList.add('active'); }\n  document.getElementById('chat-channel-name').textContent = name;\n  document.getElementById('chat-channel-desc').textContent = desc;\n  const panelMap = { chat:'chat-panel', doom:'doom-panel', tama:'tama-panel', rooms:'rooms-panel', broadcast:'broadcast-panel' };\n  setTabByName(panelMap[view] || 'chat-panel');\n  if (view !== 'chat') showToast(`\ud83d\udce1 Switched to ${name}`);\n}\n\n// ===== CHAT =====\nconst colors = ['linear-gradient(135deg,#6EE7B7,#3B82F6)','linear-gradient(135deg,#818CF8,#EC4899)','linear-gradient(135deg,#FB923C,#F472B6)','linear-gradient(135deg,#34D399,#059669)','linear-gradient(135deg,#F59E0B,#EF4444)','linear-gradient(135deg,#6366F1,#8B5CF6)'];\nconst botReplies = [\"Great point! Anyone else want to weigh in?\",\"That's what I love about this community \u2014 always something interesting happening \ud83c\udf1f\",\"Don't forget to check the doomsday clock \u2014 our SDG actions this week pushed it back 3 seconds! \ud83d\udcaa\",\"Has anyone visited the Workshop lately? SDG Hackathon prep is in full swing \ud83d\udd27\",\"The Goal 13 Climate Action broadcast is \ud83d\udd25 right now \u2014 12k viewers!\",\"Every action counts. Even small ones. Keep going everyone \ud83c\udf0d\",\"Stop by the Caf\u00e9 for a chill chat anytime \u2615\",\"We're at 89 seconds to midnight. Let's work together to change that!\"];\nconst botNames = ['Sakura_A','ravi_k','mia_l','dev_xander','nina_p'];\nconst botColors = [colors[0],colors[1],colors[2],colors[3],colors[4]];\nconst botInitials = ['SA','RK','ML','DX','NP'];\nconst botRoles = { 'Sakura_A':`<span class=\"msg-role\" style=\"background:rgba(110,231,183,0.15);color:var(--accent)\">MOD</span>`, 'dev_xander':`<span class=\"msg-role\" style=\"background:rgba(129,140,248,0.15);color:var(--accent2)\">DEV</span>` };\n\nfunction sendMessage() {\n  const input = document.getElementById('chat-input');\n  const text = input.value.trim();\n  if (!text) return;\n  appendMessage('you','YO',colors[5],'',text,true);\n  input.value = '';\n  closeEmoji();\n  const typingEl = document.getElementById('typing-indicator');\n  const bot = botNames[Math.floor(Math.random() * botNames.length)];\n  typingEl.innerHTML = `<div class=\"typing-dots\"><span></span><span></span><span></span></div> <em>${bot} is typing...</em>`;\n  setTimeout(() => {\n    typingEl.innerHTML = '';\n    const reply = botReplies[Math.floor(Math.random() * botReplies.length)];\n    const i = botNames.indexOf(bot);\n    appendMessage(bot, botInitials[i], botColors[i], botRoles[bot]||'', reply, false);\n  }, 1500 + Math.random() * 1000);\n}\n\nfunction appendMessage(author, initials, color, roleHtml, text, isYou) {\n  const msgs = document.getElementById('messages');\n  const time = new Date().toLocaleTimeString([],{hour:'2-digit',minute:'2-digit'});\n  const div = document.createElement('div');\n  div.className = 'msg-group';\n  div.innerHTML = `<div class=\"msg-avatar\" style=\"background:${color}\">${initials}</div><div class=\"msg-body\"><div class=\"msg-meta\"><span class=\"msg-author\">${isYou ? 'you' : author}</span>${roleHtml}<span class=\"msg-time\">${time}</span></div><div class=\"msg-content\">${text}</div><div class=\"msg-reactions\"></div></div>`;\n  msgs.appendChild(div);\n  msgs.scrollTop = msgs.scrollHeight;\n}\n\nfunction handleInput(e) { if (e.key === 'Enter') sendMessage(); }\n\nfunction toggleReaction(el) {\n  el.classList.toggle('mine');\n  const span = el.querySelector('span');\n  let n = parseInt(span.textContent);\n  span.textContent = el.classList.contains('mine') ? n+1 : n-1;\n}\n\nfunction joinVoice(el, name) { document.getElementById('voice-name').textContent = name; document.getElementById('voice-status').style.display = 'block'; showToast(`\ud83c\udfa4 Connected to ${name} voice channel`); }\nfunction leaveVoice() { document.getElementById('voice-status').style.display = 'none'; showToast('\ud83d\udd07 Left voice channel'); }\nfunction toggleEmoji() { document.getElementById('emoji-picker').classList.toggle('open'); }\nfunction closeEmoji() { document.getElementById('emoji-picker').classList.remove('open'); }\nfunction insertEmoji(e) { const input = document.getElementById('chat-input'); input.value += e; input.focus(); closeEmoji(); }\n\nlet toastTimer;\nfunction showToast(msg) {\n  const t = document.getElementById('toast');\n  t.textContent = msg;\n  t.classList.add('show');\n  clearTimeout(toastTimer);\n  toastTimer = setTimeout(() => t.classList.remove('show'), 2800);\n}\n\nfunction vote(el) { document.querySelectorAll('.poll-bar').forEach(b => b.style.outline = 'none'); el.style.outline = '2px solid var(--accent)'; showToast('\ud83d\udcca Vote recorded! Thanks for participating.'); }\n\ndocument.addEventListener('click', e => { if (!e.target.closest('.inp-btn') && !e.target.closest('.emoji-picker')) closeEmoji(); });\n\nupdateDoomDisplay();\nupdateTamaDisplay();\nrenderSDGChannels();\n\n\n// --- GCCC Membership Gate ---\nconst CC_DEMO_CREDS = { username: 'community@gccc.org', password: 'GlobalCitizen2026' };\n\nfunction gcccEnterCommunity() {\n  const name = document.getElementById('gate-name').value.trim();\n  const email = document.getElementById('gate-email').value.trim();\n  const password = document.getElementById('gate-password').value;\n  const err = document.getElementById('gate-error');\n  const emailOk = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(email);\n\n  // Demo credential login path\n  if (email === CC_DEMO_CREDS.username && password === CC_DEMO_CREDS.password) {\n    err.textContent = '';\n    localStorage.setItem('gccc_member', JSON.stringify({ name: name || 'Community Member', email, joined: Date.now() }));\n    document.getElementById('gccc-gate').style.display = 'none';\n    document.getElementById('gccc-app').hidden = false;\n    return;\n  }\n\n  if (!name || !emailOk) {\n    err.textContent = 'Enter your name and a valid email to join free, or use the demo credentials below.';\n    return;\n  }\n  if (!password) {\n    err.textContent = 'Enter a password, or use the demo credentials below.';\n    return;\n  }\n  err.textContent = '';\n  localStorage.setItem('gccc_member', JSON.stringify({ name, email, joined: Date.now() }));\n  document.getElementById('gccc-gate').style.display = 'none';\n  document.getElementById('gccc-app').hidden = false;\n}\n\n(function gcccCheckMembership() {\n  const existing = localStorage.getItem('gccc_member');\n  if (existing) {\n    try {\n      const m = JSON.parse(existing);\n      document.getElementById('gate-sub-text').textContent = `Welcome back, ${m.name}. Re-enter to continue.`;\n      document.getElementById('gate-name').value = m.name;\n      document.getElementById('gate-email').value = m.email;\n    } catch (e) {}\n  }\n})();\n\n  window.closeStream = closeStream;\n  window.completeTask = completeTask;\n  window.doomAction = doomAction;\n  window.gcccEnterCommunity = gcccEnterCommunity;\n  window.handleInput = handleInput;\n  window.insertEmoji = insertEmoji;\n  window.joinVoice = joinVoice;\n  window.leaveVoice = leaveVoice;\n  window.sendMessage = sendMessage;\n  window.sendStreamMsg = sendStreamMsg;\n  window.setTab = setTab;\n  window.setTabByName = setTabByName;\n  window.showToast = showToast;\n  window.switchChannel = switchChannel;\n  window.switchToBroadcast = switchToBroadcast;\n  window.switchToDoom = switchToDoom;\n  window.switchToRooms = switchToRooms;\n  window.switchToTama = switchToTama;\n  window.toggleEmoji = toggleEmoji;\n  window.toggleReaction = toggleReaction;\n  window.vote = vote;\n})();", "fundraiser": "(function(){\n\nfunction handleSubmit(e){\n  e.preventDefault();\n  const btn = e.target.querySelector('.submit-btn');\n  btn.textContent = '\u2705 Submitted! We\\'ll be in touch within 48 hours.';\n  btn.style.background = '#16a34a';\n  btn.disabled = true;\n}\n\n  window.handleSubmit = handleSubmit;\n})();", "boLogin": "(function(){\n\nconst BO_DEMO_CREDS = { username: 'admin@gccc.org', password: 'GCCCAdmin2026!' };\n\nfunction gcccStaffLogin() {\n  const id = document.getElementById('staff-gate-id').value.trim();\n  const pw = document.getElementById('staff-gate-pw').value.trim();\n  const err = document.getElementById('staff-gate-error');\n  if (!id || !pw) {\n    err.textContent = 'Enter your staff/volunteer ID and access code.';\n    return;\n  }\n  if (id !== BO_DEMO_CREDS.username || pw !== BO_DEMO_CREDS.password) {\n    err.textContent = 'Incorrect credentials. Use the demo credentials shown below.';\n    return;\n  }\n  err.textContent = '';\n  sessionStorage.setItem('gccc_staff', JSON.stringify({ id, signedIn: Date.now() }));\n  gcccNavigate('boDash');\n}\n\n(function gcccCheckStaffSession() {\n  if (sessionStorage.getItem('gccc_staff')) {\n    gcccNavigate('boDash');\n  }\n})();\n\n  window.gcccStaffLogin = gcccStaffLogin;\n})();", "boDash": "(function(){\n\nconst pages = { dashboard:'Dashboard', schedule:'Schedule', staff:'Staff & Employers', rooms:'Rooms', training:'Training Hub', lounge:'Staff Lounge', announcements:'Announcements' };\n\nfunction showPage(id, el) {\n  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));\n  document.getElementById('page-' + id).classList.add('active');\n  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));\n  if (el) el.classList.add('active');\n  document.getElementById('page-title').textContent = pages[id] || id;\n  if (id === 'rooms') {\n    document.getElementById('room-detail-employment').style.display = 'none';\n    document.querySelector('.room-grid').style.display = 'grid';\n  }\n}\n\nfunction showRoomDetail(room) {\n  document.querySelector('.room-grid').style.display = 'none';\n  document.getElementById('room-detail-' + room).style.display = 'block';\n}\n\nfunction switchTab(name) {\n  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));\n  document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));\n  document.getElementById('tab-' + name).classList.add('active');\n  event.target.classList.add('active');\n}\n\nfunction postLounge() {\n  const input = document.getElementById('lounge-msg-input');\n  const msg = input.value.trim();\n  if (!msg) return;\n  const feed = document.getElementById('lounge-feed');\n  const post = document.createElement('div');\n  post.className = 'lounge-post';\n  post.innerHTML = `<div class=\"poster-av\" style=\"background:var(--teal-200);color:var(--teal-800);\">AD</div><div><div class=\"lounge-who\">You <span class=\"lounge-time\">\u00b7 just now</span></div><div class=\"lounge-msg\">${msg.replace(/</g,'&lt;')}</div></div>`;\n  feed.appendChild(post);\n  input.value = '';\n  post.scrollIntoView({ behavior: 'smooth' });\n}\n\nfunction handleLoungePost(e) { if (e.key === 'Enter') postLounge(); }\n\nconst now = new Date();\ndocument.getElementById('topbar-date').textContent = now.toLocaleDateString('en-US', { weekday:'long', month:'long', day:'numeric', year:'numeric' });\n\n// --- Session guard: redirect to login if no active staff session ---\n(function gcccGuardDashboard() {\n  const session = sessionStorage.getItem('gccc_staff');\n  if (!session) {\n    gcccNavigate('boLogin');\n    return;\n  }\n  // Show staff ID initials in sidebar\n  try {\n    const { id } = JSON.parse(session);\n    const initials = id.split(/[\\s@.]+/).map(w => w[0]?.toUpperCase()).filter(Boolean).slice(0,2).join('');\n    if (initials) {\n      document.getElementById('staff-avatar-initials').textContent = initials;\n      document.getElementById('staff-display-name').textContent = id.split('@')[0];\n    }\n  } catch(e) {}\n})();\n\nfunction gcccSignOut() {\n  sessionStorage.removeItem('gccc_staff');\n  gcccNavigate('boLogin');\n}\n\n  window.gcccSignOut = gcccSignOut;\n  window.handleLoungePost = handleLoungePost;\n  window.postLounge = postLounge;\n  window.showPage = showPage;\n  window.showRoomDetail = showRoomDetail;\n  window.switchTab = switchTab;\n})();"};

var gcccLoadedOnce = {};

function gcccRunPageScript(key) {
  var prev = document.getElementById('gccc-script-' + key);
  if (prev) prev.remove();
  var s = document.createElement('script');
  s.id = 'gccc-script-' + key;
  s.textContent = GCCC_SCRIPTS[key] || '';
  document.body.appendChild(s);
  gcccLoadedOnce[key] = true;
}

function gcccNavigate(key, anchor) {
  document.querySelectorAll('.gccc-panel').forEach(function(p){
    p.classList.toggle('active', p.id === 'page-' + key);
  });
  document.querySelectorAll('#gccc-master-nav button').forEach(function(b){
    b.classList.toggle('active', b.getAttribute('data-page') === key);
  });
  gcccRunPageScript(key);
  window.scrollTo(0, 0);
  if (anchor) {
    setTimeout(function(){
      var el = document.getElementById(anchor);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 60);
  }
}

document.querySelectorAll('#gccc-master-nav button').forEach(function(b){
  b.addEventListener('click', function(){ gcccNavigate(b.getAttribute('data-page')); });
});

// boot to home page
gcccNavigate('home');
</script>

</body>
</html>
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
