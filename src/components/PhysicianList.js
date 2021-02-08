import React from 'react';
import Entry from './Entry';

const PhysicianList = ({ physicians, onClick }) => {

    return (
        <div className='datacontent'>
           <ul className='list'>
                {
                    physicians.map((physician, index) => (
                        <
                            Entry
                            key={index}
                            physician={physician}
                            onClick={onClick}
                        />
                    ))
                }
            </ul>
        </div>

    )
}


export default PhysicianList;