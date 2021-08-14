import React, { Fragment ,useState,useEffect} from "react";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import Icon from "../../images/icon2.png";
import { logout } from "../../actions/auth";
import { Link, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import {searchMovieByName} from "../../actions/movie";


const NavBar = ({ auth: { isAuthenticated }, logout,searchMovieByName }) => {

  const [movieName,setMovieName] = useState("")

  const onChange = (e) =>
  setMovieName(e.target.value );
  let history =  useHistory()



  const onSubmit = async (e) => {
    e.preventDefault();
    searchMovieByName(movieName)
    history.push(`/movie/${movieName}`)
    // console.log(movieName);
  };
  const authLinks = (
    <div className="mb-4">
        <Link onClick={logout} to="/" className="btn btn-danger">
          Logout
        </Link>
    </div>
  );

  const guestLink = (
    <form className="form-group mt-1 d-flex" onSubmit={(e)=>onSubmit(e)}>
      <input
        placeholder="search by movie name"
        type="text"
        name="movieName"
        className="form-control nav-search"
        id="usr"
        value={movieName}
        onChange={(e)=> onChange(e)}
      />

      <button className="btn btn-danger ml-1" type="submit">submit</button>
    </form>
  );

  const guestLinks1 = (
    <div className="dropdown nav-Links">
      <p
        className="border-circle navbar-authmenu "
        type="button"
        id="dropdownMenuButton"
        data-toggle="dropdown"
        // aria-haspopup='true'
        // aria-expanded='false'
      >
        <AccountCircleIcon
          className="dropdown-toggle"
          style={{ fontSize: 50, fill: "white" }}
        />
      </p>

      <div className="dropdown-menu mr-5">
        <p className="ml-5 auth-links">
          <Link
            to="/user-register"
            className="text-dark text-center text-decoration-none"
          >
            Register
          </Link>
        </p>
        <p className="ml-5 auth-links">
          <Link
            to="/user-login"
            className="text-dark text-center text-decoration-none"
          >
            Login
          </Link>
        </p>
        <p className="ml-5 auth-links">
          <Link
            to="/user-register"
            className="text-dark text-center text-decoration-none"
          >
            About us
          </Link>
        </p>
      </div>
    </div>
  );

  return (
    <Fragment>
      <nav className="navbar bg-dark sticky-top ">
        <div className="col-12">
          <div className="container">
            <div className="d-flex">
              <div className="mr-5 ">
                <h1>
                  <Link to="/">
                    <img
                      src={Icon}
                      alt="nav"
                      className="nav-item1 icon-main mb-2"
                    />
                  </Link>
                </h1>
              </div>
              {<Fragment>{isAuthenticated && guestLink}</Fragment>}
            </div>
            {<Fragment>{isAuthenticated ? authLinks : guestLinks1}</Fragment>}
          </div>
        </div>
      </nav>
    </Fragment>
  );
};

NavBar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  searchMovieByName: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout,searchMovieByName })(NavBar);
