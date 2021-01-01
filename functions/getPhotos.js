import config from '@/functions/config'
import {format, getUnixTime} from 'date-fns'
import exifr from 'exifr'
import Fraction from 'fraction.js'
import fs from 'fs'
import sizeOf from 'image-size'
import path from 'path'

/**
 * Create a list of all (.jpg) photos.
 */
export const getJpgList = fs
  .readdirSync(config?.photosDirectory)
  .filter((path) => /\.jpg?$/.test(path))

/**
 * Get all JPG photos and their data.
 *
 * @return {object}
 */
export async function getPhotos() {
  // Get the list of photos.
  const jpgs = getJpgList

  // No photos? Bail.
  if (!jpgs?.length) {
    return null
  }

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
 * @param {string} fileName The file name of a photo.
 * @return {array}
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
 * @see https://www.npmjs.com/package/exifr
 * @see https://www.npmjs.com/package/fraction.js
 * @see https://www.npmjs.com/package/image-size
 * @param {array} photos An array of photo(s).
 * @return {object}
 */
export async function processPhoto(photos) {
  // No photos? Bail.
  if (!photos?.length) {
    return null
  }

  return await Promise.all(
    // Map over each photo...
    photos.map(async (photo) => {
      // Get full path to photo.
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

      const lens = Object.prototype.hasOwnProperty.call(exif, 'lens')
        ? exif.lens
        : false

      // Finally, return a nicely formatted object, containing lots of photo data.
      return {
        aperture: `ƒ/${exif.FNumber}`,
        artist: artist,
        dateFormatted: format(exif.DateTimeOriginal, 'LLLL d, yyyy'),
        dateUnix: getUnixTime(exif.DateTimeOriginal),
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
        pathRelative: `/photos/${photo}`,
        size: formatFileSize(stats.size),
        slug: removeFileExtension(photo),
        software: exif.Software,
        type: dimensions.type,
        url: `${config?.siteUrl}/photos/${photo}`,
        width: dimensions.width
      }
    })
  )
}

/**
 * Remove a file extension.
 *
 * @param {string} fileName A filename.
 * @return {string}
 */
export function removeFileExtension(fileName) {
  // No file name? Bail.
  if (!fileName?.length) {
    return null
  }

  return fileName.replace(/\.[^/.]+$/, '')
}

/**
 * Format number into human readable file size.
 *
 * @param {number} fileSize The file size in bytes.
 * @return {string}
 */
export function formatFileSize(fileSize) {
  // No file size? Bail.
  if (!fileSize) {
    return null
  }

  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB']
  const i = Math.min(
    parseInt(Math.floor(Math.log(fileSize) / Math.log(1024)).toString(), 10),
    sizes.length - 1
  )
  return `${(fileSize / 1024 ** i).toFixed(i ? 1 : 0)} ${sizes[i]}`
}

/**
 * Get all photo paths.
 *
 * @return {object}
 */
export function getPhotosPaths() {
  return getJpgList?.map((photo) => ({
    params: {slug: removeFileExtension(photo)}
  }))
}
