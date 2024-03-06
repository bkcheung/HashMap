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
            this.hash_map[this.hash(key)]=value;
        }
    }
}

