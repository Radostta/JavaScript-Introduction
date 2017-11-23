function Calculator(leftOperand, operator, rightOperand){
    this.leftOperand = leftOperand;
    this.operator = operator;
    this.rightOperand = rightOperand;

    this.calculateResult = function(){
        let result = 0;
        let calculated = 0;

        switch (this.operator){
            case "+":
                calculated = this.leftOperand + this.rightOperand;
                result = calculated;
                break;
            case "-":
                calculated = this.leftOperand - this.rightOperand;
                result = calculated;
                break;
            case "*":
                calculated = this.leftOperand * this.rightOperand;
                result = calculated;
                break;
            case "/":
                calculated = this.leftOperand / this.rightOperand;
                result = calculated;
                break;
            case "%":
                calculated = this.leftOperand % this.rightOperand;
                result = "Division remainder is: " + calculated;
                break;
        }

        if (isNaN(calculated)){
            result = "Error!"
            this.leftOperand = "Enter a valid number!";
            this.rightOperand = "Enter a valid number!";
        }

        return result;
    }
}

module.exports = Calculator;