// Switch Case syntax
// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

// ---------------------------------------------------------------------------------------------------
// key: wo value jo mujhe hamesha check karni hai
// break: agar ham break nahi lagayenge toh jo bhi taala khula uske baad ka saara code execute hojata hai except default
// assume kariye ke month ek chaabi hai aur usme aapke paas kai saare locks hai jo bhi lock is chabi se khule ga wohi execute hoga

const month = 3

switch (month) {
    case 1:
        console.log("January");
        break;

    case 2:
        console.log("February");
        break;

    case 3:
        console.log("March");
        break;

    case 4:
        console.log("April");
        break;

    default:
        console.log("Default case match");
        break;
}