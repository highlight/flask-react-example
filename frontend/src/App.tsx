import { useState, useEffect } from "react";
import reactLogo from "/react.svg";
import highlightLogo from "/highlight.svg";
import flaskLogo from "/flask.svg";
import { H } from "highlight.run";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [response, setResponse] = useState();
  const [error, setError] = useState<Error>();

  useEffect(() => {
      const interval = setInterval(async () => {
          try {
              await fetch(`${import.meta.env.VITE_APP_BACKEND_URL ?? 'http://localhost:5001'}/error`)
          } catch(e) { console.error(e) }
      }, 1000)
      return () => {
          return clearInterval(interval)
      }
  }, [])

  if (error) {
    throw error;
  }

    return (
    <>
      <div>
        <a href="https://highlight.io" target="_blank">
          <img src={highlightLogo} className="logo" alt="Highlight logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href="https://flask.palletsprojects.com/en/3.0.x" target="_blank">
          <img src={flaskLogo} className="logo" alt="Python Flask logo" />
        </a>
      </div>
      <h1>highlight.io with React -{">"} Python Flask</h1>
      <div className="card">
        <button
          onClick={async () => {
            setCount((count) => count + 1);
            H.identify("jay@highlight.io", {
              id: "very-secure-id",
              phone: "867-5309",
              bestFriend: "jenny",
            });
            try {
              const r = await fetch(`${import.meta.env.VITE_APP_BACKEND_URL ?? 'http://localhost:5001'}/`);
              await r.text();
            } catch (e) {
              setError(e as unknown as Error);
            }
          }}
        >
          count is {count}
        </button>
        <button
          onClick={async () => {
            H.track("calling backend", { count });
            try {
              const r = await fetch(`${import.meta.env.VITE_APP_BACKEND_URL ?? 'http://localhost:5001'}/json`);
              setResponse(await r.json());
            } catch (e) {
              setError(e as unknown as Error);
            }
          }}
        >
          Send Backend Request
        </button>
        {response && <div className="response">{JSON.stringify(response)}</div>}
      </div>
      <p className="read-the-docs">
        Click the logo to learn more.
      </p>
    </>
  );
}

export default App;
