import Image from "next/image";


interface IProps{
  imageUrl: string;
  title: string;
}
 const ProjectCard = ({imageUrl , title}: IProps) => {
    return (
        <article className="relative group rounded-md shadow cursor-pointer overflow-hidden" >
            <figure className="absolute size-full top-0 left-0 bg-gradient-to-t from-background/70 to-transparent"/> 
                <Image src={imageUrl} alt={title} width={220} height={220} className="size-full rounded-sm group-hover:scale-105 transition" />
                <h3 className="absolute bottom-2 start-2 text-2 text-forground group-hover:text-primary capitalize truncate" >{title}</h3>
        
        </article>
    )
 }
  export default ProjectCard