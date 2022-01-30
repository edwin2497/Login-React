import { useState } from "react";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  /*const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };*/

  const handleEmailChange = ({ target: { value } }) => setEmail(value);

  /*const handlePasswordChange = (event) => {  
    setPassword(event.target.value);
  };*/

  const handlePasswordChange = ({ target: { value } }) => setPassword(value);

  const handleFormSubmit = (event) => {
    event.preventDefault(); //Prevent page refresh after button press
    alert(`User: ${email}, Password: ${password}`)//Send alert with the values
  };

  return (
    <div className="App">
      <form onSubmit={handleFormSubmit}>
        <h2>Log In</h2>
        <label>
          Email
          <input type="email" value={email} onChange={handleEmailChange}/>
        </label>
        <label>
          Password
          <input type="password" value={password} onChange={handlePasswordChange}/>
        </label>
        <button type ="submit">Enter</button>
      </form>
    </div>
  );
}

export default App;
