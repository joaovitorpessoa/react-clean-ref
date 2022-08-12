const path = require('path')
const fs = require('fs/promises')

const DIRECTORY_TARGET = path.join(__dirname, '/../docs/ref/02')

function sanitizeFilename(directory) {
  return directory.replace(/\.html,?$/, '').replace(/\d+\.(\d?)+ /, '')
}

function filterByHtml(directories) {
  return directories.filter((directory) => directory.endsWith('html'))
}

function getLink(html) {
  const urlRgx =
    /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/g

  try {
    const link = urlRgx.exec(html)[0]
    return link
  } catch (error) {}
}

async function generateOutput(htmlFilenames) {
  let output = ''
  await Promise.all(
    htmlFilenames.map(async (filename) => {
      const filePath = path.join(DIRECTORY_TARGET, filename)
      const _filename = sanitizeFilename(filename)
      const html = (await fs.readFile(filePath)).toString()
      const link = getLink(html)
      if (link) {
        output += `[${_filename}](${link})\n`
      }
    })
  )
  return output
}

async function main() {
  const htmlFiles = filterByHtml(await fs.readdir(DIRECTORY_TARGET))
  const output = await generateOutput(htmlFiles)
  console.log(output)
  return 0
}

main()
