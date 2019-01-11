export enum CalculatorActionsTypes {
    ADD_OPERATION = '@@calculator/ADD_OPERATION',
    ADD_OPERAND = '@@calculator/ADD_OPERAND',
    CLEAR = '@@calculator/CLEAR',
    CALCULATE_RESULT = '@@calculator/CALCULATE_RESULT',
};

export interface AddOperationAction {
    type: CalculatorActionsTypes.ADD_OPERATION;
    payload: string;
}

export interface AddOperandAction {
    type: CalculatorActionsTypes.ADD_OPERAND;
    payload: string;
}

export interface ClearAction {
    type: CalculatorActionsTypes.CLEAR;
}

export interface CalculateResultAction {
    type: CalculatorActionsTypes.CALCULATE_RESULT;
}

export type CalculatorActions = AddOperationAction | ClearAction | CalculateResultAction | AddOperandAction;

export interface ICalculatorState {
    readonly leftOperand: string;
    readonly rightOperand: string;
    readonly currentOperator: string;
    readonly error: string;
    readonly result: string;
};