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



// export const slideIn = keyframes`
//   10% { opacity: 0; transform: translateY(-100px); }

//   75% { opacity: 0; }

//   100%  { opacity: 1; transform: translateY(0px);} 
// `;
