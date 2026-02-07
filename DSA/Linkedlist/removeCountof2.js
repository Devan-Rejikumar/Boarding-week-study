class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.size = 0
    }
    append(data){
        let newNode = new Node(data);
        if(!this.head){
            this.head = newNode;
            this.size++;
            return
        }
        let curr = this.head;
        while(curr.next){
            curr = curr.next
        }
        curr.next = newNode;
        this.size++
    }
deleteNodes(){
    let target = new Set();
    for(let i = 1; i< this.size; i*=2){
        target.add(i)
    }
    let dummy = new Node(null);
    dummy.next = this.head;
    let prev = dummy;
    let curr = this.head;
    let index = 0;
    while(curr){
        if(target.has(index)){
            prev.next = curr.next;
            curr = prev.next
        }else{
            prev = curr;
            curr = curr.next
        }
        index++
    }
}
    print(){
        let result = '';
        let curr = this.head;
        while(curr){
            result+=curr.data+'=>'
            curr=curr.next
        }
        console.log(result+'null')
    }
}

const s = new SinglyLinkedList()

for(let i = 0 ;i<17; i++){
    s.append(i)
}

s.print()
s.deleteNodes()
s.print()