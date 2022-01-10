import { keyframes } from 'styled-components'

/**
 * fade in component
 */
 export const fadeIn = keyframes`
   from { opacity: 0; }
   to   { opacity: 1; }
 `;
 
/**
 * Keyframe for spinning components
 */
export const rotate = keyframes`
 from { transform: rotate(0deg); }
 to { transform: rotate(360deg); }
`;