import firestore from '@react-native-firebase/firestore';

//회원가입 이후 users라는 컬렉션 생성 및 사용자 정보 저장된 문서 생성
export const usersCollection = firestore().collection('users');

export function createUser({id, info}){
    return usersCollection.doc(id).set({
        id,
        info
    });
}

export async function getUser(id){
    const doc = await usersCollection.doc(id).get();
    return doc.data();
}