import PropTypes from 'prop-types'
import Layout from '@/components/templates/Layout/Layout'
import config from '@/functions/config'
import {getPhotoByFileName, getPhotosPaths} from '@/functions/photos'
import Image from 'next/image'

/**
 * Render the SinglePhoto component.
 *
 * @author Greg Rickaby
 * @param {object} props      The component attributes as props.
 * @param {any}    props.data The photo content.
 * @return {Element}          The SinglePhoto component.
 */
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
        {photo?.description && (
          <h1 className="post-title text-center my-8">{photo?.description}</h1>
        )}
        <div className="overflow-x-hidden full-width">
          <a href={photo?.src} target="_blank" rel="noreferrer noopener">
            <Image
              alt={photo?.description}
              height={photo?.height}
              src={photo?.pathRelative}
              width={photo?.width}
            />
          </a>
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

SinglePhoto.propTypes = {
  data: PropTypes.any.isRequired
}

/**
 * Get static paths.
 *
 * @author Greg Rickaby
 * @return {object} All photo paths.
 */
export async function getStaticPaths() {
  const paths = getPhotosPaths()

  return {
    paths: paths,
    fallback: false
  }
}

/**
 * Get static props.
 *
 * @author Greg Rickaby
 * @see https://nextjs.org/docs/basic-features/data-fetching#getstaticprops-static-generation
 * @param {object} context        Incoming context.
 * @param {object} context.params The route parameters.
 * @return {object}               All photo props.
 */
export async function getStaticProps({params}) {
  const photo = await getPhotoByFileName(params.slug)

  return {
    props: {
      data: photo
    }
  }
}
