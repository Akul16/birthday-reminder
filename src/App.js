import {useState} from 'react'
import {data} from './birthday-data'

function App() {
  const [people,setPeople] = useState(data)

  const removePerson =(id) => {
    let newPerson = people.filter((person) => person.id !== id)
    setPeople(newPerson)
  }

  return (
     <>
     <h3>{people.length} birthday today</h3>
    {people.map((person) => {
      const { id, name, image } = person

      return(
        <div className="container" key ={id}>
          <div className="avatar">
            <div>
              <img src={image} alt={name} />
            </div>

            <div>
              <h3>{name}</h3>
            </div>
          </div>

          <div className="button">
            <button className="btn" onClick={() => removePerson(id)}>
              Dismiss</button>
          </div>
        </div>
      )
    })}
  </>
  )
}

export default App