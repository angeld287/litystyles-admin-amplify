import { render } from '../../utils/test-utils';
import Home from './index';

test('Verify correct renderization of Home Component', () => {
    const { asFragment } = render(<Home />);
    expect(asFragment()).toMatchSnapshot();
})