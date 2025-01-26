import { tokenize } from "./tokenize";

export const handleHeadings = (input, tokens, markupChar, i) => {
  let end = input.indexOf("\n", i + markupChar.length);
  if (end === -1) {
    end = input.length;
  }

  const content = input.slice(i + markupChar.length, end);
  const innerTokens = tokenize(content);

  if (markupChar.length === 1) {
    tokens.push({ type: "h1", content: innerTokens });
  } else if (markupChar.length === 2) {
    tokens.push({ type: "h2", content: innerTokens });
  } else if (markupChar.length === 3) {
    tokens.push({ type: "h3", content: innerTokens });
  } else if (markupChar.length === 4) {
    tokens.push({ type: "h4", content: innerTokens });
  } else if (markupChar.length === 5) {
    tokens.push({ type: "h5", content: innerTokens });
  } else if (markupChar.length === 6) {
    tokens.push({ type: "h6", content: innerTokens });
  }
  return end;
};
