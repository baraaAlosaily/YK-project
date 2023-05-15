export default interface IPost{
     post:Post;
}

interface Post{
    id:string;
    client:string;
    sector:string[];
    solution:string[];
    smImage:string;
}