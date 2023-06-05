import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import Pagina from '../../components/Pagina'
import { useForm } from "react-hook-form";
import { useRouter } from 'next/router';
import Link from 'next/link';
import { BiSave } from 'react-icons/bi'
import { BsArrowLeft } from 'react-icons/bs'

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
          <Form.Control type="text" {...register('nome')} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="data_de_inicio">
          <Form.Label>Data_de_inicio:</Form.Label>
          <Form.Control type="text" {...register('data_de_inicio')} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="data_de_fim">
          <Form.Label>data_de_fim:</Form.Label>
          <Form.Control type="text" {...register('data_de_inicio')} />
        </Form.Group>

<div className='text-center'>



  <Link className="ms-2 btn btn-danger" href="/semestres" >
         <BsArrowLeft className="me-2" />
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