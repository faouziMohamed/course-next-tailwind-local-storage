export async function RandomUsers() {
  const result = await fetch("https://randomuser.me/api/?results=5");

  if (!result.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await result.json();

  // read the package.json file with fs module

  return (
    <div className='p-4'>
      <h1 className='text-2xl font-bold mb-4'>Random Users</h1>
      <ul>
        {data.results.map((user: any) => (
          <li key={user.login.uuid}>
            {user.name.first} {user.name.last}
          </li>
        ))}
      </ul>
    </div>
  );
}

const readFIle = async (filePath: string) => {
  const fs = require("fs").promises;
  try {
    const data = await fs.readFile(filePath, "utf8");
    return data;
  } catch (error) {
    console.error("Error reading file:", error);
    return null;
  }
};
