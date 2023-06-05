import React, { useEffect, useState } from 'react'
import { Button, Table } from 'react-bootstrap'
import Pagina from '../../components/Pagina'
import { AiOutlinePlus } from 'react-icons/Ai'
import { BsFillTrash3Fill } from 'react-icons/Bs'
import { FaPaintBrush } from 'react-icons/Fa'
import Link from 'next/link'


const index = () => {

  const [salas, setSalas] = useState([])

  useEffect(() => {
    setSalas(getAll())

  }, [])

  function getAll() {
    return JSON.parse(window.localStorage.getItem('salas')) || []
  }
  function excluir(id) {
    if (confirm('Deseja realmente excluir o registro?')) {
      const itens = getAll()
      itens.splice(id, 1)
      window.localStorage.setItem('salas', JSON.stringify(itens))
      setSalas(itens)
    }
  }
  return (
    <Pagina titulo='Salas'>


      <Button href="/salas/form" variant="primary mb-3" >Novo <AiOutlinePlus /> </Button>{' '}



      <Table striped bordered hover>
        <thead>
          <tr >

            <th>Editar | Excluir</th>
            <th className='text-center'>Nome</th>
            <th className='text-center'>Capacidade</th>
            <th className='text-center'>Tipo</th>
          </tr>
        </thead>
        <tbody>
          {salas.map((item, i) => (
            <tr key={item.id}>
              
              <td>
                <Link href={'/salas/' + item.id}> 
                <Button variant='light'>< FaPaintBrush onClick={() => (i)} className='text-primary' /> </Button>
                </Link>
                {''}
               
                <Button variant='light'>< BsFillTrash3Fill onClick={() => excluir(item.id)} className='text-danger' /> </Button>
              </td>
              <td>{item.nome}</td>
              <td>{item.Capacidade}</td>
              <td>{item.Tipo}</td>
            </tr>
          ))}

        </tbody>




      </Table>
    </Pagina>
  )
}

export default index