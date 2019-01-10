import { Action } from "redux";

export enum CalculatorActionsTypes {
    ADD_OPERATION = '@@calculator/ADD_OPERATION',
    CLEAR = '@@calculator/CLEAR',
    CALCULATE_RESULT = '@@calculator/CALCULATE_RESULT',
};

export interface AddOperationAction {
    type: CalculatorActionsTypes.ADD_OPERATION;
    payload: string;
}

export interface ClearAction {
    type: CalculatorActionsTypes.CLEAR;
}

export interface CalculateResultAction {
    type: CalculatorActionsTypes.CALCULATE_RESULT;
}

export type CalculatorActions = AddOperationAction | ClearAction | CalculateResultAction;

export interface ICalculatorState {
    readonly currentOperand: string;
    readonly expressions: string[];
    readonly result: string;
};