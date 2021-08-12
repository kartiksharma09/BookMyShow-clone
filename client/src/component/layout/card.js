import React, { Fragment } from 'react';
import { Link ,useHistory} from 'react-router-dom';

import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import lead from '../../images/lead.webp'

const Cards = () => {

let history = useHistory();

  return (
    <Fragment>
      <div className='col-12'>
        <div className='container my-3'>
          <Link to="" class='card bg-dark text-white'>
              <img src={lead}/>
          </Link>
        </div>
      </div>

      <div className='col-12'>
        <div className='container my-4'>
          <div className='container-fluid'>
            <div className='scrolling-wrapper row flex-row flex-nowrap mt-4 pb-4 pt-2'>
              <div className='col-3 mr-3'>
                <div className='card card-block card-1'></div>
              </div>
              <div className='col-3 mr-3'>
                <div className='card card-block card-2'></div>
              </div>
              <div className='col-3 mr-3'>
                <div className='card card-block card-3'></div>
              </div>
              <div className='col-3 mr-3'>
                <div className='card card-block card-4'></div>
              </div>
              <div className='col-3 mr-3'>
                <div className='card card-block card-5'></div>
              </div>
              <div className='col-3 mr-3'>
                <div className='card card-block card-6'></div>
              </div>
              <div className='col-3 mr-3'>
                <div className='card card-block card-7'></div>
              </div>
              <div className='col-3 mr-3'>
                <div className='card card-block card-8'></div>
              </div>
              <div className='col-3 mr-3'>
                <div className='card card-block card-9'></div>
              </div>
              <div className='col-3 mr-3'>
                <div className='card card-block card-10'></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-12">
        <div className="container">
          <div>
            Recommanded Movies
          </div>
          <div className="row">
            <div className="col-3">
                <div className="card movie-image my-3" style={{backgroundImage: `url("https://in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/avengers-age-of-ultron-et00024757-09-03-2017-07-09-00.jpg")`}} onClick={()=>history.push('/movie')}>
                  {/* <img className="card-img-top" src="https://in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/avengers-age-of-ultron-et00024757-09-03-2017-07-09-00.jpg" alt="Card image cap"/> */}
                    <div className="card-body">
                    </div>
                    <div className="card-footer">
                      <h5 className="movie-title">Avengers Age of Ulton</h5>
                      <p className="card-text movie-genro">Action,Advanture</p>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Cards;
