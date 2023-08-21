import React, {useState} from 'react'

const SearchBar = ({props}) => {
    const [userInput, setUserInput] = useState('');
    const handleInputChange = (event) => {
        setUserInput(event.target.value);
      };

    const handleSearch = () => {
        props(userInput);
      };
  return (
    <>
    <input type="text" value={userInput} onChange={handleInputChange} />
    <button onClick={handleSearch}>Search</button>
    </>
  )
}

export default SearchBar;