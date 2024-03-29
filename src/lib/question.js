import firestore from '@react-native-firebase/firestore';
import {v4 as uuidv4} from 'uuid';

export const interactionCollection = firestore().collection('family').doc('family1').collection('interaction');


/** 
    CREATE: 질문 생성을 위한 firestore API
    * temp  check를 생성하기 위한 임시 변수
    * check 가족 구성원의 정보와 답변 여부를 확인할 수 있는 배열로 데이터베이스에 저장
    @params {object} user: 현재 로그인한 사용자 정보
    @params {object} member: 전체 가족 구성원 정보
    @params {object} question: 질문 내용
*/
export function createQuestion({user, member, question}) {
    const questionDocId = uuidv4();
    let temp = {};  
    let check = [];  
    for(let i =0; i< member.length; i++){
        temp.info = member[i].info
        temp.isAnswered = false,
        check.push({...temp})
    }
    return interactionCollection.doc(questionDocId).set({
        from:{
            id: user.id,
            info: user.info,
            photoURL: user.photoURL
        },
        questionId: questionDocId,
        question: question,
        check,
        createdAt: firestore.FieldValue.serverTimestamp(),
    });
}

/** 
    READ: 질문 조회를 위한 firestore API
    * 현재 로그인한 사용자가 보낸 질문은 자신의 홈화면에서 확인할 수 없음
    * 답변한 질문은 자신의 홈화면에서 확인할 수 없음
    @params {string} id: 현재 로그인한 사용자 고유 식별 번호
    @return 데이터베이스에서 조건에 부합하는 질문 리스트
*/
export async function getQuestion(id){
    const snapshot = await interactionCollection.orderBy('createdAt', 'desc').get()
    const result = snapshot.docs.filter((item) => {
        return item.data().from.id != id 
    }).map((item) => {
        return item.data();
    })
    return result;
}

/**
    READ: 최근 등록된 질문 조회를 위한 firestore API
 */
export async function getNewerQuestion(id){
    const cursorDoc = await interactionCollection.doc(id).get();
    const snapshot = await interactionCollection
    .orderBy('createdAt', 'desc')
    .endBefore(cursorDoc)
    .get();
    console.log('DEBUG:', snapshot);
    const result = snapshot.docs.filter((docs) => {
        return docs.data();
    })
    console.log('DEBUG:', result);
    return result;
}

/**
    READ: 답변 등록이 완료된 질문 조회를 위한 firestore API
 */
export async function getCompleteQuestion(){

}

/** 
    READ: 등록된 질문 유/무 판별을 위한 firestore API
    * 사용자들이 처음 서비스를 시작할 경우 등록된 질문이 하나도 없을 때, 시스템이 어떤 VIEW를 보여줄지 
    판단할 수 있어야 함
    @return 등록된 질문이 하나도 없을 경우 false
*/
export async function getsIsQuestioned(){
    const isQuestioned = interactionCollection.get()
    if((await isQuestioned).empty){
        return false;
    }
    return true;
}


















