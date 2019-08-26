import a from './a';

function selectClothes(type) {
    if(type === 'shirt') {
      return {
        type: 'shirt',
        amount: '$10',
      }
     }
     else {
       return {
         type: 'pants',
         amount: '$12'
       }
     }
     
     return {
       type: 'hat',
       amount: '$5'
     }
  }
  
  function selectAccessory() {
    return {
      type: 'ring',
      amount: '$40'
    }
  }
  
  const data = selectClothes('shirt');
  console.log(data);
  console.log(a);