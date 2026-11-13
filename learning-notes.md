## React-Learning

## Week01 - Wed-11-Nov-2026

### 1. What is react or JSX?

In traditional web development, we kept logic (JavaScript) and markup (HTML) in separate files. However, in React, logic and UI are closely connected, so they live together in the same place. JSX is a syntax extension for JavaScript that lets you write HTML-like markup inside a JavaScript file.

#### The 3 Golden Rules of JSX

1. **Return a single root element:**
   If you want to return multiple elements from a component, you must wrap them in a single parent tag (like a `<div>`) or an empty tag called a Fragment (`<>` ... `</>`).Why? Under the hood, JSX is transformed into plain JavaScript objects, and a function cannot return two separate objects at the same time without wrapping them in one container.
2. Close all the tags:
   JSX requires tags to be explicitly closed. Self-closing tags like `<img>` or `<br>` in standard HTML must become `<img />` and `<br />` in JSX.

3. camelCase all most of the things:
   Since JSX turns into JavaScript, attributes become keys of JavaScript objects. Reserved words like class cannot be used. Instead, we write:
   - `className` instead of `class`
   - `onClick` instead of `onclick`
   - Inline styles are written as JavaScript objects with camelCase properties: `style={{ backgroundColor: 'black', color: 'white' }}`

#### 2. JavaScript in JSX with Curly Braces `{ }`

In the React docs, this section is called JavaScript in JSX with Curly Braces. Whenever you want to use a JavaScript variable, do a quick calculation, or call a function inside your JSX markup, just put it inside curly braces `{ }`.

#### Question: why React needs `key` and why we use the `index`?

React uses a **Virtual DOM** to update the webpage efficiently. When a list changes (for example, you delete an item, add a new one, or reorder them), React needs to know which specific item changed.
Without a `key`, React has no way to tell the items apart. It might have to re-render the entire list from scratch every time something tiny changes, which is slow. With a `key`, React can instantly find the exact item that changed and update only that part of the screen.

In the `.map()` callback function, the second parameter (usually named `index`) is the position number of the item in the array:

- The first item has an index of 0.
- The second item has an index of 1.
- The third item has an index of 2, and so on.
  When you pass `key={index}`, you are telling React: "Identify this element by its current position number in the array."

## Week01 - Thu&Fri-12&13-Nov-2026

### What is a Component?

In **React**, an application is split into small, independent pieces called **Components**.

A **component** is essentially a JavaScript function that returns **JSX** (markup).

Naming rule:

- React components must always start with a **capital letter** (e.g., `ProfileCard`, not `profileCard`).
- If it starts with a **lowercase letter**, React thinks it's a **normal HTML tag** like `<div>` or `<span>`.

### What are Props?

If components are like independent UI building blocks, **Props** (short for properties) are how you pass data between them.

- Think of **props** like arguments passed to a JavaScript function.
- The parent component passes data down to the child component so the child can display it dynamically.
