const Banner = ({backgroundImage}) => {
    return (
        <div className="h-80 bg-cover" style={{ backgroundImage: `url(${backgroundImage})` }}></div>
    )
}

export default Banner