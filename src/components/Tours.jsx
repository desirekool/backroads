import Title from "./Title";
import Tour from "./Tour";
import {tours} from "../data"

function Tours(params) {
    return (
        <section className="section" id="tours">
        {
            <Title title={`featured`} subTitle={`tours`} />
        }
          
        <div className="section-center featured-center">
        {
            tours.map(tour => <Tour {...tour} key={tour.id} />)
        }          
        </div>
      </section>
    );
};

export default Tours;