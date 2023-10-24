import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import {ErrorBoundary} from "@highlight-run/react";
import {H} from "highlight.run";

H.init("4d7k1xeo", {
    serviceName: "frontend-app",
    tracingOrigins: [
        'python-flask-backend.onrender.com',
        'localhost',
        'localhost:5001',
    ],
    networkRecording: {
        enabled: true,
        recordHeadersAndBody: true,
    },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <ErrorBoundary>
            <App/>
        </ErrorBoundary>
    </React.StrictMode>,
);
