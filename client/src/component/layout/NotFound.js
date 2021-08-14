import React,{Fragment} from 'react';
import giphy from '../../images/giphy.gif';
export const NotFound = () => (
    <Fragment>
    <img src={giphy}
    style={{width:'400px', margin:'auto', display:'block'}}
    alt='Loading...'
    />
    <h1 className="text-center mt-4"><strong>Not Found</strong></h1>
    </Fragment>
)
