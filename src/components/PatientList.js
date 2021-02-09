import React from 'react';

const PatientList = (data) => {


    return (
        <div className='datacontent'>
            <div className="physician-header">**physician name**</div>
            <div className="physician-email">**email**</div>
            <ul className='list'>
                {
                    // data.sort.map((entry, index) => (
                    //     <
                    //         Entry
                    //         key={index}
                    //         entry={entry}
                    //     />
                    // ))
                }
            </ul>
        </div>

    )
}


export default PatientList;