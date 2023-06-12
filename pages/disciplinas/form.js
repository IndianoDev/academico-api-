import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import Pagina from '../../components/Pagina'
import { useForm } from "react-hook-form";
import { useRouter } from 'next/router';
import Link from 'next/link';
import { BiSave } from 'react-icons/bi'
import axios from 'axios'


const form = () => {

  const { push } = useRouter()
  const { register, handleSubmit } = useForm()



  function salvar(dados) {
    axios.post('/api/disciplinas', dados)
    push('/disciplinas')

    
  }

  return (


    <Pagina titulo='Disciplina'>
        <Form>
        <Form.Group className="mb-3" controlId="nome">
          <Form.Label>Nome:</Form.Label>
          <Form.Control isInvalid={errors.nome} type="text" {...register('nome', cursoValidator.nome)} />
          {
             errors.nome &&
            <small className='mt-1 '>{errors.nome.message}</small>
          }
        </Form.Group>
        <Form.Group className="mb-3" controlId="curso">
          <Form.Label>Curso:</Form.Label>
          <Form.Control isInvalid={errors.curso} type="text" {...register('curso', cursoValidator.curso)} />
          {
             errors.curso &&
            <small className='mt-1 '>{errors.curso.message}</small>
          }
        </Form.Group>
        


        
<div className='text-center'>



  <Link className="ms-2 btn btn-danger" href="/cursos" >
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



