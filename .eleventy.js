module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("assets/css")
    eleventyConfig.addPassthroughCopy("src/images/uploads")
    eleventyConfig.addPassthroughCopy("src/admin")
    eleventyConfig.addCollection("posts", function(collection) {
        return collection.getFilteredByGlob("src/posts/*.md");
    });

    return {
        dir:{
            addPassthroughFileCopy: true,
            input: "src",
            includes: "_includes",
            output: "_site"
        },
    };
}