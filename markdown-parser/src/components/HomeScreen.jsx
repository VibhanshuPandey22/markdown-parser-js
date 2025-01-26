export const HomeScreen = ({ isDarkMode, toggleEditor, toggleHelp }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="pb-5 flex items-center justify-center max-sm:px-7 text-center flex-col">
        <h1 className="text-xl sm:text-2xl lg:text-4xl py-2  font-medium tracking-wide ">
          <span>IN BROWSER</span>{" "}
          <span
            className={`transition-all duration-500 ${
              isDarkMode ? "text-blue-500" : "text-blue-700"
            }`}
          >
            MARK-DOWN
          </span>{" "}
          <span>EDITOR</span>
        </h1>
        <p
          className={`text-xs sm:text-sm lg:text-lg py-1 ${
            isDarkMode ? "text-gray-400" : "text-gray-800"
          } tracking-wide font-light transition-all duration-500`}
        >
          Live preview your changes while editing markdown text to HTML . . .
        </p>
      </div>

      <div className="flex max-md:flex-col justify-center items-center gap-3 max-md:mt-0 mt-2">
        <button
          onClick={toggleEditor}
          className="text-xs lg:text-sm 2xl:text-lg px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all duration-300"
        >
          Open Editor
        </button>
        <button
          onClick={toggleHelp}
          className={`text-xs lg:text-sm 2xl:text-lg px-4 py-2 rounded-full transition-all duration-500 ${
            isDarkMode
              ? "bg-gray-600 text-white hover:bg-gray-700"
              : "bg-bgGray text-white hover:bg-[#242222]"
          }`}
        >
          View Syntax
        </button>
      </div>
    </div>
  );
};
