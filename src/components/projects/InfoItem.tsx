import { LucideIcon } from "lucide-react"

interface IProps{
   icon:LucideIcon;
   label: string;
   children:React.ReactNode;
}
 const InfoItem = ({icon:Icon , label , children}: IProps) => {
    return (
        <div className="grid grid-cols-3 items-start gap-2 text-sm capitalize" >
            <div className="flex items-center gap-2" >
                <Icon className="size-5" />
                <span>{label}</span>
            </div>
            <div className="col-span-2 text-foreground" >{children}</div>
        </div>
    )
 }
  export default InfoItem