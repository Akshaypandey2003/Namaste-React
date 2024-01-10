

// -------- Making nested elements using react ------
const parent = React.createElement("div", { id: "parent" },
   [ React.createElement("div", { id: "child" },
        [React.createElement("h1", {}, "This is nested h1 tag"),
        React.createElement("h2", {}, "This is nested h2 tag")]),
    React.createElement("div", { id: "child2" },
    [React.createElement("h1", {}, "This is nested h1 tag"),
    React.createElement("h2", {}, "This is nested h2 tag")])
]);


//-- Making single element using react----
const heading = React.createElement("h1", { id: "heading" }, "Helllo world using react code");

const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(heading);
root.render(parent);