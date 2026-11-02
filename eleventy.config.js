import { load } from "js-yaml";

export default function (eleventyConfig) {
    // Input and output directories
    eleventyConfig.setInputDirectory('src');
    eleventyConfig.setOutputDirectory('dist');

    // Register YAML data files
    eleventyConfig.addDataExtension("yaml,yml", (contents) => {
        return load(contents);
    });

    // Static assets
    eleventyConfig.addPassthroughCopy('src/css');
    eleventyConfig.addPassthroughCopy('src/js');
    eleventyConfig.addPassthroughCopy('src/img');

    // Current copyright year
    eleventyConfig.addShortcode("year", () => new Date().getFullYear());
}

export const config = {
    dir: {
        includes: '_includes',
        data: '_data'
    },
    markdownTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk'
};