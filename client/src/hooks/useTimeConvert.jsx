import moment from "moment"

export const useTimeConvert = (seconds) => {
    return moment.utc(seconds * 1000).format(`${seconds < 999 ? 'm:ss' : 'mm:ss'}`)
}

export const useGetTime = (date) => {
    return moment(date).utcOffset('+02:00').format('HH:mm')
}