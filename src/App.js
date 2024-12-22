import "./App.css";
import Head from "./components/Head";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import WatchPage from "./components/WatchPage";
import VideoContainer from "./components/VideoContainer";

function App() {
    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: (
                <div className="scrollbar-hide overflow-y-auto h-screen">
                    <Head />
                    <Body />
                </div>
            ),
            children: [
                {
                    path: "/",
                    element: <VideoContainer />,
                },
                {
                    path: "watch",
                    element: <WatchPage />,
                },
            ],
        },
    ]);
    return (
        <RouterProvider router={appRouter} />

        // <div className="scrollbar-hide overflow-y-auto h-screen">
        //     <Head />
        //     <Body />
        // </div>
    );
}

export default App;
