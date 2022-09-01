import { FC } from 'react';

type SvgProps = {
  width?: number;
  height?: number;
};

export const MenuIcon: FC<SvgProps> = ({ width = 24, height = 25 }, props) => (
  <svg
    id="menu-icon"
    style={{ cursor: 'pointer' }}
    width={width}
    height={height}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M20.25 4.5H3.75V6h16.5V4.5ZM20.25 11.25H3.75v1.5h16.5v-1.5ZM20.25 18H3.75v1.5h16.5V18Z"
      fill="#000"
    />
  </svg>
);
