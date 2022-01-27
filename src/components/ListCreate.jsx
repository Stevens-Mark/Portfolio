import PropTypes from 'prop-types'
import styled from 'styled-components'

/**
 * CSS for component using styled.components
 */
const Ulist = styled.ul`
  list-style: none;
  padding-inline-start: 0px;

  @media screen and (min-width: 475px) {
<<<<<<< HEAD
    padding-inline-start: 20px;
=======
    padding-inline-start: 1.25rem;
>>>>>>> multi
  }
}
`;

/**
 * Creates an unordered list
 * @function ListCreate
 * @param {string} group: list group name (funtionality, constraints, etc)
 * @param {array} data: for list
 * @returns 
 */
const ListCreate = ( { group, data } ) => {
  return (
    <Ulist>{data.map((item, index) => (
      <li key={`${group}-${index}`}>{item}</li> ))}
    </Ulist>
<<<<<<< HEAD
    )
=======
  )
>>>>>>> multi
}

export default ListCreate

// Prototypes
ListCreate.propTypes = {
  group: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
}
