import firestore from '@react-native-firebase/firestore';

//회원가입 이후 users라는 컬렉션 생성 및 사용자 정보 저장된 문서 생성
export const usersCollection = firestore().collection('users');

//user DB 생성
export function createUser({id, info}){
    return usersCollection.doc(id).set({
        id,
        info
    });
}

//현재 로그인한 사용자 정보 조회
export async function getUser(id){
    const doc = await usersCollection.doc(id).get();
    return doc.data();
}

//등록된 모든 사용자들의 정보 조회
export async function getMember(){
    const snapshot = await usersCollection.where('info', '!=', 'me').get();
    const member = snapshot.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id
    }))
    console.log('userfile',member)
    // const result = member[1].info
    
    // console.log(result);
    // return result;
    return member;
    
}