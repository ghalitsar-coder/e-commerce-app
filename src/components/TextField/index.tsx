/* eslint-disable consistent-return */
/* eslint-disable react/require-default-props */
import Image from "next/image";
import React from "react";

function TextField({
  label,
  labelClass = "font-normal cursor-pointer text-lg leading-6  ",
  fieldsetClass = "grid",
  htmlId,
  icon,
  positionIcon,
  handleClickIcon,
  switchOrder = false,
  ...props
}: any) {
  const renderForm = () => {
    if (props?.name) {
      switch (props.type) {
        case "textarea":
          return <textarea id={htmlId} {...props} />;
        default:
          return <input id={htmlId} {...props} />;
      }
    }
  };
  return (
    <fieldset className={`relative   ${fieldsetClass}`}>
      {!switchOrder ? (
        <>
          {label && (
            <label
              htmlFor={htmlId}
              className={`${labelClass} truncate max-w-fit cursor-pointer`}
            >
              {label}
            </label>
          )}
          {icon ? (
            <div
              role="presentation"
              // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
              className={`flex items-center border pr-3 rounded-lg  ${props?.classNameWithIcon} `}
            >
              {positionIcon === "right" ? (
                <>
                  {renderForm()}
                  <span>{icon}</span>
                </>
              ) : (
                <>
                  <span>{icon}</span>
                  {renderForm()}
                </>
              )}
            </div>
          ) : (
            renderForm()
          )}
        </>
      ) : (
        <>
          {renderForm()}
          {label && (
            <label htmlFor={htmlId} className={`${labelClass} `}>
              {label}
            </label>
          )}
        </>
      )}
    </fieldset>
  );
}

export default TextField;
