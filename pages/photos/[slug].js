import Layout from '@/components/Layout'
import config from '@/functions/config'
import {getPhotoByFileName, getPhotosPaths} from '@/functions/getPhotos'
import {NextSeo} from 'next-seo'
import Image from 'next/image'

export default function SinglePhoto({data}) {
  const [photo] = data
  return (
    <Layout>
      <NextSeo
        title={`${config?.siteName} - Photo`}
        description={photo?.description}
        openGraph={{
          title: `${config?.siteName} - Photo`,
          description: photo?.description,
          images: [
            {
              url: photo?.src,
              width: photo?.width,
              height: photo?.height,
              alt: photo?.description
            }
          ]
        }}
      />
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
