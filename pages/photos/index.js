import Image from 'next/image'
import getPhotos from '@/functions/getPhotos'
import Layout from '@/components/Layout'

export default function PhotosPage({photos}) {
  return (
    <Layout>
      <section className="grid">
        {photos?.length &&
          photos.map((photo, index) => {
            return (
              <div key={index}>
                <Image
                  src={photo.pathRelative}
                  height={photo.height}
                  width={photo.width}
                  layout="fixed"
                />
                <p>{photo?.description}</p>
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
