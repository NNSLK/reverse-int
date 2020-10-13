module.exports = function reverse(n) {
    if (n < 0) {
        let y = -n;
        return y.toFixed(0).split("").reverse().join("") - 0;
    } else if (n > 0) {
        return n.toFixed(0).split("").reverse().join("") - 0;
    }
};
