import React, { useRef, useState } from "react";
import ReactMarkdown from "react-markdown";
import { PDFExport, savePDF } from "@progress/kendo-react-pdf";

export function App() {
  const [markdown, setMarkdown] = useState("## markdown preview");

  const pdfExportComponent = useRef(null);

  const handleSaveToPdf = (event) => {
    pdfExportComponent.current.save();
  };

  return (
    <main>
      <section className="markdown">
        <textarea
          className="input"
          value={markdown}
          onChange={(e) => setMarkdown(e.target.value)}
        />
        <PDFExport ref={pdfExportComponent} paperSize="A4">
          <article className="result">
            <ReactMarkdown>{markdown}</ReactMarkdown>
          </article>
        </PDFExport>
        <div className="saveContainer">
          <button className="save" onClick={handleSaveToPdf}>
            Save to PDF
          </button>
        </div>
      </section>
    </main>
  );
}

export default App;
