const calculator = (function () {
        function add(a, b) {
                return a + b;
        }

        function multiply(a, b) {
                return a * b;
        }

        return {
                add: add,
                multiply: multiply
        }
})();


console.log(calculator.add(10, 20));
console.log(calculator.multiply(10, 20));