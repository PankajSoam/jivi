import { useContext, useEffect, useState } from "react"
import { vitalsFormContext } from "../../App"
import { parsePreviewData } from "./Preview.helper"
import WidgetWrapper from "../../hocComponents/widgetWrapper/WidgetWrapper"

const Preview = ({primaryCtaHandler, secondaryCtaHandler})=>{
    const [previewData,setPreviewData] = useState([])
    const vitals = useContext(vitalsFormContext)


    useEffect(()=>{
        setPreviewData(parsePreviewData(vitals?.vitalValues))
    },[])

    const sendData = async ()=>{
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
                vitalData: vitals?.vitalValues
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            })
            .then((response) => {
                if(response.status==201){
                    primaryCtaHandler()
                }
            })
    }


    return <WidgetWrapper title="Preview" primaryBtn={{label:"Submit", onClick:sendData}} secondaryBtn={{label:"Edit", onClick:secondaryCtaHandler}}>
        <div>
        <p className="font-semibold text-base mb-8">Please confirm your details to continue.</p>
        <ul>
            {previewData && previewData.map((data)=>{
                return<li className="flex py-3">
                    <p className="w-2/4 font-bold text-base">{data?.label}</p>
                    {data?.url ? <audio controls>
                                    <source src={data?.url} type="audio/ogg"/>
                                </audio>: <p className="font-medium text-base">{data?.value}</p>}
                    </li>
            })}
        </ul>
    </div>
    </WidgetWrapper>
}

export default Preview