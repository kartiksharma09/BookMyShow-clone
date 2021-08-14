import React from "react";
import "../../css/ticket.scss"

export const Ticket = () => {
    return (
        <div className='ticket'>
            <div className='holes-top'></div>
            <div className='title'>
                <p className='cinema'>ODEON CINEMA PRESENTS</p>
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
                        <th>SCREEN</th>
                        <th>No of Seats</th>
                    </tr>
                    <tr>
                        <td className='bigger seats-bigger'>1</td>
                        <td className='bigger seats-bigger'>3</td>
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
            <div className='holes-lower'></div>
            <div className='serial'>
                <table className='barcode'>
                    <tr></tr>
                </table>
                {/* <table className='numbers'>
                    <tr>
                        <td>9</td>
                        <td>1</td>
                        <td>7</td>
                        <td>3</td>
                        <td>7</td>
                        <td>5</td>
                        <td>4</td>
                        <td>4</td>
                        <td>4</td>
                        <td>5</td>
                        <td>4</td>
                        <td>1</td>
                        <td>4</td>
                        <td>7</td>
                        <td>8</td>
                        <td>7</td>
                        <td>3</td>
                        <td>4</td>
                        <td>1</td>
                        <td>4</td>
                        <td>5</td>
                        <td>2</td>
                    </tr>
                </table> */}
            </div>
        </div>
    );
};
