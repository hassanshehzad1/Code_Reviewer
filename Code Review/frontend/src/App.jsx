import "./App.css";
import "prismjs/themes/prism-tomorrow.css";
import Editior from "react-simple-code-editor";
import prism from "prismjs";
import { useEffect, useState } from "react";
import axios from "axios";
import Markdown from "react-markdown";
import rehypeHighlight from 'rehype-highlight';
import "highlight.js/styles/github-dark.css";

function App() {
  useEffect(() => {
    prism.highlightAll();
  },[]);

  const [code, setCode] = useState(`function divide() {
    return a+ b;
    }`);


    const [review, setReview] = useState('');

  async function getResponse() {
    try {
      const res = await axios.post("http://localhost:3000/ai/get-response", {code});
      if (res) {
           setReview(res?.data);
          }
    } catch (error) {
          setReview(error?.message);
      console.error(error?.message);
    }
  }
  return (
    <>
         <h1>Sabr kar btata hoo--</h1>
      <main className="Main-Section">
        {/* Left Side */}
        <div className="left">
          {/* Code */}
          <div className="User-Code">
            <Editior
              value={code}
              onValueChange={(code) => setCode(code)}
              highlight={(code) =>
                prism.highlight(code, prism.languages.javascript, "javascript")
              }
              padding={10}
              style={{
                fontFamily: '"Fira code ", "Fira mono", monospace ',
                fontSize: 17,
                border: "1px solid black",
                borderRadius: "5px",
                width: "100%",
                height: "100%",
              }}
            />
          </div>
          <button className="Button"  onClick={getResponse}>Review </button>
        </div>
        <div className="right">
          <div className="Code Review">
            <Markdown
              rehypePlugins={rehypeHighlight}
            >{review}</Markdown>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
