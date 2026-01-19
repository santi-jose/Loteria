type DisplayCardProps = {
        id: number,
        name: string,
        description: string,
        image: string
};

export default function DisplayCard(DisplayCardProps: DisplayCardProps){

    return(
        <>
            <img src={DisplayCardProps.image} />
            <div>
                ID: {DisplayCardProps.id}
            </div>
            <div>
                Name: {DisplayCardProps.name}
            </div>
            {/* <div>
                Description: {DisplayCardProps.description}
            </div> */}
        </>
    );
}