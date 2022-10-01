 
// var searchQuery = "Task 2"

// var resultString = ""

// function children_search(entry, searchQuery, resultString){

//     resultString += ' -> ' + entry['name']

//     if (entry['name'] == searchQuery){
//         console.log(entry['name'])
//         return resultString
//     }

//     if (entry['children'].length == 0){
//         return resultString
//     }

//     for (var child_index = 0; child_index < entry['children'].length; child_index++) {
//         if (entry['children'][child_index]['name'] === searchQuery){
//             return resultString + ' -> ' + entry['children'][child_index]['name']
//         }
//         if (entry['children'][child_index].hasOwnProperty('children')){
//             if (entry['children'][child_index]['children'].length > 0){
//                 children_search(entry['children'][child_index], searchQuery, resultString)
//             }
//         }
//     }
// }

// function search_object(){
//     for (var i = 0; i < data['projects'].length; i++){
//         resultString = data['projects'][i]['name']
//         if (searchQuery ===  data['projects'][i]['name']){
//             return resultString
//         }
    
//         for (var task_index = 0; task_index < data['projects'][i]['tasks'].length; task_index++) {
//             result = children_search(data['projects'][i]['tasks'][task_index], searchQuery, resultString)
//         }
//     }

//     return result
    
// }

// console.log(search_object())