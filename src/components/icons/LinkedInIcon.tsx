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
      d='M5.87 8.85v5.4m3.6 0V11.1c0-1.24 1.01-2.25 2.25-2.25s2.25 1.01 2.25 2.25v3.15M5.25.75h9c2.49 0 4.5 2.01 4.5 4.5v9.01c0 2.48-2.01 4.49-4.5 4.49h-9c-2.49 0-4.5-2.01-4.5-4.5v-9c0-2.48 2.02-4.5 4.5-4.5m.62 4.84c-.13 0-.23.1-.23.22 0 .13.1.23.23.23.12 0 .22-.1.22-.23 0-.12-.1-.22-.22-.22'
    />
  </svg>
);
export default Component;
