import { cache } from "react"
import { useState, useEffect } from "react"

export default function AstroCard(props) {
    const { dates } = props
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)


    // Separate API call to get today's APOD??

    useEffect(() => {
        // Loading State - if Loading, exist logic


        // Verify if selected date is saved in cache:
            // 1. Define cache
            // 2. Check if date is in cache, otherwise fetch from API
            // 3. If fetchModule, save date into cache for future
    }, [dates])






    return (
        <h3 className="astroCard-container">AstroCard test</h3>
    )
}