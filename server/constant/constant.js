/**
 * Created by ever on 2019/12/20.
 */
const crypto = require('crypto')
module.exports = {
    MD5_SUFFIX: '9d6eb260f2254980eaedb08ead84d702',
    md5: pwd => {
        let md5 = crypto.createHash('md5');
        return md5.update(pwd).digest('hex');
    },
    secretKey: 'maria_theo_sophia_2019_jwttoken'
}