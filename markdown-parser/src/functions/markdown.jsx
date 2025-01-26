import { tokenize } from "./tokenize";
import { tokensToComponents } from "./renderTokens";

export const markdownParser = (input) => {
  const tokens = tokenize(input);
  if (tokens.length === 0) return input;
  return tokensToComponents(tokens);
};

// SAMPLE INPUT

// # This is heading 1
// ## This is heading 2
// ### This is heading 3
// #### This is heading 4
// ##### This is heading 5
// ###### This is heading 6
// This is a paragraph

// Here's some **bold** text
// Here's some _italic_ text
// Here's some ~~strikethrough~~ text
// **This line is bold with _some italic_ in between**
// _This line is italic with **some bold** in between_
// ~~This line is strikethrough with _some italic_ in between~~
// _This line is italic with ~~some strikethrough~~ in between_
// **This line is bold with ~~some strikethrough~~ in between**
// ~~This line is strikethrough with **some bold** in between~~

// _This line has both **bold** and ~~strikethrough~~ and is entirely italic_

// **These are a few links -**
// [Parivahan](https://parivahan.gov.in/parivahan//en/content/how-apply-learners-license)
// [W3Schools](https://www.w3schools.com/)
// [Tailwind CSS](https://tailwindcss.com/)
// [Google](https://www.google.com)

// This is an unordered list :
// - This is a list item
// - This is another list item
// - And this is yet another list item

// This is an ordered list :
// + This is a list item
// + This is another list item
// + And this is yet another list item

// ```
// const handleMarkup = (line, tokens, markupChar, markupType) => {
//   const content = line.slice(markupChar.length).trim();
//   const innerTokens = tokenize(content);
//   tokens.push({ type: markupType, content: innerTokens });
// };
// ```

// Thank You!
