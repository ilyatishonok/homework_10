import { ICalculatorState, CalculatorActionsTypes, CalculatorActions } from '../store/types/calculator';

const isOperation = (symbol: string) => {
    return ['+', '-', '/', '*'].includes(symbol);
}

const isDot = (symbol: string) => {
    return '.' === symbol;
}

const initialState: ICalculatorState = {
    currentOperand: '0',
    expressions: [],
    result: '',
}

const calculatorReducer = (state: ICalculatorState = initialState, action: CalculatorActions): ICalculatorState => {
    switch (action.type) {
        case CalculatorActionsTypes.ADD_OPERATION:
            let newOperand: string;
            let newExpressions: string[];
            let newResult: string = '';
            const isOperationSymbol = isOperation(action.payload);

            if (state.result) {
                newExpressions = isOperationSymbol ? [state.result, action.payload] : [];
                newOperand = isOperationSymbol ? '' : action.payload;
                newResult = '';

                return { ...state, currentOperand: newOperand, result: newResult, expressions: newExpressions };
            }

            if (isOperationSymbol) {
                if (state.currentOperand) {
                    newExpressions = state.expressions.length ?
                        [...state.expressions, state.currentOperand, action.payload] :
                        [state.currentOperand, action.payload];
                    return { ...state, currentOperand: '', expressions: newExpressions, result: '' };
                }
            } else {
                if (state.currentOperand === '0') {
                    return { ...state, currentOperand: action.payload };
                }
                
                return { ...state, currentOperand: state.currentOperand + action.payload };
            }

        return state;

        
        case CalculatorActionsTypes.CALCULATE_RESULT:
            const result = eval(state.expressions.join("") + state.currentOperand);

            return { ...state, currentOperand: '', expressions: [], result: result };

        case CalculatorActionsTypes.CLEAR:
            return { ...state, currentOperand: '0', expressions: [], result: ''}; 

        default:
            return state;
            
    }
}

export default calculatorReducer;