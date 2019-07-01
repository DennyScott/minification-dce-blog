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

// selectClothes('shirt');
const clothes = selectClothes('shirt');
console.log(clothes);