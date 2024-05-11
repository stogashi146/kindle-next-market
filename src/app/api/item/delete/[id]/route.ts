import connectDB from "@/app/utils/database";
import { ItemModel } from "@/app/utils/schemaModels";
import { NextResponse } from "next/server";

export async function DELETE(_req, context) {
  try {
    await connectDB();
    const singleItem = await ItemModel.deleteOne({
      _id: context.params.id,
    });
    return NextResponse.json({
      message: "アイテム削除成功(シングル)",
      singleItem,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "アイテム削除失敗(シングル)" });
  }
}
