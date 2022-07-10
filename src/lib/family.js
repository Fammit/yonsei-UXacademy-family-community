import firestore from '@react-native-firebase/firestore';

export const familyCollection = firestore().collection('family');

//가족 구성원 정보 조회 API : READ
export async function getMemberInfo(){
    const snapshot = await familyCollection.doc('test').collection('users').get();
    const member = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id
    }))
    //console.log('결과',member);
    return member;
}

//질문 생성 API : CREATE
export async function createQuestion({user, question}) {
    console.log('DEBUGTEST')
    return familyCollection.doc('test').collection('question').doc('sample').set({
        user,
        question,
        createdAt: firestore.FieldValue.serverTimestamp(),
    })
}

//질문 조회 API : READ
export async function getQuestion(){
    const snapshot = await familyCollection.doc('test').collection('question').get();
    const question = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id
    }))
    const result = question[0].question;
    return result;
}