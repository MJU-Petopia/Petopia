import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { onPetnameChanged, onKindChanged, onSpeciesChanged, onGenderChanged, onNeuteringChanged, onBirthChanged, onPetImageChanged } from '../modules/PetAddInfo';
import { addPetAsync, editPetAsync } from '../modules/Profile';
import AddPetComponent from '../components/AddPet/AddPetComponent';
import { getPetdetailAsync } from '../modules/PetAddInfo';
import { useParams } from 'react-router-dom';
import LoadingComponent from '../components/Loading/LoadingComponent';


const AddPetContainer = ({
    name, 
    kind, 
    species, 
    gender, 
    neutering, 
    birth,
    petImage,
    vaccinationList,
    loading,
    onPetnameChanged,
    onKindChanged,
    onSpeciesChanged,
    onGenderChanged,
    onNeuteringChanged,
    onBirthChanged,
    onPetImageChanged,
    addPetAsync,
    getPetdetailAsync,
    editPetAsync
}) => {

    const param = useParams();

    useEffect(() => {
        if (param.id) {
            getPetdetailAsync(param.id)
        }
    },[])

    return !loading ? (
        <AddPetComponent 
            name={name}
            species={species}
            kind={kind}
            gender={gender}
            neutering={neutering}
            birth={birth}
            vaccinationList={vaccinationList}
            petImage={petImage}
            onPetnameChanged={onPetnameChanged}
            onKindChanged={onKindChanged}
            onSpeciesChanged={onSpeciesChanged}
            onGenderChanged={onGenderChanged}
            onNeuteringChanged={onNeuteringChanged}
            onBirthChanged={onBirthChanged}
            onPetImageChanged={onPetImageChanged}
            onPetAdded={addPetAsync}
            onPetEditted={editPetAsync}
        />
    ) : <LoadingComponent/>;
};

export default connect(({PetAddInfo, Loading}) => ({
    name: PetAddInfo.name,
    kind: PetAddInfo.kind,
    species: PetAddInfo.species,
    gender: PetAddInfo.gender,
    neutering: PetAddInfo.neutering,
    birth: PetAddInfo.birth,
    vaccinationList: PetAddInfo.vaccinationList,
    petImage: PetAddInfo.petImage,
    loading: Loading["PetAddInfo/GET_PETDETAIL"]
}),{
    onPetnameChanged,
    onKindChanged,
    onSpeciesChanged,
    onGenderChanged,
    onNeuteringChanged,
    onBirthChanged,
    onPetImageChanged,
    addPetAsync,
    editPetAsync,
    getPetdetailAsync,
})(AddPetContainer);