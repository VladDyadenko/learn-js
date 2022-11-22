// Замовниця хоче, щоб кожне зілля було представлено не тільки
//  ім'ям, але й ціною, а в майбутньому, можливо,
//  й іншими характеристиками.Тому зараз у властивості
//  potions буде зберігатися масив об'єктів з наступними
// властивостями.

// {
//   name: "Dragon breath",
//   price: 700
// }
// Виконай рефакторинг методів об'єкта atTheOldToad таким чином,
// щоб вони працювали не з масивом рядків, а з масивом об'єктів.

// getPotions() - метод для отримання всього зілля.
//  Повертає значення властивості potions.
// addPotion(newPotion) - додає зілля newPotion
// (вже об'єкт) в масив у властивості potions, але тільки,
// якщо такого зілля ще немає в інвентарі.В іншому випадку
// повертається рядок.
// removePotion(potionName) - видаляє об'єкт зілля з ім'ям
// potionName з масиву у властивості potions.
// updatePotionName(oldName, newName) - оновлює властивість
// name об'єкта-зілля з назвою oldName на newName в масиві potions.


const atTheOldToad = {
  potions: [
    { name: "Speed potion", price: 460 },
    { name: "Dragon breath", price: 780 },
    { name: "Stone skin", price: 520 },
  ],
  // Change code below this line
  getPotions() {
    return this.potions;
  },
  addPotion(newPotion) {
       
    const addNewPotion = { ...newPotion };

    const { potions } = this; 
    
    for (const potion of potions) {
          
      if (potion.name === addNewPotion.name) {
      return `Error! Potion ${newPotion.name} is already in your inventory!`;
      }
        
    }   
    
    return this.potions.push(newPotion);
  },
  removePotion(potionName) {
        
    const { potions } = this; 
              
    for (const potion of potions) {
         
      
      if (potion.name === potionName) {
        
        return potions.splice(potions.indexOf(potion), 1);
      }

    }
   
    return `Potion ${potionName} is not in inventory!`;
    
  },
  updatePotionName(oldName, newName) {

    const { potions } = this;

    for (const potion of potions) {
      
      
      if (potion.name === oldName) {
        console.log(potion.name)
        return potion.name = newName ;
      }
    }
    
  },
  // Change code above this line
};
console.log(atTheOldToad.potions);
console.log(atTheOldToad.addPotion({ name: "Invisibility", price: 620 }));
console.log(atTheOldToad.potions)
console.log(atTheOldToad.addPotion({ name: "Power potion", price: 270 }));
console.log(atTheOldToad.potions)
console.log(atTheOldToad.addPotion({ name: "Dragon breath", price: 700 }));
console.log(atTheOldToad.potions);
console.log(atTheOldToad.addPotion({ name: "Stone skin", price: 240 }));
console.log(atTheOldToad.potions);
console.log(atTheOldToad.removePotion("Dragon breath"));
console.log(atTheOldToad.potions);
console.log(atTheOldToad.removePotion("Speed potion"));
console.log(atTheOldToad.potions);
console.log(atTheOldToad.updatePotionName("Dragon breath", "Polymorth"));
console.log(atTheOldToad.potions);
console.log(atTheOldToad.updatePotionName("Stone skin", "Invulnerability potion"));
console.log(atTheOldToad.potions);