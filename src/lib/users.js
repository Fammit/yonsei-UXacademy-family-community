import firestore from '@react-native-firebase/firestore';

export const usersCollection = firestore().collection('users');

//CREATE: 회원가입한 사용자 정보 저장 API
export function createUser({id, info, photoURL}){
    return usersCollection.doc(id).set({
        id,
        info,
        photoURL
    });
}

//READ: 현재 로그인한 사용자 정보 조회 API
export async function getUser(id){
    const doc = await usersCollection.doc(id).get();
    return doc.data();
}

//READ: 등록된 모든 사용자 정보 조회 API
//약식으로 초대 기능 구현하기 위해 작성 --> 초대 기능 활성화 시 해당 함수 전면 수정 혹은 삭제 필요
export async function getAllUser() {
    const documents = await usersCollection.get()
    const result = documents.docs.map((docs) => {
        return docs.data();
    })
    return result;
}