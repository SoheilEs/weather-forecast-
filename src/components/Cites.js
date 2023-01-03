import React, { useEffect,useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCites} from '../Redux/cites/citesAction';
import Forcast from './Forcast';
import Weather from './Weather';




const Cites = () => {
    const [search, setSearch] = useState("")
    const citesData = useSelector(state => state.citesState)
    const [load, setLoad] = useState(false)

    const dispatch = useDispatch()
    useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
          
          dispatch(fetchCites(search))
          
        }, 1000)
    setLoad(false)
        return () => clearTimeout(delayDebounceFn)
      }, [search,dispatch])
     
    return (
        <div className='container'>
      
            <div className='formButtons'>
              <input className={citesData.loading ? 'loading':null} type="text" value= {search} placeholder="Search City" onChange={e => setSearch(e.target.value)}/>
              <button onClick={()=>{
                setLoad(true)
                }}>Get</button>
            </div>   
            <ul className="list" >
            {citesData.cites.data && citesData.cites.data.filter(item => {
              const searchTerm = search.toLowerCase();
              const fullName = item.city.toLowerCase();
              return (
                searchTerm &&
                fullName.startsWith(searchTerm) &&
                fullName !== searchTerm
              );
              })
             
              .map( item => (
                <li key={item.id} onClick={() => setSearch(item.city)} className='list-item'>{item.city}</li>
              ))}
              </ul>
             { load && <Weather data = {citesData.cites.data[0]} /> }
             {load && <Forcast />}
        </div>
    );
};

export default Cites;