import { ResultDetails } from "../../typings/DetailList"
import Table from "../Table/Table"

const EpisodiesList = ({episodies}: {episodies: ResultDetails}) => {
   
  const colums = ['Nombre', 'Fecha', 'Duración']

  return (
    <div>
        <Table colums={colums} episodies={episodies} />
    </div>
  )
}

export default EpisodiesList