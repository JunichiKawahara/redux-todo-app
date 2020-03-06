import { connect } from 'react-redux';
import MatomeApp from '../components/MatomeApp';
import { addMatome, resetMatome } from '../actions/matome';

function mapStateToProps(state) {
    const { titles } = {...state.matomeReducer};
    return {
        titles
    };
}

function mapDispatchToProps(dispatch) {
    return {
        addMatome(title) {
            dispatch(addMatome(title));
        },
        resetMatome() {
            dispatch(resetMatome());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MatomeApp);