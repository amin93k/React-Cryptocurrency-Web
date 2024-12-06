
import {HomePage, Cryptocurrencies, News, Exchange, CryptoDetails} from "./components";

const routes = [
    {
        path: "/",
        element: <HomePage />
    },
    {
        path: "/cryptocurrencies",
        element: <Cryptocurrencies />,
    },
    {
        path: "/exchanges",
        element: <Exchange />,
    },
    {
        path: "/crypto/:coinName",
        element: <CryptoDetails />,
    },
    {
        path: "/news",
        element: <News />,
    },
]

export default routes