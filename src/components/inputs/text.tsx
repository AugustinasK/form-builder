import { UseFormRegister } from 'react-hook-form';
import { TextInputProps } from '../../types';
import { forwardRef } from 'react';
import { FormFieldsProps } from '../../App';
import { FormFieldWrapper, FormInput, FormError, FormLabel } from '../styled';

const TextInput = forwardRef<HTMLInputElement, TextInputProps & ReturnType<UseFormRegister<FormFieldsProps>>>(
  ({ onChange, onBlur, name, label, error }, ref) => {
    return (
      <FormFieldWrapper>
        <FormLabel htmlFor={name}>{label}</FormLabel>
        <FormInput type="text" ref={ref} name={name} id={name} onChange={onChange} onBlur={onBlur} />
        {error && <FormError>{error}</FormError>}
      </FormFieldWrapper>
    );
  },
);

TextInput.displayName = 'TextInput';
export { TextInput };
