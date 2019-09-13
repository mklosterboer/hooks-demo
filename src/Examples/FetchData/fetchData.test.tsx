import React from 'react';
import ReactDOM, { unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { FetchDataExample } from './FetchData';

const FetchData = FetchDataExample.component;

const mockedFetch = jest.fn().mockImplementation(() =>
    Promise.resolve({
        ok: true,
        json: () => ([
            { id: "1234", title: "Post 1234", body: "This is body 1" },
            { id: "4321", title: "Post 4312", body: "This is body 1" }
        ])
    })
);

(global as any).fetch = mockedFetch;

let container = document.createElement('div');

beforeEach(async () => {
    document.body.appendChild(container);

    await act(async () => {
        ReactDOM.render(<FetchData />, container)
    });
});

afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = document.createElement('div')
});

it('attempts to call for data', () => {
    expect(mockedFetch).toHaveBeenCalled();
});

it("displays received data", () => {
    const posts = document.getElementsByClassName("post");    
    expect(posts.length).toBeGreaterThan(0);
});