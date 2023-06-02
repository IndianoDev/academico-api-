import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import Pagina from '../../components/Pagina'
import { useForm } from "react-hook-form";
import { useRouter } from 'next/router';
import Link from 'next/link';
import { BiSave } from 'react-icons/bi'
import { BsArrowLeft } from 'react-icons/bs'
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
          <Form.Control type="text" {...register('nome')} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="curso">
          <Form.Label>Curso:</Form.Label>
          <Form.Control type="text" {...register('curso')} />
        </Form.Group>

        
<div className='text-center'>



  <Link className="ms-2 btn btn-danger" href="/cursos" >
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



