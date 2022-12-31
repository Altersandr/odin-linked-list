class Node {
    constructor(value = null, nextNode = null){
        this.value = value;
        this.nextNode = nextNode;
    }
};

class LinkedList {
    constructor(){
        this.head = null;
    }

    append(value){
        let current = this.head;
        
        while(current){
            current = current.nextNode;
            if(current.nextNode==null){
                current.nextNode = new Node(value);
                return
            }
        }
    }

    prepend(value){
        this.head = new Node(value, this.head);
    }

    getHead(){
        return console.log(this.head)
    }

    getTail(){
        let current = this.head;
        
        while(current){
            current=current.nextNode;
            if(current.nextNode ==null){
                return console.log(current)
            }
        }
    }

    getNodeAt(value){
        let index = 0;
        let current = this.head;
        
        while(current && value > index){
            index++
            current = current.nextNode;
        }
        return console.log(current)
    }

    getSize(){
        let current = this.head;
        let size = 0;
        
        while(current){
            size++
            current = current.nextNode;
        }
        return console.log(size)
    }
    
    pop(){
        let current = this.head;
        
        while(current){
            if(current.nextNode.nextNode ==null){
                current.nextNode = null;
                return `The last item was removed from the list`
            }else{
            current = current.nextNode;
            }
        }
    }

    contains(value){
        let current = this.head;
        
        while(current){
            if(current.value==value){
                return true
            }else{
            current = current.nextNode;
            }
        }return false
    }

    find(value){
        let index = 0;
        let current = this.head;
        
        while(current){
            if(current.value==value){
                return `The ${value} is at index ${index}`
            }else{
            current = current.nextNode;
            index++
            }
        }
    }

    toString(){
        let current = this.head;
        
        while(current){
            console.log(current)
            current = current.nextNode;
        }
    }

    insertAt(value, index){
        let indexCount = 0;
        let current = this.head;
        let previous;
        
        while(current){
            if(indexCount === index){
            previous.nextNode = new Node(value, previous.nextNode);
            return `Item inserted at index ${index}`
            }else{
            indexCount++
            previous = current;
            current = current.nextNode;
            }
        }
   
    }

    removeAt(index){
        let indexCount = 0;
        let current = this.head;
        let previous;

        while(current){
            if(indexCount === index){
            previous.nextNode = current.nextNode;
            return `Item removed at index ${index}`
            }else{
            indexCount++
            previous = current;
            current = current.nextNode;
            }
        }
    }
};

const ll = new LinkedList();

ll.prepend(10);
ll.prepend(20);
ll.prepend(30);
ll.prepend(40);
ll.prepend(50);
ll.append(1);
ll.append(5);