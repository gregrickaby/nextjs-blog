import PropTypes from 'prop-types'
import ArchiveHeader from '@/components/molecules/ArchiveHeader'
import Layout from '@/components/Layout'
import config from '@/functions/config'
import {getPhotos} from '@/functions/getPhotos'
import Image from 'next/image'
import Link from 'next/link'

/**
 * Render the PhotosArchive component.
 *
 * @author Greg Rickaby
 * @param {object} props        The component attributes as props.
 * @param {any}    props.photos The photo data.
 * @return {Element}            The PhotosArchive component.
 */
export default function PhotosArchive({photos}) {
  return (
    <Layout
      title={`Photos - ${config?.siteName}`}
      description="Some of my best photos."
    >
      <ArchiveHeader title="Photos" description="Some of my best photos." />
      <section className="grid">
        {photos?.length &&
          photos?.map((photo, index) => {
            return (
              <Link key={index} href={`/photos/${photo?.slug}`}>
                <a>
                  <Image
                    alt={photo?.description}
                    className="rounded"
                    src={photo?.pathRelative}
                    height={photo?.height}
                    width={photo?.width}
                    layout="responsive"
                  />
                </a>
              </Link>
            )
          })}
        <style jsx>{`
          .grid {
            display: grid;
            gap: 12px;
            margin-left: calc(12% - 12vw);
            margin-right: calc(12% - 12vw);
          }

          @media (min-width: 768px) {
            .grid {
              grid-template-columns: repeat(2, 1fr);
              grid-template-rows: masonry;
            }
          }
        `}</style>
      </section>
    </Layout>
  )
}

PhotosArchive.propTypes = {
  photos: PropTypes.any.isRequired
}

/**
 * Get static props.
 *
 * @author Greg Rickaby
 * @see https://nextjs.org/docs/basic-features/data-fetching#getstaticprops-static-generation
 * @return {object} All book props.
 */
export async function getStaticProps() {
  const photos = await getPhotos()

  return {
    props: {
      photos
    }
  }
}
