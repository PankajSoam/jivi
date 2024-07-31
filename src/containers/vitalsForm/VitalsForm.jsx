import { useContext, useState } from "react"
import { vitalsFormContext } from "../../App"

import AgeInput from "../../components/ageInput/AgeInput";
import BasicDetails from "../../components/basicDetails/BasicDetails";
import Preview from "../../components/preview/Preview";
import VoiceInput from "../../components/voiceInput/VoiceInput";
import Success from "../../components/success/Success";

const VitalsForm = (props)=>{
    const [currentStep,setCurrentStep] = useState(1)
    const vitals = useContext(vitalsFormContext)

    const changeCurrentStep = (value)=>{
        setCurrentStep(value)
    }

    const getCurrentStepComponent=(step,changeCurrentStep)=>{
        switch (step){
            case 1: return <BasicDetails primaryCtaHandler={()=>changeCurrentStep(2)}/>;
            case 2: return <AgeInput primaryCtaHandler={()=>changeCurrentStep(3)}/>;
            case 3: return <VoiceInput primaryCtaHandler={()=>changeCurrentStep(4)}/>;
            case 4: return <Preview changeCurrentStep={changeCurrentStep} primaryCtaHandler={()=>changeCurrentStep(5)} secondaryCtaHandler={()=>changeCurrentStep(1)}/>;;
            case 5: return <Success changeCurrentStep={changeCurrentStep} primaryCtaHandler={()=>changeCurrentStep(1)} />;
        }
    }
    


    return <div className="">
        {getCurrentStepComponent(currentStep,changeCurrentStep)}
    </div>

}
export default VitalsForm