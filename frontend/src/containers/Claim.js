import React from 'react'
import { connect } from 'react-redux'
import { Button } from 'antd'
import Sidebar from '../components/shared/Sidebar'
import { push } from 'react-router-redux'
import { P } from '../utilities/blockchain'
import Project from './project/Claim'
import fastforward from '../utilities/fastforward'
import * as _ from 'lodash'

class Claim extends React.Component {
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
          if (state.toNumber() === 3) {
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
// fast forward Ganache 1 week
  async fastForward () {
    await fastforward(2 * 7 * 24 * 60 * 60)
  }

  render () {
    const projects = this.state.projects.map((proj, i) => {
      return <Project
        key={i}
        index={i}
        address={proj.address}
      />
    })
    return (
      <div>
        <Sidebar />
        <div style={{marginLeft: 200, marginBottom: 30}}>
          <header className='App-header'>
            <h3>Claim Tasks from Active Projects</h3>
            <Button type='danger' onClick={this.fastForward}>fast forward 2 weeks</Button>
            <h6>ONLY DO THIS IF YOU ARE READY TO MOVE EVERY PROJECT TO THE NEXT STATE</h6>
            <h6>IF A PROJECT HAS UNCLAIMED TASKS IT WILL FAIL AND YOU WILL LOSE YOUR STAKED TOKENS</h6>
          </header>
          <div style={{paddingLeft: '30px', paddingRight: '30px'}}>
            {projects}
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    projects: state.projects.allProjects
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    reroute: () => dispatch(push('/'))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Claim)
