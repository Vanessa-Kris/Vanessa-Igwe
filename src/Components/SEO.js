import React from "react";
import { Helmet } from "react-helmet-async";

const SEO = ({
  title = "Vanessa Christopher - Front-End Developer & UI/UX Designer",
  description = "Vanessa Christopher is a dedicated front-end developer and UI/UX designer from Southern Nigeria, specializing in React, responsive web design, and creating exceptional user experiences.",
  keywords = "Vanessa Christopher, Front-End Developer, UI/UX Designer, React Developer, Web Developer, Portfolio, Nigeria, Cameroon, JavaScript, TypeScript, Web Design",
  image = "/portfolio.png",
  url = "https://vanesaigwe.com/",
  type = "website",
}) => {
  const siteUrl = "https://vanesaigwe.com";
  const fullUrl = url.startsWith("http") ? url : `${siteUrl}${url}`;
  const fullImageUrl = image.startsWith("http") ? image : `${siteUrl}${image}`;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={fullUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:site_name" content="Vanessa Christopher Portfolio" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImageUrl} />
      <meta name="twitter:creator" content="@vanessa_kris" />

      {/* Additional SEO Tags */}
      <meta name="author" content="Vanessa Christopher" />
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
    </Helmet>
  );
};

export default SEO;
