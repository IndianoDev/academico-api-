import React, { useEffect, useState } from 'react'
import { Button, Table } from 'react-bootstrap'
import Pagina from '../../components/Pagina'
import { AiOutlinePlus } from 'react-icons/Ai'
import { BsFillTrash3Fill } from 'react-icons/Bs'
import { FaPaintBrush } from 'react-icons/Fa'
import Link from 'next/link'


const index = () => {

  const [semestres, setSemestres] = useState([])

  useEffect(() => {
    setSemestres(getAll())

  }, [])

  function getAll() {
    return JSON.parse(window.localStorage.getItem('semestres')) || []
  }
  function excluir(id) {
    if (confirm('Deseja realmente excluir o registro?')) {
      const itens = getAll()
      itens.splice(id, 1)
      window.localStorage.setItem('semestres', JSON.stringify(itens))
      setSalas(itens)
    }
  }
  return (
    <Pagina titulo='Semestres'>


      <Button href="/semestres/form" variant="primary mb-3" >Novo <AiOutlinePlus /> </Button>{' '}



      <Table striped bordered hover>
        <thead>
          <tr >

            <th>Editar | Excluir</th>
            <th className='text-center'>Nome</th>
            <th className='text-center'>Data_de_inicio</th>
            <th className='text-center'>Data_de_fim</th>
          </tr>
        </thead>
        <tbody>
          {semestres.map((item, i) => (
            <tr key={item.id}>
              
              <td>
                <Link href={'/semestres/' + item.id}> 
                <Button variant='light'>< FaPaintBrush onClick={() => (i)} className='text-primary' /> </Button>
                </Link>
                {''}
               
                <Button variant='light'>< BsFillTrash3Fill onClick={() => excluir(item.id)} className='text-danger' /> </Button>
              </td>
              <td>{item.nome}</td>
              <td>{item.Data_de_inicio}</td>
              <td>{item.Data_de_fim}</td>
            </tr>
          ))}

        </tbody>




      </Table>
    </Pagina>
  )
}

export default index