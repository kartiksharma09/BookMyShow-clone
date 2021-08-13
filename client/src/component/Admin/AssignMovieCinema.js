import React,{Fragment,useState} from 'react'

export const AssignMovieCinema = () => {
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
        console.log(formData,"data is coming")
      };
    
      return (
        <Fragment>
          <div className="col-12 ">
            <div className="container  my-5">
                <form onSubmit={e=>onSubmit(e)}>
                  <div className="form-group">
                    <label for="formGroupExampleInput">Movie Name</label>
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
                    <label for="formGroupExampleInput2"><storng>Movie Start Time</storng></label>
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
                      type="text"
                      className="form-control"
                      name="startDate"
                      value={startDate}
                      onChange={(e) => onChange(e)}
                      placeholder="Enter Date, From when this movie is going to start in Your Threater "
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label for="formGroupExampleInput2"><strong>From</strong></label>
                    <input
                      type="text"
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

export default AssignMovieCinema