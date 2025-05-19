let arr = [];

let res = prompt("Enter your request");

while(true){
    if(res == "quit"){
        console.log("quitting out");
        break;
    }

    if(res == "list"){
        console.log("------------");
        for(let i=0;i<arr.length;i++){
            console.log(i,arr[i]);
        }
        console.log("------------");
    }
    else if(res == "add"){
        let task = prompt("Enter the task you want to add");
        arr.push(task);
        console.log("Task added");
    }
    else if(res == "delete"){
       let idx = prompt("Please enter the task index");
       arr.splice(idx,1);
       console.log("task deleted");

    }
    else{
        console.log("Enter the valid operation");
    }
    res = prompt("Enter your request");
}