# React - NASA API (APOD)

A React API project.
This project uses Astronomy Picture of the Day (APOD) API by NASA.

It's a web app that retrieves data via API.

<hr>

## How It's Made:

**HTML | CSS**

- Basic implementation


**JavaScript (React)**
- Utilizes useEffect and useState
- Checks localStorage if selected date is stored, otherwise retrieve data from API
- Data retrieved from API is stored in localStorage to minimize API request
- Retrieves current day's APOD data and display all info by default
- Selecting one of the last 7 days buttons will retrieve data for said date and display the info
- Selecting any date in input box will retrieve data from selected date and display the info
- Pass data from child A component → parent compoent → child B component


<hr>

## Tech used:

![HTML5](https://img.shields.io/badge/-HTML5-1d1f21?style=flat&logo=HTML5&logoColor=E34F26)
![CSS3](https://img.shields.io/badge/-CSS3-1d1f21?style=flat&logo=CSS3&logoColor=1572B6)
![JavaScript](https://img.shields.io/badge/-JavaScript-1d1f21?style=flat&logo=javascript)
![React](https://img.shields.io/badge/-React-1d1f21?style=flat&logo=react)
