import PropTypes from 'prop-types'
import styled from 'styled-components'
// styling
import colors from '../utils/style/colors'
import { useTheme } from '../utils/Functions/theme'
import { capitalize } from '../utils/Functions/helpers'

/**
 * CSS for component using styled.components
 */
const Selected =styled.select`
  // background: ${colors.Zircon};
  background: ${({ theme }) => (theme === 'light' ? `${colors.Zircon}` : `${colors.darkModeHighlights}`)};
  color: ${({ theme }) => (theme === 'light' ? `${colors.secondary}` : `${colors.primary}`)};
  border-radius: 0.2rem;
  border: 1px solid ${colors.secondary};
  border: 1px solid  ${({ theme }) => (theme === 'light' ? `${colors.secondary}` : `${colors.primary}`)};
  font-family: Arial;
  font-size: 1rem;
  margin: 0.5rem 0rem 1rem;
  padding: 0.375rem;
  width: 11.25rem;
 
  >option {
    font-family: Arial; 
  }
`;

const Label = styled.label`
  margin-right: 0.625rem;
  color: ${({ theme }) => (theme === 'light' ? `${colors.secondary}` : `${colors.primary}`)};
`;

/**
 * Renders the Select dropdown menu
 * @function Select
 * @param {object} props: data to build dropdown menu
 * @returns {JSX}
 */
 const Select = ( props ) => {

  const { theme } = useTheme()
  const { id, listItems, onChange } = props

  return (
    <>
    <div>
      <Label theme={theme} htmlFor={id}>{capitalize(id)}</Label>
      <Selected theme={theme}
        name={id}
        id={id}
        required={true}
        onChange={onChange} >
        <option value="">All</option>
        {[...listItems].sort((a, b) => (a.name < b.name ? -1 : 1)).map((item, index) => {
          return (
            <option key={`${item}-${index}`} value={item.value}>
              {item.name}
            </option>
          );
        })}
      </Selected>
      </div>
    </>
  )
}

export default Select

// Prototypes
Select.propTypes = {
  props: PropTypes.object,
}