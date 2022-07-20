import firestore from '@react-native-firebase/firestore';

export const familyCollection = firestore().collection('family');

//CREATE : 가족 생성 API
//약식으로 초대 기능 구현하기 위해 작성 --> 초대 기능 활성화 시 해당 함수 전면 수정 혹은 삭제 필요
export function createFamily({ familyId, id, info }) {
    return familyCollection.doc('family1').collection('member').add({
        familyId,
        id,
        info,
        isFamilyCreated: true
    });
}

//READ: 모든 가족 생성 여부 조회 API
//약식으로 초대 기능 구현하기 위해 작성 --> 초대 기능 활성화 시 해당 함수 전면 수정 혹은 삭제 필요
export async function getIsCreatedFamily(id) {
    const snapshot = await familyCollection.doc('family1').collection('member').where('id', '==', id).get();
    const result = snapshot.docs.map((docs) => {
        return docs.data().isFamilyCreated;
    });
    return result;
}

//READ: 가족 고유번호 조회 API
export async function getFamilyId(id) {
    const snapshot = await familyCollection.doc('family1').collection('member').where('id', '==', id).get();
    const result = snapshot.docs.map((docs) => {
        return docs.data().familyId;
    });
    return result;
}