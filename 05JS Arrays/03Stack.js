let stack = [];

stack.push(1);
console.log(stack);

stack.push(2);
console.log(stack);

stack.push(3);
console.log(stack);

stack.push(4);
console.log(stack);

stack.push(5);
console.log(stack);

// removing elements form stack
console.log(stack.pop());
console.log(stack);

console.log(stack.pop());
console.log(stack);

console.log(stack.pop());
console.log(stack);

console.log(stack.pop());
console.log(stack);

console.log(stack.pop());
console.log(stack);

console.log(stack.pop());
console.log(stack);

// example

function reverse(str) {
        let newStack = [];


        // adding or pushing string letter in stack
        for (let i = 0; i < str.length; i++) {
                newStack.push(str[i]);
        }

        let reverseStr = '';
        // removing or poping string letter in stack
        while (newStack.length > 0) {
                reverseStr += newStack.pop();
        }

        return reverseStr;
}

console.log(reverse('JavaScript Stack'));


