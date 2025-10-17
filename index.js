{
  /* <div>
<div>
    <h1>Hello World...</h1>
    <h2>Hello World..2</h2>
</div> 
</div> */
}

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h4", { className: "color" }, "Namaste React"),
    React.createElement("h1", {}, "Namste Reaact ..2"),
  ])
);
console.log(parent);

// ReactElement(Object) ==> HTML Browser Understand...

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
