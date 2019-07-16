const EXPRESSIONS = require('./expressions');
const Helper = require('../../utils/Helper');

const getRandomOperand = () => {
    const {
        OPERAND: { STRING, NUMBER, BOOLEAN, OBJECT, ARRAY },
    } = EXPRESSIONS;

    const operandTypes = [STRING, NUMBER, BOOLEAN, OBJECT, ARRAY];
    const operandTypeIndex = Helper.getRandomNumberInRange(
        0,
        operandTypes.length
    );

    const operandTypeNames = Object.keys(operandTypes[operandTypeIndex]);
    const operandType = operandTypes[operandTypeIndex];
    const operandIndex = Helper.getRandomNumberInRange(
        0,
        operandTypeNames.length
    );

    const operand = operandType[operandTypeNames[operandIndex]];

    return operand;
};

const getRandomOperator = () => {
    const {
        OPERATOR: { ARITHMETIC, COMPARISON, UNARY, LOGIC },
    } = EXPRESSIONS;

    const operatorTypes = [ARITHMETIC, COMPARISON, UNARY, LOGIC];
    const operatorTypeIndex = Helper.getRandomNumberInRange(
        0,
        operatorTypes.length
    );

    const operatorTypeNames = Object.keys(operatorTypes[operatorTypeIndex]);
    const operatorType = operatorTypes[operatorTypeIndex];
    const operatorIndex = Helper.getRandomNumberInRange(
        0,
        operatorTypeNames.length
    );

    const operator = operatorType[operatorTypeNames[operatorIndex]];

    return operator;
};

const generateExpression = nOfExpressions => {
    let expressionString = '';

    for (let i = 0; i < nOfExpressions; i++) {
        if (i < nOfExpressions - 1) {
            expressionString += `${getRandomOperand()} ${getRandomOperator()} `;
        } else {
            expressionString += `${getRandomOperand()}`;
        }
    }

    return expressionString;
};

const getExpressionValue = jsExpression => {
    let expressionValue;

    try {
        expressionValue = eval(jsExpression);
    } catch (exc) {
        expressionValue = EXPRESSIONS.INVALID_VALUE;
    }

    return expressionValue;
};

const convertValueToJSCode = value => {
    return JSON.stringify(value);
};

const validateResult = (userResult, jsExpression) => {
    const finalExpressionValue = getExpressionValue(jsExpression);
    let userExpressionValue = userResult;

    if (userResult !== EXPRESSIONS.INVALID_VALUE) {
        try {
            userExpressionValue = eval(userResult);
        } catch (exc) {
            return false;
        }
    }

    // TODO: Secure this dangerous statement
    return userExpressionValue === finalExpressionValue;
};

module.exports = {
    generateExpression,
    getExpressionValue,
    convertValueToJSCode,
    validateResult,
};
