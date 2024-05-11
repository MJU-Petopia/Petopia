import { connect } from "react-redux"
import { onBodypartChanged, onSpeciesChanged, onFileChanged} from "../modules/AIdiagnosis"
import AIdiagnosisComponent from "../components/AIdiagnosis/AIdiagnosisComponent"
import { useCallback } from "react"
import { useNavigate } from "react-router-dom"

const AIdiagnosisContainer = ({species, bodypart, file, onFileChanged, onSpeciesChanged, onBodypartChanged}) => {

    const navigate = useNavigate();

    const onButtonClicked = useCallback(()=> {
        if (file) {
            navigate('/result')
        }
    }, [file, navigate]);

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
        onFileChanged
    }
)(AIdiagnosisContainer)