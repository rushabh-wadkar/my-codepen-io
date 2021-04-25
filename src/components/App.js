import Editor from "./Editor";
import { useEffect, useState } from "react";
import FootLink from "./FootLink";

const App = () => {
  const [htmlValue, setHtmlValue] = useState("");
  const [cssValue, setCssValue] = useState("");
  const [jsValue, setJsValue] = useState("");
  const [srcDoc, setSrcDoc] = useState("");

  useEffect(() => {
    const timer = setTimeout(
      setSourceDocTemplate,
      250,
      `
    <html>
        <head>
            <style>
                ${cssValue}
            </style>
        </head>
        <body>
                ${htmlValue}
                <script>
                    ${jsValue}
                </script>
        </body>
    </html>
`
    );

    return () => {
      clearTimeout(timer);
    };
  }, [htmlValue, cssValue, jsValue]);

  function setSourceDocTemplate(str) {
    setSrcDoc(str);
  }

  return (
    <div className="container">
      <div className="pane top-pane">
        <Editor
          language="xml"
          title="HTML"
          value={htmlValue}
          setValue={setHtmlValue}
        ></Editor>
        <Editor
          language="css"
          title="CSS"
          value={cssValue}
          setValue={setCssValue}
        ></Editor>
        <Editor
          language="js"
          title="JS"
          value={jsValue}
          setValue={setJsValue}
        ></Editor>
      </div>
      <div className="pane">
        <iframe
          srcDoc={srcDoc}
          width="100%"
          height="100%"
          title="output"
          sandbox="allow-scripts"
          frameBorder="0"
        ></iframe>
      </div>
      <FootLink />
    </div>
  );
};

export default App;
