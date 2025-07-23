import React from "react";
import CodeEditor from "./CodeEditor";

const App = () => {
  const dynamicVars = {
    a: 10,
    b: 5,
    radius: 3,
  };
  return (
    <div style={{ padding: "20px" }}>
      <CodeEditor variables={dynamicVars} />
    </div>
  );
}

export default App;
