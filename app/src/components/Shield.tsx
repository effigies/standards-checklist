// react module svg shield component

// Default colors for the shield
export const SHIELD_FILL = { bronze: '#CD7F32', silver: '#1C274C', gold: '#FFD700' }
export const SHIELD_STROKE = { fail: '#C70039', success: 'black' }


/**
 * A shield component that displays a shield with a text in the middle.
 * 
 * @param {object} props Component props
 * @param {object} props.style SVG style
 * @param {string} props.fill Shield body color
 * @param {string} props.stroke Shield border color
 * @param {string} props.text Text to display in the middle of the shield
 * @returns {JSX.Element}
 */
export const Shield = ({ style, fill, stroke, text }: any): JSX.Element => {
    return (
      <svg style={style} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd"
          d="M3.37752 5.08241C3 5.62028 3 7.21907 3 10.4167V11.9914C3 17.6294 7.23896 20.3655 9.89856 21.5273C10.62 21.8424 10.9807 22 12 22V2C11.1886 2 10.405 2.26824 8.83772 2.80472L8.26491 3.00079C5.25832 4.02996 3.75503 4.54454 3.37752 5.08241Z"
          fill={fill} opacity="0.25"></path>
        <path
          d="M21 11.9914V10.4167C21 7.21907 21 5.62028 20.6225 5.08241C20.245 4.54454 18.7417 4.02996 15.7351 3.00079L15.1623 2.80472C13.595 2.26824 12.8114 2 12 2V22C13.0193 22 13.38 21.8424 14.1014 21.5273C16.761 20.3655 21 17.6294 21 11.9914Z"
          fill={fill} opacity="0.35"></path>
        <path
          d="M3.37752 5.08241C3 5.62028 3 7.21907 3 10.4167V11.9914C3 17.6294 7.23896 20.3655 9.89856 21.5273C10.62 21.8424 10.9807 22 12 22C13.0193 22 13.38 21.8424 14.1014 21.5273C16.761 20.3655 21 17.6294 21 11.9914V10.4167C21 7.21907 21 5.62028 20.6225 5.08241C20.245 4.54454 18.7417 4.02996 15.7351 3.00079L15.1623 2.80472C13.595 2.26824 12.8114 2 12 2C11.1886 2 10.405 2.26824 8.83772 2.80472L8.26491 3.00079C5.25832 4.02996 3.75503 4.54454 3.37752 5.08241Z"
          fill="none" stroke={stroke} stroke-width="1"></path>
        <text x="50%" y="52%" dominant-baseline="middle" text-anchor="middle" fill={stroke}>{text}</text>
      </svg>
    )
  }