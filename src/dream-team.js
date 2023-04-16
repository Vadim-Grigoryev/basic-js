const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members){
  if ((Array.isArray(members)==false)||(typeof members)==null) {
   return false
  } else if (members==[]){
    return ''
  }
  const filtered=members.filter((current)=>{
    if ((typeof current)=='string'){
      current=current
      return current
    }
  })
  const trimmed=filtered.map((current)=>{
    current=current.trim()
    return current
  })
  const firLet=trimmed.map((current)=>{
   current=current[0].toUpperCase()
   return current
   })
  const sortFirst=firLet.sort()
  const result=sortFirst.join('')
  return result
}

module.exports = {
  createDreamTeam
};
