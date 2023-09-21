import Person from './Person'

const PeopleList = ({ people }) => {
  return (
    <section>
      {people.map((person) => {
        return <Person key={person.id} {...person} />
      })}
    </section>
  )
}
export default PeopleList
