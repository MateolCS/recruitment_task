import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

import Input from "./Input";
import Button from "./Button";
import Error from "./Error";

import { StyledForm } from "./Form.styled";
import { Dish, Inputs } from "../../types";

interface FormProps {
  formHandler: (data: Dish) => Promise<boolean>;
  apiError: string;
  showError: boolean;
}

const Form = ({ formHandler, apiError, showError }: FormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    if (data.type === "pizza") {
      if (
        data.name.trim() === "" ||
        data.preparation_time.trim() === "" ||
        data.no_of_slices === 0 ||
        data.diameter === 0
      ) {
        return;
      }

      const pizzaData: Dish = {
        type: data.type,
        name: data.name,
        preparation_time: data.preparation_time,
        no_of_slices: data.no_of_slices,
        diameter: data.diameter,
      };

      const res = await formHandler(pizzaData);
      if (res) {
        reset();
      }
    }

    if (data.type === "soup") {
      if (
        data.name.trim() === "" ||
        data.preparation_time.trim() === "" ||
        data.spiciness_scale === 0
      ) {
        return;
      }

      const soupData: Dish = {
        type: data.type,
        name: data.name,
        preparation_time: data.preparation_time,
        spiciness_scale: data.spiciness_scale,
      };

      const res = await formHandler(soupData);
      if (res) {
        reset();
      }
    }

    if (data.type === "sandwich") {
      if (
        data.name.trim() === "" ||
        data.preparation_time.trim() === "" ||
        data.slices_of_bread === 0
      ) {
        return;
      }

      const sandwichData: Dish = {
        type: data.type,
        name: data.name,
        preparation_time: data.preparation_time,
        slices_of_bread: data.slices_of_bread,
      };

      const res = await formHandler(sandwichData);
      if (res) {
        reset();
      }
    }
  };

  const values = watch();

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      {showError && <Error error={apiError} />}
      <Input
        label="Dish name"
        type="text"
        required={true}
        register={register}
        fieldName="name"
        errors={errors.name?.message}
        validators={{ required: "This field is required" }}
      />
      <Input
        label="Preparation time"
        type="time"
        required={true}
        register={register}
        fieldName="preparation_time"
        errors={errors.preparation_time?.message}
        validators={{ required: "This field is required" }}
      />
      <Input
        label="Type"
        type="select"
        required={true}
        register={register}
        fieldName="type"
        options={["pizza", "soup", "sandwich"]}
        errors={errors.type?.message}
        elementType={"select"}
        validators={{ required: "This field is required" }}
      />
      {values.type === "pizza" && (
        <Input
          label="Number of slices"
          type="number"
          required={true}
          register={register}
          fieldName="no_of_slices"
          errors={errors.no_of_slices?.message}
          validators={{ required: "This field is required" }}
        />
      )}
      {values.type === "pizza" && (
        <Input
          label="Diameter"
          type="number"
          required={true}
          register={register}
          fieldName="diameter"
          errors={errors.diameter?.message}
          validators={{ required: "This field is required" }}
          float={true}
        />
      )}
      {values.type === "soup" && (
        <Input
          label="Spiciness scale"
          type="number"
          required={true}
          register={register}
          fieldName="spiciness_scale"
          errors={errors.spiciness_scale?.message}
          validators={{ required: "This field is required", min: 1, max: 10 }}
        />
      )}
      {values.type === "sandwich" && (
        <Input
          label="Slices of bread"
          type="number"
          required={true}
          register={register}
          fieldName="slices_of_bread"
          errors={errors.slices_of_bread?.message}
          validators={{ required: "This field is required" }}
        />
      )}
      <Button message="Submit" type="submit" />
    </StyledForm>
  );
};

export default Form;
