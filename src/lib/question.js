//CREATE : 질문 생성 API
// export function createQuestion({user, members, question}) {
//     const questionDocId = uuidv4();
//     let temp = {};//배열 객체에 저장될 객체 : 사용자 닉네임과 답변 여부를 확인
//     let check = [];//DB에 저장될 배열 객체 : 모든 사용자에 대한 닉네임과 답변 여부를 확인
//     for(let i =0; i< members.length; i++){
//         temp.info = members[i].info
//         temp.isAnswered = false,
//         check.push({...temp})
//     }
//     return interactionCollection.doc(questionDocId).set({
//         from:{
//             id: user.id,
//             info: user.info
//         },
// 				questionId: questionDocId,
//         question: question,
//         check
//     })
// }

//CREATE : 답변 생성 API
// export function createAnswer({user, members, answer}) {
//     let key = user.info;
//     let temp = {};
//     let makeArrayObject = [];
//     for(let i =0; i< members.length; i++){
//         temp.info = members[i].info
//         temp.isAnswered = false,
//         makeArrayObject.push({...temp})
//     }
//     //답변한 사용자의 isAnswered값을 true로 갱신
//     const check = makeArrayObject.map(item => item.info === user.info ? {...item, isAnswered: true} : item);

//     return interactionCollection.doc('선택한 질문 고유 식별 번호').set({
//         [key]:{
//             id: user.id,
//             info:user.info,
//             answer: answer,
//         },
//         check
//     },{merge:true})
// }