import React, { ReactElement } from 'react'
import { IoIosClose } from 'react-icons/io';
import { SiCss3, SiHtml5, SiJavascript } from 'react-icons/si';

interface Props {
    type: 'HTML' | 'CSS' | 'JavaScript';
}

function EditorSection({ type }: Props) {
    function getType(): ReactElement | undefined {
        if (type == 'HTML') {
            return <SiHtml5 className='text-orange-600' />
        } else if (type == 'CSS') {
            return <SiCss3 className='text-blue-500' />
        } else if (type == 'JavaScript') {
            return <SiJavascript className='text-yellow-500' />
        }
    }

    const icon = getType();

    return (
        <div className='bg-zinc-800 w-[33%] h-80 flex flex-col'>

            <div className='text-[#ccc] bg-black h-10 border-b'>
                <h2 className='flex items-center gap-2 bg-zinc-800 w-fit px-[5%] py-2 rounded-t-sm'>
                    {type}
                    {icon}
                </h2>
            </div>


            <textarea className='w-full h-full resize-none bg-zinc-800 outline-none p-5 text-white'></textarea>
        </div>
    )
}

export default EditorSection;