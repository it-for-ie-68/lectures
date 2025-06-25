import FileBrowser from "./components/FileBrowser";
import useData from "./lib/useData";

const youtubeURL =
  "https://www.youtube.com/playlist?list=PLNGLpHQhvGrtw4kWpjWrB7FZY7ZBXJvG8";
function App() {
  useData();
  return (
    <div className="container mx-auto mt-4">
      <div className="flex flex-col gap-3 items-start lg:flex-row lg:items-center lg:justify-between">
        <div className="font-extrabold text-transparent text-6xl lg:text-8xl bg-clip-text bg-gradient-to-r from-purple-500 to-teal-400">
          IT-for-IE 68
        </div>
        <div className="flex gap-2">
          <a
            href={youtubeURL}
            target="_blank"
            className="border px-2 py-1 rounded-lg bg-red-600 text-white text-sm lg:text-lg font-bold"
          >
            VDO Lectures
          </a>
        </div>
      </div>
      <div className="mt-8">
        <FileBrowser />
      </div>
    </div>
  );
}

export default App;
