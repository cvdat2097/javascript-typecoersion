module.exports = {
    getRandomNumberInRange: (from, to) => {
        let [start, end] = [from, to];

        if (from > to) {
            [start, end] = [to, from];
        }

        return Math.floor(Math.random() * Math.floor(end)) + Math.floor(from);
    },
};
