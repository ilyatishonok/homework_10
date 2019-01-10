import { CalculatorActionsTypes, AddOperationAction, CalculateResultAction, ClearAction } from '../store/types/calculator';

export const addOperation = (operation: string): AddOperationAction => ({
    type: CalculatorActionsTypes.ADD_OPERATION,
    payload: operation,
});

export const calculateResult = (): CalculateResultAction => ({
    type: CalculatorActionsTypes.CALCULATE_RESULT,
});

export const clear = (): ClearAction => ({
    type: CalculatorActionsTypes.CLEAR
});