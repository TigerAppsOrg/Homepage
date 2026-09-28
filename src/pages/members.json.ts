import { currentMembers } from "../utils/members";

export function GET() {
    const members = currentMembers.map(member => ({
        name: member.name,
        headshot: member.headshot.src
    }));
    return new Response(JSON.stringify(members), {
        headers: { "Content-Type": "application/json; charset=utf-8" }
    });
}
