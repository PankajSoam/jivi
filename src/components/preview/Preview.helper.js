export const  parsePreviewData = (inputFieldsData)=>{
    const parsedData = [
        {
            label:"Name:",
            value:inputFieldsData.name
        },
        {
            label:"Blood Pressure:",
        },
        {
            label:"Systolic: ",
            value:inputFieldsData.bpSystolic
        },
        {
            label:"Diastolic:",
            value:inputFieldsData.bpDiastolic
        },
        {
            label:"Heart Rate:",
            value:inputFieldsData.heartRate
        },
        {
            label:"Date of Birth:",
            value:inputFieldsData.date
        },
        {
            label:"Gender:",
            value:inputFieldsData.gender
        },
        {
            label:"Age:",
            value:inputFieldsData.age
        },
        {
            label:"Custom Message:",
            url:inputFieldsData.audio
        },

    ]

    return parsedData
}