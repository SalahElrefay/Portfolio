'use client'
import { ArrowUpCircle } from "lucide-react"
import { Button } from "./ui/button"
import { cn } from "@/lib/utils"
import React from "react"


const ScrollToTop = () => {
    const[isOverScreen , setIsOverScreen]=React.useState<boolean>(false);

    React.useEffect(()=>{
        window.addEventListener("scroll", ()=>{
            setIsOverScreen(window.scrollY > 80)
        })
    },[])
    return (
        <Button size="icon" className={cn("fixed bottom-12 md:bottom-8 end-6 md:end-12 transition-transform duration-300 z-[99] ",
        !isOverScreen&&"opacity-0 trans-y-6 pointer-events-none ","")} onClick={()=>window.scrollTo(0,0)} >
            <ArrowUpCircle/>
        </Button>
    )
}

export default ScrollToTop