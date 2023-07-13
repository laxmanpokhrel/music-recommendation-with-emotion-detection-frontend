import { useContext } from 'react';
import { Context } from '../context/auth.context';

const useUser = () => useContext(Context);

export default useUser;
