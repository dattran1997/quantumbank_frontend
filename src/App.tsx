import { useRoutes, } from 'react-router-dom';
import routes from './routes';
import styled from '@emotion/styled';
import { ToastContainer } from 'react-toastify';

function App() {
    const routeRender = useRoutes(routes);

    return (
        <AppWrapper>
            {routeRender}
            <ToastContainer stacked />
        </AppWrapper>
    )
}

export default App;

const AppWrapper = styled.div`
    margin: 0px;
`;
