function Queue(){
    let collection=[]
    this.print=function(){
        return console.log(collection)
    }
    this.enqueue=function(val){
        return collection.push(val)
    }
    this.front=function(){
        return collection[0]
    }
    this.isEmpty=function(){
        return collection.length===0
    }
    this.size=function(){
        return collection.length
    }
    this.dequeue=function()
    {
        return collection.shift()
    }
}
const newQ=new Queue()
newQ.enqueue("Helal Uddin")
newQ.enqueue("Helal Uddin2")
newQ.enqueue("Helal Uddin3")
console.log(newQ.front())
console.log(newQ.isEmpty())
newQ.dequeue()
newQ.print()