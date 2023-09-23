// weather app

// fetch data

async function fetchData(city) {
		
	//fetch function
	const stepOne = await fetch(`http://localhost:8080/${city}`);
	const stepTwo = await stepOne.json();
	return stepTwo;
}

// cities list

const cities = ['Oslo', 'Frankfurt', 'Vienna', 'Sydney', 'Auckland', 'New York', 'Colombo', 'Malmo', 'Tokyo', 'Copenhagen'];

// create a city set

const citySet = new Set();

// add to citySet from cities

const UI_CARDS = 6;

for(let i = 0; i < UI_CARDS; i++) {
	const rand = Math.floor(Math.random() * cities.length);
	if(citySet.size == 6) {
		break;
	}else {
		i = 0;
		citySet.add(cities[rand]);
	}
}

// city set use

const randomCities = [];

citySet.forEach(function(element) {
	randomCities.push(element);
});

// grab dom nutshells

const nutshells = document.querySelectorAll(".nutshell");

/*window.onload = function() {
	nutshells.forEach(function(nutshell, index) {
		// get data centres
		
		const image = nutshell.querySelector(".image");
		const temperature = nutshell.querySelector(".temp_val");
		const town = nutshell.querySelector(".city");
		const country = nutshell.querySelector(".country");
		const longitude = nutshell.querySelector(".lon_val");
		const latitude = nutshell.querySelector(".lat_val");
		
		// retrieve weather data
		fetchData(randomCities[index]).then(result => {
			image.src = `http://openweathermap.org/img/wn/${result.weather[0].icon}@2x.png`;
			temperature.innerHTML = Math.ceil(Number(result.main.temp) - 273.15);
			town.innerHTML = result.name;
			country.innerHTML = result.sys.country;
			longitude.innerHTML = result.coord.lon;
			latitude.innerHTML = result.coord.lat;
			console.log(result);
		});
	});
}*/

function minors() {
	nutshells.forEach(function(nutshell, index) {
		// get data centres
		
		const image = nutshell.querySelector(".image");
		const temperature = nutshell.querySelector(".temp_val");
		const town = nutshell.querySelector(".city");
		const country = nutshell.querySelector(".country");
		const longitude = nutshell.querySelector(".lon_val");
		const latitude = nutshell.querySelector(".lat_val");
		
		// retrieve weather data
		fetchData(randomCities[index]).then(result => {
			image.src = `http://openweathermap.org/img/wn/${result.weather[0].icon}@2x.png`;
			temperature.innerHTML = Math.round(Number(result.main.temp) - 273.15);
			town.innerHTML = result.name;
			country.innerHTML = result.sys.country;
			longitude.innerHTML = result.coord.lon;
			latitude.innerHTML = result.coord.lat;
		});
	});
}

minors();


// get primary data

const mainImage = document.querySelector(".main_image");
const mainTemp = document.querySelector(".main_temp_val");
const mainCity = document.querySelector(".main_city");
const mainCountry = document.querySelector(".main_country");
const mainDescription = document.querySelector(".main_description");
const mainBrief = document.querySelector(".main_brief_description");
const feels = document.querySelector(".main_feels");
const humidity = document.querySelector(".main_humidity");
const pressure = document.querySelector(".main_pressure");
const windSpeed = document.querySelector(".main_wind_speed");
const degree = document.querySelector(".main_wind_degree");
const mainLat = document.querySelector(".main_latitude");
const mainLon = document.querySelector(".main_longitude");

window.onload = function() {
	// grab search value and button
	
	const search = document.getElementById("search");
	const find = document.getElementById("find");
	
	find.onclick = function() {
		if(search.value == "") {
			return;
		}
		fetchData(search.value).then(function(response) {
			mainImage.src = `http://openweathermap.org/img/wn/${response.weather[0].icon}@2x.png`;
			mainTemp.innerHTML = Math.ceil(Number(response.main.temp) - 273.15);
			mainCity.innerHTML = response.name;
			mainCountry.innerHTML = response.sys.country;
			mainDescription.innerHTML = response.weather[0].main;
			mainBrief.innerHTML = response.weather[0].description;
			feels.innerHTML = Math.ceil(Number(response.main.feels_like) - 273.15);
			humidity.innerHTML = response.main.humidity;
			pressure.innerHTML = response.main.pressure;
			windSpeed.innerHTML = response.wind.speed;
			degree.innerHTML = response.wind.deg;
			mainLat.innerHTML = response.coord.lat;
			mainLon.innerHTML = response.coord.lon;
		})
		search.value = "";
		return;
	}
	
	// default values for primary section
	do {
		const randNum = Math.ceil(Math.random() * (cities.length - 1));
		const randCity = cities[randNum];
		if(!citySet.has(randCity)) {
			fetchData(randCity).then(function(response) {
				mainImage.src = `http://openweathermap.org/img/wn/${response.weather[0].icon}@2x.png`;
				mainTemp.innerHTML = Math.ceil(Number(response.main.temp) - 273.15);
				mainCity.innerHTML = response.name;
				mainCountry.innerHTML = response.sys.country;
				mainDescription.innerHTML = response.weather[0].main;
				mainBrief.innerHTML = response.weather[0].description;
				feels.innerHTML = Math.ceil(Number(response.main.feels_like) - 273.15);
				humidity.innerHTML = response.main.humidity;
				pressure.innerHTML = response.main.pressure;
				windSpeed.innerHTML = response.wind.speed;
				degree.innerHTML = response.wind.deg;
				mainLat.innerHTML = response.coord.lat;
				mainLon.innerHTML = response.coord.lon;
			})
			break;
		}
	}while(true);
};