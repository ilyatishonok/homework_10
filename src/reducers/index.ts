import { combineReducers } from 'redux';
import { ICalculatorState } from '../store/types/calculator';
import calculatorReducer from './calculatorReducer';

export interface RootState {
    calculator: ICalculatorState;
}

const rootReducer = combineReducers<RootState>({
    calculator: calculatorReducer,
});

export default rootReducer;