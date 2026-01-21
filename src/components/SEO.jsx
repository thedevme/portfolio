import Head from "next/head";

const SEO = ({ title, description, image, url }) => {
  const fullTitle = title ? `${title} | Craig Clayton` : "Craig Clayton - iOS Developer & Designer";
  const defaultDescription = "Portfolio of Craig Clayton, an iOS developer and designer specializing in Swift, SwiftUI, and mobile app development.";
  const defaultImage = "/assets/images/og-image.png";

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description || defaultDescription} />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description || defaultDescription} />
      <meta property="og:image" content={image || defaultImage} />
      {url && <meta property="og:url" content={url} />}
      <meta property="og:type" content="website" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description || defaultDescription} />
      <meta name="twitter:image" content={image || defaultImage} />
    </Head>
  );
};

export default SEO;
