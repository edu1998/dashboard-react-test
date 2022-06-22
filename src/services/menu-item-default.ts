import {BsHouseDoorFill} from "react-icons/bs";
import {IoIosRocket} from "react-icons/io";

export const MENU_ITEMS_DEFAULT = [
    {
        key: '1',
        label: 'Mis Productos',
        icon: BsHouseDoorFill,
        path: '/'
    },
    // {
    //     key: '2',
    //     label: 'Maestros',
    //     icon: IoIosRocket,
    // },
    // {
    //     key: '3',
    //     label: 'Ingreso Paquetes',
    //     icon: IoIosRocket,
    // },
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
                path: '/dash/sales'
            },
            {
                key: '4.2',
                label: 'Posibilidad de en dos lineas',
                icon: IoIosRocket,
                path: '/'
            },
            // {
            //     key: '4.3',
            //     label: 'Posibilidad de en dos lineas',
            //     icon: IoIosRocket,
            // }
        ]
    },
    // {
    //     key: '5',
    //     label: 'Control de Repartos',
    //     icon: IoIosRocket,
    // },
    // {
    //     key: '6',
    //     label: 'Servicio de usuarios',
    //     icon: IoIosRocket,
    // }
]
