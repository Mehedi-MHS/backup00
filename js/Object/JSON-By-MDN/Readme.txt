=====J-S-O-N ======
1: Only difference between JS object an JSON is that 
in JSON, property name and value both must me in quotation.(eg: {"name":"abc"} )
in Object, (eg: {name:"abc"})

2: JSON does not support any method.
JSON is purely a string with a specified data format — it contains only properties, no methods.

3: MUST USE DOUBLE QUOTE
JSON requires double quotes to be used around strings and property names. Single quotes are not valid other than surrounding the entire JSON string.

4:JSON VALIDATION
Even a single misplaced comma or colon can cause a JSON file to go wrong, and not work. You should be careful to validate any data you are attempting to use (although computer-generated JSON is less likely to include errors, as long as the generator program is working correctly). You can validate JSON using an application like "JSONLint"

5: "JSON.stringify(obj)" -> converts general objects into JSON format
   "JSON.parse(jsonFile)" -> converts JSON file to Object to use in Javascript