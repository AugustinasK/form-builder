import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyle } from './styles/global';
import { ViewWrapper, WidthWrapper } from './components/styled';
import { Form } from './components/form';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <WidthWrapper>
        <ViewWrapper>
          <Form />
        </ViewWrapper>
      </WidthWrapper>
    </ThemeProvider>
  );
};

export default App;
