const linkedList = require('@bkcheung/linked-list');

let buckets = 16;
let map = hashMap();
map.set('hello','all');
map.set('hi','ya');
map.set('hello','all');
map.set('hello','world');
map.set('hdlmo','yall'); //same hashkey as hello
console.log(map.get('heleee'));

// console.log(map.hash_map[map.hash('hello')].head);

function hashMap(){
    return {
        hash_map: [],
        hash(key){
            let hashCode = 0;
            const primeNum = 31;
            for (let i = 0; i < key.length; i++) {
                hashCode = (primeNum * hashCode + key.charCodeAt(i)) % buckets;
            }
            return hashCode;
        },
        set(key, value){
            let hashKey = this.hash(key);
            if(typeof this.hash_map[hashKey] === 'object'){
                //if bucket exists, check if exact key exists, if so, replace value, else, add node
                let currNode = this.hash_map[hashKey].head;
                while(currNode.value[0]!==key && currNode.next!==null){
                    currNode = currNode.next;
                }
                if(currNode.value[0]===key){
                    currNode.value = [key,value];
                }else{
                    this.hash_map[hashKey].append([key,value]);
                }
            }else{
                //if bucket doesn't exist, initialize & add key value pair
                this.hash_map[hashKey] = linkedList();
                this.hash_map[hashKey].append([key,value]);
            }
        },
        get(key){
            let hashKey = this.hash(key);
            if(this.hash_map[hashKey]===undefined){
                return "Key not found";
            }
            let listNode = this.hash_map[hashKey].head;
            while(listNode.next !== null){
                if(listNode.value[0]===key){
                    return listNode.value[1];
                }
                listNode = listNode.next;
            }
            if(listNode.value[0]===key){
                return listNode.value[1];
            } 
        }     
    }
}
