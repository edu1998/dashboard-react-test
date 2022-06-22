import {RouterDataType} from "../resources/types/router-data.type";
import ExampleDashboardPage from "../pages/exaample-dashboard/ExampleDashboardPage";
import ExampleTwoPage from "../pages/ExampleTwoPage/ExampleTwoPage";
import ExampleThirdPage from "../pages/ExampleThirdPage/ExampleThirdPage";
import ExampleFourPage from "../pages/ExampleFourPage/ExampleFourPage";

export const ROUTER_DATA: RouterDataType[] = [
    {
        path: '/',
        title: 'Home',
        rol: ['ADMIN'],
        private: false,
        Element: ExampleTwoPage,
    },
    {
        path: '/dash',
        title: 'Dashboard',
        rol: ['ADMIN'],
        private: false,
        Element: ExampleDashboardPage,
        children: [
            {
                path: 'sales',
                title: 'Sales',
                rol: ['ADMIN'],
                private: false,
                Element: ExampleThirdPage
            },
            {
                path: 'products',
                title: 'Products',
                rol: ['ADMIN'],
                private: false,
                Element: ExampleFourPage
            },

        ]
    }
]
