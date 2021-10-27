import React from 'react';
import {Link} from 'react-router.dom';

const nav = () => {
    return (
        <React.Fragment>
            <ul>
                <li>
                    <Link to = "/register">Registrase</Link>
                </li>
            </ul>


        </React.Fragment>
    )
}

export default nav;
