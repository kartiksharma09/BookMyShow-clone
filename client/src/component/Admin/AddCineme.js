import React, { Fragment } from 'react';

const AddCinema = () => {
  return (
    <Fragment>
      <div className='col-12 '>
        <div className='container  my-5'>
          <div>
            <form>
              <div className='form-group'>
                <label for='formGroupExampleInput'>cinemaName</label>
                <input
                  type='text'
                  className='form-control'
                  id='formGroupExampleInput'
                  placeholder='Enter the Cinema Name'
                />
              </div>
              <div className='form-group'>
                <label for='formGroupExampleInput2'>locationOfCinema</label>
                <input
                  type='text'
                  className='form-control'
                  id='formGroupExampleInput2'
                  placeholder='Enter the Location of Cinema'
                />
              </div>
              <div className='form-group'>
                <label for='formGroupExampleInput2'>seats</label>
                <input
                  type='dropdown'
                  className='form-control'
                  id='formGroupExampleInput2'
                  placeholder='NO. Of Seats Of Your Cinema'
                />
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

export default AddCinema;
