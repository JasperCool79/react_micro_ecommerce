import React, { useRef } from 'react'
import COLORS from './colorName'

export default function Color({ text,onActive,selectClassName}) {
    const [{hex}] = COLORS.filter(({ name }) => text === name);
    const ref = useRef(null);
    function clickRef() {
        onActive(text);
    }
    return (
    <span onClick={clickRef} className={selectClassName(text)} style={{background: `${hex}`}}></span>
    )
}
