export const tokensToComponents = (tokens) =>
  tokens.map((token, index) => {
    switch (token.type) {
      case "bold":
        return (
          <span key={index} className="font-bold">
            {tokensToComponents(token.content)}
          </span>
        );
      case "italic":
        return (
          <span key={index} className="italic">
            {tokensToComponents(token.content)}
          </span>
        );
      case "strikeThrough":
        return (
          <span key={index} className="line-through">
            {tokensToComponents(token.content)}
          </span>
        );
      case "h1":
        return (
          <span className="text-4xl font-bold mt-4 mb-2" key={index}>
            {tokensToComponents(token.content)}
          </span>
        );
      case "h2":
        return (
          <span className="text-3xl font-bold mt-4 mb-2" key={index}>
            {tokensToComponents(token.content)}
          </span>
        );
      case "h3":
        return (
          <span className="text-xl font-bold mt-4 mb-2" key={index}>
            {tokensToComponents(token.content)}
          </span>
        );
      case "h4":
        return (
          <span className="font-bold mt-4 mb-2" key={index}>
            {tokensToComponents(token.content)}
          </span>
        );
      case "h5":
        return (
          <span className="text-sm font-bold mt-4 mb-2" key={index}>
            {tokensToComponents(token.content)}
          </span>
        );
      case "h6":
        return (
          <span className="text-xs font-bold mt-4 mb-2" key={index}>
            {tokensToComponents(token.content)}
          </span>
        );
      case "link":
        return (
          <a
            className="text-blue-400 hover:text-blue-500 transition-all duration-[250ms]"
            key={index}
            href={token.content[0].url}
            target="_blank"
          >
            {token.content[0].name}
          </a>
        );
      case "unorderedList":
        return (
          <ul className="list-disc ml-8" key={index}>
            {token.content.map((listItem, id) => (
              <li key={id}>{tokensToComponents(listItem.content)}</li>
            ))}
          </ul>
        );
      case "orderedList":
        return (
          <ol className="list-decimal ml-8" key={index}>
            {token.content.map((listItem, id) => (
              <li key={id}>{tokensToComponents(listItem.content)}</li>
            ))}
          </ol>
        );
      case "plain":
        return <span key={index}>{token.content}</span>;
      case "newLine":
        return <br key={index} />;
      case "codeBlock":
        return (
          <pre
            key={index}
            className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto"
          >
            <code className="whitespace-pre">{token.content}</code>
          </pre>
        );
      default:
        return <span key={index}>{token.content}</span>;
    }
  });
