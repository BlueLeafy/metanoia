import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./sections/Root";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
    }
])

function App() {
    return (
        <div>
            <RouterProvider router={router} />
        </div>
    );
};

export default App;