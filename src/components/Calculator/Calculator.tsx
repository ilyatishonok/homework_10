import React, { Component, MouseEvent } from 'react';
import styled from 'styled-components';

interface ICalculatorProps {
    result: string;
    expressions: string[];
    currentOperand: string;
}

interface ICalculatorDispatchProps {
    addOperation: (operation: string) => void;
    calculate: () => void;
    clear: () => void;
}

interface ButtonProps {
    background?: string
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
    height: 20%;
    padding: 30px;
    overflow: hidden;
    font-size: 24px;
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
        background: #dbe0d9;
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

    public render() {
        const displayString = this.props.result ? this.props.result : this.props.expressions.join("") + this.props.currentOperand;

        return (
            <CalculatorWrapper>
                <Display>{displayString}</Display>
                <Buttons>
                    <Button onClick={this.handleClick}>7</Button>
                    <Button onClick={this.handleClick}>4</Button>
                    <Button onClick={this.handleClick}>1</Button>
                    <Button background="#B36B00" onClick={this.props.clear}>C</Button>
                    <Button onClick={this.handleClick}>8</Button>
                    <Button onClick={this.handleClick}>5</Button>
                    <Button onClick={this.handleClick}>2</Button>
                    <Button onClick={this.handleClick}>0</Button>
                    <Button onClick={this.handleClick}>9</Button>
                    <Button onClick={this.handleClick}>6</Button>
                    <Button onClick={this.handleClick}>3</Button>
                    <Button background="#008040" onClick={this.props.calculate}>=</Button>
                    <Button background="#CBCC00" onClick={this.handleClick}>+</Button>
                    <Button background="#CBCC00" onClick={this.handleClick}>-</Button>
                    <Button background="#CBCC00" onClick={this.handleClick}>*</Button>
                    <Button background="#CBCC00" onClick={this.handleClick}>/</Button>
                </Buttons>
            </CalculatorWrapper>
        )
    }
}

export default Calculator;