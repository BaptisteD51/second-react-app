import PropTypes from "prop-types"
import defaultPicture from '../assets/photo-cv.png'
import styled from 'styled-components'

// CSS in JS
/* const CardLabel = styled.span`
    text-decoration: underline;
` */

function Card({ label, title, picture }) {
    return (
        <div className="bg-slate-100 text-blue-950 w-60 h-60 rounded-3xl shadow-xl text-lg 
            max-md:mb-10 max-md:mx-auto dark:text-white dark:bg-gray-900">
            <p className="text-violet-700 text-left pt-6 pl-6 pb-6">{title}</p>
            <figure className="flex justify-center">
                <img src={picture} alt="freelance" height={90} width={90} className="rounded-full" />
            </figure>
            <p className="p-6 text-center">{label}</p>
        </div>
    )
}

Card.propTypes = {
    label: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
}

Card.defaultProps = {
    title: "",
    label: "",
    picture: defaultPicture
}

export default Card