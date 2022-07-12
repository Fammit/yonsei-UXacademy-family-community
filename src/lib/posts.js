import firestore from '@react-native-firebase/firestore';

const postsCollection = firestore().collection('family').doc('test').collection('posts');

export function createPost({user, photoURL, description}) {
    console.log('BACKEND',photoURL)
    return postsCollection.add({
        user,
        photoURL,
        description,
        createdAt: firestore.FieldValue.serverTimestamp(),
    });
}