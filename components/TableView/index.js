import React from 'react'
import EditIcon from '../../asstes/img/edit.svg';
import DeleteIcon from '../../asstes/img/trash.svg'
import Image from 'next/image';
import styles from './tableview.module.css';

function Index({ records = [], recordsPerPage = 10, pageNumber = 1 }) {

  const getRecords = () => {
    const totalPages = Math.ceil(records.length / recordsPerPage);
    let paginatedRecords = [];
    [...Array(totalPages)].map((_, idx) => {
      paginatedRecords = [...paginatedRecords, records.slice(idx*recordsPerPage, (idx+1)*recordsPerPage)]
    })

    return paginatedRecords[pageNumber - 1];
  }

  return (
   <table className={styles.tableView}>
     <thead>
        <tr>
          <th><input type='checkbox' /></th>
          <th>Name</th>
          <th>Email</th>
          <th>Role</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {
          records && getRecords().map(val => (
            <tr key={val.id}>
              <td><input type='checkbox' value={val.id} /></td>
              <td>{val.name}</td>
              <td>{val.email}</td>
              <td className='capitalize'>{val.role}</td>
              <td className={`flex gap-4 ${styles.icon}`}>
                <Image src={EditIcon} className="cursor-pointer" width={18} height={18} />
                <Image src={DeleteIcon} className={`${styles.iconDelete} cursor-pointer`} width={18} height={18} />
              </td>
            </tr>
          )) 
        }
      </tbody>
    </table>
  )
}

export default Index