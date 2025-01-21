import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { CheckboxInputProps, InputProps, NumberInputProps, SelectInputProps, TextInputProps } from '../../../types';
import { FormWrapper, RemoveFieldButton, RowWrapper, SubmitButton } from '../../styled';
import { FormFieldsProps } from '../index';
import { TextInput } from '../inputs/text';
import { NumberInput } from '../inputs/number';
import { CheckboxInput } from '../inputs/checkbox';
import { SelectInput } from '../inputs/select';
import { MainFormWrapper } from './styled';

interface MainFormProps {
  fields: InputProps[];
  errors: FieldErrors<FormFieldsProps>;
  register: UseFormRegister<FormFieldsProps>;
  onSubmit: () => void;
  onRemove: (index: number) => void;
}

type RegisteredInput = ReturnType<UseFormRegister<FormFieldsProps>>;

export const MainForm = ({ fields, register, errors, onSubmit, onRemove }: MainFormProps) => {
  const InputComponentMap = (props: InputProps) => {
    const { type, name, label } = props;
    const commonProps = { ...props, error: errors[name]?.message };
    const fieldProps = { ...commonProps, ...register(name, { required: false }) };
    const requiredFieldProps = { ...commonProps, ...register(name, { required: `${label} field can't be empty` }) };
    const inputComponent = {
      text: <TextInput {...(requiredFieldProps as TextInputProps & RegisteredInput)} />,
      number: <NumberInput {...(requiredFieldProps as NumberInputProps & RegisteredInput)} />,
      checkbox: <CheckboxInput {...(fieldProps as CheckboxInputProps & RegisteredInput)} />,
      select: <SelectInput {...(requiredFieldProps as SelectInputProps & RegisteredInput)} />,
    };

    return inputComponent[type] || <>No component found for {type}</>;
  };

  const handleRemoveFormField = (index: number) => {
    onRemove(index);
  };

  return (
    <MainFormWrapper>
      <h2>Main form</h2>
      <FormWrapper onSubmit={onSubmit}>
        {fields.map((field, index) => (
          <RowWrapper key={index}>
            <InputComponentMap {...field} />
            <RemoveFieldButton type="button" onClick={() => handleRemoveFormField(index)}>
              🗑️
            </RemoveFieldButton>
          </RowWrapper>
        ))}
        <SubmitButton type="submit" value="Submit" />
      </FormWrapper>
    </MainFormWrapper>
  );
};
