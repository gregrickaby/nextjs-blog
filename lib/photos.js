import config from '@/lib/config'
import {formatFileSize, getJpgList, removeFileExtension} from '@/lib/helpers'
import dayjs from 'dayjs'
import exifr from 'exifr'
import Fraction from 'fraction.js'
import fs from 'fs'
import sizeOf from 'image-size'
import path from 'path'

/**
 * Get all photo paths.
 *
 * @author Greg Rickaby
 * @return {object} A list of all photos and their paths.
 */
export function getPhotosPaths() {
  return getJpgList?.map((photo) => ({
    params: {slug: removeFileExtension(photo)}
  }))
}

/**
 * Get all JPG photos and their data.
 *
 * @author Greg Rickaby
 * @return {object} A list of all JPG photos.
 */
export async function getPhotos() {
  // Get the list of photos.
  const jpgs = getJpgList

  // No photos? Bail.
  if (!jpgs?.length) {
    return null
  }

  // Process all photos.
  const data = await processPhoto(jpgs)

  // Sort photos by date, desc.
  const photos = data?.sort((photo1, photo2) => {
    return photo1?.dateUnix > photo2?.dateUnix ? '-1' : '1'
  })

  return photos
}

/**
 * Get a single photo.
 *
 * @author Greg Rickaby
 * @param {string} fileName The file name of a photo.
 * @return {Array}          A photo and it's EXIF data.
 */
export async function getPhotoByFileName(fileName) {
  // No file name? Bail.
  if (!fileName) {
    return null
  }

  // Append file extension.
  const fileNameWithExt = `${fileName}.jpg`

  // Check if photo with matching file name exists.
  const doesFileExist = fs.existsSync(
    path.join(config?.photosDirectory, fileNameWithExt)
  )

  // No match? Bail.
  if (!doesFileExist) {
    return null
  }

  return await processPhoto([fileNameWithExt])
}

/**
 * Extract and build photo data.
 *
 * Note: The exifr package is all Promise based.
 *
 * @author Greg Rickaby
 * @see https://www.npmjs.com/package/exifr
 * @see https://www.npmjs.com/package/fraction.js
 * @see https://www.npmjs.com/package/image-size
 * @param {Array} photos An array of photo(s).
 * @return {object}      An object with EXIF data.
 */
export async function processPhoto(photos) {
  // No photos? Bail.
  if (!photos?.length) {
    return null
  }

  return await Promise.all(
    // Map over each photo...
    photos.map(async (photo) => {
      // Get full size photo path.
      const photoPath = path.join(config.photosDirectory, photo)

      // Parse the photo with exifr.
      const exif = await exifr.parse(photoPath)

      // Get the size of the photo.
      const stats = fs.statSync(photoPath)

      // Get the image dimensions.
      const dimensions = await sizeOf(photoPath)

      // Convert exposure time to industry standard fraction.
      const exposureTime = new Fraction(exif.ExposureTime)

      // Verify object keys are set, before destructuring them.
      const artist = Object.prototype.hasOwnProperty.call(exif, 'artist')
        ? exif.artist
        : config?.siteAuthor

      const description = Object.prototype.hasOwnProperty.call(
        exif,
        'ImageDescription'
      )
        ? exif.ImageDescription
        : ''

      const latitude = Object.prototype.hasOwnProperty.call(exif, 'latitude')
        ? exif.latitude
        : false

      const longitude = Object.prototype.hasOwnProperty.call(exif, 'latitude')
        ? exif.longitude
        : false

      const lens = Object.prototype.hasOwnProperty.call(exif, 'LensModel')
        ? exif.LensModel
        : false

      const copyright = Object.prototype.hasOwnProperty.call(exif, 'Copyright')
        ? exif.Copyright
        : false

      // Finally, return a nicely formatted object, containing lots of photo data.
      return {
        aperture: `ƒ/${exif.FNumber}`,
        artist: artist,
        copyright: copyright,
        dateFormatted: dayjs(exif.DateTimeOriginal).format('MMM DD, YYYY'),
        dateUnix: dayjs(exif.DateTimeOriginal).valueOf(),
        description: description,
        dimension: `${dimensions.width}x${dimensions.height}`,
        exposure: `${exposureTime.toFraction(true)} sec at ƒ/${exif.FNumber}`,
        exposureCompensation: `${exif.ExposureCompensation} EV`,
        exposureTime: exposureTime.toFraction(true),
        fileName: photo,
        flash: exif.Flash,
        focalLength: `${exif.FocalLengthIn35mmFormat}mm`,
        height: dimensions.height,
        iso: exif.ISO,
        latitude: latitude,
        lens: lens,
        longitude: longitude,
        make: exif.Make,
        metering: exif.MeteringMode,
        mode: exif.ExposureProgram,
        model: exif.Model,
        pathFull: `${config?.photosDirectory}/${photo}`,
        optimizedPath: `/optimized/${photo}`,
        size: formatFileSize(stats.size),
        slug: removeFileExtension(photo),
        software: exif.Software,
        src: `${config?.siteUrl}/optimized/${photo}`,
        type: dimensions.type,
        width: dimensions.width
      }
    })
  )
}
