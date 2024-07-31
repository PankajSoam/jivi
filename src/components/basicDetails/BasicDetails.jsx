import { useContext, useEffect, useState } from "react"
import FromFieldWrapper from "../../hocComponents/formFieldWrapper/FormFieldWrapper"
import InputWithIcon from "../inputWithIcon/InputWithIcon"
import { vitalsFormContext } from "../../App"

import { SlCalender } from "react-icons/sl";
import SelectDropDown from "../selectDropDown/SelectDropDown";
import WidgetWrapper from "../../hocComponents/widgetWrapper/WidgetWrapper";
import SlideBarInput from "../slideBarInput/SlideBarInput";

const BasicDetails = ({primaryCtaHandler})=>{
    const [name,setName] = useState("")
    const [gender,setGender] = useState("male")
    const [showDropdown,setShowDropdown]= useState(false)
    const [date,setDate]= useState()
    const [heartRate,setHeartRate] = useState(75)
    const [bpSystolic,setBpSystolic] = useState(132)
    const [bpDiastolic,setBpDiastolic] = useState(70)

    const vitals = useContext(vitalsFormContext)

    useEffect(()=>{
        setName(vitals?.vitalValues?.name)
        setGender(vitals?.vitalValues?.gender)
        setDate(vitals?.vitalValues?.date)
        setHeartRate(vitals?.vitalValues?.heartRate)
        setBpDiastolic(vitals?.vitalValues?.bpDiastolic)
        setBpSystolic(vitals?.vitalValues?.bpSystolic)

    },[])

    const handleNextClick = ()=>{
        primaryCtaHandler()
        vitals?.onChangeHandler({
            name,
            gender,
            date,
            heartRate,
            bpSystolic,
            bpDiastolic
        })
    }

    const handleSliderChange = (category,value)=>{
        switch (category){
            case "heartRate": setHeartRate(value)
                break;
            case "bpSystolic": setBpSystolic(value)
                break;
            case "bpDiastolic": setBpDiastolic(value)
                break;
            default: return
        }
    }

    return <WidgetWrapper title="Details" primaryBtn={{label:"Next", onClick:handleNextClick, disabled: !(name&&date&&gender)}}  >
            <div className="flex-col">
                    <SlideBarInput 
                        color='#0F67FE' 
                        minValue={60} 
                        maxValue={120} 
                        label='Heart Rate'
                        leftLabel='60'
                        rightLabel='>120'
                        stepSize={15}
                        value={heartRate}
                        handleChange={(value)=>handleSliderChange("heartRate",value)}
                        />

                    <SlideBarInput 
                        color='#FA4D5E' 
                        minValue={120} 
                        maxValue={150} 
                        label='Blood Pressure'
                        leftLabel='<=120'
                        rightLabel='>150'
                        stepSize={6}
                        value={bpSystolic}
                        handleChange={(value)=>handleSliderChange("bpSystolic",value)}
                        />


                    <SlideBarInput 
                        color='#FA4D5E' 
                        minValue={60} 
                        maxValue={80} 
                        leftLabel='<60'
                        rightLabel='>80'
                        stepSize={5}
                        value={bpDiastolic}
                        handleChange={(value)=>handleSliderChange("bpDiastolic",value)}
                        />


                {/* name field */}
                <FromFieldWrapper className="mb-2" label="Name"  required>
                    <InputWithIcon placeholder="Please enter your name" value={name} onChange={e=>setName(e.target.value)}/>
                </FromFieldWrapper>
                {/* dob field */}
                <FromFieldWrapper className="mb-2" label="Date of birth" required>
                    <div className="flex p-4 bg-gray-100 rounded-lg">
                        <SlCalender style={{ height: '24px', width: '24px' }}/>
                        <input type="date" value={date} onChange={e=>setDate(e.target.value)} className="w-full ml-2 bg-gray-100" />        
                    </div>
                </FromFieldWrapper>
                {/* gender field */}
                <FromFieldWrapper className="mb-2" label="Date of birth" required>
                    <SelectDropDown
                        value={gender}
                        options={["male","female","other"]}
                        onSelect={(value)=>setGender(value)}
                        toggleDropDown={()=>setShowDropdown(!showDropdown)}
                        dropDownVisible={showDropdown}
                    />
                </FromFieldWrapper>
            </div>
    </WidgetWrapper>
}

export default BasicDetails