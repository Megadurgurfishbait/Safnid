interface CSSObject {
  [propertyName: string]: string;
}

const Montserrat: CSSObject = {
  thin: `
    font-family: 'Montserrat', sans-serif;
    font-weight: 300;
    `,
  medium: `
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
    `,
  bold: `
    font-family: 'Montserrat', sans-serif;
    font-weight: 900;
    `
};

const IBMPlex: CSSObject = {
  thin: `
    font-family: 'IBM Plex Sans', sans-serif;
    font-weight: 300;
    `,
  medium: `
    font-family: 'IBM Plex Sans', sans-serif;
    font-weight: 500;
    `,
  bold: `
    font-family: 'IBM Plex Sans', sans-serif;
    font-weight: 700;
    `
};

export default {
  Montserrat,
  IBMPlex
};
