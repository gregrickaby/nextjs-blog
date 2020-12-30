import Layout from '@/components/Layout'
import {getPhotos} from '@/functions/getPhotos'
import Image from 'next/image'
import Link from 'next/link'

export default function PhotosPage({photos}) {
  return (
    <Layout>
      <section className="grid">
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
  const photos = await getPhotos()

  return {
    props: {
      photos
    }
  }
}
