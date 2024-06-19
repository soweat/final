import React, { useState } from "react"; 


export default function Final() {
    const [color, setColor] = useState('purple');
    return (
    <form>
        <p>BackGround Color : {color}<input type='color' value='gray' /></p>
    </form>
    )
}