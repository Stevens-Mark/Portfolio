import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
// for styling
import styled from 'styled-components';
import { useTheme } from '../utils/Functions/theme';
// import data for dropdown menus
import { filter } from '../assets/data/filterValues';
// import components
import Hero from '../components/Hero';
import Card from '../components/Card';
import TechIcons from '../components/TechTags';
import heroImg from '../assets/images/banner4.webp';
import ASC from '../assets/icons/ascending.svg';
import DESC from '../assets/icons/descending.svg';
import Select from '../components/Select';
import Tooltip from '../components/ToolsTips/ToolTip';

/**
 * CSS for component using styled.components
 */
const PortFolioWrapper = styled.section`
  background: ${({ theme }) =>
    theme === 'light'
      ? 'linear-gradient(45deg, rgba(148,191,224,1) 0%, rgba(51,204,204,1) 42%);'
      : 'linear-gradient(0deg, rgba(79,76,107,1) 0%, rgba(47,46,65,1) 48%)'};
  margin-top: 0.25rem;
  padding: 3rem 0rem;
  position: relative;

  @media screen and (min-width: 668px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: auto;
  }
  @media screen and (min-width: 1080px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media screen and (min-width: 1440px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media screen and (min-width: 1670px) {
    grid-template-columns: repeat(5, 1fr);
  }
`;

const TechWrapper = styled.aside`
  display: none;
  // overflow-x: auto;
  // &::-webkit-scrollbar {
	// 	width: 0px !important; // Hide scroll bar, but while still being able to scroll using CSS
	// }
	// overflow: -moz-scrollbars-none;
  cursor: pointer;
  

  @media screen and (min-width: 1522px) {
    background: ${({ theme }) =>
      theme === 'light'
        ? `linear-gradient(180deg, rgb(148, 191, 224) 0%, rgb(51, 204, 204) 15%)`
        : `linear-gradient(180deg,rgba(79,76,107,1) 0%,rgba(47,46,65,1) 15%)`};
    margin-top: 0.25rem;
    padding: 0.25rem;
    display: flex;
    justify-content: center;
    flex-wrap: nowrap;
  }
`;

const Controls = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  top: 9px;
  right: 16px;
  left: 16px;
`;

const Sort = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  margin-top: 0.5rem;
  position: relative;
  top: -10px;
  img {
    filter: ${({ theme }) =>
      theme === 'light'
        ? ''
        : 'invert(65%) sepia(100%) saturate(341%) hue-rotate(127deg) brightness(91%) contrast(83%);'};
    width: 1.563rem;
  }
`;

/**
 * Home page template
 * @function Home
 * @param {object} siteData: all data for the site
 * @returns {JSX}
 */
const Home = ({ siteData }) => {
  const { theme } = useTheme();
  const projects = siteData.projects;
  const [data, setData] = useState(projects);
  const [desc, setDesc] = useState(true);

  useEffect(() => {
    document.title = 'Mark Stevens - Home';
    window.scrollTo(0, 0);
  }, []);

  /**
   * Filters projects based on selected tag from dropdown
   * @function HandleFilter
   * @param {string} tagSelected: selected tag
   * @returns {state} filtered-array updated to state
   */
  const HandleFilter = (tagSelected) => {
    // let filtered = tagSelected ? projects.filter(((data) => [tagSelected].every((tag) => data.techIcons.includes(tag)))) : projects;
    // setData(filtered);

    // experiment using GPT-3.5: it's solution to my filter code above.
    const filterProjectsByTag = tagSelected
      ? projects.filter((project) => project.techIcons.includes(tagSelected))
      : projects;
    setData(filterProjectsByTag);
  };

  /**
   * Sorts projects asc/desc order
   * @function HandleSort
   * @returns {state} sorted-array updated to state
   */
  const HandleSort = () => {
    setDesc(!desc);
    const sorted = desc
      ? [...data].sort((a, b) => (a.date > b.date ? -1 : 1))
      : [...data].sort((a, b) => (a.date < b.date ? -1 : 1));
    setData(sorted);
  };

  return (
    <main role="main">
      <h1 className="sr-only">Mark Stevens - Welcome</h1>
      <Hero image={heroImg} siteText={siteData.siteText} />

      <TechWrapper theme={theme}>
        <TechIcons icons={siteData.siteText.techIcons} />
      </TechWrapper>

      <PortFolioWrapper theme={theme}>
        <h2 className="sr-only">Portfolio</h2>
        {data.map((project) => (
          <Card key={project.id} project={project} />
        ))}

        <Controls>
          <Select
            id={siteData.siteText.filter}
            filterDefault={siteData.siteText.filterDefault}
            listItems={filter}
            onChange={(e) => HandleFilter(e.target.value)}
          />

          {/* ascending/descending order button */}
          <Sort
            theme={theme}
            aria-label="Sort by date"
            onClick={() => HandleSort()}
          >
            {desc ? (
              <>
                <Tooltip content={siteData.siteText.descend}>
                  <img src={DESC} alt="Desc" />
                </Tooltip>
              </>
            ) : (
              <>
                <Tooltip content={siteData.siteText.ascend}>
                  <img src={ASC} alt="Asc" />
                </Tooltip>
              </>
            )}
          </Sort>
        </Controls>
      </PortFolioWrapper>
    </main>
  );
};

export default Home;

// Prototypes
Home.propTypes = {
  siteData: PropTypes.object.isRequired,
};
