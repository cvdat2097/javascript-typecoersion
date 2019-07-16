const express = require('express');
const router = express.Router();

const Game = require('../game');

router.post('/get-expression', function(req, res, next) {
    const { level } = req.body;

    const expression = Game.generateExpression(level);

    res.json({
        expression,
    });
});

router.post('/submit-answer', function(req, res, next) {
    const { expression, answer } = req.body;

    const correctResult = Game.convertValueToJSCode(
        Game.getExpressionValue(expression)
    );
    const answerIsCorrect = Game.validateResult(answer, expression);

    res.json({
        correctResult,
        answerIsCorrect,
    });
});

module.exports = router;
