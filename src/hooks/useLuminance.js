import { useState, useEffect } from 'react';

function getLuminance(hex) {
    let r = parseInt(hex.substring(1, 3), 16);
    let g = parseInt(hex.substring(3, 5), 16);
    let b = parseInt(hex.substring(5, 7), 16);

    r /= 255;
    g /= 255;
    b /= 255;

    let a = [r, g, b].map((v) => v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4));

    return 0.2126 * a[0] + 0.7152 * a[1] + 0.0722 * a[2];
}

const useContrast = (bgColor) => {
    const [textColor, setTextColor] = useState('black');

    useEffect(() => {
        if (bgColor === "#FF8A8A") {
            setTextColor("black");
        } else {
            const luminance = getLuminance(bgColor);
            setTextColor(luminance > 0.5 ? 'black' : 'white');
        }
    }, [bgColor]);

    return textColor;
};

export default useContrast;
