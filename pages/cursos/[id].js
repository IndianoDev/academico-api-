import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import Pagina from '../../components/Pagina'
import { useForm } from "react-hook-form";
import { useRouter } from 'next/router';
import Link from 'next/link';
import { BiSave } from 'react-icons/bi'
import { BsArrowLeft } from 'react-icons/bs'



const form = () => {


  const { query } = useRouter()
  const { register, handleSubmit, setValue } = useForm()
 
  useEffect(() => {

    if(query.id){
    const cursos = JSON.parse(window.localStorage.getItem('cursos')) || []
    const curso = cursos[query.id]

    setValue('nome', curso.nome)
    setValue('Duracao', curso.Duracao)
    setValue('modalidade', curso.presencial)
    
   
    }
  }, [query.id])

  
  


  function salvar(dados) {
    const cursos = JSON.parse (window.localStorage.getItem ('cursos')) || []
    cursos.push(dados)
    window.localStorage.setItem('cursos', JSON.stringify(cursos))
    

  }

  return (



    <Pagina titulo='Formulario'>
      <Form>
        <Form.Group className="mb-3" controlId="nome">
          <Form.Label>Nome:</Form.Label>
          <Form.Control type="text" {...register('nome')} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="duracao">
          <Form.Label>Duracao:</Form.Label>
          <Form.Control type="text" {...register('duracao')} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="modalidade">
          <Form.Label>modalidade:</Form.Label>
          <Form.Control type="text" {...register('modalidade')} />
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