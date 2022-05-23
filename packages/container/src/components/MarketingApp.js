import { mount } from 'marketing/MarketingApp';
import React, {useRef, useEffect } from 'react';

// this approach will work regardless of what framework we're using
export default () => {
    const ref = useRef(null);

    useEffect(() => {
        mount(ref.current);
    }, []);

    return <div ref={ref} />
}


