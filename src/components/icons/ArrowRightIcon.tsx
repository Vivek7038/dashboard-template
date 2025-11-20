import * as React from 'react';
import type { SVGProps } from 'react';
const Component = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 15.5 11.5'
    {...props}
  >
    <path
      xmlns='http://www.w3.org/2000/svg'
      stroke='#fff'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={1.5}
      d='M14.75 5.75h-14m14 0-5 5m5-5-5-5'
    />
  </svg>
);
export default Component;
