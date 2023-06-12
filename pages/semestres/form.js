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
    const cursos = JSON.parse (window.localStorage.getItem ('semestres')) || []
    cursos.push(dados)
    window.localStorage.setItem('semestres', JSON.stringify(cursos))
    push('/semestres')
    

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
        <Form.Group className="mb-3" controlId="datainicio">
          <Form.Label>Data inicio:</Form.Label>
          <Form.Control isInvalid={errors.datainicio} type="text" {...register('datainicio', cursoValidator.datainicio)} />
          {
             errors.datainicio &&
            <small className='mt-1 '>{errors.datainicio.message}</small>
          }
        </Form.Group>
        <Form.Group className="mb-3" controlId="datafim">
          <Form.Label>Data fim:</Form.Label>
          <Form.Control isInvalid={errors.datafim} type="text"{...register('datafim', cursoValidator.datafim)} />
          {
             errors.datafim &&
            <small className='mt-1 '>{errors.datafim.message}</small>
          }
        </Form.Group>

<div className='text-center'>



  <Link className="ms-2 btn btn-danger" href="/semestres" >
         <BBiSave className="me-2" />
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