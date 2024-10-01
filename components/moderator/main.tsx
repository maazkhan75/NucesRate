import './main.css';
import Sidebar from '@/components/moderator/sidebar'
const main=()=>{
    return (
        <div className="layout">
          <Sidebar/>
          <div className="container">
            <div className="Card">
              <h1>LHR</h1>
              <h2><a href='#'>Reviews Pending:500</a></h2>
              <h2> <a href='#'>Professor Request:10</a></h2>
              <h2><a href='#'>Courses Request:10</a></h2>
            </div>
          </div>
        </div>
      );
}

export default main;