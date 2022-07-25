import firestore from '@react-native-firebase/firestore';
import {arrayUnion, updateDoc} from '@react-native-firebase/firestore';

export const interactionCollection = firestore().collection('family').doc('family1').collection('interaction');

//답변 여부 조회
export async function getIsAnswered({questionDocId}) {
    const snapshot = await interactionCollection.doc(questionDocId).get()
    return snapshot.data().check;
}

//답변 생성
export function createAnswer({user, isAnswered, answer, questionDocId}) {
    //답변한 사용자의 isAnswered값을 true로 갱신
    const check = isAnswered.map(item => item.info === user.info ? {...item, isAnswered:true} : item);

    return interactionCollection.doc(questionDocId).set({
        answer : firestore.FieldValue.arrayUnion({
            id: user.id,
            info: user.info,
            answer: answer,
            createdAt: firestore.Timestamp.now()
        }),
        check
    },{merge:true})
}