import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import Pagina from '../../components/Pagina'
import { useForm } from "react-hook-form";
import { useRouter } from 'next/router';
import Link from 'next/link';
import { BiSave } from 'react-icons/bi'


const form = () => {

  const { push } = useRouter()
  const { register, handleSubmit, formState:{errors}} = useForm()



  function salvar(dados) {
    const cursos = JSON.parse (window.localStorage.getItem ('cursos')) || []
    cursos.push(dados)
    window.localStorage.setItem('cursos', JSON.stringify(cursos))
    push('/cursos')
    

  }

  return (

    <Pagina titulo='Formulário'>
    <Form>
      <Form.Group className="mb-3" controlId="nome">
        <Form.Label>Nome:</Form.Label>
        <Form.Control isInvalid={errors.nome} type="text" {...register('nome', cursoValidator.nome)} />
        {
           errors.nome &&
          <small className='mt-1 '>{errors.nome.message}</small>
        }
      </Form.Group>
      <Form.Group className="mb-3" controlId="duracao">
        <Form.Label>Duração:</Form.Label>
        <Form.Control isInvalid={errors.duracao} type="text" {...register('duracao', cursoValidator.duracao)} />
        {
           errors.duracao &&
          <small className='mt-1'>{errors.duracao.message}</small>
        }
      </Form.Group>
      <Form.Group className="mb-3" controlId="modalidade">
        <Form.Label>Modalidade:</Form.Label>
        <Form.Control isInvalid={errors.modalidade} type="text"{...register('modalidade', cursoValidator.modalidade)} />
        {
           errors.modalidade &&
          <small className='mt-1'>{errors.modalidade.message}</small>
        }
      </Form.Group>

      <div className='text-center'>
        <Link className=' btn btn-danger' href='/cursos'>
        <BiSave className='me-2'/>
        Voltar
        </Link>
        <Button variant='primary'  className='ms-2' onClick={handleSubmit(salvar)}>
        <BiSave className='me-2'/>
        Salvar
        </Button>
      </div>

    </Form>
  </Pagina>
)
}

export default form