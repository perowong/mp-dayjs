import dayjs from './src/index'
import zhLocale from './src/locale/zh-mp'
import relativeTime from './src/plugin/relativeTime/index'

dayjs.locale(zhLocale, null, true)
dayjs.extend(relativeTime)

export default dayjs
