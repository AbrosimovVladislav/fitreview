export const getEstimationColor = (estimation) => {
    if (estimation <= 65) {
        const red = 255;
        const green = Math.floor((estimation / 65) * 255);
        return `rgb(${red}, ${green}, 0)`;
    } else {
        const green = 255;
        const red = Math.floor(255 - ((estimation - 65) / 65) * 255);
        return `rgb(${red}, ${green}, 0)`;
    }
};

export const getRandomColor = () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    return `rgb(${red}, ${green}, ${blue})`;
};
