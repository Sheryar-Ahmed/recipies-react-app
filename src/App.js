import SearchAppBar from './Components/NavBar';
import Recipies from './Components/Recipies';
import { useEffect, useState } from 'react';
import axios from 'axios';
import LinearProgress from '@mui/material/LinearProgress';
function App() {

  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken');
  const [isLoading,setisLoading] = useState(false);
  const [isImageLoading,setisImageLoading] = useState(false);

  const searchHandler = (event) => {
      setSearch(event.target.value);
  };
  const clearHanlder = () =>{
    setSearch('');
    setQuery('chicken');
  }

  const GettingData = async () => {
    setisLoading(true);
    setisImageLoading(true)
    const response = await axios.get(`https://api.edamam.com/search?q=${query}&app_id=${process.env.REACT_APP_ID}&app_key=${process.env.REACT_APP_KEY}`);
    setisImageLoading(false)
    setisLoading(false);
    setData(response.data.hits);
  };

  useEffect(() => {
    GettingData();
  }, [query])
  const submitHandler = (e) => {
    e.preventDefault();
    setisLoading(true);
    if(search.trim().length > 0){
      setQuery(search)
    }else{
      setisLoading(false);

    }
    setisLoading(false)
  }
  return <>
    <SearchAppBar search={search} submitHand={submitHandler} searchHand={searchHandler} clearHand={clearHanlder}/>
    {isLoading && isLoading ? <LinearProgress color="success" />:null}
    <div style={{display:'flex',flexDirection:'row',justifyContent:'space-around',flexWrap:'wrap',marginTop:'1%'}}> 
      {data.map((recipe,index) => 
      <div  style={{marginBottom:'1.5rem',paddingLeft:'.8rem',}}>
      <Recipies loading={isImageLoading} title={recipe.recipe.label} calories={recipe.recipe.calories} photo={recipe.recipe.image} ingredients={recipe.recipe.ingredients} 
      />
      </div>

      )}
      </div>
      </>
}

export default App;
