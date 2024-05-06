document.addEventListener('DOMContentLoaded', function () {
    const searchBar = document.getElementById('search-bar');
    const searchButton = document.getElementById('search-button');
    const weatherIcon = document.querySelector('.weather-icon');
    const temp = document.querySelector('.temp');
    const city = document.querySelector('.city');
    const humidity = document.querySelector('.humidity');
    const wind = document.querySelector('.wind');

    const apiKey = 'ab3c45dbd32b8a27558734c67a5e2170'; // Replace 'YOUR_API_KEY' with your OpenWeatherMap API key

    searchButton.addEventListener('click', function () {
        const location = searchBar.value;
        if (location) {
            getLocation(); // Call getLocation function
        } else {
            alert('Please enter a location.');
        }
    });

    // Function to get current location
    function getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition, showError);
        } else {
            alert("Geolocation is not supported by this browser.");
        }
    }

    // Function to show position
    function showPosition(position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        
        console.log('Latitude:', latitude);
        console.log('Longitude:', longitude);

        fetchWeatherData(latitude, longitude);
    }

    // Function to handle errors
    function showError(error) {
        switch(error.code) {
            case error.PERMISSION_DENIED:
                alert("User denied the request for Geolocation.");
                break;
            case error.POSITION_UNAVAILABLE:
                alert("Location information is unavailable.");
                break;
            case error.TIMEOUT:
                alert("The request to get user location timed out.");
                break;
            case error.UNKNOWN_ERROR:
                alert("An unknown error occurred.");
                break;
        }
    }

    // Function to fetch weather data based on latitude and longitude
    function fetchWeatherData(latitude, longitude) {
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`)
            .then(response => response.json())
            .then(data => {
                if (data.cod === 200) {
                    const weatherData = data.weather[0];
                    const mainData = data.main;
                    const windData = data.wind;
                    weatherIcon.src = `http://openweathermap.org/img/wn/${weatherData.icon}.png`;
                    temp.textContent = `${mainData.temp}°C`;
                    city.textContent = data.name;
                    humidity.textContent = `${mainData.humidity}%`;
                    wind.textContent = `${windData.speed} Km/h`;
                } else {
                    alert(data.message);
                }
            })
            .catch(error => console.error('Error fetching weather data:', error));
    }
});






// document.addEventListener('DOMContentLoaded', function () {
//     const searchBar = document.getElementById('search-bar');
//     const searchButton = document.getElementById('search-button');
//     const weatherIcon = document.querySelector('.weather-icon');
//     const temp = document.querySelector('.temp');
//     const city = document.querySelector('.city');
//     const humidity = document.querySelector('.humidity');
//     const wind = document.querySelector('.wind');

//     const apiKey = 'ab3c45dbd32b8a27558734c67a5e2170'; // Replace 'YOUR_API_KEY' with your OpenWeatherMap API key

//     searchButton.addEventListener('click', function () {
//         const location = searchBar.value;
//         if (location) {
//             getLocation(); // Call getLocation function
//         } else {
//             alert('Please enter a location.');
//         }
//     });

//     // Function to get current location
//     function getLocation() {
//         if (navigator.geolocation) {
//             navigator.geolocation.getCurrentPosition(showPosition);
//         } else {
//             alert("Geolocation is not supported by this browser.");
//         }
//     }

//     // Function to show position
//     function showPosition(position) {
//         const latitude = position.coords.latitude;
//         const longitude = position.coords.longitude;

//         fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`)
//             .then(response => response.json())
//             .then(data => {
//                 if (data.cod === 200) {
//                     const weatherData = data.weather[0];
//                     const mainData = data.main;
//                     const windData = data.wind;
//                     weatherIcon.src = `http://openweathermap.org/img/wn/${weatherData.icon}.png`;
//                     temp.textContent = `${mainData.temp}°C`;
//                     city.textContent = data.name;
//                     humidity.textContent = `${mainData.humidity}%`;
//                     wind.textContent = `${windData.speed} Km/h`;
//                 } else {
//                     alert(data.message);
//                 }
//             })
//             .catch(error => console.error('Error fetching weather data:', error));
//     }
// });


// document.addEventListener('DOMContentLoaded', function () {
//     const weatherIcon = document.querySelector('.weather-icon');
//     const temp = document.querySelector('.temp');
//     const city = document.querySelector('.city');
//     const humidity = document.querySelector('.humidity');
//     const wind = document.querySelector('.wind');

   
//     // fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`)
//     fetch('https://api.openweathermap.org/data/2.5/weather?lat=5.5710047&lon=5.7829427&appid=ab3c45dbd32b8a27558734c67a5e2170&units=metric')
//         .then(response => response.json())
//         .then(data => {

//             console.log(data);

//             if (data.cod === 200) {
//                 const weatherData = data.weather[0];
//                 const mainData = data.main;
//                 const windData = data.wind;
//                 weatherIcon.src = `http://openweathermap.org/img/wn/${weatherData.icon}.png`;
//                 temp.textContent = `${mainData.temp}°C`;
//                 city.textContent = data.name;
//                 humidity.textContent = `${mainData.humidity}%`;
//                 wind.textContent = `${windData.speed} Km/h`;
//             } else {
//                 alert(data.message);
//             }
//         })
//         .catch(error => console.error('Error fetching weather data:', error));
// });




// document.addEventListener('DOMContentLoaded', function () {
//     const weatherIcon = document.querySelector('.weather-icon');
//     const temp = document.querySelector('.temp');
//     const city = document.querySelector('.city');
//     const humidity = document.querySelector('.humidity');
//     const wind = document.querySelector('.wind');

//     fetch('http://127.0.0.1:5500/asset/js/weather.json') // Assuming dummy.json is in the same directory as your HTML file
//         .then(response => response.json())
//         .then(data => {
//             console.log(data);
//             // Assuming your JSON structure has properties like weatherIcon, temp, city, humidity, and wind
//             weatherIcon.src = data.weatherIcon;
//             temp.textContent = `${data.temp}°C`;
//             city.textContent = data.city;
//             humidity.textContent = `${data.humidity}%`;
//             wind.textContent = `${data.wind} Km/h`;
//         })
//         .catch(error => console.error('Error fetching data:', error));
// });
