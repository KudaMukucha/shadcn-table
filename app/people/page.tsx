import { people } from '@/people'
import React from 'react'
import { columns } from './columns'
import PeopleDataTable from './data-table'

const People = () => {
  return (
    <div className='container py-10 mx-auto text-sm'>
      <PeopleDataTable columns={columns} data={people}/>
    </div>
  )
}

export default People