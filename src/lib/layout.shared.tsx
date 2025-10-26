import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";

import { BookIcon } from "lucide-react";

import Image from "next/image";

/**
 * Shared layout configurations
 *
 * you can customise layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <>
          <Image
            src="/topineur_logo.png"
            alt="Topineur Logo"
            width={40}
            height={40}
          />
          Topineur
        </>
      ),
    },
    // see https://fumadocs.dev/docs/ui/navigation/links
    // TODO: Make like Langage docs / Release / etc
  };
}
