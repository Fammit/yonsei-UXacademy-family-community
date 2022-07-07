import firestore from '@react-native-firebase/firestore';

export const familyCollection = firestore().collection('family');

export async function getFamily(){
    const snapshot = await familyCollection.get();
    const family = snapshot.docs.map((doc) => ({
        ...doc.data()
    }))
    console.log(family)
}