const PageLink = (props) => {
    const {href, text} = props.link;    
    return (
        <li> <a href={href} className={props.itemClass} rel="noreferrer">{` ${text} `}</a></li>
    );
}

export default PageLink;
