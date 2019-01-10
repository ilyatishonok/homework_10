import { connect } from 'react-redux';
import Calculator from '../../components/Calculator';
import { RootState } from '../../reducers';
import { Dispatch } from 'redux';
import { addOperation, calculateResult, clear } from '../../actions/calculatorActions';

const mapStateToProps = (state: RootState) => ({
    ...state.calculator,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    addOperation: (operation: string) => dispatch(addOperation(operation)),
    calculate: () => dispatch(calculateResult()),
    clear: () => dispatch(clear()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Calculator);