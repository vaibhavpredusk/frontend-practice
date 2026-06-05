import { useState } from "react";
const [role, setRole] = useState("all");

<select
  value={role}
  onChange={(e) => setRole(e.target.value)}
>
  <option value="all">All</option>
  <option value="admin">Admin</option>
  <option value="annotator">Annotator</option>
</select>