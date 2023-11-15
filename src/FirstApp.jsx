import React from 'react'
import PropTypes from "prop-types"
const newMessage = {
    message: "Hola mundo",
    title: "Angelo"
};

const getResult = () => {
    return 3 + 5;
}

export const FirstApp = ({title, subTitle,name}) => {
    return (
        <>
            <h1 data-testid="test-title"> {title} </h1>
            <p>{subTitle}</p>
            <p>{subTitle}</p>
            {/* <p>{getResult()}</p> */}
            {/* <code>{JSON.stringify(newMessage)}</code> */}
            {/* <p>soy un subtitulo</p> */}
            <p>{name}</p>

        </>
    )
}

FirstApp.propTypes = {
    // title: PropTypes.string.isRequired,
    subTitle: PropTypes.string
}

FirstApp.defaultProps = {
    name:"Angelo Perez",
    subTitle:"No hay subtítulo",
    // title:"No hay título"
}