import { useState } from "react"
import { city_names } from "../cities"

const API_KEY = '74cc596f94620db1bf8952812d029e34'
const API_URL1 = 'https://api.openweathermap.org/data/2.5'
const API_URL2 = 'http://api.openweathermap.org/geo/1.0/direct'

const Search = () => {
  
  function getLocation() {
    fetch(API_URL2 + `?q={${query},USA}&limit=1&appid=${API_KEY}`)
    .then(res => res.json())
    .then(data => getWeatherData(data[0].lat, data[0].lon))
    .catch(error => console.log('ERROR'))
  }

  function getWeatherData(lat, lon) {
    fetch(API_URL1 + `/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`)
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(error => console.log('ERROR'))
  }

  const [query, setQuery] = useState("")
  return (
    <div className="search-container">
      {/* onChange of the input element (user types smth) event triggers setQuery to  */}
        <input type="text" placeholder="Enter your city" className="user-city" id="city-input" onChange={e=> setQuery(e.target.value)}/>
        <button type="submit" id="city-button" onClick={getLocation}>Find something fun to do</button>
        <ul className="city-list" style={{listStyle:'none'}}>
          {/* runs through every city name and filters ones that match query */}
          {city_names.filter(city=>city.toLowerCase().match(`^${query}`.toLowerCase())).map((city) => (
            <li key={city} className="city-name">{city}</li>
          ))}
        </ul>
    </div>
  )
}

export default Search