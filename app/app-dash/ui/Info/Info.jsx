import Infocard from './Infocard/Infocard'

import { GetProfileDetails } from '@/app/actions';
const Info =() => {  
    return (  
        <div className="p-4">  
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">  
          <Infocard title={"Name"} info={"Muhammad Hassan"} />  
          <Infocard title={"Batch"} info={"2022"} />  
          <Infocard title={"Department"} info={"CS"} />  
          <Infocard title={"Total Reviews"} info={50} />  
          <Infocard title={"Pending reviews"} info={0} />  

        </div>  
      </div>  
    );  
};
export default Info;