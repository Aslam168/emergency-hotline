<!-- first question -->
1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Answer: getElementById selects a single element based its unique ID attribute. getElementsByClassName selects all classes on the code. querySelector selects first tag or class in the code. querySelectorAll selects all elements or class or id that i include in the parentheses of querySelectorAll.


<!-- second question -->
2. How do you create and insert a new element into the DOM?

Answer: first of all i create a element by document.createElement. then i insert the element into parent element using appendChild method.


<!-- third question -->
3. What is Event Bubbling and how does it work?

Answer: Event bubbling is a way in which events move through the DOM. When i click on an element, the event doesn't just stay there it first runs on the exact element i clicked. then it moves upward step by step through its parent elements. if i click on a button inside a <div>, first the button click event will fire, then the <div> click event, then the <body>.


<!-- fourth question -->
4. What is Event Delegation in JavaScript? Why is it useful?

Answer: Event delegation is a technique where instead of adding event listeners to many child elements. We add a single event listener to their parent and let the event bubble upward. it is useful because it makes code faster, work fasterworks even if new child elements are added later.


<!-- fifth question -->
5. What is the difference between preventDefault() and stopPropagation() methods?

Answer: preventDefault() stops a browser's default active like form submitting or stopping a link. stopPropagation() stops the event from moving up the DOM.