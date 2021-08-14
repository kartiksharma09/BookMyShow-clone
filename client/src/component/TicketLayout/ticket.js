import React, { useState, Fragment } from "react";
import { Link } from 'react-router-dom';
import PropTypes from "prop-types";
import bookTickets from '../../actions/tickets';
import propTypes from 'prop-types'
import { connect } from 'react-redux';

const Tickets = ({ bookTickets, Movie}) =>{
    const [name, setName] = useState([]);
    const [age, setAge] = useState([]);
    const [gender, setGender] = useState([]);
    const [seatNumber, setSeatnumber] = useState([]);
    const [isok, setIsok] = useState(false);
    const [Booking, setBookingdate] = useState(new Date());

    const movieId = Movie._id
    // const cinemaId = Movie.releaseDetails[0]._id

    const getSeatNumber = (e) => {
        let newSeat = Number(e.target.id);
        console.log(typeof (newSeat))
        if (seatNumber.includes(newSeat)) {
            setSeatnumber(seatNumber.filter((seat) => seat !== newSeat));
        } else {
            setSeatnumber([...seatNumber, newSeat])
        }
    };

    const PassengerName = (e) => {
        e.preventDefault();
        const value = e.target.value;
        console.log(value)
        if (!value) {
            return setName("name is not required")
        } else {
            setName(...name, value);
        }
    };

    const PassengerAge = (e) => {
        e.preventDefault();
        let value = e.target.value;
        console.log("madvbk", value)
        if (!value) { return setAge("Age is required") }
        setAge(...age, value)
    }
    const BookingDate = (e) => {
        e.preventDefault();
        let value = e.target.value;
        console.log("Booking", value)
        if (!value) { return setBookingdate("Age is required") }
        setBookingdate(value)
    }

    const Gender = (e) => {
        const value = e.target.id;
        console.log("gender", value)
        setGender(...gender, value);
    };

    const SubmitDetails = (e) => {
        e.preventDefault();
        const watchers = []
        for (let i = 0; i < seatNumber.length; i++) {
            const newSeat = seatNumber[i]
            if (name[newSeat] || age[Number(newSeat)] || gender[newSeat] !== "Empty") {
                watchers.push({ name: name, age: age, gender: gender })
            }
        }

        bookTickets({
            movieId,
            // cinemaId,
            seatNumber,
            watchers,
            Booking
        })
    }
    return (
        <Fragment>
            <div className="col-12">
                <div class="col">
                    <div className="form-group row">
                        <div className="col">
                            <div class="plane">
                                <h1>Please select a seat</h1>
                                <div class="exit exit--front fuselage">
                                </div>
                                <form onChange={(e) => {
                                    setIsok(true)
                                    getSeatNumber(e)
                                }}>
                                    <ol class="cabin fuselage">
                                        <li class="row row--1">
                                            <ol class="seats" type="A">
                                                <li class="seat">
                                                    <input type="checkbox" id="1"/>
                                                    <label for="1">1</label>
                                                </li>
                                                <li class="seat">
                                                    <input type="checkbox" id="2" />
                                                    <label for="2">2</label>
                                                </li>
                                                <li class="seat">
                                                    <input type="checkbox" id="3" />
                                                    <label for="3">3</label>
                                                </li>
                                                <li class="seat">
                                                    <input type="checkbox" id="4" />
                                                    <label for="4">4</label>
                                                </li>
                                                <li class="seat">
                                                    <input type="checkbox" id="5" />
                                                    <label for="5">5</label>
                                                </li>
                                                <li class="seat">
                                                    <input type="checkbox" id="6" />
                                                    <label for="6">6</label>
                                                </li>
                                                <li class="seat">
                                                    <input type="checkbox" id="7" />
                                                    <label for="7">7</label>
                                                </li>
                                                <li class="seat">
                                                    <input type="checkbox" id="8" />
                                                    <label for="8">8</label>
                                                </li>
                                                <li class="seat">
                                                    <input type="checkbox" id="9" />
                                                    <label for="9">9</label>
                                                </li>
                                                <li class="seat">
                                                    <input type="checkbox" id="10" />
                                                    <label for="10">10</label>
                                                </li>
                                            </ol>
                                        </li>
                                        <li class="row row--2">
                                            <ol class="seats" type="A">
                                                <li class="seat">
                                                    <input type="checkbox" id="11" />
                                                    <label for="11">11</label>
                                                </li>
                                                <li class="seat">
                                                    <input type="checkbox" id="12" />
                                                    <label for="12">12</label>
                                                </li>
                                                <li class="seat">
                                                    <input type="checkbox" id="13" />
                                                    <label for="13">13</label>
                                                </li>
                                                <li class="seat">
                                                    <input type="checkbox" id="14" />
                                                    <label for="14">14</label>
                                                </li>
                                                <li class="seat">
                                                    <input type="checkbox" id="15" />
                                                    <label for="15">15</label>
                                                </li>
                                                <li class="seat">
                                                    <input type="checkbox" id="16" />
                                                    <label for="16">16</label>
                                                </li>
                                                <li class="seat">
                                                    <input type="checkbox" id="17" />
                                                    <label for="17">17</label>
                                                </li>
                                                <li class="seat">
                                                    <input type="checkbox" id="18" />
                                                    <label for="18">18</label>
                                                </li>
                                                <li class="seat">
                                                    <input type="checkbox" id="19" />
                                                    <label for="19">19</label>
                                                </li>
                                                <li class="seat">
                                                    <input type="checkbox" id="20" />
                                                    <label for="20">20</label>
                                                </li>
                                            </ol>
                                        </li>
                                        <li class="row row--3">
                                            <ol class="seats" type="A">
                                                <li class="seat">
                                                    <input type="checkbox" id="21" />
                                                    <label for="21">21</label>
                                                </li>
                                                <li class="seat">
                                                    <input type="checkbox" id="22" />
                                                    <label for="22">22</label>
                                                </li>
                                                <li class="seat">
                                                    <input type="checkbox" id="23" />
                                                    <label for="23">23</label>
                                                </li>
                                                <li class="seat">
                                                    <input type="checkbox" id="24" />
                                                    <label for="24">24</label>
                                                </li>
                                                <li class="seat">
                                                    <input type="checkbox" id="25" />
                                                    <label for="25">25</label>
                                                </li>
                                                <li class="seat">
                                                    <input type="checkbox" id="26" />
                                                    <label for="26">26</label>
                                                </li>
                                                <li class="seat">
                                                    <input type="checkbox" id="27" />
                                                    <label for="27">27</label>
                                                </li>
                                                <li class="seat">
                                                    <input type="checkbox" id="28" />
                                                    <label for="28">28</label>
                                                </li>
                                                <li class="seat">
                                                    <input type="checkbox" id="29" />
                                                    <label for="29">29</label>
                                                </li>
                                                <li class="seat">
                                                    <input type="checkbox" id="40" />
                                                    <label for="40">40</label>
                                                </li>
                                            </ol>
                                        </li>
                                        <li class="row row--4">
                                            <ol class="seats" type="A">
                                                <li class="seat">
                                                    <input type="checkbox" id="31" />
                                                    <label for="31">31</label>
                                                </li>
                                                <li class="seat">
                                                    <input type="checkbox" id="33" />
                                                    <label for="32">32</label>
                                                </li>
                                                <li class="seat">
                                                    <input type="checkbox" id="33" />
                                                    <label for="33">33</label>
                                                </li>
                                                <li class="seat">
                                                    <input type="checkbox" id="34" />
                                                    <label for="34">34</label>
                                                </li>
                                                <li class="seat">
                                                    <input type="checkbox" id="35" />
                                                    <label for="35">35</label>
                                                </li>
                                                <li class="seat">
                                                    <input type="checkbox" id="36" />
                                                    <label for="36">36</label>
                                                </li>
                                                <li class="seat">
                                                    <input type="checkbox" id="37" />
                                                    <label for="37">37</label>
                                                </li>
                                                <li class="seat">
                                                    <input type="checkbox" id="38" />
                                                    <label for="38">38</label>
                                                </li>
                                                <li class="seat">
                                                    <input type="checkbox" id="39" />
                                                    <label for="39">39</label>
                                                </li>
                                                <li class="seat">
                                                    <input type="checkbox" id="40" />
                                                    <label for="40">40</label>
                                                </li>
                                            </ol>
                                        </li>
                                        <li class="row row--5">
                                            <ol class="seats" type="5">
                                                <li class="seat">
                                                    <input type="checkbox" id="41" />
                                                    <label for="41">41</label>
                                                </li>
                                                <li class="seat">
                                                    <input type="checkbox" id="42" />
                                                    <label for="42">42</label>
                                                </li>
                                                <li class="seat">
                                                    <input type="checkbox" id="43" />
                                                    <label for="43">43</label>
                                                </li>
                                                <li class="seat">
                                                    <input type="checkbox" id="44" />
                                                    <label for="44">44</label>
                                                </li>
                                                <li class="seat">
                                                    <input type="checkbox" id="45" />
                                                    <label for="45">45</label>
                                                </li>
                                                <li class="seat">
                                                    <input type="checkbox" id="46" />
                                                    <label for="46">46</label>
                                                </li>
                                                <li class="seat">
                                                    <input type="checkbox" id="47" />
                                                    <label for="47">47</label>
                                                </li>
                                                <li class="seat">
                                                    <input type="checkbox" id="48" />
                                                    <label for="48">48</label>
                                                </li>
                                                <li class="seat">
                                                    <input type="checkbox" id="49" />
                                                    <label for="49">49</label>
                                                </li>
                                                <li class="seat">
                                                    <input type="checkbox" id="50" />
                                                    <label for="50">50</label>
                                                </li>
                                            </ol>
                                        </li>
                                    </ol>
                                </form>
                            </div>
                        </div>
                        <div className="col">
                            {
                                (isok) ? (
                                    <Fragment>
                                        <div className="col">
                                            {
                                                <div className="seat-plane">
                                                    <div class="ticket-box">
                                                        <h2>seats {`${seatNumber}`}</h2>
                                                        <form className="Book-tiecket-form">
                                                            <div class="user-box">
                                                                <input type="text" name="name" required="" onChange={(e) => PassengerName(e)} />
                                                                <label> Name </label>

                                                            </div>
                                                            <div class="user-box">
                                                                <input type="text" name="age" required="" onChange={(e) => PassengerAge(e)} />
                                                                <label> Age </label>
                                                            </div>
                                                            <div className="form-check form-check-inline">
                                                                <input type="radio" name="gender" id="male" required="" onChange={(e) => Gender(e)} />
                                                                <label> Male </label>
                                                            </div>
                                                            <div className="form-check form-check-inline">
                                                                <input type="radio" name="gender" id="female" required="" onChange={(e) => Gender(e)} />
                                                                <label> Female </label>
                                                            </div>

                                                            <div className="user-box">
                                                                <input type="date" id="bookingDate" name="bookingDate" required="" onChange={(e) => BookingDate(e)} />
                                                                <label> Booking Date </label>
                                                            </div>
                                                            <div className="text-center">
                                                                <button className="btn btn-primary mt-3" type="submit" onClick={(e) => SubmitDetails(e)}>Book tickets</button>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                            }
                                        </div>
                                    </Fragment>
                                ) : null
                            }
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
};
Tickets.propTypes = ({
    bookTickets: propTypes.func.isRequired,
})
const mapStateToProps = (state) => ({
    Movie:state.movie.movie.searchedMovie,
})

export default connect(mapStateToProps, { bookTickets })(Tickets);
