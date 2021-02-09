import React, { Component } from 'react';

const Entry = ({ entry }) => {

    return (
        <div>
            <span >{entry.name} </span>
            <span>{entry.time} </span>
            <span>{entry.kind}</span>
        </div>
    );

}

export default Entry;