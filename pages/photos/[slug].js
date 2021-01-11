import Layout from '@/components/Layout'
import config from '@/functions/config'
import {getPhotoByFileName, getPhotosPaths} from '@/functions/getPhotos'
import Image from 'next/image'

export default function SinglePhoto({data}) {
  const [photo] = data
  return (
    <Layout
      title={`Photo: ${photo?.description} - ${config?.siteName}`}
      description={photo?.description}
      openGraph={{
        title: `Photo: ${photo?.description} - ${config?.siteName}`,
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
    >
      <main className="max-w-3xl">
        <div className="extra-wide">
          {photo?.description && (
            <h1 className="post-title text-center my-8">
              {photo?.description}
            </h1>
          )}
          <a href={photo?.src} target="_blank" rel="noreferrer noopener">
            <Image
              alt={photo?.description}
              src={photo?.pathRelative}
              height={photo?.height}
              width={photo?.width}
              layout="responsive"
              quality="100"
            />
          </a>
          <style jsx>
            {`
              .extra-wide {
                margin-left: calc(33% - 33vw);
                margin-right: calc(33% - 33vw);
              }
            `}
          </style>
        </div>

        <dl className="grid gap-8 md:grid-cols-3 mt-8 text-center">
          <div>
            <dt>Aperture</dt>
            <dd>{photo?.aperture}</dd>
          </div>
          <div>
            <dt>ISO</dt>
            <dd>{photo?.iso}</dd>
          </div>
          <div>
            <dt>Shutter Speed</dt>
            <dd>{photo?.exposureTime} sec</dd>
          </div>
          <div>
            <dt>Camera</dt>
            <dd>
              {photo?.make} {photo?.model}
            </dd>
          </div>
          <div>
            <dt>Lens</dt>
            <dd>{photo?.lens}</dd>
          </div>
          <div>
            <dt>Focal Length (@35mm)</dt>
            <dd>{photo?.focalLength}</dd>
          </div>
          <div>
            <dt>Exposure Compensation</dt>
            <dd>{photo?.exposureCompensation}</dd>
          </div>
          <div>
            <dt>Mode</dt>
            <dd>{photo?.mode}</dd>
          </div>
          <div>
            <dt>Flash</dt>
            <dd>{photo?.flash}</dd>
          </div>
          <div>
            <dt>Metering</dt>
            <dd>{photo?.metering}</dd>
          </div>
          <div>
            <dt>Date</dt>
            <dd>{photo?.dateFormatted}</dd>
          </div>
          <div>
            <dt>Dimensions</dt>
            <dd>{photo?.dimension}</dd>
          </div>
          <div>
            <dt>Size</dt>
            <dd>{photo?.size}</dd>
          </div>
          <div>
            <dt>Software</dt>
            <dd>{photo?.software}</dd>
          </div>
          <div>
            <dt>&copy; Copyright</dt>
            <dd>{photo?.copyright}</dd>
          </div>
        </dl>
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
