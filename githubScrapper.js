const request=require("request");
const jsdom=require("jsdom");
const fs=require("fs");

const { JSDOM }=jsdom;


const link="https://github.com/topics";

request(link,cb);

function cb(error,response,html)
{
    if(error)
    {
        console.log(error);
    }
    else
    {
        const dom=new JSDOM(html);
        const document=dom.window.document;
        let threetab=document.querySelectorAll(".no-underline.d-flex.flex-column.flex-justify-center");
       // console.log(threetab.length);
       for(let i=0;i<threetab.length;i++)
       {
           const tablinks=link+threetab[i].href;
           //console.log(tablinks);
           request(tablinks,cb2);
       }
        
    }
}

function cb2(error,response,html)
{
    if(error)
    {
        console.log(error);
    }

    else
    {
        const dom=new JSDOM(html);
        const document=dom.window.document;
        let inside_tab=document.querySelectorAll(".text-bold.wb-break-word");
        for(let i=0;i<=8;i++)
        {
            let folderLinks=inside_tab[i].href;
            console.log(folderLinks);
            // let folderName=folderLinks.textContent;
            // if(!fs.existsSync("folderName"))
            // {
            //     fs.mkdirSync("folderName");
            // }
           
        }
        

    }
}