import { APODWeek } from "../utility"

export default function BottomNav() {
    return (
        <nav>
            <div className={"header"}>
                {/* <h1 className="text-gradient">APOD</h1> */}
            </div>

            <div class="date-picker-container">
                <input
                    type="date"
                    class="center-me"
                    placeholder="Select Date"
      />
            </div>

 
            <div>
            {APODWeek.map((celesObj, celesIndex) => {
                return (
                    <button
                        key={celesIndex}
                        className={`nav-card `}>
                        <p>
                            {celesObj}
                        </p>
                    </button>

                )

            })}
            </div>
        </nav>
    )
}