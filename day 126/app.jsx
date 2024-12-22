import React from 'react';

function App() {
  // Rendering a List
  const fruits = ["Apple", "Banana", "Cherry"];
  const fruitList = fruits.map(fruit => <li key={fruit}>{fruit}</li>);

  // Conditional Rendering
  const isLoggedIn = true;

  // Dynamic Attributes
  const imgAttributes = { src: "https://via.placeholder.com/150", alt: "Placeholder Image" };

  // Inline Styles
  const bgColor = "lightblue";
  const divStyle = { backgroundColor: bgColor, padding: "20px", textAlign: "center" };

  // Rendering JSX from a Function
  function renderMessage() {
    return <h2>Welcome to the Recipe Finder</h2>;
  }

  // Template Strings in JSX
  const name = "John";
  const age = 30;

  // Dynamic HTML Tag Rendering
  const dynamicTag = "h1";

  // Nested Map Rendering
  const categories = [
    { name: "Fruits", items: ["Apple", "Banana", "Cherry"] },
    { name: "Vegetables", items: ["Carrot", "Lettuce", "Tomato"] }
  ];

  // Rendering a Table
  const users = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 }
  ];

  // String Interpolation
  const greeting = "Hello";
  const userName = "Alice";

  return (
    <div>
      {/* Rendering a List */}
      <ul>{fruitList}</ul>

      {/* Conditional Rendering */}
      <h3>{isLoggedIn ? "Welcome!" : "Please log in"}</h3>

      {/* Dynamic Attributes */}
      <img {...imgAttributes} />

      {/* Inline Styles */}
      <div style={divStyle}>This div has dynamic inline styles</div>

      {/* Rendering JSX from a Function */}
      {renderMessage()}

      {/* Template Strings in JSX */}
      <p>{`${name} is ${age} years old.`}</p>

      {/* Dynamic HTML Tag Rendering */}
      {React.createElement(dynamicTag, null, "This is dynamic!")}

      {/* Nested Map Rendering */}
      {categories.map(category => (
        <div key={category.name}>
          <h4>{category.name}</h4>
          <ul>
            {category.items.map(item => <li key={item}>{item}</li>)}
          </ul>
        </div>
      ))}

      {/* Rendering a Table */}
      <table border="1">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.name}>
              <td>{user.name}</td>
              <td>{user.age}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* String Interpolation */}
      <p>{`${greeting}, ${userName}!`}</p>
    </div>
  );
}

export default App;
