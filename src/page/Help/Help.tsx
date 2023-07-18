import 'page/Help/Help.scss';

function Help() {

    return (
        <>
            <article>
                <h1>Loading cars</h1>
                <p>
                    The application is continuously monitoring cars in the Homepage and saving them in the database. When the application is started for the first time, all cars, which exist in the database will be automatically loaded.
                </p>
            </article>
            <article>
                <h1>Create new car</h1>
                <p>
                    A new car can be created from the Menu, by clicking on the button Create car. All you need is to select the car brand and car model from the Car section. All created cars are presented as cards in the Hompage.
                </p>
            </article>
            <article>
                <h1>Delete car</h1>
                <p>
                    Each car card in the Homepage has to recycle bin icon, which indicates that it can be deleted at any time, by clicking on it.
                </p>
            </article>
            <article>
                <h1>Update car</h1>
                <p>
                    By clicking on the car card, in the Homepage, you are able to change the car brand, model and image. Only what you need, is to pick up the wishing car brand and model from the Menu under the Car section and provide the appropriate URL for the car image.
                </p>
            </article>
            <article>
                <h1>Update car list & model</h1>
                <p>
                    In the Update car list, you can update the car brand list for the new items as well as the car model list. But, before you will click Add or Delete button you must provide a name to tell the application which brand or model you want to add or delete.
                </p>
            </article>
            <article>
                <h1>Searching and sorting cars</h1>
                <p>
                    The application supports searching for cars in the Homepage. You must first enter the brand, and then the model, in the Menu under the Search car section, to find the car. Cars in the Homepage can be sorted in three different ways, by choosing the following sorting options: id, brand or model, under the Sort car section.
                </p>
            </article>
        </>
    )
}

export default Help;