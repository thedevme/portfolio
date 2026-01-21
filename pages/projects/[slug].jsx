import Layout from "../../src/layouts/Layout";
import SEO from "../../src/components/SEO";
import {
  ProjectHeader,
  ProjectDescription,
  HeroImage,
  TwoColumnCards,
  FullWidthSection,
  TabletFullSection,
  NextProject,
} from "../../src/components/sections";
import { projects, getProjectSlugs, getProjectBySlug } from "../../src/data/projects";

const ProjectPage = ({ project }) => {
  if (!project) {
    return (
      <Layout pageClassName="portfolio-template">
        <div className="container">
          <h1>Project not found</h1>
        </div>
      </Layout>
    );
  }

  const renderSection = (section, index) => {
    switch (section.type) {
      case "two-column":
        return (
          <TwoColumnCards
            key={index}
            cards={section.cards}
            imageWidth={project.imageWidth}
          />
        );
      case "full-width":
        return (
          <FullWidthSection
            key={index}
            image={section.image}
            title={section.title}
            description={section.description}
            imagePosition={section.imagePosition}
            background={section.background}
            imageWidth={project.imageWidth}
          />
        );
      case "tablet-full":
        return (
          <TabletFullSection
            key={index}
            image={section.image}
            title={section.title}
            description={section.description}
            background={section.background}
            imageWidth={project.imageWidth}
          />
        );
      default:
        return null;
    }
  };

  return (
    <Layout pageClassName="portfolio-template">
      <SEO
        title={project.title}
        description={project.description[0]}
        image={project.headerImage}
      />

      <ProjectHeader
        title={project.title}
        subtitle={project.subtitle}
        year={project.year}
        technology={project.technology}
        categories={project.categories}
        appStoreUrl={project.appStoreUrl}
      />

      <ProjectDescription paragraphs={project.description} />

      <HeroImage image={project.headerImage} />

      <section className="section section-inner">
        {project.sections.map((section, index) => renderSection(section, index))}
      </section>

      {project.nextProject && (
        <NextProject
          slug={project.nextProject.slug}
          title={project.nextProject.title}
        />
      )}
    </Layout>
  );
};

export async function getStaticPaths() {
  const slugs = getProjectSlugs();
  const paths = slugs.map((slug) => ({
    params: { slug },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      project,
    },
  };
}

export default ProjectPage;
