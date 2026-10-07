# 🧩 Dev Stack

Build your ideal development stack: browse popular technologies, compare them at a glance, and add your picks to a live "Your Stack" panel.

🔗 **Live Demo:** [https://dev-stack-theta-bice.vercel.app/](https://dev-stack-theta-bice.vercel.app/)

## 🛠 Technologies Used

React 19 · TypeScript · Vite · Tailwind CSS v4 · DaisyUI · React-Toastify · React-Spinners · JSON data

## ✨ Features

1. **Browse technologies**: responsive 1/2/3-column card grid, loaded from a local JSON file with a loading spinner.
2. **Build your stack**: add or remove technologies, no duplicates, "Remove All", and toast feedback for every action.
3. **Themeable UI**: sticky navbar with a mobile layout, and all brand gradients defined once in `src/index.css`.

## 🚀 Run Locally

```bash
npm install
npm run dev
```

## 📁 Structure

`components/` UI pieces · `constants/` static config · `types/` TypeScript types · `assets/` Assets (Images) · `public/data/technologies.json` data

## ❓ React Questions

**1. What is JSX, and why is it used in React?**
JSX is HTML-like syntax written inside JavaScript. It lets us describe the UI right next to the logic that controls it, and it compiles to normal JS function calls.

**2. What is the difference between props and state?**
Props are read-only inputs passed from a parent. State is data a component owns and can change; changing it re-renders the component.

**3. What does `useState` do, and where did you use it?**
It stores a value that triggers a re-render when updated. In `TechnologiesSection` I used it for the technologies list, the loading and error values, and the stack. I also used it in `Navbar` to track the active link.

**4. What does `useEffect` do, and why was it needed to load the JSON?**
It runs side effects after render. Fetching data is a side effect, so I fetch the JSON inside `useEffect` once on mount instead of on every render.

**5. Why does every `.map()` item need a unique `key`?**
React uses keys to tell which items were added, removed, or moved, so it updates only what changed and keeps each item's state correct.

**6. What is conditional rendering?**
Showing different UI depending on a condition. In `StackPanel`, an empty stack shows "Your stack is empty." and otherwise renders the list of selected items.

**7. How is data passed from parent to child, and back?**
Parent to child through props (e.g. `tech` and `added` into `TechCard`). Child to parent by calling a function passed as a prop (e.g. `onAdd(tech)`), which updates the parent's state.
