import React from "react";
import MealCard from "./MealCard";
import deleteIcon from '../assets/delete.svg'

const WeekMeals = ({ meals, removeMeal }) => {
  return (
    <div className="grid lg:px-10 md:px-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mb-10 ">
      {meals.map((meal, index) => (
        <div key={index} className="flex items-center justify-between rounded-lg ">
          <MealCard
            mealname={meal.name}
            mealType={meal.mealType}
            mealInstruction={meal.instructions}
            mealImage={meal.image}
            mealcuisine={meal.cuisine}
            mealrating={meal.rating}
            deleteCard={() => removeMeal(index)}
            DeleteIcon={deleteIcon}
            imghidden={''}
          />
          
        </div>
      ))}
    </div>
  );
};

export default WeekMeals;
