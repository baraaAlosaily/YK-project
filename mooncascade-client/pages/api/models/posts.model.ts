export interface IPosts{
    id:string;
    client:string;
    mainImage:string;
    generalDesc:string;
    solution:string[];
    sector:string[];
    deliverables:string[];
    desc1?:string
    desc2?:string;
    ques1:string;
    ans1:string;
    ques2:string;
    ans2:string;
    media1:string;
    media2:string;
    media3:string;
    quoteTalker:string;
    externalLink:string;
    solutionDesc:string;
    quote:string;
}

export interface IPost{
    id:string;
    client:string;
    sector:string[];
    solution:string[];
    smImage:string;
    link:string;
}