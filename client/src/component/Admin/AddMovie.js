import React, { Fragment } from 'react';

const AddMovie = () => {
  return (
    <Fragment>
      <div className='col-12 '>
        <div className='container  my-5'>
          <div>
            <form>
              <div className='form-group'>
                <label for='formGroupExampleInput'>movieName</label>
                <input
                  type='text'
                  className='form-control'
                  id='formGroupExampleInput'
                  placeholder='Example input'
                />
              </div>
              {/*  movieName,
        posterUrl,
        timeDuration,
        genre,
        language,
        cast,
        aboutTheMovie,
        price */}
              <div className='form-group'>
                <label for='formGroupExampleInput2'>posterUrl</label>
                <input
                  type='text'
                  className='form-control'
                  id='formGroupExampleInput2'
                  placeholder='please give us the image in url format'
                />
              </div>
              <div className='form-group'>
                <label for='formGroupExampleInput2'>timeDuration</label>
                <input
                  type='text'
                  className='form-control'
                  id='formGroupExampleInput2'
                  placeholder='E.g 2h:31Min'
                />
              </div>

              <div className='form-group'>
                <label for='formGroupExampleInput2'>AboutTheMovie</label>
                <input
                  type='text'
                  className='form-control'
                  id='formGroupExampleInput2'
                  placeholder='About Movie'
                />
              </div>

              <div className='form-group'>
                <label for='formGroupExampleInput2'>timeDuration</label>
                <input
                  type='text'
                  className='form-control'
                  id='formGroupExampleInput2'
                  placeholder='Seats'
                />
              </div>



              <div className='form-group'>
                <label for='formGroupExampleInput2'>Genre</label>

                <select name='select'>
                  <option value='valor1'>Valor 1</option>
                  <option value='valor2' selected>
                    Valor 2
                  </option>
                  <option value='valor3'>Valor 3</option>
                </select>
              </div>
              <div className='text-ligh'>
                <button className='btn btn-danger ml-auto'>Addcinema</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default AddMovie;
