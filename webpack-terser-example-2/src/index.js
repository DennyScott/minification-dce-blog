const buyShirt = () => ({
    type: 'shirt',
    amount: '$10',
})

const buyPants = () => ({
    type: 'pants',
    amount: '$12'
});

const buyHat = () => ({
    type: 'hat',
    amount: '$5'
})

function selectClothes(type) {
  if(type === 'shirt') return buyShirt();
  else return buyPants();
  buyHat();
}

// selectClothes('shirt');
const clothes = selectClothes('shirt');
console.log(clothes);