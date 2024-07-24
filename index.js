function getAndUpdate(){
    tit=document.getElementById('title').value;
    desc=document.getElementById('description').value;
    console.log("updating...");
    if(localStorage.getItem("itemsJson")==null){
        
        itemsJsonArray=[];
        itemsJsonArray.push([tit,desc]);
        localStorage.setItem('itemsJson',JSON.stringify(itemsJsonArray));
    }
    else{
        itemsJsonArrayStr=localStorage.getItem('itemsJson');
        itemsJsonArray=JSON.parse(itemsJsonArrayStr);
        itemsJsonArray.push([tit,desc]);
        localStorage.setItem('itemsJson',JSON.stringify(itemsJsonArray));
    }
    update();
}
function update(){
    if(localStorage.getItem("itemsJson")==null){
        
        itemsJsonArray=[];
       
        localStorage.setItem('itemsJson',JSON.stringify(itemsJsonArray));
    }
    else{
        itemsJsonArrayStr=localStorage.getItem('itemsJson');
        itemsJsonArray=JSON.parse(itemsJsonArrayStr);
    }
    
   
    let tableBody=document.getElementById("tableBody");
   
    let str="";
     itemsJsonArray.forEach((element,index) => {
       str += `
            <tr>
            <th scope="row">${index + 1}</th>
            <td>${element[0]}</td>
            <td>${element[1]}</td>
            <td><button class="btn btn-sm btn-prmary" onclick="deleted(${index})">Delete</button></td>
            </tr>       
        `;
        });
        tableBody.innerHTML=str;

}
add=document.getElementById("add");
add.addEventListener('click',getAndUpdate);
update();
function deleted(item){
    console.log("delete",item);
    itemsJsonArrayStr=localStorage.getItem('itemsJson');
    itemsJsonArray=JSON.parse(itemsJsonArrayStr);
    itemsJsonArray.splice(item,1);


    localStorage.setItem('itemsJson',JSON.stringify(itemsJsonArray));
    update();
}
function clearStorage(){
    if(confirm("Do you really want to clear?")){
    console.log('clearing...')
    localStorage.clear();
    update();}
}