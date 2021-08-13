import { connect } from "react-redux";
import React, { Fragment,useState } from "react";
import { addCinema } from "../../actions/cinema";
import PropTypes from "prop-types";

const AddCinema = ({ addCinema }) => {
  const [formData, setFormData] = useState({
    cinemaName: "",
    locationOfCinema: "",
  });

  const { cinemaName, locationOfCinema } = formData;

  const onChange = (e) =>
  setFormData({ ...formData, [e.target.name]: e.target.value }); 
  
  
  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(formData,"data is coming")
    addCinema(formData)
  };



  return (
    <Fragment>
      <div className="col-12 ">
        <div className="container  my-5">
          <div>
            <form onSubmit={e=>onSubmit(e)}>
              <div className="form-group">
                <label for="formGroupExampleInput">cinemaName</label>
                <input
                  type="text"
                  className="form-control"
                  name="cinemaName"
                  value={cinemaName}
                  onChange={(e) => onChange(e)}
                  placeholder="Enter the Cinema Name"
                />
              </div>
              <div className="form-group">
                <label for="formGroupExampleInput2">locationOfCinema</label>
                <input
                  type="text"
                  className="form-control"
                  name="locationOfCinema"
                  value={locationOfCinema}
                  onChange={(e) => onChange(e)}
                  placeholder="Enter the Location of Cinema"
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
      </div>
    </Fragment>
  );
};

AddCinema.propTypes = {
  auth: PropTypes.object,
  addCinema: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { addCinema })(AddCinema);
