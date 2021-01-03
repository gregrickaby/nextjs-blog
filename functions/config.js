module.exports = {
  booksDirectory: '__books',
  postsDirectory: '__posts',
  pagesDirectory: '__pages',
  photosDirectory: 'public/photos',
  siteName: 'Greg Rickaby',
  siteDescription: 'Personal Blog',
  siteUrl: 'https://gregrickaby.com',
  siteAuthor: 'Greg Rickaby',
  authorAvatar: '/blog/authors/greg.jpg',
  ogImage: '/favicon/android-icon-192x192.png',
  navigation: [
    {
      label: 'Books',
      url: '/books'
    },
    {
      label: 'Blog',
      url: '/blog'
    },
    {
      label: 'Contact',
      url: '/contact'
    },
    {
      label: 'Photos',
      url: '/photos'
    },
    {
      label: 'Resources',
      url: '/resources'
    }
  ],
  socialNetworks: [
    {
      label: 'Github',
      shield:
        'https://img.shields.io/github/followers/gregrickaby?label=follow&style=social',
      url: 'https://github.com/gregrickaby/',
      height: 20,
      width: 96
    },
    {
      label: 'Twitter',
      shield: 'https://img.shields.io/twitter/follow/gregrickaby?style=social',
      url: 'https://twitter.com/gregrickaby/',
      handle: '@gregrickaby',
      height: 20,
      width: 172
    }
  ]
}
