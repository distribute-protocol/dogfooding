import React from 'react'
import { Col, Row, Button } from 'antd'
import { push } from 'react-router-redux'
import Sidebar from './Sidebar'
import VoteTasks from '../components/shared/VoteTasks'
import fastforward from '../utilities/fastforward'
import { connect } from 'react-redux'
import { P } from '../utilities/blockchain'
import * as _ from 'lodash'

class Vote extends React.Component {
  constructor () {
    super()
    this.state = {
      projects: []
    }
    this.fastForward = this.fastForward.bind(this)
  }

  componentWillMount () {
    if (_.isEmpty(this.props.user)) {
      // this.props.reroute()
    }
  }

  componentWillReceiveProps (np) {
    let projectsArr

    function projectState (address) {
      return new Promise(async (resolve, reject) => {
        let proj = P.at(address)
        let state = await proj.state()
        resolve(state)
      })
    }

    let projects = Object.keys(np.projects).map((projAddr, i) => {
      return projectState(projAddr)
        .then(state => {
          if (state.toNumber() === 5) {
            return np.projects[projAddr]
          }
        })
    })

    Promise.all(projects)
      .then(results => {
        projectsArr = _.compact(results)
        this.setState({projects: projectsArr})
      })
      .catch(e => {
        console.error(e)
      })
  }
  async fastForward () {
    await fastforward(7 * 24 * 60 * 60)
  }

  render () {
    const projects = this.state.projects.map((proj, i) => {
      return <Col span={25} key={i}>
        <VoteTasks
          key={i}
          cost={proj.cost}
          description={proj.description}
          index={i}
          // taskHashEndDate={proj.taskHashEndDate}
          address={proj.address}
        />
      </Col>
    })
    return (
      <div>
        <Sidebar />
        <div style={{marginLeft: 200}}>
          <header className='App-header'>
            <h3>Vote Tasks</h3>

            <Button type='danger' onClick={this.fastForward}>fast forward 1 week</Button>
            <h6>ONLY DO THIS IF YOU ARE READY TO MOVE EVERY PROJECT TO THE NEXT STATE</h6>
            <h6>IF A PROJECT HAS UNCLAIMED TASKS IT WILL FAIL AND YOU WILL LOSE YOUR STAKED TOKENS</h6>
          </header>
          <div style={{ padding: '30px' }}>
            <Row gutter={12}>
              {projects}
            </Row>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    projects: state.projects.allProjects
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    reroute: () => dispatch(push('/'))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Vote)
