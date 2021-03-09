const bcrypt = require('bcryptjs')

let hashPassword = (password) => {
  const salt = process.env.SALT || 7
  return bcrypt.hashSync(password, +salt)
} // ? string hashed
let comparePassword = (password, hashed) => bcrypt.compareSync(password, hashed) // ? true or false

module.exports = { hashPassword , comparePassword }