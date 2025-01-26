import { tokenize } from "./tokenize";

export const handleMarkup = (input, tokens, i, markupChar, markupType) => {
  let end = input.indexOf(markupChar, i + markupChar.length);
  if (end !== -1) {
    const content = input.slice(i + markupChar.length, end);
    if (
      content.length > 0 &&
      content[0] !== " " &&
      content[content.length - 1] !== " "
    ) {
      const innerTokens = tokenize(content);
      tokens.push({ type: markupType, content: innerTokens });
      return end + markupChar.length;
    }
  }
  tokens.push({ type: "plain", content: input[i] });
  return i + 1;
};
