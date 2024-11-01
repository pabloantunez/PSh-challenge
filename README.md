# PSh-Game Statistics Report

## Overview
PSh-Game is an online game platform that generates statistics for matches between players and provides a web report showcasing the top players. This application simulates game statistics, stores them in a relational database (MySQL), and presents the data in a user-friendly interface built with React.

## Technologies Used
- **Backend:**
  - Python
  - Django
  - Django Rest Framework
  - Celery (for scheduled tasks)
  - MySQL (relational database)
  
- **Frontend:**
  - React
  - Axios (for API calls)
  - Material UI (for UI components)
  - Tailwind CSS (for styling)
  - React CSV (for CSV export)
  
## Requirements
The project consists of two main components: a backend implemented with Python and Django (DRF), handling data generation and storage, and a frontend built with React, displaying statistics and providing interactive features.

## Features
- Simulates and stores player game statistics every 5 minutes.
- Displays the top 10 player scores and the last time stats were generated.
- Automatically refreshes the report every 10 seconds.
- Allows exporting the report to CSV format.

## How It Works
The backend periodically simulates player game statistics by inserting random data into a MySQL database. A cron job is set up to execute this operation every 5 minutes. The application fetches the latest statistics from the database and displays them on the frontend. The report refreshes automatically every 10 seconds to provide real-time updates. Users can also export the statistics to CSV format for further analysis.

## Installation and Usage
1. Clone the repository.
2. For the backend, create and activate a virtual environment (optional but recommended), then install the required dependencies:<br>
   ↳ `pip install -r requirements.txt`
3. To create the database, use the script provided as **script_database**. Ensure that MySQL is installed and configured for the backend.
4. To create tables on database, navigate to the **backend/game** directory and execute:<br>
   ↳ a. `python manage.py makemigrations`<br>
   ↳ b. `python manage.py migrate`
6. For the frontend, navigate to the **frontend/psh_game** directory and install the required dependencies:<br>
   ↳ `npm install`
7. To run the backend server, navigate to the **backend/game** directory and execute:<br>
   ↳ `python manage.py runserver`
8. To start the Celery worker, execute:<br>
   ↳ `celery -A game worker --loglevel=info -P solo`
9. To start the Celery beat scheduler, execute:<br>
   ↳ `celery -A game beat --loglevel=info`
10. To start the frontend development server, execute:<br>
   ↳ `npm start`

### Data Generation
No initial data loading is required. The application uses Celery to automatically generate player statistics every 5 minutes. Once Celery is running, it will populate the database at regular intervals.
