import cssImg from "../imgs/css.png";
import htmlImg from "../imgs/html.png";
import jsImg from "../imgs/js.png";

import { Controlled as CodeEditor } from "react-codemirror2";
import { useState } from "react";
import { BsArrowsAngleExpand, BsArrowsAngleContract } from "react-icons/bs";

const Editor = ({ language, title, value, setValue }) => {
  const [collapsed, setCollapsed] = useState(false);

  function returnImage() {
    let imgValue = null;
    if (language === "xml") imgValue = htmlImg;
    else if (language === "css") imgValue = cssImg;
    else if (language === "js") imgValue = jsImg;

    return imgValue;
  }

  const CODE_EDITOR_OPTIONS = {
    lineWrapping: true,
    lint: true,
    mode: language,
    theme: "material",
    lineNumbers: true,
  };

  function collapseButtonHandler() {
    setCollapsed((value) => !value);
  }

  return (
    <div className={`editor-container ${collapsed ? "collapsed" : ""}`}>
      <div className="editor-title">
        <div className="editor-title-lang">
          <img className="editor-icon" src={returnImage()} />
          {title}
        </div>
        <button class="btn" onClick={collapseButtonHandler}>
          {collapsed ? <BsArrowsAngleContract /> : <BsArrowsAngleExpand />}
        </button>
      </div>
      {/* <div className="editor-content"> */}
      <CodeEditor
        className="code-mirror-wrapper"
        value={value}
        options={CODE_EDITOR_OPTIONS}
        onBeforeChange={(editor, data, value) => {
          console.log("Before", value);
          setValue(value);
        }}
      />
      {/* </div> */}
    </div>
  );
};

export default Editor;
