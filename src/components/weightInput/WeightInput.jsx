import WidgetWrapper from "../../hocComponents/widgetWrapper/WidgetWrapper"

const WeightInput = ({primaryCtaHandler})=>{
    return <WidgetWrapper title="Details" primaryBtn={{label:"Next", onClick:primaryCtaHandler}} >

        <div>weight</div>
    </WidgetWrapper>
}

export default WeightInput