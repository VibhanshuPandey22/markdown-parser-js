import { useState } from "react";
import { DarkModeToggle } from "./components/DarkModeToggle";
import { HelpModal } from "./components/HelpModal";
import { HomeScreen } from "./components/HomeScreen";
import { MarkdownEditor } from "./components/MarkdownEditor";

function App() {
  const [input, setInput] = useState("");
  const [showEditor, setShowEditor] = useState(false);
  const [showHelp, setShowHelp] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleEditor = () => {
    setInput("");
    setShowEditor(!showEditor);
  };

  const toggleHelp = () => {
    setShowHelp(!showHelp);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <>
      <DarkModeToggle isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <main
        className={`h-screen flex flex-col items-center justify-center transition-all duration-500 ease-in-out ${
          isDarkMode ? "bg-bgGray text-slate-200" : "bg-bgWhite text-gray-800"
        }`}
      >
        {!showEditor && (
          <HomeScreen
            isDarkMode={isDarkMode}
            toggleEditor={toggleEditor}
            toggleHelp={toggleHelp}
          />
        )}

        {showEditor && (
          <MarkdownEditor
            isDarkMode={isDarkMode}
            input={input}
            setInput={setInput}
            toggleEditor={toggleEditor}
          />
        )}

        {showHelp && (
          <HelpModal isDarkMode={isDarkMode} toggleHelp={toggleHelp} />
        )}
      </main>
    </>
  );
}

export default App;
