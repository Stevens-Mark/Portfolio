import PropTypes from 'prop-types'
import styled from 'styled-components'
// styling
import colors from '../utils/style/colors'
import { capitalize } from '../utils/Functions/helpers'

/**
 * CSS for component using styled.components
 */
const Selected =styled.select`
  background: ${colors.Zircon};
  border-radius: 0.2rem;
  border: 1px solid ${colors.secondary};
  font-family: Arial;
  font-size: 1rem;
  margin: 0.5rem 0rem 1rem;
  padding: 0.375rem;
  width: 200px;
 
  >option {
    font-family: Arial; 
  }
`;

/**
 * Renders the Select dropdown menu
 * @function Select
 * @param {object} props: data to build dropdown menu
 * @returns {JSX}
 */
 const Select = ( props ) => {

  const { id, listItems, onChange } = props

  return (
    <>
      <label className="sr-only" htmlFor={id}>{capitalize(id)}</label>
      <Selected
        name={id}
        id={id}
        required={true}
        onChange={onChange} >

        <option value="">Filter By Tag</option>
        {[...listItems].sort((a, b) => (a.name < b.name ? -1 : 1)).map((item, index) => {
          return (
            <option key={`${item}-${index}`} value={item.value}>
              {item.name}
            </option>
          );
        })}
      </Selected>
    </>
  )
}

export default Select

// Prototypes
Select.propTypes = {
  props: PropTypes.object,
}