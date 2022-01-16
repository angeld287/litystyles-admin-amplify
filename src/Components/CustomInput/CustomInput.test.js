import { render } from '../../utils/test-utils';
import CustomInput from './index';

test('Verify correct renderization of CustomInput Component', () => {
    const { asFragment } = render(<CustomInput />);
    expect(asFragment()).toMatchSnapshot();
})