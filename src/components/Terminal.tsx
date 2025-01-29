import React, { Dispatch, SetStateAction } from 'react';
import { IoIosClose } from 'react-icons/io';

interface Props {
    setOpenTerminal: Dispatch<SetStateAction<boolean>>;
    logs: string[];
    setLogs: Dispatch<SetStateAction<string[]>>;
}

function Terminal({ setOpenTerminal, logs, setLogs }: Props) {
    return (
        <div className='h-[43dvh] w-full z-50 bg-zinc-950 border-t-2 border-black flex flex-col'>
            <div className='h-10 bg-zinc-900 text-white flex justify-between items-center px-12'>
                <h3>Console</h3>

                <div className='flex items-center h-full gap-2'>
                    <button
                        className="rounded-sm px-4 h-3/4 text-[13px] bg-zinc-700 hover:bg-zinc-600 active:bg-zinc-500"
                        onClick={() => setLogs([])}
                    >
                        Clear
                    </button>
                    <IoIosClose onClick={() => setOpenTerminal(false)} className='text-4xl hover:bg-zinc-800 active:bg-zinc-700 cursor-pointer' />
                </div>
            </div>

            <div className='text-white p-4 overflow-y-scroll h-full'>
                {logs.length ? (
                    logs.map((log, index) => {
                        return (
                            <p key={index} className='text-sm border-b py-2 border-[#222]'>{log}</p>
                        )
                    })
                ) : (
                    <></>
                )}
            </div>
        </div>
    );
}

export default Terminal;
