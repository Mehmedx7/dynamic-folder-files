import React, { useState } from "react";
import FolderTree from "./components/FolderTree";

const App = () => {
  const [data, setData] = useState({
    Documents: {
      "Document1.jpg": "file",
      "Document2.jpg": "file",
      "Document3.jpg": "file",
    },
    Desktop: {
      "Screenshot1.jpg": "file",
      "videopal.mp4": "file",
    },
    Downloads: {
      Drivers: {
        "Printerdriver.dmg": "file",
        "cameradriver.dmg": "file",
      },
    },
    Applications: {
      "Webstorm.dmg": "file",
      "Pycharm.dmg": "file",
      "FileZila.dmg": "file",
      "Mattermost.dmg": "file",
    },
    "chromedriver.dmg": "file",
  });

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-950 to-gray-950">
      <h1 className="text-4xl font-extrabold text-blue-600 mb-8">
        File & Folder Explorer
      </h1>
      <FolderTree data={data} setData={setData} />
    </div>
  );
};

export default App;
