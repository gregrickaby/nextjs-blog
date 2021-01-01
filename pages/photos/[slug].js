import Layout from '@/components/Layout'
import {getPhotosPaths, getPhotoByFileName} from '@/functions/getPhotos'
import Image from 'next/image'

export default function SinglePhoto({data}) {
  const [photo] = data
  return (
    <Layout>
      <main className="max-w-3xl">
        <div className="full-width">
          {photo?.description && (
            <h1 className="post-title text-center my-8">
              {photo?.description}
            </h1>
          )}
          <Image
            alt={photo?.description}
            src={photo?.pathRelative}
            height={photo?.height}
            width={photo?.width}
            layout="responsive"
            quality="100"
          />
        </div>
        <pre>{JSON.stringify(photo, null, 2)}</pre>
      </main>
      <style jsx>{`
        .full-width {
          margin-left: calc(35% - 35vw);
          margin-right: calc(35% - 35vw);
        }
      `}</style>
    </Layout>
  )
}

export async function getStaticPaths() {
  const paths = getPhotosPaths()

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
