
import React, { useEffect, useState } from 'react'
import { Button, Table } from 'react-bootstrap'
import Pagina from '../../components/Pagina'
import { AiOutlinePlus } from 'react-icons/Ai'
import { BsFillTrash3Fill } from 'react-icons/Bs'
import { FaPaintBrush } from 'react-icons/Fa'
import Link from 'next/link'
import axios from 'axios'


const index = () => {

  const [disciplinas, setDisciplinas] = useState([])

  useEffect(() => {
    getAll()
  }, [])

  function getAll() {
    axios.get('/api/disciplinas').then(resultado => {
      setDisciplinas(resultado.data);
    })
  }

  function excluir(id) {
    if (confirm('Deseja realmente deletar?'))
      axios.delete('/api/disciplinas/' + id)
    getAll()
  }


  return (
    <Pagina titulo='Disciplinas'>


      <Button href="/disciplinas/form" variant="primary mb-3" >Novo <AiOutlinePlus /> </Button>{' '}



      <Table striped bordered hover>
        <thead>
          <tr >

            <th>Editar | Excluir</th>
            <th className='text-center'>Nome</th>
            <th className='text-center'>curso</th>
          </tr>
        </thead>
        <tbody>
          {disciplinas.map((item, i) => (
            <tr key={item.id}>
              <td>
                <Link href={'/disciplinas/' + item.id}>
                  <Button variant='light'>< FaPaintBrush className='text-primary' /> </Button>
                </Link>
                <Button variant='light'>< BsFillTrash3Fill onClick={() => excluir(item.id)} className='text-danger' /> </Button>
              </td>
              <td>{item.nome}</td>
              <td>{item.curso}</td>
            </tr>
          ))}

        </tbody>




      </Table>
    </Pagina>
  )
}

export default index