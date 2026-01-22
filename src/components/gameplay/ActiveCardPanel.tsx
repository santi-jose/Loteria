type ActiveCardProps = {
    id: number,
    name: string,
    description: string,
    image: string
}

export default function ActiveCardPanel({id, name, description, image}: ActiveCardProps){
    return(
        <div>
            <img src={image}/>
            <div>
                {"["+id+"] "+ name }
            </div>
        </div>
    );
}