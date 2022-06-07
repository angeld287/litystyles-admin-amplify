import { render } from '../../utils/test-utils';
import CustomInputFile from './index';

test('Verify correct renderization of CustomInputFile Component', () => {
    const { asFragment } = render(<CustomInputFile />);
    expect(asFragment()).toMatchSnapshot();
})