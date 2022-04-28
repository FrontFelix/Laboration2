import Button from "@mui/material/Button";

function AdminPage() {
  return <div className="main-div">
    <h1>THIS SITE IS UNDER CONSTRUCTION</h1>
    <h1>Here's a list of all the KWITTER users.</h1>
      <div className="post-container">
        <div className="test-post">
          <h1>Christian</h1>
            <label htmlFor="role">Role:</label>
          <select name="role" id="role">
            <option value="member">Member</option>
            <option value="admin">Admin</option>
          </select>
          <Button variant="contained">Delete user</Button>
        </div>
        <div className="test-post">
          <h1>Adam</h1>
            <label htmlFor="role">Role:</label>
          <select name="role" id="role">
            <option value="member">Member</option>
            <option value="admin">Admin</option>
          </select>
          <Button variant="contained">Delete user</Button>        
        </div>
        <div className="test-post">
          <h1>Felix</h1>
            <label htmlFor="role">Role:</label>
          <select name="role" id="role">
            <option value="admin">Admin</option>
            <option value="member">Member</option>
          </select>
          <Button variant="contained">Delete user</Button>        
        </div>
        <div className="test-post">
          <h1>David</h1>
            <label htmlFor="role">Role:</label>
          <select name="role" id="role">
            <option value="admin">Admin</option>
            <option value="member">Member</option>
          </select>
          <Button variant="contained">Delete user</Button>       
      </div>
    </div>
  </div>;
}

export default AdminPage;