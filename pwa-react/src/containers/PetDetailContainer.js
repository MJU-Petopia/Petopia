import React, { useEffect } from 'react';
import PetDetailComponent from '../components/PetDetail/PetDetailComponent';
import { connect } from 'react-redux';
import { getPetdetailAsync } from '../modules/PetDetail';
import { useParams } from 'react-router-dom';
import { deletePetAsync } from '../modules/Profile';

const PetDetailContainer = ({
    type,
    name,
    gender,
    neutering,
    kind,
    birthday,
    vaccinationList,
    loading,
    getPetdetailAsync,
    deletePetAsync
}) => {

    const params = useParams();
    const id = params.id;
    useEffect(() => {
        getPetdetailAsync(id)
    },[id])

    return (
        <PetDetailComponent 
            type={type}
            name={name}
            gender={gender}
            neutering={neutering}
            kind={kind}
            birthday={birthday}
            vaccinationList={vaccinationList}
            loading={loading}
            onDeleteClicked={deletePetAsync}
        />
    );
};

export default connect(({PetDetail, Loading}) => ({
    type: PetDetail.petType,
    name: PetDetail.name,
    gender: PetDetail.gender,
    neutering: PetDetail.neutering,
    kind: PetDetail.kind,
    birthday: PetDetail.birthday,
    vaccinationList: PetDetail.vaccinationList,
    loading: Loading['PetDetail/GET_PETDETAIL']
}),{
    getPetdetailAsync,
    deletePetAsync
    
})(PetDetailContainer);