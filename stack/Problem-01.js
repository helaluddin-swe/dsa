function Stack() {
  let collection = [];

  this.print = function () {
    console.log(collection);
  };
  this.push = function (element) {
    return collection.push(element);
  };
  this.pop = function () {
    return collection.pop();
  };
  this.isEmpty = function () {
    return collection.length === 0;
  };
  this.peek = function () {
    return collection[collection.length - 1];
  };
  this.clear=function(){
    return collection=[]
  }
}
// time complexity=>O() and space complexity: O(1)
// Stack is used in real websites for undo/redo operations, browser navigation, JavaScript call stack, form step tracking, and expression evaluation. Its push and pop operations run in O(1) time with O(n) space complexity.
// multi step form
// Checkout pages
// Job application forms
// Signup flows

const newStack = new Stack();
newStack.push("Helal Uddin");
newStack.pop();
newStack.push("Helal Uddin");
newStack.push("Helal Uddin2");
newStack.push("Helal Uddin3");
newStack.push("Helal Uddin4");
newStack.pop();

console.log(newStack.isEmpty());
console.log(newStack.peek());
newStack.clear()
newStack.print();
