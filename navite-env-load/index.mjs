// Node.js v20+ now supports the --env-file flag to load environment variables from a file.
// ref.: https://nodejs.org/en/learn/command-line/how-to-read-environment-variables-from-nodejs
// node --env-file=.env index.mjs
console.log('NODE_ENV:', process.env.NODE_ENV)
console.log('MY_PRIVATE_KEY:', process.env.MY_PRIVATE_KEY)
console.log('PORT:', process.env.PORT)
