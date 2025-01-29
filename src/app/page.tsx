'use client';
import { VscEditorLayout } from "react-icons/vsc";
import { SiCss3, SiHtml5, SiJavascript } from "react-icons/si";
import DisplaySection from "../components/DisplaySection";
import { useEffect, useState } from "react";
import Terminal from "../components/Terminal";
import EditorsSection from "../components/EditorsSection";

export default function Home() {
  const [html, setHtml] = useState<string>('');
  const [css, setCss] = useState<string>('');
  const [javaScript, setJavaScript] = useState<string>('');

  const [srcDoc, setSrcDoc] = useState<string>('');

  const [openTerminal, setOpenTerminal] = useState<boolean>(false);

  const [logs, setLogs] = useState<string[]>([]);

  const [selectedEditor, setSelectedEditor] = useState<'html' | 'css' | 'js'>('html');


  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
        <html>
          <body>${html}</body>
          <style>${css}</style>
          <script>
            (function() {
              ['log', 'error', 'warn'].forEach((method) => {
                const oldMethod = console[method];
                console[method] = function(...args) {
                  parent.postMessage({ type: method, messages: args }, '*');
                };
              });
            })();
            ${javaScript}
          </script>
        </html>
      `);
    }, 250);

    return () => clearTimeout(timeout);
  }, [html, css, javaScript]);

  useEffect(() => {
    console.log("Logs updated:", logs);
  }, [logs]);


  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (['log', 'error', 'warn'].includes(event.data.type)) {
        setLogs((prevLogs) => [...prevLogs, ...event.data.messages.map(String)]);
      }
    };

    window.addEventListener('message', handleMessage);
    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, [logs]);



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
        <div className="h-full flex flex-col w-full">
          
          <div className={`${!openTerminal && 'hidden'} h-full`}>
            <Terminal setOpenTerminal={setOpenTerminal} logs={logs} setLogs={setLogs} />
          </div>

          <div className={`${openTerminal && 'hidden'} h-full`}>
            <DisplaySection srcDoc={srcDoc} />
          </div>
        </div>

        {!openTerminal && (
          <div className="bg-zinc-800 text-white py-1 px-4">
            <button
              className="rounded-sm px-2 py-[2px] text-[13px] bg-zinc-700 hover:bg-zinc-600 active:bg-zinc-500"
              onClick={() => setOpenTerminal(true)}
            >
              Console
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
