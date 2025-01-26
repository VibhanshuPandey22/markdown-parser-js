import { mdSyntaxHelp } from "../constants/mdSyntaxHelp";

export const HelpModal = ({ isDarkMode, toggleHelp }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center transition-all duration-500 ease-in-out">
      <div
        className={`relative rounded-lg shadow-lg w-full h-full p-8 overflow-y-auto transition-all duration-500 ease-in-out ${
          isDarkMode ? "bg-bgGray text-slate-200" : "bg-bgWhite text-gray-800"
        }`}
      >
        <div className="flex justify-end">
          <button
            onClick={toggleHelp}
            className="text-xs text-red-500 hover:text-red-600 transition-all duration-500 top-4 right-4 absolute"
          >
            Close
          </button>
        </div>

        <h2 className="text-4xl max-md:text-3xl max-sm:text-2xl font-semibold mb-8 max-md:mb-5 text-center tracking-wider pb-5 mt-5">
          <span
            className={`transition-all duration-500 ${
              isDarkMode ? "text-blue-500" : "text-blue-700"
            }`}
          >
            MARKDOWN
          </span>{" "}
          SYNTAX
        </h2>

        <div className="mb-10">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 ">
            {mdSyntaxHelp.map((listItem) => (
              <div
                key={listItem.id}
                className={`rounded-xl px-6 pt-4 pb-5 drop-shadow-sm border-none transition-all duration-500 overflow-auto ${
                  isDarkMode ? "bg-bgLighterGray" : "bg-gray-50"
                }`}
              >
                <h4
                  className={`font-semibold text-xl max-md:text-lg tracking-wide mb-2 text-right transition-all duration-500 ${
                    isDarkMode ? "text-slate-200" : "text-gray-800"
                  }`}
                >
                  {listItem.heading}
                </h4>
                <hr
                  className={`mb-4 w-full transition-all duration-500 ${
                    isDarkMode ? "opacity-10" : "border-bgGray opacity-10"
                  }`}
                />

                <div className="flex flex-col gap-3 text-sm">
                  <p className="flex flex-col gap-2">
                    <span
                      className={`transition-all duration-500 ${
                        isDarkMode ? "text-blue-500" : "text-blue-700"
                      } font-medium`}
                    >
                      Syntax :
                    </span>
                    <pre
                      className={`px-3 py-2 rounded-md w-fit transition-all duration-500 ${
                        isDarkMode
                          ? "bg-bgGray text-slate-200"
                          : "bg-bgWhite text-gray-800"
                      }`}
                    >
                      <code>{listItem.syntax}</code>
                    </pre>
                  </p>
                  <p className="flex flex-col gap-2">
                    <span
                      className={`transition-all duration-500 ${
                        isDarkMode ? "text-blue-500" : "text-blue-700"
                      } font-medium`}
                    >
                      Output :
                    </span>
                    <div
                      className={`px-3 py-2 rounded-md w-fit transition-all duration-500 ${
                        isDarkMode
                          ? "bg-bgGray text-slate-200"
                          : "bg-bgWhite text-gray-800"
                      }`}
                    >
                      {listItem.output}
                    </div>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-blue-500 mb-4">
            Changelog
          </h3>
          <ul className="list-disc pl-5">
            <li>v1.0 - Initial release with live Markdown editing.</li>
            <li>v1.1 - Added Help Section and improved responsiveness.</li>
            <li>
              v1.2 - Replaced modal with a dedicated Help page and added syntax
              cards.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
