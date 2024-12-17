import { villains } from './data/villanos';



// const getVillainsById = (id) => {
//     return villains.find((villains) => {
//      if(villains.id === id){
//         return true
//      }else {
//         return false
//      }
//     })
// }

const getVillainsById = (id) => {
    const foundvillain = villains.find((villains) => villains.id === id);
    return foundvillain ? foundvillain : 'no se encontró el villano';
}
//filter

const getVillainsByWeakness = ( weakness ) => villains.filter((villains) => villains.weakness === weakness)

console.log (getVillainsById(5))
console.log (getVillainsByWeakness('Higiene dental'));


