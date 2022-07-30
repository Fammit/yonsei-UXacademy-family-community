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






// const test = [ 
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