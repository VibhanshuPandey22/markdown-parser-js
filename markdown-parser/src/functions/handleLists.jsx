import { tokenize } from "./tokenize";

export const handleLists = (input, tokens, i, markupChar, markupType) => {
  let end = input.indexOf("\n", i + 1);
  if (end === -1) end = input.length;
  const content = input.slice(i + markupChar.length + 1, end);
  const innerTokens = tokenize(content);

  let lastToken = tokens[tokens.length - 1];
  if (lastToken && lastToken.type === markupType) {
    lastToken.content.push({
      type: "plain",
      content: innerTokens,
    });
  } else {
    tokens.push({
      type: markupType,
      content: [
        {
          type: "plain",
          content: innerTokens,
        },
      ],
    });
  }
  return { end, list: true };
};
