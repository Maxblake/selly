import React, { Component } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import {
  firebaseConnect,
  isLoaded,
  isEmpty,
  populate
} from 'react-redux-firebase'
import RaisedButton from 'material-ui/RaisedButton'
import { Card, CardHeader, CardMedia, CardText } from 'material-ui/Card'
import { Post } from '../components'
import Loading from '../components/Loading'
import Link from 'react-router-dom/Link'

class Home extends Component {
  render() {
    const { ads, userId, history } = this.props
    const adsList = isEmpty(ads)
      ? 'Todo list is empty'
      : Object.keys(ads).map((key, id) => (
          <Card key={key} id={id} style={styles.card}>
            <CardHeader
              title={ads[key]['title']}
              subtitle={ads[key]['category']}
            />
            <CardText>{ads[key]['price']}</CardText>
          </Card>
        ))
    if (!isLoaded(ads)) {
      return <Loading />
    }
    return <div style={styles.body}>{adsList}</div>
  }
}

export default compose(
  connect(state => ({ ads: state.firebase.data.ads })),
  firebaseConnect([{ path: 'ads' }])
)(Home)

const styles = {
  body: {
    backgroundColor: '#6BE3CE',
    overflow: 'auto',
    height: '100vh',
    margin: '0 auto',
    maxWidth: 500,
    paddingTop: 80,
    paddingBottom: 150,
    display: 'flex',
    flexDirection: 'column'
  },
  card: {
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20
  }
}
