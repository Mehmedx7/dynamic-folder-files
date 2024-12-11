import React, { useState } from "react";

const Node = ({ name, content, parentData, setParentData, depth }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState(name);

  const toggleExpand = () => setIsExpanded(!isExpanded);

  const isFolder = typeof content === "object";

  const handleEdit = () => {
    const updatedData = { ...parentData };
    updatedData[newName] = updatedData[name];
    delete updatedData[name];
    setParentData(updatedData);
    setIsEditing(false);
  };

  const handleDelete = () => {
    const updatedData = { ...parentData };
    delete updatedData[name];
    setParentData(updatedData);
  };

  const handleAdd = (isFolder) => {
    const newItem = prompt(`Enter name for new ${isFolder ? "folder" : "file"}`);
    if (newItem) {
      const updatedData = { ...parentData };
      updatedData[name] = {
        ...content,
        [newItem]: isFolder ? {} : "file",
      };
      setParentData(updatedData);
    }
  };

  return (
    <div className={`pl-${depth * 4} mt-2`}>
      <div
        className="flex items-center justify-between p-2 rounded-md bg-gray-50 hover:bg-gray-100 border border-gray-200"
      >
        <div className="flex items-center cursor-pointer" onClick={toggleExpand}>
          {isFolder ? (
            <span className="text-lg font-bold mr-2">
              {isExpanded ? "📂" : "📁"}
            </span>
          ) : (
            <span className="text-lg font-bold mr-2">📄</span>
          )}
          {isEditing ? (
            <input
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
              onBlur={handleEdit}
              autoFocus
              className="border rounded-md px-2 py-1 w-40"
            />
          ) : (
            <span onDoubleClick={() => setIsEditing(true)} className="cursor-pointer">
              {name}
            </span>
          )}
        </div>

        <div className="flex space-x-2">
          {isFolder && (
            <button
              onClick={() => handleAdd(true)}
              className="text-xs bg-blue-500 text-white rounded-md px-2 py-1 hover:bg-blue-600"
            >
              ➕ Folder
            </button>
          )}
          <button
            onClick={() => handleAdd(false)}
            className="text-xs bg-green-500 text-white rounded-md px-2 py-1 hover:bg-green-600"
          >
            ➕ File
          </button>
          <button
            onClick={handleDelete}
            className="text-xs bg-red-500 text-white rounded-md px-2 py-1 hover:bg-red-600"
          >
            🗑️ Delete
          </button>
        </div>
      </div>

      {isFolder && isExpanded && (
        <div className="pl-4 mt-2 border-l border-gray-300">
          {Object.keys(content).map((key) => (
            <Node
              key={key}
              name={key}
              content={content[key]}
              parentData={content}
              setParentData={(updated) => {
                const updatedData = { ...parentData, [name]: updated };
                setParentData(updatedData);
              }}
              depth={depth + 1}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Node;
