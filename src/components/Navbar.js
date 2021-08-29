import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import moviesApi from '../apis/moviesApi';
import logo from '../assets/1979.jpg';
import FilterByGenre from './FilterByGenre';
import FilterBySearch from './FilterBySearch';
import FilterBySort from './FilterBySort';

function Navbar({ onChange, filter }) {
  const [genre, setGenre] = useState([]);

  const history = useHistory();

  useEffect(() => {
    (async () => {
      try {
        const data = await moviesApi.getGenre();
        setGenre(data.genres);
      } catch (error) {
        console.log("Lỗi fetch", error);
      }
    })();
  },[]);

   const handleByGenre = (value) => {
     if(onChange) {
       onChange(value)
     }
   }

   const handleBySearch = (value) => {
     if(onChange) {
       onChange(value)
     }
   }

   const handleBySort = (value) => {
     if(onChange) {
      onChange(value);
     }
   }

   const handleClickMovie = () => {
     history.push(`/movie`);
   }

   const handleClickTv = () => {
     history.push(`/tv`)
   }

    return (
      <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container-fluid">
              <a className="navbar-brand" href="##">
                <img src={logo} alt="logo" style={{height: "35px" ,width: "35px"}}/>
              </a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
              </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0" >
                      <li className="nav-item" >
                          <a className="nav-link active" aria-current="page" href="http://localhost:3000/" style={{color: "white"}}>Home</a>
                      </li>
                      <li className="nav-item drop-down">
                        <a className="nav-link dropdown-toggle" href={{}} id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{color: "white"}}>
                          Thể loại
                        </a>
                        <FilterByGenre genre={genre} onChange={handleByGenre}/>
                      </li>
                      <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href={{}} id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{color: "white"}}>
                          Loại hình
                        </a>
                        <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
                            <li><a className="dropdown-item" href={{}} onClick={handleClickMovie}>Movie</a></li>
                            <li><a className="dropdown-item" href={{}} onClick={handleClickTv}>TV</a></li>
                        </ul>
                      </li>
                      <li className="nav-item dropdown">
                          <a className="nav-link dropdown-toggle" href={{}} id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{color: "white"}}>
                            Sắp xếp
                          </a>
                          <FilterBySort onChange={handleBySort}/>
                      </li>
                  </ul>
                </div>
                <FilterBySearch onChange={handleBySearch}/>          
          </div>
      </nav>
);
}

export default Navbar;