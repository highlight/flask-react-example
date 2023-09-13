# flask-react-example
A sample app with a Python Flask backend and a React.js frontend that sets up highlight full stack observability.

## Video Overview

1. [Setting up Frontend and Backend monitoring](https://www.loom.com/share/Flask-ReactJS-Full-Stack-Instrumentation-3c27f858c43d4412811f765c41ed6869)
2. [Connecting the Frontend to the Backend](https://www.loom.com/share/Flask-with-ReactJS-Frontend-Setting-Up-Cohesion-1b41956c10014c5ea87c0267686ec51f)

## Running the app

### Frontend
1. `cd frontend`
2. `yarn`
3. `yarn dev`

### Backend
1. `cd backend`
2. `poetry install`
3. `poetry run flask --app src.main run -h 0.0.0.0 --port 5001`

## Deployed Example

The example backend + frontend are deployed at https://python-flask-react-frontend.onrender.com
