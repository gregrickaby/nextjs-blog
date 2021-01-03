import {DiscussionEmbed} from 'disqus-react'

export default function DisqusComments(props) {
  const disqusConfig = {
    identifier: props?.slug,
    title: props?.title,
    url: props?.slug
  }

  return (
    <DiscussionEmbed
      shortname={process.env.NEXT_PUBLIC_DISQUS_SHORTNAME}
      config={disqusConfig}
    />
  )
}
