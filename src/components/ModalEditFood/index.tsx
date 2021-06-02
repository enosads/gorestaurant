import {useRef} from 'react';
import {FiCheckSquare} from 'react-icons/fi';

import {Form} from './styles';
import {Modal} from '../Modal';
import {Input} from '../Input';
import {FormHandles} from "@unform/core";


type AddFood = {
    image: string,
    name: string,
    price: string
    description: string
}
type FoodModel = {
    id: number,
    name: string,
    description: string,
    price: string,
    available: boolean,
    image: string
}

type ModalEditFoodProps = {
    isOpen: boolean;
    setIsOpen: () => void,
    handleUpdateFood: (data: AddFood) => void
    editingFood: FoodModel
}

export function ModalEditFood(props: ModalEditFoodProps) {
    const formRef = useRef<FormHandles>(null);
    const handleSubmit = async (data: AddFood) => {
        props.handleUpdateFood(data);
        props.setIsOpen();
    };
    return (
        <Modal isOpen={props.isOpen} setIsOpen={props.setIsOpen}>
            <Form ref={formRef} onSubmit={handleSubmit} initialData={props.editingFood}>
                <h1>Editar Prato</h1>
                <Input name="image" placeholder="Cole o link aqui"/>

                <Input name="name" placeholder="Ex: Moda Italiana"/>
                <Input name="price" placeholder="Ex: 19.90"/>

                <Input name="description" placeholder="Descrição"/>

                <button type="submit" data-testid="edit-food-button">
                    <div className="text">Editar Prato</div>
                    <div className="icon">
                        <FiCheckSquare size={24}/>
                    </div>
                </button>
            </Form>
        </Modal>
    );
}

