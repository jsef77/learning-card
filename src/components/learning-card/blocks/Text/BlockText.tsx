import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.bubble.css";
import { useState } from "react";

interface Props {
  editMode: boolean;
  style?: React.CSSProperties;
  id?: string;
}

function BlockText({ editMode, style, id }: Props) {
  const [value, setValue] = useState("");

  return (
    <ReactQuill
      className="block-text"
      id={id}
      theme="bubble"
      value={value}
      onChange={setValue}
      style={{ ...style, boxShadow: editMode ? "var(--shadow-1)" : "none" }}
      readOnly={!editMode}
      placeholder="Enter text..."
    />
  );
}

export default BlockText;
