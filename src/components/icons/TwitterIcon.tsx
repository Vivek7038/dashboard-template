import * as React from 'react';
import type { SVGProps } from 'react';
const Component = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 19.5 16.8'
    {...props}
  >
    <path
      xmlns='http://www.w3.org/2000/svg'
      stroke='#0A0A0B'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={1.5}
      d='M16.95 5.25c0 6.3-3.6 10.8-9.9 10.8-3.6 0-5.04-1.88-6.3-3.6m0 0c.03 0 2.7-.9 2.7-.9C.44 8.51.22 4.01 2.55.75c1.11 2.06 3.17 3.96 5.4 4.5.09-2.6 1.85-4.5 4.5-4.5 1.8 0 2.87.69 3.6 1.8h2.7l-1.8 2.7'
      clipRule='evenodd'
    />
  </svg>
);
export default Component;
