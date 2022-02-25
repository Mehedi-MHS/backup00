//Style1.JSON (JSON style)
"use strict";
let style1 = {
  "institution": "Dhaka University",
  "formed": 1901,
  "units": ["ka",
    "kha",
    "ga",
    "gha"],
  "teachers": [{
    "science": [{
      "name": "Mr. Aaaa",
      "age": 35,
      "subject": "physics"
    },
      {
        "name": "Mrs. Bbb",
        "age": 29,
        "subject": "Biology"
      }]
  },
    {
      "commerce": [{
        "name": "Mrs Ccc",
        "age": 65,
        "subject": "Economics"
      },
        {
          "name": "Mr Ddd",
          "age": 55,
          "subject": "Finance"
        }]
    }]
};

console.log(typeof style1);//Object
console.log(style1["institution"]); // Dhaka University
console.log(style1["teachers"][0]["science"][0]["name"]);//Mr. Aaaa
console.log(style1.teachers[0].science[0].name); //Mr. Aaaa
/******************************/
//style2.json (array style)
let style2=[
  {
  "institution": "Dhaka University",
  "formed": 1901,
  "units": ["ka",
    "kha",
    "ga",
    "gha"],
  "teachers": [{
    "science": [{
      "name": "Mr. Aaaa",
      "age": 35,
      "subject": "physics"
    },
      {
        "name": "Mrs. Bbb",
        "age": 29,
        "subject": "Biology"
      }]
  },
    {
      "commerce": [{
        "name": "Mrs Ccc",
        "age": 65,
        "subject": "Economics"
      },
        {
          "name": "Mr Ddd",
          "age": 55,
          "subject": "Finance"
        }]
    }]
}
  ];
  
  console.log(style2[0]["teachers"][0]["science"][0]["name"]); //Mr. Aaaa





