import React from 'react';
import { Provider } from 'react-redux';
import { createGlobalStyle } from 'styled-components';
import store from '../../store';
import Calculator from '../../containers/Calculator';

const GlobalStyle = createGlobalStyle`
    body, html {
        margin: 0;
        padding: 0;
    }

    body {
        background: #F0E68C;
    }

    #root {
        display: flex;
        justify-content: center;
    }
`;

const App = () => (
    <Provider store={store}>
        <GlobalStyle />
        <Calculator />
    </Provider>
);

export default App;