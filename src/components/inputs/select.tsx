import { UseFormRegister } from 'react-hook-form';
import { SelectInputProps } from '../../types';
import { forwardRef } from 'react';
import { FormError, FormFieldWrapper, FormLabel, FormSelectInput, FormSelectOption } from '../styled';
import { FormFieldsProps } from '../../App';

const SelectInput = forwardRef<HTMLSelectElement, SelectInputProps & ReturnType<UseFormRegister<FormFieldsProps>>>(
  ({ onChange, onBlur, name, label, error, options }, ref) => {
    return (
      <FormFieldWrapper>
        <FormLabel htmlFor={name}>{label}</FormLabel>
        <FormSelectInput name={name} id={name} ref={ref} onChange={onChange} onBlur={onBlur} title={label}>
          {options.map((option) => (
            <FormSelectOption key={option.value} value={option.value}>
              {option.label}
            </FormSelectOption>
          ))}
        </FormSelectInput>
        {error && <FormError>{error}</FormError>}
      </FormFieldWrapper>
    );
  },
);

SelectInput.displayName = 'SelectInput';
export { SelectInput };
