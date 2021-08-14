import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { setAlert } from '../../actions/alerts'
import {addMovieAction} from '../../actions/movie'



const AddMovie = ({setAlert,addMovieAction}) => {
  const [formData, setFormData] = useState({
    movieName: "",
    timeDuration: "",
    posterUrl: "",
    aboutTheMovie: "",
    language: "",
    genre: "",
    price:""

  });

  const [actors, setActor] = useState([]);

  const [actorData, setActorData] = useState({
    actor: "",
    character: "",
    characterImg: "",
  });

  const { actor, character, characterImg } = actorData;

  const { aboutTheMovie, language, movieName, posterUrl, price, timeDuration } =

    formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onFill = (e) => {
    setActorData({ ...actorData, [e.target.name]: e.target.value });
  };

  const onAdd = (e) => {
    e.preventDefault();
    console.log(actorData);
    setActor([...actors, actorData]);
    setActorData({
      actor: "",
      character: "",
      characterImg: "",
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if(actors.length===0){
        console.log(true)
        setAlert("Please add the actors for the movie","danger")
    }
    const movieData = {
        ...formData,
        cast:actors
    }
    console.log(movieData)
    addMovieAction(movieData)
  };

  return (
    <Fragment>
      <div className="col-12 ">
        <div className="container  my-5">
          <div>
            <form onSubmit={(e) => onSubmit(e)}>
              <div className="form-group">
                <label for="formGroupExampleInput">
                  <strong>Movie Name</strong>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="formGroupExampleInput"
                  placeholder="Enter the movie Name"
                  name="movieName"
                  value={movieName}
                  onChange={(e) => onChange(e)}
                  required
                />
              </div>
              <div className="form-group">
                <label for="formGroupExampleInput2">
                  <strong>Time Duration</strong>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="formGroupExampleInput2"
                  placeholder="Enter the Movie Time Duration"
                  name="timeDuration"
                  value={timeDuration}
                  onChange={(e) => onChange(e)}
                  required
                  required
                />
              </div>
              <div className="form-group">
                <select
                  name="language"
                  value={language}
                  onChange={(e) => onChange(e)}
                >
                  <option value="0">* Select Movie Language</option>
                  <option value="hindi">Hindi</option>
                  <option value="punjabi">Punjabi</option>
                  <option value="english">English</option>
                </select>
              </div>
              <div className="form-group">
                <label for="formGroupExampleInput2">
                  <strong>Poster Url</strong>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="formGroupExampleInput2"
                  placeholder="Enter The Movie Poster URL"
                  name="posterUrl"
                  value={posterUrl}
                  onChange={(e) => onChange(e)}
                  required
                />
              </div>
              <div className="form-group">
                <label for="formGroupExampleInput2">
                  <strong>Price</strong>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="formGroupExampleInput2"
                  placeholder="Enter The Price of movie"
                  name="price"
                  value={price}
                  onChange={(e) => onChange(e)}
                  required
                />
              </div>
              <div className="form-group">
                <label for="formGroupExampleInput2" className="pr-2">
                  <strong>Movie Genre :</strong>
                </label>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    id="inlineRadio1"
                    name="genre"
                    value="drama"
                    onChange={(e) => onChange(e)}
                  />
                  <label className="form-check-label" for="inlineRadio1">
                    drama
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    id="inlineRadio2"
                    name="genre"
                    value="comedy"
                    onChange={(e) => onChange(e)}
                    required
                  />
                  <label className="form-check-label" for="inlineRadio2">
                    comedy
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    id="inlineRadio3"
                    name="genre"
                    value="thriller"
                    onChange={(e) => onChange(e)}
                    required
                  />
                  <label className="form-check-label" for="inlineRadio3">
                    thriller
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    id="inlineRadio4"
                    name="genre"
                    value="action"
                    onChange={(e) => onChange(e)}
                  />
                  <label className="form-check-label" for="inlineRadio4">
                    action
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    id="inlineRadio5"
                    name="genre"
                    value="horror"
                    onChange={(e) => onChange(e)}
                  />
                  <label className="form-check-label" for="inlineRadio5">
                    horror
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    id="inlineRadio6"
                    name="genre"
                    value="cartoon"
                    onChange={(e) => onChange(e)}
                  />
                  <label className="form-check-label" for="inlineRadio6">
                    cartoon
                  </label>
                </div>
              </div>
              <div className="form-group">
                <textarea
                  placeholder="write the discription of your movie"

                  name="aboutTheMovie"
                  value={aboutTheMovie}
                  onChange={(e) => onChange(e)}
                ></textarea>
                <small className="form-text">Tell us about the movie</small>
              </div>
              <button
                type="button"
                className="btn btn-primary mb-4"
                data-toggle="modal"
                data-target="#exampleModalCenter"
              >
                AddActors
              </button>
              <div className="text-ligh">
                <button className="btn btn-danger ml-auto">AddMovie</button>
              </div>
            </form>
            <div
              className="modal fade"
              id="exampleModalCenter"
              tabindex="-1"
              role="dialog"
              aria-labelledby="exampleModalCenterTitle"
              aria-hidden="true"
            >
              <div
                className="modal-dialog modal-dialog-centered"
                role="document"
              >
                <div className="modal-content">
                  <div className="modal-body">
                    <form
                      onSubmit={(e) => {
                        onAdd(e);
                      }}
                    >
                      <div className="form-group">
                        <label for="formGroupExampleInput">
                          <strong>Actor Name</strong>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="formGroupExampleInput"
                          placeholder="Enter the Actor Name"
                          name="actor"
                          value={actor}
                          onChange={(e) => onFill(e)}
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label for="formGroupExampleInput2">
                          <strong>Role Play</strong>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="formGroupExampleInput2"
                          placeholder="Enter the Name of the Role Played"
                          name="character"
                          value={character}
                          onChange={(e) => onFill(e)}
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label for="formGroupExampleInput2">
                          <strong>Image Url</strong>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="formGroupExampleInput2"
                          placeholder="Enter Actor's The Image URL"
                          name="characterImg"
                          value={characterImg}
                          onChange={(e) => onFill(e)}
                          required
                        />
                      </div>
                      <button
                        type="button"
                        className="btn btn-secondary mr-3"
                        data-dismiss="modal"
                      >
                        Close
                      </button>
                      <button type="submit" className="btn btn-primary">
                        ADD
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

AddMovie.propTypes = {
    setAlert:PropTypes.func.isRequired,
    addMovieAction:PropTypes.func.isRequired,
    auth:PropTypes.object,
  };

const mapStateToProps = state => ({
  auth:state.auth,
})

export default connect(mapStateToProps,{setAlert,addMovieAction})(AddMovie);

