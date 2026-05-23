import supabase from "@/lib/supabase";
import { NextResponse } from "next/server";


// UPDATE
export async function PUT(request, { params }) {

  const body = await request.json();

  const { id } = await params;

  const { title, description, status, duedate } = body;

  const { data, error } = await supabase
    .from("tasks")
    .update({
      title,
      description,
      status,
      due_date: duedate
    })
    .eq("id", id)
    .select();

  if(error){

    return NextResponse.json(
      {error:error.message},
      {status:500}
    );

  }

  return NextResponse.json(data);

}


// DELETE
export async function DELETE(request,{params}) {

  const { id } = await params;

  const { error } = await supabase
    .from("tasks")
    .delete()
    .eq("id", id);

  if(error){

    return NextResponse.json(
      {error:error.message},
      {status:500}
    );

  }

  return NextResponse.json({
    message:"Task deleted"
  });

}