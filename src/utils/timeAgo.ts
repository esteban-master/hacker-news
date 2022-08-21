type RelativeTimeFormatUnit =
  | 'year'
  | 'month'
  | 'week'
  | 'day'
  | 'hour'
  | 'minute'
  | 'second'

const units: {
  [key in RelativeTimeFormatUnit]: number
} = {
  day: 86400,
  hour: 3600,
  minute: 60,
  month: 2592000,
  second: 1,
  week: 604800,
  year: 31104000,
}
type Tuple = [RelativeTimeFormatUnit, number]
const entriesUnit: Tuple[] = Object.entries(units).sort(
  (a, b) => b[1] - a[1]
) as Tuple[]

export const timeAgo = (date: Date): string => {
  const seconds = (Date.now() - date.getTime()) / 1_000
  const rtf = new Intl.RelativeTimeFormat('en', {
    localeMatcher: 'best fit',
    numeric: 'always',
    style: 'long',
  })

  for (const [unit, secondsInUnit] of entriesUnit) {
    if (seconds >= secondsInUnit || unit === 'second') {
      const value = Math.floor(seconds / secondsInUnit) * -1
      return rtf.format(value, unit)
    }
  }
  return rtf.format(1, 'second')
}
