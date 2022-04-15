const write = require("write");
const theme = require("../src/themes/");

let formatedColot = `
/**
 * @tokens Colors
 * @presenter Color
 */
${Object.keys(theme.colors)
  .map((key) => "$" + key + ":" + theme.colors[key])
  .join(";\n")};

/**
 * @tokens Font Families
 * @presenter FontFamily
 */
${Object.keys(theme.fonts)
  .map((key) => "$font-" + key + ":" + theme.fonts[key])
  .join(";\n")};

/**
 * @tokens Font Sizes
 * @presenter FontSize
 */
${Object.keys(theme.fontSize)
  .map((key) => "$text-" + key + ":" + theme.fontSize[key])
  .join(";\n")};

/**
* @tokens Borders
* @presenter Border
*/
${Object.keys(theme.borders)
  .map((key) => "$border-" + key + ":" + theme.borders[key] + " solid black")
  .join(";\n")};

/**
 * @tokens Border Radius
 * @presenter BorderRadius
 */
${Object.keys(theme.borderRadius)
  .map((key) => "$rounded-" + key + ":" + theme.borderRadius[key])
  .join(";\n")};

/**
* @tokens Spacings
* @presenter Spacing
*/
${Object.keys(theme.spacings)
  .map((key) => "$p-" + key + ":" + theme.spacings[key])
  .join(";\n")};

/**
 * @tokens Font Weights
 * @presenter FontWeight
 */
${Object.keys(theme.fontWeight)
  .map((key) => "$font-" + key + ":" + theme.fontWeight[key])
  .join(";\n")};
`;

write.sync("src/stories/token.scss", formatedColot, { newline: true });
