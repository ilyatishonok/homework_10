import { ICalculatorState, CalculatorActionsTypes, CalculatorActions } from '../store/types/calculator';
import { isOperation, calculateExpression, isMinus, isMultiplicationOrDivision } from '../utils/calculator';

const initialState: ICalculatorState = {
    leftOperand: '0',
    rightOperand: '',
    currentOperator: '',
    result: '',
    error: '',
}

const calculatorReducer = (state: ICalculatorState = initialState, action: CalculatorActions): ICalculatorState => {
    switch (action.type) {
        case CalculatorActionsTypes.ADD_OPERATION:
            const isOperationSymbol = isOperation(action.payload);

            if (state.error) {
                return {
                    ...state,
                    leftOperand: isOperationSymbol ? '0' : action.payload,
                    currentOperator: isOperationSymbol ? action.payload : '',
                    error: '',
                }
            }

            if (state.result) {
                return { 
                    ...state,
                    leftOperand: isOperationSymbol ? state.result : action.payload,
                    currentOperator: isOperationSymbol ? action.payload : '',
                    result: '',
                };
            }

            if (isOperationSymbol) {
                if (!state.currentOperator) {
                    return { ...state, currentOperator: action.payload};
                }

                if (!state.rightOperand) {
                    if (isMultiplicationOrDivision(state.currentOperator) && isMinus(action.payload)) {
                        return { ...state, rightOperand: action.payload };
                    }

                    if (state.currentOperator !== action.payload) {
                        return { ...state, currentOperator: action.payload };
                    }
                }


                if (!isMinus(state.rightOperand)) {
                    return { 
                        ...state,
                        currentOperator: action.payload,
                        leftOperand: state.leftOperand + state.currentOperator + state.rightOperand,
                        rightOperand: '',
                    }
                }
            } else {
                if (state.currentOperator) {
                    return {
                        ...state,
                        rightOperand: state.rightOperand + action.payload,
                    }
                }
                
                return {
                    ...state,
                    leftOperand: state.leftOperand === '0' ? action.payload : state.leftOperand + action.payload,
                };
            }

            return state;
        
        case CalculatorActionsTypes.CALCULATE_RESULT:
            if (state.currentOperator) {
                const newResult = !state.rightOperand || isMinus(state.rightOperand) ?
                    calculateExpression(state.leftOperand) :
                    calculateExpression(state.leftOperand + state.currentOperator + state.rightOperand);

                if (isNaN(newResult)) {
                    return { ...initialState, error: 'Error', };
                }

                return {
                    ...state,
                    result: newResult,
                    currentOperator: '',
                    rightOperand: '',
                    leftOperand: '',
                }
            }

            return state;

        case CalculatorActionsTypes.CLEAR:
            return { ...initialState }; 
            
        default:
            return state;
            
    }
}

export default calculatorReducer;