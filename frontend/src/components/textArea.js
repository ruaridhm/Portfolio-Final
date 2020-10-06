import React, { forwardRef } from 'react';
import './textField.css';

const STYLES = [
  'textField--standard',
  'textField--filled',
  'textField--outline',
];

const SIZES = [
  'textField--small',
  'textField--medium',
  'textField--large',
  'textField--area--medium',
];

const TextField = forwardRef(
  (
    {
      disabled,
      name,
      placeholder,
      required,
      subText,
      textFieldStyle,
      textFieldSize,
      type,
      onChange,
      value,
      rows,
      cols,
    },
    ref
  ) => {
    const checkStyle = STYLES.includes(textFieldStyle)
      ? textFieldStyle
      : STYLES[0];
    const checkSize = SIZES.includes(textFieldSize) ? textFieldSize : SIZES[1];

    return (
      <div className='input-group'>
        <textarea
          className={`input-area ${checkSize} ${checkStyle}`}
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          ref={ref}
          required={required && required}
          rows={rows}
          cols={cols}
        />
        <label
          className='label'
          onClick={() => {
            ref.current.focus();
          }}
        >
          {placeholder}
        </label>
      </div>
    );
  }
);

export default TextField;
