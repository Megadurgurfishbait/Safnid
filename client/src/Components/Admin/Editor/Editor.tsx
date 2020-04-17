import React from "react";
import * as E from "./Editor.styled";
import SunEditor from "suneditor-react";
import "suneditor/dist/css/suneditor.min.css"; // Import Sun Editor's CSS File

const Editor = () => {
  return (
    <E.Container>
      <E.Content>
        <SunEditor width="100%" setOptions={E.options} showToolbar={true} />
      </E.Content>
    </E.Container>
  );
};
export default Editor;

/*




handleImageUpload(targetImgElement, index, state, imageInfo, remainingFilesCount){
	console.log(targetImgElement, index, state, imageInfo, remainingFilesCount)
}
render() {
	return <SunEditor onImageUpload={handleImageUpload} />
}


handleImageUploadError(errorMessage, result){
	console.log(errorMessage, result)
}
render() {
	return <SunEditor onImageUploadError={handleImageUploadError} />
}







*/
