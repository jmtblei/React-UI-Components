import React from 'react';
import './Header.css';

const HeaderTitle = () => {
    return (
        <div className="headertitlecontainer">
            <h2 className="headertitle">Lambda School</h2>
            <p className="headerhandle">@LambdaSchool</p>
            <p className="headertimestamp">18 Mar</p>

        </div>
    )
};

export default HeaderTitle;