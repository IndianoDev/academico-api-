import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import Pagina from '../../components/Pagina'
import { useForm } from "react-hook-form";
import { useRouter } from 'next/router';
import Link from 'next/link';
import { BiSave } from 'react-icons/bi'
import { BsArrowLeft } from 'react-icons/bs'



const form = () => {


  const { push, query } = useRouter()
  const { register, handleSubmit, setValue } = useForm()

  useEffect(() => {

    if (query.id) {
      axios.get('/api/disciplinas/' + query.id).then(resultado => {
        const disciplina = resultado.data
        for (let atributo in disciplina) {
          setValue(atributo, disciplina[atributo])
        }
      })
    }
}, [query.id])



  function salvar(dados) {
    axios.get('/api/disciplinas/' + query.id, dados)
    push('/diciplinas')

  }

  return (



    <Pagina titulo='Disciplinas'>
      <Form>
        <Form.Group className="mb-3" controlId="nome">
          <Form.Label>Nome:</Form.Label>
          <Form.Control type="text" {...register('nome')} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="curso">
          <Form.Label>Curso:</Form.Label>
          <Form.Control type="text" {...register('duracao')} />
        </Form.Group>



        <div className='text-center'>



          <Link className="ms-2 btn btn-danger" href="/disciplinas" >
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