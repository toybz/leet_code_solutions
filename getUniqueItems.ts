// Remove the duplicates items in an array
// sample:
// item: [1, 1, 1, 2, 3, 4, 5];
//should return [1,2,3,4,5]

const items = [1, 1, 1, 2, 3, 4, 5];
console.log(getUniqueItems(items));

function getUniqueItems(_items: number[]) {
  return _items.filter((item, index, thisItems) => {
    return thisItems.indexOf(item) === index;
  });
}

//We can also use the function below to get
function getUniqueItems2(_items: number[]) {
  return _items.reduce((acc: any, next: number) => {
    acc = acc || [];
    if (!acc.includes(next)) {
      acc.push(next);
      console.log(acc);
      return acc;
    }
  });
}
