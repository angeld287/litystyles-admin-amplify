import { render } from '../../utils/test-utils';
import CustomModal from './index';

let _inputs = [];

beforeEach(() => {
    _inputs = [{ label: "Nombre", type: "text", readOnly: false, onChange: e => console.log('changed'), value: 'name' }]
});

test('Verify correct renderization of CustomModal Component', () => {
    const { asFragment } = render(<CustomModal visible={true} inputs={_inputs} />);
    expect(asFragment()).toMatchSnapshot();
})