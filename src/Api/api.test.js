import { fetchItems, addItem, deleteItem } from "./api";
import axios from "axios";

// Mock axios module
jest.mock('axios');

describe('Expense Tracker Tests', () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    test('fetchItems success', async () => {
        // Mock successful API response
        const mockResponse = { data: { /* mocked item data */ } };
        axios.get.mockResolvedValue(mockResponse);

        // Dispatch fetchItems action
        await fetchItems()(dispatch);

        // Assert that the correct actions are dispatched
        expect(dispatch).toHaveBeenCalledWith({ type: 'fetchItems/pending' });
        expect(dispatch).toHaveBeenCalledWith({ type: 'fetchItems/fulfilled', payload: mockResponse.data });
    });

    test('fetchItems failure', async () => {
        // Mock API error response
        const mockError = new Error('Failed to fetch items');
        axios.get.mockRejectedValue(mockError);

        // Dispatch fetchItems action
        await fetchItems()(dispatch);

        // Assert that the correct actions are dispatched
        expect(dispatch).toHaveBeenCalledWith({ type: 'fetchItems/pending' });
        expect(dispatch).toHaveBeenCalledWith({ type: 'fetchItems/rejected', error: mockError });
    });

    test('addItem success without ID', async () => {
        // Mock successful API response
        const mockResponse = { data: { name: 'mocked-id' } };
        axios.post.mockResolvedValue(mockResponse);

        // Dispatch addItem action
        await addItem({ item: { /* mocked item data */ }, email: 'mocked-email' })(dispatch);

        // Assert that the correct actions are dispatched
        expect(dispatch).toHaveBeenCalledWith({ type: 'addItem/pending' });
        expect(dispatch).toHaveBeenCalledWith({ type: 'addItem/fulfilled', payload: [mockResponse.data.name, { /* mocked item data */ }] });
    });

    test('addItem success with ID', async () => {
        // Mock successful API response
        const mockResponse = { data: { /* updated item data */ } };
        axios.put.mockResolvedValue(mockResponse);

        // Dispatch addItem action with an existing item ID
        await addItem({ item: { /* mocked item data */ }, email: 'mocked-email', id: 'mocked-id' })(dispatch);

        // Assert that the correct actions are dispatched
        expect(dispatch).toHaveBeenCalledWith({ type: 'addItem/pending' });
        expect(dispatch).toHaveBeenCalledWith({ type: 'addItem/fulfilled', payload: ['mocked-id', mockResponse.data] });
    });

    test('addItem failure', async () => {
        // Mock API error response
        const mockError = new Error('Failed to add item');
        axios.post.mockRejectedValue(mockError);

        // Dispatch addItem action
        await addItem({ item: { /* mocked item data */ }, email: 'mocked-email' })(dispatch);

        // Assert that the correct actions are dispatched
        expect(dispatch).toHaveBeenCalledWith({ type: 'addItem/pending' });
        expect(dispatch).toHaveBeenCalledWith({ type: 'addItem/rejected', error: mockError });
    });

    test('deleteItem success', async () => {
        // Dispatch deleteItem action
        await deleteItem({ id: 'mocked-id', email: 'mocked-email' })(dispatch);

        // Assert that the correct actions are dispatched
        expect(dispatch).toHaveBeenCalledWith({ type: 'deleteItem/pending' });
        expect(dispatch).toHaveBeenCalledWith({ type: 'deleteItem/fulfilled', payload: 'mocked-id' });
    });

    test('deleteItem failure', async () => {
        // Mock API error response
        const mockError = new Error('Failed to delete item');
        axios.delete.mockRejectedValue(mockError);

        // Dispatch deleteItem action
        await deleteItem({ id: 'mocked-id', email: 'mocked-email' })(dispatch);

        // Assert that the correct actions are dispatched
        expect(dispatch).toHaveBeenCalledWith({ type: 'deleteItem/pending' });
        expect(dispatch).toHaveBeenCalledWith({ type: 'deleteItem/rejected', error: mockError });
    });

    // Add more test cases as needed
});
