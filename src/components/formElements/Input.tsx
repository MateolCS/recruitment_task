import React from "react";

import {
  FormGroup,
  StyledInput,
  StyledLabel,
  StyledSelect,
  ErrorMessage,
} from "./Input.styled";

import { FieldValues, UseFormRegister } from "react-hook-form";

interface iInputs extends FieldValues {
  name: string;
  preparation_time: string;
  type: string;
  no_of_slices: number;
  diameter: number;
  spiciness_scale: number;
  slices_of_bread: number;
}

interface InputProps {
  label: string;
  type: string;
  required?: boolean;
  options?: string[];
  errors?: string;
  register: UseFormRegister<iInputs>;
  fieldName: string;
  elementType?: string;
  validators?: any;
  float?: boolean;
}

const Input = ({
  label,
  type,
  options,
  errors,
  register,
  fieldName,
  elementType,
  validators,
  float,
}: InputProps) => {
  const element =
    elementType === "select" ? (
      <StyledSelect {...register(fieldName, validators)}>
        <option value=""></option>
        {options?.map((option: string, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </StyledSelect>
    ) : type === "time" ? (
      <StyledInput type={type} {...register(fieldName, validators)} step={1} />
    ) : (
      <StyledInput
        type={type}
        {...register(fieldName, validators)}
        step={float ? "0.01" : "1"}
      />
    );
  return (
    <FormGroup>
      <StyledLabel htmlFor={fieldName}>{label}</StyledLabel>
      {element}
      {errors && <ErrorMessage>This field it required</ErrorMessage>}
    </FormGroup>
  );
};

export default Input;
