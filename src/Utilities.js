// import React from "react"

const isArrEmpty = (props) => {
    if (props === null || props === undefined || props.length <= 0) {
        <h3>Ops... Nothing to see here!</h3>
        return true;
    }
    return false;
}

const dumpLog = (props) => {
    console.log(props);
}

export {isArrEmpty, dumpLog};