import supabase from "@/lib/supabase";
import { NextResponse } from "next/server";

// GET tasks
export async function GET() {
  const { data, error } = await supabase
    .from("tasks")
    .select("*")
    .order("createdat", { ascending: false });

  if (error) {
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }

  return NextResponse.json(data);
}

// Create task
export async function POST(request) {

  const body = await request.json();

  const { title, description, status, duedate } = body;

  const { data, error } = await supabase
    .from("tasks")
    .insert([
      {
        title,
        description,
        status,
        duedate
      }
    ])
    .select();

  if (error) {
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }

  return NextResponse.json(data);
}