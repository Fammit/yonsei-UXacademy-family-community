import {format, formatDistanceToNow} from 'date-fns';
import {ko} from 'date-fns/locale';

export function formatDate(date){
    const d = new Date(date);
    const now = Date.now();
    const diff = (now - d.getTime()) / 1000;

    if (diff < 60 * 1) {
        return '방금 전';
    }
    if (diff < 60 * 60 * 24 * 3) {
        return formatDistanceToNow(d, {addSuffix: true, locale: ko});
    }
    return format(d,'PPP EEE p', {locale: ko});
}

const dummyData = [
    {
        menu:[
            {
                id:1,
                info:'kimchi',
                list:[
                    {
                        categoryId:1,
                        info:'vegi'
                    }
                ]
            },
            {
                id:2,
                info:'gogi'
            }
        ]
    }
]






// const answer = [ 
//         [ 
//             {
//                 "answerId": "6206a10d-0c78-4900-a7f1-b0a7deb4daab", 
//                 "answerPhotoURL": "https://firebasestorage.googleapis.com/v0/b/mvp-mixu.appspot.com/o/photo%2F28syXvGrHNecOMHSJlIkz1nLu8I3%2F49f25095-bc28-4d1b-8f17-ccdd83d0259e.jpg?alt=media&token=74abe3a9-f79c-4582-988a-fb0c52f1ea97", 
//                 "createdAt": [FirestoreTimestamp], 
//                 "description": "나..!", 
//                 "id": "28syXvGrHNecOMHSJlIkz1nLu8I3", 
//                 "info": "현지", 
//                 "photoURL": "https://firebasestorage.googleapis.com/v0/b/mvp-mixu.appspot.com/o/profile%2F28syXvGrHNecOMHSJlIkz1nLu8I3.png?alt=media&token=602766cf-dbb1-44e6-8b06-648f63ed1130"
//             }
//         ], 
//         [
//             {
//                 "answerId": "d579170d-e36b-40cf-b256-fd77b63e3415", 
//                 "answerPhotoURL": "https://firebasestorage.googleapis.com/v0/b/mvp-mixu.appspot.com/o/photo%2Fp6mT0V81xUPQ9prllQ0nm1NhIQQ2%2Fec6a722d-1bfa-4fd0-8293-31b27ef7a88f.jpg?alt=media&token=945cbc45-729a-4897-8168-90c7b5cdcdd0", 
//                 "createdAt": [FirestoreTimestamp], 
//                 "description": "응응!", 
//                 "id": "p6mT0V81xUPQ9prllQ0nm1NhIQQ2", 
//                 "info": "현식", 
//                 "photoURL": "https://firebasestorage.googleapis.com/v0/b/mvp-mixu.appspot.com/o/profile%2Fp6mT0V81xUPQ9prllQ0nm1NhIQQ2.png?alt=media&token=06cf7ca9-2e8b-4bae-bd14-5c52e63877cd"
//             }
//         ],
//         [
//             {
//                 "answerId": "7af1ed0b-229e-48ef-a5d4-346d39684b44", 
//                 "answerPhotoURL": "https://firebasestorage.googleapis.com/v0/b/mvp-mixu.appspot.com/o/photo%2Fp6mT0V81xUPQ9prllQ0nm1NhIQQ2%2Fde8d7c61-eae8-4f10-806b-2640084a42e8.jpg?alt=media&token=f98826c0-f242-4210-8b86-7c36ac60248c", 
//                 "createdAt": [FirestoreTimestamp], 
//                 "description": "넹!", 
//                 "id": "p6mT0V81xUPQ9prllQ0nm1NhIQQ2", 
//                 "info": "현식", 
//                 "photoURL": "https://firebasestorage.googleapis.com/v0/b/mvp-mixu.appspot.com/o/profile%2Fp6mT0V81xUPQ9prllQ0nm1NhIQQ2.png?alt=media&token=06cf7ca9-2e8b-4bae-bd14-5c52e63877cd"
//             }
//         ], 
//         [
//             {
//                 "answerId": "9d872ac1-2197-4253-aee0-e17b87c36b96", 
//                 "answerPhotoURL": "https://firebasestorage.googleapis.com/v0/b/mvp-mixu.appspot.com/o/photo%2FOmyzu8IzqMaEZDk7fJuc1LcZY2B3%2Fd3792b68-6044-4337-bcad-104ed5ef4d75.jpg?alt=media&token=0c14a924-bb70-47eb-b0b0-81a9cc5ba76c", 
//                 "createdAt": [FirestoreTimestamp], 
//                 "description": "안동!!", 
//                 "id": "Omyzu8IzqMaEZDk7fJuc1LcZY2B3", 
//                 "info": "아빠", 
//                 "photoURL": "https://firebasestorage.googleapis.com/v0/b/mvp-mixu.appspot.com/o/profile%2FOmyzu8IzqMaEZDk7fJuc1LcZY2B3.png?alt=media&token=680168cb-f497-4dee-a8f0-ffb313d4ef18"
//             }, 
//             {
//                 "answerId": "cf2a2675-15e4-4247-8bee-e5169903042e", 
//                 "answerPhotoURL": "https://firebasestorage.googleapis.com/v0/b/mvp-mixu.appspot.com/o/photo%2Fp6mT0V81xUPQ9prllQ0nm1NhIQQ2%2Fa7020f61-9b57-40a9-9347-5af76e8bf1e9.jpg?alt=media&token=4f176509-0088-4ff3-a95e-1a9ac1f38c33", 
//                 "createdAt": [FirestoreTimestamp], 
//                 "description": "강릉!", 
//                 "id": "p6mT0V81xUPQ9prllQ0nm1NhIQQ2", 
//                 "info": "현식", 
//                 "photoURL": "https://firebasestorage.googleapis.com/v0/b/mvp-mixu.appspot.com/o/profile%2Fp6mT0V81xUPQ9prllQ0nm1NhIQQ2.png?alt=media&token=06cf7ca9-2e8b-4bae-bd14-5c52e63877cd"
//             }
//         ]
//     ]



// const question = [
//     {
//         "answer": [[Object]], 
//         "check": [[Object], [Object], [Object], [Object]], 
//         "createdAt": [Object], 
//         "from": {
//             "id": "Omyzu8IzqMaEZDk7fJuc1LcZY2B3", 
//             "info": "아빠", 
//             "photoURL": "https://firebasestorage.googleapis.com/v0/b/mvp-mixu.appspot.com/o/profile%2FOmyzu8IzqMaEZDk7fJuc1LcZY2B3.png?alt=media&token=680168cb-f497-4dee-a8f0-ffb313d4ef18"}, 
//             "question": "지난번에 손목 아프다고 했는데 요즘엔 좀 괜 찮은지?", 
//             "questionId": "d15930b5-8893-4fb7-83dd-8a3680dec5b2"
//     }, 
//     {
//         "answer": [[Object], [Object]], 
//         "check": [[Object], [Object], [Object], [Object]], 
//         "createdAt": [Object], 
//         "from": {
//             "id": "P8pvyEjO4wZtnQQ0YJNK4gYaYr33", 
//             "info": "엄마", 
//             "photoURL": "https://firebasestorage.googleapis.com/v0/b/mvp-mixu.appspot.com/o/profile%2FP8pvyEjO4wZtnQQ0YJNK4gYaYr33.png?alt=media&token=d4c125c4-3aad-4e90-b533-fbdacdcab8ef"}, 
//             "question": "가족 여름 휴가는 어디로, 언제쯤 가면 좋을 것 같아?", 
//             "questionId": "dc8eae6f-9dd5-4208-9b84-e8e640bf1b94"
//     }, 
//     {
//         "answer": [[Object]], 
//         "check": [[Object], [Object], [Object], [Object]], 
//         "createdAt": [Object], 
//         "from": {
//             "id": "p6mT0V81xUPQ9prllQ0nm1NhIQQ2", 
//             "info": "현식", 
//             "photoURL": "https://firebasestorage.googleapis.com/v0/b/mvp-mixu.appspot.com/o/profile%2Fp6mT0V81xUPQ9prllQ0nm1NhIQQ2.png?alt=media&token=06cf7ca9-2e8b-4bae-bd14-5c52e63877cd"}, 
//             "question": "부모님 결혼기념일 선물은 어떻게 할거야?", 
//             "questionId": "4c02e100-08ea-42ae-95c9-7e3df8f6cc43"
//     }
// ]



const data = [
    {
        "answerId": "9d872ac1-2197-4253-aee0-e17b87c36b96", 
        "answerPhotoURL": "https://firebasestorage.googleapis.com/v0/b/mvp-mixu.appspot.com/o/photo%2FOmyzu8IzqMaEZDk7fJuc1LcZY2B3%2Fd3792b68-6044-4337-bcad-104ed5ef4d75.jpg?alt=media&token=0c14a924-bb70-47eb-b0b0-81a9cc5ba76c", 
        "createdAt": [Object], 
        "description": "안동!!", 
        "id": "Omyzu8IzqMaEZDk7fJuc1LcZY2B3", 
        "info": "아빠", 
        "photoURL": "https://firebasestorage.googleapis.com/v0/b/mvp-mixu.appspot.com/o/profile%2FOmyzu8IzqMaEZDk7fJuc1LcZY2B3.png?alt=media&token=680168cb-f497-4dee-a8f0-ffb313d4ef18"
    }, 
    {
        "answerId": "6206a10d-0c78-4900-a7f1-b0a7deb4daab", 
        "answerPhotoURL": "https://firebasestorage.googleapis.com/v0/b/mvp-mixu.appspot.com/o/photo%2F28syXvGrHNecOMHSJlIkz1nLu8I3%2F49f25095-bc28-4d1b-8f17-ccdd83d0259e.jpg?alt=media&token=74abe3a9-f79c-4582-988a-fb0c52f1ea97", 
        "createdAt": [Object], 
        "description": "나..!", 
        "id": "28syXvGrHNecOMHSJlIkz1nLu8I3", 
        "info": "현지", 
        "photoURL": "https://firebasestorage.googleapis.com/v0/b/mvp-mixu.appspot.com/o/profile%2F28syXvGrHNecOMHSJlIkz1nLu8I3.png?alt=media&token=602766cf-dbb1-44e6-8b06-648f63ed1130"
    }, 
    {
        "answerId": "d579170d-e36b-40cf-b256-fd77b63e3415", 
        "answerPhotoURL": "https://firebasestorage.googleapis.com/v0/b/mvp-mixu.appspot.com/o/photo%2Fp6mT0V81xUPQ9prllQ0nm1NhIQQ2%2Fec6a722d-1bfa-4fd0-8293-31b27ef7a88f.jpg?alt=media&token=945cbc45-729a-4897-8168-90c7b5cdcdd0", 
        "createdAt": [Object], 
        "description": "응응!", 
        "id": "p6mT0V81xUPQ9prllQ0nm1NhIQQ2", 
        "info": "현식", 
        "photoURL": "https://firebasestorage.googleapis.com/v0/b/mvp-mixu.appspot.com/o/profile%2Fp6mT0V81xUPQ9prllQ0nm1NhIQQ2.png?alt=media&token=06cf7ca9-2e8b-4bae-bd14-5c52e63877cd"
    }, 
    {
        "answerId": "7af1ed0b-229e-48ef-a5d4-346d39684b44", 
        "answerPhotoURL": "https://firebasestorage.googleapis.com/v0/b/mvp-mixu.appspot.com/o/photo%2Fp6mT0V81xUPQ9prllQ0nm1NhIQQ2%2Fde8d7c61-eae8-4f10-806b-2640084a42e8.jpg?alt=media&token=f98826c0-f242-4210-8b86-7c36ac60248c", 
        "createdAt": [Object], 
        "description": "넹!", 
        "id": "p6mT0V81xUPQ9prllQ0nm1NhIQQ2", 
        "info": "c현식", 
        "photoURL": "https://firebasestorage.googleapis.com/v0/b/mvp-mixu.appspot.com/o/profile%2Fp6mT0V81xUPQ9prllQ0nm1NhIQQ2.png?alt=media&token=06cf7ca9-2e8b-4bae-bd14-5c52e63877cd"
    }, 
    {
        "answerId": "cf2a2675-15e4-4247-8bee-e5169903042e", 
        "answerPhotoURL": "https://firebasestorage.googleapis.com/v0/b/mvp-mixu.appspot.com/o/photo%2Fp6mT0V81xUPQ9prllQ0nm1NhIQQ2%2Fa7020f61-9b57-40a9-9347-5af76e8bf1e9.jpg?alt=media&token=4f176509-0088-4ff3-a95e-1a9ac1f38c33", 
        "createdAt": [Object], 
        "description": "강릉!", 
        "id": "p6mT0V81xUPQ9prllQ0nm1NhIQQ2", 
        "info": "현식", 
        "photoURL": "https://firebasestorage.googleapis.com/v0/b/mvp-mixu.appspot.com/o/profile%2Fp6mT0V81xUPQ9prllQ0nm1NhIQQ2.png?alt=media&token=06cf7ca9-2e8b-4bae-bd14-5c52e63877cd"
    }, 
    {
        "answerId": "15fae24b-002e-4ad7-b8fc-3e337eea69d7", 
        "answerPhotoURL": "https://firebasestorage.googleapis.com/v0/b/mvp-mixu.appspot.com/o/photo%2F28syXvGrHNecOMHSJlIkz1nLu8I3%2F0778ba63-d4f9-4956-9a9a-944120d17b14.jpg?alt=media&token=3cc885a0-bb73-4ff3-9c79-9418a0d739e6", 
        "createdAt": [Object], 
        "description": "밥 먹어요!", 
        "id": "28syXvGrHNecOMHSJlIkz1nLu8I3", 
        "info": "현지", 
        "photoURL": "https://firebasestorage.googleapis.com/v0/b/mvp-mixu.appspot.com/o/profile%2F28syXvGrHNecOMHSJlIkz1nLu8I3.png?alt=media&token=602766cf-dbb1-44e6-8b06-648f63ed1130"
    }, 
    {
        "answerId": "02870c4c-e8d6-4e48-86d8-ee175045a810", 
        "answerPhotoURL": "https://firebasestorage.googleapis.com/v0/b/mvp-mixu.appspot.com/o/photo%2Fp6mT0V81xUPQ9prllQ0nm1NhIQQ2%2F57246115-ad95-4df9-aa64-b3a4fac9e88b.jpg?alt=media&token=ff9af622-9515-4e91-b184-e6830f54b1db", 
        "createdAt": [Object], 
        "description": "asdfasdf", 
        "id": "p6mT0V81xUPQ9prllQ0nm1NhIQQ2", 
        "info": "현식", 
        "photoURL": "https://firebasestorage.googleapis.com/v0/b/mvp-mixu.appspot.com/o/profile%2Fp6mT0V81xUPQ9prllQ0nm1NhIQQ2.png?alt=media&token=06cf7ca9-2e8b-4bae-bd14-5c52e63877cd"
    }
]