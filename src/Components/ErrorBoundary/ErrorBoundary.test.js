import { render } from '../../utils/test-utils';
import ErrorBoundary from './index';

test('Verify correct renderization of ErrorBoundary Component', () => {
    const { asFragment } = render(<ErrorBoundary><h1>testing Error Boundary</h1></ErrorBoundary>);
    expect(asFragment()).toMatchSnapshot();
})