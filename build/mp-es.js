const rollup = require('rollup')
const configFactory = require('./rollup.config')

async function build(option) {
  const bundle = await rollup.rollup(option.input)
  await bundle.write(option.output)
}

(async () => {
  try {
    /* eslint-disable no-restricted-syntax, no-await-in-loop */
    // We use await-in-loop to make rollup run sequentially to save on RAM

    build(configFactory({
      input: './mp-dayjs.js',
      fileName: './mp-dayjs.min.js',
      format: 'es'
    }))
  } catch (e) {
    console.error(e) // eslint-disable-line no-console
  }
})()
