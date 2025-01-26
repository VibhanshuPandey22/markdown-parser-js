export const mdSyntaxHelp = [
  // {
  //   heading: "HEADING H1",
  //   syntax:
  //     "# H1 Heading \n## H2 Heading \n### H3 Heading \n#### H4 Heading \n##### H5 heading \n###### H6 Heading \n",
  //   output: (
  //     <>
  //       <span className="text-4xl font-bold mt-4 mb-2">H1 Heading</span>
  //       <br />
  //       <span className="text-3xl font-bold mt-4 mb-2">H2 Heading</span>
  //       <br />
  //       <span className="text-xl font-bold mt-4 mb-2">H3 Heading</span>
  //       <br />
  //       <span className=" font-bold mt-4 mb-2">H4 Heading</span>
  //       <br />
  //       <span className="text-sm font-bold mt-4 mb-2">H5 Heading</span>
  //       <br />
  //       <span className="text-xs font-bold mt-4 mb-2">H6 Heading</span>
  //     </>
  //   ),
  // },
  {
    id: 1,
    heading: "H1 TEXT",
    syntax: "# H1 Heading ",
    output: (
      <>
        <span className="text-4xl font-bold mt-4 mb-2">H1 Heading</span>
      </>
    ),
  },
  {
    id: 2,
    heading: "H2 TEXT",
    syntax: "## H2 Heading ",
    output: (
      <>
        <span className="text-3xl font-bold mt-4 mb-2">H2 Heading</span>
      </>
    ),
  },
  {
    id: 3,
    heading: "H3 TEXT",
    syntax: "### H3 Heading ",
    output: (
      <>
        <span className="text-xl font-bold mt-4 mb-2">H3 Heading</span>
      </>
    ),
  },
  {
    id: 4,
    heading: "H4 TEXT",
    syntax: "#### H4 Heading ",
    output: (
      <>
        <span className=" font-bold mt-4 mb-2">H4 Heading</span>
      </>
    ),
  },
  {
    id: 5,
    heading: "H5 TEXT",
    syntax: "##### H5 Heading ",
    output: (
      <>
        <span className="text-sm font-bold mt-4 mb-2">H5 Heading</span>
      </>
    ),
  },
  {
    id: 6,
    heading: "H6 TEXT",
    syntax: "###### H6 Heading ",
    output: (
      <>
        <span className="text-xs font-bold mt-4 mb-2">H6 Heading</span>
      </>
    ),
  },
  {
    id: 7,
    heading: "BOLD TEXT",
    syntax: "This text is **bold**",
    output: (
      <>
        This text is <span className="font-bold">bold</span>
      </>
    ),
  },
  {
    id: 8,
    heading: "ITALIC TEXT",
    syntax: "This text is _italic_",
    output: (
      <>
        This text is <span className="italic">italic</span>
      </>
    ),
  },
  {
    id: 9,
    heading: "STRIKE-THROUGH TEXT",
    syntax: "This text is ~~strikethrough~~",
    output: (
      <>
        This text is <span className="line-through">strikethrough</span>
      </>
    ),
  },

  {
    id: 10,
    heading: "NESTING OF TWO TYPES",
    syntax: "**This text is bold and _italic_**",
    output: (
      <>
        <span className="font-bold">
          This text is bold and <span className="italic">italic</span>
        </span>
      </>
    ),
  },
  {
    id: 11,
    heading: "NESTING OF THREE TYPES",
    syntax: "**This bold text is _italic_ and ~~strikethrough~~**",
    output: (
      <>
        <span className="font-bold">
          This bold text is <span className="italic">italic</span> and{" "}
          <span className="line-through">strikethrough</span>
        </span>
      </>
    ),
  },
  {
    id: 12,
    heading: "LINK",
    syntax: "[This is a link that redirects to Google](https://www.google.com)",
    output: (
      <>
        <a
          className="text-blue-400 hover:text-blue-500 transition-all duration-[250ms]"
          href="https://www.google.com"
          target="_blank"
        >
          This is a link that redirects to Google
        </a>
      </>
    ),
  },
  {
    id: 13,
    heading: "UNORDERED LIST",
    syntax:
      "This is an unordered list : \n- This is an unordered list item \n- This is another unordered list item",
    output: (
      <>
        This is an unordered list :{"\n"}
        <ul className="list-disc ml-8">
          <li>This is an unordered list item</li>
          <li>This is another unordered list item</li>
        </ul>
      </>
    ),
  },
  {
    id: 14,
    heading: "ORDERED LIST",
    syntax:
      "This is an unordered list : \n+ This is an ordered list item \n+ This is another ordered list item",
    output: (
      <>
        This is an ordered list :{"\n"}
        <ul className="list-decimal ml-8">
          <li>This is an ordered list item</li>
          <li>This is another ordered list item</li>
        </ul>
      </>
    ),
  },
  {
    id: 15,
    heading: "CODE BLOCK",
    syntax: `\`\`\`
  console.log("Triple backticks inside a code block - \`\`\`");
\`\`\``,
    output: (
      <>
        <pre className="bg-gray-800 text-white p-4 rounded-md overflow-auto">
          <code>
            console.log("Triple backticks inside a code block - "```");
          </code>
        </pre>
      </>
    ),
  },
];
