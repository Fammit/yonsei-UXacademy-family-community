import firestore from '@react-native-firebase/firestore';

export const familyCollection = firestore().collection('family');

export async function createFamily({user}){
    return familyCollection.doc('test').set({
        user
    });
}

export async function test(){
    const snapshot = await familyCollection.doc('test').collection('users').get();
    const member = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id
    }))
    console.log('결과',member);
    return member;
}