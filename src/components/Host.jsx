import styled from 'styled-components'
import PropTypes from 'prop-types'
import DefaultPicture from '../assets/images/profile.png'

/**
 * CSS for the component using styled.components
 */
const HostWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

const HostTitle = styled.h2`
    width: 3.5rem;
    text-align: right;
    font-weight: 500;
    /* margin: unset; */
    font-size: 0.75rem;

    @media screen and (min-width: 600px) {
        width: 5.5rem;
        font-size: 1.125rem;     
    }
`;

const HostPhoto = styled.img`
    margin-left: 10px;
    border-radius: 50%;
    width: 2rem;
    height: 2rem;

    @media screen and (min-width: 600px) {
        width: 4rem;
        height: 4rem;
        box-shadow: 0px 4px 12px 3px #d9d9d9;
    }

`;

/**
 * Renders Host details in accomodation anouncement
 * @function Host
 * @param {string} props hostData.name: hosts name
 * @param {string} props hostData.picture: hosts photograph
 * @returns {JSX}
 */
const Host = ( {hostData} ) => {

    return (
        <HostWrapper>
            <HostTitle>{hostData.name || " "}</HostTitle>
            <HostPhoto src={hostData.picture || DefaultPicture} alt={hostData.name || " "}/>
        </HostWrapper>
    )
}

export default Host

// Prototypes
Host.propTypes = {
    name: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
  }

  Host.defaultProps = {
    name: '',
    picture: DefaultPicture,
}