import { keyframes } from 'styled-components'

/**
 * fade in components
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



// export const slideIn = keyframes`
//   10% { opacity: 0; transform: translateY(-100px); }

//   // 75% { opacity: 0; }

//   100%  { opacity: 1; transform: translateY(0px); } 
// `;

// .element {
//   display: inline-block;
//   background: linear-gradient(180deg,#ff8a00,#e52e71);
//   height: 100px;
//   width: 100px;
//   font-size: 1px;
//   padding: 1px;
//   color: white;
//   margin-right: 5px;
//   margin-left: 5px;
//   animation: skew 3s infinite;
//   transform: skew(20deg);
//   animation-direction: alternate;
//   opacity: .7;
// }

export const skew = keyframes`
  0% {
    transform: skew(20deg, 20deg);
  }
  100% {
    transform: skew(-20deg, -20deg);
  }
}
`;

// .element {
//   display: inline-block;
//   background-color: #0074d9;
//   height: 100px;
//   width: 100px;
//   font-size: 1px;
//   padding: 1px;
//   color: white;
//   margin-right: 5px;
//   margin-left: 5px;
//   animation: roll 3s infinite;
//   transform: rotate(30deg);
//   opacity: .7;
// }

export const roll = keyframes`
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
}
`;




