import './Modal.css';
import React, { useEffect } from "react";
import { createPortal } from "react-dom";

type ModalProps = {
    children: React.ReactNode,
    onClose: () => void
}

function Modal({children, onClose}: ModalProps){
    const modalRoot = document.getElementById('modal-root') as HTMLElement;

    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if(e.key === "Escape") onClose();
        };

        document.addEventListener("keydown", handleEsc);
        document.body.style.overflow = "hidden";

        return () => {
            document.removeEventListener("keydown", handleEsc);
            document.body.style.overflow = "auto";
        };
    }, [onClose]);

    return createPortal(
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal" onClick={(e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation()}>
                {children}
            </div>
        </div>,
        modalRoot
    );
}

export default Modal