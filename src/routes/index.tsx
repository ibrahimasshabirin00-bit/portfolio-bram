import { createFileRoute, Link } from '@tanstack/react-router';
import { ArrowUpRight, Download, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ContactBand } from '@/components/portfolio/site-shell';
import { ProjectCard } from '@/components/portfolio/project-card';
import { pageHead, profile, projects } from '@/data/portfolio';
import profilePhoto from '@/assets/profile-photo.jpg.asset.json';
export const Route=createFileRoute('/')({head:()=>pageHead('Business Analyst, Product Manager & IT Support','Portofolio Ibrahim Asshabirin: analisis bisnis, strategi produk, dan dukungan teknologi.'),component:Index});
function Index(){ return <>
<section className="site-container hero-grid">
  <div className="hero-copy">
    <div className="flex items-center gap-2 text-xs text-muted-foreground"><span className="h-px w-7 bg-primary"/>Hello</div>
    <h1 className="hero-title">Ibrahim<br/><span className="text-primary">Asshabirin<span className="text-foreground">.</span></span></h1>
    <p className="max-w-[465px] text-sm leading-7 text-muted-foreground">{profile.summary}</p>
    <div className="flex flex-wrap gap-3 mt-8">
      <Button size="lg" asChild><Link to="/contact">Mari terhubung <ArrowUpRight/></Link></Button>
      <Button variant="outline" size="lg" asChild><a href={profile.resumeUrl} download>Download Resume <Download/></a></Button>
    </div>
    <Link to="/portfolio" className="inline-flex items-center gap-3 text-xs text-muted-foreground mt-8">Kenali Project saya <ArrowRight size={15}/></Link>
  </div>
  <div className="hero-photo-card"><img src={profilePhoto.url} alt="Foto profil Ibrahim Asshabirin"/></div>
</section>
<section className="site-container section-space border-t border-border">
  <div className="grid grid-cols-[minmax(0,1fr)_auto] gap-4 items-end mb-8">
    <div><span className="eyebrow">Overview Project</span><p className="text-xs text-muted-foreground mt-3">Meliputi Project, Pekerjaan, & Study Case</p></div>
    <Button variant="link" asChild className="px-0 text-xs"><Link to="/portfolio">Semua proyek <ArrowUpRight/></Link></Button>
  </div>
  <div className="grid md:grid-cols-3 gap-6">{projects.map(p=><ProjectCard key={p.id} project={p}/>)}</div>
</section>
<ContactBand/></>;}
