import React, {useState} from 'react'

const SearchBar = ({ onSearch }) => {
    const [userInput, setUserInput] = useState('');
    const handleInputChange = (event) => {
        setUserInput(event.target.value);
      };

    const handleSearch = () => {
        onSearch(userInput);
      };
  return (
    <>
    <input type="text" value={userInput} onChange={handleInputChange} />
    <button onClick={handleSearch}>Search</button>
    </>
  )
}

export default SearchBar;