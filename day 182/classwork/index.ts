// 1. ობიექტის ტიპი
type User = {
  firstName: string;
  lastName: string;
  age: number;
};

// 2. ფუნქციის ტიპი
type CreateUserFn = (firstName: string, lastName: string, age: number) => User;

// 3. ფუნქციის იმპლემენტაცია
const createUser: CreateUserFn = (firstName, lastName, age) => {
  return {
    firstName,
    lastName,
    age
  };
};

// მაგალითი
const user = createUser("გიორგი", "ბერიძე", 25);
console.log(user);
