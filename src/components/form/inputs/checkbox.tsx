import { forwardRef } from 'react';
import { UseFormRegister } from 'react-hook-form';
import { CheckboxInputProps } from '../../../types';
import { FormFieldWrapper, FormInput, FormError, RowWrapper, FormLabel } from '../../styled';
import { FormFieldsProps } from '../index';

const CheckboxInput = forwardRef<HTMLInputElement, CheckboxInputProps & ReturnType<UseFormRegister<FormFieldsProps>>>(
  ({ onChange, onBlur, name, label, error }, ref) => {
    return (
      <FormFieldWrapper>
        <RowWrapper>
          <FormLabel htmlFor={name}>{label}</FormLabel>
          <FormInput type="checkbox" ref={ref} name={name} id={name} onChange={onChange} onBlur={onBlur} />
        </RowWrapper>
        {error && <FormError>{error}</FormError>}
      </FormFieldWrapper>
    );
  },
);

CheckboxInput.displayName = 'CheckboxInput';
export { CheckboxInput };
