interface ProjectCardProps {
  img: string;
  projectId: number;
  navigate: (path: string) => void;
}

/**
 * Thumbnail card used in the projects grid on Home and Projects pages.
 * Clicking anywhere on the card — or the button — navigates to the detail page.
 */
export function ProjectCard({ img, projectId, navigate }: ProjectCardProps) {
  return (
    <div
      className="relative w-full aspect-video overflow-hidden rounded-[8px] group cursor-pointer"
      onClick={() => navigate(`/projects/${projectId}`)}
    >
      <img
        alt="Project"
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        src={img}
      />
      <div className="absolute bottom-0 left-0 right-0 bg-[rgba(0,0,0,0.4)] flex items-end justify-end p-4 rounded-b-[8px]">
        <button
          className="krc-btn-outline px-4 md:px-6 py-2"
          onClick={(e) => { e.stopPropagation(); navigate(`/projects/${projectId}`); }}
        >
          See Project Photos
        </button>
      </div>
    </div>
  );
}
