'use client'
import { VscEditorLayout } from "react-icons/vsc";
import EditorSection from "./components/EditorSection";
import { SiCss3, SiHtml5, SiJavascript } from "react-icons/si";
import DisplaySection from "./components/DisplaySection";
import { useEffect, useState } from "react";

export default function Home() {
  const [html, setHtml] = useState<string>('');
  const [css, setCss] = useState<string>('');
  const [javaScript, setJavaScript] = useState<string>('');

  const [srcDoc, setSrcDoc] = useState<string>('');

  useEffect(() => {
    setSrcDoc(`
        <html>
          <body>
            ${html}
          </body>
          <style>
            ${css}
          </style>
          <script>
            ${javaScript}
          </script>
        </html>
        `);
  }, [html, css, javaScript]);


  return (
    <div className="w-screen h-screen bg-black px-1 flex flex-col">
      <div className="flex flex-col px-6 py-2">
        <h1 className="text-white text-4xl flex items-center gap-3 pt-2 font-semibold"><VscEditorLayout />   Online Code Editor</h1>

        <div className="text-white pl-12 flex items-center gap-4 font-thin text-xl">
          <p className="flex items-center gap-1">HTML <SiHtml5 className="text-orange-600" /></p>
          <p className="flex items-center gap-1">Css <SiCss3 className="text-blue-500" /></p>
          <p className="flex items-center gap-1">JavaScript <SiJavascript className="text-yellow-500" /></p>
        </div>

      </div>


      <div className="flex justify-between">
        <EditorSection type="HTML" value={html} setValue={setHtml} />
        <EditorSection type="CSS" value={css} setValue={setCss} />
        <EditorSection type="JavaScript" value={javaScript} setValue={setJavaScript} />
      </div>


      <div className="h-full">
        <DisplaySection srcDoc={srcDoc} />
      </div>
    </div>
  )
}
