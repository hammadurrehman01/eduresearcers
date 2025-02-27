import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
 
if(process.env.NODE_ENV === "development"){
  const clientIp = "39.51.106.66"
  return NextResponse.json({ ip: clientIp });
} else if (process.env.NODE_ENV === "production"){
  const forwardedFor = req.headers.get('x-forwarded-for');
  const clientIp = forwardedFor ? forwardedFor.split(',')[0] : req.ip || 'Unknown IP';
  return NextResponse.json({ ip: clientIp });
}

}