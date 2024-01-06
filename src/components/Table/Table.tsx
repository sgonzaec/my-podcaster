import { Link, useLocation } from "react-router-dom";
import generalFunctios from "../../Functions/generalFunctions";
import { ResultDetails } from "../../typings/DetailList";
import "./Table.scss";

const Table = ({
  colums,
  episodies,
}: {
  colums: string[];
  episodies: ResultDetails;
}) => {

  const location = useLocation()

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
              <tr key={index} >
                <Link to={`${location.pathname}/episode/${episodie.trackId}`}>
                  <td className="primary">
                    {generalFunctios.formatName(episodie.trackName)}
                  </td>
                </Link>
                <td className="secundary">
                  {generalFunctios.formatDate(new Date(episodie.releaseDate))}
                </td>
                <td className="secundary">
                  {generalFunctios.formatTime(episodie.trackTimeMillis)}
                </td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
};

export default Table;
