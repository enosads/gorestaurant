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

type ModalAddFoodProps = {
    isOpen: boolean;
    setIsOpen: () => void,
    handleAddFood: (data: AddFood) => void
}

export function ModalAddFood(props: ModalAddFoodProps) {
    const formRef = useRef<FormHandles>(null);
    const handleSubmit = async (data: AddFood) => {
        props.handleAddFood(data);
        props.setIsOpen();
    };

    return (
        <Modal isOpen={props.isOpen} setIsOpen={props.setIsOpen}>
            <Form ref={formRef} onSubmit={handleSubmit}>
                <h1>Novo Prato</h1>
                <Input name="image" placeholder="Cole o link aqui"/>

                <Input name="name" placeholder="Ex: Moda Italiana"/>
                <Input name="price" placeholder="Ex: 19.90"/>

                <Input name="description" placeholder="Descrição"/>
                <button type="submit" data-testid="add-food-button">
                    <p className="text">Adicionar Prato</p>
                    <div className="icon">
                        <FiCheckSquare size={24}/>
                    </div>
                </button>
            </Form>
        </Modal>
    );
}


