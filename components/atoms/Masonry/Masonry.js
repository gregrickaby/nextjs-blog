import PropTypes from 'prop-types'

/**
 * Masonry layout component.
 *
 * @author John O. Paul
 * @author Greg Rickaby
 * @see https://medium.com/the-andela-way/how-to-create-a-masonry-layout-component-using-react-f30ec9ca5e99
 * @param {object} props The component properties.
 * @return {Element}     A masonry styled layout.
 */
export default function Masonry(props) {
  // Setup variables.
  const columnWrapper = {}
  const result = []

  // Create columns.
  for (let i = 0; i < props.columns; i++) {
    columnWrapper[`column${i}`] = []
  }

  // Divide children into columns.
  for (let i = 0; i < props.children.length; i++) {
    const columnIndex = i % props.columns
    columnWrapper[`column${columnIndex}`].push(
      <div style={{marginBottom: `${props.gap}px`}}>{props.children[i]}</div>
    )
  }

  // Wrap children in each column with a div.
  for (let i = 0; i < props.columns; i++) {
    result.push(
      <div
        key={i}
        style={{
          marginLeft: `${i > 0 ? props.gap : 0}px`,
          flex: 1
        }}
      >
        {columnWrapper[`column${i}`]}
      </div>
    )
  }

  return <div style={{display: 'flex'}}>{result}</div>
}

Masonry.defaultProps = {
  columns: 2,
  gap: 20
}

Masonry.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element),
  columns: PropTypes.number.isRequired,
  gap: PropTypes.number.isRequired
}
