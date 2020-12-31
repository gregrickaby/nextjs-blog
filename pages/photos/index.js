import Layout from '@/components/Layout'
import {getPhotos} from '@/functions/getPhotos'
import Image from 'next/image'
import Link from 'next/link'

export default function PhotosPage({photos}) {
  return (
    <Layout>
      <div className="pb-4">
        <h1>Photos</h1>
        <p>Some of my best photos...</p>
      </div>
      <section className="space-y-8">
        {photos?.length &&
          photos.map((photo, index) => {
            return (
              <div key={index}>
                <Link href={`/photos/${photo.slug}`}>
                  <a>
                    <Image
                      src={photo.pathRelative}
                      height={photo.height}
                      width={photo.width}
                      layout="responsive"
                    />
                  </a>
                </Link>
              </div>
            )
          })}
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
  const data = await getPhotos()

  // Sort photos by date, desc.
  const photos = data.sort((photo1, photo2) => {
    return photo1.dateUnix > photo2.dateUnix ? '-1' : '1'
  })

  return {
    props: {
      photos
    }
  }
}
