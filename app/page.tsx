"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowDown, ArrowUpRight, Menu, X } from "lucide-react";

const gallery = [
{src:"/images/champagne-runway.jpg",title:"Golden Hour",category:"Runway",size:"wide"},
{src:"/images/burgundy-studio.jpg",title:"The Portrait",category:"Editorial",size:"normal"},
{src:"/images/blue-caftan.jpg",title:"Heritage",category:"Runway",size:"normal"},
{src:"/images/red-beauty.jpg",title:"Red Muse",category:"Beauty",size:"wide"},
{src:"/images/green-runway.jpg",title:"Emerald",category:"Runway",size:"normal"},
{src:"/images/white-studio.jpg",title:"Natural Light",category:"Commercial",size:"normal"},
{src:"/images/casual-look.jpg",title:"Off Duty",category:"Lifestyle",size:"normal"},
{src:"/images/beige-look.jpg",title:"City Lights",category:"Lifestyle",size:"normal"},
{src:"/images/garden-editorial.jpg",title:"Garden Romance",category:"Lifestyle",size:"wide"},
{src:"/images/black-gold-caftan.jpg",title:"Caftan Heritage",category:"Editorial",size:"normal"},
{src:"/images/floral-caftan.jpg",title:"Floral Elegance",category:"Editorial",size:"normal"},
{src:"/images/hooded-caftan.jpg",title:"The Hooded Look",category:"Editorial",size:"normal"},
{src:"/images/fez-portrait.jpg",title:"Royal Portrait",category:"Beauty",size:"normal"},
{src:"/images/ivory-caftan.jpg",title:"Ivory Tradition",category:"Editorial",size:"wide"},
{src:"/images/designer-backstage.jpg",title:"Designer Atelier",category:"Editorial",size:"normal"},
{src:"/images/street-casual.jpg",title:"Street Spirit",category:"Lifestyle",size:"wide"},
{src:"/images/yellow-caftan.jpg",title:"Sunlit Heritage",category:"Editorial",size:"normal"},
{src:"/images/black-veil.jpg",title:"Midnight Lace",category:"Editorial",size:"normal"},
{src:"/images/red-carpet.jpg",title:"The Red Carpet",category:"Runway",size:"wide"},
{src:"/images/desert-adventure.jpg",title:"Desert Escape",category:"Lifestyle",size:"normal"},
{src:"/images/night-editorial.jpg",title:"After Dark",category:"Editorial",size:"wide"},
{src:"/images/ivory-portrait.jpg",title:"Golden Details",category:"Beauty",size:"normal"},
{src:"/images/fez-editorial.jpg",title:"The Artisan Edit",category:"Editorial",size:"normal"},
{src:"/images/blue-runway.jpg",title:"Blue Runway",category:"Runway",size:"wide"},
];
const stats=[["Height","170 cm"],["Clothing","EU 36"],["Bust","80 cm"],["Waist","To be added"],["Hips","To be confirmed"],["Shoes","To be added"],["Hair","To be confirmed"],["Eyes","To be confirmed"]];
function Photo({src,alt,className=""}:{src:string;alt:string;className?:string}){const [failed,setFailed]=useState(false);return <div className={`photo ${className}`}>{!failed?<img src={src} alt={alt} loading="lazy" onError={()=>setFailed(true)}/>:<div className="photo-fallback"><span>N.</span><small>PHOTO COMING SOON</small></div>}</div>}
export default function Home(){const [menu,setMenu]=useState(false);const [filter,setFilter]=useState("All");const hero=useRef<HTMLElement>(null);const {scrollYProgress}=useScroll({target:hero,offset:["start start","end start"]});const y=useTransform(scrollYProgress,[0,1],["0%","24%"]);const items=gallery.filter(g=>filter==="All"||g.category===filter);return <main>
<header className="nav"><a href="#" className="brand">NADINE<span>®</span></a><nav className={menu?"open":""}><a href="#work" onClick={()=>setMenu(false)}>Portfolio</a><a href="#about" onClick={()=>setMenu(false)}>About</a><a href="#stats" onClick={()=>setMenu(false)}>Model stats</a><a href="#contact" onClick={()=>setMenu(false)}>Bookings <ArrowUpRight size={15}/></a></nav><button className="menu" onClick={()=>setMenu(!menu)} aria-label="Toggle navigation">{menu?<X/>:<Menu/>}</button></header>
<section className="hero" ref={hero}><motion.div className="hero-photo" style={{y}}><Photo src="/images/hero.jpg" alt="Nadine fashion runway portrait"/></motion.div><div className="hero-shade"/><div className="hero-top"><span>INDEPENDENT MODEL PORTFOLIO</span><span>DUBAI · UAE</span></div><div className="hero-content"><motion.p initial={{opacity:0,y:25}} animate={{opacity:1,y:0}} transition={{duration:.8}}>THE ART OF PRESENCE</motion.p><motion.h1 initial={{opacity:0,y:70}} animate={{opacity:1,y:0}} transition={{duration:1,delay:.15}}>NAD<span>I</span>NE<span className="dot">.</span></motion.h1><div className="hero-bottom"><span>RUNWAY / EDITORIAL / BEAUTY</span><a href="#work" aria-label="Explore portfolio"><ArrowDown size={24}/></a><span>SCROLL TO EXPLORE</span></div></div></section>
<section className="intro" id="about"><div className="eyebrow"><span className="line"/> 01 / INTRODUCTION</div><div><h2>Not just a face.<br/><em>A presence.</em></h2><p>Nadine (Nadia Addya) is a fashion model with experience in runway presentations and studio photography. Her portfolio moves between statement fashion, beauty, and contemporary lifestyle imagery.</p><a href="#contact" className="text-link">LET’S COLLABORATE <ArrowUpRight size={18}/></a></div></section>
<section className="work" id="work"><div className="section-heading"><div><span className="eyebrow">02 / SELECTED WORK</span><h2>THE PORTFOLIO<span className="accent">.</span></h2></div><span className="index">2026 — SELECTED IMAGES</span></div><div className="filters">{["All","Runway","Editorial","Beauty","Commercial","Lifestyle"].map(f=><button key={f} className={filter===f?"active":""} onClick={()=>setFilter(f)}>{f}</button>)}</div><div className="gallery">{items.map((g,i)=><motion.article key={g.src} className={g.size==="wide"?"gallery-item wide":"gallery-item"} initial={{opacity:0,y:65}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.15}} transition={{duration:.65,delay:(i%3)*.08}}><Photo src={g.src} alt={g.title+" fashion photograph"}/><div className="gallery-caption"><span>{g.title}</span><span>{g.category} <ArrowUpRight size={16}/></span></div></motion.article>)}</div></section>
<section className="quote"><span>03 / THE VISION</span><h2>Every look<br/>tells a <em>story.</em></h2><p>Fashion is an expression. Presence makes it unforgettable.</p></section>
<section className="stats" id="stats"><div className="stats-image"><Photo src="/images/white-studio.jpg" alt="Nadine model profile photograph"/></div><div className="stats-content"><span className="eyebrow">04 / MODEL PROFILE</span><h2>THE<br/><em>DETAILS.</em></h2><p className="stats-note">Measurements will be updated as Nadine confirms her current model card.</p><div className="stats-grid">{stats.map(([k,v])=><div key={k}><span>{k}</span><strong>{v}</strong></div>)}</div><div className="experience"><h3>EXPERIENCE</h3><p>Runway fashion presentations · Editorial and studio photography</p><small>Additional shows, campaigns and credits coming soon.</small></div></div></section>
<footer id="contact"><span className="eyebrow">05 / GET IN TOUCH</span><p>HAVE A PROJECT IN MIND?</p><h2>LET’S CREATE<br/><em>SOMETHING.</em></h2><div className="footer-bottom"><span>NADIA © 2026</span><span>AVAILABLE FOR BOOKING ENQUIRIES</span><a href="mailto:booking@example.com?subject=Model%20booking%20enquiry">EMAIL ENQUIRY <ArrowUpRight size={16}/></a></div><small className="contact-note">Booking email is a placeholder and will be updated before launch.</small></footer>
</main>}