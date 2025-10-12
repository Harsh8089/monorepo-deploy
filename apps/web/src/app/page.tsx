import client from "@repo/db";

export default async function Home() {
  const users = await client.user.findMany({});

  return (
    <>
      {users.length && users.map(user =>
        <p key={user.id}>
          {user.username}
        </p>)}
    </>
  );
}