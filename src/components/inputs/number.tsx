import { forwardRef } from 'react';
import { UseFormRegister } from 'react-hook-form';
import { NumberInputProps } from '../../types';
import { FormFieldWrapper, FormInput, FormError, FormLabel } from '../styled';
import { FormFieldsProps } from '../../App';

const NumberInput = forwardRef<HTMLInputElement, NumberInputProps & ReturnType<UseFormRegister<FormFieldsProps>>>(
  ({ onChange, onBlur, name, label, min, max, error }, ref) => {
    return (
      <FormFieldWrapper>
        <FormLabel htmlFor={name}>{label}</FormLabel>
        <FormInput
          type="number"
          ref={ref}
          name={name}
          id={name}
          min={min}
          max={max}
          onChange={onChange}
          onBlur={onBlur}
        />
        {error && <FormError>{error}</FormError>}
      </FormFieldWrapper>
    );
  },
);

NumberInput.displayName = 'NumberInput';
export { NumberInput };
