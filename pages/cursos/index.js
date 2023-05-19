
import React, { useEffect, useState } from 'react'
import { Button, Table } from 'react-bootstrap'
import Pagina from '../../components/Pagina'
import { AiOutlinePlus  } from 'react-icons/Ai'
import { BsFillTrash3Fill  } from 'react-icons/Bs'


const index = () => {

  const [cursos, setCursos] = useState([])

  useEffect(() => {
   setCursos(getAll())
    
  }, [])

  function getAll(){
    return JSON.parse(window.localStorage.getItem('cursos')) || []
  }
  function excluir(id){
    const itens = getAll()
    itens.splice(id, 1)
    window.localStorage.setItem('cursos', JSON.stringify(itens))
    setCursos(itens)
  }


  return (
    <Pagina titulo='Cursos'>


      <Button href="/cursos/form" variant="primary mb-3" >Novo <AiOutlinePlus /> </Button>{' '}



      <Table striped bordered hover>
        <thead>
          <tr>

            <th>

            </th>
         
            <th>nome</th>
            <th>duracao</th>
            <th>modalidade</th>
          </tr>
        </thead>
        <tbody>
    {cursos.map((item, i) => (
        <tr key={i}>
          <td><Button>< BsFillTrash3Fill onClick={()=>excluir(i)} className='text-danger'/> </Button></td>         
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