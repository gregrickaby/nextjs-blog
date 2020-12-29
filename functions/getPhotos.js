const fs = require('fs')
const path = require('path')
import {photosDirectory, siteAuthor} from '@/functions/config'
import {format} from 'date-fns'
import exifr from 'exifr'
import Fraction from 'fraction.js'
import sizeOf from 'image-size'

/**
 * Get all JPG photos.
 *
 * @return {object} The image, EXIF, and other metadata.
 */
export default async function getPhotos() {
  // Get the list of photos.
  const photos = getPhotosList()

  // No photos? Bail.
  if (!photos?.length) {
    return null
  }

  return await processPhoto(photos)
}

/**
 * Extract and build photo data.
 *
 * Note: The exifr package is all Promise based.
 *
 * @see https://www.npmjs.com/package/exifr
 * @see https://www.npmjs.com/package/fraction.js
 * @see https://www.npmjs.com/package/image-size
 * @return {object} The image EXIF and other metadata.
 */
async function processPhoto(photos) {
  // No photos? Bail.
  if (!photos?.length) {
    return null
  }

  return await Promise.all(
    // Map over each photo...
    photos.map(async (photo) => {
      // Get full path to photo.
      const photoPath = path.join(photosDirectory, photo)

      // Parse the photo with exifr.
      const exif = await exifr.parse(photoPath)

      // Get the size of the photo.
      const stats = fs.statSync(photoPath)

      // Get the image dimensions.
      const dimensions = await sizeOf(photoPath)

      // Convert exposure time to industry standard fraction.
      const exposureTime = new Fraction(exif.ExposureTime)

      /**
       * The exifr package will only return object keys IF they hold data,
       * therefore, verify irregular object keys are set.
       */
      const artist = Object.prototype.hasOwnProperty.call(exif, 'artist')
        ? exif.artist
        : siteAuthor

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

      // Finally, return a nicely formatted object, containing lots of photo data.
      return {
        aperture: `ƒ/${exif.FNumber}`,
        artist: artist,
        date: format(exif.CreateDate, 'LLLL d, yyyy'),
        description: description,
        dimension: `${dimensions.width.toLocaleString()}x${dimensions.height.toLocaleString()}px`,
        exposure: `${exposureTime.toFraction(true)} sec at ƒ/${exif.FNumber}`,
        exposureCompensation: `${exif.ExposureCompensation} EV`,
        exposureTime: exposureTime.toFraction(true),
        flash: exif.Flash,
        focalLength: `${exif.FocalLengthIn35mmFormat}mm`,
        height: dimensions.height,
        iso: exif.ISO,
        latitude: latitude,
        lens: exif.LensModel,
        longitude: longitude,
        make: exif.Make,
        metering: exif.MeteringMode,
        mode: exif.ExposureProgram,
        model: exif.Model,
        path: `${photosDirectory}/${photo}`,
        size: formatFileSize(stats.size),
        software: exif.Software,
        type: dimensions.type,
        width: dimensions.width
      }
    })
  )
}

/**
 * Get all JPG images in a directory
 *
 * @return {array} A list of JPG images.
 */
function getPhotosList() {
  // Read a directory, and build a list of all files.
  const allFiles = fs.readdirSync(photosDirectory)

  // If there aren't any files at all, bail!
  if (!allFiles?.length) {
    return null
  }

  // Set an array for the photos.
  let jpgPhotos = []

  // Only build a list of JPG's.
  allFiles.map((file) => {
    if ('.jpg' === path.extname(file)) {
      jpgPhotos.push(file)
    }
  })

  // If there aren't any JPGs', bail!
  if (!jpgPhotos?.length) {
    return null
  }

  return jpgPhotos
}

/**
 * Format number into human readable file size.
 *
 * @param {number} fileSize The file size in bytes.
 * @return {string}         The formatted file size.
 */
function formatFileSize(fileSize) {
  // No file size? Bail.
  if (!fileSize?.length) {
    return null
  }

  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB']
  const i = Math.min(
    parseInt(Math.floor(Math.log(fileSize) / Math.log(1024)).toString(), 10),
    sizes.length - 1
  )
  return `${(fileSize / 1024 ** i).toFixed(i ? 1 : 0)} ${sizes[i]}`
}
