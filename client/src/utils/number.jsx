import moment from "moment"

export const getTimeConvert = (seconds) => {
  return moment.utc(seconds * 1000).format(`${seconds < 999 ? 'm:ss' : 'mm:ss'}`)
}

export const getTime = (date) => {
  return moment(date).format('HH:mm')
}

export const getNumberFormat = (num) => {
  return Intl.NumberFormat('en-EN', {
      notation: 'compact',
      maximumFractionDigits: 1
      }).format(num)
}