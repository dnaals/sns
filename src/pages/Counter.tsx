import React from 'react';
import { countStore } from '@/store/count';
import { Button } from '@/components/ui/button';
function Counter({}) {
    const {count,increase,decrease} = countStore();

    return (
        <div>
            <h1 className='text-2xl font-bold'>Counter</h1>
            <div>{count}</div>
            <div>
                <Button onClick={decrease}>-</Button>
                <Button onClick={increase}>+</Button>
            </div>
        </div>
    );
}

export default Counter;