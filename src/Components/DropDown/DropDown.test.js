import { render } from '../../utils/test-utils';
import DropDown from './index';

test('Verify correct renderization of DropDown Component', () => {
    const { asFragment } = render(<DropDown />);
    expect(asFragment()).toMatchSnapshot();
})