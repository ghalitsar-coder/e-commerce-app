/* eslint-disable react/require-default-props */
import React from 'react';

function DebounceTextInput({
  onChange,
  debounce = 500,
  value: initialValue,
  ...props
}) {
  const [value, setValue] = React.useState(initialValue);

  React.useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      onChange(value);
    }, debounce);

    return () => clearTimeout(timeout);
  }, [debounce, onChange, value]);

  return (
    <input
      {...props}
      value={value}
      onChange={(e) => {
        e.stopPropagation();
        setValue(e.target.value);
      }}
    />
  );
}

export default DebounceTextInput;
