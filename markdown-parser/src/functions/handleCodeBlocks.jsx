const isValidClosing = (input, i, codeBlockStart) => {
  let startRight = i + 3;
  let startLeft = i - 1;
  let rightPart = false;
  let leftPart = false;

  if (startRight >= input.length || input[startRight] === "\n") {
    rightPart = true;
  }
  if (input[startLeft] === "\n") {
    leftPart = true;
  }

  if (!rightPart) {
    while (startRight < input.length) {
      if (input[startRight] !== " ") {
        if (input[startRight] === "\n") {
          rightPart = true;
        }
        break;
      }
      startRight++;
    }
    if (startRight >= input.length) {
      rightPart = true;
    }
  }

  if (!leftPart) {
    while (startLeft >= codeBlockStart) {
      if (input[startLeft] !== " ") {
        if (startLeft !== codeBlockStart && input[startLeft] === "\n") {
          leftPart = true;
        }
        break;
      }
      startLeft--;
    }
  }

  return leftPart && rightPart;
};

export const handleCodeBlocks = (input, tokens, i, markupChar, markupType) => {
  let start = i;
  let end = input.indexOf("```", start);
  let validClosing = false;
  if (end !== -1) {
    while (!validClosing) {
      if (isValidClosing(input, end, start)) {
        validClosing = true;
        break;
      }
      end = input.indexOf("```", end + 1);
      if (end === -1) break;
    }
    if (validClosing) {
      let content = input.slice(start, end).trim();
      tokens.push({ type: markupType, content: content });
      return end + 3;
    }
  }
  tokens.push({ type: "plain", content: input[i] });
  return i + 1;
};
