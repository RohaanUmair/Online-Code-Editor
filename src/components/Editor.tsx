import React, { ReactElement } from 'react'
import { SiCss3, SiHtml5, SiJavascript } from 'react-icons/si';

interface Props {
    type: 'HTML' | 'CSS' | 'JavaScript';
    value: string;
    setValue: (val: string) => void;
}

function Editor({ type, value, setValue }: Props) {
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
        <div className='bg-zinc-800 w-[33%] h-[45dvh] flex flex-col      max-md:w-full'>

            <div className='text-[#ccc] bg-black h-10 border-b      max-md:hidden'>
                <h2 className='flex items-center gap-2 bg-zinc-800 w-fit px-[5%] py-2 rounded-t-sm'>
                    {type}
                    {icon}
                </h2>
            </div>


            <textarea
                spellCheck={false}
                className='w-full h-full resize-none bg-zinc-800 outline-none p-5 text-white text-sm'
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
        </div>
    )
}

export default Editor;