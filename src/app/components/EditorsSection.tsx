import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
import Editor from './Editor';

interface Props {
    html: string;
    css: string;
    javaScript: string;

    setHtml: Dispatch<SetStateAction<string>>;
    setCss: Dispatch<SetStateAction<string>>;
    setJavaScript: Dispatch<SetStateAction<string>>;

    selectedEditor: 'html' | 'css' | 'js';
    setSelectedEditor: Dispatch<SetStateAction<'html' | 'css' | 'js'>>;
}

function EditorsSection({ html, css, javaScript, setHtml, setCss, setJavaScript, selectedEditor, setSelectedEditor }: Props) {
    return (
        <>
            <div className="flex justify-between     max-md:hidden">
                <Editor type="HTML" value={html} setValue={setHtml} />
                <Editor type="CSS" value={css} setValue={setCss} />
                <Editor type="JavaScript" value={javaScript} setValue={setJavaScript} />
            </div>

            <div>
                <div className='md:hidden flex text-white gap-2'>
                    <button
                        className={`bg-zinc-900 px-4 py-2 ${selectedEditor == 'html' && '!bg-zinc-800'}`}
                        onClick={() => setSelectedEditor('html')}
                    >
                        HTML
                    </button>

                    <button
                        className={`bg-zinc-900 px-4 py-2 ${selectedEditor == 'css' && '!bg-zinc-800'}`}
                        onClick={() => setSelectedEditor('css')}
                    >
                        CSS
                    </button>

                    <button
                        className={`bg-zinc-900 px-4 py-2 ${selectedEditor == 'js' && '!bg-zinc-800'}`}
                        onClick={() => setSelectedEditor('js')}
                    >
                        JavaScript
                    </button>
                </div>

                <div className='md:hidden h-52'>
                    {selectedEditor === 'html' &&
                        <Editor type="HTML" value={html} setValue={setHtml} />
                    }
                    {selectedEditor === 'css' &&
                        <Editor type="CSS" value={css} setValue={setCss} />
                    }
                    {selectedEditor == 'js' &&
                        <Editor type="JavaScript" value={javaScript} setValue={setJavaScript} />
                    }
                </div>
            </div>
        </>
    )
}

export default EditorsSection;