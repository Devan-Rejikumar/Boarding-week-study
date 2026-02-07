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


isPalindrome(){
    let fast = this.head;
    let slow = this.head;
    while(fast && fast.next){
        fast = fast.next.next;
        slow = slow.next;
    }
    
    let secondHalf = this.reverse(slow)
    let firstHalf = this.head;
    while(secondHalf){
        if(firstHalf.data !== secondHalf.data){
            return false
        }
        firstHalf = firstHalf.next;
        secondHalf = secondHalf.next;
    }
    return true;
    
}

reverse(head){
    let curr = head;
    let prev = null;
    while(curr){
        let next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next
    }
    return prev
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

s.append(1)
s.append(2)
s.append(3)
s.append(4)
s.append(5)
s.append(2)
s.append(3)
s.append(2)
s.append(1)
s.reverse()
s.print()
console.log(s.isPalindrome())

