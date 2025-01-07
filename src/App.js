import "./App.css";
import Alert from "./components/Alert";
import check from "./assets/checked.png";
import multiply from "./assets/multiply.png";
import { useEffect, useState } from "react";
function App() {
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const toggleError = () => {
    setError(!error);
  };

  const toggleSuccess = () => {
    setSuccess(!success);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setSuccess(false);
    }, 4000);

    return () => clearTimeout(timer); // Cleanup timer if the component unmounts
  }, [success]);

  return (
    <div className="App">
      <button onClick={toggleSuccess}>Success</button>
      <button onClick={toggleError}>Error</button>
      {success && (
        <Alert
          message={"Success"}
          icon={check}
          bgColor={"green"}
          position={"top-right"}
          duration={4000}
        />
      )}
      {error && (
        <Alert
          message={"Error"}
          icon={multiply}
          bgColor={"red"}
          position={"bottom-right"}
          duration={4000}
        />
      )}
    </div>
  );
}

export default App;
