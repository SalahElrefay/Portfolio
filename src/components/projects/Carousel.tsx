'use client'

import { Suspense, useState } from "react";
import { Loader } from "lucide-react";
import Image from "next/image";
import { Image as sanityImage } from "sanity"

import { urlFor } from "@/sanity/lib/image";

interface IProps{
  images: sanityImage[];
}
 const Carousel  = ({images}:IProps) => {
    const [currentImage , setCurrentImage] = useState<string>(urlFor(images[0]));
    return (
        <div className="space-y-2" >
            <Image src={currentImage} alt="current image" width={320} height={320} className="w-full max-h-[30rem] shadow" />
            <div className="grid grid-cols-4 gap-2" >
                {images.map((image , index) => (
                    <Suspense key={index} fallback={<Loader/>}>
                        <div className="w-full max-h-28 overflow-hidden" >
                            <Image src={urlFor(image)} width={120} height={120} alt="image" className="opacity-60 hover:opacity-100 hover:scale-110 cursor-pointer transition " onClick={()=> {
                                setCurrentImage(urlFor(image));
                            }} />
                        </div>
                    </Suspense>
                ))}
            </div>
        </div>
    )
 }
  export default Carousel