import { useFormik } from "formik";
import * as Yup from "yup";

import {
  Checkbox,
  CheckboxContainer,
  CheckboxLabel,
  EmployeeFormContainer,
} from "./styles";
import Input from "components/Input/Input";
import Button from "components/Button/Button";
import type { EmployeeFormValues } from "./types";

function EmployeeForm() {
  const validationSchema = Yup.object().shape({
    fullName: Yup.string()
      .required("Required field")
      .min(5, "Min 5 symbols")
      .max(50, "Max 50 symbols"),
    age: Yup.number()
      .required("Required field")
      .min(18, "Min age - 18")
      .max(80, "Max age -80")
      .typeError("Type number"),
    jobTitle: Yup.string().max(50, "Max 50 symbols"),
    agreement: Yup.boolean().oneOf([true], "Accept agreement"),
  });

  const formik = useFormik({
    initialValues: {
      fullName: "",
      age: "",
      jobTitle: "",
      agreement: false,
    } as EmployeeFormValues,
    validationSchema,
    validateOnChange: false,
    onSubmit: (values: EmployeeFormValues): void => {
      console.table(values);
    },
  });

  console.log(formik);

  return (
    <EmployeeFormContainer onSubmit={formik.handleSubmit}>
      <Input
        name="fullName"
        id="full_name_id"
        label="Full Name*"
        placeholder="Enter your full name"
        value={formik.values.fullName}
        onChange={formik.handleChange}
        error={formik.errors.fullName}
      />
      <Input
        name="age"
        id="age_id"
        label="Age*"
        placeholder="Enter your age"
        value={formik.values.age}
        onChange={formik.handleChange}
        error={formik.errors.age}
      />
      <Input
        name="jobTitle"
        id="job_title_id"
        label="Job Title"
        placeholder="Enter your job title"
        value={formik.values.jobTitle}
        onChange={formik.handleChange}
        error={formik.errors.jobTitle}
      />
      <CheckboxContainer>
        <Checkbox
          name="agreement"
          type="checkbox"
          id="agree_id"
          checked={formik.values.agreement}
          onChange={formik.handleChange}
        />
        <CheckboxLabel htmlFor="agree_id">I agree *</CheckboxLabel>
      </CheckboxContainer>
      <Button name="CREATE" type="submit" disabled={!formik.values.agreement}/>
    </EmployeeFormContainer>
  );
}

export default EmployeeForm;
