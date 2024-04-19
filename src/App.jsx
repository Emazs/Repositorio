import './App.css'
import { Nav } from './components/Nav.jsx'
import { Hero } from './components/Hero.jsx'
import { Curses } from './components/Curses.jsx'
import { Titles } from './components/Titles.jsx'
import { Proyect } from './components/Proyect.jsx'
import { Hability } from './components/Hability.jsx'
import { UseFetch } from './components/UseFetch.jsx'

function App () {
  const data = UseFetch('../src/data/data.json')
  const { newUserHability, restCountry, ecommerceReact, sectionDropdown } = data

  return (
    <>
      <header>
        <Nav />
      </header>

      <main>
        <section id='sobremi' className='containerElements'>
          <Hero />
          <section className='containerEducation'>
            <section id='educacion' className='education'>
              <Titles logo='school' title='Educacion' />
              <Curses title='Alura latam' name='DESARROLLO PERSONAL G4 - ONE' date='07-12-22' />
              <Curses title='Alura latam' name='Formación Principiante en Programación G4 - ONE' date=' 03-01-23' />
              <Curses title='Alura latam' name='HTML5 Y CSS3 PARTE 4: AVANZANDO EN CSS' date='26-12-22' />
              <Curses title='Alura latam' name='GIT Y GITHUB: CONTROLE Y COMPARTA SU CÓDIGO' date='14-04-23' />
              <Curses title='Udemy' name='React JS Desde Cero' date='14-04-23' />
            </section>
          </section>

          <section id='proyectos' className='proyects'>
            <Titles logo='code' title='Proyectos' />
            <Proyect restCountry={restCountry} />
            <Proyect restCountry={ecommerceReact} />
            <Proyect restCountry={sectionDropdown} />
          </section>
        </section>
      </main>

      <footer>
        <section id='habilidades' className='containerHability'>
          <section className='habilitys'>
            <Titles logo='hability' title='Habilidades' />
            <section className='contentHabilitys'>
              {
                newUserHability && newUserHability.map(item => {
                  return (
                    <Hability key={item.name} name={item.name} logo={item.logo} />
                  )
                })
              }
            </section>
          </section>
        </section>
      </footer>
    </>
  )
}

export default App
