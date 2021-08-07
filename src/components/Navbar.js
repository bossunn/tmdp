import React, { useEffect, useState } from 'react';
import moviesApi from '../apis/moviesApi';
import logo from '../assets/1979.jpg'

function Navbar({ onChange }) {
  const [genre, setGenre] = useState([]);
  
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

  const handleFilterGenre = (values) => {
    if (onChange) {
      onChange(values.id);
    }
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
                          <a className="nav-link active" aria-current="page" href="https://nguyenhung.net" style={{color: "white"}}>Home</a>
                      </li>
                      <li className="nav-item drop-down">
                        <a className="nav-link dropdown-toggle" href={{}} id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{color: "white"}}>
                          Thể loại
                        </a>
                        <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
                            {genre.map(x => (
                              <li key={x.id} onClick={() => handleFilterGenre(x)}>
                                <a className="dropdown-item" href={{}}>{x.name}</a>
                              </li>
                            ))}
                        </ul>
                      </li>
                      <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href={{}} id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{color: "white"}}>
                          Loại hình
                        </a>
                        <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
                            <li><a className="dropdown-item" href={{}}>Movie</a></li>
                            <li><a className="dropdown-item" href={{}}>TV</a></li>
                        </ul>
                      </li>
                      <li className="nav-item">
                          <a className="nav-link disabled" href="##" tabindex="-1" aria-disabled="true" style={{color: "white"}}>Disabled</a>
                      </li>
                  </ul>
                </div>
                  <form className="d-flex">
                      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                      <button className="btn btn-outline-success" type="submit">Search</button>
                  </form>           
          </div>
      </nav>
);
}

export default Navbar;