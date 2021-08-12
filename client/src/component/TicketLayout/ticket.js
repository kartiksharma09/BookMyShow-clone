import React, { Fragment } from "react";
import { useHistory, Link } from 'react-router-dom';
import PropTypes from "prop-types";

const Tickets = ()=>{
    return (
        <div class="plane">
            <link rel="stylesheet">
                <h1>Please select a seat</h1>
                <div class="exit exit--front fuselage">
                </div>
                <ol class="cabin fuselage">
                    <li class="row row--1">
                        <ol class="seats" type="A">
                            <li class="seat">
                                <input type="checkbox" id="1"/>
                                <label for="1">1</label>
                            </li>
                            <li class="seat">
                                <input type="checkbox" id="2"/>
                                <label for="2">2</label>
                            </li>
                            <li class="seat">
                                <input type="checkbox" id="3" />
                                <label for="3">3</label>
                            </li>
                            <li class="seat">
                                <input type="checkbox" id="4"/>
                                <label for="4">4</label>
                            </li>
                            <li class="seat">
                                <input type="checkbox" id="5"/>
                                <label for="5">5</label>
                            </li>
                            <li class="seat">
                                <input type="checkbox" id="6" />
                                <label for="6">6</label>
                            </li>
                        </ol>
                    </li>
                </ol>
                <div class="exit exit--back fuselage">
                </div>
            </link>
        </div>
    )
}

export default Tickets;