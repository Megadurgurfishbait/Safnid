import styled from "styled-components";
import { Layout } from "../../../App/Styles/";
const Container = styled(Layout)`
  display: flex;
  background-color: green;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
  height: 800px;
  width: 1400px;
  background-color: red;
`;

const options = {
  mode: "classic",
  katex: "window.katex",
  buttonList: [
    [
      "undo",
      "redo",
      "font",
      "fontSize",
      "formatBlock",
      "paragraphStyle",
      "blockquote",
      "bold",
      "underline",
      "italic",
      "subscript",
      "fontColor",
      "hiliteColor",
      "textStyle",
      "removeFormat",
      "outdent",
      "indent",
      "align",
      "horizontalRule",
      "list",
      "lineHeight",
      "table",
      "link",
      "image",
      "video",
      "fullScreen",
      "showBlocks",
      "preview",
      "save",
      "template"
    ]
  ],
  "lang(In nodejs)": "en"
};

export { Container, Content, options };
