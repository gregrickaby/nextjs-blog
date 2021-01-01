import Layout from '@/components/Layout'
import {
  getJpgList,
  getPhotoByFileName,
  removeFileExtension
} from '@/functions/getPhotos'
import Image from 'next/image'

export default function SinglePhoto({data}) {
  const [photo] = data
  return (
    <Layout>
      <main className="space-y-4">
        <Image
          src={photo?.pathRelative}
          height={photo?.height}
          width={photo?.width}
          layout="responsive"
          quality="100"
        />
        <pre>{JSON.stringify(photo, null, 2)}</pre>
      </main>
    </Layout>
  )
}

export async function getStaticPaths() {
  const paths = getJpgList?.map((photo) => ({
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
