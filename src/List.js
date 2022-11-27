import React from 'react'

const List = ({people}) => {
    return(
        <>
        {people.map((person)=>{
        const {id,name,age,image} = person
        return(
            <div key={id} className="py-3 sm:py-4 person">
                <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                        <img src={image} alt={name}/>
                    </div>
                    <div>
                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                            {name}
                        </p>
                    </div>
                </div>
            </div>
        )})
        }
        </>
    )
}

export default List