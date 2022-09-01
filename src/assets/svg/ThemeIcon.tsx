import { FC } from 'react';

type SvgProps = {
  width?: 24;
  height?: 24;
};

export const ThemeIcon: FC<SvgProps> = ({ width = 24, height = 24 }, props) => (
  <svg
    style={{ marginRight: '16px' }}
    width={width}
    height={height}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M12.576 23.25c-3.168 0-6.14-1.227-8.37-3.456a11.753 11.753 0 0 1-3.456-8.37A11.824 11.824 0 0 1 7.227.877a1.146 1.146 0 0 1 1.616 1.357A10.318 10.318 0 0 0 11.41 12.59a10.253 10.253 0 0 0 7.296 3.03c1.037 0 2.069-.155 3.06-.461a1.146 1.146 0 0 1 1.357 1.615 11.825 11.825 0 0 1-10.548 6.477ZM7.186 2.615a10.28 10.28 0 0 0-4.936 8.81c0 5.693 4.632 10.325 10.326 10.325a10.28 10.28 0 0 0 8.81-4.936c-.879.203-1.777.305-2.679.305a11.746 11.746 0 0 1-8.356-3.47A11.82 11.82 0 0 1 7.186 2.616Z"
      fill="#000"
    />
  </svg>
);