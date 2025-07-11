import React, { useState } from 'react';
import {Modal, Form, Button, Tab, Tabs} from 'react-bootstrap';

export function ModalWindow({show, close})
{
    const [key, setKey] = useState('login');

    const getTitle = () =>
    {
        return key === 'login' ? 'Авторизація': 'Реєстрація'
    };

    return (
        <>
            <Modal show={show} onHide={close} centered>
                <div className='d-flex justify-content-between align-items-center px-4 pt-3'>
                    <h5
                        className='m-0 text-primary'
                        style=
                        {{
                            color: '#00aaff',
                            paddingLeft: '150px',
                            fontSize: '25px',
                            textAlign: 'center',
                            paddingBottom: '15px'
                        }}>{getTitle()}</h5>
                    <button
                        type='button'
                        className='btn-close'
                        aria-label='Close'
                        style={{top: '10px', right: '15px'}}
                        onClick={close}
                    >

                    </button>
                </div>

                <Modal.Body>
                        <Tabs
                            id='auth-tabs'
                            activeKey={key}
                            onSelect={(k) => setKey(k)}
                            className='mb-3 justify-content-center'
                        >
                        <Tab eventKey='login' title='Вхід'>
                            <Form>
                                <Form.Group className='mb-3'>
                                    <Form.Control type='text' placeholder="Ім`я" />
                                </Form.Group>
                                <Form.Group className='mb-3'>
                                    <Form.Control type='email' placeholder="Електронна адреса" />
                                </Form.Group>

                                <Button variant='outline-secondary' className='w-100'>
                                    <img src='https://img.icons8.com/color/16/000000/google-logo.png' className='me-2' />
                                    Авторизуватися через Google
                                </Button>
                            </Form>
                        </Tab>
                        <Tab eventKey='register' title='Реєстрація'>
                            <Form>
                                <Form.Group className='mb-3'>
                                    <Form.Control type='text' placeholder="Ім`я" />
                                </Form.Group>
                                <Form.Group className='mb-3'>
                                    <Form.Control type='email' placeholder="Електронна адреса" />
                                </Form.Group>
                                <Form.Group className='mb-3'>
                                    <Form.Control type='password' placeholder="Пароль" />
                                </Form.Group>

                                <Button variant='primary' className='w-100 mb-2'>Увійти</Button>
                                <p style={{fontSize: '0.8em', textAlign: 'center'}}>
                                    Реєструючись - Ви автоматично погоджуєтесь з політикою конфідеційності та умовами використання
                                </p>

                                <Button variant='outline-secondary' className='w-100'>
                                    <img src='https://img.icons8.com/color/16/000000/google-logo.png' className='me-2' />
                                    Авторизуватися через Google
                                </Button>
                            </Form>
                        </Tab>
                    </Tabs>
                </Modal.Body>
            </Modal>
        </>
    );
}