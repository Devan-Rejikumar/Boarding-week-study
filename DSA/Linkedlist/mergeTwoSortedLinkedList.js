class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.size = 0;
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
    mergeList(s2){
        let curr = this.head;
        while(curr.next){
            curr = curr.next;
        }
        curr.next = s2
        while(curr.next){
            curr = curr.next
        }
    }
    
    mergeSort(head = this.head){
        if(!head || !head.next) return head;
        let fast = head;
        let slow = head;
        let prev = null;
        while(fast && fast.next){
            prev = slow
            fast = fast.next.next;
            slow = slow.next
        }
        prev.next = null;
        let left = this.mergeSort(head);
        let right = this.mergeSort(slow);
        return this.merge(left,right)
    }
    merge(left,right){
        if(!left) return right
        if(!right) return left;
        
            if(left.data < right.data){
                left.next = this.merge(left.next,right)
                return left
            }else{
                right.next = this.merge(right.next,left)
                return right
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
const s1 = new SinglyLinkedList();
const s2 = new SinglyLinkedList();
s1.append(10);
s1.append(20);
s1.append(40);
s2.append(60);
s2.append(90);
s2.append(34);
s1.mergeList(s2.head)
s1.print()
s1.head = s1.mergeSort();
s1.print()