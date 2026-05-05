import { useNavigate } from 'react-router';
import { NavHeader }    from '../components/NavHeader';
import { HeroSection }  from '../components/HeroSection';
import { PageFooter }   from '../components/PageFooter';
import { ProjectCard }  from '../components/ProjectCard';
import { projects }     from '../data/projects';

import imgHero from 'figma:asset/607a26c79e19464e9b8cf383b6e974d8ac17fcab.png';

export function HomePage() {
  const navigate = useNavigate();

  const scrollToGrid = () => {
    document.getElementById('projects-grid')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="bg-black w-full min-h-screen">

      <HeroSection src={imgHero} alt="KR Customs hero">
        {/* Welcome overlay — bottom-right corner */}
        <div className="absolute bottom-0 right-0 krc-panel flex flex-col gap-4 md:gap-8 items-end p-4 sm:p-6 md:p-8 w-full sm:w-[60%] lg:w-[40%]">
          <div className="w-full">
            <p className="krc-heading mb-1">Welcome to KR Customs</p>
            <p className="krc-body">We specialize in custom automotive builds, paint, and classic vehicle restorations in the Pacific Northwest.</p>
          </div>
          <button className="krc-btn px-4 md:px-6 py-2 md:py-4 shrink-0" onClick={() => navigate('/projects', { state: { scrollToGrid: true } })}>
            See our Projects
          </button>
        </div>
      </HeroSection>

      {/* Projects grid */}
      <div id="projects-grid" className="krc-section py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} img={project.hero} projectId={project.id} navigate={navigate} />
          ))}
        </div>
      </div>

      <PageFooter />
      <NavHeader />
    </div>
  );
}