import {FC, ReactNode} from 'react';

const Layout: FC<{children: ReactNode}> = ({children}) => {
    return (
        <>
        <div>
            NavBar
        </div>
        {children}
        <div>
            Footer
        </div>
        </>
    )
}

export default Layout;