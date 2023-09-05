import Card from './Card';

export default function Cards(props) {
    console.log(props);
    return(
        <div>
        {        
        
            props.characters.map((caracter,index) => {
        return(    
        <Card key={index}
            name={caracter.name}
            status={caracter.status}
            species={caracter.species}
            gender={caracter.gender}
            origin={caracter.name.origin}
            image={caracter.image} 
        />
            );
        })
        
        }  


            
        </div>
    );
}
