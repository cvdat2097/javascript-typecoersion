const OPERAND = {
    STRING: {
        RANDOM: '"random"',
        EMPTY: '""',
        NEWLINE: '"\n"',
        NULL: '"null"',
        UNDEFINED: '"undefined"',
        NaN: '"NaN"',
        TRUE: '"true"',
        FALSE: '"false"',
    },
    NUMBER: {
        RANDOM_INVALID: '15a8',
        RANDOM_POSITIVE: '18',
        RANDOM_NEGATIVE: '-18',
        ZERO: '0',
        ZERO_POSITIVE: '+0',
        ZERO_NEGATIVE: '-0',
        ONE: '1',
        INFINITY_POSITIVE: 'Infinity',
        INFINITY_NEGATIVE: '-Infinity',
    },
    BOOLEAN: {
        TRUE: 'true',
        FALSE: 'false'
    },
    OBJECT: {
        EMPTY: '{}',
        RANDOM: '{target: "tobesenior"}',
    },
    ARRAY: {
        EMPTY: '[]',
        ONE_NUMBER: '[2]',
        ONE_STRING: '["15"]',
        RANDOM: '[2, 3]',
    },
};

const OPERATOR = {
    ARITHMETIC: {
        ADD: '+',
        SUBSTRACT: '-',
        DIVIDE: '/',
        MULTIPLY: '*',
        MODULO: '%',
    },
    COMPARISON: {
        GREATER: '>',
        GREATER_EQUAL: '>=',
        EQUAL: '==',
        STRICT_EQUAL: '===',
        SMALLER: '<',
        SMALLER_EQUAL: '<=',
    },
    UNARY: {
        PLUS: '+',
    },
    LOGIC: {
        AND: '&&',
        OR: '||',
    },
};

const INVALID_VALUE = 'INVALID_VALUE';

module.exports = {
    OPERATOR,
    OPERAND,
    INVALID_VALUE,
};
