import { useState } from 'react';
import { services } from '../data'
import Title from './Title'
import Service from './Service'

const Services = () => {
  const [servicesData, setServicesData] = useState(services);
  function handleServicesDataChange (id) {
    const newdata = servicesData.filter((item)=> item.id !== id)
    setServicesData(newdata)
  }
  return (
    <section className='section services' id='services'>
      <Title title='our' subTitle='services' />

      <div className='section-center services-center'>
        {servicesData.map((service) => {
          return <Service {...service} key={service.id} item = {servicesData} onDelete={handleServicesDataChange}/>
          
          
        })}
      </div>
    </section>
  );
}
export default Services;