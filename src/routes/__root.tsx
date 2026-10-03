import {
  createRootRoute,
  HeadContent,
  Outlet,
  Scripts,
} from "@tanstack/react-router";
import { Analytics } from "@vercel/analytics/react";
import { AuthProvider } from "@/lib/auth/provider";
import { PreviewHostBridge } from "@/components/preview-host-bridge";
import { AppErrorComponent } from "@/lib/error-component";
import appCss from "../styles.css?url";

const APP_NAME = "AIRO Studio";
const DESCRIPTION =
  "AIRO Studio designs and builds websites and digital experiences for businesses, startups, and brands. Design, development, 3D, and AI-powered products.";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "AIRO Studio",
  alternateName: "AIRO",
  description: DESCRIPTION,
  areaServed: "Worldwide",
  slogan: "Digital experiences, beyond the ordinary.",
  priceRange: "₹₹",
};

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1, viewport-fit=cover",
      },
      { title: `${APP_NAME} — Digital experiences, beyond the ordinary.` },
      { name: "description", content: DESCRIPTION },
      { name: "theme-color", content: "#08090b" },
      { name: "application-name", content: APP_NAME },
      { name: "author", content: "AIRO Studio" },
      { name: "robots", content: "index, follow" },
    ],
    links: [
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "stylesheet", href: appCss },
      { rel: "manifest", href: "/__grok/manifest.webmanifest" },
      { rel: "apple-touch-icon", href: "/__grok/icon-180.png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500&family=Instrument+Serif:ital@0;1&family=Outfit:wght@300;400;500;600&display=swap",
      },
    ],
  }),
  errorComponent: AppErrorComponent,
  component: RootDocument,
});

function RootDocument() {
  return (
    <html lang="en" className="dark antialiased" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body className="bg-bg text-fg font-sans">
        <PreviewHostBridge />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <AuthProvider>
          <Outlet />
        </AuthProvider>
        <Analytics />
        <Scripts />
      </body>
    </html>
  );
}
