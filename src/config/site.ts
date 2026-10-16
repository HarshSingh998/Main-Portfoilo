import { USER } from "@/features/profile/data/user";
import type { NavItem } from "@/types/nav";

export const SITE_INFO = {
  name: USER.displayName,
  url: process.env.APP_URL || "https://harshsingh.dev",
  ogImage: USER.ogImage,
  description: USER.bio,
  keywords: USER.keywords,
};

export const META_THEME_COLORS = {
  light: "#ffffff",
  dark: "#09090b",
};

export const MAIN_NAV: NavItem[] = [
  {
    title: "Portfolio",
    href: "/",
  },
];

export const GITHUB_USERNAME = "HarshSingh998";
export const SOURCE_CODE_GITHUB_REPO = "HarshSingh998/portfolio";
export const SOURCE_CODE_GITHUB_URL = "https://github.com/HarshSingh998";

export const UTM_PARAMS = {
  utm_source: "https://harshsingh.dev",
  utm_medium: "portfolio_website",
  utm_campaign: "referral",
};
