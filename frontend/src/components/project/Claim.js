import React from 'react'
import ProjectHeader from '../shared/ProjectHeader'
import { Button, Table } from 'antd'

const columns = [{
  title: 'Task Description',
  dataIndex: 'description',
  key: 'description'
}, {
  title: 'ETH Reward',
  dataIndex: 'ethReward',
  key: 'ethReward'
}, {
  title: 'Rep to Claim',
  dataIndex: 'repClaim',
  key: 'repClaim'
}, {
  title: '',
  dataIndex: 'buttons',
  key: 'buttons'
}]

export default ({
  name,
  address,
  photo,
  summary,
  location,
  cost,
  reputationCost,
  date,
  tasks,
  listSubmitted,
  submitWinningHashList,
  checkValidation
}) => {
  return (
    <div>
      <ProjectHeader
        name={name}
        address={address}
        photo={photo}
        summary={summary}
        location={location}
        cost={cost}
        reputationCost={reputationCost}
      />
      <div>
        <div>
          Task Period Expires In {typeof date !== 'undefined' ? `${date.fromNow()}` : 'N/A'}
        </div>
      </div>
      <div style={{display: 'flex', flexDirection: 'column', backgroundColor: '#FCFCFC', marginTop: 30}}>
        <Table dataSource={tasks} columns={columns} />
      </div>
      <Button
        disabled={listSubmitted}
        onClick={() => submitWinningHashList()}>
          Submit Winning Hash List
      </Button>
      <Button onClick={() => checkValidation()}>
        Check Validate
      </Button>
    </div>
  )
}
