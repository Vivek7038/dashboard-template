import * as React from 'react';
import type { SVGProps } from 'react';
const Component = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 18 18'
    {...props}
  >
    <g xmlns='http://www.w3.org/2000/svg' fillRule='evenodd' clipRule='evenodd'>
      <path
        fill='#36C5F0'
        d='M6.6 0a1.8 1.8 0 0 0 0 3.6h1.801V1.8C8.401.807 7.595.001 6.6 0m0 4.8H1.8a1.8 1.8 0 0 0 0 3.6h4.8a1.8 1.8 0 0 0 0-3.6'
      />
      <path
        fill='#2EB67D'
        d='M18 6.6a1.8 1.8 0 0 0-3.601 0v1.8H16.2A1.8 1.8 0 0 0 18 6.6m-4.8 0V1.8a1.8 1.8 0 0 0-3.6 0v4.8a1.8 1.8 0 1 0 3.6 0'
      />
      <path
        fill='#ECB22E'
        d='M11.4 18a1.8 1.8 0 0 0 0-3.599H9.599v1.8c0 .991.806 1.797 1.801 1.8m0-4.8h4.8a1.8 1.8 0 0 0 0-3.6h-4.8a1.8 1.8 0 0 0 0 3.6'
      />
      <path
        fill='#E01E5A'
        d='M0 11.4a1.8 1.8 0 0 0 3.601 0V9.6H1.8A1.8 1.8 0 0 0 0 11.4m4.8 0v4.8a1.8 1.8 0 1 0 3.6.001v-4.8a1.8 1.8 0 0 0-3.6-.002'
      />
    </g>
  </svg>
);
export default Component;
