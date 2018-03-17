import React from 'react'
import { Col, Row, Button } from 'antd'
import Sidebar from './Sidebar'
import ValidateTasks from '../components/shared/ValidateTasks'
import fastforward from '../utilities/fastforward'
import { push } from 'react-router-redux'
import { connect } from 'react-redux'
import { P } from '../utilities/blockchain'
import * as _ from 'lodash'

class Validate extends React.Component {
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
        // console.log('proj is staked', isStaked)
        resolve(state)
      })
    }

    let projects = Object.keys(np.projects).map((projAddr, i) => {
      // console.log('projAddr', projAddr)
      return projectState(projAddr)
        .then(state => {
          if (state.toNumber() === 4) {
            // return JSON.stringify(project)
            return np.projects[projAddr]
          }
        })
    })

    Promise.all(projects)
      .then(results => {
        // console.log(results)
        // Handle results
        // console.log('results', results)
        projectsArr = _.compact(results)
        // console.log(projectsArr)
        this.setState({projects: projectsArr})
        // console.log(this.state.projects)
        // console.log('projectsArr', projectsArr)
        // console.log('state', this.state.projects)
      })
      .catch(e => {
        console.error(e)
      })
  }
  async fastForward () {
    await fastforward(7 * 24 * 60 * 60)
    // console.log('fastForward')
  }

  render () {
    const projects = this.state.projects.map((proj, i) => {
      // console.log(proj)
      return <Col span={25} key={i}>
        <ValidateTasks
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
            {/* <img src={logoclassName='App-logo' alt='logo' /> */}
            {/* <h1 className='App-title2'>distribute</h1> */}
            <h3>Validate Tasks</h3>

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

export default connect(mapStateToProps, mapDispatchToProps)(Validate)
