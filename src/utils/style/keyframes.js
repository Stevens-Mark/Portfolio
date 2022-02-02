import { keyframes } from 'styled-components'

/**
 * fadein/out 
 */
 export const fadeIn = keyframes`
   from { opacity: 0; }
   to   { opacity: 1; }
 `;
 
 export const fadeOut = keyframes`
 from { opacity: 1; }
 to   { opacity: 0; }
`;

/**
 * Keyframe for spinning components
 */
export const rotate = keyframes`
 from { transform: rotate(0deg); }
 to { transform: rotate(360deg); }
`;

/**
 * Keyframes for about mobile heading
 */
export const scaleRotate = keyframes`
  from { transform: scale(0) rotate(-90deg); }
  to { transform: scale(1) rotate(0deg); }
}
`;

export const yTranslate = keyframes`
  from { transform: translateY(250%); }
  to { transform: translateY(-4px); }
}
`;








