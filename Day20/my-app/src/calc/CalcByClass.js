// import React from "react";

// class Calc2 extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             operator: "",
//             firstNumber: "",
//             secondNumber: "",
//             input: "",
//         };
//     }

//     appendNumber = (number) => {
//         let newInput = this.state.input + number;
//         this.setState({ input: newInput });
//     };

//     handleOperator = (ope) => {
//         this.setState({
//             operator: ope,
//             firstNumber: this.state.input,
//             input: "",
//         });
//     };

//     handleCalculate = () => {
//         this.setState({ secondNumber: this.state.input });
//     };

//     handleClear = () => {
//         this.setState({
//             operator: "",
//             firstNumber: "",
//             secondNumber: "",
//             input: "",
//         });
//     };

//     componentDidUpdate(prevProps, prevState) {
//         if (
//             this.state.firstNumber !== "" &&
//             ["+", "-", "/", "*"].includes(this.state.operator) &&
//             this.state.secondNumber !== ""
//         ) {
//             let result = "";
//             switch (this.state.operator) {
//                 case "+":
//                     result =
//                         parseFloat(this.state.firstNumber) +
//                         parseFloat(this.state.secondNumber);
//                     break;
//                 case "-":
//                     result =
//                         parseFloat(this.state.firstNumber) -
//                         parseFloat(this.state.secondNumber);
//                     break;
//                 case "*":
//                     result =
//                         parseFloat(this.state.firstNumber) *
//                         parseFloat(this.state.secondNumber);
//                     break;
//                 case "/":
//                     result =
//                         parseFloat(this.state.firstNumber) /
//                         parseFloat(this.state.secondNumber);
//                     break;
//             }

//             this.setState({
//                 input: result,
//                 operator: "",
//                 firstNumber: "",
//                 secondNumber: "",
//             });
//         }
//     }
//     render() {
//         return (
//             <>
//                 <div className="calculator">
//                     <div className="input" id="input">
//                         {input}
//                     </div>
//                     <div className="buttons">
//                         <div className="operators">
//                             <div
//                                 className="operator"
//                                 onClick={() => {
//                                     handleOperator("+");
//                                 }}
//                             >
//                                 +
//                             </div>
//                             <div
//                                 className="operator"
//                                 onClick={() => {
//                                     handleOperator("-");
//                                 }}
//                             >
//                                 -
//                             </div>
//                             <div
//                                 className="operator"
//                                 onClick={() => {
//                                     handleOperator("*");
//                                 }}
//                             >
//                                 *
//                             </div>
//                             <div
//                                 className="operator"
//                                 onClick={() => {
//                                     handleOperator("/");
//                                 }}
//                             >
//                                 /
//                             </div>
//                         </div>
//                         <div className="leftPanel">
//                             <div className="numbers">
//                                 <div
//                                     className="calc-number"
//                                     onClick={() => {
//                                         appenNumber(7);
//                                     }}
//                                 >
//                                     7
//                                 </div>
//                                 <div
//                                     className="calc-number"
//                                     onClick={() => {
//                                         appenNumber(8);
//                                     }}
//                                 >
//                                     8
//                                 </div>
//                                 <div
//                                     className="calc-number"
//                                     onClick={() => {
//                                         appenNumber(9);
//                                     }}
//                                 >
//                                     9
//                                 </div>
//                             </div>
//                             <div className="numbers">
//                                 <div
//                                     className="calc-number"
//                                     onClick={() => {
//                                         appenNumber(4);
//                                     }}
//                                 >
//                                     4
//                                 </div>
//                                 <div
//                                     className="calc-number"
//                                     onClick={() => {
//                                         appenNumber(5);
//                                     }}
//                                 >
//                                     5
//                                 </div>
//                                 <div
//                                     className="calc-number"
//                                     onClick={() => {
//                                         appenNumber(6);
//                                     }}
//                                 >
//                                     6
//                                 </div>
//                             </div>
//                             <div className="numbers">
//                                 <div
//                                     className="calc-number"
//                                     onClick={() => {
//                                         appenNumber(1);
//                                     }}
//                                 >
//                                     1
//                                 </div>
//                                 <div
//                                     className="calc-number"
//                                     onClick={() => {
//                                         appenNumber(2);
//                                     }}
//                                 >
//                                     2
//                                 </div>
//                                 <div
//                                     className="calc-number"
//                                     onClick={() => {
//                                         appenNumber(3);
//                                     }}
//                                 >
//                                     3
//                                 </div>
//                             </div>
//                             <div className="numbers">
//                                 <div
//                                     className="calc-number"
//                                     onClick={() => {
//                                         appenNumber(0);
//                                     }}
//                                 >
//                                     0
//                                 </div>
//                                 <div
//                                     className="calc-number"
//                                     onClick={() => {
//                                         appenNumber(".");
//                                     }}
//                                 >
//                                     .
//                                 </div>
//                                 <div id="clear" onClick={handleClear}>
//                                     C
//                                 </div>
//                             </div>
//                         </div>
//                         <div
//                             className="equal"
//                             id="result"
//                             onClick={handleCaculater}
//                         >
//                             =
//                         </div>
//                     </div>
//                 </div>
//             </>
//         );
//     }
// }
// export default Calc2;
