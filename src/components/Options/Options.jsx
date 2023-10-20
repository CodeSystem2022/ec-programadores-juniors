import './Options.scss';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

const Options = () => {
    return (
        <div className='options-container d-flex justify-content-around align-items-center'>
            <div className='category-div'>
                <p className='option-text'>
                    Categoria
                </p>
            </div>

            <Dropdown className='filter-button'>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Filtrar
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            <Dropdown className='order-button'>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Ordenar por
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>

        </div>
    )
}

export default Options;