import { Link } from "react-router-dom"

const HeaderLink = ({url,children,underline}) => {
    return (
        <Link to={url} className="text-white text-lg p-4" style={{ textDecoration: `${underline}` }}>
            {children}
        </Link>
    )
}

export default HeaderLink