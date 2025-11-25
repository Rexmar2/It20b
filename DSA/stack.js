class Stack{
    constructor(){
        this.data ={};
        this.topIndex = -1;
    }
    push(element){
        this.topIndex++;
        this.data[this.topindex] = element;
    }
    traverse(){
        let output = "";

        for(let i=0; i<=this.topIndex; i++){
            output += this.data[i] + " ";
    
        }
        console.log(output);
    }
    is_empty(){
        return this.topIndex ===-1;
    }
    size(){
        return this.topIndex+1;
    }
    peek(){
        //Correcting Statement 
        if(this.is_empty()) return null;
        return this.data[this.topIndex];
    }
    pop(){
        if(this.is_empty()) return null;
         let value = this.data[this.topIndex];
         delete this.data[this.topIndex];
         this.topIndex--;
         return value;
    }
}

stack1 = new Stack();

console.log(stack1.is_empty());
stack1.push(4);
stack1.push(2)
stack1.push(3);
stack1.push(5);
stack1.push(8);
console.log(stack1.is_empty());
console.log(stack.size());
console.log("The top element is "+stack1.peek());
console.log("The top element is "+stack1.pop() +" is popped, the new top element is"());
stack1.traverse();
console.log("The new stack size is "+stack1.size());

