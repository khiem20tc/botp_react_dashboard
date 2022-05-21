const today = new Date();
const userDataToday = [
  {
    name: new Date(today.getTime() - 1000 * 60 * 60 * 7).getHours().toString(),
    tu: 450,
    nu: 100,
    ou: 150,
  },
  {
    name: new Date(today.getTime() - 1000 * 60 * 60 * 6).getHours().toString(),
    tu: 550,
    nu: 300,
    ou: 50,
  },
  {
    name: new Date(today.getTime() - 1000 * 60 * 60 * 5).getHours().toString(),
    tu: 700,
    nu: 456,
    ou: 132,
  },
  {
    name: new Date(today.getTime() - 1000 * 60 * 60 * 4).getHours().toString(),
    tu: 600,
    nu: 350,
    ou: 220,
  },
  {
    name: new Date(today.getTime() - 1000 * 60 * 60 * 3).getHours().toString(),
    tu: 470,
    nu: 156,
    ou: 340,
  },
  {
    name: new Date(today.getTime() - 1000 * 60 * 60 * 2).getHours().toString(),
    tu: 500,
    nu: 166,
    ou: 290,
  },
  {
    name: new Date(today.getTime() - 1000 * 60 * 60 * 1).getHours().toString(),
    tu: 800,
    nu: 456,
    ou: 120,
  },
  { name: today.getHours().toString(), tu: 850, nu: 250, ou: 110 },
];

const userDataWeek = [
  {
    name: new Date(today.getTime() - 1000 * 60 * 60 * 24 * 7)
      .getDate()
      .toString(),
    tu: 45000,
    nu: 10000,
    ou: 15000,
  },
  {
    name: new Date(today.getTime() - 1000 * 60 * 60 * 24 * 6)
      .getDate()
      .toString(),
    tu: 55000,
    nu: 30000,
    ou: 5000,
  },
  {
    name: new Date(today.getTime() - 1000 * 60 * 60 * 24 * 5)
      .getDate()
      .toString(),
    tu: 70000,
    nu: 45600,
    ou: 13200,
  },
  {
    name: new Date(today.getTime() - 1000 * 60 * 60 * 24 * 4)
      .getDate()
      .toString(),
    tu: 60000,
    nu: 35000,
    ou: 22000,
  },
  {
    name: new Date(today.getTime() - 1000 * 60 * 60 * 24 * 3)
      .getDate()
      .toString(),
    tu: 47000,
    nu: 15600,
    ou: 34000,
  },
  {
    name: new Date(today.getTime() - 1000 * 60 * 60 * 24 * 2)
      .getDate()
      .toString(),
    tu: 50000,
    nu: 16600,
    ou: 29000,
  },
  {
    name: new Date(today.getTime() - 1000 * 60 * 60 * 24 * 1)
      .getDate()
      .toString(),
    tu: 80000,
    nu: 45600,
    ou: 12000,
  },
  { name: today.getDate().toString(), tu: 85000, nu: 25000, ou: 11000 },
];

export { userDataToday, userDataWeek };
