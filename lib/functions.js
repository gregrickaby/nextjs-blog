const fs = require('fs')
const marked = require('marked')
const fm = require('front-matter')
const hljs = require('highlight.js')
import {postDirectory} from './config'

export function getPosts() {
  marked.setOptions({
    highlight: function (code, lang) {
      if (lang) return hljs.highlight(lang, code).value
      return code
    }
  })

  const postFiles = fs.readdirSync(postDirectory)
  const allPosts = []

  for (let i = 0; i < postFiles.length; i++) {
    const postContent = fs.readFileSync(`${postDirectory}/${postFiles[i]}`, {
      encoding: 'utf-8'
    })
    const {body, ...frontMatter} = fm(postContent)
    allPosts.push({
      html: marked(body),
      ...frontMatter
    })
  }

  const posts = allPosts.sort((post1, post2) => {
    return post1.attributes.date > post2.attributes.date ? '-1' : '1'
  })

  return posts
}
