

export default function BottomNav(props) {
    const {dates} = props

    return (
        <nav>
            <div className={"header"}>
                {/* <h1 className="text-gradient">APOD</h1> */}
            </div>

            <div className="date-picker-container">
                <input
                    type="date"
                    className="center-me"
                    placeholder="Select Date"
      />
            </div>

 
            <div>
            {dates.map((datesObj, datesIndex) => {
                return (
                    

                    // Button that shows the last 7 days
                    <button
                        key={datesIndex}
                        className={`nav-card `}>
                        <p>
                            {datesObj}
                        </p>
                    </button>
                )

            })}
            </div>
        </nav>
    )
}