import React,{Fragment,useState} from 'react'
import { setAlert } from '../../actions/alerts'
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import {assignMovie} from "../../actions/cinema"


export const AssignMovieCinema = ({setAlert,cinemaId, assignMovie}) => {
  console.log("cinema", cinemaId);
    const [formData, setFormData] = useState({
        movieName: "",
        from: "",
        to:"",
        startDate:"",
        endDate:""
      });
    
      const { movieName, from, to, startDate, endDate } = formData;
    
      const onChange = (e) =>
      setFormData({ ...formData, [e.target.name]: e.target.value }); 
      
      
      const onSubmit = async (e) => {
        e.preventDefault();
        let today = new Date().toISOString().slice(0, 10);
        if(startDate >= endDate || startDate<today ){
            setAlert("Please select the correct dates","danger")
        }
        assignMovie(cinemaId,formData)
        setFormData({movieName: "",
        from: "",
        to:"",
        startDate:"",
        endDate:""})
      };
    
      return (
        <Fragment>
          <div className="col-12 ">
            <div className="container  my-5">
                <form onSubmit={e=>onSubmit(e)}>
                  <div className="form-group">
                    <label for="formGroupExampleInput"><strong>Movie Name</strong></label>
                    <input
                      type="text"
                      className="form-control"
                      name="movieName"
                      value={movieName}
                      onChange={(e) => onChange(e)}
                      placeholder="Enter the Movie Name You Want To Play"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label for="formGroupExampleInput2"><strong>Movie Start Time</strong></label>
                    <input
                      type="text"
                      className="form-control"
                      name="from"
                      value={from}
                      onChange={(e) => onChange(e)}
                      placeholder="Enter the Play Time of Movie In Your Cinema"
                      required
                    />
                    </div>
                    <div className="form-group">
                    <label for="formGroupExampleInput2"><strong>Ending Time Of Movie</strong></label>
                    <input
                      type="text"
                      className="form-control"
                      name="to"
                      value={to}
                      onChange={(e) => onChange(e)}
                      placeholder="Enter the Ending Time of Movie In Your Cinema"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label for="formGroupExampleInput2"><strong>From</strong></label>
                    <input
                      type="date"
                      className="form-control"
                      name="startDate"
                      value={startDate}
                      onChange={(e) => onChange(e)}
                      placeholder="Enter Date, From when this movie is going to start in Your Threater "
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label for="formGroupExampleInput2"><strong>To</strong></label>
                    <input
                      type="date"
                      className="form-control"
                      name="endDate"
                      value={endDate}
                      onChange={(e) => onChange(e)}
                      placeholder="Enter Date, Till When It Will Be There In You Threater"
                      required
                    />
                  </div>
                  <div className="text-ligh">
                    <button type="submit" className="btn btn-primary ml-auto">
                      SUBMIT
                    </button>
                  </div>
                </form>
            </div>
          </div>
        </Fragment>
      );
}
AssignMovieCinema.propTypes = {
    setAlert: PropTypes.func.isRequired,
    assignMovie:PropTypes.func.isRequired,
  };

export default connect(null,{setAlert,assignMovie})(AssignMovieCinema)