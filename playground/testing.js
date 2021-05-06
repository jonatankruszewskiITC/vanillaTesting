
test('renders a heading element', async () => {
    const options = {
        resources: 'usable',
        runScripts: 'dangerously',
    };
    const mountedDom = await (new JSDOM(html, options))
    await setTimeout(async () => {
        console.log("ready to roll!");
        console.log(mountedDom.window.document.body.textContent.trim());
        dom = mountedDom;
        container = mountedDom.window.document.body;
        expect(container.querySelector('h1')).toBeNull()
        expect(getByText(container, 'Click Me')).toBeInTheDocument()
    }, 1000)
    expect.hasAssertions();


    await JSDOM.fromFile('./index.html', options).then((mountedDom) => {
        console.log(mountedDom.window.document.body.textContent.trim());
        dom = mountedDom;
        container = mountedDom.window.document.body;
    });


    expect(getByText(container, '0')).toBeInTheDocument();

    const dom = (new JSDOM(html, options)).window;
    window.onModulesLoaded = () => {
        console.log("ready to roll!");
        console.log(dom.window.document.querySelector("body").textContent); // "Good Morning"
        container = dom.window.document.body;
        expect(container.querySelector('h1')).toBeNull()
        expect(getByText(container, 'Hello World')).toBeInTheDocument()
    };
})
