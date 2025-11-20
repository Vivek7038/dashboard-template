import * as React from 'react';
import type { SVGProps } from 'react';
const Component = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 24 24.625'
    {...props}
  >
    <path
      xmlns='http://www.w3.org/2000/svg'
      stroke='#0A0A0B'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={1.5}
      d='M12 15.78v4.34m0 0c-1.036 0-1.875.84-1.875 1.88M12 20.12c1.036 0 1.875.84 1.875 1.88m0 0H22m-8.125 0a1.876 1.876 0 1 1-3.75 0M2 22h8.125m-5-18.12v1.24m3.75-1.24v1.24m3.75-.62H19.5M5.125 11.38v1.24m3.75-1.24v1.24m3.75-.62H19.5m1.875-3.75H2.625m18.75 0c1.036 0 1.875.84 1.875 1.87v3.76c0 1.03-.839 1.87-1.875 1.87H2.625A1.874 1.874 0 0 1 .75 13.88v-3.76c0-1.03.839-1.87 1.875-1.87m18.75 0c1.036 0 1.875-.84 1.875-1.87V2.62c0-1.03-.839-1.87-1.875-1.87H2.625C1.589.75.75 1.59.75 2.62v3.76c0 1.03.839 1.87 1.875 1.87'
    />
  </svg>
);
export default Component;
