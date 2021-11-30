import { useState } from "react";
import Form from "./components/Form";

const App = () => {
  const [tip, setTip] = useState(0);

  return (
    <div className="min-h-screen bg-cyan-light pt-10 px-5">
      <h1 className="text-3xl font-semibold tracking-wide uppercase mb-12 text-center">
        splitter
      </h1>
      <div className="text-center text-2xl text-cyan-dark">{tip}</div>
      <Form setTip={setTip} />
    </div>
  );
};

export default App;
