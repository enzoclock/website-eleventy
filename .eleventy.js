module.exports = function (eleventyConfig) {
  
  eleventyConfig.addWatchTarget("./src/**"); /* Watch for all src/ files changes, including assets */

  const inspect = require("util").inspect; 
  eleventyConfig.addFilter("inspect", value => inspect(value)); /* https://github.com/11ty/eleventy/discussions/1799#discussioncomment-799836 */
  /* <!-- <pre>{{ collections.page | inspect }}</pre> --> */ // In markdown to help you debug !

  return {
    dir: {
      input: "src", /* source folder */
      output: "public", /* output build folder */
      includes: "layouts" /* layouts folder */
    },
    
  };
};