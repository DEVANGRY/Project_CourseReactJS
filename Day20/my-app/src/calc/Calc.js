import { useState, useEffect } from "react";

import "./Calc.css";
const Calc = (props) => {
    let [operator, setOperator] = useState("");
    let [firstNumber, setFirstNumber] = useState("");
    let [secondNumber, setSecondNumber] = useState("");
    let [input, setInput] = useState("");
    const appenNumber = (number) => {
        let newInput = input + number;
        setInput(newInput);
    };
    const handleOperator = (ope) => {
        setOperator(ope);
        setFirstNumber(input);
        setInput("");
    };
    useEffect(() => {
        if (
            firstNumber != "" &&
            ["+", "-", "*", "/"].includes(operator) &&
            secondNumber != ""
        ) {
            let result = 0;
            switch (operator) {
                case "+":
                    result = parseFloat(firstNumber) + parseFloat(secondNumber);
                    break;
                case "-":
                    result = parseFloat(firstNumber) - parseFloat(secondNumber);
                    break;
                case "*":
                    result = parseFloat(firstNumber) * parseFloat(secondNumber);
                    break;
                case "/":
                    result = parseFloat(firstNumber) / parseFloat(secondNumber);
                    break;
            }
            setInput(result);
            setOperator("");
            setFirstNumber("");
            setSecondNumber("");
        }
    }, [secondNumber]);

    const handleCaculater = () => {
        setSecondNumber(input);
    };
    const handleClear = () => {
        setOperator("");
        setFirstNumber("");
        setSecondNumber("");
        setInput("");
    };
    return (
        <>
            <div className="calculator">
                <div className="input" id="input">
                    {input}
                </div>
                <div className="buttons">
                    <div className="operators">
                        <div
                            className="operator"
                            onClick={() => {
                                handleOperator("+");
                            }}
                        >
                            +
                        </div>
                        <div
                            className="operator"
                            onClick={() => {
                                handleOperator("-");
                            }}
                        >
                            -
                        </div>
                        <div
                            className="operator"
                            onClick={() => {
                                handleOperator("*");
                            }}
                        >
                            *
                        </div>
                        <div
                            className="operator"
                            onClick={() => {
                                handleOperator("/");
                            }}
                        >
                            /
                        </div>
                    </div>
                    <div className="leftPanel">
                        <div className="numbers">
                            <div
                                className="calc-number"
                                onClick={() => {
                                    appenNumber(7);
                                }}
                            >
                                7
                            </div>
                            <div
                                className="calc-number"
                                onClick={() => {
                                    appenNumber(8);
                                }}
                            >
                                8
                            </div>
                            <div
                                className="calc-number"
                                onClick={() => {
                                    appenNumber(9);
                                }}
                            >
                                9
                            </div>
                        </div>
                        <div className="numbers">
                            <div
                                className="calc-number"
                                onClick={() => {
                                    appenNumber(4);
                                }}
                            >
                                4
                            </div>
                            <div
                                className="calc-number"
                                onClick={() => {
                                    appenNumber(5);
                                }}
                            >
                                5
                            </div>
                            <div
                                className="calc-number"
                                onClick={() => {
                                    appenNumber(6);
                                }}
                            >
                                6
                            </div>
                        </div>
                        <div className="numbers">
                            <div
                                className="calc-number"
                                onClick={() => {
                                    appenNumber(1);
                                }}
                            >
                                1
                            </div>
                            <div
                                className="calc-number"
                                onClick={() => {
                                    appenNumber(2);
                                }}
                            >
                                2
                            </div>
                            <div
                                className="calc-number"
                                onClick={() => {
                                    appenNumber(3);
                                }}
                            >
                                3
                            </div>
                        </div>
                        <div className="numbers">
                            <div
                                className="calc-number"
                                onClick={() => {
                                    appenNumber(0);
                                }}
                            >
                                0
                            </div>
                            <div
                                className="calc-number"
                                onClick={() => {
                                    appenNumber(".");
                                }}
                            >
                                .
                            </div>
                            <div id="clear" onClick={handleClear}>
                                C
                            </div>
                        </div>
                    </div>
                    <div
                        className="equal"
                        id="result"
                        onClick={handleCaculater}
                    >
                        =
                    </div>
                </div>
            </div>
        </>
    );
};

export default Calc;
