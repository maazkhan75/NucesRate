import { NextResponse } from 'next/server'
import { createClient } from '@/utils/supabase/server'

export async function GET(request: Request) {
  const { searchParams, origin } = new URL(request.url)
  const code = searchParams.get('code')
  const next = searchParams.get('next') ?? '/'

  if (code) {
    const supabase = createClient()
    const { error } = await supabase.auth.exchangeCodeForSession(code)
    if (!error) {
      const { data: { user } } = await supabase.auth.getUser();

      if (user) {
        const email = user.email;

        const { data: existingStudent, error: fetchError } = await supabase
          .from('students')
          .select('stud_id')
          .eq('stud_email', email)
          .single();

        if (fetchError && fetchError.code !== 'PGRST116') {
          console.error('Error fetching student:', fetchError);
          return NextResponse.redirect(`${origin}/auth/error`);
        }

        if (!existingStudent) {
          const { error: insertError } = await supabase
            .from('students')
            .insert([{ stud_email: email }]); 

          if (insertError) {
            console.error('Error inserting student:', insertError);
            return NextResponse.redirect(`${origin}/auth/error`);
          }
        }
      }
  
      const forwardedHost = request.headers.get('x-forwarded-host')
      const isLocalEnv = process.env.NODE_ENV === 'development'
      if (isLocalEnv) {
        return NextResponse.redirect(`${origin}${next}`)
      } else if (forwardedHost) {
        return NextResponse.redirect(`https://${forwardedHost}${next}`)
      } else {
        return NextResponse.redirect(`${origin}${next}`)
      }
    }
  }

  return NextResponse.redirect(`${origin}/auth/auth-code-error`)
}