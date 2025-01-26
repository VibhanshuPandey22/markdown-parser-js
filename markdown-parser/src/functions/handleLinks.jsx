export const handleLinks = (input, tokens, i, markupChar, markupType) => {
  const squareBracketClosingInd = input.indexOf("](", i);

  if (squareBracketClosingInd !== -1) {
    const closingParenthesInd = input.indexOf(")", squareBracketClosingInd);
    if (closingParenthesInd !== -1) {
      const name = input.slice(i + 1, squareBracketClosingInd);
      const url = input.slice(squareBracketClosingInd + 2, closingParenthesInd);

      tokens.push({
        type: markupType,
        content: [{ name: name, url: url }],
      });

      return closingParenthesInd + 1;
    }
  }
  tokens.push({ type: "plain", content: markupChar });
  return i + 1;
};
