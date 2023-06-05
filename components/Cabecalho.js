import Link from 'next/link'
import React from 'react'
import { Container,  Nav, Navbar,  } from 'react-bootstrap'

const Cabecalho = () => {
  return (
    <>
      
      <Navbar bg="dark" variant="dark">
        <Container>
          
          <Navbar.Brand href="#">
           </Navbar.Brand>
          <Nav className="me-auto">
            <Link className='nav-link' href="/cursos">Cursos</Link>
            <Link className='nav-link' href="/disciplinas">Disciplinas</Link>
            <Link className='nav-link' href="/alunos">Alunos</Link>
            <Link className='nav-link' href="/professores">Professores</Link>
            <Link className='nav-link' href="/salas">Salas</Link>
            <Link className='nav-link' href="/semestres">Semestres</Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default Cabecalho