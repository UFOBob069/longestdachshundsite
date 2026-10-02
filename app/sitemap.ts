import type { MetadataRoute } from "next";
import { SITE_URL } from "./site";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/privacy-policy", "/delete-account"].map(path => ({ url: `${SITE_URL}${path}` }));
}
