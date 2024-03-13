const linkedList = require('@bkcheung/linked-list');

let buckets = 16;
let map = hashMap();
map.set('hello','all');
map.set('hi','ya');
map.set('hello','all');
map.set('hello','world');
map.set('hdlmo','yall'); //same hashkey as hello

console.log(map.clear());
console.log(map.hash_map);

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
                return "Key does not exist";
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
        },
        has(key){
            let hashKey = this.hash(key);
            if(this.hash_map[hashKey]===undefined){
                return false;
            }
            let listNode = this.hash_map[hashKey].head;
            while(listNode.next!==null){
                if(listNode.value[0]===key){
                    return true;
                }
                listNode = listNode.next;
            }
            return listNode.value[0]===key;
        },
        remove(key){
            let hashKey = this.hash(key);
            if(this.hash_map[hashKey]===undefined){
                return false;
            }
            let list = this.hash_map[hashKey];
            let listNode = list.head;
            let prevNode;
            if(listNode.value[0]===key){
                list.head = listNode.next;
                return true;
            }
            prevNode = listNode;
            listNode = listNode.next;
            while(listNode.next!==null){
                if(listNode.value[0]===key){
                    listNode.value = null;
                    prevNode.next = listNode.next;
                    return true;
                }
            }
            if(listNode.value[0]===key){
                listNode.value = null;
                return true;
            } 
            return false;
        },
        length(){
            let notNull = value => value !== null;
            let filtered = this.hash_map.filter(notNull);
            let length = 0;
            filtered.forEach(item => {
                let currNode = item.head;
                while(currNode.next!==null){
                    currNode = currNode.next;
                    length++;
                }
                length++;
            })
            return length;
        },
        clear(){
            this.hash_map = [];
        }
    }
}
