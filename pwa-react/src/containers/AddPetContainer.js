import React from 'react';
import { connect } from 'react-redux';
import { onPetnameChanged, onKindChanged, onSpeciesChanged, onGenderChanged, onNeuteringChanged, onBirthChanged, onPetImageChanged } from '../modules/PetAddInfo';
import { onPetAdded } from '../modules/Profile';
import AddPetComponent from '../components/AddPet/AddPetComponent';

const AddPetContainer = ({
    name, 
    kind, 
    species, 
    gender, 
    neutering, 
    birth,
    petImage,
    onPetnameChanged,
    onKindChanged,
    onSpeciesChanged,
    onGenderChanged,
    onNeuteringChanged,
    onBirthChanged,
    onPetImageChanged,
    onPetAdded,
}) => {
    return (
        <AddPetComponent 
            name={name}
            species={species}
            kind={kind}
            gender={gender}
            neutering={neutering}
            birth={birth}
            petImage={petImage}
            onPetnameChanged={onPetnameChanged}
            onKindChanged={onKindChanged}
            onSpeciesChanged={onSpeciesChanged}
            onGenderChanged={onGenderChanged}
            onNeuteringChanged={onNeuteringChanged}
            onBirthChanged={onBirthChanged}
            onPetImageChanged={onPetImageChanged}
            onPetAdded={onPetAdded}
        />
    );
};

export default connect(({PetAddInfo}) => ({
    name: PetAddInfo.name,
    kind: PetAddInfo.kind,
    species: PetAddInfo.species,
    gender: PetAddInfo.gender,
    neutering: PetAddInfo.neutering,
    birth: PetAddInfo.birth,
    petImage: PetAddInfo.petImage
}),{
    onPetnameChanged,
    onKindChanged,
    onSpeciesChanged,
    onGenderChanged,
    onNeuteringChanged,
    onBirthChanged,
    onPetImageChanged,
    onPetAdded,
})(AddPetContainer);