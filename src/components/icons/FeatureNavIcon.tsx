import * as React from 'react';
import type { SVGProps } from 'react';
const Component = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 20.5 20.5'
    {...props}
  >
    <path
      xmlns='http://www.w3.org/2000/svg'
      stroke='#0A0A0B'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={1.5}
      d='M12.25 10.25a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0m0 0H.75m0 0a9.5 9.5 0 0 0 9.5 9.5 9.5 9.5 0 0 0 9.5-9.5 9.5 9.5 0 0 0-9.5-9.5 9.5 9.5 0 0 0-9.5 9.5m8.31 4.25a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0m0 0h9.688M9.06 6a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0 0h9.688'
    />
  </svg>
);
export default Component;
