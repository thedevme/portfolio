const ProjectHeader = ({ title, subtitle, year, technology, categories, appStoreUrl, testFlightUrl, androidUrl, hideTitle = false }) => {
  const hasButtons = appStoreUrl || testFlightUrl || androidUrl;
  const buttonCount = [appStoreUrl, testFlightUrl, androidUrl].filter(Boolean).length;

  return (
    <section className={`section section-inner started-heading ${hideTitle ? 'started-heading--compact' : ''}`}>
      {!hideTitle && (
        <div className="container">
          <div className="m-titles align-left">
            <h1
              className="m-title splitting-text-anim-1 scroll-animate"
              data-splitting="words"
              data-animate="active"
            >
              <span>{title}</span>
            </h1>
            <div
              className="m-subtitle splitting-text-anim-1 scroll-animate"
              data-splitting="words"
              data-animate="active"
            >
              <span>{subtitle}</span>
            </div>
          </div>
        </div>
      )}
      <div className="v-line v-line-right v-line-top">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8">
              <div className="m-details">
                <div className="details-label">
                  <span>Year:</span>
                  <strong>
                    <span>{year}</span>
                  </strong>
                </div>
                <div className="details-label">
                  <span>Technology:</span>
                  <strong>
                    <span>{technology}</span>
                  </strong>
                </div>
                <div className="details-label">
                  <span>Categories:</span>
                  <strong>
                    <span>{categories}</span>
                  </strong>
                </div>
              </div>
            </div>
            {hasButtons && (
              <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 align-right">
                {appStoreUrl && (
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={appStoreUrl}
                    className="btn scrolla-element-anim-1 scroll-animate"
                    data-animate="active"
                    style={{ marginRight: '10px', marginBottom: '10px' }}
                  >
                    <span>App Store</span>
                  </a>
                )}
                {testFlightUrl && (
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={testFlightUrl}
                    className="btn scrolla-element-anim-1 scroll-animate"
                    data-animate="active"
                    style={{ marginRight: '10px', marginBottom: '10px' }}
                  >
                    <span>TestFlight</span>
                  </a>
                )}
                {androidUrl && (
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={androidUrl}
                    className="btn scrolla-element-anim-1 scroll-animate"
                    data-animate="active"
                    style={{ marginBottom: '10px' }}
                  >
                    <span>Android APK</span>
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectHeader;
