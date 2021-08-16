import React,{Fragment,useEffect} from "react";
import "../../css/ticket.scss"
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { ViewTickets } from "../../actions/tickets";
import { CancelTickets } from '../../actions/tickets';
import { NotFound } from "./NotFound";
const Ticket = ({ Tickets:{tickets,loading}, CancelTickets,ViewTickets }) => {
    useEffect(() => {
        ViewTickets() 
    }, [ViewTickets])
    const renderId = (id) => {
        console.log("id comming",id)
        CancelTickets(id)
    }
    console.log(tickets,"hello")
    return !loading && tickets.length>0 ? (<Fragment>
       
        {tickets.map(ticket => (<Fragment>
            <div className="row flex-column mb-4">
            <div className='ticket mb-4 mt-3'>
       
        <div className='holes-top'></div>
        <div className='title'>
            <p className='cinema'>{ticket.cinemaId.cinemaName} CINEMA PRESENTS</p>
            <p className='movie-title'>ONLY GOD FORGIVES</p>
        </div>
        <div class='poster'>
            <img className="img-ticket"
                src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/25240/only-god-forgives.jpg'
                alt='Movie: Only God Forgives'
            />
        </div>
        <div className='info'>
            <table>
                <tr>
                    <th>Location</th>
                    <th>Seats No.</th>
                </tr>
                <tr>
                    <td className='bigger seats-bigger pl-0'><strong>{ticket.cinemaId.locationOfCinema}</strong></td>
                    <td className='bigger seats-bigger pl-0'>{ticket.Seats.map(seat =>(<Fragment>{seat} </Fragment>))}</td>
                </tr>
            </table>
            <table>
                <tr>
                    <th>PRICE</th>
                    <th>DATE</th>
                    <th>TIME</th>
                </tr>
                <tr>
                    <td>$12.00</td>
                    <td>1/13/17</td>
                    <td>19:30</td>
                </tr>
            </table>
        </div>
        <div className='holes-lower text-center'>
        <button className="btn btn-outline-danger"
                type="bottom" id={ticket._id} onClick={(e) => renderId(e.target.id)}
            >
                cancel </button>
        </div>
    </div></div></Fragment>) )}
    </Fragment>
    ) : (<Fragment><NotFound /></Fragment>)
};
Ticket.propTypes = {
    CancelTickets: propTypes.func.isRequired,
    ViewTickets:propTypes.func.isRequired,
    Tickets: propTypes.object.isRequired
}
const mapStateToProps = (state) => ({
    Tickets: state.Tickets
})
export default connect(mapStateToProps, { CancelTickets,ViewTickets })(Ticket);
