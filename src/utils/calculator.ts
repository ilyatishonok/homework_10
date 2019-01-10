export const isOperation = (symbol: string) => {
    return ['+', '-', '/', '*'].includes(symbol);
}

export const calculateExpression = (expression: string) => {
    return new Function(`return ${expression}`)();
}

export const isMinus = (symbol: string) => {
    return '-' === symbol;
}
