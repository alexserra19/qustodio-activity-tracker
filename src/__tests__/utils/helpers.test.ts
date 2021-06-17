import helpers from '../../utils/helpers';

afterEach(() => {
    jest.clearAllMocks();
});

describe('Helpers', () => {

    it('reduceText', async () => {
        const mocktest = "This is a test text"
        const mockResult = "This is a..."
        const data = helpers.reduceText(mocktest, 9)
        expect(data).toStrictEqual(mockResult)
    });

    it('handleNetworkError', async () => {
        jest.spyOn(window, 'alert').mockImplementation(() => {});
        helpers.handleNetworkError()
        expect(window.alert).toBeCalled()
    });
});
