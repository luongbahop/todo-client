import reducer from '../todo'
import { todo as types } from '../../types'

describe('Todo reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual(
            {
                action: undefined,
                data: [],
                isFetch: false,
                save: {
                    editable: false,
                    result: '',
                    data: {}
                },
                isSave: false,
                delete: {
                    ID: null,
                    data: {}
                },
                isDelete: false,
                error: false
            }
        )
    })
    //FETCH=================================>
    it('should handle TODO_FETCH', () => {
        expect(
            reducer({}, {
                type: types.TODO_FETCH,
            })
        ).toEqual(
            {
                isFetch: true,
                action: types.TODO_FETCH,
            }
            )

    });
    it('should handle TODO_FETCH_SUCCESS', () => {
        let data = {
            limit: 10,
            data: [],
            total: 0
        }
        expect(
            reducer({}, {
                type: types.TODO_FETCH_SUCCESS,
                data
            })
        ).toEqual(
            {
                isFetch: false,
                data,
                action: types.TODO_FETCH_SUCCESS,
            }
            )

    });
    it('should handle TODO_FETCH_FAILURE', () => {
        let error = "Err! Can not connect database"
        expect(
            reducer({}, {
                type: types.TODO_FETCH_FAILURE,
                error
            })
        ).toEqual(
            {
                isFetch: false,
                action: types.TODO_FETCH_FAILURE,
                error
            }
            )

    });
    //SAVE=================================>
    it('should handle TODO_SAVE', () => {
        expect(
            reducer({}, {
                type: types.TODO_SAVE,
            })
        ).toEqual({
            isSave: true,
            action: types.TODO_SAVE,
        })
    });
    it('should handle TODO_SAVE_SUCCESS', () => {
        const data = {
            title: 'todo 01',
            description: '1234'
        };
        const editable = false;
        expect(
            reducer({}, {
                type: types.TODO_SAVE_SUCCESS,
                method: "POST",
                data,
                editable
            })
        ).toEqual({
            isSave: false,
            action: types.TODO_SAVE_SUCCESS,
            save: {
                data,
                editable,
                result: 'success'
            }
        })
    });
    it('should handle TODO_SAVE_FAILURE', () => {
        let error = "Err! Can not connect database"
        const data = {
            title: 'todo 01',
            description: '1234'
        };
        const editable = false;
        expect(
            reducer({}, {
                type: types.TODO_SAVE_FAILURE,
                error,
                editable
            })
        ).toEqual({
            isSave: false,
            action: types.TODO_SAVE_FAILURE,
            save: {
                data: [],
                editable,
                result: 'fail'
            },
            error
        })
    });
    //DELETE=================================>
    it('should handle TODO_DELETE', () => {
        expect(
            reducer({}, {
                type: types.TODO_DELETE,
            })
        ).toEqual({
            isDelete: true,
            action: types.TODO_DELETE,
        })

    });
    it('should handle TODO_DELETE_SUCCESS', () => {
        const data = {
            title: 'todo 01',
            description: '1234'
        };
        const ID = "1000999";
        expect(
            reducer({}, {
                type: types.TODO_DELETE_SUCCESS,
                ID
            })
        ).toEqual({
            isDelete: false,
            delete: {
                ID,
            },
            action: types.TODO_DELETE_SUCCESS,
        })

    });
    it('should handle TODO_DELETE_FAILURE', () => {
        let error = "Err! Can not connect database";
        const data = {
            title: 'todo 01',
            description: '1234'
        };
        const ID = "1000999";

        expect(
            reducer({}, {
                type: types.TODO_DELETE_FAILURE,
                error,
                ID
            })
        ).toEqual({
            isDelete: false,
            action: types.TODO_DELETE_FAILURE,
            error,
            delete: {
                data: [],
                ID,
            },
        })
    });
})