var stringOne = "freeCodeCamp is the best place to learn"
var stringTwo = "frontend and backend developement"
var content='{\n' +
            '  _id: new ObjectId("61424cd91164032abb3a7679"),\n' +
            "  name: 'Ortizjsj',\n" +
            '  birthday: 2009-12-13T03:14:32.000Z\n' +
            '}'
var content1=content.split('\n')
var element=""
for (let i = 1; i < content1.length; i=i+2) {
    element += content1[i-1].concat(content1[i]);
    
}
//chartAt
var s="name:"
console.log(stringOne.charAt(1))
console.log(stringTwo.charAt(0))
console.log(content.indexOf("name:"))
console.log(content.indexOf("birthday:"))
console.log(content.slice(content.indexOf("name:")+s.length+2,content.indexOf("birthday:")-5))
