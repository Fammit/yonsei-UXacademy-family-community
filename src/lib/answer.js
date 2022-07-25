import firestore from '@react-native-firebase/firestore';
import {arrayUnion, updateDoc} from '@react-native-firebase/firestore';

export const interactionCollection = firestore().collection('family').doc('family1').collection('interaction');

export function createAnswer({user, member, answer, questionDocId}) {
    let key = user.info;
    let temp = {};
    let makeArrayObject = [];
    for(let i =0; i< member.length; i++){
        temp.info = member[i].info
        temp.isAnswered = false,
        makeArrayObject.push({...temp})
    }
    const result = {
        id: user.id,
        info: user.info,
        answer: answer,
        createdAt: firestore.FieldValue.serverTimestamp()
    }
    //답변한 사용자의 isAnswered값을 true로 갱신
    const check = makeArrayObject.map(item => item.info === user.info ? {...item, isAnswered: true} : item);

    return interactionCollection.doc(questionDocId).set({
        answer : firestore.FieldValue.arrayUnion({
            id: user.id,
            info: user.info,
            answer: answer,
            createdAt: firestore.Timestamp.now()
        }),
        // answer: [
        //     {
        //         [key]:{
        //             id: user.id,
        //             info:user.info,
        //             answer: answer,
        //         }
        //     }
        // ],
        check
    },{merge:true})
}