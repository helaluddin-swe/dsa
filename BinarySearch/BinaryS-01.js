const BinarySearch=(searchList,target)=>{
    let collection=[]
    let left=0
    let right=searchList.length-1
    let middle=Math.floor(right/2)
    while(searchList[middle]!==target){
        collection.push(searchList[middle])
        if(right<left){
            return "Target Not Found"
        }
        if(searchList[middle]>target){
            right=middle-1
            middle=left+Math.floor((right-left)/2)
        }
        else{
            left=middle+1
            middle=left+Math.floor((right-left)/2)
        }

    }
    collection.push(searchList[middle])
    return collection

}

const array=[11,22,33,44,55,66,44,55,66,22]
const target=44
const newS=BinarySearch(array,target)
console.log(newS)