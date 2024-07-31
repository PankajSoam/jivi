import { useContext, useEffect, useState } from "react";
import { useReactMediaRecorder } from "react-media-recorder";
import WidgetWrapper from "../../hocComponents/widgetWrapper/WidgetWrapper";

import { IoMicOutline } from "react-icons/io5";
import { FaRegCircleStop } from "react-icons/fa6";
import { vitalsFormContext } from "../../App";

const VoiceInput = ({primaryCtaHandler}) => {
    const vitals = useContext(vitalsFormContext)

    const { status, startRecording, stopRecording, mediaBlobUrl } =
    useReactMediaRecorder({ audio: true });

    useEffect(()=>{
        if(status=="stopped"){
            vitals?.onChangeHandler({
                audio: mediaBlobUrl //todo : this is a temp blob url have to replace it with presigned url but since upload service is not available
              })
            primaryCtaHandler()
        }
    },[status])

    return <WidgetWrapper title="Details" >
       <div>
                <p className="text-3xl font-extrabold mb-12">Record your custom message.</p>
                <p className="text-3xl font-extrabold mb-12 text-blue-500 h-40">{status=="recording" ? "Recording in progress.." : "Start recording" }</p>

                <div className="flex flex-col items-center">
                    {status=="recording" ? 
                        <>
                            <button className="h-40 w-40 rounded-full bg-red-600 text-white flex justify-center items-center mb-6" 
                            onClick={stopRecording}>
                                <FaRegCircleStop style={{ height: '48px', width: '48px' }}/>
                                </button><p className="font-bold text-lg text-red-600">Press to STOP recording</p></> : 
                        <>
                            <button className="h-40 w-40 rounded-full bg-blue-500 text-white flex justify-center items-center mb-6" 
                            onClick={startRecording}>
                                <IoMicOutline style={{ height: '48px', width: '48px' }}/>
                                </button>
                                <p className="font-bold text-lg text-blue-500">Press to START recording</p></>
                    }
                </div>
        </div>
  </WidgetWrapper>
}

export default VoiceInput