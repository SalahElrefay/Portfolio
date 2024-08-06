import { client } from "@/sanity/lib/client"
import { ISkill, SkillCategory } from "@/types/interfaces";


export async function getSkills(category:SkillCategory){
    const query = `*[_type=="skills" && category=="${category}" ]{
       _id,label,value,category
   }[]`;

     const data = await client.fetch(query);
     return data as ISkill[];
}