import { ErrorMessage, Field } from 'formik';

const imageUploader = () => {
    return(
        <div className="Form_Group">                
            <Field name="niver"input type="date" className="Form_Field"/>
            <ErrorMessage component="span" name="niver" className="Form_Error" />
        </div>
    )
}

export default imageUploader
