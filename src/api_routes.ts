
const handleRoutes = () => {

    // @ts-ignore
    const __routes__: any = import.meta.globEager( '/api/**/[a-z[]*.ts' )

    const routes = Object.keys(__routes__).map((route) => {
        const path = route
            .replace(/index|\.ts$/g, '')
            .replace(/\[\.{3}.+\]/, '*')
            .replace(/\[(.+)\]/, ':$1')
        
        return { path, component: __routes__[route].default }
    })
    // this is a comment
    console.log( routes )  
    return routes
}

export default handleRoutes