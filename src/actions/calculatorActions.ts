import { CalculatorActionsTypes, AddOperationAction, CalculateResultAction, ClearAction, AddOperandAction } from '../store/types/calculator';

export const addOperation = (operation: string): AddOperationAction => ({
    type: CalculatorActionsTypes.ADD_OPERATION,
    payload: operation,
});

export const addOperand = (operand: string): AddOperandAction => ({
    type: CalculatorActionsTypes.ADD_OPERAND,
    payload: operand,
});

export const calculateResult = (): CalculateResultAction => ({
    type: CalculatorActionsTypes.CALCULATE_RESULT,
});

export const clear = (): ClearAction => ({
    type: CalculatorActionsTypes.CLEAR
});