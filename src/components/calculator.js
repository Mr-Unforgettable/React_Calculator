import React from "react";
import CalculatorTitle from "./calculatorTitle";
import OutputScreen from "./outputScreen";
import Button from "./button";
import { evaluate } from "mathjs";

class Calculator extends React.Component {
  constructor() {
    super();

    this.state = {
      question: "",
      answer: "",
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = (e) => {
    const value = e.target.value;

    switch (value) {
      case "=": {
        if (this.state.question !== "") {
          var ans = "";

          try {
            ans = evaluate(this.state.question);
          } catch (err) {
            this.setState({ answer: "Math Error!" });
          }

          if (ans === undefined) this.setState({ answer: "Math Error!" });
          else this.setState({ answer: ans, question: "" });
        }
        break;
      }

      case "AC": {
        this.setState({ question: "", answer: "" });
        break;
      }

      case "C": {
        var str = this.state.question;
        str = str.substring(0, str.length - 1);
        this.setState({ question: str });
        break;
      }

      default: {
        const updatedQuestion = this.state.question + value;
        this.setState({ question: updatedQuestion });
        break;
      }
    }
  };

  render() {
    return (
      <div className="frame">
        <CalculatorTitle value="Calculator" />
        <div className="mainCalc">
          <OutputScreen
            question={this.state.question}
            answer={this.state.answer}
          />
          <div className="button-container">
            <Button label={"AC"} handleClick={this.handleClick} />
            <Button label={"C"} handleClick={this.handleClick} />
            <Button label={"."} handleClick={this.handleClick} />
            <Button label={"/"} handleClick={this.handleClick} />
            <Button label={"7"} handleClick={this.handleClick} />
            <Button label={"8"} handleClick={this.handleClick} />
            <Button label={"9"} handleClick={this.handleClick} />
            <Button label={"*"} handleClick={this.handleClick} />
            <Button label={"4"} handleClick={this.handleClick} />
            <Button label={"5"} handleClick={this.handleClick} />
            <Button label={"6"} handleClick={this.handleClick} />
            <Button label={"-"} handleClick={this.handleClick} />
            <Button label={"1"} handleClick={this.handleClick} />
            <Button label={"2"} handleClick={this.handleClick} />
            <Button label={"3"} handleClick={this.handleClick} />
            <Button label={"+"} handleClick={this.handleClick} />
            <Button label={"0"} handleClick={this.handleClick} />
            <Button label={"00"} handleClick={this.handleClick} />
            <Button label={"="} handleClick={this.handleClick} />
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
