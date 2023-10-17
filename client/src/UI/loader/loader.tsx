import {FC} from 'react';
import cl from './loader.module.css'

const Loader:FC = () => {
    return (
        <div className={cl.center}>
            <span className={cl.loader}></span>
        </div>
    );
};

export default Loader;