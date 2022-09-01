import { useState } from "react"
import { city_names } from "../cities"

const Search = () => {
  const [query, setQuery] = useState("")
  return (
    <div className="search-container">
        <input type="text" placeholder="Enter your city" className="user-city" id="city-input" onChange={e=> setQuery(e.target.value)}/>
        <button type="submit" id="city-button">Find something fun to do</button>
        <ul className="city-list">
          {city_names.filter(city=>city.toLowerCase().includes(query)).map((city) => (
            <li key={city} className="city-name">{city}</li>
          ))}
        </ul>
    </div>
  )
}

export default Search