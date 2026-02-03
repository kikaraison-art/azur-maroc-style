import { useParams, Navigate } from "react-router-dom";
import { useEffect } from "react";
import { getProjectBySlug, getAdjacentProjects } from "@/data/projects";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ProjectHero from "@/components/project/ProjectHero";
import ProjectInfo from "@/components/project/ProjectInfo";
import ProjectGallery from "@/components/project/ProjectGallery";
import ProjectNavigation from "@/components/project/ProjectNavigation";

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? getProjectBySlug(slug) : undefined;
  const { prev, next } = slug ? getAdjacentProjects(slug) : { prev: null, next: null };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) {
    return <Navigate to="/404" replace />;
  }

  return (
    <main className="min-h-screen">
      <Navigation />
      <ProjectHero project={project} />
      <ProjectInfo project={project} />
      {project.gallery.length > 1 && <ProjectGallery images={project.gallery} title={project.title} />}
      <ProjectNavigation prev={prev} next={next} />
      <Footer />
    </main>
  );
};

export default ProjectDetail;
