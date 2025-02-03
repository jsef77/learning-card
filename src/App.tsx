import LearningCard from "./components/learning-card/LearningCard";
import NavBar from "./components/nav/NavBar";
import { useState } from "react";

export default function MyApp() {
  const [editMode, setEditMode] = useState(true);

  return (
    <>
      <NavBar editMode={editMode} setEditMode={setEditMode} />
      <LearningCard editMode={editMode} />
    </>
  );
}
