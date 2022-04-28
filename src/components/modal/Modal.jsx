import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';

import './modal.scss';

Modal.propTypes = {
    active: PropTypes.bool,
    id: PropTypes.string,
};

function Modal(props) {
    const [active, setActive] = useState(false);

    useEffect(() => {
        setActive(props.active)
    }, [props.active]);

    return (
        <div id={props.id} className={`modal ${active ? 'active' : ''}`}>
            {props.children}
        </div>
    );
}

export const ModalContent = props => {

    const contentRef = useRef(null)
    const closeModal = () => {
        contentRef.current.parentNode.classList.remove('active');
        if (props.onClose) props.onClose();
    }

    return (
        <div ref={contentRef} className='modal__content'>
            {props.children}
            <div className='modal__content__close' onClick={closeModal}>
                <i className='far fa-window-close'></i>
            </div>
        </div >
    )
}

ModalContent.propTypes = {
    onClose: PropTypes.func,
}

export default Modal;