import './App.css';
import MenuCard from './components/menucard/menuCard';
import SearchBar from './components/searchbar/searchBar';
import {useEffect,useState} from 'react';




function App() {

  const mockData = [
    { title: 'biryani', description: 'Description 1', image: 'https://picsum.photos/200' },
    { title: 'karhai', description: 'Description 2', image: 'https://picsum.photos/200' },
    { title: 'qeema', description: 'Description 2', image: 'https://picsum.photos/200' },
    { title: 'quorma', description: 'Description 2', image: 'https://picsum.photos/200' },
    { title: 'nihari', description: 'Description 2', image: 'https://picsum.photos/200' },
    { title: 'pulao', description: 'Description 2', image: 'https://picsum.photos/200' },
    { title: 'kabab', description: 'Description 2', image: 'https://picsum.photos/200' },
    { title: 'bihari Boti', description: 'Description 2', image: 'https://picsum.photos/200' },
    { title: 'haleem', description: 'Description 2', image: 'https://picsum.photos/200' },
    { title: 'zinger Burger', description: 'Description 2', image: 'https://picsum.photos/200' },
    { title: 'burger', description: 'Description 2', image: 'https://picsum.photos/200' },
    { title: 'chargha', description: 'Description 2', image: 'https://picsum.photos/200' },
    { title: 'tikka', description: 'Description 2', image: 'https://picsum.photos/200' },
  ];
  const [menuItems, setMenuItems] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  const handleSearch = value => {
    setSearchValue(value);
  };
  useEffect(() => {
    

    // function filterByLetter(data) {
    //   return data.filter(
    //      (item) => item.title.includes('k') || item.title.includes('K')
    //     );
    // }
    const filteredData = mockData.filter(
      (item) => item.title.includes(searchValue) || item.title.includes(searchValue.toUpperCase())
     );

     console.log(filteredData);
    // const filteredData = filterByLetter(mockData);
    

    setMenuItems(filteredData);
  }, [searchValue]);


  return (
    <div className="App">
      <h1>
        Menu With Filter
      </h1>
      <SearchBar onSearch={handleSearch}/>
      <div className="menu-grid">
        {menuItems.map((item, index) => (
          <MenuCard key={index} item={item} />
        ))}
      </div>
    </div>
  );
}

export default App;
