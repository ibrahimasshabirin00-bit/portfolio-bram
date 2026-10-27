import {createFileRoute,Link} from '@tanstack/react-router';
import {ArrowUpRight} from 'lucide-react';
import {Button} from '@/components/ui/button';
import {pageHead,profile,skills} from '@/data/portfolio';
import {ContactBand} from '@/components/portfolio/site-shell';
import profilePhoto from '@/assets/profile-photo.jpg.asset.json';
export const Route=createFileRoute('/about')({head:()=>pageHead('About','Mengenal Ibrahim Asshabirin, dengan fokus pada analisis bisnis, manajemen produk, dan IT support.'),component:About});
function About(){return <>
<div className="site-container hero-grid about-hero border-b border-border">
  <div className="hero-copy">
    <div className="flex items-center gap-2 text-xs text-muted-foreground"><span className="h-px w-7 bg-primary"/>About Me</div>
    <h1 className="hero-title">Ibrahim<br/><span className="text-primary">Asshabirin<span className="text-foreground">.</span></span></h1>
  </div>
  <div className="hero-photo-card"><img src={profilePhoto.url} alt="Foto profil Ibrahim Asshabirin"/></div>
</div>
<div className="site-container grid md:grid-cols-2 gap-12 section-space">
  <div>
    <h2 className="section-heading">Summary<span className="text-primary">.</span></h2>
    <p className="text-sm leading-8 text-muted-foreground mt-5">{profile.summary}</p>
    <p className="text-sm leading-8 text-muted-foreground mt-4">Fokus saya berada di persimpangan analisis bisnis, pengembangan produk, dan dukungan IT. Saya tertarik pada proses memahami masalah, menyusun solusi yang jelas, dan memastikan teknologi dapat digunakan dengan baik.</p>
    <div className="flex flex-wrap gap-3 mt-7">
      <Button asChild><Link to="/resume">Lihat Resume <ArrowUpRight/></Link></Button>
      <Button variant="link" asChild className="text-xs"><Link to="/portfolio">Kenali Project saya <ArrowUpRight/></Link></Button>
    </div>
  </div>
  <section>
    <span className="eyebrow">My Toolkit</span>
    <h2 className="text-lg font-semibold mt-2">Hard skills & software skills yang saya miliki</h2>
    <div className="flex flex-wrap gap-2 mt-6">{skills.map(s=><span className="skill-pill" key={s}>{s}</span>)}</div>
  </section>
</div>
<ContactBand/></>}
