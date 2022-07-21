import firestore from '@react-native-firebase/firestore';

export const familyCollection = firestore().collection('family');

/** 
    CREATE: 가족 생성을 위한 firestore API
    * 가족 구성원 초대 기능을 약식으로 구현
    * ChatScreen에 현재 등록된 사용자 정보를 조회
    * 호스트로 가정한 사용자가 ChatScreen에서 커뮤니티 생성을 실행하면 family 컬렉션
      내부에 하나의 가족에 대한 문서(family1)가 생성
    * 실제 초대 기능을 도입하면 해당 함수는 전면 수정 및 삭제 예정
    * temp  check를 생성하기 위한 임시 변수
    * check 가족 구성원의 정보와 답변 여부를 확인할 수 있는 배열로 데이터베이스에 저장
    @params {string} familyId: 가족 고유 식별 번호
    @params {string} id: 가족 구성원의 고유 식별 번호
    @params {string} info: 가족 구성원의 닉네임
*/
export function createFamily({ familyId, id, info }) {
    return familyCollection.doc('family1').collection('member').add({
        familyId,
        id,
        info,
        isFamilyCreated: true
    });
}

/** 
    READ: 가족 생성 여부 조회를 위한 firestore API
    * 가족 생성 시 생성 여부에 대한 boolean값이 true로 초기화
    @params {string} id: 현재 로그인한 사용자 고유 식별 번호
    @return 사용자의 가족 생성 여부 
*/
export async function getIsCreatedFamily(id) {
    const snapshot = await familyCollection.doc('family1').collection('member').where('id', '==', id).get();
    const result = snapshot.docs.map((docs) => {
        return docs.data().isFamilyCreated;
    });
    return result;
}

/** 
    READ: 가족 고유 식별 조회 firestore API
    @params {string} id: 현재 로그인한 사용자 고유 식별 번호
    @return 가족 고유 식별 번호 
*/
export async function getFamilyId(id) {
    const snapshot = await familyCollection.doc('family1').collection('member').where('id', '==', id).get();
    const result = snapshot.docs.map((docs) => {
        return docs.data().familyId;
    });
    return result;
}