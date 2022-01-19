import { render } from '../../utils/test-utils';
import DropDown from './index';

test('Verify correct renderization of DropDown Component', () => {
    const items = [];
    const { asFragment } = render(<DropDown items={items} />);
    expect(asFragment()).toMatchSnapshot();
})