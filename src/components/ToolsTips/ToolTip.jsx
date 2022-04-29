import React, { useState } from "react"
import PropTypes from 'prop-types'
// for styling
import styled from 'styled-components'

/**
 * CSS for component using styled.components
 */
const TooltipWrapper =styled.div`
  display: inline-block;
  position: relative;
`;

const ToolTip = styled.div`
  position: absolute;
  border-radius: 4px;
  left: 50%;
  transform: translateX(-50%);
  padding: 6px;
  color: white;
  background: black;
  font-size: 14px;
  font-family: sans-serif;
  line-height: 1;
  z-index: 100;
  white-space: nowrap;
  top: calc(30px * -1);
  &:before {
    content: " ";
    left: 50%;
    border: solid transparent;
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
    border-width: 6px;
    margin-left: calc(6px * -1);
  }

  &.top{
    top: calc(30px * -1);
    &:before {
      top: 100%;
      border-top-color: black;
    }
  }
`;

/**
 * Renders a styled tooltip on mouse over
 * @function Tooltip
 * @param {object} props 
 * @returns {JSX}
 */
const Tooltip = (props) => {

  let timeout
  const [active, setActive] = useState(false)

  const showTip = () => {
    timeout = setTimeout(() => {
      setActive(true)
    }, props.delay || 400)
  }

  const hideTip = () => {
    clearInterval(timeout)
    setActive(false)
  }

  return (
    <TooltipWrapper onMouseEnter={showTip} onMouseLeave={hideTip}>
      {/* Wrapping */}
      {props.children}
      {active && (
        <ToolTip className="top">
          {/* Content */}
          {props.content}
        </ToolTip>
      )}
    </TooltipWrapper>
  );
};

export default Tooltip

// Prototypes
ToolTip.propTypes = {
  props: PropTypes.object,
}