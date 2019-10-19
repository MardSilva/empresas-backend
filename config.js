module.exports = {
  port: 3000,
  dbConnectionString: 'postgres://postgres:123456seteoito@localhost:3333/api-ioasys',
  saltRounds: 2,
  jwtSecret: 'mysecret',
  tokenExpireTime: '6h'
}