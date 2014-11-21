File crypt class in Node.js
===========================

File encrypt and decrypt class with selected algorithm in Node.

Example
=======

var file_content = "What a piece of work is man! how noble in reason! how infinite in faculty! in form and moving how express and admirable! in action how like an angel! in apprehension how like a god! the beauty of the world, the paragon of animals!";


var iv = 'a2xhcgAAAAAAAAAA'; //16 character

var hashkey='jhkjhkjhkhjkj'; //hash key
console.log(iv.length);

var TestCrypt=new FileCrypt('aes-256-cbc',hashkey,iv);

var enc = TestCrypt.encrypt(file_content);

var dec = TestCrypt.decrypt(enc);
 
console.log("Length: ", enc.length);
console.log("Encrypted data in Base64:", enc);
console.warn("Decrypted text: " + dec);


Licence
========


Author: Janos Vajda

