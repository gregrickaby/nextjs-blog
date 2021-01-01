import ArchiveHeader from '@/components/ArchiveHeader'
import Layout from '@/components/Layout'
import config from '@/functions/config'
import {getPhotos} from '@/functions/getPhotos'
import {NextSeo} from 'next-seo'
import Image from 'next/image'
import Link from 'next/link'

export default function PhotosArchive({photos}) {
  return (
    <Layout>
      <NextSeo
        title={`Photos - ${config?.siteName}`}
        description="Some of my best photos..."
      />
      <ArchiveHeader title="Photos" description="Some of my best photos..." />
      <section className="space-y-8">
        {photos?.length &&
          photos?.map((photo, index) => {
            return (
              <div key={index}>
                <Link href={`/photos/${photo?.slug}`}>
                  <a>
                    <Image
                      src={photo?.pathRelative}
                      height={photo?.height}
                      width={photo?.width}
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
