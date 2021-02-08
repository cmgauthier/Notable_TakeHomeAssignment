import React from 'react';
import Entry from './Entry';

const PatientList = (data) => {


    return (
        <div className='datacontent'>
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