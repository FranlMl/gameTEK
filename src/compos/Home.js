import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDragon } from "@fortawesome/free-solid-svg-icons";
import GameCard from "./GameCard";
import axios from "axios";



const sortList = [
  {
    filterName: "Relevance",
    value: "-relevance",
  },
  {
    filterName: "Name",
    value: "name",
  },
];


const Home = () => {

  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const [platformList, setPlatformList] = useState([]);
  const [platform, setPlatform] = useState(null);

  const [sort, setSort] = useState("-relevance");

  const [searchQuery, setSearchQuery] = useState(null);
  


  const privateKey = "11e3695ec1064c14b8163bc39c927e58";



  const fetchPlatformList = async () => {
    const response = await axios.get("https://api.rawg.io/api/platforms", {
      params: {
        key: privateKey,
      },
    });
    setPlatformList(response.data.results);
  };

  const fetchData = async () => {
    try {
      const response = await axios.get("https://api.rawg.io/api/games", {
        params: {
          key: privateKey,
          page_size: 40,
          search: searchQuery,
          ordering: sort,
          platforms: platform, // id of the platform
        },
      });

      setData(response.data);
      setIsLoading(false);

      console.log(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchPlatformList();
    fetchData();
  }, []);

  useEffect(() => {
    fetchData();
  }, [searchQuery, sort, platform]);


/* ********************************* */


  return isLoading === true ? (

    <h1> Downloading </h1>
  ) : (

    <div className="home-page">
      <div className="home-title">
        <FontAwesomeIcon icon={faDragon} className="dragon" />

        <h1> GameTEK </h1>

      <input type="text" 
      placeholder="searchBar"
      onChange={(e)=> { const query = setSearchQuery(e.target.value);
      if (query > 2) {searchQuery(query)}
      
      } } />



        <select
          name="filter"
          id="filter"
          onChange={(e) => {
            setSort(e.target.value);
          }}
        >
          {sortList.map((filter) => (
            <option value={filter.value}>{filter.filterName}</option>
          ))}

        </select>


        <select
          name="platform"
          id="platform"
          onChange={(e) => {
            setPlatform(e.target.value);
          }}
        >
          {platformList.map((filter) => (
            <option value={filter.id}>{filter.name}</option>
          ))}

        </select>        

      </div>
      
      <div className="boxgamecard">
        {data.results.map((game) => (
          <GameCard key={game._id} game={game} />
        ))}
      </div>

    </div>
  );
};

export default Home;
