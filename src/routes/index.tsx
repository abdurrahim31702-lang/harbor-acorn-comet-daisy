import { createFileRoute } from "@tanstack/react-router";
import { StudioHome } from "@/components/studio/StudioHome";

export const Route = createFileRoute("/")({
  component: StudioHome,
  head: () => ({
    meta: [
      { title: "AIRO Studio — Digital experiences, beyond the ordinary." },
      {
        name: "description",
        content:
          "AIRO Studio designs and builds websites and digital experiences for businesses, startups, and brands. Design, development, 3D, and AI-powered products.",
      },
    ],
  }),
});
