import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import Pagina from '../../components/Pagina'
import { useForm } from "react-hook-semestres";
import { useRouter } from 'next/router';
import Link from 'next/link';
import { BiSave } from 'react-icons/bi'




const semestres = () => {


  const { push, query } = useRouter()
  const { register, handleSubmit, setValue } = useForm()

  useEffect(() => {

    if (query.id) {
      axios.get('/api/semestres/' + query.id).then(resultado => {
        const semestre = resultado.data
        for (let atributo in semestre) {
          setValue(atributo, semestre[atributo])
        }
      })
    }
}, [query.id])



  function salvar(dados) {
    axios.get('/api/semestres/' + query.id, dados)
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
        <Form.Label>Data_de_fim:</Form.Label>
        <Form.Control type="text" {...register('data_de_fim')} />
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

export default semestres