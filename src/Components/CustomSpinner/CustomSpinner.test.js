import { render } from '../../utils/test-utils';
import CustomSpinner from './index';

test('Verify correct renderization of CustomSpinner Component', () => {
    const { asFragment } = render(<CustomSpinner />);
    expect(asFragment()).toMatchSnapshot();
})