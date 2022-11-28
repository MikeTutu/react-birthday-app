import React from 'react'

const List = ({people}) => {

const [persons, setPerson] = React.useState(people)
const removeItem=(id)=>{
    let newPeople = persons.filter((person) => person.id !== id);
    setPerson(newPeople)
    console.log(newPeople)
}
    return(
        <>
        {people.map((person)=>{
        const {id,name,age,image} = person
        return(
            <div key={id} className="py-3 sm:py-4 person">
                <div className="flex items-center">
                    <div className='flex items-center'>
                        <div className="flex-shrink-0">
                            <img src={image} alt={name}/>
                        </div>
                        <div className='ml-5'>
                            <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                {name}
                            </p>
                        </div>
                    </div>
                </div>
                <div>
                    <p className='float-right cursor-default' onClick={()=>removeItem(id)}>remove</p>
                </div>
            </div>
        )})
        }
        </>
    )
}

export default List