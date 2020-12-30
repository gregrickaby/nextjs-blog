import Layout from '@/components/Layout'
import {
  getPhotoByFileName,
  getPhotosList,
  removeFileExtension
} from '@/functions/getPhotos'
import Image from 'next/image'

export default function SinglePhoto({data}) {
  const [photo] = data
  return (
    <Layout>
      <section>
        <Image
          src={photo.pathRelative}
          height={photo.height}
          width={photo.width}
          layout="responsive"
        />
        <pre>{JSON.stringify(photo, null, 2)}</pre>
      </section>
    </Layout>
  )
}

export async function getStaticPaths() {
  const photos = await getPhotosList()
  const paths = photos.map((photo) => ({
    params: {slug: removeFileExtension(photo)}
  }))

  return {
    paths: paths,
    fallback: false
  }
}

export async function getStaticProps({params}) {
  const photo = await getPhotoByFileName(params.slug)

  return {
    props: {
      data: photo
    }
  }
}
