import React from 'react';
import Viewer from '@/components/counter/Viewer';
import Controller from '@/components/counter/Controller';
function Counter({}) {

    return (
        <div>
            <h1 className='text-2xl font-bold'>Counter</h1>
            <Viewer />
            <Controller />
        </div>
    );
}

export default Counter;