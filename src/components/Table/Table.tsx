import generalFunctios from "../../Helpers/generalFunctions";
import { ResultDetails } from "../../typings/DetailList";
import "./Table.scss"

const Table = ({
  colums,
  episodies,
}: {
  colums: string[];
  episodies: ResultDetails;
}) => {

  return (
    <table>
      <thead>
        <tr>
          {colums &&
            colums?.map((colum: string, index: number) => (
              <th key={index}>{colum}</th>
            ))}
        </tr>
      </thead>
      <tbody>
        {episodies &&
          episodies.map((episodie: any, index: number) => {
            return (
              <tr>
                <td key={index}>{generalFunctios.formatName(episodie.trackName)}</td>
                <td key={index}>{generalFunctios.formatDate(new Date(episodie.releaseDate))}</td>
                <td key={index}>{generalFunctios.formatTime(episodie.trackTimeMillis)}</td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
};

export default Table;
