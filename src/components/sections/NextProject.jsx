import Link from "next/link";

const NextProject = ({ slug, title }) => {
  return (
    <div className="section section-inner m-page-navigation">
      <div className="container">
        <div className="h-titles h-navs">
          <Link legacyBehavior href={`/projects/${slug}`}>
            <a>
              <span
                className="nav-arrow scrolla-element-anim-1 scroll-animate"
                data-animate="active"
              >
                <span>Next Project</span>
              </span>
              <span
                className="h-title splitting-text-anim-2 scroll-animate"
                data-splitting="chars"
                data-animate="active"
              >
                <span>{title}</span>
              </span>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NextProject;
