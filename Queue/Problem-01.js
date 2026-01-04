function Queue(){
    let collection=[]
    this.print=function(){
        return console.log(collection)
    }
    this.enqueue=function(val){
        return collection.push(val)
    }
}
const newQ=new Queue()
newQ.enqueue("Helal Uddin")
newQ.print()