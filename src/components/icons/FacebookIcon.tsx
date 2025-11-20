import * as React from 'react';
import type { SVGProps } from 'react';
const Component = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 19.5 19.5'
    {...props}
  >
    <path
      xmlns='http://www.w3.org/2000/svg'
      stroke='#0A0A0B'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={1.5}
      d='M8.85 10.65h5.4m0-4.5h-.95c-1.46 0-2.65 1.19-2.65 2.65v9.95m-5.4-18h9c2.49 0 4.5 2.01 4.5 4.5v9.01c0 2.48-2.01 4.49-4.5 4.49h-9c-2.49 0-4.5-2.01-4.5-4.5v-9c0-2.48 2.02-4.5 4.5-4.5'
    />
  </svg>
);
export default Component;
