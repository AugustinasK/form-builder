import { useForm, SubmitHandler } from 'react-hook-form';
import { useState } from 'react';
import { SelectInput } from '../inputs/select';
import { TextInput } from '../inputs/text';
import { FormWrapper, SubmitButton } from '../../styled';
import { InputProps, InputTypes } from '../../../types';
import { stringToCharArray } from '../../../utils';
import { SelectOptions } from './select-options';
import { NumberOptions } from './number-options';
import styled from 'styled-components';

const AddFieldWrapper = styled.aside`
  padding: 20px;
  min-width: 300px;
`;

export interface AddFieldFormProps {
  type: InputTypes.TEXT | InputTypes.NUMBER | InputTypes.CHECKBOX | InputTypes.SELECT;
  name: string;
  min?: number;
  max?: number;
  options?: {
    [key: string]: string;
  };
}

interface AddFieldProps {
  onAdd: (field: InputProps) => void;
  fieldNames: string[];
}

export const AddField = ({ onAdd, fieldNames }: AddFieldProps) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    getValues,
  } = useForm<AddFieldFormProps>({
    mode: 'onSubmit',
  });

  const [inputType, setInputType] = useState<InputTypes>(getValues('type'));

  const onSubmit: SubmitHandler<AddFieldFormProps> = ({ name, type, min, max, options }) => {
    const inputName = stringToCharArray(name);

    if (type === InputTypes.TEXT || type === InputTypes.CHECKBOX) {
      onAdd({
        type: type,
        name: inputName,
        label: name,
      });
    } else if (type === InputTypes.NUMBER) {
      onAdd({
        type: type,
        name: inputName,
        label: name,
        min: min,
        max: max,
      });
    } else if (type === InputTypes.SELECT && options) {
      onAdd({
        type: type,
        name: inputName,
        label: name,
        options: Object.values(options).map((option) => ({
          value: stringToCharArray(option),
          label: option,
        })),
      });
    }

    reset();
    setInputType(getValues('type'));
  };

  // check if this input name is already used
  const validateInputName = (value: string) =>
    fieldNames.includes(stringToCharArray(value)) ? 'Input name already exists' : true;

  const handleInputTypeChange = () => {
    setInputType(getValues('type'));
  };

  return (
    <AddFieldWrapper>
      <h4>Add new form field</h4>
      <FormWrapper onSubmit={handleSubmit(onSubmit)}>
        <SelectInput
          type={InputTypes.SELECT}
          {...register('type', { required: true, onChange: handleInputTypeChange })}
          label="Input type"
          options={[
            { value: 'text', label: 'Text' },
            { value: 'number', label: 'Number' },
            { value: 'checkbox', label: 'Checkbox' },
            { value: 'select', label: 'Select' },
          ]}
        />
        <TextInput
          type={InputTypes.TEXT}
          {...register('name', {
            required: "Input name can't be empty",
            validate: validateInputName,
          })}
          label="Input name"
          error={errors.name?.message}
        />

        {/* Dynamic fields for specific input types */}
        {inputType === InputTypes.NUMBER && <NumberOptions register={register} />}
        {inputType === InputTypes.SELECT && <SelectOptions register={register} errors={errors} />}

        <SubmitButton type="submit" value="Add" />
      </FormWrapper>
    </AddFieldWrapper>
  );
};
