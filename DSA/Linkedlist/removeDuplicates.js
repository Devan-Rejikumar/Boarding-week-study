class Node {
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
      curr=curr.next
    }
    curr.next = newNode;
    this.size++
  }
 removeDuplicates(){
   let curr = this.head;
   let prev = null;
   while(curr){
   if(curr.next && curr.data===curr.next.data){
     let value = curr.data;
     while(curr&&curr.data===value){
       curr=curr.next
     }
     if(!prev){
       this.head = curr;
     }else{
       prev.next = curr;
     }
     
   }else{
     prev = curr;
     curr = curr.next
   }
   }
   
 }
  print(){
    let result="";
    let curr = this.head;
    while(curr){
      result+=curr.data+"=>"
      curr=curr.next
    }
    
    console.log(result+"null");
  }
  
}

const s = new SinglyLinkedList();
s.append(1)
s.append(2)
s.append(3)
s.append(3)
s.append(3)
s.append(3)
s.append(3)
s.append(3)
s.removeDuplicates()
s.print();

