import Inspect from "vite-plugin-inspect";
import { defineConfig } from "vite";

export default defineConfig({
    plugins: [Inspect()],
    root: "./",
    base: "./",
    build: {
        outDir: "dist",
        rollupOptions: {
            input: {
                main: "./index.html",
                events: "/loged/events/index.html",
                moon: "/loged/moon/index.html",
                formation: "/loged/moon/formation/index.html",
                moonPhases: "/loged/moon/moonPhases/index.html",
                eclipses: "/loged/moon/eclipses/index.html",
                starsAndConstellations: "/loged/starsAndConstellations/index.html",
                starBasics: "/loged/starsAndConstellations/stars/basics/index.html",
                typesStars: "/loged/starsAndConstellations/stars/typesStars/index.html",
                multipleStarsSystems: "/loged/starsAndConstellations/stars/multipleStarSystems/index.html",
                starSearch: "/loged/starsAndConstellations/stars/starSearch/index.html",
                costellationsHome: "/loged/starsAndConstellations/constellations/home/index.html",
                constellationsBySeasons: "/loged/starsAndConstellations/constellations/constellationsBySeasons/index.html",
                about: "/loged/about/index.html"
            },
        },
    },
});
