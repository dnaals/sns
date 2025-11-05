import { useCount } from '@/store/count';
import React from 'react';

function Viewer({}) {
    const count = useCount();
    return (
        <div>
            {count}
        </div>
    );
}

export default Viewer;