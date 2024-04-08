import type { ModuleOptions } from "@vite-pwa/nuxt";

export const pwa: ModuleOptions = {
    registerType: "autoUpdate",
    manifest: {
        categories: ["development", "website", "blog", "technology", "programming"],
        name: "MGM12.dev",
        short_name: "MGM12",
        description: "MGM12.dev - Webdevelopment",
        theme_color: "#FFBF00",
        background_color: "#ffffff",
        start_url: "/",
        lang: "en",
        shortcuts: [
            {
                name: "Blog",
                url: "/blog",
                description: "Blog posts",
                short_name: "Blog",
                icons: [{ src: "/icons/mdi_feed.png", sizes: "192x192" }],
            },
        ],
        icons: [
            {
                src: "logo/pwa-64x64.png",
                sizes: "64x64",
                type: "image/png",
            },
            {
                src: "logo/pwa-192x192.png",
                sizes: "192x192",
                type: "image/png",
            },
            {
                src: "logo/pwa-512x512.png",
                sizes: "512x512",
                type: "image/png",
            },
            {
                src: "logo/maskable-icon-512x512.png",
                sizes: "512x512",
                type: "image/png",
                purpose: "any maskable",
            },
            {
                src: "logo/apple-touch-icon-180x180.png",
                sizes: "180x180",
                type: "image/png",
                purpose: "any maskable",
            },
        ],
    },
    workbox: {
        navigateFallback: "/",
        globPatterns: ["**/*.{js,css,html,png,svg,ico}"],
    },
    client: {
        installPrompt: true,
    },
    devOptions: {
        enabled: true,
        suppressWarnings: true,
        navigateFallbackAllowlist: [/^\/$/],
        type: "module",
    },
};