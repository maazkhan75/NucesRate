import { AddReviewButton } from '@/components/professor_review/add_review_button';
import ProfessorInfo from '@/components/professor_review/professor_info';
import Reviews from '@/components/professor_review/reviews';
import { createClient } from '@/utils/supabase/server';
import { FaStar } from 'react-icons/fa';


type ProfessorType = {
  prof_name: string,
  dept_name: string,
  img_src: string
};


export default async function ProfessorProfile({params} : {params: { slug: string }}) {
  const id = Number(params.slug);

  const supabase = createClient();

  const { data, error } = await supabase.rpc('get_professor_details_by_id', {
    input_prof_id: id
  });

  if (error) {
    console.log(error);
    throw Error('Error Fetching Professor Details!');
  }

  const professor = data[0] as ProfessorType;

  async function getProfAvgRating() {
    const { data, error } = await supabase.rpc('get_professor_average_rating', {
      p_prof_id: id
    })
    if (error) {
      console.log(error);
      throw Error('Error Fetching Avg Rating!');
    }

    return data as number;
  }

  const avg_rating = await getProfAvgRating();

  return (
    <div className="min-h-screen bg-black text-foreground p-6">
      <div className="max-w-4xl mx-auto space-y-6">
        <ProfessorInfo name={professor.prof_name} dept={professor.dept_name} img={professor.img_src} />

        <div className="flex justify-around items-center flex-wrap gap-2">
          <div className="flex items-center space-x-1 bg-white p-4 rounded-full hover:bg-white/90">
            {Array.from({ length: Math.floor(avg_rating) }).map((_, index) => (
              <div className="scale-110">
                <FaStar key={index} style={{ margin: '0.05rem' }} color="gold" />
              </div>
            ))}
            {Array.from({ length: 5 - Math.floor(avg_rating) }).map((_, index) => (
              <div className="scale-110">
                <FaStar key={index} style={{ margin: '0.05rem' }} color="gray" />
              </div>
            ))}
          </div>
          <AddReviewButton prof_id={id}/>
        </div>

        <Reviews prof_id={id} />
      </div>
    </div>
  )
}