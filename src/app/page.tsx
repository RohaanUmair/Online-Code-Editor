'use client'
import { VscEditorLayout } from "react-icons/vsc";
import { SiCss3, SiHtml5, SiJavascript } from "react-icons/si";
import DisplaySection from "./components/DisplaySection";
import { useEffect, useState } from "react";
<<<<<<< HEAD
import Terminal from "./components/Terminal";
import Editor from "./components/Editor";
import EditorsSection from "./components/EditorsSection";
=======
>>>>>>> ae0b1ae37fba175f685db14078b344bb6e6346b0

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

<<<<<<< HEAD
  const [openTerminal, setOpenTerminal] = useState<boolean>(false);

  const [selectedEditor, setSelectedEditor] = useState<'html' | 'css' | 'js'>('html');
=======
>>>>>>> ae0b1ae37fba175f685db14078b344bb6e6346b0

  return (
    <div className="w-screen h-screen bg-black px-1 flex flex-col">
      <div className="flex flex-col px-6 py-2 border-b border-[#777] mb-1">
        <h1 className="text-white text-3xl flex items-center gap-3 pt-2 font-semibold"><VscEditorLayout />   Online Code Editor</h1>

        <div className="text-white pl-12 flex items-center gap-4 font-thin text-xl">
          <p className="flex items-center gap-1">HTML <SiHtml5 className="text-orange-600" /></p>
          <p className="flex items-center gap-1">Css <SiCss3 className="text-blue-500" /></p>
          <p className="flex items-center gap-1">JavaScript <SiJavascript className="text-yellow-500" /></p>
        </div>

      </div>


<<<<<<< HEAD
      <EditorsSection
        html={html}
        css={css}
        javaScript={javaScript}
        setHtml={setHtml}
        setCss={setCss}
        setJavaScript={setJavaScript}
        selectedEditor={selectedEditor}
        setSelectedEditor={setSelectedEditor}
      />


      <div className="h-full flex flex-col">
        <div className="h-full">
          {
            openTerminal ? (
              <Terminal setOpenTerminal={setOpenTerminal} />
            ) : (
              <DisplaySection srcDoc={srcDoc} />
            )
          }
        </div>


        {
          !openTerminal && (
            <div className="bg-zinc-800 text-white py-1 px-4">
              <button
                className="rounded-sm px-2 py-[2px] text-[13px] bg-zinc-700 hover:bg-zinc-600 active:bg-zinc-500"
                onClick={() => setOpenTerminal(true)}
              >
                Console
              </button>
            </div>
          )
        }
=======
      <div className="flex justify-between">
        <EditorSection type="HTML" value={html} setValue={setHtml} />
        <EditorSection type="CSS" value={css} setValue={setCss} />
        <EditorSection type="JavaScript" value={javaScript} setValue={setJavaScript} />
      </div>


      <div className="h-full">
        <DisplaySection srcDoc={srcDoc} />
>>>>>>> ae0b1ae37fba175f685db14078b344bb6e6346b0
      </div>
    </div>
  )
}
