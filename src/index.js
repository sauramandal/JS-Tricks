//@ts-nocheck
//Algo tips
import _ from "lodash";
const data = [
  {
    index: 0,
    guid: "80c25175-87c6-4a35-ae3d-4075a983209c",
    isActive: false,
    balance: "$1,489.68",
    picture: "http://placehold.it/32x32",
    age: 28,
    eyeColor: "brown",
    name: "Lucinda Hurst",
    gender: "female",
    company: "ACCUFARM",
    email: "lucindahurst@accufarm.com",
    phone: "+1 (897) 518-3969",
    address: "538 Coleridge Street, Rodanthe, South Dakota, 3261",
    about:
      "Ad fugiat ex excepteur dolore adipisicing. Aliquip laboris sunt reprehenderit et adipisicing eu cillum. Velit veniam esse tempor ullamco nulla. Mollit laboris Lorem nulla nostrud qui nulla aliquip.\r\n",
    registered: "2019-05-29T12:37:54 -06:-30",
    latitude: -70.486506,
    longitude: -112.939545,
    tags: ["nulla", "laboris", "consectetur", "enim", "velit", "dolor", "in"],
    friends: [
      {
        id: 0,
        name: "Sparks Gonzalez"
      },
      {
        id: 1,
        name: "Rodriquez Kinney"
      },
      {
        id: 2,
        name: "Lang Erickson"
      }
    ],
    greeting: "Hello, Lucinda Hurst! You have 10 unread messages.",
    favoriteFruit: "banana"
  },
  {
    index: 1,
    guid: "1bb8cd14-2aff-49fc-a38d-6d716ca00073",
    isActive: true,
    balance: "$1,927.98",
    picture: "http://placehold.it/32x32",
    age: 28,
    eyeColor: "blue",
    name: "Alicia Yates",
    gender: "female",
    company: "INSURETY",
    email: "aliciayates@insurety.com",
    phone: "+1 (828) 410-2949",
    address: "327 Fillmore Place, Shaft, New Mexico, 5017",
    about:
      "Pariatur voluptate occaecat Lorem est et pariatur. Labore dolor amet nulla nulla quis ipsum esse adipisicing do in exercitation ullamco sit minim. Ullamco et sit proident proident.\r\n",
    registered: "2017-01-10T01:22:27 -06:-30",
    latitude: -55.34203,
    longitude: -158.028663,
    tags: [
      "esse",
      "labore",
      "adipisicing",
      "occaecat",
      "aliquip",
      "eiusmod",
      "incididunt"
    ],
    friends: [
      {
        id: 0,
        name: "Deborah Macias"
      },
      {
        id: 1,
        name: "Rhea Morgan"
      },
      {
        id: 2,
        name: "Jannie Williams"
      }
    ],
    greeting: "Hello, Alicia Yates! You have 1 unread messages.",
    favoriteFruit: "apple"
  },
  {
    index: 2,
    guid: "5490d676-103e-4253-af81-09346c9e5f60",
    isActive: false,
    balance: "$1,636.83",
    picture: "http://placehold.it/32x32",
    age: 21,
    eyeColor: "green",
    name: "Constance Little",
    gender: "female",
    company: "DIGIPRINT",
    email: "constancelittle@digiprint.com",
    phone: "+1 (992) 494-2977",
    address: "924 Mill Street, Corriganville, Oregon, 205",
    about:
      "Consectetur aliqua veniam incididunt sint est laborum id cillum non. Voluptate anim labore sit dolore ad commodo anim Lorem Lorem in aute id ullamco. Eiusmod Lorem aute occaecat cupidatat non nostrud ad adipisicing. Adipisicing do in pariatur deserunt magna dolore. Quis dolor eiusmod laborum officia eiusmod sit id duis reprehenderit amet do aliquip deserunt.\r\n",
    registered: "2017-03-03T09:54:08 -06:-30",
    latitude: 12.9594,
    longitude: 117.390772,
    tags: [
      "commodo",
      "est",
      "dolor",
      "consequat",
      "mollit",
      "pariatur",
      "nisi"
    ],
    friends: [
      {
        id: 0,
        name: "Clare Walls"
      },
      {
        id: 1,
        name: "Tameka Cantu"
      },
      {
        id: 2,
        name: "Alexandria Gibbs"
      }
    ],
    greeting: "Hello, Constance Little! You have 6 unread messages.",
    favoriteFruit: "apple"
  },
  {
    index: 3,
    guid: "7b67aab0-1645-4b36-b50b-acff2b85f271",
    isActive: true,
    balance: "$2,384.54",
    picture: "http://placehold.it/32x32",
    age: 28,
    eyeColor: "blue",
    name: "Gay Gordon",
    gender: "male",
    company: "ZENOLUX",
    email: "gaygordon@zenolux.com",
    phone: "+1 (968) 412-2556",
    address: "477 Indiana Place, Kent, Georgia, 2782",
    about:
      "Enim voluptate nulla culpa ipsum amet do do commodo sunt excepteur elit labore nisi consequat. Minim cupidatat cillum deserunt veniam duis officia enim voluptate deserunt do consectetur velit. Deserunt sunt excepteur irure fugiat consequat et in id eiusmod reprehenderit culpa aute non. Dolor exercitation id cupidatat enim exercitation et.\r\n",
    registered: "2019-07-15T10:33:54 -06:-30",
    latitude: -71.594926,
    longitude: 114.738598,
    tags: ["eu", "consequat", "fugiat", "in", "est", "consequat", "irure"],
    friends: [
      {
        id: 0,
        name: "Wilkerson Francis"
      },
      {
        id: 1,
        name: "Poole Witt"
      },
      {
        id: 2,
        name: "Moses Chaney"
      }
    ],
    greeting: "Hello, Gay Gordon! You have 1 unread messages.",
    favoriteFruit: "strawberry"
  },
  {
    index: 4,
    guid: "d4fd6420-4ae0-4b8f-b460-18a91f696f9c",
    isActive: true,
    balance: "$2,800.73",
    picture: "http://placehold.it/32x32",
    age: 39,
    eyeColor: "green",
    name: "Hopkins Wolfe",
    gender: "male",
    company: "OPTICON",
    email: "hopkinswolfe@opticon.com",
    phone: "+1 (829) 555-2269",
    address: "213 Lott Place, Gordon, North Dakota, 6398",
    about:
      "Duis pariatur nostrud pariatur non excepteur amet aliquip consequat dolor ipsum do voluptate sunt. Consequat mollit ut cupidatat in consequat. Nulla velit elit irure consequat irure amet est aliquip ipsum. Dolor quis incididunt nulla do. Fugiat anim consequat cillum in pariatur mollit. Et elit aliqua minim fugiat amet.\r\n",
    registered: "2020-03-22T11:47:40 -06:-30",
    latitude: -9.278093,
    longitude: -160.054299,
    tags: ["id", "adipisicing", "cillum", "aliqua", "non", "in", "irure"],
    friends: [
      {
        id: 0,
        name: "Amelia Andrews"
      },
      {
        id: 1,
        name: "Bryant Mcbride"
      },
      {
        id: 2,
        name: "Carissa Singleton"
      }
    ],
    greeting: "Hello, Hopkins Wolfe! You have 3 unread messages.",
    favoriteFruit: "strawberry"
  }
];

let obj1 = { foo: "bar", x: 42 };
let obj2 = { foo: "baz", y: 13 };
const merge = (...objects) => ({ ...objects });
let s = "ABcwacggA";
const mergedResult = merge(obj1, obj2);
const countFrequency = [...s].reduce((freq, character) => {
  freq[character] = -~freq[character];
  return freq;
}, {});

console.log(countFrequency);

let arrayItems = [6, 5, 1, 2, 8, 9, 3, 1, 1, 0, 4];
// Shuffle an array
arrayItems = arrayItems.sort((_, __) => Math.random() - 0.5);
console.log(arrayItems);
// Custom Number Formatter
const numberFormatter = (num, digitsAfterDecimal, isCurrency = false) => {
  const formatKeys = [
    { value: 1, symbol: "" },
    { value: 1e3, symbol: "K" },
    { value: 1e6, symbol: "MM" },
    { value: 1e9, symbol: "B" }
  ];
  const dollarRegex = /\.0+$|(\.[0-9]*[1-9])0+$/;
  let i;
  for (i = formatKeys.length - 1; i > 0; i--) {
    if (num >= formatKeys[i].value) {
      break;
    }
  }
  return isCurrency
    ? (num / formatKeys[i].value)
        .toFixed(digitsAfterDecimal)
        .replace(dollarRegex, "$1") + formatKeys[i].symbol
    : (num / formatKeys[i].value).toFixed(digitsAfterDecimal) +
        formatKeys[i].symbol;
};

console.log(numberFormatter(1038294, 2), numberFormatter(74236, 0, true));

const clone = (item) => JSON.parse(JSON.stringify(item));

const deepEqual = (a, b) => {
  if (typeof a == "object" && a != null && typeof b == "object" && b != null) {
    var count = [0, 0];
    for (let _ in a) count[0]++;
    for (let _ in b) count[1]++;
    if (count[0] - count[1] !== 0) {
      return false;
    }
    for (let key in a) {
      if (!(key in b) || !deepEqual(a[key], b[key])) {
        return false;
      }
    }
    for (let key in b) {
      if (!(key in a) || !deepEqual(b[key], a[key])) {
        return false;
      }
    }
    return true;
  } else {
    return a === b;
  }
};

console.log(deepEqual(obj1, obj2));

const polarToCartesian = (centerX, centerY, radius, angleInDegrees) => {
  const angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;

  return {
    x: centerX + radius * Math.cos(angleInRadians),
    y: centerY + radius * Math.sin(angleInRadians)
  };
};

const describeArc = (x, y, radius, startAngle, endAngle) => {
  const start = polarToCartesian(x, y, radius, endAngle);
  const end = polarToCartesian(x, y, radius, startAngle);

  const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";
  //To draw a specific format in vector graphics
  return [
    "M",
    start.x,
    start.y,
    "A",
    radius,
    radius,
    0,
    largeArcFlag,
    0,
    end.x,
    end.y
  ].join(" ");
};

const validateEmailFormat = (email) => {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

console.log(describeArc(2, 4, 2, 1, 2));
console.log(validateEmailFormat("saura.mandal1@gmail.com"));
