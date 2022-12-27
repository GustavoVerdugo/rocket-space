const HeaderIcon = ({ Icon, active }) => {
    return (
        <div className=" flex items-center cursor-pointer md:px-1 sm:h-14 group">
            <Icon className={`h-5 text-white text-center sm:h-7 mx-auto
            ${active && 'text-blue-500'}`} />
        </div>
    )
}

export default HeaderIcon