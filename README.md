# HashMap

Hash map implementation created as part of the Odin Project Course. Uses linked list implementation created from a previous project.

<b> Functions include: </b>
* set(key, value) If a key already exists, then the old value is overwritten or we can say that we update the key’s value
* get(key) takes one argument as a key and returns the value that is assigned to this key. If a key is not found, return null.
* has(key) takes a key as an argument and returns true or false based on whether or not the key is in the hash map.
* remove(key) takes a key as an argument. If the given key is in the hash map, it should remove the entry with that key and return true. If the key isn’t in the hash map, it should return false.
* length() returns the number of stored keys in the hash map.
* clear() removes all entries in the hash map.
* keys() returns an array containing all the keys inside the hash map.
* values() returns an array containing all the values.
* entries() returns an array that contains each key, value pair
