class Node {
    constructor(data){
        this.data = data
        this.next = null;
    }
}

class LinkedList {
    constructor(){
        this.head = null;
        this.size = 0;
    }
    append(data){
        const newNode = new Node(data);
        if(!this.head){
            this.head = newNode;
            this.size++;
            return;
        }
        let curr = this.head;
        while(curr.next){
            curr = curr.next;
        }
        curr.next = newNode;
        this.size++;
    }
    prepend(data){
        const newNode = new Node(data);
        if(!this.head){
            this.head = newNode;
            this.size++;
            return;
        }
        newNode.next = this.head;
        this.head = newNode;
        this.size++;
    }
    search(value){
        if(this.isEmpty()) return console.log("list is empyt")
        
        if(this.head.value === value) return true;
        
        let curr = this.head;
        
        while(curr.next){
            if(curr.value === value){
                return true
            }
            curr = curr.next;
        }
        
        return false
    }
    insertAtIndex(index,value){
        if(index > this.size || index < 0){
            return console.log('Enter a valid index')
        }
        if(index===0){
            this.prepend(value)
        }
        else {
            let curr = this.head;
            for(let i = 0 ;i< index-1; i++){
                curr=curr.next;
            }
            let newNode = new Node(value);
            newNode.next = curr.next
            curr.next = newNode
            this.size++
        }
        
    }

    deleteAtPos(index) {
        if(index > this.size || index < 0){
            return console.log('Enter a valid index')
        }
        if(index === 0) this.head = this.head.next;
        else{
            let curr = this.head;
            for(let i = 0 ;i< index-1; i++){
                curr = curr.next
            }
            curr.next = curr.next.next
        }
        this.size--;

    }
    print(){
        let curr = this.head;
        let result = '';
        while(curr){
            result+=curr.data+'=>';
            curr = curr.next;
        }
        console.log(result+'null')
    }

    reverse(){
        let curr = this.head;
        let prev = null;
        while(curr){
            let next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }
        this.head = prev
    }

    findMiddle(){
        let slow = this.head;
        let fast = this.head;
        while(fast && fast.next){
            slow = slow.next;
            fast = fast.next.next;
        }
        return slow.data
    }
    deleteMiddle(){
        let prev = null;
        let slow = this.head;
        let fast = this.head;
        while(fast && fast.next){
            prev = slow;
            slow = slow.next;
            fast = fast.next.next;
        }
        prev.next = slow.next
        this.size--;
    }
    removeDuplicatesSorted(){
        let curr = this.head;
        while(curr.next){
            if(curr.data === curr.next.data){
                curr.next = curr.next.next
                this.size--
            }else{
                curr=curr.next
            }
        }
    }
    removeDuplicatesUnsorted(){
        let curr = this.head;
        const set = new Set();
        set.add(curr.data);


        while(curr.next){
            if(set.has(curr.next.data)){
                curr.next = curr.next.next;
                this.size--;
            }else{
                set.add(curr.next.data);
                curr = curr.next;
            }
        }
    }
    swapFirstAndLast(){
        let curr = this.head;
        let prev = null;
        let first = this.head;

        while(curr.next){
            prev = curr;
            curr = curr.next;
        }
        
        if (first.next === curr) {
        curr.next = first;
        first.next = null;
        this.head = curr;
        return;
    }
        curr.next = first.next;
        prev.next = first;
        first.next = null;
        
        this.head=curr
    }
    findMiddle(head){
        let slow =  head;
        let fast = head;
        while(fast.next && fast.next.next){
            slow = slow.next;
            fast = fast.next.next;
        }
        return slow
    }
    
    mergeSort(head){
        if(!head.next) return head
        let middle = this.findMiddle(head);
        let nextMiddle = middle.next;
        middle.next = null;
        let left = this.mergeSort(head);
        let right = this.mergeSort(nextMiddle);
        return this.merge(left,right)
    }
    merge(left,right){
        if(!right) return left
        if(!left) return right
        
        if(left.data < right.data){
            left.next = this.merge(left.next,right)
            return left
        }else{
            right.next = this.merge(right.next,left)
            return right
        }
    }
    sort(){
        this.head = this.mergeSort(this.head)

    }
    
    isEmpty(){
        return this.head === null
    }
}
const list = new LinkedList();
list.append(1);
list.append(2);
list.append(22);
list.append(2);
list.append(22);
list.append(4);
list.append(1);
list.append(6);
// list.prepend(201);
// list.insertAtIndex(1,76);
// list.deleteAtPos(2);
// list.print();
// console.log(list.search(101))
// list.reverse()
// list.print();
// console.log(list.findMiddle())
// list.deleteMiddle();
// list.removeDuplicatesSorted();
// list.removeDuplicatesUnsorted()
list.swapFirstAndLast()
list.print();
