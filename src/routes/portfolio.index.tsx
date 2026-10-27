import {createFileRoute} from '@tanstack/react-router';
import {useState} from 'react';
import {Button} from '@/components/ui/button';
import {ProjectCard} from '@/components/portfolio/project-card';
import {ContactBand} from '@/components/portfolio/site-shell';
import {pageHead,projects} from '@/data/portfolio';
export const Route=createFileRoute('/portfolio/')({head:()=>pageHead('Portfolio','Contoh studi kasus business analysis, product management, dan IT support Ibrahim Asshabirin.'),component:Portfolio});
function Portfolio(){const [filter,setFilter]=useState('Semua proyek');return <><div className="site-container pb-16"><header className="page-intro"><span className="eyebrow">My portfolio</span><h1 className="page-title mt-4">Karya & studi kasus<span className="text-primary">.</span></h1><p className="text-sm text-muted-foreground mt-5 max-w-xl leading-7">Kumpulan contoh solusi untuk memahami kebutuhan bisnis, merancang produk, dan meningkatkan layanan teknologi.</p></header><div className="flex flex-wrap gap-2 mb-9" aria-label="Filter proyek">{['Semua proyek','Business Analyst','Product Manager','IT Support'].map(f=><Button key={f} variant={filter===f?'default':'outline'} onClick={()=>setFilter(f)} aria-pressed={filter===f}>{f}</Button>)}</div><div className="grid md:grid-cols-3 gap-6">{projects.filter(p=>filter==='Semua proyek'||p.category===filter).map(p=><ProjectCard key={p.id} project={p}/>)}</div></div><ContactBand/></>}
