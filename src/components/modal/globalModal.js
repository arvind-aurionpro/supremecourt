import React from 'react';
import { Col, Modal, Row } from 'react-bootstrap';
import { GlobalButton } from '../button/globalButton';
const GlobalModal = React.memo(({ ...props }) => {
    const { message, btn1Name, btn1CallBack, btn2Name, btn2CallBack, type, jsxElement } = props;
    let { btn1ClassName, btn2ClassName } = props;
    btn1ClassName = `btn mt-3 existAccountBtn ${btn1ClassName || 'outline-btn'}`;
    btn2ClassName = `btn mt-3 ms-lg-3 ${btn2ClassName || 'green-btn'}`;
    const btnClicked = (p_sType) => {
        switch (p_sType) {
            case "yes":
                btn1CallBack && btn1CallBack();
                break;
            case "no":
                btn2CallBack && btn2CallBack();
                break;
            default:
                break;
        }
        
    }
    const getImgElement = () => {
        let img = null;
        switch (type) {
            case "act_balance_check":
            
            case "api_success_handling":
                img = <img src="img/right-icon.svg" alt="" className="w-50 h-50" />
                break;

            case "api_failed_handling":
                img = <img src="/img/user-creation-error-icon.svg" alt="" className="w-50 h-50" />
                break;

           
            default:
                break;
        }
        return img;
    }
    return (
        <div>
            <Modal show={props.showModal} centered className="myapp-sucess">
                <Modal.Body className="modal-body">
                    <Row>
                        <Col md={12} className="text-center p-5">
                            <div>
                                {getImgElement()}
                                {message ?
                                    <h4 className="pt-4">
                                        {message || ""}
                                    </h4> : null}
                                {jsxElement}
                            </div>
                            {btn1Name ?
                                <GlobalButton
                                    className={btn1ClassName}
                                    text={btn1Name}
                                    callback={() => {
                                        btnClicked("yes");
                                    }}
                                /> : null}
                            {btn2Name ?
                                <GlobalButton
                                    className={btn2ClassName}
                                    text={btn2Name}
                                    callback={() => {
                                        btnClicked("no");
                                    }}
                                /> : null}
                        </Col>
                    </Row>
                </Modal.Body>
            </Modal>
        </div>
    )
})

export { GlobalModal }