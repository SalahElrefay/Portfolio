import { getSkills } from "@/lib/skills";
import { IStatistic } from "@/types/interfaces";

export async function getStatistics(){
    
    const frontendSkills = await getSkills("frontend");
    const backendSkills = await getSkills("backend");
    const tools = await getSkills("tools");

    const totalSkills:number = frontendSkills.length + backendSkills.length + tools.length;

    const statistics: IStatistic[] = [
        {
           label: "Years experience",
           value:new Date().getFullYear() - 2024   
        },
        {
            label:"Completed projects",
            value:totalSkills,
        },
    ];
    return {statistics};
}

