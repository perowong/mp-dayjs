import dayjs from './src/index'
import zh from './src/locale/zh'
import relativeTime from './src/plugin/relativeTime/index'

dayjs.locale(zh, null, true)
dayjs.extend(relativeTime)

export default dayjs
