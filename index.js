let map = hashMap();
console.log(map.hash('hi'));

function hashMap(){
    return {
        hash_map: [],
        hash(key){
            let hashCode = 0;
            const primeNumber = 31;
            for (let i = 0; i < key.length; i++) {
                hashCode = (primeNumber * hashCode + key.charCodeAt(i));
            }
            return hashCode;
        }
    }
}

