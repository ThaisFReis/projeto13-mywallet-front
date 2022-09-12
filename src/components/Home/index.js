import axios from "axios";
import {useState, useContext, useEffect} from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { UserContext } from "src/Contexts/UserContext.js";


function Home(){
    const {user} = useContext(UserContext);
    const [transactions, setTransactions] = useState([]);
}

export default Home;