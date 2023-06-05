import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import Pagina from '../../components/Pagina'
import { useForm } from "react-hook-form";
import { useRouter } from 'next/router';
import Link from 'next/link';
import { BiSave } from 'react-icons/bi'




const form = () => {


  const { push, query } = useRouter()
  const { register, handleSubmit, setValue } = useForm()

  useEffect(() => {

    if (query.id) {
      axios.get('/api/salas/' + query.id).then(resultado => {
        const sala = resultado.data
        for (let atributo in sala) {
          setValue(atributo, sala[atributo])
        }
      })
    }
}, [query.id])



  function salvar(dados) {
    axios.get('/api/salas/' + query.id, dados)
    push('/salas')

  }

  return (



    <Pagina titulo='Formulario'>
    <Form>
      <Form.Group className="mb-3" controlId="nome">
        <Form.Label>Nome:</Form.Label>
        <Form.Control type="text" {...register('nome')} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="capacidade">
        <Form.Label>Capacidade:</Form.Label>
        <Form.Control type="text" {...register('capacidade')} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="tipo">
        <Form.Label>Tipo:</Form.Label>
        <Form.Control type="text" {...register('tipo')} />
      </Form.Group>



        <div className='text-center'>



          <Link className="ms-2 btn btn-danger" href="/disciplinas" >
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