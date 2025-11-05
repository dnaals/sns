import { useDecreaseCount, useIncreaseCount } from '@/store/count';
import React from 'react';
import { Button } from '../ui/button';

function Controller({}) {
    const increase = useIncreaseCount();
    const decrease = useDecreaseCount();
    return (
        <div>
            <Button onClick={decrease}>-</Button>
            <Button onClick={increase}>+</Button>
        </div>
    );
}

export default Controller;