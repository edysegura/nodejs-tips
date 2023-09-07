import { createHash } from 'crypto'

// prettier-ignore
const md5hash = createHash('md5')
    .update('123deoliveira4')
    .digest('hex')

console.log(md5hash, md5hash.length)

// https://www.md5online.org/md5-decrypt.html
// 22259e78aec5867c3019df54dcd9f5ec
// MD5 hash collision https://stackoverflow.com/a/1756131
