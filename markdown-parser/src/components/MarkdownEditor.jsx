import { markdownParser } from "../functions/markdown";

export const MarkdownEditor = ({
  isDarkMode,
  input,
  setInput,
  toggleEditor,
}) => {
  return (
    <div className="grid grid-cols-12 items-center w-full h-full relative">
      <div
        className={`tracking-wider font-light col-span-6 max-md:col-span-full flex items-center justify-center h-full max-md:h-[50vh] p-10 pt-12 w-full transition-all duration-500 ${
          isDarkMode ? "bg-bgGray" : "bg-gray-100"
        }`}
      >
        <textarea
          placeholder="Enter input markdown string..."
          className={`h-full w-full rounded-md ring-0 outline-none resize-none p-5 transition-all duration-500 ease-in-out placeholder:max-md:text-sm max-md:text-sm ${
            isDarkMode
              ? "bg-bgGray text-gray-50 placeholder:text-gray-400"
              : "bg-gray-100 text-black placeholder:text-gray-600"
          }`}
          onChange={(e) => setInput(e.target.value)}
          value={input}
        ></textarea>
      </div>
      <div
        className={`h-full max-md:h-[50vh] overflow-x-auto col-span-6 max-md:col-span-full flex items-center justify-center p-10 pt-12 w-full transition-all duration-500 ${
          isDarkMode ? "bg-bgLightGray" : "bg-bgWhite"
        }`}
        id="output"
      >
        <div
          id="final-content"
          className={`tracking-wider font-light overflow-scroll overflow-x-auto h-full w-full p-5 transition-all max-md:text-sm duration-500  ${
            isDarkMode ? "text-gray-50" : "text-black"
          }`}
        >
          {markdownParser(input) ? (
            markdownParser(input)
          ) : (
            <span
              className={`max-md:text-sm ${
                isDarkMode ? "text-gray-400" : "text-gray-500"
              }`}
            >
              Output HTML will be shown here...
            </span>
          )}
        </div>
      </div>
      <button
        onClick={toggleEditor}
        className="absolute tracking-wide top-2 right-0 text-xs px-6 py-2 text-red-500 transition-all hover:text-red-600"
      >
        Stop editing
      </button>
    </div>
  );
};
