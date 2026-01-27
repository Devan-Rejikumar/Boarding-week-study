class Node{
  constructor(data){
    this.data = data;
    this.next = null
  }
}
class SinglyLinkedList{
  constructor(){
      this.head = null;
      this.size = 0;
  }
  
  isEmpty(){
    return this.head === null
  }
    append(data){
      let newNode = new Node(data);
      if(!this.head){
        this.head = newNode;
        this.size++
        return
      }
      let curr = this.head;
      while(curr.next){
        curr = curr.next
      }
      curr.next = newNode
      this.size++;
    }
    print(){
      if(this.isEmpty()) return console.log('The list is empty')
      let result = ''
      let curr = this.head;
      while(curr){
        result+=curr.data+'=>'
        curr=curr.next;
      }
      console.log(result+'null')
    }
    
    lastNElement(n){
      let fast = this.head;
      let slow = this.head;
      let prev;
      for(let i = 0 ;i<n-1;i++){
        fast = fast.next
      }
      while(fast.next){
        prev = slow;
        fast = fast.next;
        slow = slow.next
      }
      prev.next = slow.next
      
    }
    
  }


const s = new SinglyLinkedList()
s.append(10)
s.append(20)
s.append(30)
s.append(40)
s.append(50)
s.lastNElement(4)
s.print()
