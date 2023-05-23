import Link from 'next/link'
import React from 'react'
import { Container,  Nav, Navbar,  } from 'react-bootstrap'

const Cabecalho = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#">
            academico</Navbar.Brand>
          <Nav className="me-auto">
            <Link className='nav-link' href="/ursos">Cursos</Link>
            <Link className='nav-link' href="/Diciplinas">Diciplinas</Link>
            <Link className='nav-link' href="/Alunos">Alunos</Link>
            <Link className='nav-link' href="/Professores">Professores</Link>
            <Link className='nav-link' href="/Turmas">Turmas</Link>
            <Link className='nav-link' href="/Series">Series</Link>
            <Link className='nav-link' href="/Semestres">Semestres</Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default Cabecalho