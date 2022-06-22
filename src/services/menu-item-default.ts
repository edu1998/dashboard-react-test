import {BsHouseDoorFill} from "react-icons/bs";
import {IoIosRocket} from "react-icons/io";

export const MENU_ITEMS_DEFAULT = [
    {
        key: '1',
        label: 'Mis Productos',
        icon: BsHouseDoorFill,
        path: '/'
    },
    {
        key: '4',
        label: 'Gestion De Repartos',
        icon: IoIosRocket,
        path: '/dash',
        children: [
            {
                key: '4.1',
                label: 'Posibilidad de en dos lineas',
                icon: IoIosRocket,
                path: '/dash/products'
            },
            {
                key: '4.2',
                label: 'Posibilidad de en dos lineas',
                icon: IoIosRocket,
                path: '/dash/sales'
            },
        ]
    },
]
