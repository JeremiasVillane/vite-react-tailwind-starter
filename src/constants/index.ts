import packageJson from "../../package.json";

export const APP_PKG_NAME = packageJson.name;
export const APP_NAME = APP_PKG_NAME.replace(/-/g, " ").replace(/\b\w/g, (c) =>
  c.toUpperCase()
);
export const APP_VERSION = packageJson.version;
export const APP_AUTHOR = packageJson.author;
export const APP_LICENSE = packageJson.license;
