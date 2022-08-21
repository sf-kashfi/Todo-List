import React from "react";
import './Header.css';


const Header = (props) => {

    const d = new Date();
    var dayOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    return (
        <div>
            <div className='date'>
                <h1><b>{dayOfWeek[d.getDay()]}, {d.getDate()}</b><sup>st</sup></h1>
                <div className='lastLine'>
                    <h2 className='taskNumber'>{props.tasknumber} Tasks</h2>
                    <h2>{monthNames[d.getMonth()]}</h2>
                </div>

            </div>
            <hr></hr>
        </div>
    );
};

export default Header;