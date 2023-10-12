const { DateTime } = require("luxon")

export const getDate = (timestamp: string): string => {
    const date = DateTime.fromSeconds(parseInt(timestamp, 10))
    const dateFormat = date.toFormat("MM dd, yyyy HH:mm:ss")
    return dateFormat
}
