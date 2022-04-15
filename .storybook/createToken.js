const write = require("write");
const theme = require("../src/themes/");

let formatedColot = `
:root {
/**
 * @tokens Colors
 * @presenter Color
 */
${Object.keys(theme.colors)
  .map((key) => "--" + key + ":" + theme.colors[key])
  .join(";\n")};

/**
 * @tokens Font Families
 * @presenter FontFamily
 */
${Object.keys(theme.fonts)
  .map((key) => "--" + key + ":" + theme.fonts[key])
  .join(";\n")};

/**
 * @tokens Font Sizes
 * @presenter FontSize
 */
${Object.keys(theme.fontSize)
  .map((key) => "--" + key + ":" + theme.fontSize[key])
  .join(";\n")};

}
`;

write.sync("src/stories/token.css", formatedColot, { newline: true });
