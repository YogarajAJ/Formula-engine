import React, { useState } from "react";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { parseFormula } from "./utils/parseFormula";

const CodeEditor = ({ variables }) => {
  const [output, setOutput] = useState("");

  const editor = useEditor({
    extensions: [StarterKit],
    content: `<p>Sum is {{variables.a + variables.b}} and Area is {{variables.a * variables.b}}</p>`,
  });

  const handleEvaluate = () => {
    const rawText = editor.getText();
    const evaluated = parseFormula(rawText, variables);
    setOutput(evaluated);
  };

  return (
    <div style={{ padding: "1rem" }}>
      <EditorContent editor={editor} />
      <button onClick={handleEvaluate} style={{ marginTop: "1rem" }}>
        Evaluate
      </button>
      {output && (
        <div style={{ marginTop: "1rem", whiteSpace: "pre-wrap" }}>
          <strong>Output:</strong> {output}
        </div>
      )}
    </div>
  );
}

export default CodeEditor;