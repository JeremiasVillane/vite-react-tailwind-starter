import { APP_NAME, APP_PKG_NAME } from "@/constants";
import { Helmet, HelmetProvider } from "react-helmet-async";

const Meta = () => {
  return (
    <HelmetProvider>
      <Helmet prioritizeSeoTags>
        <title>{APP_NAME}</title>
        <meta name="description" content={APP_NAME} />

        <meta name="application-name" content={APP_PKG_NAME} />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content={APP_PKG_NAME} />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="theme-color" content="#FFFFFF" />

        <link rel="shortcut icon" href="/assets/favicon.svg" />
      </Helmet>
    </HelmetProvider>
  );
};

export default Meta;
