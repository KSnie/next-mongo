import Category from "@/models/Category";

export async function GET() {
  const categories = await Category.findById(id)
  return Response.json(categories)
}

export async function DELETE(request, { params }) {
  const id = params.id;
  console.log({ id });
  return Response.json(await Category.findByIdAndDelete(id));
}
