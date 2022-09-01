import { FC } from 'react';

type SvgProps = {
  width?: number;
  height?: number;
};

export const LogoutIcon: FC<SvgProps> = (
  { width = 24, height = 24 },
  props,
) => (
  <svg
    style={{ cursor: 'pointer' }}
    width={width}
    height={height}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M20.383 12.752H7.512v-1.5h12.871l-3.518-3.519 1.06-1.06 5.33 5.329-5.33 5.328-1.06-1.06 3.518-3.518Z"
      fill="#000"
    />
    <path d="M16.5.75v1.5H2.25v19.5H16.5v1.5H.75V.75H16.5Z" fill="#000" />
  </svg>
);
