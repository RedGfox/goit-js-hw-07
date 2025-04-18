const categoriesList = document.querySelector(`#categories`);
const categoryItem = categoriesList.querySelectorAll(`.item`);
console.log(`Number of categories: ${categoryItem.length}`);
categoryItem.forEach(item => {
  const title = item.querySelector(`h2`).textContent;
  const elementsCount = item.querySelectorAll(`ul li`).length;
  console.log(`Category: ${title}`);
  console.log(`Elements: ${elementsCount}`);
});
