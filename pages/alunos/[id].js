import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import Pagina from '../../components/Pagina'
import { useForm } from "react-hook-form";
import { useRouter } from 'next/router';
import Link from 'next/link';
import { BiSave } from 'react-icons/bi'
import axios from 'axios';



const form = () => {


  const { push, query } = useRouter()
  const { register, handleSubmit, setValue } = useForm()

  useEffect(() => {

    if (query.id) {
      axios.get('/api/alunos/' + query.id).then(resultado => {
        const aluno = resultado.data
        for (let atributo in aluno) {
          setValue(atributo, aluno[atributo])
        }
      })
    }
}, [query.id])



  function salvar(dados) {
   axios.get('/api/alunos/' + query.id, dados)
    push('/alunos')

  }

  return (



    <Pagina titulo='Formulario Alunos'>
      <Form>
        <Form.Group className="mb-3" controlId="nome">
          <Form.Label>*Nome:</Form.Label>
          <Form.Control type="text" {...register('nome')} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="cpf">
          <Form.Label>*CPF:</Form.Label>
          <Form.Control type="text" {...register('cpf')} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="matricula">
          <Form.Label>*Matricula:</Form.Label>
          <Form.Control type="text" {...register('matricula')} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="data_de_fim">
          <Form.Label>Salario:</Form.Label>
          <Form.Control type="text" {...register('data_de_inicio')} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email:</Form.Label>
          <Form.Control type="text" {...register('email')} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="telefone">
          <Form.Label>Telefone:</Form.Label>
          <Form.Control type="text" {...register('telefone')} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="cep">
          <Form.Label>CEP:</Form.Label>
          <Form.Control type="text" {...register('cep')} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="logradouro">
          <Form.Label>Logradouro:</Form.Label>
          <Form.Control type="text" {...register('logradouro')} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="complemento">
          <Form.Label>Complemento:</Form.Label>
          <Form.Control type="text" {...register('complemento')} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="numero">
          <Form.Label>Numero:</Form.Label>
          <Form.Control type="text" {...register('numero')} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="bairro">
          <Form.Label>Bairro:</Form.Label>
          <Form.Control type="text" {...register('bairro')} />
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