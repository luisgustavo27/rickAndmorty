import React from 'react'

const Pagination = ({prev,next,onPrevious,onNext}) => {

    const handlePrevios = ()=>{
        onPrevious();
    }

    const handleNext = ()=>{
        onNext();
    }
    return (
        <nav className='my-5'>
            <ul className='pagination justify-content-center'> 
                {prev? (
                    <li className='page-item'>
                        <button className='page-link' onClick={handlePrevios}>Anterior</button>
                    </li>
                    ): null}
                {next? (
                     <li className='page-item'>
                        <button className='page-link' onClick={handleNext}>Siguiente</button>
                    </li>
                ):null}
            </ul>
        </nav>
    )
}

export default Pagination
