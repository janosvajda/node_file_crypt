var crypto = require('crypto');

/**
 * @param string algoritmh
 * @param string hashkey
 * @param string iv
 */
function FileCrypt(algoritmh, hashkey, iv){
    this.algoritmh=algoritmh;
    if(algoritmh==='') this.algoritmh = 'aes-256-cbc';
    this.iv=iv;
    this.cryptkey   = crypto.createHash('sha256').update(hashkey).digest()
};

/**
 * 
 * @param string encryptdata
 * @returns decoded_data string
 */
FileCrypt.prototype.decrypt = function(encryptdata){
    encryptdata = new Buffer(encryptdata, 'base64').toString('binary');
    var decipher = crypto.createDecipheriv(this.algoritmh, this.cryptkey, this.iv),
        decoded_data = decipher.update(encryptdata, 'binary', 'utf8');
    decoded_data += decipher.final('utf8');
    return decoded_data;
}

/**
 * @param string cleardata
 * @returns encoded_encryptdata string
 */
FileCrypt.prototype.encrypt = function(cleardata) {
    var encipher = crypto.createCipheriv(this.algoritmh, this.cryptkey, this.iv),
        encryptdata = encipher.update(cleardata, 'utf8', 'binary');
    encryptdata += encipher.final('binary');
    var encoded_encryptdata = new Buffer(encryptdata, 'binary').toString('base64');
    return encoded_encryptdata;
}