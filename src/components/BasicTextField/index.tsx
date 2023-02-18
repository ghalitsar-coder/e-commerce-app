/* eslint-disable max-len */
/* eslint-disable react/require-default-props */

import { TextField } from "@/components";
import React from "react";

function BasicTextField({
  ref,
  classNameWithIcon = "",
  label,
  inputId,
  placeholder,
  icon,
  positionIcon,
  handleClickIcon,
  type,
  inputClass,
  ...props
}: any) {
  return (
    <TextField
      label={label}
      htmlId={inputId}
      ref={ref}
      labelClass="label__class-regular "
      fieldsetClass={`grid  ${
        type === "textarea" ? "col-span-2" : "col-span-2 md:col-span-1"
      } gap-4   `}
      placeholder={placeholder}
      className={` transition-all duration-300 ease-in-out  ${inputClass} ${
        !icon
          ? "input__class-regular invalid:ring-2 invalid:ring-red-500"
          : "input__class-regular border-none focus:ring-0 !px-4 "
      } disabled:!bg-muted
        ${type === "textarea" && " min-h-[130px]"}   `}
      classNameWithIcon={`${classNameWithIcon}`}
      positionIcon={positionIcon}
      handleClickIcon={handleClickIcon}
      icon={icon}
      type={type}
      {...props}
    />
  );
}

export default BasicTextField;
