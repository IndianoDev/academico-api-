
import React, { useEffect, useState } from 'react'
import { Button, Table } from 'react-bootstrap'
import Pagina from '../../components/Pagina'
import { AiOutlinePlus } from 'react-icons/Ai'
import { BsFillTrash3Fill } from 'react-icons/Bs'
import { FaPaintBrush } from 'react-icons/Fa'
import Link from 'next/link'


const index = () => {

  const [cursos, setCursos] = useState([])

  useEffect(() => {
    setCursos(getAll())

  }, [])

  function getAll() {
    return JSON.parse(window.localStorage.getItem('cursos')) || []
  }
  function excluir(id) {
    if (confirm('Deseja realmente excluir o registro?')) {
      const itens = getAll()
      itens.splice(id, 1)
      window.localStorage.setItem('cursos', JSON.stringify(itens))
      setCursos(itens)
    }
  }
  return (
    <Pagina titulo='Cursos'>


      <Button href="/cursos/form" variant="primary mb-3" >Novo <AiOutlinePlus /> </Button>{' '}



      <Table striped bordered hover>
        <thead>
          <tr >

            <th>Editar | Excluir</th>
            <th className='text-center'>Nome</th>
            <th className='text-center'>Duracao</th>
            <th className='text-center'>Modalidade</th>
          </tr>
        </thead>
        <tbody>
          {cursos.map((item, i) => (
            <tr key={i}>
              
              <td>
                <Link href={'/form'}> 
                <Button variant='light'>< FaPaintBrush onClick={() => excluir(i)} className='text-primary' /> </Button>
                </Link>
                {''}
               
                <Button variant='light'>< BsFillTrash3Fill onClick={() => excluir(i)} className='text-danger' /> </Button>
              </td>
              <td>{item.nome}</td>
              <td>{item.duracao}</td>
              <td>{item.modalidade}</td>
            </tr>
          ))}

        </tbody>




      </Table>
    </Pagina>
  )
}

export default index