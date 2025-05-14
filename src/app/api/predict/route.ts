import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Example: Replace this with your ML model integration
    const { age, glucose, bloodPressure, insulin, bmi } = body;

    // Mock prediction logic
    const prediction = glucose > 120 ? 'High Risk of Diabetes' : 'Low Risk of Diabetes';

    return NextResponse.json({ prediction });
  } catch (error) {
    console.error('Error in prediction API:', error);
    return NextResponse.json({ error: 'Failed to predict diabetes' }, { status: 500 });
  }
}
