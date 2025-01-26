import { handleMarkup } from "./handleMarkup";
import { handleHeadings } from "./handleHeadings";
import { handleLinks } from "./handleLinks";
import { handleLists } from "./handleLists";
import { handleCodeBlocks } from "./handleCodeBlocks";

export const tokenize = (input) => {
  let tokens = [];
  let list = false;
  let i = 0;

  while (i < input.length) {
    // Handle new lines
    if (input[i] === "\n") {
      if (list && input[i + 1] === "\n") {
        list = false;
        i++;
        continue;
      }
      // Reset list state on double newlines
      if (!list) {
        tokens.push({ type: "newLine", content: "" });
      }
      i++;
      continue;
    }

    // Handle headings
    if (input.startsWith("# ", i)) {
      if (i === 0 || input[i - 1] === "\n") {
        i = handleHeadings(input, tokens, "#", i);
        continue;
      }
    }
    if (input.startsWith("## ", i)) {
      if (i === 0 || input[i - 1] === "\n") {
        i = handleHeadings(input, tokens, "##", i);
        continue;
      }
    }
    if (input.startsWith("### ", i)) {
      if (i === 0 || input[i - 1] === "\n") {
        i = handleHeadings(input, tokens, "###", i);
        continue;
      }
    }
    if (input.startsWith("#### ", i)) {
      if (i === 0 || input[i - 1] === "\n") {
        i = handleHeadings(input, tokens, "####", i);
        continue;
      }
    }
    if (input.startsWith("##### ", i)) {
      if (i === 0 || input[i - 1] === "\n") {
        i = handleHeadings(input, tokens, "#####", i);
        continue;
      }
    }
    if (input.startsWith("###### ", i)) {
      if (i === 0 || input[i - 1] === "\n") {
        i = handleHeadings(input, tokens, "######", i);
        continue;
      }
    }

    // HANDLE OTHER MARKUP (e.g., bold, italic, headings, etc.)
    if (input.startsWith("**", i)) {
      if (
        i === 0 ||
        (input[i + 2] !== "+" && input[i + 2] !== "-" && input[i + 2] !== " ")
      ) {
        i = handleMarkup(input, tokens, i, "**", "bold");
        continue;
      }
    }
    if (input.startsWith("_", i)) {
      if (
        i === 0 ||
        (input[i + 1] !== "+" && input[i + 1] !== "-" && input[i + 1] !== " ")
      ) {
        i = handleMarkup(input, tokens, i, "_", "italic");
        continue;
      }
    }
    if (input.startsWith("~~", i)) {
      if (
        i === 0 ||
        (input[i + 2] !== "+" && input[i + 2] !== "-" && input[i + 2] !== " ")
      ) {
        i = handleMarkup(input, tokens, i, "~~", "strikeThrough");
        continue;
      }
    }

    // Links
    if (input[i] === "[") {
      i = handleLinks(input, tokens, i, "[", "link");
      continue;
    }

    // Handle unordered lists
    if (input.startsWith("- ", i)) {
      if (i === 0 || input[i - 1] === "\n") {
        const result = handleLists(input, tokens, i, "-", "unorderedList");
        i = result.end;
        list = result.list;
        continue;
      }
    }

    // Handle ordered lists
    if (input.startsWith("+ ", i)) {
      if (i === 0 || input[i - 1] === "\n") {
        const result = handleLists(input, tokens, i, "+", "orderedList");
        i = result.end;
        list = result.list;
        continue;
      }
    }

    if (input.startsWith("```", i)) {
      let newLineInd = input.indexOf("\n", i + 3);
      if (newLineInd !== -1 && input.slice(i + 3, newLineInd).trim() === "") {
        i = handleCodeBlocks(input, tokens, newLineInd, "```", "codeBlock");
        continue;
      }
    }

    // Plain text
    tokens.push({ type: "plain", content: input[i] });
    i++;
    continue;
  }

  return tokens;
};
