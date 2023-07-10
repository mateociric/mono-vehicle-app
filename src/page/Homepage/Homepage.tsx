import 'page/Homepage/Homepage.scss';
import VehicleCard from "component/VehicleCard/VehicleCard";

function Homepage() {
    return (
        <div className="grid">
            <VehicleCard imageSrc='https://di-uploads-pod1.dealerinspire.com/mercedesbenzofnortholmsted/uploads/2017/08/2018-GT-C2.jpg' />
            <VehicleCard imageSrc='https://images.unsplash.com/photo-1556189250-72ba954cfc2b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Ym13fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60' />
            <VehicleCard imageSrc='https://images.unsplash.com/photo-1607853554439-0069ec0f29b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=627&q=80' />
        </div>
    )
}

export default Homepage;