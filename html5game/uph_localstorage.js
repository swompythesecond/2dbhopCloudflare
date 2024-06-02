function read_local_storage(item,value){
    let myItem = localStorage.getItem(item);

    // If the "username" key does not exist, set it to "empty"
    if (!myItem) {
    myItem = value
    localStorage.setItem(item,myItem);
    }

    return myItem;

}


function write_local_storage(item,value){
    localStorage.setItem(item,value);
    return value;
}