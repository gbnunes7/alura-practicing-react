import { Link } from "react-router-dom"

const HeaderLink = ({url,children}) => {
    return (
        <Link to={url} className="text-white text-lg">
            {children}
        </Link>
    )
}

export default HeaderLink