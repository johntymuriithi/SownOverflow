import { Editor } from '@tinymce/tinymce-react'
import React, { Fragment, useState } from 'react'

const EditPage = ({ editValue }) => {
    const [value, setValue] = useState<string>("")
    const [text, setText] = useState<string>("")

    const onEditorInputChange = (newValue: string, editor) => {
        setValue(newValue);
       setText(editor.getContent({ format: "text" }));
   }

   console.log(value, text)
  return (
    <Fragment>
        <div>
        <Editor 
            apiKey='sr4975zujn3ck5d13394sqhqmkbxrty5ad47h5tosnecxlc7'
            onEditorChange={(newValue, editor) => onEditorInputChange(newValue, editor)}
            onInit={(evt, editor) => setText(editor.getContent({ format: "text" }))}
            value={value}
            initialValue={editValue}
        />
        </div>
    </Fragment>

  )
}

export default EditPage
