var names=[];
function Submit()
{
var inp= document.getElementById("name_input").value;
names.push(inp);
document.getElementById("unsorted_list-1").innerHTML=names;
}

function Show()
{
 var display =names.join("<br>");
 document.getElementById("ul_NS").innerHTML=display;
}

function Sorting()
{
    var sorter= names.sort();
    document.getElementById("ul_S").innerHTML=sorter;
}