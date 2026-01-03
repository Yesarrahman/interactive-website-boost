import { useState, useEffect, Suspense } from 'react';
import { AnimatePresence } from 'framer-motion';
import ParticleBackground from '@/components/ParticleBackground';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import LogoCloud from '@/components/LogoCloud';
import ServicesSection from '@/components/ServicesSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import FeaturedProjects from '@/components/FeaturedProjects';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import ProjectsModal from '@/components/ProjectsModal';
import CaseStudyPage from '@/components/CaseStudyPage';
import LoadingScreen from '@/components/LoadingScreen';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [projectsModalOpen, setProjectsModalOpen] = useState(false);
  const [caseStudyOpen, setCaseStudyOpen] = useState(false);
  const [caseStudyId, setCaseStudyId] = useState('');

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const openProjects = () => setProjectsModalOpen(true);
  const closeProjects = () => setProjectsModalOpen(false);
  
  const openCaseStudy = (id: string) => {
    setCaseStudyId(id);
    setCaseStudyOpen(true);
    setProjectsModalOpen(false);
  };
  const closeCaseStudy = () => setCaseStudyOpen(false);
  
  const backToProjects = () => {
    setCaseStudyOpen(false);
    setProjectsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <AnimatePresence mode="wait">
        {isLoading && <LoadingScreen isLoading={isLoading} />}
      </AnimatePresence>

      {/* 3D Particle Background */}
      {!isLoading && (
        <Suspense fallback={<div className="fixed inset-0 bg-background z-[-1]" />}>
          <ParticleBackground />
        </Suspense>
      )}

      {/* Navigation */}
      <Navigation onOpenProjects={openProjects} />

      {/* Main Content */}
      <main>
        <HeroSection onOpenProjects={openProjects} />
        <LogoCloud />
        <ServicesSection />
        <FeaturedProjects onOpenCaseStudy={openCaseStudy} />
        <TestimonialsSection />
        <ContactSection />
      </main>

      <Footer />

      {/* Modals */}
      <ProjectsModal 
        isOpen={projectsModalOpen} 
        onClose={closeProjects}
        onOpenCaseStudy={openCaseStudy}
      />
      
      <CaseStudyPage 
        isOpen={caseStudyOpen}
        projectId={caseStudyId}
        onClose={closeCaseStudy}
        onBackToProjects={backToProjects}
      />
    </div>
  );
};

export default Index;
