import React from 'react';

const Entry = ({ physician }) => {

    return (
        <div className='entry' >
            {physician.name}
            {physician.id}
        </div>
    )
}


export default Entry;