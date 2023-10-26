import * as React from "react";

const ChatBotImage = (props) => (
  <svg
    width={122}
    height={121}
    viewBox="0 0 122 121"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <g filter="url(#filter0_d_56_10)">
      <rect
        x={4}
        y={0.0756836}
        width={114}
        height={112.812}
        rx={56.4062}
        fill="white"
      />
      <rect
        x={13}
        y={9.88818}
        width={96}
        height={95}
        rx={47.5}
        fill="#F5F5F5"
      />
      <rect
        x={13}
        y={9.88818}
        width={96}
        height={95}
        rx={47.5}
        fill="#F5F5F5"
      />
      <rect
        width={64}
        height={57.4915}
        transform="matrix(-1 0 0 1 91 27.3966)"
        fill="url(#chat-bot-image)"
      />
      <rect
        x={27}
        y={68.6169}
        width={4.33898}
        height={16.2712}
        fill="#F5F5F5"
      />
      <rect
        x={27}
        y={27.3966}
        width={8.67797}
        height={3.25424}
        fill="#F5F5F5"
      />
    </g>
    <defs>
      <filter
        id="filter0_d_56_10"
        x={0}
        y={0.0756836}
        width={122}
        height={120.812}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy={4} />
        <feGaussianBlur stdDeviation={2} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_56_10"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_56_10"
          result="shape"
        />
      </filter>
      <pattern
        id="chat-bot-image"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <use
          xlinkHref="#image0_56_10"
          transform="matrix(0.00428018 0 0 0.00476473 -1.89831 -4.90612)"
        />
      </pattern>
      <image
        id="image0_56_10"
        width={2224}
        height={1600}
      />
    </defs>
  </svg>
);
export default ChatBotImage;