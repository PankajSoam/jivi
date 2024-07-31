import WidgetWrapper from "../../hocComponents/widgetWrapper/WidgetWrapper"

const Success = ({primaryCtaHandler})=>{
    return <WidgetWrapper title="Success" primaryBtn={{label:"Submit again", onClick:primaryCtaHandler}} >
        <div className="h-[70vh]">Thank you.Your details are saved successfully.</div>

        </WidgetWrapper>
}
export default Success