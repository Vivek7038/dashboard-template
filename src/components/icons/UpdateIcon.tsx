import * as React from 'react';
import type { SVGProps } from 'react';
const Component = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 24 24'
    {...props}
  >
    <path
      xmlns='http://www.w3.org/2000/svg'
      stroke='#0A0A0B'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={1.5}
      d='M4.5 7.31H.75V3.56M6.334 21.9c1.125.66 2.371 1.12 3.699 1.35m-8.681-7.28c.458 1.25 1.121 2.4 1.963 3.41m10.653 3.87c1.327-.23 2.572-.69 3.698-1.35m3.019-2.52a11.5 11.5 0 0 0 1.962-3.41M23.25 12C23.25 5.79 18.214.75 12 .75 7.462.75 3.561 3.44 1.782 7.31M12 8.25V7m0 8.75V17m3.75-5H17m-8.75 0H7m7.65-2.65.887-.89M9.35 14.65l-.887.89m6.187-.89.887.89M9.35 9.35l-.887-.89m6.188.89a3.745 3.745 0 0 1 0 5.3 3.74 3.74 0 0 1-5.303 0 3.745 3.745 0 0 1 0-5.3 3.74 3.74 0 0 1 5.303 0'
    />
  </svg>
);
export default Component;
