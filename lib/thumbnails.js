const config = require('./config')
const fs = require('fs')
const sharp = require('sharp')

/**
 * Create photo thumbnails.
 *
 * @see https://sharp.pixelplumbing.com/api-resize
 * @author Greg Rickaby
 */
function createThumbnails() {
  // Delete thumbnails directory.
  fs.rmdirSync(config.thumbsDirectory, {recursive: true})

  // Create thumbnails directory.
  fs.mkdirSync(config.thumbsDirectory)

  // Get a list of all the photos.
  const photos = fs
    .readdirSync(config?.photosDirectory)
    .filter((path) => /\.jpg?$/.test(path))

  // Map over photos.
  photos.map(async (photo) => {
    // Set full path.
    const fullPath = `public/photos/${photo}`

    // Remove file extension
    const fileName = photo.replace(/\.[^/.]+$/, '')

    // Resize photo and save to thumbnails directory.
    await sharp(fullPath)
      .resize({width: config.thumbsWidth})
      .toFormat(config.thumbsFormat)
      .toFile(`${config.thumbsDirectory}/${fileName}.${config.thumbsFormat}`)
      .then(() => console.log(`Creating ${fileName}.${config.thumbsFormat}`)) // eslint-disable-line no-console
      .catch((err) => console.error(err))
  })
}

createThumbnails()
