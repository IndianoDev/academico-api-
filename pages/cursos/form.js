import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import Pagina from '../../components/Pagina'
import { useForm } from "react-hook-form";

const form = () => {
    const {register, handleSubmit } = useForm()


    function salvar(dados){
        console.log(dados);
    }

  return (

   

    <Pagina titulo='cursos'>
         <Form>
      <Form.Group className="mb-3" controlId="nome">
        <Form.Label>Nome:</Form.Label>
        <Form.Control type="text" {...register('nome')} /> 
      </Form.Group>

      <Form.Group className="mb-3" controlId="duracao">
        <Form.Label>Duracao:</Form.Label>
        <Form.Control type="text" {...register('duracao')}/> 
      </Form.Group>

      <Form.Group className="mb-3" controlId="modalidade">
        <Form.Label>modalidade:</Form.Label>
        <Form.Control type="text" {...register('modalidade')} /> 
      </Form.Group>

    
      <Button variant="success" onClick={handleSubmit(salvar)}>
        Salvar
      </Button>
    </Form>

    </Pagina>
  )
}

export default form