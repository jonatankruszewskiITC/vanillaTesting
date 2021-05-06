import { fireEvent, getByText, screen } from '@testing-library/dom';
import '@testing-library/jest-dom/extend-expect'
import { JSDOM } from 'jsdom';
import fs from 'fs';
import path from 'path';

const html = fs.readFileSync(path.resolve(__dirname, 'index.html'), 'utf8');
let dom;
let container;

const wrappedPromise = (timeToDelay, fc) => new Promise((resolve) => setTimeout(() => {
    fc()
    resolve
}, timeToDelay));


describe('index.html', () => {
    // test('renders a heading element', async () => {
    // const options = {
    //     resources: 'usable',
    //     runScripts: 'dangerously',
    // };
    // const mountedDom = await (new JSDOM(html, options))
    // await setTimeout(async () => {
    //     console.log("ready to roll!");
    //     console.log(mountedDom.window.document.body.textContent.trim());
    //     dom = mountedDom;
    //     container = mountedDom.window.document.body;
    //     expect(container.querySelector('h1')).toBeNull()
    //     expect(getByText(container, 'Click Me')).toBeInTheDocument()
    // }, 1000)
    // expect.hasAssertions();


    // await JSDOM.fromFile('./index.html', options).then((mountedDom) => {
    //     console.log(mountedDom.window.document.body.textContent.trim());
    //     dom = mountedDom;
    //     container = mountedDom.window.document.body;
    // });


    // expect(getByText(container, '0')).toBeInTheDocument();

    // const dom = (new JSDOM(html, options)).window;
    // window.onModulesLoaded = () => {
    //     console.log("ready to roll!");
    //     console.log(dom.window.document.querySelector("body").textContent); // "Good Morning"
    //     container = dom.window.document.body;
    //     expect(container.querySelector('h1')).toBeNull()
    //     expect(getByText(container, 'Hello World')).toBeInTheDocument()
    // };
    // })


    test('Testing Vanilla JS', async (done) => {
        // the trick here is to run it from an URL. For this, I am using
        // Live server, but could be replaced by a nodeJS one.
        JSDOM.fromURL('http://127.0.0.1:5500/index.html', {
            runScripts: 'dangerously',
            resources: 'usable'
        })
            .then(async (dom) => {
                const code = () => {
                    expect(dom.window.document.title).toStrictEqual('Testing Vanilla'); //Document
                    const document = dom.window.document;
                    const button = document.getElementById('inputButton');
                    button.click();
                    expect(document.getElementById('counterDisplay')).toHaveTextContent('1')
                    done();
                }
                await wrappedPromise(400, code)
            });
    })
})