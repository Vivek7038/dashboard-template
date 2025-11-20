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
      d='M23.25 19.5a3.75 3.75 0 0 1-3.75 3.75M.75 4.5A3.75 3.75 0 0 1 4.5.75m0 22.5A3.75 3.75 0 0 1 .75 19.5M19.5.75a3.75 3.75 0 0 1 3.75 3.75M.75 14.03v1.56m0-7.18v1.56m22.5 0V8.41m0 7.18v-1.56m-9.219 9.22h1.563m-7.188 0h1.563m0-22.5H8.406m7.188 0h-1.563M8.884 14.51a.074.074 0 0 0-.089 0c-.025.03-.025.07 0 .09m9.445-.29-.436-5.63a2.5 2.5 0 0 0-2.494-2.3H8.689c-1.307 0-2.392 1-2.493 2.3l-.436 5.63m9.421-2.82H8.817a3.066 3.066 0 1 0 .002 6.13h6.363a3.064 3.064 0 1 0-.001-6.13'
    />
  </svg>
);
export default Component;
