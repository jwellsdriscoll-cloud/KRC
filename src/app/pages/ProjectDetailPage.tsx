import { useParams, useNavigate } from 'react-router';
import { NavHeader }   from '../components/NavHeader';
import { HeroSection } from '../components/HeroSection';
import { PageFooter }  from '../components/PageFooter';
import { projects }    from '../data/projects';

export function ProjectDetailPage() {
  const { id }    = useParams<{ id: string }>();
  const navigate  = useNavigate();
  const project   = projects.find((p) => p.id === Number(id));

  if (!project) {
    return (
      <div className="bg-black w-full min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="krc-font text-white text-[24px] mb-6">Project not found</p>
          <button className="krc-btn px-6 py-3" onClick={() => navigate('/projects')}>
            Back to Projects
          </button>
        </div>
        <NavHeader />
      </div>
    );
  }

  const scrollToGallery = () => {
    const el = document.getElementById('photo-gallery');
    const nav = document.querySelector('nav');
    if (!el) return;
    const navHeight = nav ? nav.offsetHeight : 0;
    const top = el.getBoundingClientRect().top + window.scrollY - navHeight;
    window.scrollTo({ top, behavior: 'smooth' });
  };

  return (
    <div className="bg-black w-full min-h-screen">

      <HeroSection src={project.hero} alt={project.title}>
        {/* Title + See Photos — full-width bar above the bottom red line */}
        <div className="absolute bottom-2 left-0 right-0 z-[5]">
          <div className="krc-panel flex flex-row items-center justify-between py-3 md:py-5 px-6 md:px-10">
            <p className="krc-heading">{project.title}</p>
            <button className="krc-btn px-4 md:px-6 py-2 md:py-4 shrink-0 ml-6" onClick={scrollToGallery}>
              See Photos
            </button>
          </div>
        </div>
      </HeroSection>

      <div className="krc-red-bar" />

      {/* Photo gallery */}
      <div id="photo-gallery" className="px-4 sm:px-8 lg:px-[12%] py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {project.photos.map((photo, i) => (
            <div
              key={i}
              className={`relative overflow-hidden rounded-[4px] ${i === 0 || i === 4 ? 'md:row-span-2' : ''}`}
            >
              <div className={`w-full ${i === 0 || i === 4 ? 'aspect-[3/4] md:h-full' : 'aspect-video'} relative`}>
                <img
                  alt={`${project.title} — photo ${i + 1}`}
                  className="absolute inset-0 w-full h-full object-cover"
                  src={photo}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <PageFooter />
      <NavHeader />
    </div>
  );
}