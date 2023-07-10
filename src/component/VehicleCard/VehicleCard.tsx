import 'component/VehicleCard/VehicleCard.scss';

function VehicleCard(props: {imageSrc: string}) {
    return (
        <div className='vehicle-card'>
            <img
                src={props.imageSrc}
                alt=""
                className='vehicle-card__image' />
            <section className='vehicle-card__details'>
                <p>Mercedes-Benz</p>
                <p>M1</p>
            </section>
        </div>
    )
}

export default VehicleCard;