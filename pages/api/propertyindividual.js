import * as fs from 'fs';



export default async function handler(req,res){

    fs.readFile('datafiles/property.json','utf-8',(err,data)=>{
        if(err) res.status(500).json({error:"Easy"});
        else res.status(200).json(JSON.parse(data))
    })
}