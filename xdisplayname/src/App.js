// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
// import React, { useState } from 'react';

// function NameForm() {
//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');
//   const [fullName, setFullName] = useState('');
//   const [isSubmitted, setIsSubmitted] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Check if both fields are filled
//     if (firstName && lastName) {
//       // Display full name
//       const fullNameResult = `${firstName} ${lastName}`;
//       setFullName(fullNameResult);
//       setIsSubmitted(true);
//     } else {
//       alert('Please fill in both first and last name.');
//     }
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <label htmlFor="firstName">First Name:</label>
//         <input
//           type="text"
//           id="firstName"
//           name="firstName"
//           value={firstName}
//           onChange={(e) => setFirstName(e.target.value)}
//           required
//         />

//         <label htmlFor="lastName">Last Name:</label>
//         <input
//           type="text"
//           id="lastName"
//           name="lastName"
//           value={lastName}
//           onChange={(e) => setLastName(e.target.value)}
//           required
//         />

//         <button type="submit">Submit</button>
//       </form>

//       {isSubmitted && <p>Full Name: {fullName}</p>}
//     </div>
//   );
// }

// export default NameForm;
// App.js

import React, { useState } from 'react';

const App = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [fullName, setFullName] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    if (firstName && lastName) {
      const fullNameResult = `${firstName} ${lastName}`;
      setFullName(fullNameResult);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />

        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />

        <button type="submit">Submit</button>
      </form>

      {fullName && <div id="fullNameDisplay">Full Name: {fullName}</div>}
    </div>
  );
};

export default App;
