import { ITabItems } from "@/types/interfaces";
import { AppWindow, PencilRuler, TerminalSquare } from "lucide-react";


export const tabItems:ITabItems[] = [
    {
        value:"frontend",
        icon: AppWindow,
        label: "frontend",
    },
    {
        value: "backend",
        icon: TerminalSquare,
        label: "backend",
    },
    {
        value: "tools",
        icon: PencilRuler,
        label: "tools",
    }

]