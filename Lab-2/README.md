# Weather-App
A clean and responsive weather dashboard that provides current and future weather conditions for any city. This application is built with vanilla HTML, CSS, and JavaScript and fetches its data from the OpenWeatherMap API.

---

## Key Features
-Current Weather Data: Displays the temperature, humidity, wind speed, and weather conditions for the searched city.

-5-Day Forecast: Shows the weather forecast for the next five days, helping you plan ahead.

-Dynamic Icons: Weather conditions are represented by intuitive icons that change based on the forecast.

-Search by City: Easily find weather information for any city around the world.

-Persistent Search History: Saves your recent searches, allowing you to quickly check the weather for your favorite cities.

-Fully Responsive: The layout is optimized for a seamless experience on both desktop and mobile devices.

---

## Tech Stack
-HTML5: For the core structure of the dashboard.

-CSS3: For all styling, layout, and responsiveness.

-JavaScript (ES6+): For API calls, DOM manipulation, and application logic.

-OpenWeatherMap API: Used as the source for all weather data.

### API Usage
-This application requires a personal API key from OpenWeatherMap to function. You can get a free key by creating an account on their website.

-Sign up at OpenWeatherMap.

-Once you have your API key, you will need to add it to the script.js file.

---

## Implementation Details
The application is organized into three main files for a clear separation of concerns:

-index.html: Contains the HTML structure for the search bar, the current weather display, the 5-day forecast section, and the search history list.

-style.css: Manages all visual styling, including the layout of the dashboard, weather cards, and responsive design media queries.

-script.js: Drives the application's functionality. It handles:

-Making fetch() requests to the OpenWeatherMap API.

-Parsing the JSON response from the API.

-Dynamically creating and updating the HTML to display the weather data.

-Saving and retrieving the search history from the browser's Local Storage.

---

## Live Hosting Using Vercel:
https://weather-app-beta-eight-58.vercel.app
