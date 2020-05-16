import { Colors as C } from "./";

export const Scrollbar = `
  /* Track */
  ::-webkit-scrollbar-track {
    background: ${C.BROWN_LIGHT};
    border-radius: 5px;
    box-shadow: 2px 2px 10px ${C.BROWN_DARK};
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: ${C.RED};
    border-radius: 5px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
  `;
