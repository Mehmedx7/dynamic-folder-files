import React from "react";
import Node from "./Node";

const FolderTree = ({ data, setData }) => {
  return (
    <div className="w-full max-w-3xl bg-white rounded-lg shadow-lg p-6 border border-gray-200">
      {Object.keys(data).map((key) => (
        <Node
          key={key}
          name={key}
          content={data[key]}
          parentData={data}
          setParentData={setData}
          depth={0}
        />
      ))}
    </div>
  );
};

export default FolderTree;
