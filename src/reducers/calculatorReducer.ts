import { ICalculatorState, CalculatorActionsTypes, CalculatorActions } from '../store/types/calculator';
import { calculateExpression, isMinus, isMultiplicationOrDivision } from '../utils/calculator';

const initialState: ICalculatorState = {
    leftOperand: '0',
    rightOperand: '',
    currentOperator: '',
    result: '',
    error: '',
}

const calculatorReducer = (state: ICalculatorState = initialState, action: CalculatorActions): ICalculatorState => {
    switch(action.type) {
        case CalculatorActionsTypes.ADD_OPERAND:
            if (state.error || state.result) {
                return {
                    ...state,
                    leftOperand: action.payload,
                    currentOperator: '',
                    error: '',
                    result: '',
                }
            }

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
    switch (action.type) {
        case CalculatorActionsTypes.ADD_OPERATION:

            if (state.error || state.result) {
                return {
                    ...state,
                    leftOperand: state.result ? state.result : '0',
                    currentOperator: action.payload,
                    error: '',
                    result: '',
                }
            }

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

                return state;
            }


            if (!isMinus(state.rightOperand)) {
                return { 
                    ...state,
                    currentOperator: action.payload,
                    leftOperand: state.leftOperand + state.currentOperator + state.rightOperand,
                    rightOperand: '',
                }
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
                    result: `${newResult}`,
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