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
      d='M23.25 18.25v2.5a2.5 2.5 0 0 1-2.5 2.5h-2.5M.75 5.75v-2.5a2.5 2.5 0 0 1 2.5-2.5h2.5M9.5 7V3.25A2.5 2.5 0 0 1 12 .75h8.75a2.5 2.5 0 0 1 2.5 2.5V12a2.5 2.5 0 0 1-2.5 2.5H17m-3.75-8.75h6.25M17 9.5h2.5m-6.261 10.434-.436-5.627A2.5 2.5 0 0 0 10.311 12H3.688a2.5 2.5 0 0 0-2.492 2.307L.76 19.934m9.347.146a.066.066 0 0 0-.089 0 .064.064 0 0 0 0 .089M3.875 23.25h6.25a3.125 3.125 0 1 0 0-6.25h-6.25a3.125 3.125 0 1 0 0 6.25'
    />
  </svg>
);
export default Component;
