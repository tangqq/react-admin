export default [
    {path:'/',component: 'Home', routes: [
            {path: "/login", component: 'Login'},
            {path: "/p1", component: 'Page1',stopActive:()=>{
                        return new Promise((resolve,reject)=>{
                            setTimeout(()=>{
                                resolve(false)
                            },20)
                        })
                }},
            {path: "/p2", component: 'Page2'},
            {path: "/p3", component: 'Page3'},
            {path: "/p4", component: 'Page4'},
            {path: "/p5", component: 'Page5'},
            {path: "/p6", component: 'Page6'},
            {path: "/p7", component: 'Page7'},
            {path: "/p8", component: 'Page8'},
        ]
    },


]