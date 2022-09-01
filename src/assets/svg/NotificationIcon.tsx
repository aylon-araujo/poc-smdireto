import { FC } from 'react';

type SvgProps = {
  width?: number;
  height?: number;
};

export const NotificationIcon: FC<SvgProps> = (
  { width = 20, height = 22 },
  props,
) => (
  <svg
    style={{ marginRight: '16px' }}
    width={width}
    height={height}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="m19.107 15.34-2.047-3.78V7.625A7.133 7.133 0 0 0 9.933.5 7.133 7.133 0 0 0 2.81 7.625v3.935L.762 15.34a1.125 1.125 0 0 0 .99 1.66h4.075a4.125 4.125 0 1 0 8.216 0h4.074a1.125 1.125 0 0 0 .99-1.66Zm-6.547 2.035A2.625 2.625 0 1 1 7.337 17h5.195c.018.124.027.25.027.375ZM2.38 15.5l1.928-3.56V7.625a5.625 5.625 0 0 1 11.25 0v4.315l1.929 3.56H2.38Z"
      fill="#000"
    />
  </svg>
);
