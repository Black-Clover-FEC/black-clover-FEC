import React from 'react';
import {useTable} from 'react-table';
import api from '../../../lib/api.js';

const Table = ({featureList}) => {

  console.log('feature list: ', featureList);

  const data = [
    {
      name: 'YEasy 350',
      id: 40351,
      Sole: 'Rubber',
      Material: 'FullControlSkin',
      Stitching: 'Double Stitch',
    },
    {
      name: 'Morning Joggers',
      id: 40346,
      Fabric: '100% Cotton',
      Cut: 'Skinny',
    },
  ]

  return (
    <div>
      <table >
        <thead>headers go here!
          <tr>
            {featureList.map(list => <th>{list.name}</th>)}
          </tr>
        </thead>
        <tbody>
          lists go here!
        </tbody>
      </table>
    </div>
  )
}

export default Table;