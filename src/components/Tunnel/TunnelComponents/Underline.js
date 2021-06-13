import { useSpring, animated as a, interpolate } from "react-spring";

function Underline() {
  const drawLine = useSpring({});
  return (
    // <svg
    //   width="321"
    //   height="8"
    //   viewBox="0 0 321 8"
    //   fill="none"
    //   xmlns="http://www.w3.org/2000/svg"
    // >
    //   <line y1="1.5" x2="320" y2="1.5" stroke="black" />
    //   <line
    //     x1="320.012"
    //     y1="1.02083"
    //     x2="53.9987"
    //     y2="3.99418"
    //     stroke="black"
    //   />
    //   <line x1="264.006" y1="4.3461" x2="53.9975" y2="3.80896" stroke="black" />
    //   <line
    //     x1="111.993"
    //     y1="6.65558"
    //     x2="264.139"
    //     y2="4.50005"
    //     stroke="black"
    //   />
    // </svg>
    <svg
      width="329"
      height="16"
      viewBox="0 0 329 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d)">
        <line x1="4" y1="5.5" x2="324" y2="5.5" stroke="#8306B1" />
        <line
          x1="324.012"
          y1="5.02083"
          x2="57.9987"
          y2="7.99418"
          stroke="#8306B1"
        />
        <line
          x1="268.006"
          y1="8.3461"
          x2="57.9975"
          y2="7.80896"
          stroke="#8306B1"
        />
        <line
          x1="115.993"
          y1="10.6556"
          x2="268.139"
          y2="8.50005"
          stroke="#8306B1"
        />
      </g>
      <defs>
        <filter
          id="filter0_d"
          x="0"
          y="0.520859"
          width="328.018"
          height="14.6347"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="2" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.513726 0 0 0 0 0.0235294 0 0 0 0 0.694118 0 0 0 0.5 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}

export default Underline;
