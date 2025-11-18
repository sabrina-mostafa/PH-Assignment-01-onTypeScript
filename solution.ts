
const formatValue = (value: string | number | boolean): string | number | boolean => {
    if (typeof value === "string") {
        return value.toUpperCase();
    }
    else if (typeof value === "number") {
        return value * 10;
    }
    else {
        return !value;
    }
}



const getLength = (input: string | unknown[]): number => {

    if (Array.isArray(input)) {
        return input.length;
    }
    else {
        return input.length;
    }
}



class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    getDetails(): string {
        return (`'Name: ${this.name}, Age: ${this.age}'`);
    }
}



const filterByRating = (input: { title: string, rating: number }[]): { title: string, rating: number }[] => {

    const newArray = input.filter((eachElement) => {
        if (eachElement.rating < 0 || eachElement.rating > 5) { eachElement.rating = 0; }

        return eachElement.rating >= 4;
    });
    return newArray;
}



const filterActiveUsers = (input: { id: number, name: string, email: string, isActive: boolean }[]): { id: number, name: string, email: string, isActive: boolean }[] => {

    return input.filter((eachUser) => eachUser.isActive === true)
}



interface Book {
    title: string;
    author: string;
    publishedYear: number;
    isAvailable: boolean;
}
const printBookDetails = (input: Book): void => {
    console.log(`Title: ${input.title}, Author: ${input.author}, Published: ${input.publishedYear}, Available: ${input.isAvailable ? "Yes" : "No"}`)
}



const getUniqueValues = (arr1: (string | number)[], arr2: (string | number)[]): (string | number)[] => {

    const finalArray = [];
    let index = -1;

    const duplicateChecker = (arr: (string | number)[], currentValue: string | number): boolean => {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === currentValue) {
                return true;
            }
        }
        return false;
    }

    for (let i = 0; i < arr1.length; i++) {
        if (!duplicateChecker(finalArray, arr1[i])) {
            finalArray[++index] = arr1[i];
        }
    }

    for (let i = 0; i < arr2.length; i++) {
        if (!duplicateChecker(finalArray, arr2[i])) {
            finalArray[++index] = arr2[i];
        }
    }
    return finalArray;
}



interface IProduct {
    name: string;
    price: number;
    quantity: number;
    discount?: number;
}
const calculateTotalPrice = (input: IProduct[]): number => {

    const totalPrice = input.reduce((accumulatedPrice, eachProduct) => {

        let individualProductPrice = eachProduct.price;

        if (typeof eachProduct.discount === "number" && eachProduct?.discount >= 0 && eachProduct?.discount <= 100) {
            individualProductPrice -= eachProduct.price * (eachProduct?.discount / 100);
        }

        accumulatedPrice += (individualProductPrice * eachProduct.quantity);

        return accumulatedPrice;
    }, 0);

    return totalPrice;
}

