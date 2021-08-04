import config from '@/lib/config'
import dayjs from 'dayjs'
import fs from 'fs'
import path from 'path'

export const BOOKS_PATH = path.join(process.cwd(), config?.booksDirectory)
export const PAGES_PATH = path.join(process.cwd(), config?.pagesDirectory)
export const POSTS_PATH = path.join(process.cwd(), config?.postsDirectory)

/**
 * List of all .mdx files.
 *
 * @author Greg Rickaby
 * @param {string} directory Full path to a directory with .mdx files.
 * @return {Array}           The list of MDX files.
 */
export function mdxFileList(directory) {
  // No directory? Bail.
  if (!directory) {
    return null
  }

  return fs.readdirSync(directory).filter((path) => /\.mdx?$/.test(path))
}

/**
 * List of all .jpg photos.
 */
export const getJpgList = fs
  .readdirSync(config?.photosDirectory)
  .filter((path) => /\.jpg?$/.test(path))

/**
 * Force whatever the date format might be to YYYY-MM-DD.
 *
 * @author Greg Rickaby
 * @param {any} date The post date.
 * @return {string}  Formatted post date.
 */
export function dateFormatter(date) {
  return dayjs(date?.toString()).format('YYYY-MM-DD')
}

/**
 * Remove a file extension.
 *
 * @author Greg Rickaby
 * @param {string} fileName Any filename.
 * @return {string}         Just the file name, no extension.
 */
export function removeFileExtension(fileName) {
  // No file name? Bail.
  if (!fileName?.length) {
    return null
  }

  return fileName.replace(/\.[^/.]+$/, '')
}

/**
 * Format a number into human readable file size.
 *
 * @author Greg Rickaby
 * @param {number} fileSize The file size in bytes.
 * @return {string}         Human readable file size.
 */
export function formatFileSize(fileSize) {
  // No file size? Bail.
  if (!fileSize) {
    return null
  }

  // List of file sizes.
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB']

  // Calculate the file size.
  const file = Math.min(
    parseInt(Math.floor(Math.log(fileSize) / Math.log(1024)).toString(), 10),
    sizes.length - 1
  )

  return `${(fileSize / 1024 ** file).toFixed(file ? 1 : 0)} ${sizes[file]}`
}
