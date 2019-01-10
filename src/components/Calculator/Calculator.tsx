import React, { Component, MouseEvent, ReactNode } from 'react';
import styled from 'styled-components';

export interface ICalculatorProps {
    result: string;
    leftOperand: string;
    rightOperand: string;
    currentOperator: string;
    error: string;
}

export interface ICalculatorDispatchProps {
    addOperation: (operation: string) => void;
    calculate: () => void;
    clear: () => void;
}

export interface ButtonProps {
    background?: string;
    hover?: string;
}

const CalculatorWrapper = styled.div`
    height: 500px;
    width: 400px;
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    background: #4D4D4D;
    border: 5px solid #1A1A1A;
    border-radius: 20px;
    margin: 20px;
    word-wrap: break-word;
    box-shadow: 10px 10px 40px 10px black
`;

const Display = styled.div`
    background: black;
    color: #00FF00;
    text-shadow: 0 0 5px rgba(89, 195, 195, 0.5);
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin: 30px;
    box-sizing: border-box;
    padding: 30px;
    overflow: hidden;
    font-size: 24px;
    word-wrap: break-word;
    position: relative;
`;

const Buttons = styled.div`
    padding: 15px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    height: 100%;
    margin: 30px;
    margin-top: 10px;
    border-radius: 10px;
    background: #666666;
    user-select: none;
    border: 3px solid #1A1A1A;
`;

const Button = styled.div<ButtonProps>`
    background: ${props => props.background ? props.background : '#65727A'};
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    box-sizing: border-box;
    border: 0.5px solid #3a372a;
    border-radius: 10px;
    color: white;
    margin-top: 5px;
    margin-left: 5px;
    height: 23%;
    cursor: pointer;

    &:hover {
        background: ${props => props.hover ? props.hover : '#818f98'};
    }
`;

class Calculator extends Component<ICalculatorProps & ICalculatorDispatchProps> {
    public handleClick = (event: MouseEvent) => {
        const value = event.currentTarget.textContent || '';
        this.props.addOperation(value);
    }

    public calculate = () => {
        this.props.calculate();
    }

    private createOperationButton(symbol: string): ReactNode {
        return (
            <Button
                background="#cc6900"
                hover="#e27909"
                onClick={symbol === 'C' ? this.props.clear : this.handleClick}
            >
                {symbol}
            </Button>
        );
    }

    private createDigitButton(symbol: string): ReactNode {
        return <Button onClick={this.handleClick}>{symbol}</Button>
    }

    public render() {
        const { error, result, leftOperand, currentOperator, rightOperand } = this.props;

        const displayString = result ? result : leftOperand + currentOperator + rightOperand;

        return (
            <CalculatorWrapper>
                <Display>{error || displayString}</Display>
                <Buttons>
                    {this.createDigitButton('7')}
                    {this.createDigitButton('4')}
                    {this.createDigitButton('1')}
                    {this.createOperationButton('C')}
                    {this.createDigitButton('8')}
                    {this.createDigitButton('5')}
                    {this.createDigitButton('2')}
                    {this.createDigitButton('0')}
                    {this.createDigitButton('9')}
                    {this.createDigitButton('6')}
                    {this.createDigitButton('3')}
                    <Button background="#008040" hover="#14ad60" onClick={this.props.calculate}>=</Button>
                    {this.createOperationButton('+')}
                    {this.createOperationButton('-')}
                    {this.createOperationButton('*')}
                    {this.createOperationButton('/')}
                </Buttons>
            </CalculatorWrapper>
        )
    }
}

export default Calculator;