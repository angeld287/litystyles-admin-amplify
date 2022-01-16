import { render, waitFor } from '../../utils/test-utils';
import HeaderLinks from './index';

test('Verify correct renderization of HeaderLinks Component', async () => {
    const { asFragment } = render(<HeaderLinks />);
    await waitFor(() => {
        expect(asFragment()).toMatchSnapshot();
    });
})