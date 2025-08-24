import { NextResponse } from "next/server";

let products = []; // temporary, replace with DB later

export async function POST(req) {
    const data = await req.json();
    products.push({ id: Date.now(), ...data });
    return NextResponse.json({ success: true, product: data }, { status: 201 });
}

export async function GET() {
    return NextResponse.json(products);
}
