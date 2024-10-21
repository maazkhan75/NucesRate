import { createClient } from "@/utils/supabase/server";

export const GetPdetails=async function(){
    const supabase=createClient()
    const{data,erorr}=await supabase.auth.getUser()
    console.log(data)
}

GetPdetails()