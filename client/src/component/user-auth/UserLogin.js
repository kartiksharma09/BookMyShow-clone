import React, { Fragment,useState } from 'react';
import { Link , Redirect} from 'react-router-dom';
import '../../css/form.css';
import PropTypes from 'prop-types'
import { userLogin } from '../../actions/auth';
import { connect } from 'react-redux';

const UserLogin = ({userLogin, auth:{loading, isAuthenticated}}) => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
      });
    
      const { email, password } = formData;
    
      const onChange = (e) =>
        setFormData({ ...formData, [e.target.name]: e.target.value });
    
      const onSubmit = async (e) => {
        e.preventDefault();
        console.log(formData)
        userLogin({email,password});
      };


      if (!loading && isAuthenticated ){
        return <Redirect to="/search-movies" />;
      }

    return (
        <Fragment>
            <div className="container pt-5">
          <h1 className="large text-danger" style={{textShadow: "1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000"}}>Sign In</h1>
          <p className="lead">Log In To Book Tickets</p>
          <form className="form user_form" onSubmit={(e) => onSubmit(e)}>
            <div className="form-group userFormGroup">
              <input
                type="email"
                placeholder="Email Address"
                name="email"
                value={email}
                onChange={(e) => onChange(e)}
              />
            </div>
            <div className="form-group userFormGroup">
              <input
                type="password"
                placeholder="Password"
                name="password"
                value={password}
                onChange={(e) => onChange(e)}
                minLength="6"
              />
            </div>
            <input type="submit" className="btn btn-secondary" value="Log In" />
          </form>
          <p className="my-1">
            Don't have an account? <Link to="/user-register">Sign Up</Link>
          </p>
          </div>
        </Fragment>
      );
};

UserLogin.propTypes = {
  userLogin:PropTypes.func.isRequired,
  auth:PropTypes.object,
}

const mapStateToProps = state => ({
  auth:state.auth
})

export default connect(mapStateToProps,{userLogin})(UserLogin);
