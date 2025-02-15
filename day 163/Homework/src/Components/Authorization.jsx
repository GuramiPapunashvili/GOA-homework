import { useState } from "react";
import useLocalStorage from "../Hooks/useLocalStorage";

const Authorization = () => {
  const [storedValue, handleSubmit] = useLocalStorage("userData", {});
  const [signedIn, setSignedIn] = useState(false);
  const toggleSignIn = () => {
    setSignedIn((prev) => !prev);
  };

  return (
    <div>
      {signedIn ? (
        <div>
        <form onSubmit={handleSubmit}>
          <h1>Sign In</h1>
          <input type="text" name="username" placeholder="Enter your username" required />
          <input type="password" name="password" placeholder="Enter your password" required />
          <input type="submit" value="Sign In" onClick={toggleSignIn} />
        </form>
      </div>
      ) : (
        <div>
            <form onSubmit={handleSubmit}>
                <h1>Sign Up</h1>
                <input type="text" name="username" placeholder="Enter your username" required />
                <input type="email" name="email" placeholder="Enter your email" required />
                <input type="password" name="password" placeholder="Enter your password" required />
                <input type="submit" value="Sign Up" onClick={toggleSignIn}/>
            </form>
        </div>
      )}
    </div>
  );
};

export default Authorization;
