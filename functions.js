const findTheNumberOfOddNumbers = (pArr) => {
  let newArr =[]
  pArr.map(number => {
    if (number %2 != 0) {
    newArr.push(number)
  }})
  return newArr.length
};


const getIndexOfFalseItem = (pArr) => {
  let getIndexOfFalse = pArr.indexOf(false) 
  return getIndexOfFalse
};

const filterNumbers = (pArr) => {
  let filteredArr = []
  pArr.map((item) => {
    if(typeof item == "number" ){
      filteredArr.push(item)
    }
  })
  return filteredArr
};

const generateEmailAddress = (pArr) => {
  let newArr = []
  pArr.map((item)=>{
    newArr.push(item.toLowerCase()+"@gmail.com")
  })
  return newArr
};

export {
  findTheNumberOfOddNumbers,
  getIndexOfFalseItem,
  filterNumbers,
  generateEmailAddress,
};