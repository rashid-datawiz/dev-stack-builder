# Name: Dev Stack Builder

# Technology Used: 
React.js
Tailwind CSS, DaisyUI
TypeScript / JavaScript (ES6+)
React-Toastify (NPM Package)
JSON (for technology data)
Vite (build tool)

# Description: This is a simple React application where developers can build their dev stacks.Fetched data in json format and use the data in our application.

# Three features:
1. Add Stack
2. Also remove the stacks.
3. Clear all stacks

## Question answwer:
What is JSX, and why is it used in React?
=> JSX is a syntax extension that lets write HTML-like code directly inside your JavaScript files, making it much more intuitive to design and visualize your user interface.

What is the difference between props and state?
=> Props are read-only instructions passed down from a parent component, while state is a component's own personal memory that it can update and change over time.

What does the useState hook do, and where did you use it in this project?
=> The useState hook allows a component to remember and update interactive data, which I used in this project to keep track of dynamic information like the current list of items or user inputs.

What does the useEffect hook do, and why did you need it to load the JSON data?
=> The useEffect hook runs background tasks after the component renders on the screen, which was necessary for fetching the JSON data behind the scenes without freezing or slowing down the initial page load.

Why does every item in a .map() list need a unique key prop?
=> React needs a unique key for each item in a list so it can easily identify exactly which items have changed, been added, or been removed without having to sluggishly redraw the entire list from scratch.

What is conditional rendering? Show one place you used it.
=> Conditional rendering is simply telling React to show different things on the screen based on current rules, like when I displayed an "empty stack" message specifically because the user's list had zero items in it.

How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
=> I pass data down to a child using props, and the child talks back to the parent by triggering a function that the parent handed down to it through those same props.

