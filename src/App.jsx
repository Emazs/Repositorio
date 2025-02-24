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

  const { courses, projects, newUserHability, contacts } = data

  return (
    <>
      <header>
        <Nav />
      </header>

      <main>
        <section id='sobremi' className='containerElements'>
          <Hero contacts={contacts} />

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

          <section className='containerEducation'>
            <section id='educacion' className='education'>
              <Titles logo='school' title='Educacion' />
              {
                courses && courses.map(item => {
                  return (
                    <Curses key={item.name} title={item.title} name={item.name} date={item.date} />
                  )
                })
              }
            </section>
          </section>

          <section id='proyectos' className='proyects'>
            <Titles logo='code' title='Proyectos' />

            {
              projects && projects.map(item => {
                return (
                  <Proyect key={item.title} project={item} />
                )
              })
            }
          </section>
        </section>
      </main>
    </>
  )
}

export default App
