import { SidebarActionsType } from "../resources/types/SidebarActions.type";
import {TbClipboardText, TbLayoutGrid} from "react-icons/tb";
import {IoCubeOutline} from "react-icons/io5";
import {FiMessageCircle} from "react-icons/fi";

export const ACTIONS_LIST: SidebarActionsType[] = [
    {
        Icon: TbLayoutGrid,
        active: true
    },
    {
        Icon: TbClipboardText
    },
    {
        Icon: IoCubeOutline
    },
    {
        Icon: FiMessageCircle
    }
]
