import linkedList from "@bkcheung/linked-list";
let buckets = 16;
let map = hashMap();
map.set('hello','all');
map.set('hi','ya');
map.set('hello','world');

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
            let bucket = this.hash_map[hashKey];
            let newNode = node();
            newNode.setKeyValue(key, value);
            if(bucket!==undefined){
                if(bucket.key === key){
                    console.log('exists!');
                    bucket.setKeyValue(key, value); //overwrite
                    return;
                }
                while(bucket.next!==undefined){
                    if(bucket.key === key){
                        console.log('exists!');
                        bucket.setKeyValue(key, value); //overwrite
                        return;
                    } else{
                        bucket = bucket.next;
                    }
                }
                bucket.next = newNode;
            }
            bucket = newNode;
            console.log(bucket);
        }        
    }
}
function linkedList(){
    return{
        head,
        
    }
}
function node(){
    return{
        key: null,
        value: null,
        next: null,
        setKeyValue(key, value){
            this.key = key;
            this.value = value;
        },
        setNext(next){
            this.next = next;
        }
    }
}

