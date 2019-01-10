import { connect } from 'react-redux';
import Calculator from '../../components/Calculator';
import { RootState } from '../../reducers';
import { Dispatch } from 'redux';

const mapStateToProps = (state: RootState) => ({
    ...state.calculator,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    addOperation: (operation: string) => dispatch({type: '@@calculator/ADD_OPERATION', payload: operation}),
    calculate: () => dispatch({type: '@@calculator/CALCULATE_RESULT'}),
    clear: () => dispatch({type: '@@calculator/CLEAR'}),
})

export default connect(mapStateToProps, mapDispatchToProps)(Calculator);