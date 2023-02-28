import dayjs from './src/index'
import relativeTime from './src/plugin/relativeTime/index'
import './src/locale/zh'

dayjs.extend(relativeTime)

export default dayjs
