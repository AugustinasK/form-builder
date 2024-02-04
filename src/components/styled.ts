import styled from 'styled-components';

export const WidthWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: ${(props) => props.theme.responsive.md};
  margin: 0 auto;
`;

export const ViewWrapper = styled.main`
  display: flex;
  flex-wrap: wrap;
  @media (max-width: ${(props) => props.theme.responsive.md}) {
    flex-direction: column;
  }
`;

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
`;

export const FormFieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  flex-grow: 1;
`;

export const FormLabel = styled.label`
  margin-bottom: 5px;
  flex-grow: 1;
`;

export const FormInput = styled.input`
  padding: 10px;
  border: none;
  background-color: ${(props) => props.theme.colors.form.input.background};
  border-radius: 10px;
  :focus-visible {
    outline: 2px solid ${(props) => props.theme.colors.button.primary};
  }
`;

export const FormSelectInput = styled.select`
  padding: 10px;
  flex-grow: 1;
  border: none;
  background-color: ${(props) => props.theme.colors.form.input.background};
  border-radius: 10px;
  :focus-visible {
    outline: 2px solid ${(props) => props.theme.colors.button.primary};
  }
`;

export const FormSelectOption = styled.option`
  padding: 10px;
`;

export const FormError = styled.label`
  color: ${(props) => props.theme.colors.form.error};
  font-size: 14px;
  margin-top: 5px;
`;

export const RowWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const SubmitButton = styled.input`
  padding: 10px;
  border: none;
  background-color: ${(props) => props.theme.colors.button.primary};
  color: white;
  border-radius: 10px;
  cursor: pointer;
  font-size: 18px;
`;

export const SecondaryButton = styled.button`
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid ${(props) => props.theme.colors.button.primary};
  background-color: transparent;
  color: ${(props) => props.theme.colors.button.primary};
  border-radius: 10px;
  cursor: pointer;
`;

export const RemoveFieldButton = styled.button`
  margin-left: 10px;
  padding: 0;
  width: 24px;
  height: 24px;
  border: none;
  background-color: 1px solid ${(props) => props.theme.colors.form.removeField};
  color: ${(props) => props.theme.colors.button.primary};
  border-radius: 50%;
  font-size: 10px;
  cursor: pointer;
`;
