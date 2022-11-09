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
