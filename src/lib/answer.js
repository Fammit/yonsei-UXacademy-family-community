import firestore from '@react-native-firebase/firestore';
import {v4 as uuidv4} from 'uuid';

export const interactionCollection = firestore().collection('family').doc('family1').collection('interaction');


/** 
    CREATE: 답변 생성을 위한 firestore API
    * check 답변한 사용자의 isAnswered값을 true로 갱신
    * firestore 배열 api를 사용해 갱신
    @params {questionId} answer: 질문 고유 식별 번호
    @params {object} isAnswered: 답변 여부 정보
    @params {object} user: 현재 로그인한 사용자 정보
    @params {object} photoURL: 답변 내용
    @params {object} description: 답변 내용
*/
export function createAnswer({questionId, isAnswered, user, photoURL, description }) {
    const answerDocId = uuidv4();
    const check = isAnswered.map(item => item.info === user.info ? {...item, isAnswered:true} : item);

    return interactionCollection.doc(questionId).set({
        answer : firestore.FieldValue.arrayUnion({
            answerId: answerDocId,
            id: user.id,
            info: user.info,
            photoURL: user.photoURL,
            answerPhotoURL: photoURL,
            description: description,
            createdAt: firestore.Timestamp.now()
        }),
        check
    },{merge:true})
}

export async function getAnswer(){
    const snapshot = await interactionCollection.orderBy('answer','desc').get();
    const answerArr = snapshot.docs.map((docs) => {
        return docs.data().answer;
    })
    //console.log('FIREBASE DEBGUG=', answerArr.flat());
    return answerArr.flat();
}

/** 
    READ: 답변 여부 조회를 위한 firestore API
    * 특정 질문에 대해 어떤 가족 구성원이 답변을 했는지 확인할 수 있음
    @params {object} questionDocId: 답변한 질문 고유 식별 번호
    @return 답변 여부가 저장된 배열
*/
export async function getIsAnswered({questionDocId}) {
    const snapshot = await interactionCollection.doc(questionDocId).get()
    return snapshot.data().check;
}
