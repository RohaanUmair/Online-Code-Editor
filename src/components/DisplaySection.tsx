import React from 'react';

function DisplaySection({ srcDoc }: { srcDoc: string }) {
    return (
        <iframe
            srcDoc={srcDoc}
            className='h-full w-full z-50 bg-white'
            title='display'
            sandbox='allow-scripts'
            width={'100%'}
            height={'100%'}
        />
    )
}

export default DisplaySection;