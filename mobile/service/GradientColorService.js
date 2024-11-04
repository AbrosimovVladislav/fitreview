export const getEstimationColor = (estimation) => {
    if (estimation <= 65) {
        // Переход от красного к желтому
        const red = 255;
        const green = Math.floor((estimation / 65) * 255);
        return `rgb(${red}, ${green}, 0)`;
    } else {
        // Переход от желтого к зеленому
        const green = 255;
        const red = Math.floor(255 - ((estimation - 65) / 65) * 255);
        return `rgb(${red}, ${green}, 0)`;
    }
};