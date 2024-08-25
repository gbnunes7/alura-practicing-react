const Banner = ({backgroundImage}) => {
    return (
        <div className={`h-80 bg-[url('${backgroundImage}')]`}></div>
    )
}

export default Banner