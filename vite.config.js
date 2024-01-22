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
                events: "./events/index.html",
                moon: "./moon/index.html",
                formation: "./moon/formation/index.html",
                moonPhases: "./moon/moonPhases/index.html",
                eclipses: "./moon/eclipses/index.html",
                starsAndConstellations: "./starsAndConstellations/index.html",
                starBasics: "./starsAndConstellations/stars/basics/index.html",
                typesStars: "./starsAndConstellations/stars/typesStars/index.html",
                multipleStarsSystems: "./starsAndConstellations/stars/multipleStarSystems/index.html",
                starSearch: "./starsAndConstellations/stars/starSearch/index.html",
                costellationsHome: "./starsAndConstellations/constellations/home/index.html",
                constellationsBySeasons: "./starsAndConstellations/constellations/constellationsBySeasons/index.html",
                about: "./about/index.html"
            },
        },
    },
});
