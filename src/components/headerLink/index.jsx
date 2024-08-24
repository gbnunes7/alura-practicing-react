import { Link } from "react-router-dom"

const HeaderLink = ({url,children}) => {
    return (
        <Link to={url} className="text-white text-lg p-4 no-underline">
            {children}
        </Link>
    )
}

export default HeaderLink