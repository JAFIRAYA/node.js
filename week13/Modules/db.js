const knex = require('knex');

const db = knex({
  client:'pg',
  connection:{
    host: '127.0.0.1',
    port: '5432',
    user: 'postgres',
    password: 'ayaaya20045',
    database: 'public1'
  }
})
function createUser({user}){
  return db('public1').insert(
    {
      username:user
    }
  )
  .returning('*')
}

module.exports = {
  createUser
}
