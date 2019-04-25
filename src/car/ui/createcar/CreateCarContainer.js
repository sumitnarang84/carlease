import { connect } from 'react-redux'
import CreateCar from './CreateCar'
import { createCar } from './CreateCarAction'

const mapStateToProps = (state, ownProps) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {
    onCreateCarSubmit: (V5cID, VIN) => {
      dispatch(createCar(V5cID, VIN))
    }
  }
}

const CreateCarContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateCar)

export default CreateCarContainer