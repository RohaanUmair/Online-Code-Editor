import React, { Dispatch, SetStateAction } from 'react';
import { IoIosClose } from 'react-icons/io';

function Terminal({ setOpenTerminal }: { setOpenTerminal: Dispatch<SetStateAction<boolean>> }) {
    return (
        <div className='h-full w-full z-50 bg-zinc-950 border-t-2 border-black'>
            <div className='h-10 bg-zinc-900 text-white flex justify-between items-center px-12'>
                <h3>Console</h3>

                <div className='flex items-center h-full gap-2'>
                    <button
                        className="rounded-sm px-4 h-3/4 text-[13px] bg-zinc-700 hover:bg-zinc-600 active:bg-zinc-500"
                    >
                        Clear
                    </button>
                    <IoIosClose onClick={() => setOpenTerminal(false)} className='text-4xl hover:bg-zinc-800 active:bg-zinc-700 cursor-pointer' />
                </div>
            </div>

            <div></div>
        </div>
    )
}

export default Terminal;