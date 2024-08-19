import { Editor } from '@tinymce/tinymce-react'
import React, { Fragment} from 'react'
import { ControlProps } from '../../Types/answersTypes';

interface Props {
    controlProps: ControlProps
}
const QuestionArea: React.FC<Props> = ({controlProps}) => {
    const value = controlProps.value.value
    const setValue = controlProps.value.setValue
    const setText = controlProps.text.setText

    const onEditorInputChange = (newValue: string, editor) => {
        setValue(newValue);
       setText(editor.getContent({ format: "text" }));
   }
  return (
    <Fragment>
        <div>
        <Editor 
            apiKey='sr4975zujn3ck5d13394sqhqmkbxrty5ad47h5tosnecxlc7'
            onEditorChange={(newValue, editor) => onEditorInputChange(newValue, editor)}
            onInit={(evt, editor) => setText(editor.getContent({ format: "text" }))}
            value={value}
            initialValue={'Write your thoughts here...'}
        />
        </div>
    </Fragment>

  )
}

export default QuestionArea
