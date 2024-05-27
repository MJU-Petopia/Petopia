import { connect } from "react-redux"
import { onBodypartChanged, onSpeciesChanged, onFileChanged, getResultAsync} from "../modules/AIdiagnosis"
import AIdiagnosisComponent from "../components/AIdiagnosis/AIdiagnosisComponent"
import { useCallback } from "react"
import { useNavigate } from "react-router-dom"

const AIdiagnosisContainer = ({species, bodypart, file, onFileChanged, onSpeciesChanged, onBodypartChanged, getResultAsync}) => {

    const navigate = useNavigate();

    const onButtonClicked = useCallback(()=> {
        if (file) {
            const reader = new FileReader();
            reader.onload = async () => {
                const base64Image = reader.result.split(',')[1];

                const data = {
                    image_base64: base64Image,
                    category: bodypart,
                    animal: species,
                };

                getResultAsync([data]);
                navigate('/result');
            }
        reader.readAsDataURL(file);
        }
    }, [file, getResultAsync, bodypart, species]);

    const onFileChange = (file) => {
        if (file) {
            onFileChanged(file)
        } else {
            onFileChanged(null)
        }
    }

    return (
        <>
            <AIdiagnosisComponent species={species} bodypart={bodypart} file={file} onSpeciesChange={onSpeciesChanged} onBodypartChange={onBodypartChanged} onFileChange={onFileChange} onButtonClicked={onButtonClicked}/>
        </>
    )
}

export default connect(
    ({AIdiagnosis}) => ({
        species: AIdiagnosis.species,
        bodypart: AIdiagnosis.bodypart,
        file: AIdiagnosis.file
    }),
    {
        onBodypartChanged,
        onSpeciesChanged,
        onFileChanged,
        getResultAsync
    }
)(AIdiagnosisContainer)