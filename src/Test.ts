interface Student {
  name: string;
  id: number;
}

const stu: {
  name: string;
  123: number;
} = { name: "siang", 123: 123 };
console.log("");

const stu2 = { alias: "siang", 456: 123 };

const generic = <T>(text:T) => {
  console.log(text);
};

generic<number>(123);
