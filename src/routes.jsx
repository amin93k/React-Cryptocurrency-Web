
import {HomePage, Cryptocurrencies, News, Exchange, CryptoDetails} from "./components";

const routes = [
    {
        path: "/",
        elements: <HomePage />
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
        path: "/crypto/:coinId",
        element: <CryptoDetails />,
    },
    {
        path: "/news",
        element: <News />,
    },
]

export default routes