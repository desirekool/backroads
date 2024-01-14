/* eslint-disable react/prop-types */
const SocialLink = (props) => {
    const {icon, itemClass} = props;    
    return (
        <li>
        <a href="#" target="_blank" className={itemClass} rel="noreferrer">
            <i className={icon}></i>
        </a>
    </li>
    );
}

export default SocialLink;