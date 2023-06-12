import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import Pagina from '../../components/Pagina'
import { useForm } from "react-hook-form";
import { useRouter } from 'next/router';
import Link from 'next/link';
import { BiSave } from 'react-icons/bi'


const form = () => {

  const { push } = useRouter()
  const { register, handleSubmit } = useForm()



  function salvar(dados) {
    const cursos = JSON.parse (window.localStorage.getItem ('salas')) || []
    cursos.push(dados)
    window.localStorage.setItem('salas', JSON.stringify(cursos))
    push('/salas')
    

  }

  return (



    <Pagina titulo='Formulario'>
      <Form>
        <Form.Group className="mb-3" controlId="nome">
          <Form.Label>Nome:</Form.Label>
          <Form.Control isInvalid={errors.nome} type="text" {...register('nome', cursoValidator.nome)} />
          {
             errors.nome &&
            <small className='mt-1 '>{errors.nome.message}</small>
          }
        </Form.Group>
        <Form.Group className="mb-3" controlId="capacidade">
          <Form.Label>Capacidade:</Form.Label>
          <Form.Control isInvalid={errors.capacidade} type="text" {...register('capacidade', cursoValidator.capacidade)} />
          {
             errors.capacidade &&
            <small className='mt-1 '>{errors.capacidade.message}</small>
          }
        </Form.Group>
        <Form.Group className="mb-3" controlId="tipo">
          <Form.Label>Tipo:</Form.Label>
          <Form.Control isInvalid={errors.tipo} type="text"{...register('tipo', cursoValidator.tipo)} />
          {
             errors.tipo &&
            <small className='mt-1 '>{errors.tipo.message}</small>
          }
        </Form.Group>

<div className='text-center'>



  <Link className="ms-2 btn btn-danger" href="/salas" >
         <BiSave className="me-2" />
          Voltar
        </Link>

        <Button variant="success" className='ms-2' onClick={handleSubmit(salvar)}>
        <BiSave className="me-2" />
          Salvar
          
        </Button>
       
  </div>
      </Form>

    </Pagina>
  )
}

export default form