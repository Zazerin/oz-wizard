import React from "react";
import { useField } from "formik";
import { TextFieldProps, TextField } from "@material-ui/core";

export const FormicTextField: React.FC<
  { name: string } & Omit<TextFieldProps, "name">
> = (props) => {
  const [field, meta] = useField(props.name);

  return (
    <TextField
      error={Boolean(meta.error)}
      helperText={
        meta.error && (meta.touched && meta.error ? meta.error : undefined)
      }
      {...props}
      {...field}
    />
  );
};

export default FormicTextField;
